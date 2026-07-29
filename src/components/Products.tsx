import { getProducts, getProductVariants } from "@/lib/shoppex";
import ProductCard from "./ProductCard";

export default async function Products() {
  const products = await getProducts();
  const product = products[0] || null;
  const variants = product ? await getProductVariants(product.uniqid) : [];
  
  return (
    <section id="products" className="w-full py-12 sm:py-24">
      <div className="w-full h-full flex flex-col px-4 md:px-8 lg:px-12 items-center">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            We focus all our resources into providing the safest and most feature-rich external solution on the market.
          </p>
        </div>

        {/* Interactive Product Card */}
        <ProductCard product={product} variants={variants} />

      </div>
    </section>
  );
}
