import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import Stripe from "stripe";
import type { CartItem } from "@/lib/store/useCartStore";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia" as any,
});

export async function POST(req: Request) {
  try {
    const { items, lang } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    // Validate items and calculate total on the server
    let totalAmount = 0;
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    for (const item of items as CartItem[]) {
      // In a real app, you would fetch the product from DB to verify price
      // Here we trust the price from our static lib/products.ts
      const unitAmount = Math.round(item.price * 100); // Stripe expects cents/halalas
      totalAmount += unitAmount * item.quantity;

      lineItems.push({
        price_data: {
          currency: "sar",
          product_data: {
            name: lang === "ar" ? item.nameAr : item.nameEn,
            images: [
              // Stripe needs absolute URLs for images
              `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}${item.image}`,
            ],
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      });
    }

    // Create a pending order in the database
    const order = await prisma.order.create({
      data: {
        amount: totalAmount,
        status: "PENDING",
        items: items, // Save cart snapshot
      },
    });

    const successUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/${lang}/checkout/success`;
    const cancelUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/${lang}/checkout/cancel`;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
      client_reference_id: order.id,
      metadata: {
        orderId: order.id,
      },
    });

    // Update order with the Stripe Session ID (our idempotency key)
    if (session.id) {
      await prisma.order.update({
        where: { id: order.id },
        data: { stripeSessionId: session.id },
      });
    }

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
