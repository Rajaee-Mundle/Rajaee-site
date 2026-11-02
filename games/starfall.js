/* Game: Starfall. One game per file in this folder. See README.md for how to add another. */
(function () {
  "use strict";

  /* A game registers itself with: id (starts with g-), title, started (YYYY-MM-DD), status, blurb, learned[], mount(box) -> cleanup fn. */
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

  window.GAMES = window.GAMES || [];
  window.GAMES.push(
    {
      id: "g-starfall", title: "Starfall", started: "2026-11-02", status: "Starter template",
      blurb: "A quiet catch-the-stars game on a canvas, written with Claude. It is the starting template for the games I build next.",
      learned: [
        "The game loop: redraw the screen about 60 times a second with requestAnimationFrame, and move things by elapsed time so it plays the same on any screen.",
        "State: a game is always in one state (ready, playing, over), and every frame behaves differently depending on which.",
        "Collision: catching a star is a distance check between two shapes.",
        "Difficulty: stars fall faster and spawn more often as the score climbs.",
        "Input: the same game answers to a mouse, a finger or the arrow keys."
      ],
      mount: starfall
    }
  );
})();
