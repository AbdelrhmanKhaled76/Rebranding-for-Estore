import Image from "next/image";
import React from "react";
import Button from "./button";

const ProductDetail = () => {
  return (
    <div className="fixed inset-0 bg-black/60">
      <div className="flex justify-center items-center max-w-[700px] max-h-[500px] p-5 bg-[var(--primary-color)] ">
        <div className="grid grid-cols-2">
          <figure>
            <Image
              src={"/images/wallet-2.jpg"}
              alt="product image"
              width={400}
              height={500}
              className="object-cover"
            />
          </figure>
          <figcaption className="flex justify-between gap-4">
            <h3>Rustic Leather Tote</h3>
            <p>$189.99</p>
            <h4>description</h4>
            <p>
              Handcrafted tote bag made from premium full-grain leather.
              Features sturdy handles and a spacious interior perfect for daily
              use.
            </p>
            <h5>details</h5>
            <ul>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
              <li>
                <span></span>
              </li>
            </ul>
            <h6>available colors</h6>
            <div className="flex justify-between gap-5"></div>
            <Button isFull={true} isPrimary={true} onClick={() => {}} />
          </figcaption>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
