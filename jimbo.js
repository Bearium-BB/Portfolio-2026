const PROJECT_DATA = {
  // ── Core info ─────────────────────────────────────
  title:       'Jimbo, Remember to Hydrate',
  eyebrow:     'Winnipeg Game Jam 2026',
  engine:      'Unity',
  status:      'Prototype',         // 'Released' | 'WIP' | 'Prototype'
  platforms:   ['Windows'],
  year:        '2026',
  size:        '49 MB',
  noAI:        false,              // shows "No Generative AI" badge when true

  // ── Badges shown in hero ───────────────────────────
  //   type: 'released' | 'wip' | 'jam'
  badges: [
    { label: 'Prototype',                 type: 'prototype' },
    { label: 'Winnipeg Game Jam 2026',    type: 'jam'      },
    { label: 'Windows',                   type: 'jam'      },
  ],

  // ── Images & Media ────────────────────────────────
  //   heroBanner: wide image shown behind the hero title
  //   coverImage: portrait/square shown in sidebar
  //   media: mixed array of images and videos in main column
  //     { type: 'image', src: 'url' }
  //     { type: 'video', src: 'youtube-or-direct-url' }
  //       YouTube URLs are auto-embedded (watch or youtu.be links both work)
  //       Direct .mp4/.webm URLs are embedded as <video> elements
  heroBanner:  'https://img.itch.zone/aW1nLzI2MzQ0Mjk4LnBuZw==/original/J97fvW.png',
  coverImage:  'https://img.itch.zone/aW1nLzI1NzUyNjE3LnBuZw==/original/5bAABb.png',
  media: [
    { type: 'image', src: 'https://img.itch.zone/aW1nLzI2MzQ0Mjk4LnBuZw==/original/J97fvW.png' },
    { type: 'image', src: 'https://img.itch.zone/aW1nLzI1NzUyNjE3LnBuZw==/original/5bAABb.png' },
    { type: 'video', src: 'https://www.youtube.com/embed/4KQd_wjdBqg?si=rEXBhnAc7qPRNsEP' },
    // Example video entries (remove or replace):
    // { type: 'video', src: 'https://www.youtube.com/watch?v=XXXXXXXXXXX' },
    // { type: 'video', src: 'https://youtu.be/XXXXXXXXXXX' },
    // { type: 'video', src: 'https://example.com/clip.mp4' },
  ],

  // ── Description paragraphs (array = separate <p> tags) ──
  description: [
    "You're a goblin who just realized his legs don't work, and you're dehydrated, but you still have to make it to the sink to rehydrate. Let's hope you don't find out what happens if you don't make it to the sink.",
    "This game was made during the Winnipeg Game Jam 2026. It was created in three days by two artists and one programmer, and it has not been polished since the game jam. However, we still hope you enjoy our game.",
  ],

  // ── Team credits ──────────────────────────────────
  credits: [
    { name: 'Brett Bowley',  role: 'Programmer' },
    { name: 'Justin Little', role: 'Artist'     },
    { name: 'Tammy Hoang',   role: 'Artist'     },
  ],

  // ── Tags ──────────────────────────────────────────
  tags: ['Puzzle', 'Comedy', 'Adventure', 'Jam Game', 'Unity'],

  // ── Links ─────────────────────────────────────────
  itchUrl:    'https://bearium-ii.itch.io/jimbo-remember-to-hydrate',
  downloadUrl:'https://bearium-ii.itch.io/jimbo-remember-to-hydrate',
};
