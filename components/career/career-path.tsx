import { Button } from "../ui/button";
import machineLearningEngineer from "@/public/Machine_Learning_Engineer.webp";
import frontendDeveloper from "@/public/Become_a_Frontend_Developer.webp";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CareerPath() {
  const careerPaths = [
    {
      id: 1,
      image: machineLearningEngineer,
      label: "CAREER PATH FOR ALL",
      title: "AI & Machine Learning Engineer",
      href: "#",
      bgColor: "#4c0ffb",
    },
    {
      id: 2,
      image: frontendDeveloper,
      label: "CAREER PATH FOR ALL",
      title: "Fullstack Web Developer",
      href: "#",
      bgColor: "#e60a5a",
    },
  ];

  return (
    <section className="max-w-layout mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 my-16 max-w-layout mx-auto">
        {/* Left Section - Main Content */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-[50px] font-bold mb-6 leading-tight">
            Zero To Mastery Career Paths
          </h1>
          <p className="text-[22px] text-gray-600 leading-relaxed">
            {`Whether you're a complete beginner or an experienced professional, figuring out the next step
          in your career can be overwhelming. Our curated Career Paths provide you with the step-by-
          step roadmap you need to take you from any level, to getting hired and advancing your career.`}
          </p>
        </div>

        {/* Right Section - CTA Box */}
        <div className="lg:w-96 shrink-0">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 leading-tight">
              {`Not sure what Career Path is best for you? We'll help you find the right path 👇`}
            </h3>
            <Button className="bg-[#e60a5a] hover:bg-[#C2185B] text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wider transition-colors duration-200 w-full">
              FIND MY CAREER PATH
            </Button>
          </div>
        </div>
      </div>

      {/* Career Path Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8 ">
        {careerPaths.map((path) => (
          <div key={path.id} className="px-2 ">
            <Link
              key={path.id}
              href={path.href}
              className="relative group rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6 p-6"
              style={{ backgroundColor: path.bgColor }}
            >
              {/* Image */}
              <div className="absolute -top-5 -left-3 w-49 h-28 rounded-md overflow-hidden">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex items-center justify-between ml-44">
                <div>
                  <p className="text-xs font-bold text-white mb-1">
                    {path.label}
                  </p>
                  <h3 className="text-xl font-bold text-white transition-all">
                    {path.title}
                  </h3>
                </div>

                {/* Arrow Button */}
                <div className="shrink-0 w-14 h-14 rounded-md border-2 border-white flex items-center justify-center group-hover:bg-white transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-white group-hover:text-gray-900 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
