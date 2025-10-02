import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import ThemeToggle from "./theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 bg-gray-50 dark:bg-gray-900 transition-colors min-h-screen duration-300">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-amber-300 text-center">
          Welcome to An-Nahdah Online Institute
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-200 text-center max-w-xl">
          Your journey to knowledge starts here. Explore our courses and
          resources.
        </p>

        <div className="mt-6">
          <ThemeToggle />
        </div>
      </main>

      <Footer />
    </div>
  );
}
