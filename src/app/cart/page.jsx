'use client'

import ClearBtn from "../components/clearbtn";
import Image from "next/image";
import Link from "next/link";
import AddBtn from "../components/addbtn";
import SubBtn from "../components/subtractbtn";
import ClearProductBtn from "../components/clearprodbtn.jsx";
import CheckoutBtn from "../components/checkoutbtn.jsx";
import { useCart } from "../utils/useCart";

export default function Cart() {
  const { cartCount, cartItems, cartTotal } = useCart();

  return (
    <div className="p-4">
      {cartCount > 0 ? (
        <>
          <h1 className="text-xl">Cart Items - {cartItems.length}</h1>
          <ClearBtn></ClearBtn>
        </>
      ) : (
        <h1>Bag is empty</h1>
      )}

      <div className="h-6"></div>

      {cartCount > 0 && (
        <div>
          {cartItems.map((item) => {
            // console.log(item, "hello");
            return (
              <div
                className="w-full h-28 p-2 bg-white flex justify-between mb-2"
                key={item.id}
              >
                <Link
                  href={`/products/${item.id}`}
                  className="flex justify-between w-96"
                >
                  <Image
                    className="cartim"
                    src={item.image}
                    width={100}
                    height={100}
                    alt=""
                  ></Image>
                  <h1 className="text-black items-center flex p-4 w-96">
                    {item.name}
                  </h1>
                </Link>
                <div className="flex items-center p-5">
                  <div className="p-4 flex">
                    <SubBtn productId={item.id} item={item} />
                    <h1 className="text-black p-3">{item.quantity}</h1>
                    <AddBtn productId={item.id} />
                  </div>
                  <h1 className="text-black items-center flex p-4">
                    &#8377; {item.price / 100 + " "}
                  </h1>
                  <ClearProductBtn productId={item.id} />
                </div>
              </div>
            );
          })}

          <br />
          <div className="w-full items-end flex flex-col">
            <h1 className="text-right">Total: &#8377; {cartTotal}</h1>
            <div className="h-3"></div>
            <CheckoutBtn cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}
