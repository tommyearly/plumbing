"use client";

import React from "react";

interface FeatureCard {
  imageSrc: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
}

interface FeatureCardsProps {
  heading: string;
  subheading: string;
  description: string;
  cards: FeatureCard[];
}

export default function FeatureCards({ heading, subheading, description, cards }: FeatureCardsProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24">
        {subheading && <h5 className="font-bold text-primary-500 mb-4">{subheading}</h5>}
        <h2 className="text-4xl sm:text-5xl font-black tracking-wide text-center w-full">{heading}</h2>
        {description && <p className="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 max-w-4xl mx-auto w-full text-center">{description}</p>}
        <div className="mt-10 w-full" />
        {cards.map((card, i) => (
          <div key={i} className="md:w-1/2 lg:w-1/3 max-w-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8">
              <span className="border text-center rounded-full p-5 flex-shrink-0">
                <img src={card.imageSrc || ''} alt="" className="w-6 h-6" />
              </span>
              <span className="sm:ml-4 mt-4 sm:mt-2">
                <span className="mt-4 tracking-wide font-bold text-2xl leading-none">{card.title || ''}</span>
                <p className="mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose">{card.description || ''}</p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 