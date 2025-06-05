"use client";
import { spirax, zenLoop } from "@/app/shared/fonts/font";
import Image from "next/image";
import React from "react";
import Button from "../ui/button";

const Hero = () => {
  return (
    <section className="relative">
      <Image
        src="/images/hero.jpg"
        alt="a handmade bag"
        width={1200}
        height={1200}
        className="w-screen h-screen object-cover"
      />
      <div className="absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] w-screen h-screen flex justify-center flex-col items-center z-10 gap-5">
        <h1
          className={`${spirax.className} text-7xl text-[var(--primary-color)]`}
        >
          Alaa khaled leather crafts
        </h1>
        <p
          className={`${zenLoop.className} text-4xl text-[var(--primary-color)]`}
        >
          Handcrafted bags and wallets, stitched with passion and designed to
          last a lifetime
        </p>
        <div className="mx-auto grid grid-cols-2 gap-4">
          <Button isPrimary={true} onClick={() => {}} />
          <Button isPrimary={false} onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
