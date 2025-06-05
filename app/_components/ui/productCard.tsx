import { spirax, zenLoop } from "@/app/shared/fonts/font";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="grid grid-rows-2 rounded-lg bg-[var(--primary-color)] border border-[var(--deep-color)]/50 shadow-md overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg group">
      <figure className="overflow-hidden relative">
        <Image
          src={"/images/wallet-1.jpg"}
          alt="image"
          width={500}
          height={500}
          className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
        />
        <p
          className={`absolute top-2 left-2 px-2 capitalize text-md ${zenLoop.className} bg-[var(--deep-color)] rounded text-[var(--primary-color)]`}
        >
          featured
        </p>
      </figure>
      <figcaption className="p-4 flex justify-between items-center flex-col">
        <div className="flex justify-between items-center w-full">
          <h3 className={`${spirax.className} text-2xl text-black/60`}>
            Rustic Leather Tote
          </h3>
          <span className={`font-sans text-xl font-bold text-brown`}>
            $189.99
          </span>
        </div>
        <p className={`${zenLoop.className} text-xl`}>
          Handcrafted tote bag made from premium full-grain leather. Features
          sturdy handles and a spacious interior perfect for daily use.
        </p>
        <div className="w-full flex items-center justify-between">
          <span
            className={`${zenLoop.className} bg-gray-400/20 px-3 rounded text-md font-bold text-brown capitalize`}
          >
            bag
          </span>
          <button
            type="button"
            title="add to cart"
            className="w-8 h-8 cursor-pointer rounded-full bg-[var(--deep-color)] text-[var(--primary-color)] hover:bg-[var(--filler-color)] transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faCartShopping} className=" text-center" />
          </button>
        </div>
      </figcaption>
    </div>
  );
};

export default ProductCard;
