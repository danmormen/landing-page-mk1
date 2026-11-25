// Proyectos del portafolio. Hoy son conceptos (negocios ficticios).
// `types` define en qué filtros aparece: landing | sitio | sistema
export type Project = {
  key: 'cafe' | 'ferre' | 'dental' | 'inv' | 'espiga' | 'taller';
  name: string;
  kind: string;
  types: string[];
  desc: string;
  url: string;
  concept: boolean;
};

export const PROJECTS: Project[] = [
  { key: 'cafe', name: 'Café El Portal', kind: 'Landing page', types: ['landing'], url: 'cafeelportal.ejemplo', concept: true,
    desc: 'Landing con menú, ubicación y pedidos para llevar desde el celular.' },
  { key: 'ferre', name: 'Ferretería Don Beto', kind: 'Sitio web', types: ['sitio'], url: 'ferreteriadonbeto.ejemplo', concept: true,
    desc: 'Sitio web con catálogo por categorías y cotización directa por WhatsApp.' },
  { key: 'dental', name: 'Clínica Sonríe', kind: 'Landing page', types: ['landing'], url: 'clinicasonrie.ejemplo', concept: true,
    desc: 'Landing con agenda de citas: el paciente elige día y hora disponibles.' },
  { key: 'inv', name: 'Don Beto · Inventario', kind: 'Sistema', types: ['sistema'], url: 'app.ferreteriadonbeto.ejemplo', concept: true,
    desc: 'Sistema de inventario que avisa qué productos hay que pedir pronto.' },
  { key: 'espiga', name: 'Panadería La Espiga', kind: 'Landing + pedidos', types: ['landing', 'sistema'], url: 'panaderialaespiga.ejemplo', concept: true,
    desc: 'Página de pedidos de pasteles con sabor, tamaño y hora de entrega.' },
  { key: 'taller', name: 'Taller Hermanos Ruiz', kind: 'Sistema', types: ['sistema'], url: 'app.tallerhermanosruiz.ejemplo', concept: true,
    desc: 'Tablero de órdenes: recibido, en reparación y listo para entregar.' },
];

export const byKey = (key: Project['key']) => PROJECTS.find((p) => p.key === key)!;
