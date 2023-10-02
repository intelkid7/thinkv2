import { stripe } from "@/app/utils/stripe";

export async function POST(req, res) {
  const body = await req.json();

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: body,
      mode: "payment",
      success_url: `${req.headers.get('origin')}/cart?success=true`,
      cancel_url: `${req.headers.get('origin')}/cart?canceled=true`,
    });
    return Response.json({session_url: session.url})
  } catch (err) {
    console.log("ERROR IN CHECKOUT:", err)
    return Response.json({error: "Internal Server Error"}, {status: 500})
  }
}
