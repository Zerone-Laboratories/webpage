import React from "react";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <Skills />
        <Encryption /> */}
        <Projects /> 
       
      </div>
    </main>
  );
}
