'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionProps {
  question: string;
  answer: string;
  defaultExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ 
  question, 
  answer, 
  defaultExpanded = false 
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={toggleExpanded}
        className="w-full flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors p-2 rounded"
      >
        <span className="text-lg font-normal text-black leading-6 flex-1 pr-4">
          {question}
        </span>
        <Image 
          src="/images/img_component_1_2.svg" 
          alt={isExpanded ? "Collapse" : "Expand"} 
          width={24} 
          height={24}
          className={`transform transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
        />
      </button>
      
      {isExpanded && (
        <div className="mt-4 pl-2 pr-8">
          <p className="text-base text-gray-700 leading-6 whitespace-pre-line">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;