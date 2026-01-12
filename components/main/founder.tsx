"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

export default function Founder() {
    const quotes = ["Reach your career goals.", "Be your own boss.", "Get promoted.", "Get hired"]
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(false);
            setTimeout(() => {
                setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
                setIsAnimating(true);
            }, 300); 
        }, 2000);

        return () => clearInterval(interval);
    }, [quotes.length]);

  return (
    <section className="bg-[#4c0ffb] text-white pb-16 max">
      <div className="max-w-layout mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Button */}
          <div className="flex flex-col items-center space-y-6 h-full">
            <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images.png"
                alt="Andrei Neagoie - Founder"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <button className="border-2 border-white rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-[#4c0ffb] transition-colors">
              See my bio & courses
            </button>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold flex items-center gap-3">
              <span className="text-5xl">👋</span> From the founder
            </h2>

            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                {`Hey there, I'm Andrei Neagoie. I've learned a lot over 15+ years in the industry,
                having gone from zero technical knowledge, to teaching myself how to code,
                to becoming a Senior Software Engineer.`}
              </p>

              <p>
                <span className="font-bold">{`I've been in your shoes.`}</span>{" "}
                {`So I know there are an overwhelming number of
                online courses, tutorials, and information out there. Some are great, but
                most aren't: they're outdated, taught by non experts, and they don't teach the
                right modern skills.`}
              </p>

              <p>
                {`    That's why I created Zero To Mastery. Along with our group of world-class
                    instructors, I now dedicate 100% of my time teaching people just like you the
                    exact steps (and skills) to excel in the tech industry.`}
              </p>

              <p>
                Since 2018,{" "}
                <span className="font-bold">over 1,000,000 students</span>{" "}
                around the world have taken our courses and many of them are now
                working in their dream job at companies like{" "}
                <span className="font-bold underline">Apple</span>,{" "}
                <span className="font-bold underline">Google</span>,{" "}
                <span className="font-bold underline">Amazon</span>,{" "}
                <span className="font-bold underline">Tesla</span>,{" "}
                <span className="font-bold underline">IBM</span>,{" "}
                <span className="font-bold underline">Meta</span>,{" "}
                <span className="font-bold underline">Nvidia</span>, or have
                started their own businesses.
              </p>

              <p className="font-bold">You can too.</p>

              <p>
                By joining the{" "}
                <span className="font-bold underline">
                  Zero To Mastery Academy
                </span>
                {`and putting in the work, you'll be able to take control of your
                life, work in an exciting industry with infinite possibilities,
                and`} <span className="font-bold">live the life you want.</span>
              </p>

              <div className="pt-2">
                <p>See you inside,</p>
                <p>Andrei</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-[#f5f1e8] text-black py-16 rounded-3xl max-w-layout mx-auto">
        <div className="container mx-auto px-6 text-center space-y-8">
            <h2 className="text-[65px] font-bold leading-[1.2]">
              Learn in-demand skills.
              <br />
                <span className={`text-[#e60a5a] inline-block transition-all duration-300 ${
                  isAnimating 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}>
                  {quotes[currentQuoteIndex]}
                </span>
            </h2>
          <Button className="bg-[#e60a5a] hover:bg-[#d14b72] text-white rounded-full text-[20px] font-bold px-16 py-8 uppercase tracking-wide transition-colors">
            See all courses
          </Button>
        </div>
      </div>
    </section>
  );
}
