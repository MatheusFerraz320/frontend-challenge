import CourseSection from "@/components/CourseSection";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroBanner />
      <CourseSection />
    </div>
  );
}
