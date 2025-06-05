"use client";
import Image from "next/image";
import React from "react";
import Button from "./button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { spirax, zenLoop } from "@/app/shared/fonts/font";

const ProductDetail = () => {
  return (
    <div className="fixed inset-0 bg-black/60 w-screen h-screen flex justify-center items-center z-50">
      <div className="max-w-[800px] max-h-[700px] p-5 bg-[var(--primary-color)] rounded grid grid-cols-2 gap-4">
        <figure className="h-full">
          <Image
            src={"/images/wallet-2.jpg"}
            alt="product image"
            width={500}
            height={500}
            className="object-cover h-full rounded"
          />
        </figure>
        <figcaption className="flex justify-between flex-col gap-4">
          <h3 className={`${spirax.className} text-3xl text-black/60`}>
            Rustic Leather Tote
          </h3>
          <p className={`${zenLoop.className} text-2xl`}>$189.99</p>
          <h4
            className={`${spirax.className} text-xl capitalize text-black/60`}
          >
            description
          </h4>
          <p className={`${zenLoop.className} text-xl`}>
            Handcrafted tote bag made from premium full-grain leather. Features
            sturdy handles and a spacious interior perfect for daily use.
          </p>
          <h5
            className={`${spirax.className} text-xl capitalize text-black/60`}
          >
            details
          </h5>
          <ul className="flex justify-between gap-5 flex-col">
            <li>
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              <span className={`${zenLoop.className}`}>category : bag</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              <span className={`${zenLoop.className}`}>
                Materials: full-grain leather, brass hardware
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              <span className={`${zenLoop.className}`}>
                Availability: In Stock
              </span>
            </li>
          </ul>
          <h6
            className={`${spirax.className} text-xl capitalize text-black/60`}
          >
            available colors
          </h6>
          <div className="flex justify-between gap-5"></div>
          <Button
            isFull={true}
            isPrimary={true}
            value="add to cart"
            onClick={() => {}}
          />
        </figcaption>
      </div>
    </div>
  );
};

export default ProductDetail;
