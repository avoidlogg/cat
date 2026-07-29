export interface Product {
  id: string | number;
  uniqid: string;
  title: string;
  price: number;
  currency: string;
  description?: string;
  unlisted?: boolean;
}

interface ProductsResponse {
  data: Product[];
}

export async function getProducts(): Promise<Product[]> {
  const apiKey = process.env.SHOPPEX_API_KEY;

  if (!apiKey) {
    console.warn("SHOPPEX_API_KEY is not defined. Returning mock products.");
    return [
      {
        id: "mock-1",
        uniqid: "mock-1",
        title: "Heroic FiveM External (30 Days)",
        price: 15.0,
        currency: "USD",
        description: "Premium undetected external cheat.",
      },
      {
        id: "mock-2",
        uniqid: "mock-2",
        title: "Heroic FiveM External (Lifetime)",
        price: 45.0,
        currency: "USD",
        description: "Premium undetected external cheat. Lifetime access.",
      },
    ];
  }

  try {
    const res = await fetch("https://api.shoppex.io/dev/v1/products", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error("Failed to fetch Shoppex products:", res.status, res.statusText);
      return [];
    }

    const json = (await res.json()) as ProductsResponse;
    return json.data || [];
  } catch (error) {
    console.error("Error fetching Shoppex products:", error);
    return [];
  }
}

export interface Variant {
  id: string;
  uniqid: string;
  product_uniqid: string;
  title: string;
  price: number;
  description: string | null;
  stock: number | null;
  is_default: boolean;
}

interface VariantsResponse {
  data: Variant[];
}

export async function getProductVariants(productId: string): Promise<Variant[]> {
  const apiKey = process.env.SHOPPEX_API_KEY;
  if (!apiKey) {
    return [];
  }

  try {
    const res = await fetch(`https://api.shoppex.io/dev/v1/products/${productId}/variants`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch variants for product ${productId}:`, res.status, res.statusText);
      return [];
    }

    const json = (await res.json()) as VariantsResponse;
    return json.data || [];
  } catch (error) {
    console.error(`Error fetching variants for product ${productId}:`, error);
    return [];
  }
}
