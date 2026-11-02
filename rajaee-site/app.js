(function () {
  "use strict";

  /* The site engine: pages, routing, filters. Content lives in data/content.js and games/*.js. */
  var S = window.SITE;
  var EMAIL = S.EMAIL, RESUME_PDF = S.RESUME_PDF, PROJECTS = S.PROJECTS, CATS = S.CATS, NOW = S.NOW;
  var GAMES = window.GAMES || [];

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
      '<p class="lede">This is where the games I vibe code will live. Each one is a way to learn another piece of programming, and each page lists what that game teaches.</p>' +
      '<div class="grid" style="margin-top:40px">' + cards + '</div></section>';
  }

  function gamePage(i) {
    var g = GAMES[i], prev = GAMES[(i + GAMES.length - 1) % GAMES.length], next = GAMES[(i + 1) % GAMES.length];
    var learned = g.learned.map(function (l) { return "<li>" + esc(l) + "</li>"; }).join("");
    var pager = GAMES.length > 1 ? '<div class="pager"><a href="#' + prev.id + '"><span class="dir">&larr; Previous</span><span>' + esc(prev.title) + '</span></a><a href="#' + next.id + '"><span class="dir">Next &rarr;</span><span>' + esc(next.title) + '</span></a></div>' : "";
    return '<section class="view"><a class="back" href="#games">&larr; All games</a>' +
      '<div class="detail-head"><p class="eyebrow">' + esc(g.status) + '</p><h2>' + esc(g.title) + '</h2><p class="lede" style="margin-top:10px">' + esc(g.blurb) + '</p></div>' +
      '<div class="stage"><div class="stagebox" id="stagebox"></div><p class="hint">Click or tap to start. Move the pointer, or use the left and right arrow keys.</p></div>' +
      '<div class="detail-grid" style="grid-template-columns:minmax(0,1fr)"><div><h3>What this code teaches</h3><ul class="did">' + learned + '</ul></div></div>' + pager + '</section>';
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
})();
