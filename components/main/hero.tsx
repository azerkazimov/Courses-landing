'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const avatars = [
    "https://avatars.tzador.com/face?size=256&random=1",
    "https://avatars.tzador.com/face?size=256&random=2",
    "https://avatars.tzador.com/face?size=256&random=3",
  ];

  const checkmarks = [
    "26 roadmaps to get into a $100,000+/year career",
    "Master top skills for 2026 with our up-to-date courses",
    "Stand out by building epic real-world projects",
    "Get help when you need it from industry experts & alumni",
    "Get ahead & level up by working with the latest AI tools",
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section className="max-w-layout mx-auto py-2 lg:py-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-24">
        {/* Left side - Content */}
        <div className="space-y-4">
          {/* Avatars and community text */}
          <div className="flex items-center gap-3">
            <div className="flex">
              {avatars.map((avatar) => (
                <Image
                  key={avatar}
                  src={avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white ml-[-16px] first:ml-0"
                />
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Learn alongside our community of{" "}
              <span className="font-bold text-pink-600">500,000+</span>{" "}
              students, instructors, and mentors.
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl lg:text-[42px] font-bold leading-tight">
            Learn in-demand skills{" "}
            <span className="text-[#E60A5A]">
              for
              <br />
              less than $1/day.
            </span>
          </h1>

          {/* Checkmarks list */}
          <ul className="space-y-2">
            {checkmarks.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <svg
                  className="w-6 h-6 text-[#E60A5A] shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-[20px] text-gray-700">{item}</span>
              </li>
            ))}
          </ul>

          <Button className="ml-8 bg-[#E60A5A] hover:bg-pink-700 text-white font-bold text-lg px-12 py-8 rounded-full transition-colors">
            SEE ALL COURSES
          </Button>

          <p className="text-[#E60A5A] font-bold text-xl">
            GET A CUSTOM CAREER ROADMAP
          </p>

          <div className="flex items-center gap-3 ml-8">
            <span className="text-md font-semibold">Excellent</span>
            <span className="text-sm">4.8 out of 5</span>
            <div className="flex items-center gap-1">
              <svg
                className="w-5 h-5 text-green-500 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <span className="font-semibold ">Trustpilot</span>
          </div>
        </div>

        {/* Right side - Images */}
        <div className="relative">
          {/* Main slide image */}
          <div className="relative z-0">
            <Image
              src="/slide_1.webp"
              alt="ZTM Career Paths"
              width={540}
              height={400}
              className=" rounded-lg"

            />
          </div>

          <div className="absolute top-14 -left-16 z-10 animate-float">
            <Image
              src="/slide_left.webp"
              alt="Previous slide"
              width={600}
              height={450}
              className="w-1/1 h-auto rounded-lg"
            />
          </div>

          <div className="absolute -bottom-24 right-10 z-10 animate-float">
            <Image
              src="/slide_right.webp"
              alt="Next slide"
              width={600}
              height={450}
              className="w-1/1 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
