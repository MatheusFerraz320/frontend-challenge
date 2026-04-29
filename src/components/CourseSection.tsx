"use client";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { fetchCourses } from "@/services/courses/fetchCourses";
import type { ApiCourse } from "@/types/course";
import { filterCourse } from "@/utils/filterCourse";

type Course = {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
  isFavorite: boolean;
};

type CourseSectionProps = {
  searchValue: string;
};

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
    image: course.banner ,
    description: course.short_description || "Curso disponível na plataforma.",
    type: getCourseType(course),
    isFavorite: false
  };
}

export default function CourseSection({ searchValue }: CourseSectionProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredCourses = normalizedSearch
    ? courses.filter((course) => filterCourse(course, normalizedSearch))
    : courses;

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
    <section id="coursesList" className="py-20 px-12">
      <h1 className="text-3xl mb-8 text-gray-900">Meus Cursos</h1>

      {isLoading && <p className="text-gray-700">Carregando cursos...</p>}

      {!isLoading && errorMessage && (
        <p className="text-red-600">{errorMessage}</p>
      )}

      {!isLoading && !errorMessage && filteredCourses.length === 0 && (
        <p className="text-gray-700">Nenhum curso encontrado.</p>
      )}

      {!isLoading && !errorMessage && filteredCourses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              image={course.image}
              description={course.description}
              type={course.type}
              isFavorite={course.isFavorite}
              onToggleFavorite={() => toggleFavorite(course.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
