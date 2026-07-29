import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ReviewsCarousel from "@/components/ReviewsCarousel"

type Review = {
  id: string;
  author: string;
  avatar: string;
  message: string;
  product: string;
  verified: boolean;
  date: string;
  source: "discord" | "shoppex";
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ReviewsPage() {
  const unifiedReviews: Review[] = [];

  try {
    // Fetch Discord Reviews
    const resDiscord = await fetch("http://163.123.238.146:5349/api/reviews", { 
      next: { revalidate: 60 } 
    });
    if (resDiscord.ok) {
      const discordData = await resDiscord.json();
      if (Array.isArray(discordData)) {
        discordData.forEach((r: any) => {
          unifiedReviews.push({
            id: `discord-${r.id}`,
            author: r.author || "Anonymous",
            avatar: r.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${r.author}`,
            message: r.message,
            product: r.product || "Heroic Bypass",
            verified: !!r.verified,
            date: r.date,
            source: "discord"
          });
        });
      }
    }
  } catch (error) {
    console.error("Failed to fetch Discord reviews:", error);
  }

  try {
    // Fetch Shoppex Reviews
    const apiKey = process.env.SHOPPEX_API_KEY;
    if (apiKey) {
      const resShoppex = await fetch("https://api.shoppex.io/dev/v1/reviews", { 
        headers: { Authorization: `Bearer ${apiKey}` },
        next: { revalidate: 60 }
      });
      if (resShoppex.ok) {
        const shoppexData = await resShoppex.json();
        if (shoppexData?.data && Array.isArray(shoppexData.data)) {
          shoppexData.data.forEach((r: any) => {
            unifiedReviews.push({
              id: `shoppex-${r.id}`,
              author: r.customer_name || "Verified Customer",
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${r.customer_name || r.id}`,
              message: r.message,
              product: r.product_title || "Heroic Bypass",
              verified: true,
              date: new Date(r.created_at * 1000).toISOString(),
              source: "shoppex"
            });
          });
        }
      }
    }
  } catch (error) {
    console.error("Failed to fetch Shoppex reviews:", error);
  }

  // Sort unified reviews by date (newest first)
  unifiedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-24">
        
        {/* Page Header */}
        <div className="text-center mb-16 px-4 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Customer <span className="text-primary">Reviews</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what thousands of players are saying about our undetected cheating solutions, aggregated securely from Discord and Shoppex.
          </p>
        </div>

        {/* Reviews Marquee */}
        <ReviewsCarousel reviews={unifiedReviews} />
      </main>
      <Footer />
    </>
  );
}
