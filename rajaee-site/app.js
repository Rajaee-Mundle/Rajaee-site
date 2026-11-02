(function () {
  "use strict";

  /* ================= CONTENT (edit here) ================= */
  var EMAIL = "mundle.rajaee@gmail.com";
  var RESUME_PDF = "Rajaee_Mundle_Resume.pdf";

  var PROJECTS = [
    {
      id: "p-fixtures", title: "Manufacturing Fixtures at SAF-HOLLAND", cat: "Manufacturing", when: "Jan to Aug 2024", where: "Woodstock, ON", status: "Internship",
      blurb: "More than a dozen custom fixtures taken from concept to production on a trailer-component plant floor.",
      did: [
        "Designed and executed 12+ custom manufacturing fixtures from concept to production, including a spacer weld fixture that used a fixed-point datum to align axles by part number.",
        "Developed and modelled 3 landing gear weld fixtures and a specialized trailer foot fixture to streamline plant assembly.",
        "Worked with a team of 6 millwrights on hands-on fabrication, installation and real-time troubleshooting of the newly designed fixtures.",
        "Ran cycle-time optimization studies on manual loading stations and introduced design updates to reduce structural rework on defective axles."
      ],
      spec: [["Fixtures delivered", "12+"], ["Landing gear weld fixtures", "3"], ["Millwrights on the build", "6"], ["Role", "Manufacturing Engineer Intern"]],
      tools: ["SolidWorks", "AutoCAD", "GD&T", "DFM", "Fixture design"]
    },
    {
      id: "p-weld-cell", title: "Robotic Weld Cell: Table and Layout", cat: "Manufacturing", when: "2024", where: "SAF-HOLLAND, Woodstock, ON", status: "Internship",
      blurb: "A modular weld table with interchangeable fixtures, plus a floor layout for a 16 ft by 16 ft cell.",
      did: [
        "Engineered a multipurpose, modular weld table for a Panasonic robotic weld cell, with 3 interchangeable fixtures that handle several plant components and their geometric variations.",
        "Laid out a 16 ft by 16 ft weld cell in AutoCAD, placing the new welding gear, protective curtains and a separation barrier for the sandblaster to use the floor space efficiently."
      ],
      spec: [["Cell footprint", "16 ft x 16 ft"], ["Interchangeable fixtures", "3"], ["Robot", "Panasonic"], ["Layout tool", "AutoCAD"]],
      tools: ["SolidWorks", "AutoCAD", "Robotic welding", "Modular tooling"]
    },
    {
      id: "p-presses", title: "Hydraulic Press Overhaul", cat: "Manufacturing", when: "2024", where: "SAF-HOLLAND, Woodstock, ON", status: "Internship",
      blurb: "Legacy hydraulic presses rebuilt with modern safety features and heavier structure.",
      did: [
        "Led the physical overhaul of legacy hydraulic presses.",
        "Integrated modern safety features and structural enhancements so the presses could run as high-capacity, heavy-duty machines."
      ],
      spec: [["Scope", "Safety and structure"], ["Equipment", "Legacy hydraulic presses"], ["Setting", "Production plant"]],
      tools: ["Mechanical design", "Safety systems", "Structural reinforcement"]
    },
    {
      id: "p-welding-fixture", title: "Landing Gear Foot Welding Fixture", cat: "Design", when: "Design and manufacturing project", where: "University of Guelph", status: "Academic project",
      blurb: "A reverse-engineered production fixture with repeatable locating and clamping.",
      did: [
        "Reverse-engineered a heavy-duty production welding fixture for trailer landing gear feet.",
        "Designed locating features and repeatable clamping mechanisms in SolidWorks to hold tight machining tolerances, with the aim of removing manual setup variation and alignment deviation."
      ],
      spec: [["Tolerance target", "±0.075 in"], ["Part", "Landing gear foot"], ["Modelled in", "SolidWorks"]],
      tools: ["SolidWorks", "Tooling & fixtures", "Automated weld cells", "GD&T"]
    },
    {
      id: "p-compactor", title: "Scale-Model Compactor Bin", cat: "Mechatronics", when: "Lab project", where: "University of Guelph", status: "Academic project",
      blurb: "A touchless, sensor-activated waste compactor, from CAD and FEA through wiring to a load test.",
      did: [
        "Engineered an automated, sensor-activated household waste compaction prototype around an Arduino Uno R3, an HC-SR04 ultrasonic sensor and two Miuzei MG90S servo motors, for fully touchless operation.",
        "Modelled a 3-part enclosure (base, head housing, inner can) in SolidWorks and managed the dynamic clearances so the compression plate does not bind.",
        "Ran a static structural FEA study with a 900 N distributed load to find peak von Mises stress and check the PLA structure.",
        "Built a 12 V DC power system with an 18 AWG safety fuse, a BTS7960 high-current H-bridge motor driver and a 12 V to 5 V buck converter for signal regulation.",
        "3D printed every custom structural part and tested the prototype under load, where it crushed aluminum cans."
      ],
      spec: [["FEA load case", "900 N distributed"], ["Peak local stress", "304.2 MPa (von Mises)"], ["Supply", "12 V DC, 18 AWG fuse"], ["Motor driver", "BTS7960 H-bridge"], ["Controller", "Arduino Uno R3"], ["Material", "PLA (3D printed)"]],
      tools: ["SolidWorks", "FEA", "Arduino IDE", "3D printing", "Electronics"]
    },
    {
      id: "p-gryphon", title: "Gryphon Racing Aerodynamics", cat: "Racing", when: "Sept 2021 to Jun 2026", where: "Guelph Gryphon Formula SAE", status: "Team role",
      blurb: "Nearly five years on the Formula SAE team, leading aerodynamics and building carbon fibre parts by hand.",
      did: [
        "Co-led the aerodynamics group of 40+ members, coordinating off-site development meetings and timelines to deliver 3 aerodynamic kit designs.",
        "Led hands-on composite manufacturing: the tooling, layup and structural assembly of carbon fibre nosecones, sidepods and wings.",
        "Owned the geometry of the vehicle sidepods and radiator shrouds, integrating them with powertrain cooling requirements and passing all formal technical inspections.",
        "Supported vehicle manufacturing and assembly, including structural mounts, and learned vehicle integration and design workflow from senior team members."
      ],
      spec: [["Team size led", "40+"], ["Aero kit designs", "3"], ["Time on team", "Sept 2021 to Jun 2026"], ["Parts", "Nosecone, sidepods, wings"]],
      tools: ["Composites", "Carbon fibre layup", "Mould preparation", "Vehicle integration"]
    },
    {
      id: "p-turbofan", title: "Turbofan Engine Model", cat: "Simulation", when: "Started Oct 2026", where: "Personal project", status: "In progress",
      blurb: "A model-and-simulation-only turbofan, built one component at a time, starting from a commercial engine.",
      did: [
        "Building a fully model-based engine in SolidWorks, one component at a time, with Ansys CFD for the flow.",
        "The first engine follows the layout of a CFM56-7B commercial turbofan, with fan blade design as the first piece of blade work.",
        "Planned second engine: a military low-bypass fighter engine, with the fan designed from the ground up.",
        "The CAD also doubles as a 3D-printable scale model, so parts have proper fastening and mating features."
      ],
      spec: [["Engine 1", "Commercial turbofan"], ["Engine 2", "Low-bypass fighter engine"], ["CAD", "SolidWorks"], ["Flow analysis", "Ansys CFD"], ["Status", "In progress"]],
      tools: ["SolidWorks", "Ansys", "CFD", "Cycle analysis", "3D printing"]
    }
  ];
  var CATS = ["All", "Manufacturing", "Design", "Mechatronics", "Racing", "Simulation"];

  /* What is happening right now. start = YYYY-MM-DD. Add or remove entries freely. */
  var NOW = [
    {
      title: "Turbofan Engine Model", start: "2026-10-08", link: "p-turbofan", tag: "In progress",
      text: [
        "A full engine, built only in software. I am modelling a commercial turbofan in SolidWorks one component at a time and running the flow through each part in Ansys.",
        "Fan blade design comes first. After the commercial engine, I want to design a low-bypass fighter engine fan from the ground up."
      ]
    },
    {
      title: "This website", start: "2026-11-02", link: "", tag: "Just launched",
      text: [
        "A home for my projects, my resume and the things I am learning. It is built with a vibe coding workflow, and I am using it to learn how a real site fits together."
      ]
    }
  ];

  /* ================= helpers ================= */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pIndex(id) { for (var i = 0; i < PROJECTS.length; i++) if (PROJECTS[i].id === id) return i; return -1; }
  function gIndex(id) { for (var i = 0; i < GAMES.length; i++) if (GAMES[i].id === id) return i; return -1; }
  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  function parts(iso) { var a = iso.split("-"); return { y: +a[0], m: +a[1] - 1, d: +a[2] }; }
  function daysSince(iso) {
    var p = parts(iso), n = new Date();
    var a = Date.UTC(p.y, p.m, p.d), b = Date.UTC(n.getFullYear(), n.getMonth(), n.getDate());
    return Math.max(0, Math.round((b - a) / 86400000));
  }
  function plural(n) { return n === 1 ? "1 day" : n + " days"; }

  var viewEl = document.getElementById("view");
  var filter = "All";
  var cleanup = null;

  /* ================= GAMES ================= */
  /* Each game: id (starts with g-), title, started, status, blurb, learned[], mount(box) -> cleanup fn. */
  function starfall(box) {
    var W = 720, H = 420;
    var c = document.createElement("canvas"); c.width = W; c.height = H; c.className = "gcanvas";
    c.setAttribute("aria-label", "Starfall game"); box.appendChild(c);
    var g = c.getContext("2d");
    var px = W / 2, target = W / 2, score = 0, lives = 5, orbs = [], state = "ready", best = 0, raf = 0, last = 0, spawn = 0, keys = {};
    try { best = +localStorage.getItem("starfall-best") || 0; } catch (e) {}
    function reset() { score = 0; lives = 5; orbs = []; spawn = 0; state = "play"; }
    function aim(e) { var r = c.getBoundingClientRect(); target = (e.clientX - r.left) / r.width * W; }
    c.addEventListener("pointermove", aim);
    c.addEventListener("pointerdown", function (e) { aim(e); if (state !== "play") reset(); });
    function kd(e) {
      keys[e.key] = true;
      if (e.key === " " || e.key === "Enter") { if (state !== "play") reset(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === " ") e.preventDefault();
    }
    function ku(e) { keys[e.key] = false; }
    window.addEventListener("keydown", kd); window.addEventListener("keyup", ku);
    function text(s, x, y, size, col) { g.fillStyle = col || "#e6ecff"; g.font = size + "px 'JetBrains Mono', monospace"; g.textAlign = "center"; g.fillText(s, x, y); }
    function step(t) {
      var dt = Math.min(0.05, (t - last) / 1000 || 0.016); last = t;
      if (state === "play") {
        if (keys.ArrowLeft) target -= 520 * dt;
        if (keys.ArrowRight) target += 520 * dt;
        target = Math.max(50, Math.min(W - 50, target));
        spawn -= dt;
        if (spawn <= 0) { orbs.push({ x: 30 + Math.random() * (W - 60), y: -10, v: 90 + Math.min(score, 40) * 5 + Math.random() * 60, r: 7 + Math.random() * 4 }); spawn = Math.max(0.28, 0.9 - score * 0.015); }
        for (var i = orbs.length - 1; i >= 0; i--) {
          var o = orbs[i]; o.y += o.v * dt;
          if (o.y > H - 34 && o.y < H - 12 && Math.abs(o.x - px) < 56) { score++; orbs.splice(i, 1); }
          else if (o.y > H + 12) { lives--; orbs.splice(i, 1); if (lives <= 0) { state = "over"; if (score > best) { best = score; try { localStorage.setItem("starfall-best", String(best)); } catch (e) {} } } }
        }
      }
      px += (target - px) * Math.min(1, dt * 14);
      g.clearRect(0, 0, W, H);
      g.fillStyle = "rgba(8,14,40,.55)"; g.fillRect(0, 0, W, H);
      orbs.forEach(function (o) {
        var gr = g.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 3.2);
        gr.addColorStop(0, "rgba(230,236,255,1)"); gr.addColorStop(0.3, "rgba(143,166,240,.7)"); gr.addColorStop(1, "rgba(143,166,240,0)");
        g.fillStyle = gr; g.beginPath(); g.arc(o.x, o.y, o.r * 3.2, 0, 6.2832); g.fill();
      });
      g.strokeStyle = "#8fa6f0"; g.lineWidth = 3; g.lineCap = "round";
      g.beginPath(); g.moveTo(px - 46, H - 22); g.quadraticCurveTo(px, H - 44, px + 46, H - 22); g.stroke();
      g.fillStyle = "rgba(143,166,240,.9)"; g.textAlign = "left"; g.font = "13px 'JetBrains Mono', monospace";
      g.fillText("CAUGHT " + score + "   BEST " + best, 14, 24);
      g.textAlign = "right"; g.fillText("LIVES " + new Array(lives + 1).join("• "), W - 14, 24);
      if (state === "ready") { text("Starfall", W / 2, H / 2 - 18, 34); text("Catch the falling stars. Move the pointer, or use the arrow keys.", W / 2, H / 2 + 16, 14, "#cfd8f6"); text("Tap or press space to start", W / 2, H / 2 + 44, 13, "#8f9bc7"); }
      if (state === "over") { text("The sky is quiet", W / 2, H / 2 - 12, 30); text("You caught " + score + ". Tap or press space to try again.", W / 2, H / 2 + 24, 14, "#cfd8f6"); }
      raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return function () { cancelAnimationFrame(raf); window.removeEventListener("keydown", kd); window.removeEventListener("keyup", ku); };
  }

  var GAMES = [
    {
      id: "g-starfall", title: "Starfall", started: "2026-11-02", status: "Starter game",
      blurb: "A quiet catch-the-stars game on a canvas. It is the template the next games will grow from.",
      learned: [
        "The game loop: redraw the screen about 60 times a second with requestAnimationFrame, and move things by elapsed time so it plays the same on any screen.",
        "State: a game is always in one state (ready, playing, over), and every frame behaves differently depending on which.",
        "Collision: catching a star is a distance check between two shapes.",
        "Difficulty: stars fall faster and spawn more often as the score climbs.",
        "Input: the same game answers to a mouse, a finger or the arrow keys."
      ],
      mount: starfall
    }
  ];

  /* ================= views ================= */
  function projectCard(p) {
    return '<a class="card" href="#' + p.id + '">' +
      '<div class="meta"><span>' + esc(p.cat) + '</span>' + (p.status === "In progress" ? '<span class="badge">In progress</span>' : '<span>' + esc(p.when) + '</span>') + '</div>' +
      '<h3>' + esc(p.title) + '</h3><p>' + esc(p.blurb) + '</p><span class="more">Read the details &rarr;</span></a>';
  }

  function home() {
    var n = NOW[0], d = daysSince(n.start);
    var featured = ["p-fixtures", "p-compactor", "p-gryphon"].map(function (id) { return projectCard(PROJECTS[pIndex(id)]); }).join("");
    return '<section class="view"><div class="hero">' +
      '<p class="eyebrow">Mechanical engineer &middot; Class of 2026</p>' +
      '<h1 class="name">Rajaee <em>Mundle</em></h1>' +
      '<p class="lede">Hi, I am Rajaee. I design fixtures, tooling and test hardware, and I like the moment a drawing meets the shop floor. I graduated from the University of Guelph in June 2026 and I am looking for my first full-time engineering role.</p>' +
      '<ul class="facts"><li>B.Eng. Mechanical, Guelph</li><li>SAF-HOLLAND, 8 months</li><li>Formula SAE, 4+ years</li><li>SolidWorks CSWA</li></ul>' +
      '<div class="cta"><a class="btn primary" href="#projects">See the projects</a><a class="btn" href="#resume">Read the resume</a><a class="btn" href="#contact">Get in touch</a></div></div>' +
      '<div class="about">' +
        '<div><h3>Design</h3><p>SolidWorks, AutoCAD and Fusion 360, with GD&amp;T and design for manufacturing. I draw things so a machinist can build them the first time.</p></div>' +
        '<div><h3>Build</h3><p>Weld fixtures, robotic weld cells, carbon fibre layups, and a mill, lathe and drill press. I would rather be on the floor with the people building the part.</p></div>' +
        '<div><h3>Analyze</h3><p>FEA to check a design before it is made, CFD for airflow, and cycle-time studies to find where a process loses time.</p></div>' +
      '</div>' +
      '<div class="section-head"><h2>Selected work</h2><a href="#projects" class="mono muted">All projects &rarr;</a></div>' +
      '<div class="grid">' + featured + '</div>' +
      '<div class="section-head"><h2>Right now</h2><a href="#now" class="mono muted">See what I am working on &rarr;</a></div>' +
      '<a class="card" href="#now"><div class="meta"><span>' + esc(n.tag) + '</span><span>Day ' + d + '</span></div><h3>' + esc(n.title) + '</h3><p>' + esc(n.text[0]) + '</p></a>' +
      '</section>';
  }

  function projects() {
    var chips = CATS.map(function (c) { return '<button class="chip" type="button" data-cat="' + c + '" aria-pressed="' + (c === filter) + '">' + c + '</button>'; }).join("");
    var list = PROJECTS.filter(function (p) { return filter === "All" || p.cat === filter; }).map(projectCard).join("");
    return '<section class="view"><p class="eyebrow">Projects</p><h2>Things I have designed and built</h2>' +
      '<p class="lede">Each project has its own page with what I did, the tools, and the numbers that mattered.</p>' +
      '<div class="filters" role="group" aria-label="Filter projects">' + chips + '</div>' +
      '<div class="grid">' + list + '</div></section>';
  }

  function projectPage(i) {
    var p = PROJECTS[i], prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length], next = PROJECTS[(i + 1) % PROJECTS.length];
    var did = p.did.map(function (d) { return "<li>" + esc(d) + "</li>"; }).join("");
    var spec = p.spec.map(function (r) { return '<div class="row"><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>'; }).join("");
    var tools = p.tools.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("");
    return '<section class="view"><a class="back" href="#projects">&larr; All projects</a>' +
      '<div class="detail-head"><p class="eyebrow">' + esc(p.cat) + ' &middot; ' + esc(p.status) + '</p><h2>' + esc(p.title) + '</h2>' +
      '<p class="muted mono" style="margin:0;font-size:14px">' + esc(p.when) + ' &middot; ' + esc(p.where) + '</p>' +
      '<p class="lede" style="margin-top:10px">' + esc(p.blurb) + '</p></div>' +
      '<div class="detail-grid"><div><h3>What I did</h3><ul class="did">' + did + '</ul><h3>Tools</h3><ul class="tools">' + tools + '</ul></div>' +
      '<aside class="spec" aria-label="Spec sheet"><dl>' + spec + '</dl></aside></div>' +
      '<div class="pager"><a href="#' + prev.id + '"><span class="dir">&larr; Previous</span><span>' + esc(prev.title) + '</span></a>' +
      '<a href="#' + next.id + '"><span class="dir">Next &rarr;</span><span>' + esc(next.title) + '</span></a></div></section>';
  }

  function rel(ids) {
    return '<div class="related"><span>Project pages:</span>' + ids.map(function (id) { return '<a href="#' + id + '">' + esc(PROJECTS[pIndex(id)].title) + '</a>'; }).join("") + '</div>';
  }

  function resume() {
    return '<section class="view"><div class="cv-top"><div><p class="eyebrow">Resume</p><h2>Experience and skills</h2></div>' +
      '<a class="btn primary" href="' + RESUME_PDF + '" target="_blank" rel="noopener noreferrer">Open the one-page PDF</a></div>' +
      '<p class="lede">The one-page version is for recruiters. This page has the longer story.</p>' +
      '<div class="cv">' +
      '<div class="cv-block"><h3>Education</h3><div><h4>B.Eng. Mechanical Engineering</h4><p class="sub">University of Guelph &middot; Graduated June 2026</p>' +
        '<p>Certified SolidWorks Associate (CSWA).</p></div></div>' +
      '<div class="cv-block"><h3>Experience</h3><div>' +
        '<div class="role"><h4>Manufacturing Engineer Intern</h4><p class="sub">SAF-HOLLAND &middot; Woodstock, ON &middot; Jan to Aug 2024</p>' +
        '<p>I worked on the plant floor of a trailer-component manufacturer, designing the fixtures and equipment that production relied on, then building and fixing them alongside the people who used them.</p>' +
        '<ul><li><b>Fixture design.</b> Designed and executed 12+ custom manufacturing fixtures from concept to production, including a spacer weld fixture with a fixed-point datum that aligns axles by part number, and 3 landing gear weld fixtures plus a trailer foot fixture.</li>' +
        '<li><b>Robotic welding.</b> Engineered a modular weld table for a Panasonic robotic weld cell with 3 interchangeable fixtures, and laid out a 16 ft by 16 ft cell in AutoCAD.</li>' +
        '<li><b>Equipment.</b> Led the physical overhaul of legacy hydraulic presses, adding modern safety features and structural upgrades.</li>' +
        '<li><b>Shop collaboration.</b> Worked with a team of 6 millwrights on fabrication, installation and troubleshooting of the new fixtures.</li>' +
        '<li><b>Process improvement.</b> Ran cycle-time studies on manual loading stations and changed designs to cut structural rework on defective axles.</li></ul>' +
        rel(["p-fixtures", "p-weld-cell", "p-presses"]) + '</div>' +
        '<div class="role"><h4>Aerodynamics Co-Lead and Vehicle Engineer</h4><p class="sub">Guelph Gryphon Formula SAE &middot; Guelph, ON &middot; Sept 2021 to Jun 2026</p>' +
        '<p>Almost five years on a student team that designs and builds a race car each year. I started by learning from senior members and ended up co-leading the aerodynamics group.</p>' +
        '<ul><li><b>Leadership.</b> Co-led a 40+ member aerodynamics team, coordinating off-site development meetings and timelines to deliver 3 aerodynamic kit designs.</li>' +
        '<li><b>Composites.</b> Led hands-on composite manufacturing: tooling, layup and structural assembly of carbon fibre nosecones, sidepods and wings.</li>' +
        '<li><b>Design ownership.</b> Owned the geometry of the sidepods and radiator shrouds, fitting them to the powertrain cooling requirements and passing all formal technical inspections.</li>' +
        '<li><b>Vehicle build.</b> Supported manufacturing and assembly of the car, including structural mounts.</li></ul>' +
        rel(["p-gryphon"]) + '</div>' +
      '</div></div>' +
      '<div class="cv-block"><h3>Projects</h3><div><ul>' +
        '<li>Landing gear foot welding fixture, reverse-engineered, with a ±0.075 in target.</li>' +
        '<li>Scale-model compactor bin with Arduino control, FEA and a 12 V power system.</li>' +
        '<li>Turbofan engine model in SolidWorks and Ansys (in progress).</li></ul>' +
        rel(["p-welding-fixture", "p-compactor", "p-turbofan"]) + '</div></div>' +
      '<div class="cv-block"><h3>Skills</h3><div>' +
        '<div class="skill-row"><b>CAD and simulation</b><span>SolidWorks (CSWA), AutoCAD, Fusion 360, OnShape, FEA</span></div>' +
        '<div class="skill-row"><b>Design and manufacturing</b><span>GD&amp;T, DFM, DFMA, composite manufacturing, lean manufacturing, tooling and fixtures</span></div>' +
        '<div class="skill-row"><b>Shop and automation</b><span>Drill press, lathe, mill, laser cutting, robotic welding systems (Fanuc, Panasonic), 3D printing</span></div>' +
      '</div></div></div></section>';
  }

  function now() {
    var items = NOW.slice().sort(function (a, b) { return a.start < b.start ? 1 : -1; }).map(function (n) {
      var p = parts(n.start), d = daysSince(n.start);
      return '<article class="now-item"><div class="datefig"><span class="day">' + p.d + '</span><span class="mon">' + MONTHS[p.m] + ' ' + p.y + '</span><span class="count">' + (d === 0 ? "Started today" : "Day " + (d + 1) + " &middot; " + plural(d) + " in") + '</span></div>' +
        '<div class="now-body"><span class="badge mono status" style="font-size:12px">' + esc(n.tag) + '</span><h3>' + esc(n.title) + '</h3>' +
        n.text.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("") +
        (n.link ? '<a href="#' + n.link + '">Project page &rarr;</a>' : "") + '</div></article>';
    }).join("");
    return '<section class="view"><p class="eyebrow">Now</p><h2>What I am working on</h2>' +
      '<p class="lede">A sneak peek at the work in progress, with the day each one started.</p>' +
      '<div class="now-list">' + items + '</div></section>';
  }

  function games() {
    var cards = GAMES.map(function (g) {
      var d = daysSince(g.started);
      return '<a class="card" href="#' + g.id + '"><div class="meta"><span>' + esc(g.status) + '</span><span>' + (d === 0 ? "Today" : plural(d) + " old") + '</span></div><h3>' + esc(g.title) + '</h3><p>' + esc(g.blurb) + '</p><span class="more">Play it &rarr;</span></a>';
    }).join("");
    return '<section class="view"><p class="eyebrow">Games</p><h2>Games I build to learn programming</h2>' +
      '<p class="lede">Every game here is something I vibe coded to understand one more piece of programming. Each page lists what the game taught me.</p>' +
      '<div class="grid" style="margin-top:40px">' + cards + '</div></section>';
  }

  function gamePage(i) {
    var g = GAMES[i], prev = GAMES[(i + GAMES.length - 1) % GAMES.length], next = GAMES[(i + 1) % GAMES.length];
    var learned = g.learned.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("");
    var pager = GAMES.length > 1 ? '<div class="pager"><a href="#' + prev.id + '"><span class="dir">&larr; Previous</span><span>' + esc(prev.title) + '</span></a><a href="#' + next.id + '"><span class="dir">Next &rarr;</span><span>' + esc(next.title) + '</span></a></div>' : "";
    return '<section class="view"><a class="back" href="#games">&larr; All games</a>' +
      '<div class="detail-head"><p class="eyebrow">' + esc(g.status) + '</p><h2>' + esc(g.title) + '</h2><p class="lede" style="margin-top:10px">' + esc(g.blurb) + '</p></div>' +
      '<div class="stage"><div class="stagebox" id="stagebox"></div><p class="hint">Click or tap to start. Move the pointer, or use the left and right arrow keys.</p></div>' +
      '<div class="detail-grid" style="grid-template-columns:minmax(0,1fr)"><div><h3>What I learned building it</h3><ul class="did">' + learned + '</ul></div></div>' + pager + '</section>';
  }

  function contact() {
    return '<section class="view"><p class="eyebrow">Contact</p><h2>Say hello</h2>' +
      '<p class="lede">I am looking for engineering roles in manufacturing, design, automation and tooling. Email is the fastest way to reach me.</p>' +
      '<div class="contact-box"><div class="line-item"><span class="k">Email</span><div class="copy-row"><code>' + EMAIL + '</code><button class="btn" type="button" id="copy">Copy address</button></div><span class="toast" id="toast" role="status"></span></div>' +
      '<div class="line-item"><span class="k">LinkedIn</span><a href="https://www.linkedin.com/in/rajaee-mundle-56195824b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rajaee-mundle-56195824b</a></div>' +
      '<div class="line-item"><span class="k">Resume</span><a href="' + RESUME_PDF + '" target="_blank" rel="noopener noreferrer">One-page PDF</a></div></div></section>';
  }

  /* ================= router ================= */
  function render() {
    if (cleanup) { cleanup(); cleanup = null; }
    var h = (location.hash || "#home").slice(1) || "home";
    var out, navKey = h, title = "", pi = pIndex(h), gi = gIndex(h);
    if (pi >= 0) { out = projectPage(pi); navKey = "projects"; title = PROJECTS[pi].title; }
    else if (gi >= 0) { out = gamePage(gi); navKey = "games"; title = GAMES[gi].title; }
    else if (h === "projects") out = projects();
    else if (h === "resume") out = resume();
    else if (h === "now") out = now();
    else if (h === "games") out = games();
    else if (h === "contact") out = contact();
    else { out = home(); navKey = "home"; }
    viewEl.innerHTML = out;
    if (gi >= 0) cleanup = GAMES[gi].mount(document.getElementById("stagebox"));
    document.querySelectorAll("nav a").forEach(function (a) {
      if (a.getAttribute("data-nav") === navKey) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.title = (title ? title + " | " : "") + "Rajaee Mundle";
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", render);

  viewEl.addEventListener("click", function (e) {
    var chip = e.target.closest && e.target.closest(".chip");
    if (chip) {
      filter = chip.getAttribute("data-cat");
      var keepY = window.scrollY;
      viewEl.innerHTML = projects();
      window.scrollTo(0, keepY);
      return;
    }
    if (e.target.id === "copy") {
      var toast = document.getElementById("toast");
      var done = function (ok) { toast.textContent = ok ? "Copied." : "Select the address above and copy it."; };
      try { navigator.clipboard.writeText(EMAIL).then(function () { done(true); }, function () { done(false); }); }
      catch (err) { done(false); }
    }
  });
  render();

  /* ================= night sky ================= */
  var cv = document.getElementById("sky"), cx = cv.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = 0, H = 0, dpr = 1, stars = [], mx = 0, my = 0, tx = 0, ty = 0, shoot = null, nextShoot = 6000;

  function seed() {
    var n = Math.round(Math.min(220, (W * H) / 9000));
    stars = [];
    for (var i = 0; i < n; i++) {
      var d = Math.random();
      stars.push({ x: Math.random() * W, y: Math.random() * H, z: 0.25 + d * 0.9, r: 0.3 + d * 1.25, p: Math.random() * 6.28, s: 0.4 + Math.random() * 1.4, v: 0.012 + d * 0.03 });
    }
  }
  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }
  window.addEventListener("resize", size);
  window.addEventListener("pointermove", function (e) { tx = (e.clientX / W - 0.5); ty = (e.clientY / H - 0.5); }, { passive: true });

  function frame(t) {
    mx += (tx - mx) * 0.03; my += (ty - my) * 0.03;
    cx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      if (!reduce) { s.y -= s.v; if (s.y < -2) { s.y = H + 2; s.x = Math.random() * W; } }
      var a = reduce ? 0.7 : 0.45 + 0.4 * Math.sin(t / 1000 * s.s + s.p);
      var px = s.x - mx * 26 * s.z, py = s.y - my * 18 * s.z;
      cx.globalAlpha = Math.max(0.1, a) * (0.4 + s.z * 0.6);
      cx.fillStyle = "#e6ecff";
      cx.beginPath(); cx.arc(px, py, s.r, 0, 6.2832); cx.fill();
    }
    cx.globalAlpha = 1;
    if (!reduce) {
      if (!shoot && t > nextShoot) { shoot = { x: Math.random() * W * 0.7 + W * 0.2, y: Math.random() * H * 0.35, life: 0 }; nextShoot = t + 14000 + Math.random() * 20000; }
      if (shoot) {
        shoot.life += 1; var k = shoot.life / 55;
        var x = shoot.x + k * 220, y = shoot.y + k * 90;
        var g = cx.createLinearGradient(x, y, x - 90, y - 36);
        g.addColorStop(0, "rgba(230,236,255," + (0.8 * (1 - k)) + ")"); g.addColorStop(1, "rgba(230,236,255,0)");
        cx.strokeStyle = g; cx.lineWidth = 1.4; cx.beginPath(); cx.moveTo(x, y); cx.lineTo(x - 90, y - 36); cx.stroke();
        if (k >= 1) shoot = null;
      }
      requestAnimationFrame(frame);
    }
  }
  size();
  requestAnimationFrame(frame);
})();
