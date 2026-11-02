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

// ─── Copy email to clipboard ──────────────────────
const copyEmailLink = document.getElementById('copy-email');
const copyPopup     = document.getElementById('copy-popup');
let copyTimer;

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }
  // Fallback for file:// and older browsers
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

if (copyEmailLink && copyPopup) {
  copyEmailLink.addEventListener('click', e => {
    e.preventDefault();
    copyText(copyEmailLink.dataset.email)
      .then(() => {
        copyPopup.classList.add('show');
        clearTimeout(copyTimer);
        copyTimer = setTimeout(() => copyPopup.classList.remove('show'), 2500);
      })
      // If copying is blocked, fall back to opening the mail app
      .catch(() => { window.location.href = copyEmailLink.href; });
  });
}

// Click anywhere on the message to close it early
if (copyPopup) {
  copyPopup.addEventListener('click', () => copyPopup.classList.remove('show'));
}
