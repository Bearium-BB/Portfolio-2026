/* ═══════════════════════════════════════════════════════════════
   LAB POSTS — every Laboratory post, one { ... } block each.

   The order here is the order of the cards on the site.

   To add a lab post:
     1. Copy a whole block below (from its "{" down to its "},")
        and paste it where you want the card to appear.
     2. Change the values. Keep the quotes and the comma at the
        end of each line.
     3. Make the page: copy lab/_template.html and rename the copy
        to <id>.html (same spelling as the id).
   Full guide: style-guides/how-to-add-pages.md

   What each line does
     id          page file name without .html → lab/<id>.html
     title       post title
     engine      shown on the card and above the title (Unity, Godot...)
     onHomePage  true = also shown in the Laboratory section of the home page
     image       card picture, also the big banner on the post
     cardText    one or two sentences shown on the card
     tags        small tags on the card and badges under the post title
     github      link to the code → "View the code on GitHub" buttons (optional)

   Optional extra: banner (a different picture for the post banner).
   ═══════════════════════════════════════════════════════════════ */

const LAB_POSTS = [

  {
    id:         'designPatterns',
    title:      'Testing New Design Patterns',
    engine:     'Unity',
    onHomePage: true,
    image:      'images/lab/designPatterns/diagram.svg',
    cardText:   'Testing MVP, MVVM and a custom Object Resolver to replace Singletons and see how scalable a Unity project can get.',
    tags:       ['Architecture', 'MVP', 'MVVM', 'Dependency Injection'],
    github:     'https://github.com/Bearium-BB/Testing_New_Design_Patterns',
  },

  {
    id:         'projectIsle',
    title:      'Project Isle',
    engine:     'Unity',
    onHomePage: true,
    image:      'images/lab/projectIsle/map.png',
    cardText:   'A tech demo for procedural island generation, texture atlases and chunk streaming, left over from a game I stopped making.',
    tags:       ['Procedural Generation', 'Texture Atlas', 'Chunk Streaming', 'Tech Demo'],
    github:     'https://github.com/Bearium-BB/ProjectIsle',
  },

];
