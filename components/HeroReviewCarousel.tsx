'use client';
import { useState } from 'react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    img: '/assets/images/profile-pic1.jpg',
    name: 'Marty Blum',
    role: 'Founder of Alpha Design',
  },
  {
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    img: '/assets/images/profile-pic2.jpg',
    name: 'Lena Gonzalez',
    role: 'Founder of Lion Studio',
  },
  {
    title: 'LOREM IPSUM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    img: '/assets/images/profile-pic3.jpg',
    name: 'Eileen Givens',
    role: 'Founder of Galaxy Infotech',
  },
];

export default function HeroReviewCarousel() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const prevReview = () => setReviewIdx((i) => (i === 0 ? reviews.length - 1 : i - 1));
  const nextReview = () => setReviewIdx((i) => (i === reviews.length - 1 ? 0 : i + 1));
  return (
    <div className="w-full max-w-2xl mb-4 flex flex-col items-start pl-0">
      <div className="w-full flex justify-end mb-2">
        <button onClick={prevReview} className="rounded-full bg-gray-200 hover:bg-gray-300 p-2" aria-label="Previous Review">
          <svg className="w-6 h-6" fill="none" stroke="#001e2b" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextReview} className="rounded-full bg-gray-200 hover:bg-gray-300 p-2 ml-2" aria-label="Next Review">
          <svg className="w-6 h-6" fill="none" stroke="#001e2b" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <ReviewCard {...reviews[reviewIdx]} />
    </div>
  );
} 