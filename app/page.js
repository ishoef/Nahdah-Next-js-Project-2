import Header from "@/Components/Header";
import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold dark:text-amber-300">
        Welcome to An-Nahdah Online Institute
      </h1>
      <p className="mt-4">
        Your journey to knowledge starts here. Explore our courses and
        resources.
      </p>
      <ThemeToggle />
    </>
  );
}
