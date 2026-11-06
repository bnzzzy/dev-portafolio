// Rutas de proyectos, leídas desde PostgreSQL.
// Express 5 pasa los errores de funciones async al manejador de errores.
import { Router } from 'express';

export default function projectsRouter(db) {
  const router = Router();

  // GET /api/projects
  router.get('/', async (req, res) => {
    res.json(await db.listProjects());
  });

  // GET /api/projects/:slug
  router.get('/:slug', async (req, res) => {
    const project = await db.getProject(req.params.slug);
    if (!project) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(project);
  });

  return router;
}
