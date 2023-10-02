import Image from "next/image";
import image from "./productimages/t1.png";
import Link from "next/link";
import ShareBtn from "@/app/components/sharebtn";
import AddtoCartBtn from "@/app/components/addtocartbtn";
import BuyNowBtn from "@/app/components/buynowbtn";
import { getProductbyId, getProducts } from "@/app/services/productservice";
import { notFound } from "next/navigation";

// export const dynamic = 'force-dynamic' //makes page dynamic by force; default val = auto
// export const revalidate = 30; //Validates after every 30s (better than force-dynamic)

export async function generateStaticParams() {
  const products = await getProducts();
  const slugs = products.data.map((item) => ({ slug: item.id }));
  return slugs;
}

export async function generateMetadata({ params: { slug } }) {
  console.log("individual product page", slug);
  const product = await getProductbyId(slug);

  if (!product) {
    notFound();
  }

  return {
    title: `think - ${product.name}`,
  };
}

export default async function Product({ params: { slug } }) {
  console.log("product Id:", slug);
  const product = await getProductbyId(slug);

  const clientProduct = {
    name: product.name,
    description: product.description,
    id: product.id,
    price: product.default_price.unit_amount,
    price_id: product.default_price.id,
    currency: 'INR',
    image: product.images[0]
  };
  
  return (
    <div className="p-5">
      <div className="flex justify-between flex-col sm:flex-col md:flex-row lg:flex-row items-center">
        <div className="w-96 items-center flex flex-col text-center sm:text-center sm:items-center md:text-left md:items-start lg:text-left lg:items-start">
          <Image
            priority
            src={product.images[0]}
            width={300}
            height={100}
            alt=""
          />
          <div className="h-5"></div>
          <p className="w-full">{product.description}</p>
        </div>
        <div className="h-10"></div>
        <div className="border-sky-200 border h-fit p-3 w-96">
          <h1 className="text-xl">{product.name}</h1>
          <div className="flex">
            <div className="text-green-500">
              in stock <span className="text-white">|</span>
              <ShareBtn />
            </div>
          </div>
          <br />
          <div className="flex border border-b-white"></div>
          <br />
          <div className="flex flex-col">
            <h1>Price:</h1>
            <p>&#8377; {product.default_price.unit_amount / 100}</p>
          </div>
          <br />
          <AddtoCartBtn product={clientProduct} />
          <div className="h-4"></div>
          <a href="/">
            <BuyNowBtn />
          </a>
        </div>
      </div>
    </div>
  );
}
