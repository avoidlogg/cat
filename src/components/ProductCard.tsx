"use client";

import { useState } from "react";
import type { Product, Variant } from "@/lib/shoppex";

export default function ProductCard({ product, variants }: { product: Product | null; variants: Variant[] }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedVariant && email) {
      setLoading(true);
      try {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            productId: product.uniqid,
            variantId: selectedVariant.uniqid,
            email 
          }),
        });
        
        const data = await res.json();
        
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else {
          alert(data.error || "Failed to initiate checkout session");
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        alert("An error occurred while creating your checkout session.");
        setLoading(false);
      }
    }
  };

  if (!product) {
    return (
      <div className="w-full max-w-4xl flex justify-center">
        <div className="w-full p-8 text-center text-muted-foreground bg-card border border-border rounded-2xl">
          Products currently unavailable. Please check back later or contact support.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-4xl flex justify-center">
      <div className={`w-full relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 border bg-card ${expanded ? 'border-primary/50' : 'border-border hover:border-primary/30'}`}>
        
        {/* Clickable Header Area */}
        <div 
          className="cursor-pointer group"
          onClick={() => setExpanded(!expanded)}
        >
          {/* Image Container */}
          <div className="relative flex h-[250px] sm:h-[350px] w-full items-center justify-center bg-muted overflow-hidden">
            <img
              alt="FiveM External Menu"
              className={`object-cover w-full h-full transition-transform duration-700 opacity-90 ${expanded ? 'scale-105' : 'group-hover:scale-105'}`}
              src="/product banners.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"></div>
            
            {/* Status Badge overlay */}
            <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 border border-green-500/20 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-sm font-semibold text-green-500">Undetected</span>
            </div>
          </div>

          {/* Card Title & Desc */}
          <div className="flex flex-col p-6 sm:p-8 bg-card relative z-20 pb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold tracking-tight text-2xl sm:text-3xl text-foreground">
                {product.title}
              </h3>
              <div className="flex items-center gap-2 text-primary font-medium bg-primary/10 px-4 py-2 rounded-full border border-primary/20 transition-colors group-hover:bg-primary/20">
                {expanded ? (
                  <>
                    <span>Hide Options</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
                  </>
                ) : (
                  <>
                    <span>View Options</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </>
                )}
              </div>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground">
              {product.description || "Premium undetected cheating solution with aimbot, ESP, stream-proof technology, and an advanced HWID spoofer included."}
            </p>
          </div>
        </div>

        {/* Embedded Variants Drawer */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden bg-card ${expanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="p-6 sm:p-8 pt-0 border-t border-border/50 mt-2">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 mt-4">Available Plans</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {variants.length > 0 ? (
                variants.map((variant) => (
                  <div 
                    key={variant.uniqid} 
                    className="flex flex-col justify-between p-5 rounded-xl border border-border bg-background/50 hover:border-primary/50 hover:shadow-[0_0_15px_theme(colors.primary/20%)] transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-semibold text-lg text-foreground">{variant.title}</h4>
                      {variant.description && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{variant.description}</p>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        ${(Number(variant.price) || 0).toFixed(2)} <span className="text-sm font-normal text-muted-foreground">{product.currency}</span>
                      </span>
                      
                      <button 
                        className="px-5 py-2.5 bg-primary/10 text-primary border border-primary/20 font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVariant(variant);
                        }}
                      >
                        Purchase
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-8 text-center text-muted-foreground bg-background/50 rounded-xl border border-border border-dashed">
                  Plans currently unavailable. Please check back later or contact support.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>

      {/* Checkout Modal */}
      {selectedVariant && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedVariant(null)}
        >
          <div 
            className="bg-card border border-border rounded-2xl p-6 w-full max-w-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setSelectedVariant(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <h3 className="text-2xl font-bold mb-2">Checkout Details</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Enter your email address to receive your license key and instructions for <span className="font-semibold text-foreground">{selectedVariant.title}</span>.
            </p>
            
            <form onSubmit={handleCheckout}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-foreground">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full bg-primary text-primary-foreground font-semibold rounded-lg px-4 py-3 hover:bg-primary/90 transition-colors mt-2 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Generating Session...' : 'Proceed to Checkout'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
