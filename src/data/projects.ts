// Proyectos del portafolio. Hoy son conceptos (negocios ficticios).
// `types` define en qué filtros aparece: web | sistema
export type Project = {
  key: 'cafe' | 'ferre' | 'dental' | 'inv' | 'espiga' | 'taller';
  name: string;
  kind: string;
  types: ('web' | 'sistema')[];
  desc: string;
  url: string;
  concept: boolean;
};

export const PROJECTS: Project[] = [
  { key: 'cafe', name: 'Café El Portal', kind: 'Página web', types: ['web'], url: 'cafeelportal.ejemplo', concept: true,
    desc: 'Página con menú, ubicación y pedidos para llevar desde el celular.' },
  { key: 'ferre', name: 'Ferretería Don Beto', kind: 'Sitio web', types: ['web'], url: 'ferreteriadonbeto.ejemplo', concept: true,
    desc: 'Sitio de varias páginas con catálogo por categorías y cotización directa por WhatsApp.' },
  { key: 'dental', name: 'Clínica Sonríe', kind: 'Página web', types: ['web'], url: 'clinicasonrie.ejemplo', concept: true,
    desc: 'Página con agenda de citas: el paciente elige día y hora disponibles.' },
  { key: 'inv', name: 'Don Beto · Inventario', kind: 'Sistema', types: ['sistema'], url: 'app.ferreteriadonbeto.ejemplo', concept: true,
    desc: 'Sistema de inventario que avisa qué productos hay que pedir pronto.' },
  { key: 'espiga', name: 'Panadería La Espiga', kind: 'Página web + pedidos', types: ['web', 'sistema'], url: 'panaderialaespiga.ejemplo', concept: true,
    desc: 'Página de pedidos de pasteles con sabor, tamaño y hora de entrega.' },
  { key: 'taller', name: 'Taller Hermanos Ruiz', kind: 'Sistema', types: ['sistema'], url: 'app.tallerhermanosruiz.ejemplo', concept: true,
    desc: 'Tablero de órdenes: recibido, en reparación y listo para entregar.' },
];

export const byKey = (key: Project['key']) => PROJECTS.find((p) => p.key === key)!;
