"use client";
import CourseSection from "@/components/CourseSection";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import FavoriteSection from "@/components/FavoriteSection";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="bg-white">
      <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />
      <HeroBanner />
      <CourseSection searchValue={searchValue} />
      <FavoriteSection />
    </div>
  );
}
