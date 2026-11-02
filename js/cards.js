/* ═══════════════════════════════════════════════════
   Card renderer — fills any element with data-cards="projects"
   or data-cards="lab". Add data-show="featured" to show only
   items marked featured: true. Load after data/projectsList.js /
   data/labList.js and before the fade-in observer.
   ═══════════════════════════════════════════════════ */
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[c]);
}

function createCard(item, index) {
  const card = document.createElement('a');
  card.className = 'project-card fade-in' + (item.large ? ' featured' : '');
  card.href = item.url || '#';
  card.dataset.github = item.github ? 'yes' : 'no';
  card.style.transitionDelay = `${0.05 + index * 0.05}s`;
  if (/^https?:/.test(card.getAttribute('href'))) {
    card.target = '_blank';
    card.rel = 'noopener';
  }
  card.innerHTML = `
    <div class="card-img">
      <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" />
    </div>
    <div class="card-body">
      <div class="card-engine">${escapeHTML(item.label || '')}</div>
      <div class="card-title">${escapeHTML(item.title)}</div>
      <p class="card-desc">${escapeHTML(item.desc || '')}</p>
      <div class="card-tags">
        ${(item.tags || []).map(t => `<span class="tag">${escapeHTML(t)}</span>`).join('')}
      </div>
    </div>`;
  return card;
}

document.querySelectorAll('[data-cards]').forEach(grid => {
  const list  = grid.dataset.cards === 'lab' ? LAB_POSTS : PROJECTS;
  const items = grid.dataset.show === 'featured' ? list.filter(i => i.featured) : list;
  items.forEach((item, i) => grid.appendChild(createCard(item, i)));
});

/* ─── GitHub filter — grids with data-filter="github" get an
       All / GitHub / No GitHub toggle above them ─────────── */
document.querySelectorAll('[data-filter="github"]').forEach(grid => {
  const bar = document.createElement('div');
  bar.className = 'filter-toggle';
  bar.setAttribute('role', 'group');
  bar.setAttribute('aria-label', 'Filter by GitHub');
  const options = [['all', 'All'], ['yes', 'Has GitHub'], ['no', 'No GitHub']];
  options.forEach(([value, text], i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-btn' + (i === 0 ? ' active' : '');
    btn.dataset.value = value;
    btn.textContent = text;
    bar.appendChild(btn);
  });

  const empty = document.createElement('p');
  empty.className = 'filter-empty';
  empty.textContent = 'Nothing matches this filter yet.';
  empty.hidden = true;

  grid.before(bar);
  grid.after(empty);

  bar.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b === btn));
    let shown = 0;
    grid.querySelectorAll('.project-card').forEach(card => {
      const match = btn.dataset.value === 'all' || card.dataset.github === btn.dataset.value;
      card.hidden = !match;
      if (match) shown++;
    });
    empty.hidden = shown !== 0;
  });
});
