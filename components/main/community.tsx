import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const avatars = [
  "https://avatars.tzador.com/face?size=256&random=1",
  "https://avatars.tzador.com/face?size=256&random=2",
  "https://avatars.tzador.com/face?size=256&random=3",
];

export default function Community() {
  return (
    <section className="max-w-layout mx-auto py-16 lg:py-24 px-4">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Section - Phone Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm">
            <Image
              src="/phone.svg"
              alt="Discord Community"
              width={382}
              height={680}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-[18px] font-bold text-[#373f49]">
              OUR COMMUNITY
            </p>
            <h2 className="text-[32px] font-bold text-black">
              Learn together, grow together
            </h2>
            <p className="text-[20px] text-[#373f49]">
              {`Learning alone is hard. That's why you'll be supported by our
              community of 500,000+ students, alumni, mentors, and instructors.
              We're here with you every step of the way to ensure you reach your
              goals and help you take your skills, confidence, and career to the
              next level.`}
            </p>
          </div>

          {/* CTAs */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-[20px] inline-flex items-center gap-2 text-[#4c0ffb] font-bold hover:gap-3 transition-all"
            >
              CHECK OUT OUR COMMUNITY
              <ArrowRight className="w-5 h-5" />
            </Link>
            <div>
              <Link
                href="#"
                className="text-[20px] inline-flex items-center gap-3 text-[#4c0ffb] font-bold hover:underline"
              >
                <div className="px-2 py-1 border border-[#4c0ffb] rounded-sm">
                  <Play className="w-2 h-2 fill-[#4c0ffb]" />
                </div>
                TOUR OUR DISCORD COMMUNITY
              </Link>
            </div>
          </div>

          {/* Testimonial */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={avatars[0]}
                  alt="Olga Fomin"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-gray-800"
                  >
                    <path
                      d="M12 3.75L12.75 3.75L12.75 1.5L12 1.5L12 3.75ZM12 20.25L11.25 20.25L11.25 22.5L12 22.5L12 20.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900">Olga Fomin</h3>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-sm text-gray-900 leading-relaxed pt-2">
                  {`"I would recommend ZTM courses to anyone who wants to learn web
                  dev inside and out. The Jr to Sr course helped me land my job at
                  Tesla!"`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
