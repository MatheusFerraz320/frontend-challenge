type CourseWithTitle = {
  title?: string;
  name?: string;
};

export function filterCourse(course: CourseWithTitle, searchValue: string) {
  const courseTitle = course.title ?? course.name ?? "";
  const formattedCourse = courseTitle.toLowerCase().trim();

  return formattedCourse.includes(searchValue.toLowerCase().trim());
}
