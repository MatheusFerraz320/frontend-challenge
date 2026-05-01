export interface ApiCourse {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  long_description?: string;
  banner?: string;
  settings?: {
    course_types?: {
      live?: boolean;
      online?: boolean;
      presential?: boolean;
    };
  };
}

export type Course = {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
  isFavorite: boolean;
};
