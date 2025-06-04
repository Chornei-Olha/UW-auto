'use client';

import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  description?: string;
  icon?: string;
  number?: string;
  variant?: 'service' | 'feature' | 'step';
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  number,
  variant = 'feature',
  className = '',
  children
}) => {
  const getCardStyles = () => {
    switch (variant) {
      case 'service':
        return 'bg-[#4d8fa7] text-white p-6 rounded-lg h-40 flex flex-col justify-between';
      case 'feature':
        return 'bg-[#4d8fa756] p-8 rounded-3xl';
      case 'step':
        return 'bg-white p-6 rounded-lg shadow-lg';
      default:
        return 'bg-white p-6 rounded-lg shadow-md';
    }
  };

  return (
    <div className={`${getCardStyles()} ${className}`}>
      {number && variant === 'feature' && (
        <div className="text-right mb-4">
          <span className="text-4xl font-medium text-[#13263e]">{number}</span>
        </div>
      )}
      
      {icon && (
        <div className="mb-4">
          <Image src={icon} alt={title} width={60} height={60} />
        </div>
      )}

      <div>
        <h3 className={`font-medium mb-3 ${
          variant === 'service' ? 'text-xl text-white' : 
          variant === 'feature' ? 'text-2xl text-[#13263e]' : 
          'text-xl text-gray-900'
        }`}>
          {title}
        </h3>
        
        {description && (
          <p className={`leading-relaxed ${
            variant === 'service' ? 'text-white text-sm' : 
            variant === 'feature' ? 'text-[#13263e] text-base' : 
            'text-gray-600 text-sm'
          }`}>
            {description}
          </p>
        )}
      </div>

      {children}
    </div>
  );
};

export default Card;