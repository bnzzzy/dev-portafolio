// =============================================================
//  TUS DATOS. Edita este archivo: todo el sitio se arma desde aquí.
//  Los valores en null ocultan su sección o botón.
// =============================================================

/** Un puesto de trabajo, práctica o proyecto freelance. */
export interface ExperienceEntry {
  role: string; // ej: 'Desarrollador Full Stack'
  company: string; // ej: 'Empresa S.A.'
  period: string; // ej: 'mar. 2024 – actualidad'
  summary: string; // qué hiciste, en una o dos frases
  outcome?: string; // un resultado concreto, ej: 'Reduje el tiempo de carga de reportes de 40 s a 6 s'
  tags?: string[]; // tecnologías usadas
}

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
    email: 'bnja.lpz16@gmail.com',
    calendarUrl: null as string | null, // ej: 'https://cal.com/tu-usuario'
    discord: null as string | null, // ej: 'tu_usuario'
    pitch: 'Busco roles Full Stack o Backend, y también tomo proyectos de automatización y datos.',
  },

  // Experiencia laboral, de la más reciente a la más antigua.
  // Mientras esté vacía, la sección no aparece en el inicio.
  experience: [
    {
      role: 'Desarrollador Full Stack',
      company: 'ID Logistics Chile',
      period: 'feb. 2026 – oct. 2026',
      summary:
        'Microservicios e integración de APIs con Spring Boot y JPA, autenticación con JWT y tareas programadas. Interfaces en Angular y React, apps móviles en Flutter y pruebas end-to-end con Playwright.',
      outcome:
        'Flujos ETL con SQL avanzado en PostgreSQL y MySQL, y pipelines de CI/CD con Jenkins y GitLab CI desplegando en Docker sobre Linux.',
      tags: ['Java', 'Spring Boot', 'Angular', 'React', 'Flutter', 'Playwright', 'Jenkins', 'Docker'],
    },
    {
      role: 'Ingeniero de Proyectos Trainee',
      company: 'ID Logistics Chile',
      period: 'nov. 2025 – ene. 2026',
      summary:
        'Desarrollo de una aplicación Full Stack con Python (Flask y FastAPI) y JavaScript, sobre una base MySQL que diseñé y modelé.',
      outcome: 'Automaticé tareas repetitivas y armé entornos de desarrollo y pruebas con Docker.',
      tags: ['Python', 'Flask', 'FastAPI', 'MySQL', 'Docker'],
    },
    {
      role: 'Práctica profesional · Ingeniería y Proyectos',
      company: 'ID Logistics Chile',
      period: 'ago. 2025 – oct. 2025',
      summary:
        'Scripts en Python (Pandas) para analizar y procesar datos, modelado con SQL avanzado y documentación técnica de las soluciones.',
      outcome:
        'Desarrollé de forma autónoma una app de RRHH integrada con la API de BUK para analizar ausentismo, presentismo y rotación por cargo y cuenta.',
      tags: ['Python', 'Pandas', 'SQL', 'API BUK'],
    },
    {
      role: 'Práctica · RPA y Soporte',
      company: 'Fundación de Salud Trabajadores BancoEstado',
      period: 'dic. 2024 – ene. 2025',
      summary:
        'Desarrollo e implementación de automatizaciones (RPA) con Automation Anywhere y proyectos de mejora en Bizagi. Operación de robots en producción y soporte en QlikView y Bizagi.',
      tags: ['Automation Anywhere', 'Bizagi', 'QlikView'],
    },
  ] as ExperienceEntry[],

  // Stack agrupado por área
  skills: [
    {
      area: 'Backend y datos',
      items: ['Java', 'Spring Boot', 'JPA', 'JWT', 'Python', 'FastAPI / Flask', 'Pandas', 'PostgreSQL', 'MySQL', 'ETL'],
    },
    {
      area: 'Frontend y móvil',
      items: ['TypeScript', 'JavaScript', 'Angular', 'React', 'Flutter / Dart', 'HTML / CSS'],
    },
    {
      area: 'DevOps y automatización',
      items: [
        'Docker',
        'Linux / SSH',
        'Git Flow',
        'Jenkins / GitLab CI',
        'Playwright',
        'Automation Anywhere',
        'Bizagi',
        'QlikView',
      ],
    },
  ] satisfies { area: string; items: string[] }[],

  // Habilidades profesionales, cada una con un hecho concreto que la respalda
  softSkills: [
    {
      name: 'Autonomía',
      evidence: 'Llevé de punta a punta, por mi cuenta, una app de RRHH integrada con la API de BUK.',
    },
    {
      name: 'Visión de negocio',
      evidence: 'Convierto necesidades de RRHH y operaciones en indicadores concretos, como ausentismo, presentismo y rotación.',
    },
    {
      name: 'Trabajo en equipo',
      evidence: 'Desarrollo en equipo con Git Flow y pipelines de CI/CD compartidos.',
    },
    {
      name: 'Orientación a la calidad',
      evidence: 'Pruebas end-to-end con Playwright y formación en Calidad y Arquitectura de Software.',
    },
    {
      name: 'Comunicación y servicio',
      evidence: 'Soporte a usuarios en mesa de ayuda y documentación técnica de cada solución que entrego.',
    },
    {
      name: 'Aprendizaje continuo',
      evidence: 'Seis certificaciones de Google Cloud y un stack que va de RPA a microservicios y apps móviles.',
    },
  ] satisfies { name: string; evidence: string }[],

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
