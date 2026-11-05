// Configura la aplicación Express (sin levantar el servidor).
// Separarlo de index.js permite usar la app en los tests.
import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects.js';
import contactRouter from './routes/contact.js';
import githubRouter from './routes/github.js';

export function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:4200' }));
  app.use(express.json());

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
  });

  app.use('/api/projects', projectsRouter);
  app.use('/api/contact', contactRouter);
  app.use('/api/github', githubRouter);

  // 404 para cualquier ruta /api no definida
  app.use('/api', (req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
  });

  // Manejador de errores genérico
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Error interno del servidor' });
  });

  return app;
}
