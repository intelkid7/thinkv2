import ProductCard from "../components/productcard";
import { getProducts } from "@/app/services/productservice";

// export const dynamic = 'force-dynamic' //makes page dynamic by force; default val = auto
// export const revalidate = 30; //Validates after every 30s

export default async function Store() {
  console.log("All products page");
  const products = await getProducts();
  
  return (
    <div className="p-5 justify-center flex flex-col">
      <title>think store</title>
      Products
      <div className="h-10"></div>
      <div className="grid gap-y-4 progrid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center">
        {products.data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
