import { stripe } from "../utils/stripe";

export const getProducts = async (limit) => {
  let products = {
    data: [],
  };

  try {
    products = await stripe.products.list({
      limit: limit || 10,
      expand: ["data.default_price"],
    });
  } catch (err) {
    console.log("STRIPE ERROR:",err);
  }

  // console.log(JSON.stringify(products, null, 2)) //converts images to URL
  return products;
};

export const getProductbyId = async (productId) => {
  let product = null;
  try {
    product = await stripe.products.retrieve(productId, {
      // limit:limit||10,
      expand: ["default_price"],
    });
  } catch (err) {
    console.log("STRIPE ERROR", err);
  }
  // console.log(JSON.stringify(product, null, 2)) //converts images to URL
  return product;
};
