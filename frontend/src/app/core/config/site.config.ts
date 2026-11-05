// =============================================================
//  TUS DATOS. Edita este archivo: todo el sitio se arma desde aquí.
//  Los valores en null ocultan su sección o botón.
// =============================================================

/** Colores de acento disponibles para íconos, puntos y estadísticas. */
export type Accent = 'primary' | 'secondary' | 'tertiary';

export const SITE = {
  name: 'Benjamín López',
  role: 'Ingeniero en Informática · Full Stack Developer',
  bio: 'Construyo APIs y microservicios con Java (Spring Boot) y Python, interfaces con Angular y React, procesos ETL y automatizaciones de punta a punta, y los despliego con Docker en Linux.',
  logo: '/logo.svg', // monograma <B> del header
  logoFull: '/logo-full.svg', // logo completo del footer
  avatar: null as string | null, // ej: '/avatar.jpg' (ponlo en frontend/public)

  availability: {
    open: true,
    short: 'Disponible', // aparece en el header
    long: 'Abierto a nuevas oportunidades', // aparece en el inicio
  },

  github: {
    username: 'bnzzzy',
    url: 'https://github.com/bnzzzy',
    caption: 'Código fuente de todos mis proyectos',
  },

  linkedin: {
    url: 'https://www.linkedin.com/in/benjamin-patricio-lopez-fernandez-286745250/',
    caption: 'Experiencia y trayectoria',
  },

  cvUrl: null as string | null, // ej: '/cv.pdf' (ponlo en frontend/public)
  cliCommand: null as string | null, // ej: 'npx tu-usuario' → botón para copiar

  contact: {
    email: 'tu@email.com',
    calendarUrl: null as string | null, // ej: 'https://cal.com/tu-usuario'
    discord: null as string | null, // ej: 'tu_usuario'
    pitch: 'Abierto a roles Full Stack o Backend y a proyectos de automatización y datos. Conversemos.',
  },

  stats: [
    { label: 'Experiencia', value: '1+ año', detail: 'Desarrollo Full Stack', icon: 'verified', accent: 'primary' },
    { label: 'Formación', value: 'Ingeniería', detail: 'Informática · Ciencia de Datos', icon: 'school', accent: 'secondary' },
    { label: 'Certificaciones', value: '14', detail: '6 Google Cloud · 8 Duoc UC', icon: 'cloud_done', accent: 'tertiary' },
    { label: 'Stack', value: 'Java + Angular', detail: 'Spring Boot · React · Flask', icon: 'layers', accent: 'primary' },
  ] satisfies { label: string; value: string; detail: string; icon: string; accent: Accent }[],

  // primary = backend/datos · secondary = frontend/móvil · tertiary = DevOps/automatización
  skills: [
    { name: 'Java', accent: 'primary' },
    { name: 'Spring Boot', accent: 'primary' },
    { name: 'Python', accent: 'primary' },
    { name: 'FastAPI / Flask', accent: 'primary' },
    { name: 'PostgreSQL', accent: 'primary' },
    { name: 'MySQL', accent: 'primary' },
    { name: 'TypeScript', accent: 'secondary' },
    { name: 'Angular', accent: 'secondary' },
    { name: 'React', accent: 'secondary' },
    { name: 'Flutter', accent: 'secondary' },
    { name: 'Docker', accent: 'tertiary' },
    { name: 'Linux', accent: 'tertiary' },
    { name: 'Git Flow', accent: 'tertiary' },
    { name: 'Jenkins / GitLab CI', accent: 'tertiary' },
    { name: 'Playwright', accent: 'tertiary' },
    { name: 'RPA', accent: 'tertiary' },
  ] satisfies { name: string; accent: Accent }[],

  education: {
    degree: 'Ingeniero en Informática',
    institution: 'Duoc UC',
    period: '2022 – 2025',
    detail: 'Especialización en Ciencia de Datos · Titulado en dic. 2025',
    // Certificaciones académicas de la carrera
    certifications: [
      'Arquitectura de Software',
      'Calidad de Software',
      'Programación de Software',
      'Gestión de Proyectos Informáticos',
      'Análisis y Planificación de Requerimientos',
      'Análisis y Desarrollo de Modelos de Datos',
      'Inteligencia de Negocios',
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Intermedio alto · certificado' },
    ],
  },

  cloudCertifications: [
    'Cloud Computing Fundamentals',
    'Networking & Security in Google Cloud',
    'Data, ML and AI in Google Cloud',
    'Prepare Data for ML APIs on Google Cloud',
    'Implement Load Balancing on Compute Engine',
    'Build a Secure Google Cloud Network',
  ],
};

/** Enlaces de navegación (header en escritorio, barra inferior en móvil). */
export const NAV_ITEMS = [
  { path: '/', label: 'Inicio', icon: 'terminal', exact: true },
  { path: '/proyectos', label: 'Proyectos', icon: 'layers', exact: false },
  { path: '/repositorios', label: 'Repositorios', icon: 'code_blocks', exact: false },
  { path: '/contacto', label: 'Contacto', icon: 'alternate_email', exact: false },
];
