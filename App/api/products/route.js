import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
  apiVersion: '2024-06-20',
});

export async function GET() {
  try {
    const res = await stripe.prices.list({
      expand: ['data.product']
    });
    const prices = res.data;
    return NextResponse.json(prices);
  } catch (error) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
