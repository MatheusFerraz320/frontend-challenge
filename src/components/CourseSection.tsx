import CourseCard from "./CourseCard";
import type { Course } from "@/types/course";
import LoadingAnimation from "./LoadingAnimation";

type CourseSectionProps = {
  courses: Course[];
  errorMessage: string;
  isLoading: boolean;
  onToggleFavorite: (id: number) => void;
  userName?: string;
};

export default function CourseSection({
  courses,
  errorMessage,
  isLoading,
  onToggleFavorite,
  userName,
}: CourseSectionProps) {
  return (
    <section id="coursesList" className="px-6 py-10 md:px-12">
      <h1 className="text-3xl mb-2 text-gray-900">Meus Cursos</h1>

      {userName && (
        <p className="mb-8 text-sm text-gray-600">
          Bem-vindo,<span className="font-bold text-gray-900"> {userName}</span>
        </p>
      )}

      {!userName && <div className="mb-8" />}

      {isLoading && <LoadingAnimation message="Carregando cursos..." />}

      {!isLoading && errorMessage && (
        <p className="text-red-600">{errorMessage}</p>
      )}

      {!isLoading && !errorMessage && courses.length === 0 && (
        <p className="text-gray-700">Nenhum curso encontrado.</p>
      )}

      {!isLoading && !errorMessage && courses.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              name={course.name}
              image={course.image}
              description={course.description}
              type={course.type}
              isFavorite={course.isFavorite}
              onToggleFavorite={() => onToggleFavorite(course.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
