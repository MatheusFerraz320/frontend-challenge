export interface ApiCourse {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  banner?: string;
  settings?: {
    course_types?: {
      live?: boolean;
      online?: boolean;
      presential?: boolean;
    };
  };
}
