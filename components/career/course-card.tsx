import Image from "next/image";
import { Button } from "../ui/button";
import { CourseType } from "@/types/courses.types";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function CourseCard({ course }: { course: CourseType }) {
  return (
    <div
      key={course.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Banner Image with Overlay */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col grow">
        {/* Content wrapper that grows */}
        <div className="grow">
          {/* Title */}
          <h4 className="text-xl font-bold mb-4">{course.title}</h4>

          {/* Milestones and Courses */}
          <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>{course.milestones} milestones</span>
            </div>
            <span>•</span>
            <span>{course.courses} courses</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {course.description}
          </p>

          {/* Job Roles */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center">
              <Briefcase className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500 italic mx-1">Job Roles:</span>
              {course.jobRoles.map((role: string, index: number) => (
                <span
                  key={index}
                  className="text-sm text-[#4c0ffb] font-bold"
                >
                  {role}
                  {index < course.jobRoles.length - 1 && (
                    <span className="text-gray-400 mx-2">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button - stays at bottom */}
        <Button className="w-full bg-white border-2 border-[#4c0ffb] text-[#4c0ffb] hover:bg-[#4c0ffb] hover:text-white font-bold py-3 rounded-md uppercase tracking-wider transition-all duration-300 mt-auto cursor-pointer">
          EXPLORE CAREER PATH
        </Button>
      </div>
    </div>
  );
}
