"use client";

import { useEffect, useState } from "react";

type Review = {
  id: string;
  author: string;
  avatar: string;
  message: string;
  product: string;
  verified: boolean;
  date: string;
};

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="testimonials" className="w-full">
      <div className="w-full h-full flex flex-col">
        <div className="relative w-full">
          <div className="text-center relative overflow-hidden py-8 md:py-12 px-4 md:px-8 lg:px-12">
            <h2 className="text-sm text-muted-foreground text-balance font-semibold tracking-tight uppercase">
              Reviews
            </h2>
          </div>
          <div className="pointer-events-none absolute inset-0 w-full h-full bg-linear-to-t from-transparent -z-10 from-50%"></div>
          <div className="w-full h-full -z-20 absolute inset-0 size-full">
            <canvas
              className="pointer-events-none"
              width="1517"
              height="116"
            ></canvas>
          </div>
        </div>

        <div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-0 pb-24 relative px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
            <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-2/6 w-[calc(100%-2px)] overflow-hidden bg-gradient-to-t from-background to-transparent z-10"></div>
            
            {loading ? (
              <div className="w-full flex justify-center py-20 col-span-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className="flex flex-col break-inside-avoid border-none border-0 border-l-0 transition-all duration-300 hover:bg-white/[0.03] rounded-lg mb-4"
                >
                  <div className="px-4 py-5 sm:p-6 grow">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        alt={review.author}
                        loading="lazy"
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
                          <h3 className="text-lg font-medium text-foreground">
                            {review.author}
                          </h3>
                          {review.verified && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4 text-primary"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {review.product}
                        </p>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed text-sm">
                      {review.message}
                    </p>
                    <p className="text-xs text-muted-foreground/50 mt-4">
                      {new Date(review.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full flex justify-center py-20 col-span-full">
                <p className="text-muted-foreground">No reviews found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
