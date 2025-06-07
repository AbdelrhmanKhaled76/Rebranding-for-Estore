import { spirax, zenLoop } from "@/app/shared/fonts/font";
import Image from "next/image";
import React from "react";

const NormalCard = () => {
  return (
    <div className="flex justify-between flex-col rounded-lg bg-[var(--primary-color)] border border-[var(--deep-color)]/50 shadow-md overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg group">
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
      <figcaption className="p-4 grid grid-rows-2">
        <div className="flex items-center gap-2">
          <span
            className={`${zenLoop.className} text-xl bg-[var(--deep-color)] flex justify-center items-center text-[var(--primary-color)] w-10 h-10 rounded-full font-bold text-brown`}
          >
            1
          </span>
          <h3 className={`${spirax.className} text-2xl text-black/60`}>
            Rustic Leather Tote
          </h3>
        </div>
        <p className={`${zenLoop.className} text-xl`}>
          Handcrafted tote bag made from premium full-grain leather. Features
          sturdy handles and a spacious interior perfect for daily use.
        </p>
      </figcaption>
    </div>
  );
};

export default NormalCard;
