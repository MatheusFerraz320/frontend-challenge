import CourseCard from "./CourseCard";
import type { Course } from "@/types/course";
import { filterCourse } from "@/utils/filterCourse";
import LoadingCourses from "./LoadingCourses";

type CourseSectionProps = {
  courses: Course[];
  errorMessage: string;
  isLoading: boolean;
  searchValue: string;
  onToggleFavorite: (id: number) => void;
};

export default function CourseSection({
  courses,
  errorMessage,
  isLoading,
  searchValue,
  onToggleFavorite,
}: CourseSectionProps) {
  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredCourses = normalizedSearch
    ? courses.filter((course) => filterCourse(course, normalizedSearch))
    : courses;

  return (
    <section id="coursesList" className="py-20 px-12">
      <h1 className="text-3xl mb-8 text-gray-900">Meus Cursos</h1>

      {isLoading && <LoadingCourses />}

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
              onToggleFavorite={() => onToggleFavorite(course.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
