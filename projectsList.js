/* ═══════════════════════════════════════════════════
   Project cards — used by index.html and projects.html
   ═══════════════════════════════════════════════════
   Add a project by copying one { ... } block.
     featured: true  → also shown on the home page
     large:    true  → card spans two columns (use on one card)
     url:             the project's page
   ═══════════════════════════════════════════════════ */
const PROJECTS = [
  {
    title:    'Jimbo, Remember to Hydrate',
    url:      'projectJimbo.html',
    image:    'https://img.itch.zone/aW1nLzI2MzQ0Mjk4LnBuZw==/original/J97fvW.png',
    label:    'Prototype',
    desc:     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet tellus at lectus cursus, vitae vestibulum turpis gravida.',
    tags:     ['Puzzle', 'Comedy', 'Adventure', 'Jam Game', 'Unity'],
    featured: true,
    large:    true,
  },
  {
    title:    'Penrose Tower',
    url:      'projectPenroseTower.html',
    image:    'https://img.itch.zone/aW1nLzI1MDk1MTY5LnBuZw==/original/PU8AO3.png',
    label:    'Prototype',
    desc:     'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin sapien ac lorem porta, sit amet dignissim odio.',
    tags:     ['Platformer', 'Adventure', '2D', 'Pixel Art', 'Singleplayer', 'Endless'],
    featured: true,
  },
  {
    title:    "Vicky's Vexing Vocation",
    url:      'projectVickysVexingVocation.html',
    image:    'https://img.itch.zone/aW1nLzI2NzQ4NzM1LnBuZw==/original/I0aV2B.png',
    label:    'Sandbox',
    desc:     'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus fringilla tortor vitae elit gravida.',
    tags:     ['Roguelike', 'Twin-Stick Shooter', 'Action', 'Shooter', '3D', 'Dinosaurs', 'Ghosts', 'Top-Down'],
    featured: true,
  },
];
