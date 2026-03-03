"use client";
import Hero from "@/components/sub/Hero";
import Image from "next/image";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Reviews />
    </div>
  );
}
{
  /* <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
  <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    <Hero />
    <About />
  </main>
</div> */
}
