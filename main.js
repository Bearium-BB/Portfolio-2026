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
