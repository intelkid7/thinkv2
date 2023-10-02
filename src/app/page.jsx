// import Clickbtn from "./components/clickbtn";
import ProductCard from "./components/productcard";
import Link from "next/link";
import { getProducts } from "./services/productservice";

// export const dynamic = 'force-dynamic' //makes page dynamic by force; default val = auto
// export const revalidate = 30; //Validates after every 30s

export default async function Home() {
  // console.log("Page rendered");
  console.log("home page returned");
  const products = await getProducts(5);
  return (
    <div>
      <div className="banner bg-gray-600 h-96 flex">
        <h1 className="text-5xl font-bold justify-center">
          India{"'"}s most loved <span className="text-orange-400">store</span> for <span className="text-sky-500">{"<coders />"}</span>
        </h1>
      </div>
      <div className="flex flex-wrap justify-around p-3">
        {products.data.map(item => <ProductCard item={item} key={item.id}/>)}
      </div>
      <Link href={"/products"} className="text-white hover:text-sky-500 p-3 text-xl">View all {" > "}</Link>
    </div>
  )
}
