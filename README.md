# Portafolio

Sitio personal con mis proyectos, enlaces a GitHub/LinkedIn y demos.

**Stack:** Angular 22 · Node.js + Express · Docker

## Estructura

```
dev-portafolio/
├── frontend/                 # Angular
│   ├── src/app/
│   │   ├── core/
│   │   │   ├── config/       # site.config.ts → tu nombre, bio y links
│   │   │   ├── models/       # interfaces (Project, ContactMessage)
│   │   │   └── services/     # llamadas HTTP a la API
│   │   ├── layout/           # header y footer
│   │   ├── pages/            # home, projects, project-detail, contact, not-found
│   │   └── shared/           # componentes reutilizables (project-card)
│   ├── proxy.conf.json       # en desarrollo, /api → localhost:3000
│   ├── nginx.conf            # en Docker, sirve Angular y reenvía /api al backend
│   └── Dockerfile
├── design/                   # diseño original (Terminal Horizon)
├── backend/                  # Express
│   ├── src/
│   │   ├── index.js          # levanta el servidor
│   │   ├── app.js            # configura Express (middlewares y rutas)
│   │   ├── routes/           # projects.js, contact.js, github.js
│   │   └── data/projects.json  # ← aquí agregas tus proyectos
│   ├── test/
│   └── Dockerfile
└── docker-compose.yml
```

## Desarrollo local (dos terminales)

```bash
# Terminal 1 – API en http://localhost:3000
cd backend
npm install
npm run dev          # se reinicia solo al guardar cambios

# Terminal 2 – Angular en http://localhost:4200
cd frontend
npm install
npm start
```

## Con Docker (todo junto)

```bash
cp .env.example .env     # pon tu GITHUB_USERNAME
docker compose up -d --build
```

Abre http://localhost:8080

## Despliegue

En vivo en **https://benzprojects.site**, servido con Docker detrás de Cloudflare Tunnel
(sin puertos abiertos a internet).

Para publicar cambios (desde Git Bash), crea primero `.deploy.env` a partir de
`.deploy.env.example` con los datos de tu servidor (ese archivo no se sube a git):

```bash
./deploy.sh
```

## API

| Método | Ruta                  | Descripción                     |
|--------|-----------------------|---------------------------------|
| GET    | `/api/health`         | Estado del servidor             |
| GET    | `/api/projects`       | Lista de proyectos              |
| GET    | `/api/projects/:slug` | Detalle de un proyecto          |
| POST   | `/api/contact`        | Envía `{ name, email, message }`|
| GET    | `/api/github/repos`   | Tus repos públicos (`?limit=3`) |

## Tests

```bash
cd backend  && npm test
cd frontend && npx ng test --watch=false
```

## Personalizar

- **Tus datos** (nombre, bio, links, estadísticas, stack): `frontend/src/app/core/config/site.config.ts`
- **Colores y tipografías**: variables al inicio de `frontend/src/styles.scss`
- **Avatar / CV / imágenes**: ponlos en `frontend/public/` y referencia la ruta (ej. `/cv.pdf`)
- **Repos de GitHub**: `GITHUB_USERNAME` en `backend/.env` (local) o `.env` de la raíz (Docker)

## Agregar un proyecto

Agrega un objeto a `backend/src/data/projects.json` (las imágenes van en `frontend/public/`).
Con `"featured": true` aparece en la página de inicio. `highlight` y `metrics` son opcionales.
