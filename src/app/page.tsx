import React from 'react';
import Link from "next/link";
import { client } from "../../tina/__generated__/client";
import FeatureCards from "../components/FeatureCards";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Image from "next/image";

interface FeatureCard {
  imageSrc: string | null | undefined;
  title: string | null | undefined;
  description: string | null | undefined;
}

export default async function Home() {
  const [homeResult, featuresResult, testimonialsResult, faqsResult] = await Promise.all([
    client.queries.home({ relativePath: "index.json" }),
    client.queries.features({ relativePath: "index.json" }),
    client.queries.testimonials({ relativePath: "index.json" }),
    client.queries.faqs({ relativePath: "index.json" })
  ]);

  const { data: homeData } = homeResult;
  const { data: featuresData } = featuresResult;
  const { data: testimonialsData } = testimonialsResult;
  const { data: faqsData } = faqsResult;

  const validCards: FeatureCard[] = (featuresData?.features?.cards || [])
    .filter((card): card is NonNullable<typeof card> => card !== null)
    .map(card => ({
      imageSrc: card.imageSrc,
      title: card.title,
      description: card.description
    }));

  const validTestimonials = (testimonialsData?.testimonials?.testimonials || [])
    .filter((testimonial): testimonial is NonNullable<typeof testimonial> => testimonial !== null)
    .map(testimonial => ({
      content: testimonial.content,
      author: testimonial.author,
      role: testimonial.role,
      image: testimonial.image
    }));

  const validFaqs = (faqsData?.faqs?.faqs || [])
    .filter((faq): faq is NonNullable<typeof faq> => faq !== null)
    .map(faq => ({
      question: faq.question,
      answer: faq.answer
    }));

  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative -mx-8 -mt-8 bg-center bg-cover" 
           style={{ backgroundImage: `url('${homeData?.home?.heroBackgroundImage}')` }}>
        <div className="z-10 absolute inset-0 bg-primary-500 opacity-25"></div>
        <div className="z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto">
          <div className="pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row">
            <div className="flex flex-col items-center lg:block">
              <span className="inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm">
                {homeData?.home?.heroNotification}
              </span>
              <h1 className="text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none">
                <span>{homeData?.home?.heroTitle}</span>
                <br />
                <span className="relative text-primary-500 px-4 -mx-4 py-2">
                  <span className="absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10"></span>
                  {homeData?.home?.heroSubtitle}
                </span>
              </h1>
              <button className="px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hover:bg-primary-500 hover:text-gray-100 focus:shadow-outline">
                {homeData?.home?.heroButtonText}
              </button>
            </div>
            <div className="w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8">
              <div className="relative rounded">
                <div className="relative z-40 transform xl:-translate-x-24 xl:-translate-y-16">
                  <Image 
                    src={homeData?.home?.heroFeatureImage || ''}
                    alt="Plumbing Service" 
                    width={384}
                    height={256}
                    className="max-w-full w-96 rounded-t sm:rounded relative z-20"
                  />
                  <div className="absolute inset-0 bg-gray-300 rounded xl:-mb-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeatureCards
        heading={featuresData?.features?.heading || "Our Features"}
        subheading={featuresData?.features?.subheading || "What We Offer"}
        description={featuresData?.features?.description || "Discover our amazing features"}
        cards={validCards}
      />

      <Testimonials
        heading={testimonialsData?.testimonials?.heading || "Testimonials"}
        subheading={testimonialsData?.testimonials?.subheading || "What Our Clients Say"}
        description={testimonialsData?.testimonials?.description || "Don't just take our word for it"}
        testimonials={validTestimonials}
      />

      <FAQs
        heading={faqsData?.faqs?.heading || "Frequently Asked Questions"}
        subheading={faqsData?.faqs?.subheading || "Common Questions"}
        description={faqsData?.faqs?.description || "Find answers to the most common questions"}
        faqs={validFaqs}
      />
    </main>
  );
}
