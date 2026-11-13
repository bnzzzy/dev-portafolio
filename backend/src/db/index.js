// Acceso a PostgreSQL. Las rutas solo usan las funciones de este
// objeto (listProjects, getProject, saveMessage), así en los tests
// se puede pasar una versión falsa sin necesitar una base real.
import pg from 'pg';
import { readFile } from 'node:fs/promises';

// Los alias "AS ..." devuelven las columnas en camelCase,
// igual que el JSON que espera el frontend.
const PROJECT_COLUMNS = `
  slug, title, summary, description, sections, tags, highlight, metrics,
  repo_url AS "repoUrl", demo_url AS "demoUrl", image, image_alt AS "imageAlt", featured`;

export function createDb(connectionString = process.env.DATABASE_URL) {
  const pool = new pg.Pool({ connectionString });

  return {
    async listProjects() {
      const { rows } = await pool.query(
        `SELECT ${PROJECT_COLUMNS} FROM projects ORDER BY position, created_at`,
      );
      return rows;
    },

    async getProject(slug) {
      const { rows } = await pool.query(`SELECT ${PROJECT_COLUMNS} FROM projects WHERE slug = $1`, [
        slug,
      ]);
      return rows[0] ?? null;
    },

    async saveMessage({ name, email, message }) {
      await pool.query('INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)', [
        name,
        email,
        message,
      ]);
    },

    // Crea las tablas y sincroniza los proyectos con el JSON semilla.
    // El JSON es la fuente de verdad: si un proyecto ya existe, se actualiza.
    async migrate() {
      await pool.query(await readFile(new URL('./schema.sql', import.meta.url), 'utf-8'));

      const seed = JSON.parse(
        await readFile(new URL('./seed-projects.json', import.meta.url), 'utf-8'),
      );
      for (const [i, p] of seed.entries()) {
        await pool.query(
          `INSERT INTO projects
             (slug, title, summary, description, sections, tags, highlight, metrics,
              repo_url, demo_url, image, image_alt, featured, position)
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
           ON CONFLICT (slug) DO UPDATE SET
             title = EXCLUDED.title, summary = EXCLUDED.summary,
             description = EXCLUDED.description, sections = EXCLUDED.sections,
             tags = EXCLUDED.tags, highlight = EXCLUDED.highlight, metrics = EXCLUDED.metrics,
             repo_url = EXCLUDED.repo_url, demo_url = EXCLUDED.demo_url, image = EXCLUDED.image,
             image_alt = EXCLUDED.image_alt,
             featured = EXCLUDED.featured, position = EXCLUDED.position`,
          [
            p.slug,
            p.title,
            p.summary,
            p.description,
            JSON.stringify(p.sections ?? []),
            p.tags,
            p.highlight,
            JSON.stringify(p.metrics ?? []),
            p.repoUrl,
            p.demoUrl,
            p.image,
            p.imageAlt ?? null,
            p.featured,
            i,
          ],
        );
      }
      console.log(`Proyectos sincronizados: ${seed.length}`);
    },

    close: () => pool.end(),
  };
}
