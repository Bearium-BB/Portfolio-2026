/* ═══════════════════════════════════════════════════
   Card renderer — fills any element with data-cards="projects"
   or data-cards="lab". Add data-show="featured" to show only
   items marked featured: true. Load after projectsList.js /
   labList.js and before the fade-in observer.
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
