---
name: Terminal Horizon
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
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

Portafolio oscuro, sobrio y editorial. El contenido (proyectos, experiencia, stack) lleva el peso;
la interfaz se retira. La metáfora de terminal se reserva para lugares donde significa algo
(la página 404), no como decoración general.

## Color

- Superficies de `--surface` (#121318) a `--surface-highest` (#34343a). El fondo es plano, sin degradados radiales.
- `--primary` (#c0c1ff) para la acción principal y enlaces; `--on-primary` (#1000a9) como texto sobre ella.
- `--secondary` (#4cd7f6) para chips técnicos y foco (`:focus-visible`).
- `--tertiary` (#4edea3) solo para estado positivo: "Abierto a nuevas oportunidades", "En producción", "En uso", éxito de formularios y "Copiado". Nunca para estados neutros (fechas, acciones en reposo).
- El color nunca es la única fuente de significado (el stack se agrupa por título, no por color).

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
- Un solo lenguaje de "activo" en ambas: fondo `--nav-active-bg` (píldora) y peso 600; en la barra inferior el ícono además se rellena (`FILL 1`).
- /repositorios no está en el menú mientras haya menos de 3 repos públicos; se enlaza desde Inicio y Proyectos.
- "Saltar al contenido" mueve el foco por código: con `<base href="/">` un enlace `#ancla` navegaría al inicio. Ninguna página usa enlaces `#ancla` por la misma razón.

## Estructura del inicio

1. Hero: estado, nombre, rol, bio y una acción principal (Contactar, o Descargar CV si existe `cvUrl`). GitHub y LinkedIn van a la derecha como enlaces secundarios; en móvil, como dos botones compactos.
2. Experiencia: línea de tiempo (aparece cuando `SITE.experience` tiene entradas). Va primero porque es la evidencia más fuerte.
3. Proyectos: con un solo destacado se muestra a ancho completo; con varios, grilla de 2 columnas. Filtros solo con 4 o más proyectos.
4. Perfil: una sola sección con pestañas accesibles (patrón ARIA tabs, flechas/Inicio/Fin): Stack (agrupado por área), Competencias (cada una con su respaldo del CV) y Formación. Mantiene el inicio corto en móvil.
5. Código reciente en GitHub: solo con `SITE.minRepos` (3) o más repos públicos; la misma regla decide si /repositorios vuelve al menú.
6. CTA de contacto con email visible y botón de copiar.

## Componentes

- **Botones:** mínimo 44px de alto. Primario relleno `--primary`; ghost con superficie un tono más claro que su contenedor.
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
