'use client'

import { useCart } from "../utils/useCart"

export default function AddBtn({productId}) {

    const {incrementCartItems} = useCart()
    return (
        <>
            <button onClick={() => incrementCartItems(productId)} className="text-green-400">+</button>
        </>
    )
}