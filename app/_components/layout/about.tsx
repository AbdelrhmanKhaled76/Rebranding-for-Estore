import { spirax, zenLoop } from "@/app/shared/fonts/font";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="min-h-fit bg-[var(--secondary-color)] py-5">
      <h2
        className={`py-7 text-center ${spirax.className} text-5xl capitalize text-black/60`}
      >
        Our Craft Story
      </h2>
      <div className="container  py-12 grid md:grid-cols-2 items-center gap-10">
        <figcaption className="flex flex-col justify-between gap-5">
          <h3
            className={`${spirax.className} text-3xl text-[var(--deep-color)]`}
          >
            Handmade with Love
          </h3>
          <p className={`${zenLoop.className} text-2xl opacity-80`}>
            Every piece in our collection is meticulously handcrafted by our
            small team of artisans who have perfected their craft over decades
            of leather working.
          </p>
          <p className={`${zenLoop.className} text-2xl opacity-80`}>
            We source only the finest full-grain leather and sustainable
            materials, ensuring that each product is not only beautiful but
            built to last a lifetime.
          </p>
          <p className={`${zenLoop.className} text-2xl opacity-80`}>
            From the initial cut to the final stitch, each step is performed
            with attention to detail and a commitment to quality that's
            increasingly rare in today's mass-produced world.
          </p>
        </figcaption>
        <figure className="order-first md:order-last">
          <Image
            src={"/images/about.jpg"}
            alt=""
            width={500}
            height={700}
            className="rounded-lg w-full"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
