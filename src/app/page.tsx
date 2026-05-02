"use client";
import CourseSection from "@/components/CourseSection";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import FavoriteSection from "@/components/FavoriteSection";
import { fetchCourses } from "@/services/courses/fetchCourses";
import type { ApiCourse, Course } from "@/types/course";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

function getCourseType(course: ApiCourse) {
  const courseTypes = course.settings?.course_types;

  if (courseTypes?.live) return "AO VIVO";
  if (courseTypes?.presential) return "PRESENCIAL";

  return "ONLINE";
}

function formatCourse(course: ApiCourse): Course {
  return {
    id: course.id,
    name: course.title,
    image: course.banner || "/heroBanner.jpg",
    description: course.short_description || "Curso disponível na plataforma.",
    type: getCourseType(course),
    isFavorite: false,
  };
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const favoriteCourses = courses.filter((course) => course.isFavorite);

  useEffect(() => {
    async function loadCourses() {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const apiCourses = await fetchCourses();
        const formattedCourses = apiCourses.map(formatCourse);

        setCourses(formattedCourses);
      } catch (error) {
        console.error("Erro ao carregar cursos", error);
        setErrorMessage("Não foi possível carregar os cursos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadCourses();
  }, []);

  function toggleFavorite(id: number) {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? { ...course, isFavorite: !course.isFavorite }
          : course
      )
    );
  }

  return (
    <>
    <div className="bg-white">
      <Navbar
        courses={courses}
      />
      <HeroBanner />
      <CourseSection
        courses={courses}
        errorMessage={errorMessage}
        isLoading={isLoading}
        onToggleFavorite={toggleFavorite}
      />
      <FavoriteSection
        courses={favoriteCourses}
        onToggleFavorite={toggleFavorite}
      />
    </div>
    <Footer />
    </>
  );
}
