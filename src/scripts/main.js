/* =========================================================
   Estudio Brío — interacciones y movimiento
   ========================================================= */

/* ---- Datos de contacto: cámbialos aquí y se actualizan en todo el sitio ---- */
const CONFIG = {
  whatsapp: '',                       // Número con código de país, sin + ni espacios. Ej: '50212345678'
  whatsappText: 'Hola, me interesa una página o sistema para mi negocio.',
  email: 'hola@tuestudio.com',        // Correo de ejemplo
};

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Enlaces de contacto ---------- */
(() => {
  const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappText)}`;
  document.querySelectorAll('[data-wa]').forEach(a => {
    a.href = wa; a.target = '_blank'; a.rel = 'noopener';
  });
  document.querySelectorAll('[data-email]').forEach(a => {
    a.href = `mailto:${CONFIG.email}`;
    if (a.hasAttribute('data-email-text')) a.textContent = CONFIG.email;
  });
  document.querySelectorAll('.email-text').forEach(el => el.textContent = CONFIG.email);
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();

/* ---------- Header: borde al hacer scroll ---------- */
(() => {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:1px;pointer-events:none';
  document.body.prepend(sentinel);
  new IntersectionObserver(([e]) => header.toggleAttribute('data-scrolled', !e.isIntersecting)).observe(sentinel);
})();

/* ---------- Menú móvil ---------- */
(() => {
  const btn = document.querySelector('.menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  const root = document.documentElement;
  const set = open => {
    root.toggleAttribute('data-menu-open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.inert = !open;
  };
  set(false);
  btn.addEventListener('click', () => set(!root.hasAttribute('data-menu-open')));
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && root.hasAttribute('data-menu-open')) { set(false); btn.focus(); } });
  matchMedia('(min-width: 901px)').addEventListener('change', e => { if (e.matches) set(false); });
})();

/* ---------- Revelado al hacer scroll ----------
   Dentro de un [data-stagger], los hijos entran como una ola: los retrasos se
   acortan (90, 70, 55, 40…ms) para que no se sienta mecánico. */
(() => {
  const steps = [0, 90, 160, 215, 255, 285, 310, 330];
  document.querySelectorAll('[data-stagger]').forEach(group => {
    [...group.querySelectorAll(':scope > [data-reveal]')].forEach((el, i) => {
      el.style.setProperty('--d', (steps[Math.min(i, steps.length - 1)]) + 'ms');
    });
  });
  const items = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('in')); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  items.forEach(el => io.observe(el));
})();

/* ---------- Capturas a escala (lienzo de 1000px) ---------- */
(() => {
  const shots = document.querySelectorAll('.shot');
  if (!shots.length) return;
  const fit = el => el.style.setProperty('--s', (el.clientWidth / 1000).toFixed(4));
  const ro = new ResizeObserver(entries => entries.forEach(e => fit(e.target)));
  shots.forEach(el => { fit(el); ro.observe(el); });
})();

/* ---------- Vitrina del inicio: pestañas con ejemplos ---------- */
(() => {
  const list = document.querySelector('.hero .tabs');
  if (!list) return;
  const tabs = [...list.querySelectorAll('.tab')];
  const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls')));
  const url = document.querySelector('.hero .url-text');
  const browser = document.querySelector('.hero .browser');
  let current = 0, timer = null;

  const show = (n, focus) => {
    current = (n + tabs.length) % tabs.length;
    tabs.forEach((t, i) => {
      const on = i === current;
      t.setAttribute('aria-selected', on);
      t.tabIndex = on ? 0 : -1;
      panels[i].toggleAttribute('data-on', on);
      panels[i].setAttribute('aria-hidden', !on);
    });
    if (url) url.textContent = tabs[current].dataset.url;
    if (focus) tabs[current].focus();
  };
  const stop = () => { clearInterval(timer); timer = null; };

  tabs.forEach((t, i) => t.addEventListener('click', () => { stop(); show(i); }));
  list.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { stop(); show(current + 1, true); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { stop(); show(current - 1, true); e.preventDefault(); }
  });
  show(0);
  if (!reduceMotion) {
    timer = setInterval(() => show(current + 1), 4500);
    browser?.addEventListener('pointerenter', stop, { once: true });
    list.addEventListener('focusin', stop, { once: true });
  }
})();

/* ---------- Preguntas frecuentes ---------- */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.setAttribute('aria-expanded', q.getAttribute('aria-expanded') !== 'true'));
});

/* ---------- Filtro del portafolio ---------- */
(() => {
  const filters = document.querySelectorAll('.filter');
  const cards = [...document.querySelectorAll('.projects [data-type]')];
  if (!filters.length || !cards.length) return;
  filters.forEach(f => f.addEventListener('click', () => {
    filters.forEach(x => x.setAttribute('aria-pressed', x === f));
    const type = f.dataset.filter;
    cards.forEach(card => {
      const show = type === 'all' || card.dataset.type.split(' ').includes(type);
      if (show) {
        card.hidden = false;
        card.classList.add('is-out');
        requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('is-out')));
      } else {
        card.hidden = true;
      }
    });
    document.querySelectorAll('.shot').forEach(el => el.style.setProperty('--s', (el.clientWidth / 1000).toFixed(4)));
  }));
})();

/* ---------- Formulario de contacto ---------- */
(() => {
  const form = document.querySelector('.form');
  if (!form) return;
  // Si llega desde un servicio (contacto.html?servicio=...), preselecciona la opción.
  const pre = new URLSearchParams(location.search).get('servicio');
  const sel = form.querySelector('select[name="need"]');
  if (pre && sel) [...sel.options].forEach(o => { if (o.dataset.key === pre) sel.value = o.value; });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let first = null;
    form.querySelectorAll('[required]').forEach(el => {
      const bad = !el.value.trim();
      el.closest('.field').toggleAttribute('data-error', bad);
      el.setAttribute('aria-invalid', bad);
      if (bad && !first) first = el;
    });
    if (first) { first.focus(); return; }
    // TODO: conectar a un servicio de formularios (Formspree, Netlify Forms, etc.)
    form.setAttribute('data-sent', '');
    form.querySelector('.form-done')?.focus();
  });
  form.addEventListener('input', e => {
    const f = e.target.closest('.field');
    if (f && e.target.value.trim()) { f.removeAttribute('data-error'); e.target.removeAttribute('aria-invalid'); }
  });
})();
