import { coursesData } from "@/data/courses.data";
import { CourseType } from "@/types/courses.types";
import CourseCard from "./course-card";

export default function CoursesPage() {
  return (
    <section className="max-w-layout mx-auto">
      <div className="w-full py-20 px-4">
        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course: CourseType) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
