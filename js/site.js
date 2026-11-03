/* ═══════════════════════════════════════════════════════════════
   SITE.JS — runs the whole website. Every page loads this file.

   You don't need to edit this file to add pages:
     • projects  → data/projects.js  + a page file in projects/
     • lab posts → data/lab.js       + a page file in lab/
     • colors    → the top of css/style.css
   The SETTINGS block below holds the few bits of text that
   appear on every page.
   ═══════════════════════════════════════════════════════════════ */

const SETTINGS = {
  name:   'Brett Bowley',
  footer: '© 2026 Brett Bowley. All rights reserved.',
  resume: 'files/Brett_Bowley_Resume.pdf',

  // Section names on project pages
  about:        'About the Game',
  media:        'Media',
  contribution: 'My Contribution',
  team:         'Team',
  tags:         'Tags',
};

// What kind of page this is — set on each page's <body data-page="...">:
//   home, listing (All Projects / Laboratory), project, lab
const PAGE = document.body.dataset.page || '';


/* ─── Helpers ───────────────────────────────────────────────── */

// Makes text safe to put inside HTML
function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

// Turns a string of HTML into real elements
function html(markup) {
  const template = document.createElement('template');
  template.innerHTML = markup.trim();
  return template.content;
}

// Accepts a list, a single value or nothing, and always gives back a list
function list(value) {
  if (Array.isArray(value)) return value;
  return value ? [value] : [];
}

// This page's file name without ".html" — it must match the id in the data file
function pageId() {
  const file = decodeURIComponent(location.pathname.split('/').pop() || '');
  return file.replace(/\.html?$/i, '');
}

// Finds the 11-character video id in any kind of YouTube link
function youTubeId(url) {
  const match = String(url).match(
    /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? match[1] : null;
}

// Shows a box at the top of the page explaining what needs fixing
function showMessage(title, text, kind = 'error') {
  const box = html(`<div class="site-error ${kind}"><strong>${esc(title)}</strong>${esc(text)}</div>`);
  topOfPage().after(box);
  if (kind === 'error') console.error(`${title}: ${text}`);
}

// The spot right under the nav bar (and under any message boxes already shown)
function topOfPage() {
  const boxes = document.querySelectorAll('body > .site-error');
  return boxes.length ? boxes[boxes.length - 1] : document.querySelector('nav');
}

function dataError(file) {
  showMessage(`${file} could not be read`,
    'This usually means a missing comma, quote or bracket in that file. ' +
    'Press F12, open the Console tab, and it will show the line number.');
}

// Runs one part of the page; if it breaks, the rest of the page still works
function run(step) {
  try { step(); }
  catch (err) {
    showMessage('Something in the data for this page has the wrong format', err.message);
    console.error(err);
  }
}

const ICONS = {
  download: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  itch: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.13 1.338C2.08 1.96.02 4.328 0 6.668v1.002c0 1.255.672 2.36 1.69 3.025v8.972c0 .666 1.285 1.333 3.21 1.333h14.2c1.925 0 3.21-.667 3.21-1.333V10.695c1.018-.665 1.69-1.77 1.69-3.025V6.668c-.02-2.34-2.08-4.707-3.13-5.33C19.88.718 14.353 0 12 0 9.648 0 4.12.718 3.13 1.338zM12 2c2.443 0 7.82.714 8.79 1.272.83.477 2.195 2.255 2.21 3.395V7.67c0 .944-.854 1.63-1.69 1.63H2.69C1.854 9.3 1 8.614 1 7.67V6.667c.015-1.14 1.38-2.918 2.21-3.395C4.18 2.714 9.557 2 12 2zm7 8c.172 0 .343-.015.51-.04v8.707c-.287.117-.93.333-1.81.333H6.3c-.88 0-1.523-.216-1.81-.333V9.96c.167.025.338.04.51.04h14zM9 12v2h6v-2H9z"/></svg>',
  github: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>',
  play: '<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>',
};


/* ─── Nav bar + footer (the same on every page) ─────────────── */

function buildNav() {
  const home = PAGE === 'home';
  const links = [
    ['Home',     home ? '#hero' : 'index.html'],
    ['Projects', home ? '#projects' : 'projects.html'],
    ['Lab',      home ? '#lab'      : 'laboratory.html'],
    ['About',    home ? '#about'    : 'index.html#about'],
    ['Contact',  home ? '#contact'  : 'index.html#contact'],
  ];
  document.body.prepend(html(`
    <nav>
      <a href="${home ? '#hero' : 'index.html'}" class="nav-logo">${esc(SETTINGS.name)}<span>.</span></a>
      <ul class="nav-links">
        ${links.map(([text, href]) => `<li><a href="${href}">${text}</a></li>`).join('')}
        <li><a href="${SETTINGS.resume}" class="resume-btn" target="_blank" rel="noopener">Resume</a></li>
      </ul>
    </nav>`));
}

function buildFooter() {
  document.body.append(html(`
    <footer>
      <span class="footer-logo">${esc(SETTINGS.name)}</span>
      <span class="footer-copy">${esc(SETTINGS.footer)}</span>
    </footer>`));
}


/* ─── Cards (home page, All Projects, Laboratory) ───────────── */
// Any element with data-cards="projects" or data-cards="lab" gets filled with cards.
// Add data-show="home" to only show the ones marked onHomePage: true.

function cardHTML(item, index, kind) {
  const link  = `${kind === 'lab' ? 'lab' : 'projects'}/${encodeURIComponent(item.id)}.html`;
  const label = kind === 'lab' ? item.engine : item.status;
  return `
    <a class="project-card fade-in${item.bigCard ? ' card-big' : ''}" href="${link}"
       style="transition-delay:${(0.05 + index * 0.05).toFixed(2)}s">
      <div class="card-img">${item.image ? `<img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy">` : ''}</div>
      <div class="card-body">
        <div class="card-engine">${esc(label)}</div>
        <div class="card-title">${esc(item.title)}</div>
        <p class="card-desc">${esc(item.cardText)}</p>
        <div class="card-tags">${list(item.tags).map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
      </div>
    </a>`;
}

function renderCardGrids() {
  document.querySelectorAll('[data-cards]').forEach(grid => {
    const kind  = grid.dataset.cards;
    const items = kind === 'lab'
      ? (typeof LAB_POSTS !== 'undefined' ? LAB_POSTS : null)
      : (typeof PROJECTS  !== 'undefined' ? PROJECTS  : null);
    if (!items) return dataError(kind === 'lab' ? 'data/lab.js' : 'data/projects.js');

    const shown = grid.dataset.show === 'home' ? items.filter(item => item.onHomePage) : items;
    grid.innerHTML = shown.map((item, i) => cardHTML(item, i, kind)).join('');
  });
}


/* ─── Page header (project and lab pages) ───────────────────── */

function badgeHTML(text, colorClass = '') {
  return `<span class="proj-badge ${colorClass}">${esc(text)}</span>`;
}

// "Released" badges are green; anything else (Prototype, WIP...) is teal
function statusBadgeHTML(status) {
  if (!status) return '';
  return badgeHTML(status, /released/i.test(status) ? 'released' : 'in-progress');
}

function heroHTML({ image, title, eyebrow, badges, parentText, parentLink, scrollHint }) {
  return `
    <section class="proj-hero">
      ${image ? `<img class="proj-hero-img" src="${esc(image)}" alt="${esc(title)} banner">` : ''}
      <div class="proj-hero-overlay"></div>
      <div class="proj-hero-content">
        <div class="proj-breadcrumb">
          <a href="index.html">Home</a><span>/</span>
          <a href="${parentLink}">${parentText}</a><span>/</span>
          <span>${esc(title)}</span>
        </div>
        ${eyebrow ? `<div class="hero-eyebrow">${esc(eyebrow)}</div>` : ''}
        <h1>${esc(title)}</h1>
        <div class="proj-hero-meta">${badges}</div>
      </div>
      ${scrollHint ? '<div class="scroll-hint">SCROLL</div>' : ''}
    </section>`;
}

// Finds this page's block in a data file; shows a helpful message if it can't
function findPageData(items, file, folder, example) {
  const id = pageId();
  if (id.startsWith('_')) {
    showMessage('This is the template page (it is not shown on the site)',
      `To make a new page: copy this file, rename the copy (for example myGame.html), ` +
      `then add a block with the same id to ${file}. The title and pictures below are only examples.`, 'note');
    return example;
  }
  if (typeof items === 'undefined') return dataError(file);
  const found = items.find(item => item.id === id);
  if (!found) {
    showMessage(`No block with id: '${id}' in ${file}`,
      `The id has to match this page's file name exactly (${folder}/${id}.html), capital letters included.`);
  }
  return found;
}


/* ─── Project pages (projects/*.html) ───────────────────────── */
// The page file only holds your "My Contribution" writing.
// Everything else comes from the project's block in data/projects.js.

const EXAMPLE_PROJECT = {
  title: 'Your Project Title', status: 'Prototype', eyebrow: 'Game Jam 2026', badges: ['Windows'],
  about: ['The "About the Game" paragraphs come from your block in data/projects.js.'],
  team: [{ name: 'Your Name', role: 'Programmer' }],
  engine: 'Unity', platforms: 'Windows', year: '2026', tags: ['Example Tag'],
};

function mediaThumbHTML(src, title) {
  const video = youTubeId(src);
  if (video) {
    return `
      <button type="button" class="proj-media-thumb is-video" data-video="${video}" aria-label="Play video">
        <img src="https://img.youtube.com/vi/${video}/hqdefault.jpg" alt="${esc(title)} video" loading="lazy">
        <span class="proj-play-btn"><span class="proj-play-circle">${ICONS.play}</span></span>
      </button>`;
  }
  return `
    <button type="button" class="proj-media-thumb" data-image="${esc(src)}" aria-label="View full size">
      <img src="${esc(src)}" alt="${esc(title)} screenshot" loading="lazy">
    </button>`;
}

function renderProjectPage() {
  const project = findPageData(typeof PROJECTS === 'undefined' ? undefined : PROJECTS,
                               'data/projects.js', 'projects', EXAMPLE_PROJECT);
  if (!project) return;

  const writing  = document.getElementById('my-contribution');
  const about    = list(project.about);
  const media    = list(project.media);
  const team     = list(project.team);
  const tags     = list(project.tags);
  const cover    = project.cover || project.image;
  const download = project.download || project.itch;
  const info = [
    ['Status',    project.status],
    ['Engine',    project.engine],
    ['Platform',  list(project.platforms).join(', ')],
    ['Year',      project.year],
    ['File size', project.size],
  ].filter(([, value]) => value);

  document.title = `${project.title} | ${SETTINGS.name}`;

  topOfPage().after(html(`
    ${heroHTML({
      image: project.banner || project.image,
      title: project.title,
      eyebrow: project.eyebrow,
      badges: statusBadgeHTML(project.status) + list(project.badges).map(b => badgeHTML(b)).join(''),
      parentText: 'Projects',
      parentLink: 'projects.html',
    })}

    <div class="proj-body">
      <main class="proj-main">
        ${about.length ? `
          <div class="proj-block fade-in">
            <div class="proj-section-label">${esc(SETTINGS.about)}</div>
            ${about.map(text => `<p class="proj-desc">${esc(text)}</p>`).join('')}
          </div>` : ''}

        ${media.length ? `
          <div class="proj-block fade-in">
            <div class="proj-section-label">${esc(SETTINGS.media)}</div>
            <div class="proj-screenshots">${media.map(src => mediaThumbHTML(src, project.title)).join('')}</div>
          </div>` : ''}

        <div class="proj-block fade-in" id="contribution-block">
          <div class="proj-section-label">${esc(SETTINGS.contribution)}</div>
        </div>

        ${team.length ? `
          <div class="proj-block fade-in">
            <div class="proj-section-label">${esc(SETTINGS.team)}</div>
            <div class="proj-credits-grid">
              ${team.map(person => `
                <div class="credit-card">
                  <div class="credit-role">${esc(person.role)}</div>
                  <div class="credit-name">${esc(person.name)}</div>
                </div>`).join('')}
            </div>
          </div>` : ''}
      </main>

      <aside class="proj-sidebar">
        ${cover ? `<img class="proj-cover-img fade-in" src="${esc(cover)}" alt="${esc(project.title)} cover">` : ''}
        ${download ? `<a class="proj-download-btn" href="${esc(download)}" target="_blank" rel="noopener">${ICONS.download} Download Free</a>` : ''}
        ${project.itch ? `<a class="proj-side-btn" href="${esc(project.itch)}" target="_blank" rel="noopener">${ICONS.itch} View on itch.io</a>` : ''}
        ${project.github ? `<a class="proj-side-btn" href="${esc(project.github)}" target="_blank" rel="noopener">${ICONS.github} View on GitHub</a>` : ''}
        ${info.length ? `
          <div class="proj-info-table">
            ${info.map(([key, value]) => `
              <div class="proj-info-row">
                <span class="proj-info-key">${key}</span>
                <span class="proj-info-val">${esc(value)}</span>
              </div>`).join('')}
          </div>` : ''}
        ${tags.length ? `
          <div>
            <div class="proj-section-label proj-tags-label">${esc(SETTINGS.tags)}</div>
            <div class="proj-tags">${tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div>
          </div>` : ''}
      </aside>
    </div>`));

  // Move the writing from the page file into the "My Contribution" block
  const block = document.getElementById('contribution-block');
  if (writing && writing.innerHTML.trim()) {
    writing.classList.add('writing');
    block.append(writing);
  } else {
    block.remove();
  }
}


/* ─── Lab post pages (lab/*.html) ───────────────────────────── */
// The page file only holds the post's writing.
// The header (title, picture, tags, GitHub buttons) comes from data/lab.js.

const EXAMPLE_LAB_POST = {
  title: 'Your Lab Post Title', engine: 'Unity', tags: ['Example Tag'],
};

function renderLabPage() {
  const post = findPageData(typeof LAB_POSTS === 'undefined' ? undefined : LAB_POSTS,
                            'data/lab.js', 'lab', EXAMPLE_LAB_POST);
  if (!post) return;

  const writing = document.getElementById('lab-post');
  const github  = post.github
    ? `<a href="${esc(post.github)}" class="btn-secondary" target="_blank" rel="noopener">View the code on GitHub</a>`
    : '';

  document.title = `${post.title} | ${SETTINGS.name}`;

  topOfPage().after(html(`
    ${heroHTML({
      image: post.banner || post.image,
      title: post.title,
      eyebrow: post.engine,
      badges: list(post.tags).map(t => badgeHTML(t)).join(''),
      parentText: 'Laboratory',
      parentLink: 'laboratory.html',
      scrollHint: true,
    })}

    <article class="lab-post">
      ${github ? `<p class="lab-actions fade-in" data-late>${github}</p>` : ''}
      <div id="lab-post-slot"></div>
      <div class="lab-post-back">
        <a href="laboratory.html" class="btn-secondary">← Back to Laboratory</a>
        ${github}
      </div>
    </article>`));

  // Move the writing from the page file into the post
  const slot = document.getElementById('lab-post-slot');
  if (writing) {
    writing.classList.add('writing', 'fade-in');
    slot.replaceWith(writing);
  } else {
    slot.remove();
  }
}


/* ─── Image / video viewer (lightbox) ───────────────────────── */
// Opens when you click a Media thumbnail or any picture in your writing.

let lightbox = null;
let gallery = [];        // the pictures / videos you can step through
let galleryIndex = 0;

function showLightboxItem() {
  lightbox.querySelector('.lightbox-content').innerHTML = gallery[galleryIndex];
  const many = gallery.length > 1;
  lightbox.querySelectorAll('.lightbox-arrow').forEach(a => { a.hidden = !many; });
  lightbox.querySelector('.lightbox-count').textContent = many ? `${galleryIndex + 1} / ${gallery.length}` : '';
}

// items = the HTML for each picture/video, start = which one to show first
function openLightbox(items, start = 0) {
  if (!lightbox) {
    document.body.append(html(`
      <div class="lightbox">
        <button type="button" class="lightbox-arrow lightbox-prev" aria-label="Previous">&#8249;</button>
        <div class="lightbox-inner">
          <button type="button" class="lightbox-close">&#x2715; Close</button>
          <div class="lightbox-content"></div>
          <div class="lightbox-count"></div>
        </div>
        <button type="button" class="lightbox-arrow lightbox-next" aria-label="Next">&#8250;</button>
      </div>`));
    lightbox = document.body.lastElementChild;
    lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => stepLightbox(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => stepLightbox(1));
  }
  gallery = items;
  galleryIndex = start;
  showLightboxItem();
  lightbox.classList.add('open');
}

function stepLightbox(direction) {
  if (gallery.length < 2) return;
  galleryIndex = (galleryIndex + direction + gallery.length) % gallery.length;
  showLightboxItem();   // replacing the content also stops a playing video
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.querySelector('.lightbox-content').innerHTML = '';   // also stops a playing video
  gallery = [];
}

function lightboxItemHTML(el) {
  if (el.dataset.video) {
    return `
      <div class="lightbox-video">
        <iframe src="https://www.youtube.com/embed/${el.dataset.video}?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </div>`;
  }
  if (el.dataset.image) return `<img src="${esc(el.dataset.image)}" alt="">`;
  return `<img src="${esc(el.currentSrc || el.src)}" alt="${esc(el.alt)}">`;
}

function setupLightbox() {
  document.addEventListener('keydown', e => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
  });

  document.addEventListener('click', e => {
    // Media thumbnails step through that project's media; writing pictures through that post's pictures
    const clicked = e.target.closest('.proj-media-thumb') || e.target.closest('.writing img');
    if (!clicked) return;
    const group = clicked.matches('.proj-media-thumb')
      ? [...clicked.parentElement.querySelectorAll('.proj-media-thumb')]
      : [...clicked.closest('.writing').querySelectorAll('img')];
    openLightbox(group.map(lightboxItemHTML), group.indexOf(clicked));
  });
}


/* ─── Home page: typewriter + copy email ────────────────────── */

// Types out the words in data-words="One|Two|Three", one after another
function startTypewriter() {
  const el = document.getElementById('role-text');
  if (!el) return;
  const words = (el.dataset.words || el.textContent).split('|').map(w => w.trim()).filter(Boolean);
  if (!words.length) return;
  let word = 0, chars = 0, deleting = false;

  (function type() {
    const current = words[word];
    chars += deleting ? -1 : 1;
    el.textContent = current.slice(0, chars);
    if (!deleting && chars === current.length) {
      deleting = true;
      setTimeout(type, 2000);            // pause on the full word
      return;
    }
    if (deleting && chars === 0) {
      deleting = false;
      word = (word + 1) % words.length;
    }
    setTimeout(type, deleting ? 60 : 100);
  })();
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for pages opened straight from the computer (file://) and older browsers
  return new Promise((resolve, reject) => {
    const box = document.createElement('textarea');
    box.value = text;
    box.style.position = 'fixed';
    box.style.opacity = '0';
    document.body.appendChild(box);
    box.select();
    const ok = document.execCommand('copy');
    box.remove();
    ok ? resolve() : reject();
  });
}

// Clicking the Email button copies the address and shows the "Email copied!" message
function setupCopyEmail() {
  const link  = document.getElementById('copy-email');
  const popup = document.getElementById('copy-popup');
  if (!link || !popup) return;

  const email = link.getAttribute('href').replace(/^mailto:/i, '');
  popup.querySelector('.copy-popup-email').textContent = email;
  let timer;

  link.addEventListener('click', e => {
    e.preventDefault();
    copyText(email)
      .then(() => {
        popup.classList.add('show');
        clearTimeout(timer);
        timer = setTimeout(() => popup.classList.remove('show'), 2500);
      })
      // If the browser blocks copying, open the visitor's mail app instead
      .catch(() => { location.href = link.href; });
  });

  // Click anywhere on the message to close it early
  popup.addEventListener('click', () => popup.classList.remove('show'));
}


/* ─── Fade-in on scroll ─────────────────────────────────────── */

function startFadeIns() {
  const makeObserver = rootMargin => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin });
    return observer;
  };
  const normal = makeObserver('0px');
  // data-late: waits until it's well inside the screen, so it doesn't appear on load
  const late = makeObserver('0px 0px -35% 0px');
  document.querySelectorAll('.fade-in').forEach(el =>
    (el.hasAttribute('data-late') ? late : normal).observe(el));
}


/* ─── Build the page ────────────────────────────────────────── */

run(buildNav);
if (PAGE === 'project') run(renderProjectPage);
if (PAGE === 'lab')     run(renderLabPage);
run(renderCardGrids);
run(buildFooter);
run(setupLightbox);
run(startTypewriter);
run(setupCopyEmail);
run(startFadeIns);
