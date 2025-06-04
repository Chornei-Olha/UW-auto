'use client';

import React from 'react';

interface ChipProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  className?: string;
  removable?: boolean;
  onRemove?: () => void;
}

const Chip: React.FC<ChipProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  onClick,
  className = '',
  removable = false,
  onRemove
}) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium transition-all duration-200';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    primary: 'bg-[#4d8fa7] text-white hover:bg-[#3a7a8f]',
    secondary: 'bg-[#13263e] text-white hover:bg-[#0f1d2f]'
  };
  
  const sizes = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-1.5 text-sm',
    large: 'px-4 py-2 text-base'
  };
  
  const chipClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    onClick ? 'cursor-pointer' : ''
  } ${className}`;

  return (
    <span className={chipClasses} onClick={onClick}>
      {children}
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-2 hover:bg-black hover:bg-opacity-20 rounded-full p-0.5 transition-colors"
        >
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Chip;