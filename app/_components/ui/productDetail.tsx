"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Button from "./button";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { spirax, zenLoop } from "@/app/shared/fonts/font";
import { ProductContext } from "@/app/_contexts/productProvider";

const ProductDetail = () => {
  const product = useContext(ProductContext);
  if (!product) {
    return null;
  }
  const [openProduct, setOpenProduct, productId, setProductId] = product;
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 flex justify-center items-center z-50  transition-opacity duration-500 ${
          openProduct ? "opacity-100 w-screen h-screen" : "opacity-0 h-0 w-0"
        }`}
      >
        <div></div>
        <div className="relative mx-10 max-w-[800px] max-h-[700px] p-10 bg-[var(--primary-color)] rounded grid grid-cols-1 md:grid-cols-2 overflow-scroll w-full gap-4 ">
          <div className="absolute top-1 right-1 text-2xl font-light">
            <button
              onClick={() => setOpenProduct(false)}
              title="close product details"
              type="button"
              className="cursor-pointer text-black/60 transition-colors duration-500 hover:text-[var(--deep-color)]"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <figure className="h-full">
            <Image
              src={"/images/wallet-2.jpg"}
              alt="product image"
              width={500}
              height={500}
              className="object-cover h-full w-full rounded"
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
              Handcrafted tote bag made from premium full-grain leather.
              Features sturdy handles and a spacious interior perfect for daily
              use.
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
    </>
  );
};

export default ProductDetail;
