import { stripe } from "@/app/utils/stripe";
import { revalidatePath } from "next/cache";


export async function POST(req, res) {
  // return Response.json({message: "success!"})
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.log("ERR", err.message);
    return Response.json({error:`Webhook Error: ${err.message}`},{status:400});
  }
  if (event.type == "product.created" || event.type == 'product.updated') {
    console.log('event type', event.type)
    revalidatePath('/products','page');
    revalidatePath('/','page');
    revalidatePath('/products/[slug]','page');
    revalidatePath('/cart','page');
  } else {
    console.log(`Unhandled event type ${event.type}`)
  }

  return Response.json({message: "success!"})
}
