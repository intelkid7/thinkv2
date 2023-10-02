'use client'

import { getProducts } from "../services/productservice"
import { useCart } from "../utils/useCart"

export default function SubBtn({productId, item}) {

    const {decrementCartItems} = useCart()
    return (
        <>
            <button disabled = {item.quantity == 1} onClick={() => decrementCartItems(productId)} className="text-red-400">-</button>
        </>
    )
}