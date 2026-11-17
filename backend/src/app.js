// Configura la aplicación Express (sin levantar el servidor).
// Separarlo de index.js permite usar la app en los tests.
import express from 'express';
import cors from 'cors';
import projectsRouter from './routes/projects.js';
import contactRouter from './routes/contact.js';
import githubRouter from './routes/github.js';
import { rateLimit } from './rateLimit.js';

// db: objeto con las funciones de acceso a datos (ver db/index.js).
// contactLimit: se puede cambiar en los tests.
export function createApp({ db, contactLimit = { max: 5, windowMs: 10 * 60 * 1000 } }) {
  const app = express();
  app.disable('x-powered-by');

  app.use(cors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:4200' }));
  app.use(express.json({ limit: '20kb' }));

  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
  });

  app.use('/api/projects', projectsRouter(db));
  // Máximo 5 mensajes de contacto por IP cada 10 minutos
  app.post(
    '/api/contact',
    rateLimit({ ...contactLimit, message: 'Enviaste varios mensajes seguidos. Intenta de nuevo en unos minutos.' }),
  );
  app.use('/api/contact', contactRouter(db));
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
