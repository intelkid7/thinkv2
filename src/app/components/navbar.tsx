'use client'

import Link from "next/link";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from "../utils/useCart";

export default function Navbar() {
    const {cartCount} = useCart()
    return (
        <nav className="bg-black justify-between p-7 flex border border-sky-500">
            <div className="flex">
                <ul className="text-white font-bold text-2xl flex">
                    <li><Link href={"/"}> <h1>th<span className="text-sky-500">i</span>nk</h1></Link></li>
                </ul>
            </div>
            <Link href = {"/cart"} className="bag text-sky-500 hover:cursor-pointer hover:text-white">
                <ShoppingBagIcon className="w-7 h-7"></ShoppingBagIcon>
                Bag <span>[{cartCount}]</span>
            </Link>
        </nav>
    )
}