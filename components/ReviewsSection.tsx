'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { reviews } from '@/data/reviews';

export default function ReviewsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-title">
      <div className="reviews-heading">
        <p className="section-kicker">Guest stories</p>
        <h2 id="reviews-title">What Our <em>Guests Say</em></h2>
        <p>Preview copy is shown below. Verified review quotes and source links can be added when approved.</p>
        <Link className="text-link" href="/reviews">Review details <ArrowRight aria-hidden="true" size={16} /></Link>
      </div>

      <Carousel aria-label="Guest reviews" className="reviews-carousel" opts={{ align: 'start', loop: false }}>
        <CarouselContent className="reviews-track">
          {reviews.map((review, index) => (
            <CarouselItem aria-label={`Review ${index + 1} of ${reviews.length}`} className="review-slide md:basis-1/2 xl:basis-1/3" key={review.id}>
              <motion.article
                className="review-card"
                initial={false}
                transition={{ duration: 0.55 }}
                viewport={{ once: true, amount: 0.3 }}
                whileInView={reduceMotion ? undefined : { opacity: [0, 1], y: [18, 0] }}
              >
                <span className="demo-badge">Demo review</span>
                <div className="stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => <Star aria-hidden="true" fill="currentColor" key={star} size={14} />)}
                </div>
                <blockquote>“{review.quote}”</blockquote>
                <div className="reviewer">
                  <span className="review-avatar" aria-hidden="true">{review.initials}</span>
                  <div><strong>{review.reviewer}</strong><small>{review.location}</small></div>
                </div>
              </motion.article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="review-controls">
          <CarouselPrevious className="review-prev" />
          <CarouselNext className="review-next" />
        </div>
      </Carousel>
    </section>
  );
}
