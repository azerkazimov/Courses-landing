"use client";
import { useCount } from "@/hooks/use-count";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Academy() {
  const avatars = [
    "https://avatars.tzador.com/face?size=256&random=1",
    "https://avatars.tzador.com/face?size=256&random=2",
    "https://avatars.tzador.com/face?size=256&random=3",
  ];

  // Counters & speeds
  const coursesCount = useCount({ count: 159, speed: 5 });
  const careerPathsCount = useCount({ count: 26, speed: 50 });
  const videoHoursCount = useCount({ count: 1701, speed: 3 });

  return (
    <section className="max-w-layout mx-auto py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="block">
            <p className="text-[18px] font-bold text-[#373f49]">OUR ACADEMY</p>
            <h2 className="text-[32px] font-bold ">
              Learn in-demand skills, 24/7
            </h2>
            <p className="text-[20px] text-[#373f49] ">
              1,700+ hours of beginner to advanced video lessons covering
              Programming, A.I. & Machine Learning, UX/UI Design, DevOps,
              CyberSecurity, Data Analytics, Web3 & Blockchain, and more. All on
              your schedule.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 pt-4">
            <Link
              href="/courses"
              className="flex items-center gap-2 text-[#4c0ffb] font-bold text-[20px] hover:gap-3 transition-all"
            >
              VIEW OUR COURSES
              <ChevronRightIcon />
            </Link>
            <Link
              href="/career-paths"
              className="flex items-center gap-2 text-[#4c0ffb] font-bold text-[20px] hover:gap-3 transition-all"
            >
              VIEW OUR CAREER PATHS
              <ChevronRightIcon />
            </Link>
          </div>

          <div className="h-[3px] w-6 bg-[#4c0ffb]"></div>

          {/* Testimonial */}
          <div className="pt-8 space-y-4">
            <div className="flex">
              <Image
                src={avatars[0]}
                alt="Jiel Selmani"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full"
              />
              <div className="mt-4 -ml-4 bg-white rounded-full border w-20 h-20 flex items-center justify-center font-bold shadow-md">
                <div className="flex">
                  PART
                  <span className="bg-[#36353a] text-white rounded-full w-6 h-6 flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl">Jiel Selmani</h3>
              <p className="text-gray-600">Software Engineer</p>
            </div>
            <blockquote className="text-lg font-medium">
              &ldquo;ZTM has changed the trajectory of my life. The projects I
              was able to build from what I learned in ZTM courses is what got
              me my job.&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Right side - Dashboard Image */}
        <div className="relative">
          <Image
            src="/new_academy.webp"
            alt="ZTM Academy Dashboard"
            width={1200}
            height={900}
            className="w-full h-auto rounded-lg shadow-2xl"
          />
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl lg:text-7xl  text-[#5B4DFF]">
                {coursesCount}
              </div>
              <div className="h-[3px] w-6 bg-gray-900 mt-2"></div>
              <div className="text-[18px] font-bold text-gray-900 tracking-wide">
                COURSES
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl lg:text-7xl text-[#5B4DFF] mb-2">
                {careerPathsCount}
              </div>
              <div className="h-[3px] w-6 bg-gray-900 mt-2"></div>
              <div className="text-[18px] font-bold text-gray-900 tracking-wide">
                CAREER PATHS
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-6xl lg:text-7xl text-[#5B4DFF] mb-2">
                {videoHoursCount.toLocaleString()}
              </div>
              <div className="h-[3px] w-6 bg-gray-900 mt-2"></div>
              <div className="text-[18px] font-bold text-gray-900 tracking-wide">
                VIDEO HOURS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
