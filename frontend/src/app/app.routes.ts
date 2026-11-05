import { Routes } from '@angular/router';

// Cada página se carga de forma diferida (lazy) para que la carga inicial sea liviana.
export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'proyectos',
    title: 'Proyectos',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'proyectos/:slug',
    title: 'Proyecto',
    loadComponent: () =>
      import('./pages/project-detail/project-detail').then((m) => m.ProjectDetail),
  },
  {
    path: 'repositorios',
    title: 'Repositorios',
    loadComponent: () => import('./pages/repos/repos').then((m) => m.Repos),
  },
  {
    path: 'contacto',
    title: 'Contacto',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    title: 'No encontrado',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound),
  },
];
