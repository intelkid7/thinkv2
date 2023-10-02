import Link from "next/link"

export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="p-4">
            <Link href={"/products"} className="text-sky-500 hover:text-white hover:underline">all products {" > "}</Link>
            {children}
        </div>
    )
}
