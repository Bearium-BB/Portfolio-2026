/* ═══════════════════════════════════════════════════
   Project cards — used by index.html and projects.html
   ═══════════════════════════════════════════════════
   Add a project by copying one { ... } block.
     featured: true  → also shown on the home page
     large:    true  → card spans two columns (use on one card)
     github:          optional repo link, enables the GitHub badge and filter
     url:             the project's page
   ═══════════════════════════════════════════════════ */
const PROJECTS = [
  {
    title:    'Jimbo, Remember to Hydrate',
    url:      'projects/jimbo.html',
    github:   'https://github.com/Bearium-BB/WINNIPEG-GAME-JAM-2026',
    image:    'https://img.itch.zone/aW1nLzI2MzQ0Mjk4LnBuZw==/original/J97fvW.png',
    label:    'Prototype',
    desc:     "QWOP-like rage game inspired by Bennett Foddy. You're a goblin with useless legs, dragging yourself to the sink to rehydrate. Made in three days.",
    tags:     ['Puzzle', 'Comedy', 'Adventure', 'Jam Game', 'Unity'],
    featured: true,
    large:    true,
  },
  {
    title:    'Penrose Tower',
    url:      'projects/penroseTower.html',
    github:   'https://github.com/Claudia200113/GameStudioA3',
    image:    'https://img.itch.zone/aW1nLzI1MDk1MTY5LnBuZw==/original/PU8AO3.png',
    label:    'Prototype',
    desc:     'Endless metroidvania about casting spells until death. Physics-based movement and a multi-element spell system with combinable effects.',
    tags:     ['Platformer', 'Adventure', '2D', 'Pixel Art', 'Singleplayer', 'Endless'],
    featured: true,
  },
  {
    title:    "Vicky's Vexing Vocation",
    url:      'projects/vickysVexingVocation.html',
    image:    'https://img.itch.zone/aW1nLzI2NzQ4NzM1LnBuZw==/original/I0aV2B.png',
    label:    'Released',
    desc:     'Twin-stick roguelike inspired by Hades and The Binding of Isaac. I built the Gambling Gun, enemy attacks, UI logic and VFX.',
    tags:     ['Roguelike', 'Twin-Stick Shooter', 'Action', 'Shooter', '3D', 'Dinosaurs', 'Ghosts', 'Top-Down'],
    featured: true,
  },
  {
    title:    'Bear Catacombs',
    url:      'projects/bearCatacombs.html',
    github:   'https://github.com/Bearium-BB/Portfolio_VR',
    image:    'https://img.itch.zone/aW1nLzI4MTYwMDc2LmpwZw==/original/qzLVxI.jpg',
    label:    'Prototype',
    desc:     "An arcade-style VR shoot 'em up. Clear every target in a linear catacomb and chase a high score. Built solo in two to three days.",
    tags:     ['VR', "Shoot 'em up", 'Arcade', 'Unity'],
    featured: true,
  },
  {
    title:    'Against The Curve',
    url:      'projects/againstTheCurve.html',
    image:    'https://img.itch.zone/aW1nLzI2MjAxNTgwLnBuZw==/original/y6MPVC.png',
    label:    'Released',
    desc:     'A modern take on the classic asteroid-style arcade game. Survive endless waves of asteroids and saucers that shoot back.',
    tags:     ['Arcade', 'Asteroids', 'Shooter', 'Raylib'],
    featured: false,
  },
];
