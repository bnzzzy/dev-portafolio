// =============================================================
//  TUS DATOS. Edita este archivo: todo el sitio se arma desde aquí.
//  Los valores en null ocultan su sección o botón.
// =============================================================

/** Colores de acento disponibles para íconos, puntos y estadísticas. */
export type Accent = 'primary' | 'secondary' | 'tertiary';

export const SITE = {
  name: 'Benjamín López',
  role: 'Full Stack Developer',
  bio: 'Construyendo aplicaciones web con Java, Spring Boot y Angular, y automatizando procesos con Python, n8n y RPA.',
  logo: '/logo.svg', // monograma <B> del header
  logoFull: '/logo-full.svg', // logo completo del footer
  avatar: null as string | null, // ej: '/avatar.jpg' (ponlo en frontend/public)

  availability: {
    open: true,
    short: 'Disponible', // aparece en el header
    long: 'Abierto a oportunidades remotas', // aparece en el inicio
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
    pitch: 'Disponible para proyectos freelance, prácticas o roles junior/semi-senior.',
  },

  stats: [
    { label: 'Experiencia', value: '1+ año', detail: 'Full Stack', icon: 'verified', accent: 'primary' },
    { label: 'Proyectos', value: '5+', detail: 'Publicados con demo', icon: 'rocket_launch', accent: 'secondary' },
    { label: 'Stack', value: 'Java + Angular', detail: 'Spring Boot & Docker', icon: 'layers', accent: 'tertiary' },
    { label: 'Infra', value: 'Self-hosted', detail: 'Servidor propio', icon: 'dns', accent: 'primary' },
  ] satisfies { label: string; value: string; detail: string; icon: string; accent: Accent }[],

  skills: [
    { name: 'Java', accent: 'primary' },
    { name: 'Spring Boot', accent: 'primary' },
    { name: 'Angular', accent: 'secondary' },
    { name: 'JavaScript', accent: 'secondary' },
    { name: 'HTML', accent: 'secondary' },
    { name: 'CSS', accent: 'secondary' },
    { name: 'Python', accent: 'tertiary' },
    { name: 'SQL', accent: 'primary' },
    { name: 'n8n', accent: 'tertiary' },
    { name: 'RPA', accent: 'tertiary' },
    { name: 'Docker', accent: 'tertiary' },
  ] satisfies { name: string; accent: Accent }[],
};

/** Enlaces de navegación (header en escritorio, barra inferior en móvil). */
export const NAV_ITEMS = [
  { path: '/', label: 'Inicio', icon: 'terminal', exact: true },
  { path: '/proyectos', label: 'Proyectos', icon: 'layers', exact: false },
  { path: '/repositorios', label: 'Repositorios', icon: 'code_blocks', exact: false },
  { path: '/contacto', label: 'Contacto', icon: 'alternate_email', exact: false },
];
