import { spirax, zenLoop } from "@/app/shared/fonts/font";
import React from "react";
import NormalCard from "../ui/normalCard";

const Process = () => {
  return (
    <section className="min-h-fit bg-[var(--secondary-color)] py-5">
      <h2
        className={`py-7 text-center ${spirax.className} text-5xl capitalize text-black/60`}
      >
        Our Craft Process
      </h2>
      <p className={`text-center ${zenLoop.className} text-2xl`}>
        Every piece in our collection goes through a meticulous creation
        process, blending traditional techniques with modern design
      </p>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
      </div>
    </section>
  );
};

export default Process;
