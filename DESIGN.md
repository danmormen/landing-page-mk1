# Design — "Vitrina"

Sistema visual del sitio de K2 Studio. Tokens en `src/styles/global.css` (`:root`).

## Idea

Una vitrina sobria: el estudio se presenta con calma y deja que **el trabajo sea el protagonista**. Mucho aire, titulares serif grandes y ejemplos de proyectos vivos dentro de un marco de navegador. Profesional y confiable, sin frialdad corporativa.

## Color — estrategia "restrained"

Neutros verdosos más un acento oliva. El color fuerte vive en los ejemplos de proyectos (cada mini sitio tiene su paleta), no en la interfaz.

| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F1F2EC` | Fondo general |
| `--surface` | `#FFFFFF` | Secciones alternas, tarjetas, formulario |
| `--sunk` | `#E6E8DE` | Pestañas, fondos hundidos |
| `--ink` | `#17190F` | Texto principal, banda CTA |
| `--muted` | `#535846` | Texto secundario (≥4.5:1 sobre `--bg`) |
| `--olive` | `#4C5A26` | Acento: botones principales, enlaces, íconos |
| `--olive-d` | `#3A461C` | Hover del acento |
| `--olive-l` / `--olive-xl` | `#DCE2C6` / `#EBEEDF` | Focus ring, selección, etiquetas |
| `--line` / `--line-2` | `#D6D9C9` / `#E5E7DC` | Bordes y divisores |

## Tipografía

- **Display:** Gloock (serif de alto contraste) para titulares `h1`–`h3`. Tamaños: `.display` hasta 5.75rem, `.h2` hasta 3.6rem, `.h3` hasta 2.2rem; tracking −0.02em.
- **Texto:** Hanken Grotesk 400/500/600/700. Base 17px, interlineado 1.6; párrafos largos ≤ 68ch.
- Sin etiquetas o "kickers" sobre los titulares.

## Componentes

- **Botones:** píldora de 50px (`.btn-primary` oliva, `.btn-ghost` con borde, `.btn-light` sobre oscuro). Feedback al presionar `scale(.97)`.
- **Marco de navegador** (`.browser`): muestra proyectos dentro de una barra con URL y la etiqueta "Concepto".
- **Capturas a escala** (`.shot` + `.shot-canvas`): lienzo fijo de 1000×625 escalado con JS para miniaturas exactas.
- **Listas de servicios y pasos:** columnas divididas por líneas, no tarjetas repetidas.
- **Logo:** pico de montaña (K2) en `--olive-l` sobre un cuadrado `--olive` de 8px de radio (`BrandMark.astro`, `public/favicon.svg`).
- **Sobre nosotros:** la única sección oscura (`--ink`) del inicio. Ilustración `Mountain.astro`: una ruta que se dibuja al entrar en pantalla, con campamentos (Hoy → Tu página web → Tu sistema → El siguiente nivel).
- **Banda CTA:** bloque `--ink` redondeado (28px) al final de cada página.
- **Formulario:** campos de 1.5px de borde, focus con anillo oliva, errores en línea y estado de enviado.

## Movimiento

Curva única: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`.

- **Entrada del hero (una vez por página):** el titular entra primero (26px de recorrido, desenfoque, 800ms) y después el texto (+120ms), los botones (+200ms), las pestañas (solo fundido) y el marco del navegador (+260ms, sube 48px).
- **Revelado al hacer scroll:** una entrada por bloque. Los grupos con `data-stagger` entran como una ola con retrasos decrecientes (0, 90, 160, 215… ms).
- **Pestañas de la vitrina:** fundido cruzado de 220ms. Rotan cada 4.5s hasta que el usuario interactúa.
- **Hover:** las tarjetas de proyecto suben 4px y la captura hace un zoom de 1.03. Las flechas se desplazan 4px.
- **Entre páginas:** View Transitions (fundido y subida de 12px) en navegadores compatibles. El header se mantiene fijo.
- **`prefers-reduced-motion`:** solo fundidos de opacidad, sin desplazamientos ni retrasos.

## Dónde vive cada cosa

- Tokens y componentes: `src/styles/global.css`
- Movimiento e interacciones: `src/scripts/main.js` (más las clases `data-hero`, `data-reveal` y `data-stagger` en el HTML)
- Componentes reutilizables: `src/components/` (Header, Footer, CtaBand, Steps, ProjectCard, PostRow, BrowserFrame, MiniSite, Icon)
