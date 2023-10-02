import Link from "next/link";
import Image from "next/image";

export default function ProductCard({item}) {
    return (
        <Link className="bg-white p-3 flex flex-col hover:cursor-pointer procard w-64 md:w-40 lg:w-64 justify-between" href={`/products/${item.id}`}>
            <Image priority className="h-fit mb-4" src={item.images[0]} alt="" width={250} height={250} />
            <div className="details flex justify-between">
                <h1 className="text-black text-sm font-semibold flex w-40 sm:text-xs lg:text-sm md:text-xs">{item.name}</h1>
                <div className="text-green-500 text-sm flex sm:text-xs lg:text-sm md:text-xs">&#8377; {(item.default_price.unit_amount)/100}</div>
            </div>
            <div className="truncate w-36">
                <p className="text-black truncate w-full">{item.description}</p>
            </div>
        </Link>
    )
}