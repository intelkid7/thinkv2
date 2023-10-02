'use client'

import toast, { Toaster } from "react-hot-toast";

export default function ShareBtn() {
    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("copied", {
            style: {
                background: "black",
                color: "white",
                boxShadow: "0 0 2px rgb(0, 156, 256)",
            },
        });
    }
    return (
        <>
            <button onClick={handleShare} className="text-sky-500 hover:underline p-1">Share Product</button>
            <Toaster />
        </>


    )
}