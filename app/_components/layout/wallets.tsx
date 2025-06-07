import { spirax } from "@/app/shared/fonts/font";
import React from "react";
import ProductCard from "../ui/productCard";

const Wallets = () => {
  return (
    <section id="wallets" className="min-h-fit bg-[var(--primary-color)] py-5">
      <h2
        className={`py-7 text-center ${spirax.className} text-5xl capitalize text-black/60`}
      >
        Handcrafted Wallets
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

export default Wallets;
