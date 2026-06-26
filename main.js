/* ═══════════════════════════════════════════════════
   Brett Bowley Portfolio — JavaScript
   ═══════════════════════════════════════════════════ */

// ─── Typewriter effect ────────────────────────────
const roles = ['Game Developer', 'Server Holster', 'Problem Solver'];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleEl = document.getElementById('role-text');

function typeRole() {
  const current = roles[roleIdx];
  if (!deleting) {
    roleEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeRole, 2000);
      return;
    }
  } else {
    roleEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeRole, deleting ? 60 : 100);
}

typeRole();

// ─── Terminal commands ────────────────────────────
const commands = {
  help: () => [
    '<span class="term-output">Available commands:</span>',
    '  <span class="term-cmd">about</span>       - Learn about Brett',
    '  <span class="term-cmd">skills</span>      - Technical skills',
    '  <span class="term-cmd">projects</span>    - List game projects',
    '  <span class="term-cmd">experience</span>  - Work experience',
    '  <span class="term-cmd">contact</span>     - Get in touch',
    '  <span class="term-cmd">clear</span>       - Clear terminal',
    '  <span class="term-cmd">ls</span>          - List directory',
  ],
  about: () => [
    '<span class="term-output">Brett Bowley — Senior Software & Game Developer</span>',
    '──────────────────────────────────────────',
    'Game Dev with 11+ years of hobby experience.',
    '14+ years of professional web/mobile dev.',
    'Currently transitioning into full-time game dev.',
    'Engines: Unity, Godot | Stack: JS, .NET (C#)',
  ],
  skills: () => [
    '<span class="term-output">[ Technical Skills ]</span>',
    '──────────────────────────────────────────',
    '<span class="term-cmd">Game Dev</span>    Unity, Godot, C#, GDScript',
    '<span class="term-cmd">Frontend</span>    JavaScript, TypeScript, React, Next.js',
    '<span class="term-cmd">Backend</span>     .NET, Node.js, REST APIs',
    '<span class="term-cmd">Mobile</span>      React Native',
    '<span class="term-cmd">Tools</span>       Git, Docker, CI/CD',
  ],
  projects: () => [
    '<span class="term-output">[ Released Projects ]</span>',
    '──────────────────────────────────────────',
    '🎮 Lorem Ipsum <span class="term-comment">[WIP]</span>',
    '🐙 Lorem Ipsum',
    '🎨 Lorem Ipsum',
    '🟦 Lorem Ipsum',
    '🍕 Lorem Ipsum',
  ],
  experience: () => [
    '<span class="term-output">[ Work Experience ]</span>',
    '──────────────────────────────────────────',
    '2016–present  Senior Software Engineer (Remote)',
    '              Web & Mobile development',
    '2015–present  Indie Game Developer (Hobby→Pro)',
    '              Unity & Godot projects',
  ],
  contact: () => [
    '<span class="term-output">[ Contact ]</span>',
    '──────────────────────────────────────────',
    'LinkedIn  linkedin.com/in/brettbowley',
    'GitHub    github.com/brettbowley',
    'Twitter   x.com/brettbowley',
  ],
  ls: () => [
    '<span class="term-cmd">about_me.txt</span>  <span class="term-cmd">projects/</span>  <span class="term-cmd">skills.json</span>  <span class="term-cmd">resume.pdf</span>',
  ],
  clear: () => {
    document.getElementById('term-body').innerHTML = '';
    return [];
  },
};

const termBody  = document.getElementById('term-body');
const termInput = document.getElementById('term-input');

function addLine(html) {
  const div = document.createElement('div');
  div.className = 'term-line';
  div.innerHTML = html;
  termBody.appendChild(div);
  termBody.scrollTop = termBody.scrollHeight;
}

termInput.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  const cmd = termInput.value.trim().toLowerCase();
  termInput.value = '';
  addLine(`<span class="term-prompt">brett@portfolio:~$</span> <span class="term-cmd">${cmd}</span>`);
  if (!cmd) return;
  const result = commands[cmd];
  if (result) {
    result().forEach(l => addLine(l));
  } else {
    addLine(`<span style="color:#f87171">Command not found: ${cmd}. Type 'help' for available commands.</span>`);
  }
  addLine('');
});

// ─── Lab strip (auto-scrolling cards) ────────────
const labItems = [
  { title: 'Global Illumination',    engine: 'Godot', img: 'https://i.ytimg.com/vi/zVScwBOSLZg/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=zVScwBOSLZg' },
  { title: 'Car Controller',         engine: 'Godot', img: 'https://i.ytimg.com/vi/2tSbSua5xsc/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=2tSbSua5xsc' },
  { title: 'FPS Game',               engine: 'Godot', img: 'https://i.ytimg.com/vi/wa8b-pEOwQ0/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=wa8b-pEOwQ0' },
  { title: 'Tiny Knight',            engine: 'Godot', img: 'https://i.ytimg.com/vi/X1mwOwS9FIY/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=X1mwOwS9FIY' },
  { title: 'Football Soccer Game',   engine: 'Unity', img: 'https://i.ytimg.com/vi/0bgYC3ry3Zs/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=0bgYC3ry3Zs' },
  { title: 'Third-Person Shooter',   engine: 'Unity', img: 'https://i.ytimg.com/vi/5SrqXDmgO4k/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=5SrqXDmgO4k' },
  { title: 'Action Platform Game',   engine: 'Unity', img: 'https://i.ytimg.com/vi/H-3wmRPnLu8/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=H-3wmRPnLu8' },
  { title: 'Open World Game',        engine: 'Unity', img: 'https://i.ytimg.com/vi/9FmgfJ92fWA/hqdefault.jpg', url: 'https://www.youtube.com/watch?v=9FmgfJ92fWA' },
];

const strip = document.getElementById('lab-strip');
if (strip) {
  const all = [...labItems, ...labItems]; // duplicate for seamless loop

  all.forEach(item => {
    const wrapperTag = item.url ? 'a' : 'div';
    const card = document.createElement(wrapperTag);
    card.className = 'lab-card';
    if (item.url) {
      card.href = item.url;
      card.target = '_blank';
      card.rel = 'noopener';
    }
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy" />
      <div class="lab-card-info">
        <div class="lab-card-engine">${item.engine}</div>
        <div class="lab-card-title">${item.title}</div>
      </div>`;
    strip.appendChild(card);
  });
}

// ─── Fade-in on scroll ────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
