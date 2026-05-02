import CourseCard from "./CourseCard";
import type { Course } from "@/types/course";

type FavoriteSectionProps = {
  courses: Course[];
  onToggleFavorite: (id: number) => void;
};

export default function FavoriteSection({
  courses,
  onToggleFavorite,
}: FavoriteSectionProps) {
  return (
    <section id="favoriteList" className="py-15 px-12">
      <h2 className="text-3xl mb-8 text-gray-900">Meus favoritos</h2>

      {courses.length === 0 ? (
        <div className="flex items-center justify-center mt-16">
          <div className="flex flex-col items-center justify-center px-12 py-10 ">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.49 12C21.81 10.98 22 9.88 22 8.69C22 5.6 19.51 3.09998 16.44 3.09998C14.62 3.09998 13.01 3.98003 12 5.34003C10.99 3.98003 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.6 2 8.69C2 15.69 8.48 19.82 11.38 20.82C11.55 20.88 11.77 20.91 12 20.91"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.74 21C19.5073 21 20.94 19.5673 20.94 17.8C20.94 16.0327 19.5073 14.6 17.74 14.6C15.9727 14.6 14.54 16.0327 14.54 17.8C14.54 19.5673 15.9727 21 17.74 21Z"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.54 21.6L20.54 20.6"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <p className="text-[14px] text-[#666666] text-center max-w-[220px]">
              Parece que você ainda não tem cursos favoritados
            </p>
          </div>
        </div>
      ) : (
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
