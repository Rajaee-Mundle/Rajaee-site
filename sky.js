/* The animated night sky behind every page. Safe to ignore. */
(function () {
  "use strict";

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
