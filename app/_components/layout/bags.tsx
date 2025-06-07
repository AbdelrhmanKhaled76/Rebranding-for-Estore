import { spirax, zenLoop } from "@/app/shared/fonts/font";
import React from "react";
import ProductCard from "../ui/productCard";

const Bags = () => {
  return (
    <section id="bags" className="min-h-screen bg-[var(--primary-color)] py-5">
      <h2
        className={`py-7 text-center ${spirax.className} text-5xl capitalize text-black/60`}
      >
        Handcrafted Bags
      </h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Bags;
