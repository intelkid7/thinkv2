'use client'

import { createContext, useState } from "react";

export const ProductCtx = createContext(null);

export default function Provider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <ProductCtx.Provider value={{ cartItems, setCartItems }}>{children}</ProductCtx.Provider>
  );
};