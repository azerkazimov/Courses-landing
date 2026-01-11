import Hero from "@/components/main/hero";
import Slider from "@/components/main/slider";
import Benefits from "@/components/main/benefits";
import Courses from "@/components/main/courses";
import Academy from "@/components/main/academy";
import Community from "@/components/main/community";
import Price from "@/components/main/price";
import Founder from "@/components/main/founder";

export default function Home() {
  return (
    <main>
      <Hero />
      <Slider />
      <Benefits />
      <div className="mt-[220px]">
        <Courses />
      </div>
      <Academy />
      <Community />
      <Price />
      <Founder />
    </main>
  );
}
