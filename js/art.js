/* mevzuathabercisi.com — haber görselleri
   Her alan için 640×360 boyutunda düz çizim sahnesi üretir.
   Aynı haber her zaman aynı görseli alır (id'den türetilen tohum). */
(function () {
"use strict";
const HEX = { gumruk: "#0B7285", distic: "#3B5BDB", vergi: "#E8590C", muhasebe: "#9C36B5", finans: "#2F9E44", lojistik: "#B08900", depolama: "#5C6B82", denetim: "#C2255C" };
const NAVY = "#0E1630", Y = "#FFD43B", CORAL = "#FF8A65", PAPER = "#FFFFFF", CARD = "#D9A066";
let uid = 0;

function hx(h) { h = h.replace("#", ""); return [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)); }
function mix(a, b, t) { const A = hx(a), B = hx(b); return "#" + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, "0")).join(""); }
const tint = (c, t) => mix(c, "#FFFFFF", t);
const shade = (c, t) => mix(c, NAVY, t);
function seedOf(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function rng(seed) { let a = seed || 1; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const n1 = v => Math.round(v * 10) / 10;

let VAR = 0;
function sky(id, c, r) {
  const v = VAR % 3;
  const top = v === 1 ? mix(tint(c, 0.6), CORAL, 0.35) : v === 2 ? mix(tint(c, 0.55), "#74C0FC", 0.4) : tint(c, 0.62 + r() * 0.1);
  const bot = v === 1 ? tint(Y, 0.78) : tint(c, 0.9);
  return '<defs><linearGradient id="s' + id + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + top + '"/><stop offset="1" stop-color="' + bot + '"/></linearGradient></defs>' +
    '<rect width="640" height="360" fill="url(#s' + id + ')"/>';
}
function sun(r, x, y, rad) { return '<circle cx="' + x + '" cy="' + y + '" r="' + rad + '" fill="' + Y + '" opacity=".95"/><circle cx="' + x + '" cy="' + y + '" r="' + (rad + 18) + '" fill="' + Y + '" opacity=".18"/>'; }
function clouds(r, c) {
  let s = "";
  for (let i = 0; i < 2; i++) {
    const x = 60 + r() * 420, y = 40 + r() * 60, w = 70 + r() * 50;
    s += '<g fill="#fff" opacity=".75"><rect x="' + n1(x) + '" y="' + n1(y) + '" width="' + n1(w) + '" height="16" rx="8"/><rect x="' + n1(x + w * 0.2) + '" y="' + n1(y - 10) + '" width="' + n1(w * 0.45) + '" height="18" rx="9"/></g>';
  }
  return s;
}

/* ── sahneler ── */
const S = {};

S.gumruk = (c, r, id) => {
  const cols = [c, shade(c, 0.35), Y, CORAL, tint(c, 0.35), NAVY, "#E8590C"];
  let s = sky(id, c, r) + sun(r, 520, 88, 34) + clouds(r, c);
  // vinç
  s += '<g stroke="' + NAVY + '" stroke-width="7" stroke-linecap="square" fill="none"><path d="M548 262V96M602 262V96M548 140h54M548 200h54"/><path d="M360 96h268"/><path d="M548 96l-50-30M602 96l-50-30"/></g>' +
       '<rect x="452" y="88" width="34" height="16" rx="3" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/><path d="M470 104v48" stroke="' + NAVY + '" stroke-width="2.5"/>' +
       '<rect x="438" y="152" width="64" height="28" rx="2" fill="' + pick(r, cols) + '"/><path d="M450 156v20M462 156v20M474 156v20M486 156v20" stroke="#fff" stroke-opacity=".35" stroke-width="3"/>';
  // deniz
  s += '<rect y="262" width="640" height="98" fill="' + shade(c, 0.2) + '"/>' +
       '<path d="M0 290h640M0 318h640M0 344h640" stroke="#fff" stroke-opacity=".14" stroke-width="3" stroke-dasharray="26 18"/>';
  // gemi ve konteynerler
  s += '<path d="M64 232h452l-34 52H96z" fill="' + NAVY + '"/><rect x="88" y="262" width="404" height="6" fill="' + CORAL + '"/>' +
       '<rect x="80" y="168" width="46" height="64" rx="3" fill="#fff"/><rect x="88" y="178" width="30" height="9" rx="2" fill="' + NAVY + '"/><rect x="88" y="194" width="30" height="9" rx="2" fill="' + NAVY + '" opacity=".6"/><rect x="96" y="150" width="10" height="20" fill="' + NAVY + '"/>';
  for (let col = 0; col < 7; col++) {
    const h = 1 + Math.floor(r() * 3);
    for (let row = 0; row < h; row++) {
      const x = 140 + col * 52, y = 206 - row * 26, f = pick(r, cols);
      s += '<rect x="' + x + '" y="' + y + '" width="49" height="24" rx="2" fill="' + f + '"/><path d="M' + (x + 10) + " " + (y + 4) + "v16M" + (x + 20) + " " + (y + 4) + "v16M" + (x + 30) + " " + (y + 4) + "v16M" + (x + 40) + " " + (y + 4) + 'v16" stroke="#fff" stroke-opacity=".3" stroke-width="2.5"/>';
    }
  }
  return s;
};

S.distic = (c, r, id) => {
  let s = sky(id, c, r) + clouds(r, c);
  const gx = 170, gy = 400, gr = 250;
  s += '<circle cx="' + gx + '" cy="' + gy + '" r="' + gr + '" fill="' + tint(c, 0.25) + '"/>' +
       '<g fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="3"><ellipse cx="' + gx + '" cy="' + gy + '" rx="95" ry="' + gr + '"/><ellipse cx="' + gx + '" cy="' + gy + '" rx="190" ry="' + gr + '"/><path d="M-80 260Q170 220 420 260M-80 320Q170 290 420 320M-80 205Q170 160 420 205"/></g>' +
       '<path d="M60 236c30-14 60-6 84 6s52 6 70-8c14 12 8 30-14 38-30 10-58 2-80-6s-44-6-62 4c-10-12-8-26 2-34z" fill="' + shade(c, 0.15) + '" opacity=".75"/>';
  const pts = [[110, 250], [210, 222], [300, 268]];
  const ends = [[600, 70], [560, 168], [610, 250]];
  pts.forEach((p, i) => {
    const e = ends[i], mx = (p[0] + e[0]) / 2, my = Math.min(p[1], e[1]) - 90 - r() * 40;
    s += '<path d="M' + p[0] + " " + p[1] + "Q" + n1(mx) + " " + n1(my) + " " + e[0] + " " + e[1] + '" fill="none" stroke="' + NAVY + '" stroke-width="3" stroke-dasharray="7 7" stroke-linecap="round"/>' +
         '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="7" fill="' + NAVY + '"/><circle cx="' + e[0] + '" cy="' + e[1] + '" r="13" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/>';
  });
  s += '<g transform="translate(420 92) rotate(-18)"><path d="M0 0l58 0 14-8 6 0-6 14 6 14-6 0-14-8-58 0z" fill="#fff" stroke="' + NAVY + '" stroke-width="3" stroke-linejoin="round"/><path d="M22 0l-14-22h10l22 22M22 12l-14 22h10l22-22" fill="' + c + '" stroke="' + NAVY + '" stroke-width="2.5" stroke-linejoin="round"/></g>';
  return s;
};

S.vergi = (c, r, id) => {
  let s = '<rect width="640" height="360" fill="' + tint(c, 0.8) + '"/><path d="M0 250h640v110H0z" fill="' + tint(c, 0.66) + '"/>';
  // arka form
  s += '<g transform="rotate(-7 210 170)"><rect x="96" y="54" width="220" height="250" rx="6" fill="#fff" stroke="' + tint(c, 0.4) + '" stroke-width="3"/>' +
       '<rect x="118" y="78" width="120" height="14" rx="4" fill="' + NAVY + '"/>' +
       [0, 1, 2, 3, 4, 5].map(i => '<rect x="118" y="' + (110 + i * 24) + '" width="' + (150 - (i % 3) * 30) + '" height="9" rx="4" fill="' + tint(c, 0.5) + '"/>').join("") +
       '<circle cx="262" cy="262" r="30" fill="none" stroke="' + c + '" stroke-width="5"/><circle cx="262" cy="262" r="21" fill="none" stroke="' + c + '" stroke-width="2" stroke-dasharray="4 3"/><path d="m249 262 9 9 17-18" fill="none" stroke="' + c + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g>';
  // fiş
  s += '<g transform="rotate(5 380 190)"><path d="M320 60h130v240l-16.25-12-16.25 12-16.25-12-16.25 12-16.25-12-16.25 12-16.25-12-16.25 12z" fill="#fff" stroke="' + NAVY + '" stroke-width="3" stroke-linejoin="round"/>' +
       '<path d="M340 86h90M340 106h60" stroke="' + NAVY + '" stroke-opacity=".35" stroke-width="7" stroke-linecap="round"/>' +
       '<path d="m350 228 70-70" stroke="' + c + '" stroke-width="12" stroke-linecap="round"/><circle cx="356" cy="168" r="15" fill="' + c + '"/><circle cx="414" cy="220" r="15" fill="' + c + '"/></g>';
  // hesap makinesi
  s += '<g transform="rotate(-4 540 210)"><rect x="482" y="120" width="116" height="168" rx="14" fill="' + NAVY + '"/><rect x="496" y="134" width="88" height="34" rx="5" fill="' + tint(Y, 0.3) + '"/>' +
       [0, 1, 2].map(rw => [0, 1, 2].map(cl => '<rect x="' + (498 + cl * 29) + '" y="' + (182 + rw * 32) + '" width="23" height="24" rx="5" fill="' + (rw === 2 && cl === 2 ? Y : "#fff") + '" opacity="' + (rw === 2 && cl === 2 ? 1 : 0.35) + '"/>').join("")).join("") + "</g>";
  // madeni paralar
  for (let i = 0; i < 4; i++) s += '<ellipse cx="200" cy="' + (318 - i * 11) + '" rx="40" ry="13" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/>';
  s += '<path d="M196 266v20c8 0 13-4 13-10M188 276l16-5M188 283l16-5" fill="none" stroke="' + NAVY + '" stroke-width="3" stroke-linecap="round" transform="translate(0 2)"/>';
  return s;
};

S.muhasebe = (c, r, id) => {
  let s = '<rect width="640" height="360" fill="' + tint(c, 0.82) + '"/><circle cx="560" cy="60" r="120" fill="' + tint(c, 0.7) + '"/>';
  // açık defter
  s += '<path d="M120 92q100-22 196 6v226q-96-26-196-6z" fill="#fff" stroke="' + shade(c, 0.3) + '" stroke-width="3"/>' +
       '<path d="M316 98q96-28 196-6v228q-100-20-196 6z" fill="#fff" stroke="' + shade(c, 0.3) + '" stroke-width="3"/>' +
       '<path d="M316 98v226" stroke="' + shade(c, 0.3) + '" stroke-width="3"/>';
  for (let i = 0; i < 7; i++) {
    const y = 128 + i * 24;
    s += '<path d="M142 ' + (y - 4) + 'q78-14 154 4" fill="none" stroke="' + tint(c, 0.45) + '" stroke-width="2.5"/>' +
         '<rect x="150" y="' + (y - 14) + '" width="' + (40 + (i * 13) % 50) + '" height="7" rx="3" fill="' + tint(c, 0.3) + '"/>' +
         '<rect x="256" y="' + (y - 13) + '" width="30" height="7" rx="3" fill="' + c + '" opacity=".75"/>';
  }
  const hs = [40, 64, 52, 88, 110];
  hs.forEach((h, i) => { s += '<rect x="' + (350 + i * 28) + '" y="' + (282 - h) + '" width="18" height="' + h + '" rx="3" fill="' + (i === 4 ? Y : c) + '"' + (i === 4 ? ' stroke="' + NAVY + '" stroke-width="2.5"' : "") + "/>"; });
  s += '<path d="M344 286h150" stroke="' + NAVY + '" stroke-width="3"/>' +
       '<path d="M352 210l28-20 28 10 28-32 28-18" fill="none" stroke="' + NAVY + '" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>';
  // kalem ve yapışkan notlar
  s += '<g transform="rotate(-32 560 280)"><rect x="500" y="272" width="140" height="16" rx="3" fill="' + c + '"/><path d="M640 272l22 8-22 8z" fill="' + tint(Y, 0.2) + '"/><rect x="500" y="272" width="20" height="16" fill="' + NAVY + '"/></g>' +
       '<rect x="40" y="210" width="62" height="62" rx="4" fill="' + Y + '" transform="rotate(-8 71 241)"/><rect x="56" y="232" width="34" height="5" rx="2.5" fill="' + NAVY + '" opacity=".4" transform="rotate(-8 71 241)"/>';
  return s;
};

S.finans = (c, r, id) => {
  let s = sky(id, c, r) + sun(r, 96, 86, 30);
  // grafik
  const pts = [[40, 230], [140, 200], [230, 214], [330, 150], [430, 162], [540, 92], [610, 70]];
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + p[1]).join("");
  s += '<path d="' + d + 'L610 262L40 262z" fill="' + tint(c, 0.55) + '" opacity=".7"/><path d="' + d + '" fill="none" stroke="' + c + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
       '<path d="M590 62l26 4-8 25" fill="none" stroke="' + c + '" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
       pts.slice(1, 6).map(p => '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="8" fill="#fff" stroke="' + c + '" stroke-width="4"/>').join("");
  // şehir silueti
  const bl = [[0, 70], [46, 110], [96, 84], [140, 140], [196, 96], [400, 120], [452, 76], [500, 150], [560, 100], [604, 128]];
  bl.forEach((b, i) => {
    const w = 46 + (i % 3) * 6, h = b[1];
    s += '<rect x="' + b[0] + '" y="' + (300 - h) + '" width="' + w + '" height="' + h + '" fill="' + shade(c, 0.45 + (i % 3) * 0.12) + '"/>';
    for (let k = 0; k < Math.floor(h / 22); k++) s += '<rect x="' + (b[0] + 10) + '" y="' + (300 - h + 12 + k * 22) + '" width="' + (w - 20) + '" height="6" rx="2" fill="#fff" opacity=".18"/>';
  });
  // banka
  s += '<path d="M236 198 320 150l84 48z" fill="#fff" stroke="' + NAVY + '" stroke-width="4" stroke-linejoin="round"/><circle cx="320" cy="182" r="8" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/>' +
       '<rect x="236" y="198" width="168" height="10" fill="' + NAVY + '"/>' +
       [0, 1, 2, 3, 4].map(i => '<rect x="' + (248 + i * 32) + '" y="212" width="16" height="70" rx="2" fill="#fff" stroke="' + NAVY + '" stroke-width="3"/>').join("") +
       '<rect x="226" y="282" width="188" height="18" rx="2" fill="' + NAVY + '"/>';
  s += '<rect y="300" width="640" height="60" fill="' + shade(c, 0.6) + '"/>';
  for (let i = 0; i < 3; i++) s += '<ellipse cx="560" cy="' + (334 - i * 11) + '" rx="36" ry="12" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/>';
  return s;
};

S.lojistik = (c, r, id) => {
  let s = sky(id, c, r) + sun(r, 470, 96, 36) + clouds(r, c);
  s += '<path d="M0 230q160-60 320-10t320-24v164H0z" fill="' + tint(c, 0.45) + '"/><path d="M0 262q200-40 380 0t260-8v106H0z" fill="' + tint(c, 0.25) + '"/>';
  // yol
  s += '<path d="M250 230h60l250 130H-60z" fill="' + shade(c, 0.7) + '"/>';
  [[278, 238, 4, 12], [272, 262, 7, 20], [262, 296, 11, 30], [246, 338, 16, 40]].forEach(m => { s += '<rect x="' + (m[0] + 20 - m[2] / 2) + '" y="' + m[1] + '" width="' + m[2] + '" height="' + m[3] + '" fill="' + Y + '"/>'; });
  // tabela
  s += '<path d="M560 160v110" stroke="' + NAVY + '" stroke-width="6"/><rect x="510" y="128" width="104" height="44" rx="6" fill="' + c + '" stroke="' + NAVY + '" stroke-width="3"/><path d="M528 150h58M574 140l12 10-12 10" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>';
  // uzak tır
  s += '<g transform="translate(290 212) scale(.32)"><rect x="0" y="0" width="120" height="56" rx="4" fill="' + CORAL + '"/><rect x="122" y="14" width="40" height="42" rx="4" fill="' + NAVY + '"/></g>';
  // yakın tır
  s += '<g transform="translate(64 214)"><rect x="0" y="0" width="230" height="90" rx="6" fill="' + c + '"/><path d="M18 26h150M18 48h96" stroke="#fff" stroke-opacity=".45" stroke-width="7" stroke-linecap="round"/>' +
       '<path d="M232 26h54l34 34v40H232z" fill="' + NAVY + '"/><path d="M244 36h38l24 24h-62z" fill="#fff" opacity=".9"/><rect x="306" y="78" width="12" height="9" rx="2" fill="' + Y + '"/>' +
       '<circle cx="56" cy="104" r="20" fill="' + NAVY + '"/><circle cx="56" cy="104" r="8" fill="#fff"/><circle cx="190" cy="104" r="20" fill="' + NAVY + '"/><circle cx="190" cy="104" r="8" fill="#fff"/><circle cx="276" cy="104" r="20" fill="' + NAVY + '"/><circle cx="276" cy="104" r="8" fill="#fff"/></g>';
  return s;
};

S.depolama = (c, r, id) => {
  let s = '<rect width="640" height="360" fill="' + tint(c, 0.78) + '"/><rect y="282" width="640" height="78" fill="' + tint(c, 0.55) + '"/>' +
          '<path d="M0 282h640" stroke="' + shade(c, 0.3) + '" stroke-width="3"/><path d="M60 330h120M260 330h120M460 330h120" stroke="' + Y + '" stroke-width="6" stroke-dasharray="20 14"/>';
  // raflar
  [[30, 250], [320, 250]].forEach(rk => {
    const x0 = rk[0], w = rk[1];
    s += '<path d="M' + x0 + ' 282V40M' + (x0 + w) + ' 282V40M' + (x0 + w / 2) + ' 282V40" stroke="' + NAVY + '" stroke-width="7"/>';
    [110, 186, 262].forEach(y => { s += '<rect x="' + x0 + '" y="' + y + '" width="' + w + '" height="9" fill="' + "#E8590C" + '"/>'; });
    [110, 186, 262].forEach(y => {
      let x = x0 + 10;
      while (x < x0 + w - 30) {
        const bw = 26 + Math.floor(r() * 30), bh = 26 + Math.floor(r() * 34);
        if (x + bw > x0 + w - 8) break;
        const f = r() < 0.18 ? Y : r() < 0.35 ? tint(c, 0.25) : CARD;
        s += '<rect x="' + x + '" y="' + (y - bh) + '" width="' + bw + '" height="' + bh + '" rx="2" fill="' + f + '" stroke="' + shade(CARD, 0.45) + '" stroke-opacity=".4" stroke-width="2"/><path d="M' + (x + bw / 2) + " " + (y - bh) + "v" + Math.min(12, bh / 2) + '" stroke="' + shade(CARD, 0.45) + '" stroke-opacity=".5" stroke-width="2"/>';
        x += bw + 6;
      }
    });
  });
  // forklift
  s += '<g transform="translate(400 196)"><rect x="40" y="30" width="96" height="58" rx="8" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/><path d="M70 30V-6h52v36" fill="none" stroke="' + NAVY + '" stroke-width="5"/>' +
       '<path d="M30 -30V88" stroke="' + NAVY + '" stroke-width="8"/><path d="M30 78h-46" stroke="' + NAVY + '" stroke-width="6"/>' +
       '<rect x="-14" y="38" width="40" height="38" rx="2" fill="' + CARD + '" stroke="' + shade(CARD, 0.45) + '" stroke-width="2"/>' +
       '<circle cx="62" cy="90" r="15" fill="' + NAVY + '"/><circle cx="62" cy="90" r="5" fill="#fff"/><circle cx="118" cy="90" r="15" fill="' + NAVY + '"/><circle cx="118" cy="90" r="5" fill="#fff"/></g>';
  return s;
};

S.denetim = (c, r, id) => {
  let s = '<rect width="640" height="360" fill="' + tint(c, 0.84) + '"/><circle cx="110" cy="300" r="150" fill="' + tint(c, 0.72) + '"/>';
  // belgeler
  [[70, 70, -8], [190, 50, 4]].forEach((p, j) => {
    s += '<g transform="rotate(' + p[2] + ' ' + (p[0] + 100) + ' ' + (p[1] + 130) + ')"><rect x="' + p[0] + '" y="' + p[1] + '" width="200" height="260" rx="6" fill="#fff" stroke="' + tint(c, 0.4) + '" stroke-width="3"/>';
    for (let i = 0; i < 6; i++) {
      const y = p[1] + 40 + i * 34;
      s += '<rect x="' + (p[0] + 50) + '" y="' + (y - 5) + '" width="' + (110 - (i % 3) * 18) + '" height="9" rx="4" fill="' + tint(c, 0.5) + '"/>' +
           (i < 4 || j ? '<path d="m' + (p[0] + 20) + " " + y + ' 7 7 13-14" fill="none" stroke="' + c + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' : '<rect x="' + (p[0] + 20) + '" y="' + (y - 8) + '" width="16" height="16" rx="3" fill="none" stroke="' + tint(c, 0.3) + '" stroke-width="3"/>');
    }
    s += "</g>";
  });
  // büyüteç
  s += '<circle cx="380" cy="176" r="88" fill="' + tint(c, 0.6) + '" fill-opacity=".55" stroke="' + NAVY + '" stroke-width="16"/>' +
       '<path d="M444 240l78 78" stroke="' + NAVY + '" stroke-width="26" stroke-linecap="round"/><path d="M450 246l66 66" stroke="' + shade(NAVY, 0) + '" stroke-width="8" stroke-linecap="round" opacity=".4"/>' +
       [36, 58, 46, 74].map((h, i) => '<rect x="' + (338 + i * 22) + '" y="' + (214 - h) + '" width="14" height="' + h + '" rx="3" fill="' + (i === 3 ? c : shade(c, 0.2)) + '"/>').join("") +
       '<path d="M330 214h100" stroke="' + NAVY + '" stroke-width="3"/>';
  // kalkan
  s += '<g transform="translate(520 52)"><path d="M48 0l48 18v36c0 30-20 52-48 62C20 106 0 84 0 54V18z" fill="' + c + '" stroke="' + NAVY + '" stroke-width="4"/><path d="m28 56 14 14 28-30" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>' +
       '<circle cx="560" cy="250" r="20" fill="' + Y + '" stroke="' + NAVY + '" stroke-width="3"/>';
  return s;
};

function scene(cat, key, opts) {
  const c = HEX[cat] || HEX.gumruk;
  const seed = seedOf(String(key || cat));
  const r = rng(seed);
  const id = "a" + (++uid);
  const flip = (seed & 1) === 1 && ["gumruk", "lojistik", "depolama", "denetim", "vergi"].indexOf(cat) >= 0;
  VAR = (seed >>> 3) % 3;
  const body = (S[cat] || S.gumruk)(c, r, id);
  const cam = rng(seed ^ 0x9e3779b9), z = 1 + cam() * 0.28, px = n1(cam() * 640 * (z - 1)), py = n1(cam() * 360 * (z - 1));
  const camT = opts && opts.still ? "" : ' transform="translate(' + (-px) + " " + (-py) + ") scale(" + n1(z * 100) / 100 + ')"';
  const ratio = opts && opts.fit === "meet" ? "xMidYMid meet" : "xMidYMid slice";
  return '<svg class="art-svg" viewBox="0 0 640 360" preserveAspectRatio="' + ratio + '" role="img" aria-label="' + (opts && opts.label ? opts.label.replace(/"/g, "&quot;") : "Haber görseli") + '">' +
    "<g" + camT + ">" + (flip ? '<g transform="translate(640 0) scale(-1 1)">' + body + "</g>" : body) + "</g></svg>";
}

window.MHART = { scene, HEX, tint, shade };
})();
