---
name: Ingeniería editorial
colors:
  surface: '#0f1115'
  surface-lowest: '#0a0b0e'
  surface-low: '#14171c'
  surface-container: '#181c22'
  surface-high: '#20252c'
  surface-highest: '#2a3038'
  on-surface: '#e6e7ea'
  on-surface-variant: '#a3a9b4'
  outline: '#8a909b'
  outline-variant: '#333842'
  primary: '#3dd6c0'
  primary-hover: '#6fe3d2'
  on-primary: '#062521'
  primary-tint: 'rgba(61, 214, 192, 0.14)'
  error: '#ffb4ab'
  linkedin: '#0a66c2'
typography:
  display-hero:
    fontFamily: IBM Plex Sans
    fontSize: 32px / 44px (≥768) / 56px hero de inicio (≥1024)
    fontWeight: '700'
    letterSpacing: -0.02em a -0.03em
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  title-sm:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '600'
  body:
    fontFamily: IBM Plex Sans
    fontSize: 15px / 16px (≥768)
    lineHeight: 24px / 26px
  label:
    fontFamily: IBM Plex Sans
    fontSize: 13px
    fontWeight: '500'
  meta:
    fontFamily: IBM Plex Sans
    fontSize: 12px
  code:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: '500'
  badge-label:
    fontFamily: IBM Plex Mono
    fontSize: 12px
    fontWeight: '600'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  lg: 0.75rem
  xl: 1rem
  full: 9999px
spacing:
  margin: 1rem (móvil) / 2rem (≥768)
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

> Fuente de verdad: los tokens viven en `frontend/src/styles.scss`. Este documento describe
> las reglas; si discrepan, manda el código y hay que actualizar este archivo.

## Tono

Dirección "Ingeniería editorial" (elegida el 2026-11-13 entre tres propuestas). Oscuro, sobrio y con tipografía grande. El inicio abre con una tesis respaldada por la experiencia ("Software que se usa en operación real.") y el contenido (experiencia, proyectos) lleva el peso. La metáfora de terminal solo aparece en el 404.

## Color

- Gris neutro de `--surface` (#0f1115) a `--surface-highest` (#2a3038), sin tinte violeta. Fondo plano.
- **Un solo acento: turquesa `--primary` (#3dd6c0)**, con `--on-primary` (#062521) como texto encima. Se usa para la acción principal, los enlaces, el foco, el estado "abierto", el "activo" de la navegación y la palabra destacada del titular (`.accent`).
- `--primary-tint` es el fondo suave del acento (pestaña activa, etiquetas de estado, filtros activos).
- Los chips de tecnología son neutros (superficie y borde gris): el acento queda reservado para lo accionable y lo positivo.
- `--secondary` y `--tertiary` existen solo como alias de `--primary` por compatibilidad; no introducir otros acentos.
- El logo conserva su violeta original (activo de marca del usuario).

## Tipografía

- IBM Plex Sans para todo el texto; IBM Plex Mono solo para datos técnicos (nombres de repos, tags de tecnologías, métricas, código).
- Cuerpo mínimo 15px en móvil y 16px en escritorio; ningún texto de interfaz bajo 12px.
- Sin eyebrows ni kickers sobre los títulos: el título habla solo.
- `text-wrap: balance` en títulos y `pretty` en párrafos.

## Elevación y forma

- Una sola forma de elevación: borde de 1px (`--surface-high` / `--surface-highest`). En hover, el borde se aclara; los enlaces-tarjeta usan `--shadow-raised` (sombra real con desplazamiento).
- Sin halos de color (`glow`) ni degradados decorativos.
- Radios: 0.75rem en tarjetas, 1rem en bloques grandes (CTA, formulario), pill solo en controles pequeños (filtros, estado).

## Navegación

- Escritorio: header fijo con Inicio, Proyectos y Contacto. Móvil: barra inferior fija; el header no es fijo.
- "Activo" en el acento: en escritorio, subrayado turquesa de 2px y peso 600; en la barra inferior, píldora `--primary-tint` tras el ícono relleno (`FILL 1`).
- /repositorios no está en el menú mientras haya menos de 3 repos públicos; se enlaza desde Inicio y Proyectos.
- "Saltar al contenido" mueve el foco por código: con `<base href="/">` un enlace `#ancla` navegaría al inicio. Ninguna página usa enlaces `#ancla` por la misma razón.

## Estructura del inicio

1. Hero: titular grande (`SITE.headline`, máx. 14ch) y debajo, separados por una línea, nombre + rol + bio a la izquierda y a la derecha la acción principal (Contactar, o Descargar CV si existe `cvUrl`), el estado y los enlaces a GitHub y LinkedIn.
2. Experiencia: el logro marcado `featured` va destacado en una tarjeta (título del sistema y resultado en el acento); el resto en dos columnas, en orden cronológico. Va primero porque es la evidencia más fuerte.
3. Proyectos: con un solo destacado se muestra a ancho completo; con varios, grilla de 2 columnas. Filtros solo con 4 o más proyectos.
4. Perfil: una sola sección con pestañas accesibles (patrón ARIA tabs, flechas/Inicio/Fin): Stack (agrupado por área), Competencias (cada una con su respaldo del CV) y Formación. Mantiene el inicio corto en móvil.
5. Código reciente en GitHub: solo con `SITE.minRepos` (3) o más repos públicos; la misma regla decide si /repositorios vuelve al menú.
6. CTA de contacto con email visible y botón de copiar.

## Componentes

- **Botones:** píldora (`--radius-full`), mínimo 44px de alto. Primario relleno `--primary`; ghost con superficie un tono más claro que su contenedor.
- **Tarjeta de proyecto:** etiqueta de estado sobre el título, un solo enlace al detalle ("Ver caso"); demo y código como acciones secundarias. Sin imagen no se inventa una: la tarjeta queda solo con texto. Las imágenes son capturas reales o diagramas (SVG) del sistema, nunca ilustraciones decorativas.
- **Grillas de proyectos:** `align-items: start`; una tarjeta sin imagen no se estira a la altura de su vecina.
- **Experiencia:** la línea en negrita (`outcome`) es solo para resultados reales; la tecnología va en el resumen.
- **Detalle de proyecto:** sin imagen, texto a la izquierda y ficha (métricas y acciones) a la derecha. Termina con "Siguiente proyecto" y un bloque de contacto.
- **Tarjeta de repo:** toda la tarjeta es un enlace; estrellas y forks se ocultan cuando son 0, y la descripción cuando no existe.
- **Formularios:** etiquetas visibles, `aria-invalid` y `aria-describedby` en errores, contador de caracteres y una región `aria-live` siempre montada.

## Accesibilidad

- Íconos de Material Symbols siempre con `aria-hidden="true"` (si no, el lector de pantalla lee el nombre de la ligadura).
- Enlaces externos anuncian "(abre en una pestaña nueva)" con `.sr-only`.
- Enlace "Saltar al contenido" al inicio de la página.
- Títulos de pestaña con `SiteTitleStrategy`: "Página · Benjamín López".
- Foco: al cambiar de página va al `<h1>` de la vista nueva; al enviar un formulario inválido, al primer campo con error; las acciones que hacen scroll también mueven el foco.
- Imágenes de proyecto con `imageAlt` descriptivo (los diagramas describen el flujo completo).
- Movimiento: una sola entrada escalonada del hero (opacidad, 10px y desenfoque, 0.7 s, ease-out exponencial) y el punto de estado que pulsa. `prefers-reduced-motion` desactiva ambas.
