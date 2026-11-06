# Portafolio

Sitio personal donde muestro mis proyectos como desarrollador Full Stack, con enlaces
a GitHub, LinkedIn y demos en vivo.

🔗 **https://benzprojects.site**

## Stack

- **Frontend:** Angular 22 · TypeScript · SCSS
- **Backend:** Node.js · Express · PostgreSQL
- **Infraestructura:** Docker · Nginx · Cloudflare

## Estructura

```
dev-portafolio/
├── frontend/          # Aplicación Angular
│   ├── src/app/
│   │   ├── core/      # configuración, modelos y servicios
│   │   ├── layout/    # header, footer y navegación
│   │   ├── pages/     # inicio, proyectos, repositorios, contacto
│   │   └── shared/    # componentes reutilizables
│   └── public/        # logos e imágenes
├── backend/           # API Express
│   ├── src/
│   │   ├── routes/    # endpoints de la API
│   │   └── db/        # conexión, esquema SQL y datos semilla
│   └── test/
├── design/            # diseño original y logos
└── docker-compose.yml
```

## Base de datos

Los proyectos y los mensajes de contacto se guardan en PostgreSQL (servicio `db`
del `docker-compose.yml`, con los datos en el volumen `pgdata`). Al arrancar, la API
crea las tablas (`backend/src/db/schema.sql`) y, si no hay proyectos, carga los de
`backend/src/db/seed-projects.json`.

Desarrollo local:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d db
cd backend && npm run dev   # usa DATABASE_URL de backend/.env
```

Consultar la base en el servidor:

```bash
docker compose exec db psql -p 5234 -U portafolio -d portafolio
```
