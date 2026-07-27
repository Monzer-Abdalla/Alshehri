import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia" as any,
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig || !endpointSecret) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err: any) {
    console.error("Webhook signature verification failed.", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object as Stripe.Checkout.Session;

      // Ensure we update the order status to PAID
      if (session.metadata?.orderId) {
        try {
          await prisma.order.update({
            where: { id: session.metadata.orderId },
            data: { 
              status: "PAID",
              customerEmail: session.customer_details?.email,
              customerName: session.customer_details?.name
            },
          });
          console.log(`Order ${session.metadata.orderId} marked as PAID.`);
        } catch (error) {
          console.error("Error updating order:", error);
        }
      }
      break;

    // You can handle other events like payment_intent.payment_failed here
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
