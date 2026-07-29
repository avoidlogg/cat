"use client";

import { useEffect, useState } from "react";
import ReviewsCarousel from "@/components/ReviewsCarousel";

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
            <h2 className="motion-reveal text-sm text-muted-foreground text-balance font-semibold tracking-tight uppercase">
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

        <div className="motion-reveal">
          {loading ? (
            <div className="w-full flex justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <ReviewsCarousel reviews={reviews} />
          )}
        </div>
      </div>
    </section>
  );
}
