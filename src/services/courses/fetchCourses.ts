import type { ApiCourse } from "@/types/course";

type CoursesResponse = {
  courses: ApiCourse[];
  error?: string;
};

export async function fetchCourses(): Promise<ApiCourse[]> {
  const response = await fetch("/api/courses", {
    cache: "no-store",
  });

  const data: CoursesResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro ao buscar cursos.");
  }

  return data.courses;
}