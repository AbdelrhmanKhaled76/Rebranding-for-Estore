"use client";
import React, { createContext, useState, ReactNode } from "react";

// Use a capitalized name for the context
export const ProductContext = createContext<
  | [
      boolean,
      React.Dispatch<React.SetStateAction<boolean>>,
      number,
      React.Dispatch<React.SetStateAction<number>>
    ]
  | null
>(null);

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [openProduct, setOpenProduct] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0);
  return (
    <ProductContext.Provider
      value={[openProduct, setOpenProduct, productId, setProductId]}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
