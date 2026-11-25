# CLAUDE.md

Sitio de **K2 Studio** hecho en **Astro 7** (estático). El idioma del sitio y del equipo es **español** (trato de "tú").

## Antes de cambiar algo
- `PRODUCT.md`: qué ofrece el negocio y qué **no** inventar (clientes, testimonios, cifras, precios, mantenimiento).
- `DESIGN.md`: sistema visual "Vitrina" y reglas de animación. Para trabajo de diseño usa los skills de `.claude/skills/` (Impeccable y los de Emil Kowalski).
- Impeccable está instalado **solo con guías**, sin `scripts/`. No ejecutes ni descargues su programa.

## Comandos
- `npm run dev`: servidor en http://localhost:4321 (`.claude/launch.json` → "astro")
- `npm run build` y `npm run check`: deben pasar sin errores antes de abrir un PR

## Convenciones
- Las páginas están en `src/pages/`, los componentes en `src/components/` y los datos (nombre, menú, proyectos) en `src/data/`.
- Los artículos son `.md` en `src/content/blog/` (esquema en `src/content.config.ts`).
- Los estilos van en `src/styles/global.css` con los tokens de `:root`. No metas colores sueltos en los componentes.
- La configuración de contacto vive en `CONFIG` de `src/scripts/main.js`.
- Los ejemplos de portafolio son conceptos y llevan la etiqueta "Concepto".
- Trabaja en ramas (`feature/…`, `fix/…`, `content/…`) y entrega los cambios por Pull Request. Nunca hagas commit directo a `main`.
