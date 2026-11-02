/* ═══════════════════════════════════════════════════
   Laboratory cards — used by index.html and laboratory.html
   ═══════════════════════════════════════════════════
   Add an experiment by copying one { ... } block.
     featured: true  → also shown on the home page
     github:          optional repo link, enables the GitHub badge and filter
     url:             the lab post page — copy lab/designPatterns.html,
                      edit it, and point url at the copy
   ═══════════════════════════════════════════════════ */
const LAB_POSTS = [
  {
    title:    'Testing New Design Patterns',
    url:      'lab/designPatterns.html',
    github:   'https://github.com/Bearium-BB/Testing_New_Design_Patterns',
    image:    'images/lab/designPatterns.svg',
    label:    'Unity',
    desc:     'Testing MVP, MVVM and a custom Object Resolver to replace Singletons and see how scalable a Unity project can get.',
    tags:     ['Architecture', 'MVP', 'MVVM', 'Dependency Injection'],
    featured: true,
  },
  {
    title:    'Project Isle',
    url:      'lab/projectIsle.html',
    github:   'https://github.com/Bearium-BB/ProjectIsle',
    image:    'images/lab/projectIsleMap.png',
    label:    'Unity',
    desc:     'A tech demo for procedural island generation, texture atlases and chunk streaming, left over from a game I stopped making.',
    tags:     ['Procedural Generation', 'Texture Atlas', 'Chunks', 'Tech Demo'],
    featured: true,
  },
];
