"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoogleLogin from "@/components/ui/GoogleLogin";
import GoBackButton from "@/components/ui/GoBackButton";

const PRIMARY = "#206380";

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const password = watch("password");

  // UI-only submit. TODO: replace with real API call
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // TODO: call your API: POST /api/register with JSON body {name,email,password,...}
      // Example:
      // const res = await fetch('/api/register', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
      // handle res.ok / res.json messages and errors
      await new Promise((r) => setTimeout(r, 800)); // simulate delay
      reset();
      router.push("/login?registered=1");
    } catch (err) {
      // TODO: surface error message from server (toast or inline)
      alert("Registration failed (UI-only).");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-background text-foreground">
      {/* Left visual (desktop only) */}
      {/* Left Side - Visual Element (Desktop Only) */}
      <div className="hidden lg:block lg:w-1/2 relative h-screen overflow-hidden rounded-tr-3xl rounded-br-3xl">
        <Image
          src="https://images.unsplash.com/photo-1520262454473-a1a82276a574?w=1600&auto=format&fit=crop&q=80"
          alt="Students studying — Ad-Dirasah"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center"
        />
        {/* optional subtle overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Right: register form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-4 py-8">
        {/* top controls (if any) */}
        <div className="absolute top-6 right-6 flex items-center space-x-4">
          {/* If you have ThemeToggle or LanguageToggle import & use here */}
        </div>

        <div className="w-full max-w-sm">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="text-lg font-bold text-primary">
              {" "}
              <GoBackButton />
            </div>
            <h1 className="text-3xl font-bold text-primary">Register</h1>
            <div className="w-6" /> {/* spacer */}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
              {errors.password && (
                <p className="text-destructive text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Confirm Password
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) =>
                    val === password || "Passwords do not match",
                })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={
                  showConfirm
                    ? "Hide confirm password"
                    : "Show confirm password"
                }
              >
                {showConfirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
              {errors.confirmPassword && (
                <p className="text-destructive text-sm mt-2">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Optional row: Age & Gender */}
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Age
                </label>
                <select
                  {...register("age")}
                  className="w-full px-3 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Select</option>
                  {Array.from({ length: 61 }, (_, i) => 10 + i).map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Gender
                </label>
                <select
                  {...register("gender")}
                  className="w-full px-3 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Prefer not to say</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Terms */}
            <div className="text-xs text-muted-foreground">
              By creating an account you agree to our{" "}
              <Link
                href="/terms"
                className="font-medium"
                style={{ color: PRIMARY }}
              >
                Terms
              </Link>
              .
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              style={{ backgroundColor: PRIMARY }}
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* OR divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-border" />
            <span className="mx-3 text-muted-foreground text-sm">OR</span>
            <hr className="flex-1 border-border" />
          </div>

          {/* Social signup (replace with your component) */}
          <GoogleLogin />

          <p className="text-center text-muted-foreground mt-6 text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-semibold hover:text-primary/80 transition-colors"
              style={{ color: PRIMARY }}
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
