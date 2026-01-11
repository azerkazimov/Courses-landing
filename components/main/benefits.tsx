import Image from "next/image";
import BenefitCta from "./benefit-cta";

export default function Benefits() {
  return (
    <section className="bg-[#4c0ffb] px-6 py-32 relative">
      <div className="max-w-layout mx-auto">
        <div className="text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Benefits of joining Zero To Mastery
          </h2>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto">
            We help you at every step of your learning and career journey. From
            beginner to getting hired to advancing your skills and having a
            successful, rewarding career.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 my-12">
          <div className="flex gap-6">
            <div className="shrink-0">
              <Image
                src="/Portfolio.svg"
                alt="Portfolio"
                width={75}
                height={75}
              />
            </div>
            <div>
              <h3 className="text-white text-[22px] font-bold mb-4">
                Build a portfolio of projects that make you stand out
              </h3>
              <p className="text-white text-lg">
                The projects we help you build are professional, real-world apps
                that will make your portfolio stand out and impress potential
                employers.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <Image src="/Arrow.svg" alt="Get Hired" width={75} height={75} />
            </div>
            <div>
              <h3 className="text-white text-[22px] font-bold mb-4">
                Get hired, in record time
              </h3>
              <p className="text-white text-lg">
                Stop wasting time on endless tutorials. Our step-by-step Career
                Paths give you an exact roadmap to go from any background to
                getting hired.{" "}
                <span className="font-bold">
                  No university degree required.
                </span>
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <Image
                src="/Promote.svg"
                alt="Get Promoted"
                width={75}
                height={75}
              />
            </div>
            <div>
              <h3 className="text-white text-[22px] font-bold mb-4">
                Get promoted, become top 10%
              </h3>
              <p className="text-white text-lg">
                Our intermediate and advanced courses help you continue to build
                your skills so that you can land senior roles and be recognized
                as a top tech professional.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="shrink-0">
              <Image
                src="/Anytime.svg"
                alt="Work Anywhere"
                width={75}
                height={75}
              />
            </div>
            <div>
              <h3 className="text-white text-[22px] font-bold mb-4">
                Gain the freedom to work anytime, anywhere
              </h3>
              <p className="text-white text-lg">
                We help you acquire top skills that allow you to work anywhere
                in the world at higher income levels. Build your dream career or
                become your own boss, no matter your experience level.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 px-22">
        <div className="max-w-layout mx-auto">
          <BenefitCta />
        </div>
      </div>
      <div className="absolute left-0 right-0 h-full bg-[#f5f5f5] -z-1" />
    </section>
  );
}
