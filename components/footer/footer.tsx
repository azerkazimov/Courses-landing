import Link from "next/link";
import { Github, Twitter, Linkedin, Facebook, Instagram, Youtube, Star } from "lucide-react";
import ZtmIcon from "../ui/icons/ztm";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <ZtmIcon width={150} height={73} />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-gray-300 transition">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Pricing</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Testimonials</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Cheat Sheets</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Industry Newsletters</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Community</Link></li>
            </ul>
          </div>

          {/* The Academy */}
          <div>
            <h3 className="font-bold text-lg mb-6">The Academy</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-gray-300 transition">Courses</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Career Paths</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Career Path Quiz</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Web Development</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Machine Learning & AI</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Generative AI</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Data Analytics</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">DevOps & Cloud</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Design</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Cyber Security</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Lifetime Challenge</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Learning Passport</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="hover:text-gray-300 transition">About ZTM</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Ambassadors</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Trustpilot Rating */}
        <div className="mb-8 pb-8 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <span className="text-xl font-semibold">Excellent</span>
            <span className="text-gray-400">4.8 out of 5</span>
            <Star className="w-5 h-5 text-green-500 fill-green-500" />
            <span className="text-gray-400">Trustpilot</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition">
              <span className="sr-only">GitHub</span>
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition">
              <span className="sr-only">X (Twitter)</span>
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-gray-400 transition">
              <span className="sr-only">YouTube</span>
              <Youtube className="w-5 h-5" />
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition">Privacy</Link>
            <Link href="#" className="hover:text-white transition">Terms</Link>
            <Link href="#" className="hover:text-white transition">Cookies</Link>
            <span className="font-semibold text-white">Copyright © 2026, Zero To Mastery Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}