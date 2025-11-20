// app/checkout/page.jsx
"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' | 'paypal' | 'wallet'
  const [walletProvider, setWalletProvider] = useState("bkash"); // 'bkash' | 'rocket' | 'nagad'
  const [email, setEmail] = useState("");
  const [promo, setPromo] = useState("");
  const [agree, setAgree] = useState(true);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [success, setSuccess] = useState(null);

  const [card, setCard] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  // Demo course data (replace with real data)
  const course = {
    title: "Intro to Classical Arabic",
    instructor: "Dr. Ahmad Al-Hana",
    price: 29.99,
    currency: "USD",
    thumbnail: "/images/course-thumb.jpg",
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem("nahdah_checkout_email");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  function formatCardNumber(v) {
    return v
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  }

  function handleCardChange(e) {
    const { name, value } = e.target;
    let val = value;
    if (name === "number") val = formatCardNumber(value);
    setCard((p) => ({ ...p, [name]: val }));
  }

  function applyPromo() {
    if (!promo) return alert("Enter a promo code to apply");
    // TODO: verify on backend; demo discount -5
    alert(`Promo '${promo}' applied (demo).`);
  }

  // ---------------------------
  // sendInvoice helper (client -> calls server route)
  // ---------------------------
  async function sendInvoice(order) {
    // order: { orderId, email, name, items, total, currency, date }
    try {
      const res = await fetch("/api/invoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send invoice");
      return data;
    } catch (err) {
      console.error("sendInvoice error:", err);
      throw err;
    }
  }

  // ---------------------------
  // handle submit (simulate payment then call sendInvoice)
  // ---------------------------
  async function handleSubmit(e) {
    e.preventDefault();
    if (!agree) return alert("Please accept terms.");
    setLoading(true);

    // simulate payment processing (replace with real provider flow)
    setTimeout(async () => {
      try {
        setLoading(false);

        // create order id and success UI state
        const id =
          "ORD-" + Math.random().toString(36).slice(2, 9).toUpperCase();
        setSuccess({
          id,
          date: new Date().toISOString(),
          method: paymentMethod,
        });

        // build order payload
        const orderPayload = {
          orderId: id,
          email: email || "student@example.com",
          name: card?.name || "Test User",
          items: [
            {
              title: course.title,
              qty: 1,
              price: Number((course.price - (promo ? 5 : 0)).toFixed(2)),
            },
          ],
          total: Number((course.price - (promo ? 5 : 0)).toFixed(2)),
          currency: course.currency,
          date: new Date().toISOString(),
        };

        // try to send invoice to server
        try {
          const resp = await sendInvoice(orderPayload);
          // success path
          // resp may include invoiceUrl or success message
          alert("Payment processed and invoice sent to your email.");
          console.log("Invoice response:", resp);
        } catch (invoiceErr) {
          // invoice sending failed
          console.warn("Invoice send failed:", invoiceErr);
          alert(
            "Payment processed but failed to send invoice. We'll retry or contact support."
          );
        }

        // persist email locally for convenience
        localStorage.setItem("nahdah_checkout_email", email);
      } catch (err) {
        setLoading(false);
        console.error("Checkout flow error:", err);
        alert("An unexpected error occurred during checkout.");
      }
    }, 1100);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#d5f2f8] dark:bg-[#07121a]">
      <style>{`
        :root{
          --nah-50:#50effbfc;
          --nah-100:#d5f2f8;
          --nah-200:#b1e5f0;
          --nah-300:#7bd0e5;
          --nah-400:#3eb2d2;
          --nah-500:#2295b8;
          --nah-600:#1f789b;
          --nah-700:#206380; /* primary */
          --nah-800:#225168;
          --nah-900:#204459;
          --nah-950:#102b3c;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main */}
          <main className="lg:col-span-2">
            <div className="bg-white dark:bg-[#0b1720] rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[var(--nah-700)] dark:text-[var(--nah-100)]">
                      Secure checkout
                    </h1>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-prose">
                      You are purchasing <strong>{course.title}</strong> by{" "}
                      {course.instructor}. Secure payment and instant access
                      after purchase.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-xs basis-1/2 px-3 py-1 rounded-full bg-[var(--nah-100)] text-[var(--nah-700)] font-semibold">
                      Step 2 of 2
                    </div>
                    <div className="text-sm  text-slate-500 dark:text-slate-400">
                      Payment & confirmation
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                  {/* Contact + promo */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                      />
                    </label>

                    <label className="block">
                      <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Promo code (optional)
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promo}
                          onChange={(e) => setPromo(e.target.value)}
                          placeholder="SUMMER10"
                          className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                        />
                        <button
                          type="button"
                          onClick={applyPromo}
                          className="px-4 py-2 rounded-xl bg-[var(--nah-700)] text-white font-semibold hover:bg-[var(--nah-600)] transition"
                        >
                          Apply
                        </button>
                      </div>
                    </label>
                  </div>

                  {/* Payment selection */}
                  <fieldset className="rounded-xl border border-slate-100 dark:border-slate-800 p-3 sm:p-4">
                    <legend className="sr-only">Payment method</legend>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm">
                      <label
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
                          paymentMethod === "card"
                            ? "bg-[var(--nah-50)] ring-1 ring-[var(--nah-300)]"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        <input
                          aria-label="Card payment"
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="accent-[var(--nah-700)]"
                        />
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          Card
                        </span>
                      </label>

                      <label
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
                          paymentMethod === "paypal"
                            ? "bg-[var(--nah-50)] ring-1 ring-[var(--nah-300)]"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        <input
                          aria-label="PayPal"
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "paypal"}
                          onChange={() => setPaymentMethod("paypal")}
                          className="accent-[var(--nah-700)]"
                        />
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          PayPal
                        </span>
                      </label>

                      <label
                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
                          paymentMethod === "wallet"
                            ? "bg-[var(--nah-50)] ring-1 ring-[var(--nah-300)]"
                            : "hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        <input
                          aria-label="Mobile wallet"
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "wallet"}
                          onChange={() => setPaymentMethod("wallet")}
                          className="accent-[var(--nah-700)]"
                        />
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          Mobile Wallet (bKash / Rocket / Nagad)
                        </span>
                      </label>
                    </div>

                    {/* Payment panels */}
                    <div className="mt-4">
                      {/* CARD */}
                      {paymentMethod === "card" && (
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1 block">
                              Name on card
                            </label>
                            <input
                              name="name"
                              value={card.name}
                              onChange={handleCardChange}
                              placeholder="Full name"
                              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                            />
                          </div>

                          <div>
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1 block">
                              Card number
                            </label>
                            <input
                              name="number"
                              value={card.number}
                              onChange={handleCardChange}
                              inputMode="numeric"
                              maxLength={23}
                              placeholder="1234 5678 9012 3456"
                              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1 block">
                                Expiry
                              </label>
                              <input
                                name="expiry"
                                value={card.expiry}
                                onChange={handleCardChange}
                                placeholder="MM/YY"
                                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1 block">
                                CVC
                              </label>
                              <input
                                name="cvc"
                                value={card.cvc}
                                onChange={handleCardChange}
                                maxLength={4}
                                inputMode="numeric"
                                placeholder="123"
                                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                              />
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                            <label className="inline-flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={saved}
                                onChange={() => setSaved(!saved)}
                                className="accent-[var(--nah-700)]"
                              />
                              <span>Save card for future purchases</span>
                            </label>
                            <button type="button" className="text-xs underline">
                              Why save?
                            </button>
                          </div>

                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            For production integrate Stripe Elements or a
                            PCI-compliant card widget — do not send card data
                            directly to your server.
                          </div>
                        </div>
                      )}

                      {/* PAYPAL */}
                      {paymentMethod === "paypal" && (
                        <div className="p-4 rounded-lg bg-[var(--nah-50)] border border-[var(--nah-200)] text-sm text-slate-700 dark:text-slate-100">
                          On submit you'll be redirected to PayPal (demo). In
                          production, use PayPal JS SDK to create an order and
                          capture it client-side or server-side.
                        </div>
                      )}

                      {/* WALLET */}
                      {paymentMethod === "wallet" && (
                        <div className="grid grid-cols-1 gap-3">
                          <div>
                            <div className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-2">
                              Choose wallet
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              <button
                                type="button"
                                onClick={() => setWalletProvider("bkash")}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                  walletProvider === "bkash"
                                    ? "bg-[var(--nah-700)] text-white"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                                }`}
                              >
                                bKash
                              </button>
                              <button
                                type="button"
                                onClick={() => setWalletProvider("rocket")}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                  walletProvider === "rocket"
                                    ? "bg-[var(--nah-700)] text-white"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                                }`}
                              >
                                Rocket
                              </button>
                              <button
                                type="button"
                                onClick={() => setWalletProvider("nagad")}
                                className={`px-3 py-2 rounded-lg text-sm font-medium ${
                                  walletProvider === "nagad"
                                    ? "bg-[var(--nah-700)] text-white"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                                }`}
                              >
                                Nagad
                              </button>
                            </div>
                          </div>

                          {/* Wallet UI */}
                          <div className="p-4 rounded-lg border border-slate-100 dark:border-slate-800 bg-white dark:bg-transparent">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-lg bg-[var(--nah-100)] flex items-center justify-center text-[var(--nah-700)] font-semibold">
                                {walletProvider === "bkash"
                                  ? "bK"
                                  : walletProvider === "rocket"
                                  ? "R"
                                  : "N"}
                              </div>
                              <div>
                                <div className="text-sm font-medium dark:text-slate-200">
                                  {walletProvider === "bkash"
                                    ? "bKash"
                                    : walletProvider === "rocket"
                                    ? "Rocket"
                                    : "Nagad"}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">
                                  Mobile wallet payment — follow the on-screen
                                  instructions after submit.
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <label>
                                <div className="text-xs text-slate-600 dark:text-slate-300 mb-1">
                                  Phone number
                                </div>
                                <input
                                  type="tel"
                                  placeholder="+8801XXXXXXXXX"
                                  className="w-full rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-transparent focus:ring-2 focus:ring-[var(--nah-300)] transition"
                                />
                              </label>

                              <div>
                                <div className="text-xs text-slate-600 dark:text-slate-300 mb-1">
                                  Amount
                                </div>
                                <div className="rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-transparent">
                                  <div className="text-sm font-semibold">
                                    {course.currency} {course.price.toFixed(2)}
                                  </div>
                                  <div className="text-xs text-slate-500 dark:text-slate-400">
                                    You will receive a confirmation prompt on
                                    your mobile wallet app.
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                              In production you should call your backend to
                              create a payment session / request for the
                              selected wallet. The backend will interact with
                              the wallet provider's API and return a QR, payment
                              request ID, or instructions.
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </fieldset>

                  {/* Terms + total area */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <label className="inline-flex items-center gap-3">
                      <input
                        aria-label="Agree terms"
                        type="checkbox"
                        checked={agree}
                        onChange={() => setAgree((s) => !s)}
                        className="accent-[var(--nah-700)]"
                      />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        I agree to the{" "}
                        <a className="underline" href="#">
                          terms
                        </a>{" "}
                        and{" "}
                        <a className="underline" href="#">
                          privacy policy
                        </a>
                      </span>
                    </label>

                    <div className="flex items-center justify-center w-full sm:w-1/2 gap-3 border-2 px-4 py-2 rounded-2xl border-[var(--nah-500)]">
                      <div className="text-right">
                        <div className="text-lg font-bold text-[var(--nah-700)] dark:text-[var(--nah-100)]">
                          <span>Total</span> $ {course.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pay Now Button (placed inside form so it submits) */}
                  <div />
                </form>

                {/* Pay Now Button (outside the form to keep layout consistent) */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="cursor-pointer flex w-full mt-5 items-center justify-center gap-3 px-5 py-3 rounded-xl bg-[var(--nah-700)] text-white font-semibold shadow hover:bg-[var(--nah-600)] transition disabled:opacity-60"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="white"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 8v8m4-4H8"
                      />
                    </svg>
                  )}
                  <span>
                    {loading
                      ? "Processing…"
                      : paymentMethod === "card"
                      ? `Pay now  ($ ${course.price.toFixed(2)})`
                      : paymentMethod === "paypal"
                      ? "Continue to PayPal"
                      : `Pay with ${
                          walletProvider === "bkash"
                            ? "bKash"
                            : walletProvider === "rocket"
                            ? "Rocket"
                            : "Nagad"
                        }`}
                  </span>
                </button>

                <div className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                  Payments processed by your selected provider. This demo never
                  stores real card numbers — integrate PCI-compliant SDKs for
                  production.
                </div>

                {success && (
                  <div className="mt-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-200">
                    <div className="font-semibold">
                      Payment complete — {success.id}
                    </div>
                    <div className="text-sm">
                      A receipt has been sent to {email || "your email"}.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="sticky top-6">
            <div className="bg-white dark:bg-[#07121a] rounded-2xl shadow-md p-5 w-full">
              <div className="flex items-center gap-3">
                <div className="w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium dark:text-slate-100">
                    {course.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    by {course.instructor}
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>
                    {course.currency} {course.price.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300 mt-2">
                  <span>Discount</span>
                  <span className="text-red-600 dark:text-red-400">
                    {promo
                      ? `-${course.currency}5.00`
                      : `${course.currency}0.00`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-lg font-bold text-[var(--nah-700)] dark:text-[var(--nah-100)] mt-3">
                  <span>Total</span>
                  <span>
                    {course.currency}{" "}
                    {(course.price - (promo ? 5 : 0)).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="cursor-pointer mt-4 w-full px-4 py-2 text-sm rounded-lg border border-[var(--nah-200)] dark:border-slate-800 hover:bg-[var(--nah-50)] dark:hover:bg-slate-800 transition"
                >
                  Edit order
                </button>

                <div className=" flex justify-between mt-4 text-xs text-slate-400 dark:text-slate-500">
                  Need help?{" "}
                  <a href="#" className="underline">
                    Contact support
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="mb-2">Payment security</div>
              <div className="flex gap-2 items-center">
                <div className="px-2 py-1 rounded-md bg-[var(--nah-100)] text-[var(--nah-700)] text-xs font-semibold">
                  PCI
                </div>
                <div className="px-2 py-1 rounded-md bg-[var(--nah-100)] text-[var(--nah-700)] text-xs font-semibold">
                  SSL
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
