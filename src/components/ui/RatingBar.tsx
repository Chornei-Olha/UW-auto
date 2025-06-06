'use client';

import React from 'react';
import Image from 'next/image';

interface RatingBarProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

const RatingBar: React.FC<RatingBarProps> = ({ rating, maxRating = 1, className = '' }) => {
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Image
          key={index}
          src={index < rating ? '/images/img_rate.svg' : '/images/img_rate_blue_gray_500_02.svg'}
          alt={`Star ${index + 1}`}
          width={78}
          height={14}
          className="w-[74px] h-3.5"
        />
      ))}
    </div>
  );
};

export default RatingBar;
