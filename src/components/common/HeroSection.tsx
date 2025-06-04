'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  showCTA?: boolean;
  ctaText?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Büroreinigung",
  subtitle = "Saubere Büros für erfolgreiche Unternehmen",
  description = "Mit unserer professionellen Büroreinigung sorgen wir für eine hygienische, angenehme und produktive Arbeitsumgebung. Überzeugen Sie sich selbst von unserem zuverlässigen und flexiblen Service!",
  backgroundImage = "/images/img_frontviewwomanposingfuturisticportrait_1.png",
  showCTA = true,
  ctaText = "Jetzt buchen"
}) => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[360px] font-bold text-[#4d8fa756] uppercase tracking-wider leading-none select-none">
          REINEX
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <Image
              src={backgroundImage}
              alt="Professional cleaning service"
              width={369}
              height={517}
              className="rounded-[30px] w-full h-auto object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h1 className="text-6xl lg:text-8xl font-semibold text-[#13263e] mb-6 leading-tight">
                {title}
              </h1>
              <h2 className="text-4xl lg:text-5xl font-semibold text-black mb-8 leading-tight">
                {subtitle}
              </h2>
              <p className="text-2xl lg:text-3xl text-black leading-relaxed mb-8">
                {description}
              </p>
            </div>

            {showCTA && (
              <div>
                <Button 
                  variant="primary"
                  className="bg-gradient-to-r from-[#4d8fa7] to-[#508fa8] text-white px-12 py-6 rounded-full font-semibold text-2xl hover:shadow-lg transition-all"
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;