
export type Area = 'Administración' | 'Comunicación' | 'Gerencia' | 'Servicios';

export interface StudyMaterial {
  id: string;
  title: string;
  description: string;
  topics: string[];
  links: { title: string; url: string }[];
}

export interface PracticeModule {
  id: string;
  title: string;
  objective: string;
  commonExercise: string;
  complementaryDocs: { title: string; description: string }[];
}

export interface LabExercise {
  area: Area;
  exercises: { title: string; task: string }[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions?: QuizQuestion[];
  externalUrl?: string;
}
