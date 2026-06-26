/* ═══════════════════════════════════════════════════
   Brett Bowley Portfolio — Project Page
   ═══════════════════════════════════════════════════
   To reuse for a new project, update PROJECT_DATA below.
   Everything else is driven automatically.
   ═══════════════════════════════════════════════════ */

const PROJECT_DATA = {
  // ── Core info ─────────────────────────────────────
  title:       'Penrose Tower',
  eyebrow:     'Indie Project',
  engine:      'Unity',
  status:      'Prototype',        // 'Released' | 'WIP' | 'Prototype'
  platforms:   ['Windows'],
  year:        '2026',
  size:        '46 MB',
  noAI:        false,

  // ── Badges shown in hero ───────────────────────────
  //   type: 'released' | 'wip' | 'jam'
  badges: [
    { label: 'Prototype',   type: 'wip' },
    { label: 'Windows',     type: 'jam' },
    { label: 'Platformer',  type: 'jam' },
  ],

  // ── Images & Media ────────────────────────────────
  //   heroBanner: wide image shown behind the hero title
  //   coverImage: portrait/square shown in sidebar
  //   media: mixed array of images and videos in main column
  //     { type: 'image', src: 'url' }
  //     { type: 'video', src: 'youtube-or-direct-url' }
  //       YouTube URLs are auto-embedded (watch or youtu.be links both work)
  //       Direct .mp4/.webm URLs are embedded as <video> elements
  heroBanner:  'https://img.itch.zone/aW1nLzI1MDk1MTY5LnBuZw==/original/PU8AO3.png',
  coverImage:  'https://img.itch.zone/aW1nLzI0NDU4MzcxLnBuZw==/original/TVLcyg.png',
  media: [
    { type: 'image', src: 'https://img.itch.zone/aW1nLzI1MDk1MTY5LnBuZw==/original/PU8AO3.png' },
    { type: 'image', src: 'https://img.itch.zone/aW1nLzI1MDk1MjY5LnBuZw==/original/7WPErG.png' },
    { type: 'image', src: 'https://img.itch.zone/aW1nLzI1MDk1MzMzLnBuZw==/original/wQ75lh.png' },
    // Add video entries here if available:
    // { type: 'video', src: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' },
  ],

  // ── Description paragraphs (array = separate <p> tags) ──
  description: [
    "A climb with no true end. No matter how high you ascend, the top always remains just out of reach. The game is an endless platformer,focusing on the perpetual climb about striving for the unattainable.",
  ],

  // ── Team credits ──────────────────────────────────
  credits: [
    { name: 'Brett Bowley',                    role: 'Programmer' },
    { name: 'Claudia Nicole Rodriguez Meza',   role: 'Programmer / VFX' },
    { name: 'Emily Peloquin',                  role: 'Artist' },
    { name: 'Jae Togado',                      role: 'Artist' },
  ],

  // ── Tags ──────────────────────────────────────────
  tags: ['Platformer', 'Adventure', '2D', 'Pixel Art', 'Singleplayer', 'Endless'],

  // ── Links ─────────────────────────────────────────
  itchUrl:    'https://bearium-ii.itch.io/penrose-tower',
  downloadUrl:'https://bearium-ii.itch.io/penrose-tower',
};