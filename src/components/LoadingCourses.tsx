export default function LoadingCourses() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      
      
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-purple-600 border-t-transparent animate-spin"></div>
      </div>

      <p className="text-sm text-gray-500 animate-pulse">
        Carregando cursos...
      </p>

    </div>
  );
}