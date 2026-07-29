"use client"

type Review = {
  id: string;
  author: string;
  avatar: string;
  message: string;
  product: string;
  verified: boolean;
  date: string;
  source?: "discord" | "shoppex";
};

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex-shrink-0 w-80 flex flex-col border-none border-0 border-l-0 transition-all duration-300 hover:bg-white/[0.03] rounded-lg">
      <div className="px-4 py-5 sm:p-6 grow">
        <div className="flex items-center gap-4 mb-4">
          <img
            alt={review.author}
            width="48"
            height="48"
            className="w-12 h-12 rounded-full object-cover bg-muted"
            src={review.avatar}
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}`;
            }}
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-foreground whitespace-nowrap">
                {review.author}
              </h3>
              {review.verified && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary flex-shrink-0">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="text-sm text-muted-foreground whitespace-nowrap">
              {review.product}
            </p>
          </div>
        </div>
        <p className="text-foreground/80 leading-relaxed text-sm line-clamp-4">
          {review.message}
        </p>
        <p className="text-xs text-muted-foreground/50 mt-4">
          {new Date(review.date).toLocaleDateString()}
        </p>
      </div>
    </div>
  )
}

function MarqueeRow({ reviews, dir }: { reviews: Review[]; dir: "left" | "right" }) {
  const duplicated = [...reviews, ...reviews]
  const duration = Math.max(20, reviews.length * 6)

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex marquee-track"
        style={{
          animation: `marquee-${dir} ${duration}s linear infinite`,
          animationDelay: `-${Math.floor(duration * 0.50)}s`,
        }}
      >
        {duplicated.map((review, i) => (
          <div key={`${review.id}-${i}`} className="mr-6 last:mr-0">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground mb-4 opacity-50"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
        <h3 className="text-lg font-medium text-foreground mb-1">No reviews yet</h3>
        <p className="text-muted-foreground">Reviews from Discord and Shoppex will appear here.</p>
      </div>
    )
  }

  const perRow = 5
  const rows: Review[][] = []
  for (let i = 0; i < reviews.length; i += perRow) {
    rows.push(reviews.slice(i, i + perRow))
  }

  return (
    <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto pb-12 space-y-6">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      {rows.map((row, i) => (
        <MarqueeRow key={i} reviews={row} dir={i % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  )
}
