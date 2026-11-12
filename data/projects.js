/* ═══════════════════════════════════════════════════════════════
   PROJECTS — every project on the site, one { ... } block each.

   The order here is the order of the cards on the site.

   To add a project:
     1. Copy a whole block below (from its "{" down to its "},")
        and paste it where you want the card to appear.
     2. Change the values. Keep the quotes and the comma at the
        end of each line.
     3. Make the page: copy projects/_template.html and rename the
        copy to <id>.html (same spelling as the id).
   Full guide: style-guides/how-to-add-pages.md

   What each line does
     id          page file name without .html → projects/<id>.html
     title       project name
     status      'Released', 'Prototype' or 'WIP' (card label + colored badge)
     onHomePage  true = also shown in Featured Projects on the home page
     bigCard     true = card is twice as wide (use on one project only)
     image       card picture, also the big banner on the project page
     cardText    one or two sentences shown on the card
     tags        small tags on the card and in the page sidebar

     eyebrow     small line above the title on the project page
     badges      extra badges next to the status badge
     cover       picture at the top of the sidebar (optional)
     about       "About the Game" paragraphs, one "..." per paragraph
     media       pictures and YouTube links for the Media grid
     team        one { name, role } per person
     engine, platforms, year, size   the info table in the sidebar
     itch        itch.io page → "Download Free" + "View on itch.io" buttons
     github      code on GitHub → "View on GitHub" button (optional)

   Optional extras: banner (a different picture for the page banner)
   and download (if the download link isn't the itch.io page).
   Leave a line out completely to hide that part of the page.
   ═══════════════════════════════════════════════════════════════ */

const PROJECTS = [

  {
    id:         'penroseTower',
    title:      'Penrose Tower',
    status:     'Prototype',
    onHomePage: true,
    bigCard:    true,
    image:      'https://img.itch.zone/aW1nLzI1MDk1MTY5LnBuZw==/original/PU8AO3.png',
    cardText:   'Endless metroidvania about casting spells until death. Physics-based movement and a multi-element spell system with combinable effects.',
    tags:       ['Platformer', 'Adventure', '2D', 'Pixel Art', 'Singleplayer', 'Endless'],

    eyebrow:    'Indie Project',
    badges:     ['Windows', 'Platformer'],
    cover:      'https://img.itch.zone/aW1nLzI0NDU4MzcxLnBuZw==/original/TVLcyg.png',
    about: [
      "A climb with no true end. No matter how high you ascend, the top always remains just out of reach. The game is an endless platformer, focusing on the perpetual climb about striving for the unattainable.",
    ],
    media: [
      'https://www.youtube.com/watch?v=HbJN6QdtxdE',
      'https://img.itch.zone/aW1nLzI1MDk1MTY5LnBuZw==/original/PU8AO3.png',
      'https://img.itch.zone/aW1nLzI1MDk1MjY5LnBuZw==/original/7WPErG.png',
      'https://img.itch.zone/aW1nLzI1MDk1MzMzLnBuZw==/original/wQ75lh.png',
    ],
    team: [
      { name: 'Brett Bowley',                  role: 'Programmer' },
      { name: 'Claudia Nicole Rodriguez Meza', role: 'Programmer / VFX' },
      { name: 'Emily Peloquin',                role: 'Artist' },
      { name: 'Jae Togado',                    role: 'Artist' },
    ],
    engine:     'Unity',
    platforms:  'Windows',
    year:       '2026',
    size:       '46 MB',
    itch:       'https://bearium-ii.itch.io/penrose-tower',
    github:     'https://github.com/Claudia200113/GameStudioA3',
  },

  {
    id:         'bearCatacombs',
    title:      'Bear Catacombs',
    status:     'Prototype',
    onHomePage: true,
    image:      'https://img.itch.zone/aW1nLzI4MTYwMDc2LmpwZw==/original/qzLVxI.jpg',
    cardText:   "An arcade-style VR shoot 'em up. Clear every target in a linear catacomb and chase a high score. Built solo in two to three days.",
    tags:       ['VR', "Shoot 'em up", 'Arcade', 'Rail Shooter', 'Unity', 'Singleplayer'],

    eyebrow:    'VR Arcade Shooter',
    badges:     ['VR', 'Windows', 'Android'],
    about: [
      "You enter a catacomb with a quota: eliminate every target. Will you succeed, or will you fail?",
      "Bear Catacombs is an arcade-style VR shoot 'em up with a linear, rail-inspired structure. Shoot enemies as they appear and earn points for each kill. At the end of a run your total score is shown, so you can replay to beat your best.",
      "This project was created as a two to three day personal challenge, aiming for a fully looping VR experience with polish and cohesion. Some assets were made by me, and others came from the Fab Store and the Unity Asset Store.",
    ],
    media: [
      'https://www.youtube.com/watch?v=QeeDDyRcAWI',
      'https://img.itch.zone/aW1nLzI4MTYwNDMwLmpwZw==/original/ZZfiz3.jpg',
    ],
    team: [
      { name: 'Brett Bowley', role: 'Solo Developer' },
    ],
    engine:     'Unity 6',
    platforms:  'Windows, Android',
    year:       '2026',
    size:       '461 MB',
    itch:       'https://bearium-ii.itch.io/bear-catacombs',
    github:     'https://github.com/Bearium-BB/Portfolio_VR',
  },

  {
    id:         'vickysVexingVocation',
    title:      "Vicky's Vexing Vocation",
    status:     'Released',
    onHomePage: true,
    image:      'https://img.itch.zone/aW1nLzI2NzQ4NzM1LnBuZw==/original/I0aV2B.png',
    cardText:   'Twin-stick roguelike inspired by Hades and The Binding of Isaac. I built the Gambling Gun, enemy attacks, UI logic and VFX.',
    tags:       ['Roguelike', 'Twin-Stick Shooter', 'Action', 'Shooter', '3D', 'Dinosaurs', 'Ghosts', 'Top-Down'],

    eyebrow:    'Twin-Stick Roguelike',
    badges:     ['Windows', 'Twin-Stick Shooter', 'Gamepad Required'],
    cover:      'https://img.itch.zone/aW1nLzI2NzQ4NzMxLnBuZw==/original/dqRz2p.png',
    about: [
      "Vicky's Vexing Vocation is a twin-stick-shooter roguelike inspired by Hades and The Binding of Isaac.",
      "You play as Vicky, a velociraptor down on her luck. A mysterious letter arrives offering an ominous job — with no other options, you take it. Your task: clean up an old warehouse infested by ghosts, ghouls, and other indescribable horrors. Defeat a horde of enemies, collect your reward, and push deeper. How far can you go?",
      "Features 3 unique guns each with their own abilities, a cartoon-spooky aesthetic, and randomized challenges for different runs. Note: currently requires a gamepad to play.",
    ],
    media: [
      'https://www.youtube.com/watch?v=AI8Zo09Fr0U',
      'https://img.itch.zone/aW1hZ2UvNDQ4NTMwMi8yNjg3NTcyMi5wbmc=/original/1FCSuR.png',
      'https://img.itch.zone/aW1hZ2UvNDQ4NTMwMi8yNjg3NTcyMC5wbmc=/original/AaY7S2.png',
      'https://img.itch.zone/aW1hZ2UvNDQ4NTMwMi8yNjg3NTcyMS5wbmc=/original/ZLmnxX.png',
      'https://img.itch.zone/aW1hZ2UvNDQ4NTMwMi8yNjg3NTcxOC5wbmc=/original/5uVBnn.png',
      'https://img.itch.zone/aW1hZ2UvNDQ4NTMwMi8yNjg3NTcxOS5wbmc=/original/2eZuGo.png',
      'https://img.itch.zone/aW1hZ2UvNDQ4NTMwMi8yNjg3NTcyMy5wbmc=/original/8qyZ5j.png',
    ],
    team: [
      { name: 'Brett Bowley',      role: 'Programmer & VFX Padawan' },
      { name: 'Ian Roller',        role: 'Level Designer & Programmer' },
      { name: 'Hilandrei',         role: 'Programmer' },
      { name: 'Aulden Szczepanik', role: 'Artist' },
      { name: 'Kaylee Elson',      role: 'Character Designer & Artist' },
      { name: 'Claudia',           role: 'VFX Jedi Master' },
    ],
    engine:     'Unreal Engine',
    platforms:  'Windows',
    year:       '2026',
    size:       '466 MB',
    itch:       'https://iridium4.itch.io/vickys-vexing-vocation',
  },

  {
    id:         'jimbo',
    title:      'Jimbo, Remember to Hydrate',
    status:     'Prototype',
    onHomePage: true,
    image:      'https://img.itch.zone/aW1nLzI2MzQ0Mjk4LnBuZw==/original/J97fvW.png',
    cardText:   "QWOP-like rage game inspired by Bennett Foddy. You're a goblin with useless legs, dragging yourself to the sink to rehydrate. Made in three days.",
    tags:       ['Puzzle', 'Comedy', 'Adventure', 'Jam Game', 'Unity'],

    eyebrow:    'Winnipeg Game Jam 2026',
    badges:     ['Winnipeg Game Jam 2026', 'Windows'],
    cover:      'https://img.itch.zone/aW1nLzI1NzUyNjE3LnBuZw==/original/5bAABb.png',
    about: [
      "You're a goblin who just realized his legs don't work, and you're dehydrated, but you still have to make it to the sink to rehydrate. Let's hope you don't find out what happens if you don't make it to the sink.",
      "This game was made during the Winnipeg Game Jam 2026. It was created in three days by two artists and one programmer, and it has not been polished since the game jam. However, we still hope you enjoy our game.",
    ],
    media: [
      'https://www.youtube.com/watch?v=4KQd_wjdBqg',
      'https://img.itch.zone/aW1nLzI2MzQ0Mjk4LnBuZw==/original/J97fvW.png',
      'https://img.itch.zone/aW1nLzI1NzUyNjE3LnBuZw==/original/5bAABb.png',
    ],
    team: [
      { name: 'Brett Bowley',  role: 'Programmer' },
      { name: 'Justin Little', role: 'Artist' },
      { name: 'Tammy Hoang',   role: 'Artist' },
    ],
    engine:     'Unity',
    platforms:  'Windows',
    year:       '2026',
    size:       '49 MB',
    itch:       'https://bearium-ii.itch.io/jimbo-remember-to-hydrate',
    github:     'https://github.com/Bearium-BB/WINNIPEG-GAME-JAM-2026',
  },

  {
    id:         'againstTheCurve',
    title:      'Against The Curve',
    status:     'Released',
    onHomePage: false,
    image:      'https://img.itch.zone/aW1nLzI2MjAxNTgwLnBuZw==/original/y6MPVC.png',
    cardText:   'A modern take on the classic asteroid-style arcade game. Survive endless waves of asteroids and saucers that shoot back.',
    tags:       ['Arcade', 'Asteroids', 'Shooter', 'C++', 'Raylib', 'Singleplayer', 'Endless'],

    eyebrow:    'Arcade Asteroid Shooter',
    badges:     ['Windows', 'Arcade'],
    about: [
      "A modern take on the classic asteroid-style arcade game. Survive waves of incoming asteroids and hostile saucers while the difficulty keeps rising.",
      "The saucers fire back, making every encounter a test of reflexes and precision, and the challenge scales indefinitely. Outlast the chaos and defeat the curves before they take over the galaxy.",
    ],
    media: [
      'https://img.itch.zone/aW1hZ2UvNDM4ODMxNC8yNjIwMTg0Mi5naWY=/original/dNBCFY.gif',
      'https://img.itch.zone/aW1hZ2UvNDM4ODMxNC8yNjIwMTY2OS5wbmc=/original/tJfT%2Br.png',
      'https://img.itch.zone/aW1hZ2UvNDM4ODMxNC8yNjIwMTY3MS5wbmc=/original/VpVyZ8.png',
      'https://img.itch.zone/aW1hZ2UvNDM4ODMxNC8yNjIwMTY3MC5wbmc=/original/laOUy2.png',
    ],
    team: [
      { name: 'Brett Bowley', role: 'Solo Developer' },
    ],
    engine:     'C++ / Raylib',
    platforms:  'Windows',
    year:       '2026',
    size:       '5.5 MB',
    itch:       'https://bearium-ii.itch.io/against-the-curve',
    github:     'https://github.com/Bearium-BB/AsteroidsGame',
  },

  {
    id:         'robbeary',
    title:      'Robbeary',
    status:     'Prototype',
    onHomePage: false,
    image:      'https://img.itch.zone/aW1nLzMyMDk1ODcwLnBuZw==/original/TqNwls.png',
    cardText:   'A stealth heist in a robot-guarded museum. Sneak past patrols and cameras, steal the bear statue, and escape before the world ends.',
    tags:       ['Stealth', 'Action', 'Heist', 'Singleplayer'],

    eyebrow:    'Stealth Heist',
    badges:     ['Windows', 'Stealth'],
    about: [
      "The world is ending. The bear is waiting. The robots are... mostly paying attention.",
      "A heavily guarded museum holds a plain-looking bear statue, and nobody will say why it needs so much security. Robot guards patrol day and night and cameras cover every corner. Sneak past the patrols, dodge the cameras, grab the bear and escape before something decides it's tired of waiting.",
    ],
    team: [
      { name: 'Anne',         role: 'Team Member' },
      { name: 'Brett Bowley', role: 'Team Member' },
      { name: 'Claudia',      role: 'Team Member' },
      { name: 'Jangho',       role: 'Team Member' },
      { name: 'Jae',          role: 'Team Member' },
    ],
    platforms:  'Windows',
    year:       '2026',
    size:       '495 MB',
    itch:       'https://bearium-ii.itch.io/robbeary',
  },

];
