export interface technologiesData {
  meta: Meta;
  languages: Language[];
  frameworks: Framework[];
  libraries: Library[];
}

export interface Meta {
  version: string;
  lastUpdated: string;
  description: string;
}

export interface Language {
  id: string;
  name: string;
  typing: string;
  compiled: boolean;
  useCases: string[];
  ecosystem?: string[];
}

export interface Framework {
  id: string;
  name: string;
  category: string;
  language: string;
  released: number;
  maintainedBy?: string;
  rendering?: string[];
  useCases?: string[];
}

export interface Library {
  id: string;
  name: string;
  category: string;
  language: string;
  framework?: string;
}
