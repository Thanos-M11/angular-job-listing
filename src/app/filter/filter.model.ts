export type Role = 'Frontend' | 'Backend' | 'Fullstack';
export type Level = 'Junior' | 'Midweight' | 'Senior';

export interface Filter {
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}
