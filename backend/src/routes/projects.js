// Rutas de proyectos. Por ahora leen un JSON; más adelante
// puedes cambiar esto por una base de datos sin tocar el frontend.
import { Router } from 'express';
import { readFile } from 'node:fs/promises';

const router = Router();
const dataUrl = new URL('../data/projects.json', import.meta.url);

async function loadProjects() {
  return JSON.parse(await readFile(dataUrl, 'utf-8'));
}

// GET /api/projects
router.get('/', async (req, res, next) => {
  try {
    res.json(await loadProjects());
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:slug
router.get('/:slug', async (req, res, next) => {
  try {
    const project = (await loadProjects()).find((p) => p.slug === req.params.slug);
    if (!project) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

export default router;
