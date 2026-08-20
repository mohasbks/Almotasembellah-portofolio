document.documentElement.classList.add('js');

const root = document.documentElement;
const body = document.body;
const topbar = document.querySelector('.topbar');
const menu = document.querySelector('.index-menu');
const menuToggle = document.querySelector('.menu-toggle');
const langSwitch = document.querySelector('.lang-switch');
const progress = document.querySelector('.page-progress i');
const cursor = document.querySelector('.cursor');
const cursorLabel = cursor.querySelector('span');

const translations = {
  ar: {
    title: 'Almotasembellah Awwad — AI Engineer & Digital Product Builder',
    description: 'المعتصم بالله عوّاد — مهندس ذكاء اصطناعي ومنتِج رقمي مستقل، يصمم ويبني منتجات وأنظمة وتجارب رقمية من مصر إلى العالم.',
    cursor: 'شاهد',
    menu: 'فتح الفهرس',
    close: 'إغلاق الفهرس'
  },
  en: {
    title: 'Almotasembellah Awwad — AI Engineer & Digital Product Builder',
    description: 'Almotasembellah Awwad is an independent AI engineer and digital product builder working from Egypt, worldwide.',
    cursor: 'VIEW',
    menu: 'Open index',
    close: 'Close index'
  }
};

function setLanguage(language, persist = true) {
  const lang = language === 'en' ? 'en' : 'ar';
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  body.classList.toggle('lang-en', lang === 'en');

  document.querySelectorAll('[data-ar][data-en]').forEach((element) => {
    element.innerHTML = element.dataset[lang];
  });

  const options = langSwitch.querySelectorAll('span');
  options[0].classList.toggle('active', lang === 'ar');
  options[1].classList.toggle('active', lang === 'en');
  langSwitch.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
  cursorLabel.textContent = translations[lang].cursor;
  document.title = translations[lang].title;
  document.querySelector('meta[name="description"]').content = translations[lang].description;
  menuToggle.setAttribute('aria-label', menu.classList.contains('open') ? translations[lang].close : translations[lang].menu);
  if (persist) localStorage.setItem('aa-language', lang);
}

function toggleMenu(force) {
  const open = typeof force === 'boolean' ? force : !menu.classList.contains('open');
  menu.classList.toggle('open', open);
  body.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
  const lang = root.lang === 'en' ? 'en' : 'ar';
  menuToggle.setAttribute('aria-label', open ? translations[lang].close : translations[lang].menu);
}

langSwitch.addEventListener('click', () => setLanguage(root.lang === 'ar' ? 'en' : 'ar'));
menuToggle.addEventListener('click', () => toggleMenu());
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') toggleMenu(false);
});

function updateScrollState() {
  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0}%`;

  const sample = document.elementFromPoint(innerWidth / 2, Math.min(90, innerHeight / 2));
  const paperSection = sample?.closest('.paper');
  topbar.classList.toggle('on-paper', Boolean(paperSection) && !menu.classList.contains('open'));
}

addEventListener('scroll', updateScrollState, { passive: true });
addEventListener('resize', updateScrollState);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll('.reveal').forEach((item) => revealObserver.observe(item));

if (matchMedia('(pointer:fine)').matches) {
  let cursorX = innerWidth / 2;
  let cursorY = innerHeight / 2;
  let currentX = cursorX;
  let currentY = cursorY;

  addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
  }, { passive: true });

  function renderCursor() {
    currentX += (cursorX - currentX) * .2;
    currentY += (cursorY - currentY) * .2;
    cursor.style.left = `${currentX}px`;
    cursor.style.top = `${currentY}px`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  document.querySelectorAll('.cursor-view').forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add('view'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('view'));
  });
}

document.querySelector('.back-top').addEventListener('click', () => {
  scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});

const savedLanguage = localStorage.getItem('aa-language');
setLanguage(savedLanguage === 'en' ? 'en' : 'ar', false);
updateScrollState();

requestAnimationFrame(() => {
  document.querySelectorAll('.hero .reveal').forEach((item, index) => {
    setTimeout(() => item.classList.add('in'), 450 + index * 160);
  });
});
