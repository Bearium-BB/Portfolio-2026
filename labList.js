/* ═══════════════════════════════════════════════════
   Laboratory cards — used by index.html and laboratory.html
   ═══════════════════════════════════════════════════
   Add an experiment by copying one { ... } block.
     featured: true  → also shown on the home page
     url:             the lab post page — copy labGlobalIllumination.html,
                      edit it, and point url at the copy
   ═══════════════════════════════════════════════════ */
const LAB_POSTS = [
  {
    title:    'Global Illumination',
    url:      'labGlobalIllumination.html',
    image:    'https://i.ytimg.com/vi/zVScwBOSLZg/hqdefault.jpg',
    label:    'Godot',
    desc:     'Experimenting with real-time global illumination and how far it can be pushed in Godot.',
    tags:     ['Lighting', 'Rendering'],
    featured: true,
  },
  {
    title:    'Car Controller',
    url:      'labCarController.html',
    image:    'https://i.ytimg.com/vi/2tSbSua5xsc/hqdefault.jpg',
    label:    'Godot',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Physics', 'Vehicles'],
    featured: true,
  },
  {
    title:    'FPS Game',
    url:      'labFPSGame.html',
    image:    'https://i.ytimg.com/vi/wa8b-pEOwQ0/hqdefault.jpg',
    label:    'Godot',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Shooter', '3D'],
    featured: true,
  },
  {
    title:    'Tiny Knight',
    url:      'labTinyKnight.html',
    image:    'https://i.ytimg.com/vi/X1mwOwS9FIY/hqdefault.jpg',
    label:    'Godot',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Action', 'Platformer'],
  },
  {
    title:    'Football Soccer Game',
    url:      'labFootballSoccerGame.html',
    image:    'https://i.ytimg.com/vi/0bgYC3ry3Zs/hqdefault.jpg',
    label:    'Unity',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Sports'],
  },
  {
    title:    'Third-Person Shooter',
    url:      'labThirdPersonShooter.html',
    image:    'https://i.ytimg.com/vi/5SrqXDmgO4k/hqdefault.jpg',
    label:    'Unity',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Shooter', '3D'],
  },
  {
    title:    'Action Platform Game',
    url:      'labActionPlatformGame.html',
    image:    'https://i.ytimg.com/vi/H-3wmRPnLu8/hqdefault.jpg',
    label:    'Unity',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Action', 'Platformer'],
  },
  {
    title:    'Open World Game',
    url:      'labOpenWorldGame.html',
    image:    'https://i.ytimg.com/vi/9FmgfJ92fWA/hqdefault.jpg',
    label:    'Unity',
    desc:     'Short description of the experiment goes here.',
    tags:     ['Open World', '3D'],
  },
];
