'use client'

import { useCart } from "../utils/useCart"

export default function ClearProductBtn({productId}) {
    const {deleteById} = useCart();
    return (
        <>
            <button onClick={() => deleteById(productId)} className="text-red-500">x</button>
        </>
    )
}