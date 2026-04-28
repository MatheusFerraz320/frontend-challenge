import { Flame, Heart } from 'lucide-react';

type Props = {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
  isFavorite: boolean;
  onToggleFavorite: () => void; 
};

export default function CourseCard({
  name,
  image,
  description,
  type,
  isFavorite,
  onToggleFavorite,
}: Props) {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-lg">

      <div className="relative">
        <img
          src={image}
          alt="Course Mock"
          className="w-full h-48 object-cover"
        />

        {/* Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
            <Flame className="w-5 h-5 text-black fill-black" />
          </div>
          <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded text-sm font-medium">
            {type}
          </div>
        </div>

        {/* FAV*/}
        <button
          onClick={onToggleFavorite} 
          className="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "text-red-500 fill-red-500" : "text-white"
            }`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      <div className="p-5">
        <h2 className="text-2xl font-normal text-gray-900 mb-2">
          {name}
        </h2>
        <p className="text-base text-gray-700 mb-6 line-clamp-3">
          {description}
        </p>

        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-4 rounded transition-colors">
          Acessar
        </button>
      </div>
    </div>
  );
}
