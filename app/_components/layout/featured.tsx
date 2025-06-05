import { spirax, zenLoop } from "@/app/shared/fonts/font";
import React from "react";
import ProductCard from "../ui/productCard";

const Featured = () => {
  return (
    <section className=" min-h-screen bg-[var(--secondary-color)] py-5">
      <h2
        className={`py-7 text-center ${spirax.className} text-5xl capitalize text-black/60`}
      >
        featured collection
      </h2>
      <p className={`text-center ${zenLoop.className} text-2xl`}>
        Discover our most popular handcrafted pieces, each created with
        attention to detail and premium materials
      </p>
      <div className="container mx-auto grid grid-cols-3 gap-5 py-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Featured;
