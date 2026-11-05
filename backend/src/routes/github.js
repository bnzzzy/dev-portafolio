// Trae tus repositorios públicos desde la API de GitHub.
// Se guardan en memoria (caché) 10 minutos para no gastar el límite
// de GitHub: 60 peticiones/hora sin token, 5000 con GITHUB_TOKEN.
import { Router } from 'express';

const router = Router();
const CACHE_MS = 10 * 60 * 1000;
let cache = { data: null, expires: 0 };

function toRepo(r) {
  return {
    name: r.name,
    description: r.description,
    url: r.html_url,
    homepage: r.homepage || null,
    language: r.language,
    stars: r.stargazers_count,
    forks: r.forks_count,
    license: r.license?.spdx_id ?? null,
    updatedAt: r.pushed_at,
  };
}

async function fetchRepos(username) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'portafolio-api' };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const res = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=pushed&per_page=100`,
    { headers },
  );
  if (!res.ok) throw new Error(`GitHub respondió ${res.status}`);

  const repos = await res.json();
  return repos.filter((r) => !r.fork && !r.archived).map(toRepo);
}

// GET /api/github/repos?limit=6
router.get('/repos', async (req, res) => {
  const username = process.env.GITHUB_USERNAME;
  if (!username) return res.json([]);

  try {
    if (!cache.data || Date.now() > cache.expires) {
      cache = { data: await fetchRepos(username), expires: Date.now() + CACHE_MS };
    }
    const limit = Number(req.query.limit) || cache.data.length;
    res.json(cache.data.slice(0, limit));
  } catch (err) {
    console.error('Error consultando GitHub:', err.message);
    // Si GitHub falla, devolvemos lo último que tengamos (o lista vacía)
    res.status(cache.data ? 200 : 502).json(cache.data ?? { error: 'No se pudo consultar GitHub' });
  }
});

export default router;
