/* ═══════════════════════════════════════════════════
   Brett Bowley Portfolio — Project Page
   ═══════════════════════════════════════════════════
   To reuse for a new project, update PROJECT_DATA below.
   Everything else is driven automatically.
   ═══════════════════════════════════════════════════ */


/* ─────────────────────────────────────────────────────
   Page renderer — do not edit below unless adding
   new fields to the template.
   ───────────────────────────────────────────────────── */
(function render(d) {
  // Page <title>
  document.getElementById('page-title').textContent =
    `${d.title} | Brett Bowley`;

  // Hero
  const heroImg = document.getElementById('proj-hero-img');
  heroImg.src = d.heroBanner;
  heroImg.alt = d.title + ' banner';

  document.getElementById('proj-breadcrumb-title').textContent = d.title;
  document.getElementById('proj-eyebrow').textContent = d.eyebrow || '';
  document.getElementById('proj-title').textContent = d.title;

  // Badges
  const badgesEl = document.getElementById('proj-badges');
  (d.badges || []).forEach(b => {
    const span = document.createElement('span');
    span.className = `proj-badge ${b.type}`;
    span.textContent = b.label;
    badgesEl.appendChild(span);
  });
  if (d.noAI) {
    const span = document.createElement('span');
    span.className = 'proj-badge jam';
    span.textContent = 'No Generative AI';
    badgesEl.appendChild(span);
  }

  // Cover image
  const cover = document.getElementById('proj-cover');
  cover.src = d.coverImage;
  cover.alt = d.title + ' cover';

  // Download / itch buttons
  const dlBtn   = document.getElementById('proj-download-btn');
  const itchBtn = document.getElementById('proj-itch-btn');
  dlBtn.href   = d.downloadUrl || d.itchUrl || '#';
  itchBtn.href = d.itchUrl    || '#';
  if (!d.downloadUrl && !d.itchUrl) {
    dlBtn.style.display   = 'none';
    itchBtn.style.display = 'none';
  }

  // Description
  const descEl = document.getElementById('proj-description');
  (d.description || []).forEach(p => {
    const el = document.createElement('p');
    el.className = 'proj-desc';
    el.textContent = p;
    descEl.appendChild(el);
  });

  // Media (images + videos as thumbnails)
  const mediaEl = document.getElementById('proj-screenshots');
  if (d.media && d.media.length) {
    d.media.forEach(item => {
      if (item.type === 'video') {
        const youtubeId = extractYouTubeId(item.src);
        const thumb = document.createElement('div');
        thumb.className = 'proj-media-thumb';

        // Thumbnail image — YouTube provides one automatically
        const thumbImg = document.createElement('img');
        thumbImg.src = youtubeId
          ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
          : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';  // blank fallback for direct files
        thumbImg.alt = d.title + ' video';
        thumbImg.loading = 'lazy';
        thumb.appendChild(thumbImg);

        // Play button overlay
        thumb.innerHTML += `
          <div class="proj-play-btn">
            <div class="proj-play-circle">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </div>
          </div>`;

        thumb.addEventListener('click', () =>
          youtubeId ? openVideoLightbox(youtubeId) : openVideoLightbox(null, item.src)
        );
        mediaEl.appendChild(thumb);
      } else {
        // Image thumbnail
        const thumb = document.createElement('div');
        thumb.className = 'proj-media-thumb';
        const img = document.createElement('img');
        img.src = item.src;
        img.alt = d.title + ' screenshot';
        img.loading = 'lazy';
        thumb.appendChild(img);
        thumb.addEventListener('click', () => openImageLightbox(item.src, d.title));
        mediaEl.appendChild(thumb);
      }
    });
  } else {
    document.getElementById('proj-media-section').style.display = 'none';
  }

  // Credits
  const credEl = document.getElementById('proj-credits');
  if (d.credits && d.credits.length) {
    d.credits.forEach(c => {
      const card = document.createElement('div');
      card.className = 'credit-card';
      card.innerHTML = `
        <div class="credit-role">${c.role}</div>
        <div class="credit-name">${c.name}</div>`;
      credEl.appendChild(card);
    });
  } else {
    document.getElementById('proj-credits-section').style.display = 'none';
  }

  // Info table
  const tableEl = document.getElementById('proj-info-table');
  const rows = [
    { key: 'Status',    val: d.status   || '—' },
    { key: 'Engine',    val: d.engine   || '—' },
    { key: 'Platform',  val: (d.platforms || []).join(', ') || '—' },
    { key: 'Year',      val: d.year     || '—' },
    { key: 'File size', val: d.size     || '—' },
  ].filter(r => r.val && r.val !== '—');

  rows.forEach(r => {
    const row = document.createElement('div');
    row.className = 'proj-info-row';
    row.innerHTML = `
      <span class="proj-info-key">${r.key}</span>
      <span class="proj-info-val">${r.val}</span>`;
    tableEl.appendChild(row);
  });

  // Tags
  const tagsEl = document.getElementById('proj-tags');
  if (d.tags && d.tags.length) {
    d.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      tagsEl.appendChild(span);
    });
  } else {
    document.getElementById('proj-tags-wrap').style.display = 'none';
  }

})(PROJECT_DATA);

/* ─── YouTube ID extractor ───────────────────────── */
function extractYouTubeId(url) {
  const patterns = [
    /youtube\.com\/watch\?.*v=([A-Za-z0-9_-]{11})/,
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}

/* ─── Lightbox ───────────────────────────────────── */
const lightbox      = document.getElementById('lightbox');
const lightboxInner = document.getElementById('lightbox-inner');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const lightboxIframe= document.getElementById('lightbox-iframe');
const lightboxClose = document.getElementById('lightbox-close');

function closeLightbox() {
  lightbox.classList.remove('open');
  // Stop video playback by clearing src
  lightboxIframe.src = '';
  lightboxImg.style.display   = 'none';
  lightboxVideo.style.display = 'none';
  lightboxImg.src = '';
}

function openImageLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || '';
  lightboxImg.style.display   = 'block';
  lightboxVideo.style.display = 'none';
  lightbox.classList.add('open');
}

function openVideoLightbox(youtubeId, directSrc) {
  if (youtubeId) {
    // autoplay=1 so it starts playing immediately on open
    lightboxIframe.src = "https://www.youtube.com/embed/" + youtubeId + "?autoplay=1";
  } else if (directSrc) {
    lightboxIframe.src = directSrc;
  }
  lightboxImg.style.display   = 'none';
  lightboxVideo.style.display = 'block';
  lightbox.classList.add('open');
}

// Clicking the backdrop (but not inner content) closes
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

// Close button
lightboxClose.addEventListener('click', closeLightbox);

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

// Prevent inner clicks from bubbling to backdrop
lightboxInner.addEventListener('click', e => e.stopPropagation());
