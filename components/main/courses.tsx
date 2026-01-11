import Image from "next/image";
import Link from "next/link";
import machineLearningEngineer from "@/public/Machine_Learning_Engineer.webp";
import frontendDeveloper from "@/public/Become_a_Frontend_Developer.webp";
import pythonDeveloper from "@/public/Become_a_Python_Developer.webp";
import DuckIcon from "@/components/ui/icons/duck";
import { ArrowRight } from "lucide-react";

const careerPaths = [
  {
    id: 1,
    image: machineLearningEngineer,
    label: "BECOME AN",
    title: "AI & Machine Learning Engineer",
    href: "#",
  },
  {
    id: 2,
    image: frontendDeveloper,
    label: "BECOME A",
    title: "Fullstack Web Developer",
    href: "#",
  },
  {
    id: 3,
    image: pythonDeveloper,
    label: "BECOME AN",
    title: "AI Developer",
    href: "#",
  },
  {
    id: 4,
    image: machineLearningEngineer,
    label: "BECOME A",
    title: "Data Engineer",
    href: "#",
  },
];

export default function Courses() {
  return (
    <section className="w-full py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-layout mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-[40px] font-bold mb-6">
            Zero to hired in record time
          </h3>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Our Career Paths provide you with the step-by-step roadmap you need
            to go from any background and no experience to getting hired, in
            record time. Pick one of the most popular Career Paths below or{" "}
            <Link
              href="#"
              className="underline hover:underline-offset-2 transition-all duration-300"
            >
              explore all 26 Career Paths here
            </Link>
            .
          </p>
        </div>

        {/* Career Path Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8 ">
          {careerPaths.map((path) => (
            <div key={path.id} className="px-2 ">
            <Link
              key={path.id}
              href={path.href}
              className="relative group bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-6 p-6"
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
                  <p className="text-xs font-bold text-gray-600 mb-1">
                    {path.label}
                  </p>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#5D3FD3] to-[#7B5FE8] group-hover:from-[#4B2FB8] group-hover:to-[#6A4ED7] transition-all">
                    {path.title}
                  </h3>
                </div>

                {/* Arrow Button */}
                <div className="shrink-0 w-14 h-14 rounded-md border-2 border-[#5D3FD3] flex items-center justify-center group-hover:bg-[#5D3FD3] transition-all duration-300">
                  <ArrowRight className="w-6 h-6 text-[#5D3FD3] group-hover:text-white transition-colors" />
                </div>
              </div>
            </Link>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className=" block group bg-[#4c0ffb] overflow-hidden  rounded-xs py-4  hover:bg-[#390bbc] transition-all duration-300 hover:shadow-md"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="-mb-6 ">
              <DuckIcon width={60} height={60} className="shrink-0" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white text-[18px] font-medium">
                Not sure where to start?{" "}
                <span className="font-bold">Take our career quiz</span>
              </span>
              <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
