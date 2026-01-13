
export type Area = 'Administración' | 'Comunicación' | 'Gerencia' | 'Servicios';

export interface Module {
  id: string;
  title: string;
  week: number;
  day: string;
  topic: string;
  theory: string[];
  demo: string[];
  practice: Record<Area, string>;
  advancedPractice: string;
  rubric: string[];
}

export interface Resource {
  title: string;
  type: 'doc' | 'pdf' | 'sheet' | 'audio';
  description: string;
}
