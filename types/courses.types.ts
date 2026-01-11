import { StaticImageData } from "next/image";

export interface CourseType  {
  id: number;
  image: StaticImageData;
  label: string;
  title: string;
  milestones: number;
  courses: number;
  description: string;
  jobRoles: string[];
  bgGradient: string;
};