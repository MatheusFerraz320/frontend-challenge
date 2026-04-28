"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";

type Course = {
  id: number;
  name: string;
  image: string;
  author: string;
  isFavorite: boolean;
};

export default function CourseSection() {
  const [courses, setCourses] = useState<Course[]>([
    {
      name: "Webscrapping",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      id: 1,
      author: "Lucas",
      isFavorite: true,
    },
    {
      name: "React Avançado",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      id: 2,
      author: "Ana",
      isFavorite: false,
    },
    {
      name: "Node.js API",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop",
      id: 3,
      author: "Pedro",
      isFavorite: true,
    },
    {
      name: "TypeScript",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
      id: 4,
      author: "Julia",
      isFavorite: false,
    },
  ]);

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
      <h1 className="text-3xl mb-8 text-black">Meus Cursos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            name={course.name}
            image={course.image}
            author={course.author}
            isFavorite={course.isFavorite}
            onToggleFavorite={() => toggleFavorite(course.id)}
          />
        ))}
      </div>
    </section>
  );
}