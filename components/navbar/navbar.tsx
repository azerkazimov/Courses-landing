"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { BootcampIcon } from "@/components/ui/icons/bootcamp";
import { CalendarIcon } from "@/components/ui/icons/calendar";
import DuckIcon from "@/components/ui/icons/duck";
import { OnlineIcon } from "@/components/ui/icons/online";
import { PassportIcon } from "@/components/ui/icons/passport";
import { PathIcon } from "@/components/ui/icons/path";
import { ProjectIcon } from "@/components/ui/icons/project";
import { BlogIcon } from "@/components/ui/icons/blog";
import { MailIcon } from "@/components/ui/icons/mail";
import { SheetIcon } from "@/components/ui/icons/sheet";
import { HubIcon } from "@/components/ui/icons/hub";
import { RulesIcon } from "@/components/ui/icons/rules";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import machineLearningEngineer from "@/public/Machine_Learning_Engineer.webp";
import frontendDeveloper from "@/public/Become_a_Frontend_Developer.webp";
import pythonDeveloper from "@/public/Become_a_Python_Developer.webp";
import phytonCourse from "@/public/phyton.webp";

const newsletterItems = [
  {
    title: "A.I. & M.L. Monthly",
    image: machineLearningEngineer,
  },
  {
    title: "Become a Frontend Developer",
    image: frontendDeveloper,
  },
  {
    title: "Become a Python Developer",
    image: pythonDeveloper,
  },
];

export default function Navbar() {
  const [activeResource, setActiveResource] = useState("blog");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`md:px-8 w-full bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b shadow-xs" : ""}`}>
      <div className="mx-auto flex max-w-layout items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <svg
            width="120"
            height="58"
            viewBox="0 0 981 474"
            fill="none"
            className="h-12 w-auto"
          >
            <path
              d="M461.932 264.31C462.292 265.61 462.952 266.92 462.962 268.22C463.022 291.2 462.952 314.18 463.082 337.16C463.102 340.06 462.142 341.59 459.662 343.01C384.682 386.09 309.742 429.25 234.772 472.34C233.702 472.95 232.222 472.86 230.932 473.1C231.292 471.22 231.952 469.33 231.962 467.45C232.032 444.31 232.002 421.18 232.002 398.04C272.102 374.77 312.222 351.53 352.292 328.22C366.482 319.96 380.572 311.52 394.702 303.16C399.222 300.74 403.822 298.45 408.252 295.87C426.172 285.39 444.042 274.83 461.932 264.31Z"
              fill="#F41868"
            />
            <path
              d="M2.0109 209.7C1.6709 208.03 1.0409 206.37 1.0409 204.7C0.970899 182.4 1.0909 160.09 0.900897 137.79C0.870897 134.09 2.1709 132.23 5.2609 130.45C79.8009 87.6499 154.281 44.7299 228.811 1.89993C230.021 1.19993 231.661 1.22992 233.091 0.919922C232.721 2.79992 232.041 4.67993 232.041 6.55993C231.971 29.6899 231.991 52.8299 231.991 75.9599C185.851 102.72 139.701 129.46 93.5809 156.26C85.4209 161 77.4009 165.98 69.3109 170.85C67.2609 171.39 64.9709 171.52 63.2009 172.54C48.1909 181.23 33.2009 190 18.3209 198.92C12.7409 202.26 7.4409 206.09 2.0109 209.7Z"
              fill="#32DD88"
            />
            <path
              d="M2.00044 341.7C1.67044 340.21 1.04045 338.72 1.04045 337.23C0.980445 314.61 1.07044 291.99 0.910444 269.37C0.890444 266.08 1.91044 264.38 4.75044 262.76C19.6004 254.31 34.3204 245.61 49.0804 237C71.5004 224.1 93.9204 211.2 116.34 198.3C117.67 197.63 119.04 197.03 120.33 196.28C156.19 175.65 192.04 154.98 227.93 134.4C229.43 133.54 231.35 133.4 233.07 132.92C232.71 134.8 232.05 136.69 232.04 138.57C231.97 161.71 232 184.84 232 207.98C215.58 217.63 199.17 227.28 182.75 236.93C160.67 249.68 138.6 262.43 116.52 275.18C114.78 276.12 113.02 277.02 111.3 278C97.2904 286.04 83.2804 294.09 69.2804 302.13C67.7304 302.65 66.0404 302.93 64.6604 303.74C48.4904 313.18 32.3304 322.64 16.2504 332.24C11.3704 335.16 6.75044 338.53 2.00044 341.7Z"
              fill="#F41868"
            />
            <path
              d="M461.88 133.99C461.92 158.28 462.04 182.58 461.85 206.87C461.84 208.61 460 210.98 458.36 211.96C446.22 219.19 433.91 226.13 421.68 233.21C419.39 234.54 417.2 236.05 414.97 237.47C392.7 250.27 370.44 263.07 348.17 275.87C327.66 287.57 307.15 299.27 286.64 310.96C268.44 321.33 250.23 331.7 232.03 342.06C232.02 316.76 232.01 291.45 232 266.15C248.62 256.49 265.24 246.84 281.87 237.18C303.35 224.82 324.83 212.46 346.3 200.07C346.84 199.76 347.22 199.16 347.68 198.69C348.6 198.37 349.61 198.19 350.44 197.72C364.6 189.53 378.75 181.32 392.88 173.07C393.67 172.61 394.21 171.74 394.87 171.06C396.91 170.51 399.2 170.37 400.95 169.33C415.64 160.67 430.19 151.78 444.88 143.12C450.4 139.86 456.2 137.02 461.88 133.99Z"
              fill="#32DD88"
            />
            <path
              d="M2 341.7C6.75 338.53 11.37 335.16 16.26 332.24C32.34 322.64 48.5 313.18 64.67 303.74C66.05 302.93 67.74 302.65 69.29 302.13C71.03 303.36 72.68 304.73 74.51 305.8C127 336.56 179.5 367.3 232 398.03C232 421.17 232.03 444.3 231.96 467.44C231.95 469.33 231.29 471.21 230.93 473.09C208.41 460.22 185.87 447.39 163.38 434.47C109.57 403.57 55.79 372.62 2 341.7Z"
              fill="#D31157"
            />
            <path
              d="M461.882 133.99C456.202 137.02 450.412 139.86 444.862 143.13C430.172 151.79 415.622 160.69 400.932 169.34C399.172 170.38 396.892 170.51 394.852 171.07C394.252 170.8 393.622 170.58 393.052 170.25C339.372 138.83 285.682 107.4 232.002 75.9697C232.002 52.8397 231.972 29.6997 232.052 6.56969C232.062 4.68969 232.742 2.80969 233.102 0.929688C253.032 12.2997 272.982 23.6197 292.872 35.0497C347.812 66.6497 402.722 98.2797 457.612 129.97C459.252 130.92 460.462 132.63 461.882 133.99Z"
              fill="#2DCC7D"
            />
            <path
              d="M501 314V283.2L556.4 200.2H501V165.4H603.6V196.2L548.2 279.2H603.6V314H501Z"
              fill="#403F3F"
            />
            <path
              d="M691.202 314V200.2H653.802V165.4H767.402V200.2H730.002V314H691.202Z"
              fill="#403F3F"
            />
            <path
              d="M811.469 314L829.069 165.4H865.469L896.069 269.8L926.669 165.4H962.669L980.469 314H943.069L933.469 233.8L913.869 314H877.469L858.069 235.6L848.869 314H811.469Z"
              fill="#403F3F"
            />
            <path
              d="M116.351 198.29C93.9315 211.19 71.5115 224.09 49.0915 236.99C33.4015 227.89 17.7115 218.8 2.02148 209.7C7.45148 206.09 12.7415 202.27 18.3215 198.92C33.2115 190 48.1915 181.24 63.2115 172.55C64.9815 171.53 67.2715 171.4 69.3215 170.86C84.9915 180 100.671 189.14 116.351 198.29Z"
              fill="#2DCC7D"
            />
            <path
              d="M348.16 275.87C370.43 263.07 392.69 250.27 414.96 237.47C430.62 246.41 446.27 255.36 461.93 264.3C444.04 274.82 426.17 285.38 408.25 295.85C403.82 298.43 399.22 300.72 394.7 303.14C379.18 294.06 363.67 284.96 348.16 275.87Z"
              fill="#D31157"
            />
            <path
              d="M233.08 132.91C254.87 145.35 276.68 157.75 298.45 170.24C314.89 179.67 331.26 189.21 347.67 198.7C347.22 199.17 346.84 199.77 346.29 200.08C324.82 212.47 303.34 224.82 281.86 237.19C265.24 227.45 248.63 217.71 232.01 207.97C232.01 184.83 231.98 161.7 232.05 138.56C232.05 136.68 232.72 134.79 233.08 132.91Z"
              fill="#D31157"
            />
            <path
              d="M232.021 342.07C203.531 325.66 175.031 309.27 146.561 292.82C136.511 287.01 126.541 281.06 116.531 275.17C138.611 262.42 160.681 249.67 182.761 236.92C184.011 237.73 185.231 238.59 186.511 239.34C201.671 248.29 216.831 257.22 231.991 266.16C232.001 291.46 232.011 316.76 232.021 342.07Z"
              fill="#2DCC7D"
            />
          </svg>
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* Academy with dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-bold text-black hover:text-gray-900 hover:border-b-2 hover:border-[#E60A5A]">
                Academy
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0">
                <div className="w-[997px] ">
                  {/* Main Content Grid */}
                  <div className="grid grid-cols-[1fr_2fr] gap-8">
                    {/* Left Section - Courses & Career Paths */}
                    <div className="space-y-8 bg-gray-50 px-10 py-10">
                      {/* Courses */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-black">
                          Courses
                        </h3>
                        <p className="text-sm text-gray-600">
                          150+ high-quality video courses taught by experts with
                          hands-on projects
                        </p>
                        <Button
                          variant="outline"
                          className="w-fit rounded border-2 border-[#E60A5A] px-6 text-sm font-bold text-[#E60A5A] hover:bg-[#E60A5A] hover:text-white"
                          asChild
                        >
                          <Link href="/courses">VIEW ALL COURSES</Link>
                        </Button>
                      </div>

                      {/* Career Paths */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-black">
                          Career Paths
                        </h3>
                        <p className="text-sm text-gray-600">
                          We&apos;ll teach you step-by-step all the skills
                          needed to be job ready
                        </p>
                        <Button
                          variant="outline"
                          className="w-fit rounded border-2 border-[#E60A5A] px-6 text-sm font-bold text-[#E60A5A] hover:bg-[#E60A5A] hover:text-white"
                          asChild
                        >
                          <Link href="/career-path">
                            VIEW ALL CAREER PATHS
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Right Section - Features */}
                    <div className="bg-white px-10 py-8">
                      <h4 className="mb-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
                        EXPLORE COURSES BY CATEGORY:
                      </h4>
                      <div className="mb-12 grid grid-cols-3 gap-x-8 ">
                        <div className="space-y-4">
                          <Link
                            href="/development"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Development
                          </Link>
                          <Link
                            href="/cyber-security"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Cyber Security
                          </Link>
                          <Link
                            href="/web3-blockchain"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Web3 & Blockchain
                          </Link>
                        </div>

                        <div className="space-y-4">
                          <Link
                            href="/ai-machine-learning"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            A.I. & Machine Learning
                          </Link>
                          <Link
                            href="/design"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Design
                          </Link>
                          <Link
                            href="/business-data"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Business & Data
                          </Link>
                        </div>

                        <div className="space-y-4">
                          <Link
                            href="/build-with-ai"
                            className="relative flex text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Build With A.I.{" "}
                            <span className="absolute right-0  ml-2 inline-block rounded bg-linear-to-r from-cyan-400 to-green-400 px-3 py-1 text-xs font-bold text-black">
                              NEW
                            </span>
                          </Link>
                          <Link
                            href="/cloud-devops"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Cloud & DevOps
                          </Link>
                          <Link
                            href="/life-skills"
                            className="block text-md font-bold text-black hover:text-[#E60A5A] transition-colors"
                          >
                            Life Skills
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <Link
                            href="/bootcamps"
                            className="flex items-center gap-3 hover:opacity-70"
                          >
                            <div className="flex items-center justify-center p-2 bg-gray-100 ">
                              <BootcampIcon width={20} height={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-black">
                                Bootcamps
                              </h4>
                              <p className="text-sm text-gray-600">
                                Our world-famous video courses
                              </p>
                            </div>
                          </Link>

                          <Link
                            href="/learning-passport"
                            className="flex items-center gap-3 hover:opacity-70"
                          >
                            <div className="flex items-center justify-center p-2 bg-gray-100 ">
                              <PassportIcon width={20} height={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-black">
                                Learning Passport
                              </h4>
                              <p className="text-sm text-gray-600">
                                Monitor your learning and earn
                              </p>
                            </div>
                          </Link>

                          <Link
                            href="/campus-events"
                            className="flex items-center gap-3 hover:opacity-70"
                          >
                            <div className="flex items-center justify-center p-2 bg-gray-100 ">
                              <CalendarIcon width={20} height={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-black">
                                Campus Events
                              </h4>
                              <p className="text-sm text-gray-600">
                                Monthly live events with mentors
                              </p>
                            </div>
                          </Link>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <Link
                            href="/projects"
                            className="flex items-center gap-3 hover:opacity-70"
                          >
                            <div className="flex items-center justify-center p-2 bg-gray-100 ">
                              <ProjectIcon width={20} height={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-black">Projects</h4>
                              <p className="text-sm text-gray-600">
                                Custom projects that set you apart
                              </p>
                            </div>
                          </Link>

                          <Link
                            href="/online-classroom"
                            className="flex items-center gap-3 hover:opacity-70"
                          >
                            <div className="flex items-center justify-center p-2 bg-gray-100 ">
                              <OnlineIcon width={20} height={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-black">
                                Online Classroom
                              </h4>
                              <p className="text-sm text-gray-600">
                                Meet all your peers and instructors
                              </p>
                            </div>
                          </Link>

                          <Link
                            href="/personalised-path"
                            className="flex items-center gap-3 hover:opacity-70"
                          >
                            <div className="flex items-center justify-center p-2 bg-gray-100 ">
                              <PathIcon width={20} height={20} />
                            </div>
                            <div>
                              <h4 className="font-bold text-black">
                                Personalised Path
                              </h4>
                              <p className="text-sm text-gray-600">
                                We&apos;ll make a custom plan for you
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Banner with Duck */}
                  <div className="bg-[#E60A5A] px-8 py-2 flex justify-center items-center relative">
                    <Link
                      href="/career-quiz"
                      className="flex items-center gap-4 text-white hover:opacity-90"
                    >
                      <div className="mb-[-16px]">
                        <DuckIcon width={75} height={75} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium">
                          Not sure where to start?{" "}
                          <span className="font-bold underline">
                            Take our career quiz
                          </span>
                        </span>
                        <ArrowRightIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Testimonials */}
            <NavigationMenuItem>
              <Link
                href="/testimonials"
                className="inline-flex h-10 w-max items-center justify-center px-4 py-2 text-base font-bold text-black transition-colors hover:border-b-2 hover:border-[#E60A5A] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Testimonials
              </Link>
            </NavigationMenuItem>

            {/* Free Resources with dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-bold text-black hover:text-gray-900 hover:border-b-2 hover:border-[#E60A5A]">
                Free Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-0">
                <div className="w-[700px]">
                  <div className="grid grid-cols-[1fr_1fr] gap-0">
                    {/* Left Section - Menu Items */}
                    <div className="space-y-4 bg-gray-50 px-4 py-8">
                      <Link
                        href="/blog"
                        className="flex items-start gap-4 hover:opacity-70 transition-opacity"
                        onMouseEnter={() => setActiveResource("blog")}
                      >
                        <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg mt-1">
                          <BlogIcon width={21} height={20} fill="#000" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-1">
                            Blog
                          </h4>
                          <p className="text-sm text-gray-600">
                            Free posts, guides, and tutorials
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/newsletters"
                        className="flex items-start gap-4 hover:opacity-70 transition-opacity"
                        onMouseEnter={() => setActiveResource("newsletters")}
                      >
                        <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg mt-1">
                          <MailIcon width={21} height={20} fill="#000" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-1">
                            Newsletters
                          </h4>
                          <p className="text-sm text-gray-600">
                            Stay up to date with industry news
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/cheat-sheets"
                        className="flex items-start gap-4 hover:opacity-70 transition-opacity"
                        onMouseEnter={() => setActiveResource("cheatsheets")}
                      >
                        <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg mt-1">
                          <SheetIcon width={21} height={20} fill="#000" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-1">
                            Cheat Sheets
                          </h4>
                          <p className="text-sm text-gray-600">
                            Free cheat sheets for your learning
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/career-hubs"
                        className="flex items-start gap-4 hover:opacity-70 transition-opacity"
                        onMouseEnter={() => setActiveResource("careerhubs")}
                      >
                        <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg mt-1">
                          <HubIcon width={21} height={20} fill="#000" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-1">
                            Career Hubs
                          </h4>
                          <p className="text-sm text-gray-600">
                            One stop shop for your career
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/principles"
                        className="flex items-start gap-4 hover:opacity-70 transition-opacity"
                        onMouseEnter={() => setActiveResource("principles")}
                      >
                        <div className="flex items-center justify-center p-3 bg-gray-100 rounded-lg mt-1">
                          <RulesIcon width={20} height={22} fill="#000" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-black mb-1">
                            Principles For Programmers
                          </h4>
                          <p className="text-sm text-gray-600">
                            40 principles to be a top developer
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Right Section - Dynamic Content */}
                    <div className="bg-white px-6 py-8">
                      {activeResource === "blog" && (
                        <Link
                          href="/blog/which-tech-career"
                          className="block group transition-opacity"
                        >
                          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                            <Image
                              src="/career.webp"
                              alt="Which Tech Career Is Right For Me?"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="mb-4 text-xs font-semibold uppercase text-gray-500">
                            FEATURED BLOG
                          </h4>
                          <h3 className="text-xl font-bold text-black group-hover:text-[#E60A5A] transition-colors">
                            Which Tech Career Is Right For Me?
                          </h3>
                        </Link>
                      )}

                      {activeResource === "newsletters" && (
                        <div className="space-y-4">
                          {newsletterItems.map((item, index) => (
                            <Link
                              key={index}
                              href={`/newsletters/${item.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
                            >
                              <div className="relative w-24 h-16 shrink-0 overflow-hidden rounded">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <h3 className="text-lg font-bold text-black group-hover:text-[#E60A5A] transition-colors">
                                {item.title}
                              </h3>
                            </Link>
                          ))}
                        </div>
                      )}

                      {activeResource === "cheatsheets" && (
                        <Link
                          href="/cheat-sheets/python"
                          className="block group transition-opacity"
                        >
                          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                            <Image
                              src={phytonCourse}
                              alt="Python Cheat Sheet"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="mb-4 text-xs font-semibold uppercase text-gray-500">
                            FEATURED CHEAT SHEET
                          </h4>
                          <h3 className="text-xl font-bold text-black group-hover:text-[#E60A5A] transition-colors">
                            Python Cheat Sheet
                          </h3>
                        </Link>
                      )}

                      {activeResource === "careerhubs" && (
                        <Link
                          href="/career-hubs"
                          className="block group transition-opacity"
                        >
                          <ul className="space-y-4">
                            <li className="font-bold hover:text-[#E60A5A] transition-colors ">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">Generative AI</Link>
                            </li>
                            <li className="font-bold hover:text-[#E60A5A] transition-colors">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">Web Development</Link>
                            </li>
                            <li className="font-bold hover:text-[#E60A5A] transition-colors">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">AI &Machine Learning</Link>
                            </li>
                            <li className="font-bold hover:text-[#E60A5A] transition-colors">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">Data Analytics</Link>
                            </li>
                            <li className="font-bold hover:text-[#E60A5A] transition-colors">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">DevOps & Cloud</Link>
                            </li>
                            <li className="font-bold hover:text-[#E60A5A] transition-colors">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">Design</Link>
                            </li>
                            <li className="font-bold hover:text-[#E60A5A] transition-colors">
                              <Link href="/" className="hover:border-b hover:border-[#E60A5A] pb-2">Cyber Security</Link>
                            </li>
                          </ul>
                        </Link>
                      )}

                      {activeResource === "principles" && (
                        <Link
                          href="/principles"
                          className="block group transition-opacity"
                        >
                          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                            <Image
                              src="/book.webp"
                              alt="Principles For Programmers"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h4 className="mb-4 text-xs font-semibold uppercase text-gray-500">
                            LEARNING RESOURCES
                          </h4>
                          <h3 className="text-xl font-bold text-black group-hover:text-[#E60A5A] transition-colors">
                            40 Principles to Master
                          </h3>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Community */}
            <NavigationMenuItem>
              <Link
                href="/community"
                className="inline-flex h-10 w-max items-center justify-center px-4 py-2 text-base font-bold text-black transition-colors hover:border-b-2 hover:border-[#E60A5A] focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Community
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden rounded-full border border-[#E60A5A] px-8 py-6 text-base font-semibold text-pink-500 hover:bg-[#E60A5A] hover:text-white lg:inline-flex"
            asChild
          >
            <Link href="/signin">SIGN IN</Link>
          </Button>
          <Button
            className="rounded-full bg-[#E60A5A] px-6 py-6 text-base font-semibold text-white hover:bg-pink-700 lg:px-8"
            asChild
          >
            <Link href="/join">JOIN ZERO TO MASTERY</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
