export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  highlight?: string | null; // badge junto al título, ej: "-40% latencia"
  metrics?: ProjectMetric[];
  repoUrl: string | null;
  demoUrl: string | null;
  image: string | null;
  featured: boolean;
}
