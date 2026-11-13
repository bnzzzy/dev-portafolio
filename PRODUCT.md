# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos públicos con el mismo peso:

- **Reclutadores y líderes técnicos** de empresas en Chile que buscan perfiles Full Stack o Backend. Llegan desde LinkedIn o desde el CV, revisan en pocos minutos y deciden si vale la pena una entrevista.
- **Clientes freelance** (pymes o equipos) que necesitan automatización, procesos de datos o una aplicación. Buscan señales de que el trabajo se entrega completo y funciona en producción.

## Product Purpose

Portafolio personal de Benjamín López, Ingeniero en Informática (Duoc UC, titulado en dic. 2025) y desarrollador Full Stack. Existe para que ambos públicos entiendan rápido qué sabe hacer, vean evidencia real y lo contacten. Éxito: un mensaje por el formulario, un email o una conexión por LinkedIn que termine en entrevista o proyecto.

## Positioning

Experiencia real en logística (ID Logistics Chile) que cruza backend Java/Spring Boot, frontend Angular/React, apps Flutter, ETL y DevOps, más automatización RPA. El sitio mismo es evidencia: corre en un servidor propio con Docker y Cloudflare Tunnel.

## Operating Context

- Se visita sobre todo desde el enlace del CV y del perfil de LinkedIn, en escritorio y en móvil.
- Contenido en español de Chile.
- El contacto llega por formulario (guardado en PostgreSQL), email o LinkedIn.

## Capabilities and Constraints

- Angular (frontend) + Express (API) + PostgreSQL, en Docker sobre un NUC propio, publicado con Cloudflare Tunnel en benzprojects.site.
- Los proyectos vienen de la base de datos, sembrada desde `backend/src/db/seed-projects.json`; los repos se leen en vivo de GitHub (usuario `bnzzzy`).
- Los datos personales y el contenido editable viven en `frontend/src/app/core/config/site.config.ts`.
- Sin decidir: foto de perfil, CV descargable público (el CV actual incluye teléfonos y referencias y no debe publicarse tal cual).

## Brand Commitments

- Voz formal, en tono de CV: descripciones impersonales y precisas, sin tuteo ni coloquialismos.
- Nombre: Benjamín López. Logo: monograma en `frontend/public/logo.svg`.

## Evidence on Hand

- CV v3 (`privado/`, no versionado): 4 puestos entre dic. 2024 y oct. 2026, certificaciones y habilidades.
- App de RRHH integrada con la API de BUK: proyecto interno, sin código público ni capturas.
- Este portafolio: código en github.com/bnzzzy/dev-portafolio.
- 6 certificaciones de Google Cloud y 7 certificaciones académicas de Duoc UC.
- **No existen** y no deben inventarse: métricas cuantificadas de impacto, testimonios, capturas de la app de RRHH, foto de perfil.

## Product Principles

1. Cada afirmación se respalda con un hecho del CV o del código; nada inventado.
2. La experiencia y los proyectos van antes que la autodescripción.
3. Contactar debe ser posible en un paso desde cualquier página.
4. Lo confidencial (teléfonos, referencias, código interno) nunca se publica.

## Accessibility & Inclusion

WCAG 2.1 AA: contraste, navegación por teclado, lectores de pantalla y objetivos táctiles de 44 px.
