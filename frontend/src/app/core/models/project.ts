export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  sections?: ProjectSection[]; // caso de estudio: contexto, solución, rol...
  tags: string[];
  highlight?: string | null; // badge junto al título, ej: "-40% latencia"
  metrics?: ProjectMetric[];
  repoUrl: string | null;
  demoUrl: string | null;
  image: string | null;
  featured: boolean;
}
