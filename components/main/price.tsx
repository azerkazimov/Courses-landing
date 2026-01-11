import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import DateIcon from "../ui/icons/date";

export default function Price() {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {`Here's how ZTM compares to other options`}
        </h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 relative">
          {/* Left Column  */}
          <div className="bg-white md:rounded-bl-3xl h-max mt-20">
            <div className="p-12 bg-[#3d4450] text-white  md:rounded-tl-3xl flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">OTHER PLATFORMS</h3>
              <p className="text-3xl font-bold">$10-$500</p>
            </div>

            <div className="space-y-6 p-8">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  An endless cycle of tutorials without a clear career plan.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  Get frustrated and stuck learning by yourself with no help.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  {`Waste your time learning outdated topics that employers don't care about anymore.`}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  Instructors are just influencers with no real-world job
                  experience.
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="bg-white md:rounded-3xl h-max lg:transform lg:scale-105 lg:z-10 lg:shadow-2xl -mx-4 lg:mx-0 my-6 lg:my-0">
            <div className="p-12 bg-[#f51767] text-white md:rounded-t-3xl flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold">ZERO TO MASTERY</h3>
              <p className="text-4xl font-bold">$25+</p>
            </div>

            <div className="space-y-6 p-8 bg-white text-black">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#f51767] text-white flex items-center justify-center shrink-0 mt-1">
                  <Check size={16} />
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed">
                    <span className="font-bold">
                      Get a clear step-by-step career roadmap
                    </span>{" "}
                    to go from zero (or any skill level) to getting hired or
                    promoted.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#f51767] text-white flex items-center justify-center shrink-0 mt-1">
                  <Check size={16} />
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed">
                    <span className="font-bold">
                      Be part of a private professional community
                    </span>{" "}
                    of students, TAs, and instructors to help you & network,
                    every step of your journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#f51767] text-white flex items-center justify-center shrink-0 mt-1">
                  <Check size={16} />
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed">
                    <span className="font-bold">Learn up-to-date skills</span>{" "}
                    that are actually being used by top tech companies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#f51767] text-white flex items-center justify-center shrink-0 mt-1">
                  <Check size={16} />
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed">
                    <span className="font-bold">
                      Learn from world-class instructors
                    </span>{" "}
                    that teach you from their experience at industry leading
                    companies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#f51767] text-white flex items-center justify-center shrink-0 mt-1">
                  <Check size={16} />
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed">
                    <span className="font-bold">Learn at your own pace,</span>{" "}
                    using our proven{" "}
                    <span className="underline">outcome-driven</span> methods.
                    Anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-8 pb-12 bg-white md:rounded-b-3xl">
              <Button className="w-full bg-[#f51767] text-white hover:bg-[#d91458] font-bold text-lg py-6 rounded-full transition-colors">
                JOIN ZERO TO MASTERY
              </Button>
            </div>
          </div>

          {/* Right Column*/}
          <div className="bg-white md:rounded-br-3xl h-max mt-20">
            <div className="p-12 bg-[#3d4450] text-white md:rounded-tr-3xl flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold">BOOTCAMP & COLLEGE</h3>
              <p className="text-3xl font-bold">$8,000+</p>
            </div>

            <div className="space-y-6 p-8">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  {`One-size-fits-all program that isn't tailored to your needs.`}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  Get frustrated receiving minimal support after the program is
                  over.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  {`Feel overwhelmed with strict programs that aren't learn-at-your-own-pace.`}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  {`Outdated and slow to adapt programs that don't keep up with the industry.`}
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2a2f38] text-white flex items-center justify-center shrink-0 mt-1">
                  <X />
                </div>
                <p className="text-[17px] leading-relaxed">
                  <span className="font-bold">{`You'll hear your classmates rave about ZTM.`}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto mt-16">
        <div className="flex space-x-16">
          <div className="w-8">
            <DateIcon />
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] text-[#636363] font-bold">
              100% RISK FREE
            </span>
            <p className="text-[22px] text-black font-bold leading-[32px]">{`We know you'll love ZTM. That's why we provide a no hassle, 30-day money back guarantee.`}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
