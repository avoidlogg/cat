import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { productId, email, variantId } = await req.json();

    if (!productId || !email) {
      return NextResponse.json(
        { error: "Product ID and Email are required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.SHOPPEX_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Shoppex API key not configured" },
        { status: 500 }
      );
    }

    const item: Record<string, unknown> = {
      product_id: productId,
      quantity: 1,
    };
    if (variantId) {
      item.variant_id = variantId;
    }

    const shoppexRes = await fetch("https://api.shoppex.io/dev/v1/orders", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        items: [item],
      }),
    });

    const data = await shoppexRes.json();

    if (!shoppexRes.ok) {
      console.error("Shoppex order creation failed:", data);
      return NextResponse.json(
        { error: "Failed to create checkout session" },
        { status: shoppexRes.status }
      );
    }

    return NextResponse.json({
      checkoutUrl: data.data.checkout_url,
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
