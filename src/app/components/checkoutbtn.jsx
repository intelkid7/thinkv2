"use client";

// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { handleCheckout } from "../services/cartcheckout";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../utils/useCart";

export default function CheckoutBtn({ cartItems }) {
  const router = useRouter();
  const { deleteAllItems } = useCart();
  const cartCheckout = async () => {
    try {
      const body = cartItems.map((item) => {
        return {
          price: item.price_id,
          quantity: item.quantity,
        };
      });
      const url = await handleCheckout(body);
      router.push(url);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      deleteAllItems();
      console.log("delete");
      toast.success("Order Placed")
    }

    if (query.get("canceled")) {
      toast.error(
        `Order Cancelled!😐 Try again if you think it was by mistake or continue shopping for other items`,
        {
          style: {
            background: "black",
            color: "white",
            boxShadow: "0 0 2px rgb(0, 156, 256)",
          },
        }
      );
    }
  },[]);
  return (
    <>
      <button onClick={cartCheckout} className="w-fit px-2 py-1 bg-red-400">
        Checkout
      </button>
      <Toaster></Toaster>
    </>
  );
}
