import type { ApiCourse } from "@/types/course";

type CourseDetailsResponse = {
  course?: ApiCourse;
  error?: string;
};

export default async function fetchCourseDetails(id: number): Promise<ApiCourse> {
  if (!id) {
    throw new Error("ID invalido");
  }

  const response = await fetch(`/api/courses/${id}`, {
    cache: "no-store",
  });

  const data: CourseDetailsResponse = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Erro ao buscar curso.");
  }

  if (!data.course) {
    throw new Error("Curso não encontrado.");
  }

  return data.course;
}
