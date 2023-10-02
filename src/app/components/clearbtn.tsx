'use client'

import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../utils/useCart';


export default function ClearBtn() {
    const {deleteAllItems} = useCart()

    const notify = () => {
        toast.success("Bag emptied");
        deleteAllItems()
    }

    return (
        <>
            <button onClick={notify} className="text-red-500">Clear all</button>
            <Toaster></Toaster>
        </>
    )
}
