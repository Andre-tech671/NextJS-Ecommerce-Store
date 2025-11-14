import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
  apiVersion: '2024-06-20',
});

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("Received lineItems:", body.lineItems);

    if (!body.lineItems || body.lineItems.length === 0) {
      return NextResponse.json({ error: "No line items provided" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      line_items: body.lineItems,
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
    });

    console.log("Stripe session created successfully:", session.id);
    // ✅ Return session inside a `session` object
    return NextResponse.json({ session: { url: session.url } }, { status: 201 });
  } catch (err) {
    console.error("Stripe Checkout Error:", err.message);
    console.error("Error stack:", err.stack);
    return NextResponse.json({ error: "Stripe session creation failed" }, { status: 500 });
  }
}
