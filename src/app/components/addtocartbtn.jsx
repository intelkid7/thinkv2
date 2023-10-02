"use client";

import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../utils/useCart";

export default function AddtoCartBtn({ product }) {
  const { addItem } = useCart();
  const handleCartAdd = () => {
    addItem(product); //new
    toast.success(`${product.name} added to cart`, {
      style: {
        background: "black",
        color: "white",
        boxShadow: "0 0 2px rgb(0, 156, 256)",
      },
    });
    // console.log("Item added to cart");
  };
  return (
    <>
      <button
        onClick={handleCartAdd}
        className="border border-sky-300 p-2 w-full hover:bg-sky-300 hover:text-black"
      >
        Add to cart
      </button>
      <Toaster></Toaster>
    </>
  );
}
