"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  heading: string;
  subheading: string;
  description: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({
  heading,
  subheading,
  description,
  testimonials,
}) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
            {subheading}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {heading}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="px-6 py-8">
                <div className="relative h-12 w-12 mx-auto">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="rounded-full"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 