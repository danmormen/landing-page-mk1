# K2 Studio · Sitio web

Sitio de K2 Studio: páginas web y sistemas a la medida para negocios en crecimiento.
Está hecho con [Astro](https://astro.build): genera HTML estático, rápido y fácil de publicar.

## Empezar

Necesitas **Node.js 22.23 o superior** ([descargar](https://nodejs.org)) y **Git**.

```bash
git clone <url-del-repositorio>
cd <carpeta-del-repositorio>
npm install
npm run dev
```

Abre <http://localhost:4321>. Los cambios se ven al guardar.

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local con recarga automática |
| `npm run build` | Genera el sitio final en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el build |
| `npm run check` | Revisa errores de tipos y de plantillas |

## Estructura

```
src/
├── pages/              Una ruta por archivo: index, servicios, portafolio, contacto, blog
│   └── blog/[slug].astro   Plantilla de cada artículo
├── content/blog/       Artículos del blog en Markdown (.md)
├── components/         Header, Footer, botones, tarjetas, mini sitios de ejemplo…
├── layouts/Base.astro  Estructura común (head, header, footer)
├── data/               Nombre del estudio, menú, pasos y proyectos del portafolio
├── styles/global.css   Sistema de diseño (colores, tipografía, componentes, animaciones)
└── scripts/main.js     Interacciones + CONFIG (WhatsApp y correo)
public/                 Archivos que se sirven tal cual (favicon, imágenes)
prototypes/             Exploraciones de diseño (no se publican)
PRODUCT.md              Qué es el negocio, para quién y qué no prometer
DESIGN.md               Reglas visuales y de animación
```

## Tareas comunes

- **Cambiar el nombre del estudio:** `BRAND` en `src/data/site.ts`.
- **Poner el WhatsApp y el correo reales:** `CONFIG` al inicio de `src/scripts/main.js`.
- **Escribir un artículo:** crea `src/content/blog/mi-articulo.md` copiando el encabezado (frontmatter) de otro artículo. Aparece solo en `/blog/mi-articulo`. Con `draft: true` queda oculto.
- **Agregar un proyecto al portafolio:** edita `src/data/projects.ts`.
- **Cambiar colores o tipografías:** variables en `:root` de `src/styles/global.css`, y documenta el cambio en `DESIGN.md`.

## Cómo trabajamos en equipo

1. **Nunca trabajes directo en `main`.** Crea una rama por tarea:
   ```bash
   git switch main && git pull
   git switch -c feature/nombre-corto   # o fix/…, content/…
   ```
2. Haz commits pequeños con mensajes claros: `Agrega sección de testimonios`, `Corrige menú en móvil`.
3. Sube tu rama y abre un **Pull Request** en GitHub:
   ```bash
   git push -u origin feature/nombre-corto
   ```
4. Antes de pedir revisión, corre `npm run build` y `npm run check`, y revisa la página en celular.
5. Otra persona revisa el PR. Cuando lo aprueba, se hace merge a `main`.

### Con Claude Code

El repositorio incluye skills de diseño en `.claude/skills/` (Impeccable y los skills de Emil Kowalski) y contexto en `CLAUDE.md`, `PRODUCT.md` y `DESIGN.md`. Si usas Claude Code en esta carpeta, se cargan automáticamente. Algunos comandos útiles: `/impeccable critique`, `/impeccable polish` y `/review-animations`.

## Pendientes

- [ ] Fotos del equipo para "Sobre nosotros"
- [ ] Número de WhatsApp y correo reales
- [ ] Conectar el formulario de contacto (Netlify Forms, Formspree…)
- [ ] Revisar textos y artículos del blog
- [ ] Reemplazar proyectos conceptuales por casos reales
- [ ] Elegir hosting y dominio
