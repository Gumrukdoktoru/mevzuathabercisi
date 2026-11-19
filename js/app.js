/* mevzuathabercisi.com — arayüz */
(function () {
"use strict";
const M = window.MH;
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── ikonlar ── */
const P = {
  gumruk: '<path d="M3 8l9-5 9 5v8l-9 5-9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
  distic: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  vergi: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="m9 14 6-6"/><circle cx="9.5" cy="8.5" r="1"/><circle cx="14.5" cy="13.5" r="1"/>',
  muhasebe: '<rect x="5" y="3" width="14" height="18" rx="2.5"/><path d="M8 7h8M8 11h2M12 11h2M8 14.5h2M12 14.5h2M8 18h2M12 18h4"/>',
  finans: '<path d="M3 10 12 4l9 6"/><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
  lojistik: '<path d="M2 6h11v10H2zM13 9h4l4 4v3h-8"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  depolama: '<path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-8h10v8M7 16h10"/>',
  denetim: '<path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  arr: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v4.5M12 17.3v.2"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  play: '<path d="M8 5.5v13l11-6.5z"/>',
  pause: '<path d="M8 5v14M16 5v14"/>',
  replay: '<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',
  cal: '<rect x="3.5" y="5" width="17" height="15" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'
};
const ic = (k, cls) => '<svg class="ic' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true">' + P[k] + "</svg>";


/* ── alan çizimleri (120×90) ── */
const INK = 'style="stroke:var(--ill-ink)"', INKF = 'style="fill:var(--ill-ink)"', Y = "#FFD43B";
const ILL = {
  gumruk: '<rect x="6" y="78" width="108" height="3" rx="1.5" fill="currentColor" opacity=".25"/><rect x="24" y="22" width="52" height="24" rx="3" fill="currentColor" opacity=".45"/><rect x="10" y="44" width="72" height="34" rx="3" fill="currentColor"/><path d="M20 50v22M30 50v22M40 50v22M50 50v22M60 50v22M70 50v22" stroke="#fff" stroke-opacity=".35" stroke-width="2.5" stroke-linecap="round"/><path d="M33 27v14M43 27v14M53 27v14M63 27v14" stroke="#fff" stroke-opacity=".4" stroke-width="2" stroke-linecap="round"/><circle cx="95" cy="54" r="17" fill="' + Y + '"/><circle cx="95" cy="54" r="12" fill="none" ' + INK + ' stroke-width="2" stroke-dasharray="3 2.5"/><path d="m89 54 4.5 4.5L101 50" fill="none" ' + INK + ' stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  distic: '<circle cx="50" cy="48" r="32" fill="currentColor" opacity=".16"/><circle cx="50" cy="48" r="32" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="50" cy="48" rx="13" ry="32" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M18 48h64M22 32h56M22 64h56" stroke="currentColor" stroke-width="2.5"/><path d="M14 82C40 76 78 54 96 22" fill="none" ' + INK + ' stroke-width="2.5" stroke-dasharray="5 5" stroke-linecap="round"/><circle cx="100" cy="17" r="11" fill="' + Y + '"/><path d="M95 17h10M101 12.5l4.5 4.5-4.5 4.5" fill="none" ' + INK + ' stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  vergi: '<path d="M22 8h50v74l-6.25-5-6.25 5-6.25-5-6.25 5-6.25-5-6.25 5-6.25-5-6.25 5z" fill="#fff" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M32 22h30M32 31h20" stroke="currentColor" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><path d="m36 64 22-22" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><circle cx="38" cy="46" r="5" fill="currentColor"/><circle cx="56" cy="60" r="5" fill="currentColor"/><circle cx="94" cy="60" r="18" fill="' + Y + '"/><circle cx="94" cy="60" r="12.5" fill="none" ' + INK + ' stroke-width="2"/><path d="M92 52v14c4 0 7-2.4 7-6.5M88 58.5l8-3M88 62.5l8-3" fill="none" ' + INK + ' stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  muhasebe: '<rect x="50" y="14" width="54" height="68" rx="4" fill="#fff" stroke="currentColor" stroke-opacity=".4" stroke-width="2.5" transform="rotate(9 77 48)"/><path d="M64 34h26M63 44h22M62 54h26" stroke="currentColor" stroke-opacity=".35" stroke-width="2.5" stroke-linecap="round" transform="rotate(9 77 48)"/><rect x="14" y="10" width="54" height="72" rx="8" fill="currentColor"/><rect x="22" y="18" width="38" height="16" rx="3" fill="#fff" opacity=".92"/><path d="M48 26h7" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><g fill="#fff" opacity=".55"><rect x="22" y="41" width="10" height="9" rx="2"/><rect x="36" y="41" width="10" height="9" rx="2"/><rect x="50" y="41" width="10" height="9" rx="2"/><rect x="22" y="54" width="10" height="9" rx="2"/><rect x="36" y="54" width="10" height="9" rx="2"/><rect x="50" y="54" width="10" height="9" rx="2"/><rect x="22" y="67" width="10" height="9" rx="2"/><rect x="36" y="67" width="10" height="9" rx="2"/></g><rect x="50" y="67" width="10" height="9" rx="2" fill="' + Y + '"/>',
  finans: '<path d="M8 34 44 12l36 22z" fill="currentColor"/><circle cx="44" cy="26" r="4" fill="#fff"/><g fill="currentColor" opacity=".55"><rect x="14" y="38" width="9" height="30" rx="2"/><rect x="29" y="38" width="9" height="30" rx="2"/><rect x="44" y="38" width="9" height="30" rx="2"/><rect x="59" y="38" width="9" height="30" rx="2"/></g><rect x="8" y="70" width="72" height="9" rx="2" fill="currentColor"/><g fill="' + Y + '" ' + INK + ' stroke-width="1.8"><ellipse cx="100" cy="74" rx="14" ry="5.5"/><ellipse cx="100" cy="66" rx="14" ry="5.5"/><ellipse cx="100" cy="58" rx="14" ry="5.5"/><ellipse cx="100" cy="50" rx="14" ry="5.5"/></g>',
  lojistik: '<path d="M4 79h112" ' + INK + ' stroke-opacity=".25" stroke-width="2.5" stroke-dasharray="8 6"/><rect x="8" y="24" width="62" height="40" rx="4" fill="currentColor"/><path d="M18 36h42M18 46h28" stroke="#fff" stroke-opacity=".4" stroke-width="3" stroke-linecap="round"/><path d="M70 36h20l14 14v14H70z" fill="currentColor" opacity=".7"/><path d="M76 41h12l9 9H76z" fill="#fff" opacity=".92"/><circle cx="26" cy="68" r="8.5" ' + INKF + '/><circle cx="26" cy="68" r="3" fill="#fff"/><circle cx="88" cy="68" r="8.5" ' + INKF + '/><circle cx="88" cy="68" r="3" fill="#fff"/><rect x="99" y="55" width="6" height="5" rx="1.5" fill="' + Y + '"/>',
  depolama: '<path d="M8 36 60 10l52 26" fill="none" stroke="currentColor" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/><path d="M16 34v46M104 34v46" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="M16 58h88M16 80h88" stroke="currentColor" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><rect x="24" y="40" width="18" height="18" rx="2" fill="currentColor"/><rect x="46" y="46" width="14" height="12" rx="2" fill="currentColor" opacity=".55"/><rect x="74" y="38" width="22" height="20" rx="2" fill="' + Y + '" ' + INK + ' stroke-width="1.8"/><path d="M85 38v7" ' + INK + ' stroke-width="1.8"/><rect x="24" y="64" width="26" height="16" rx="2" fill="currentColor" opacity=".55"/><rect x="54" y="62" width="18" height="18" rx="2" fill="currentColor"/><rect x="78" y="68" width="20" height="12" rx="2" fill="currentColor" opacity=".4"/>',
  denetim: '<rect x="14" y="8" width="54" height="72" rx="5" fill="#fff" stroke="currentColor" stroke-width="3"/><path d="M24 22h34M24 32h34M24 42h22M24 52h28" stroke="currentColor" stroke-opacity=".45" stroke-width="3" stroke-linecap="round"/><circle cx="72" cy="54" r="18" fill="currentColor" fill-opacity=".18" ' + INK + ' stroke-width="5"/><path d="m85 67 16 16" ' + INK + ' stroke-width="7" stroke-linecap="round"/><circle cx="100" cy="20" r="11" fill="' + Y + '"/><path d="m95 20 3.5 3.5L105 17" fill="none" ' + INK + ' stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'
};
const ill = (k, cls) => '<svg class="ill' + (cls ? " " + cls : "") + '" viewBox="0 0 120 90" aria-hidden="true" style="color:var(--c-' + k + ')">' + ILL[k] + "</svg>";

/* ── tarih ── */
const MON = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const MONS = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
const DAYL = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
const DAYS3 = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
const pd = d => new Date(d + "T00:00:00");
const fD = d => { const x = pd(d); return x.getDate() + " " + MON[x.getMonth()] + " " + x.getFullYear(); };
const fDs = d => { const x = pd(d); return x.getDate() + " " + MONS[x.getMonth()]; };
const fDm = d => { const x = pd(d); return x.getDate() + " " + MON[x.getMonth()]; };
const dayName = d => DAYL[pd(d).getDay()];
const today = () => { const n = new Date(); return new Date(n.getFullYear(), n.getMonth(), n.getDate()); };
const until = d => Math.round((pd(d) - today()) / 864e5);
const cdLabel = n => n < 0 ? "Geçti" : n === 0 ? "Bugün" : n === 1 ? "Yarın" : n + " gün kaldı";
const cdClass = n => n < 0 ? "cd past" : n <= 7 ? "cd soon" : "cd";

/* ── veri yardımcıları ── */
const CAT = Object.fromEntries(M.CATS.map(c => [c.k, c]));
const byId = Object.fromEntries(M.ITEMS.map(x => [x.id, x]));
const order = new Map(M.ITEMS.map((x, i) => [x.id, i]));
const sorted = list => list.slice().sort((a, b) => (a.d < b.d ? 1 : a.d > b.d ? -1 : order.get(a.id) - order.get(b.id)));
const ALL = sorted(M.ITEMS);
const inWeek = x => x.d >= M.WEEK.from && x.d <= M.WEEK.to;
const WEEKM = ALL.filter(x => inWeek(x) && x.kind === "m");
const cv = k => "var(--c-" + k + ")";
const c0 = x => x.cat[0];
const NEWFROM = M.DAYS.length > 1 ? M.DAYS[M.DAYS.length - 2].d : M.WEEK.to;
const isNew = x => x.d >= NEWFROM;
const stamp = x => isNew(x) ? '<span class="stamp">Yeni</span>' : "";
const tab = k => '<span class="tab">' + ic(k) + esc(CAT[k].ad) + "</span>";

const chip = (k, link) => (link ? '<a class="chip" href="#kategori-' + k + '"' : '<span class="chip"') + ' style="--c:' + cv(k) + '">' + ic(k) + esc(CAT[k].ad) + (link ? "</a>" : "</span>");
const impP = x => x.kind === "g" ? '<span class="gd">Ekonomi gündemi</span>' : '<span class="imp imp-' + x.imp + '">' + M.IMP[x.imp] + "</span>";
const fig = key => key.old ? "<s>" + esc(key.old) + "</s>" + esc(key.neu) : esc(key.kv);
const figC = key => "fig" + ((key.old ? key.old.length + key.neu.length : key.kv.length) > 12 ? " sm" : "");

function card(x, lead) {
  return '<a class="card' + (lead ? " lead" : "") + '" href="#haber-' + x.id + '" style="--c:' + cv(c0(x)) + '">' +
    '<div class="cover">' + tab(c0(x)) + stamp(x) + (lead ? ill(c0(x), "cill") : "") + '<div class="' + figC(x.key) + '">' + fig(x.key) + '</div><div class="fl">' + esc(x.key.ks) + "</div></div>" +
    '<div class="cbody"><div class="cmeta">' + x.cat.slice(1).map(k => chip(k)).join("") + impP(x) + '<span class="date">' + fDs(x.d) + "</span></div>" +
    "<h3>" + esc(x.title) + "</h3>" + (lead ? '<p class="sp">' + esc(x.spot) + "</p>" : "") + "</div></a>";
}
function row(x) {
  return '<a class="row" href="#haber-' + x.id + '" style="--c:' + cv(c0(x)) + '">' +
    '<span class="rk">' + (x.key.old ? "<s>" + esc(x.key.old) + "</s>" + esc(x.key.neu) : esc(x.key.kv)) + "</span>" +
    '<span><span class="rt">' + esc(x.title) + '</span><span class="rs">' + esc(x.spot) + '</span><span class="rm">' + x.cat.map(k => chip(k)).join("") + impP(x) + '<span class="date">' + fD(x.d) + "</span></span></span>" +
    '<span class="go">' + ic("chev") + "</span></a>";
}
function tile(t) {
  return '<a class="tile" href="#haber-' + t.id + '" style="--c:' + cv(t.c) + '"><span class="k">' + ic(t.c) + esc(CAT[t.c].ad) + '</span><span class="v">' + (t.old ? "<s>" + t.old + "</s>" : "") + esc(t.v) + '</span><span class="l">' + esc(t.l) + "</span></a>";
}
function bars(onHero, active) {
  const cnt = M.DAYS.map(d => WEEKM.filter(x => x.d === d.d).length);
  const max = Math.max.apply(null, cnt);
  return '<div class="bars anim' + (onHero ? " hero-bars" : "") + '" role="group" aria-label="Günlere göre değişiklik sayısı">' +
    M.DAYS.map((d, i) => {
      const n = cnt[i], r = n / max, dt = pd(d.d);
      const lbl = fDm(d.d) + " " + DAYL[dt.getDay()] + ": " + (n ? n + " değişiklik" : "değişiklik yok");
      return '<button type="button" class="bar' + (n === max ? " top" : "") + '" data-day="' + d.d + '" aria-pressed="' + (active === d.d) + '" aria-label="' + lbl + '" title="' + lbl + '">' +
        '<span class="col' + (n ? "" : " zero") + '" style="height:' + (n ? "calc((100% - 46px) * " + r.toFixed(3) + ")" : "6px") + '"><span class="n">' + (n || "") + "</span></span>" +
        '<span class="d"><b>' + dt.getDate() + "</b>" + DAYS3[dt.getDay()] + "</span></button>";
    }).join("") + "</div>";
}
function growBars(root) {
  const b = $(".bars.anim", root);
  if (!b) return;
  if (RM) { b.classList.remove("anim"); return; }
  requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add("go")));
}
function dcard(x) {
  const n = until(x.d), href = x.id ? "#haber-" + x.id : x.u, ext = !x.id;
  return '<a class="dcard" href="' + esc(href) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ' style="--c:' + cv(x.c) + '">' +
    '<span class="dtop"><span class="dday"><b>' + pd(x.d).getDate() + "</b><span>" + MON[pd(x.d).getMonth()] + '</span></span><span class="' + cdClass(n) + '">' + cdLabel(n) + "</span></span>" +
    '<span class="cbar"></span><span class="tt">' + esc(x.t) + (ext ? " " + '<span class="sr">(yeni sekmede açılır)</span>' : "") + '</span><span class="ss">' + esc(x.s) + "</span></a>";
}
function srcGrid(groups) {
  return groups.map(g => '<div class="grp">' + esc(g.g) + '</div><div class="srcs">' + g.items.map(s =>
    '<a class="src" href="' + s[3] + '" target="_blank" rel="noopener"><span class="mono">' + esc(s[0]) + '</span><span><b>' + esc(s[1]) + '</b><span class="sd">' + esc(s[2]) + '</span><span class="dots" aria-label="Takip edilen alanlar: ' + s[4].map(k => CAT[k].ad).join(", ") + '">' + s[4].map(k => '<i style="--c:' + cv(k) + '"></i>').join("") + "</span></span></a>").join("") + "</div>").join("");
}
const sh = (title, sub, more, il) => '<div class="sh' + (il ? " has-ill" : "") + '">' + (il ? '<span class="shill">' + ill(il) + "</span>" : "") + '<div class="sht"><h2>' + title + "</h2>" + (sub ? "<p>" + sub + "</p>" : "") + "</div>" + (more ? '<a class="more" href="' + more[0] + '">' + more[1] + ic("arr") + "</a>" : "") + "</div>";

/* ── ticker ── */
function renderTicker() {
  const items = ALL.slice(0, 10).map(x => '<a href="#haber-' + x.id + '"><b>' + fDs(x.d) + "</b>" + esc(x.title) + "</a>").join("");
  $("#ticker").innerHTML = '<div class="wrap"><span class="lb"><i></i>Son eklenenler</span><div class="tk-view"><div class="tk-track">' + items + '<span aria-hidden="true" style="display:contents">' + items.replace(/<a /g, '<a tabindex="-1" ') + "</span></div></div></div>";
}

/* ── sayfalar ── */
const state = { cat: null, day: null, list: "all", q: "" };

function pageHome() {
  const lead = byId[M.LEAD];
  const lastDay = M.DAYS[M.DAYS.length - 1];
  const archive = M.ARCHIVE_PICKS.map(id => byId[id]);
  const up = M.DATES.filter(x => until(x.d) >= 0);
  const gLead = byId[M.GUMRUK_LEAD];
  const gWeek = ALL.filter(x => inWeek(x) && x.kind !== "g" && (x.cat.includes("gumruk") || x.cat.includes("distic")));
  const tc = byId["tcmb-enflasyon-raporu"], tufe = byId["tufe-ekim"], osb = byId["osb-yesil-donusum"];
  const mx = Math.max.apply(null, tc.chart.rows.map(r => Math.max(r[1], r[2]))) * 1.18;
  const gch = '<div class="gchart"><div class="gleg"><span><i style="background:var(--line-2)"></i>' + tc.chart.a + '</span><span><i style="background:var(--c-distic)"></i>' + tc.chart.b + "</span></div>" +
    '<div class="gplot">' + tc.chart.rows.map(r => '<div class="ggrp"><span class="gb a" style="height:' + (r[1] / mx * 100) + '%" title="' + r[0] + " sonu, " + tc.chart.a + ": %" + String(r[1]).replace(".", ",") + '"><span>%' + String(r[1]).replace(".", ",") + '</span></span><span class="gb b" style="height:' + (r[2] / mx * 100) + '%" title="' + r[0] + " sonu, " + tc.chart.b + ": %" + String(r[2]).replace(".", ",") + '"><span>%' + String(r[2]).replace(".", ",") + "</span></span></div>").join("") + "</div>" +
    '<div class="gx">' + tc.chart.rows.map(r => "<span>" + r[0] + " sonu</span>").join("") + "</div></div>";

  return '' +
  '<section class="hero" aria-labelledby="h-hero"><div class="wrap">' +
    '<div><div class="dline"><span class="dd">' + fD(M.WEEK.to) + '</span><span class="dn">' + dayName(M.WEEK.to) + '</span><span class="rg">Resmî Gazete ' + esc(String(lastDay.rg).split(" ")[0]) + '</span></div>' +
      '<h1 id="h-hero">Son 7 günde ' + WEEKM.length + ' mevzuat değişikliği</h1>' +
      '<p class="lede">Sekiz alanda Resmî Gazete\'yi ve kurum duyurularını her sabah tarıyoruz. Ne değişti, kimi etkiliyor, ne yapmalısınız: tek sayfada.</p>' +
      '<div class="btns"><a class="btn btn-y" href="#haber-' + lead.id + '">Manşeti oku' + ic("arr") + '</a><a class="btn btn-o" href="#bu-hafta">Son 7 günün panosu</a></div>' +
      (M.WEEK.updated ? '<p class="upd">Son güncelleme: ' + esc(M.WEEK.updated) + '. Site her sabah yenilenir.</p>' : '') +
    "</div>" +
    '<div class="vstage"><span class="fold f1"></span><span class="fold f2"></span>' +
    '<div class="vframe"><span class="vtab">' + ic("play") + 'Günün özeti</span><video id="hv" muted loop playsinline preload="metadata" poster="media/poster.jpg"' + (RM ? "" : " autoplay") + ' aria-label="Son 7 günün özeti videosu: ' + WEEKM.length + ' değişiklik, öne çıkan rakamlar ve sekiz alan"><source src="media/intro.mp4" type="video/mp4"></video>' +
      '<div class="vctl"><button type="button" id="hvp" aria-label="' + (RM ? "Videoyu oynat" : "Videoyu duraklat") + '">' + ic(RM ? "play" : "pause") + '</button><button type="button" id="hvr" aria-label="Tanıtımı tam ekran yeniden izle">' + ic("replay") + "</button></div></div></div>" +
  "</div>" +
  '<div class="wrap crw"><nav class="catrow" aria-label="Alanlar ve son 7 günün haber sayısı">' + M.CATS.map(c => { const n = ALL.filter(x => inWeek(x) && x.cat.includes(c.k)).length;
    return '<a class="cr" href="#kategori-' + c.k + '" style="--c:' + cv(c.k) + '"><span class="ci">' + ic(c.k) + '</span><span class="ct"><b>' + esc(c.ad) + "</b><small>" + (n ? "Son 7 günde " + n + " haber" : "Bu hafta sakin") + "</small></span></a>"; }).join("") + "</nav></div>" +
  "</section>" +
  '<div class="mkt" aria-label="Piyasa göstergeleri"><div class="wrap">' + M.MARKET.items.map(m => '<span class="it"><span>' + m[0] + "</span><b>" + m[1] + "</b>" + (m[2] ? "<small>" + m[2] + "</small>" : "") + "</span>").join("") + '<span class="asof">' + esc(M.MARKET.asof) + "</span></div></div>" +

  '<section class="sec"><div class="wrap">' + sh("Manşet", "Son 7 günün en geniş etkili değişiklikleri", ["#haberler", "Tüm haberler"]) +
    '<div class="grid-top">' + card(lead, true) + M.TOP.map(id => card(byId[id])).join("") + "</div></div></section>" +

  '<section class="sec band" style="--b:var(--c-gumruk)"><div class="wrap">' + sh("Gümrük ve dış ticaret masası", "Son 7 günde " + gWeek.length + " gelişme: tebliğler, genelgeler, GGM yazıları ve AB kararları", ["#kategori-gumruk", "Tüm gümrük haberleri"], "gumruk") +
    '<div class="gdesk">' + card(gLead, true) + '<div class="glist">' + gWeek.filter(x => x !== gLead).slice(0, 9).map(x => '<a class="gli" href="#haber-' + x.id + '" style="--c:' + cv(c0(x)) + '"><span class="gk">' + (x.key.old ? esc(x.key.neu) : esc(x.key.kv)) + '</span><span class="gt">' + esc(x.title) + '</span><span class="gm"><span class="date">' + fDs(x.d) + "</span>" + impP(x) + "</span></a>").join("") + "</div></div></div></section>" +

  '<section class="sec band" style="--b:var(--c-distic)"><div class="wrap">' + sh("Son 7 günün panosu", "Değişikliklerin günlere dağılımı", ["#bu-hafta", "Panoya git"]) +
    '<div class="wband"><div><div class="wbig"><b>' + WEEKM.length + "</b><span>mevzuat<br>değişikliği</span></div>" +
    '<p class="wsub">' + M.WEEK.rgCount + " Resmî Gazete sayısı, " + M.WEEK.kurumCount + " kurum ve " + M.WEEK.srcCount + " kaynak tarandı." + (M.WEEK.note ? " " + esc(M.WEEK.note) : "") + "</p>" +
    '<div class="tiles t2">' + M.TILES.map(tile).join("") + "</div></div>" +
    "<div><p class=\"bars-cap\">Günlere göre değişiklik sayısı</p>" + bars(false) + "</div></div></div></section>" +

  '<section class="sec"><div class="wrap">' + sh("Alanlara göre", "Sekiz alanın son haberleri") +
    '<div class="cats">' + M.CATS.map(c => {
      const list = ALL.filter(x => x.cat.includes(c.k));
      return '<article class="catblk" style="--c:' + cv(c.k) + '"><header><div class="chd"><h3><a href="#kategori-' + c.k + '">' + esc(c.ad) + "</a></h3><small>" + list.length + " haber, son 7 günde " + list.filter(inWeek).length + "</small></div>" + ill(c.k, "kill") + "</header><ul>" +
        list.slice(0, 3).map(x => '<li><a href="#haber-' + x.id + '"><span class="t">' + esc(x.title) + '</span><span class="m"><span class="date">' + fDs(x.d) + "</span>" + impP(x) + "</span></a></li>").join("") +
        '</ul><a class="more all" href="#kategori-' + c.k + '">' + esc(c.ad) + " haberleri" + ic("arr") + "</a></article>";
    }).join("") + "</div></div></section>" +

  '<section class="sec band" style="--b:var(--c-finans)"><div class="wrap">' + sh("Ekonomi gündemi", "Mevzuatın arka planındaki rakamlar", null, "finans") +
    '<div class="eco"><a class="panel" href="#haber-' + tc.id + '">' + chip("finans") + "<h3>" + esc(tc.title) + "</h3><p>" + esc(tc.spot) + "</p>" + gch + "</a>" +
    '<div style="display:grid;gap:18px"><a class="panel" href="#haber-' + tufe.id + '">' + chip("finans") + '<div class="big">%29,77</div><h3>' + esc(tufe.title) + "</h3><p>Aylık %2,58; 12 aylık ortalama %31,23.</p></a>" +
    '<a class="panel" href="#haber-' + osb.id + '">' + chip("finans") + "<h3>" + esc(osb.title) + "</h3><p>" + esc(osb.spot) + "</p></a></div></div></div></section>" +

  '<section class="sec"><div class="wrap">' + sh("Önceki haftalardan", "Hâlâ gündemde olan düzenlemeler", ["#haberler", "Arşive git"]) +
    '<div class="grid-3">' + archive.map(x => card(x)).join("") + "</div></div></section>" +

  '<section class="sec band" style="--b:var(--signal)"><div class="wrap">' + sh("Yaklaşan tarihler", "Kaçırılmaması gereken son günler", ["#takvim", "Takvimin tamamı"]) +
    '<div class="drow">' + up.map(dcard).join("") + "</div></div></section>" +

  '<section class="sec"><div class="wrap">' + sh("Kaynak ağı", "Her gün taranan resmî kaynaklar", ["#kaynaklar", "Tüm kaynaklar"]) +
    srcGrid([M.SOURCES[0]]).replace('<div class="grp">Resmî kaynaklar</div>', "") + "</div></section>" +

  '<section class="sec"><div class="wrap"><div class="duo">' +
    '<div class="partner"><span class="seal" aria-hidden="true">UÇ</span><small>Eğitim ortağı</small><h3>Gümrük Koçu - Ufuk Çetintaş</h3><p>Gümrük mevzuatı ve gümrük müşavirliği sınavlarına hazırlık eğitimleri.</p></div>' +
    newsletter() + "</div></div></section>";
}

function newsletter() {
  return '<div class="nl"><h3>Günlük bülten</h3><p>Her sabah, son 7 günün değişiklikleri ve yaklaşan tarihler e-postanızda.</p>' +
    '<form id="nlf" novalidate><label class="sr" for="nle">E-posta adresi</label><input id="nle" type="email" placeholder="ornek@firma.com.tr" autocomplete="email"><button type="submit">Abone ol</button></form><div class="msg" id="nlm" role="status" aria-live="polite"></div></div>';
}

function pageWeek() {
  const f = state.cat, d = state.day;
  const pool = ALL.filter(inWeek);
  const counts = Object.fromEntries(M.CATS.map(c => [c.k, pool.filter(x => x.cat.includes(c.k)).length]));
  const vis = pool.filter(x => (!f || x.cat.includes(f)) && (!d || x.d === d));
  const nM = vis.filter(x => x.kind === "m").length, nD = vis.filter(x => x.kind === "d").length, nG = vis.filter(x => x.kind === "g").length;
  let status = (f || d)
    ? (vis.length ? vis.length + " haber gösteriliyor" + (f ? ", alan: " + CAT[f].ad : "") + (d ? ", gün: " + fDm(d) : "") + "." : "Bu seçimle eşleşen haber yok.")
    : nM + " mevzuat değişikliği, " + nD + " kurum duyurusu ve " + nG + " ekonomi gündemi haberi.";
  let feed = "";
  const days = M.DAYS.slice().reverse().filter(x => !d || x.d === d);
  days.forEach(day => {
    const its = vis.filter(x => x.d === day.d);
    if (!its.length && (f)) return;
    feed += '<div class="day"><div class="dayh"><h3>' + fDm(day.d) + ", " + dayName(day.d) + '</h3><span class="rg">Resmî Gazete ' + day.rg + '</span><span class="ln"></span></div>' +
      (its.length ? '<div class="rows">' + its.map(row).join("") + "</div>" : '<div class="emptyday">' + esc(day.note || "Takip alanlarına giren düzenleme yayımlanmadı.") + "</div>") + "</div>";
  });
  if (f && !vis.length) {
    const last = ALL.find(x => x.cat.includes(f));
    feed = '<div class="empty" style="margin-top:20px">Son 7 günde ' + esc(CAT[f].ad) + " alanında değişiklik yayımlanmadı." + (last ? ' Bu alandaki son haber: <a href="#haber-' + last.id + '">' + esc(last.title) + "</a> (" + fD(last.d) + ")." : "") + "</div>";
  }
  return '' +
  '<section class="whead"><div class="wrap"><div><span class="pill">' + ic("cal") + M.WEEK.label + "</span><h1>Son 7 günün panosu</h1><p>" + M.WEEK.rgCount + " Resmî Gazete sayısı, " + M.WEEK.kurumCount + " kurum ve " + M.WEEK.srcCount + ' kaynak tarandı. Bir güne tıklayarak o günün değişikliklerini süzebilirsiniz.</p><div class="wbig" style="margin-top:22px"><b>' + WEEKM.length + "</b><span>mevzuat<br>değişikliği</span></div></div>" +
  "<div>" + bars(true, d) + "</div></div></section>" +
  '<section class="sec" style="padding-top:28px"><div class="wrap"><div class="tiles">' + M.TILES.map(tile).join("") + "</div></div></section>" +
  '<section class="sec" style="padding-top:30px"><div class="wrap"><div class="filters" role="group" aria-label="Alana göre süz">' +
    '<button type="button" class="fbtn" data-cat="" aria-pressed="' + (!f) + '">Tümü <small>' + pool.length + "</small></button>" +
    M.CATS.map(c => '<button type="button" class="fbtn" data-cat="' + c.k + '" aria-pressed="' + (f === c.k) + '" style="--c:' + cv(c.k) + '">' + ic(c.k) + esc(c.ad) + " <small>" + counts[c.k] + "</small></button>").join("") +
    (d ? '<button type="button" class="fbtn" data-clearday="1" aria-pressed="true">' + fDm(d) + " ×</button>" : "") +
  '</div><p class="status" role="status" aria-live="polite">' + status + "</p>" + feed + "</div></section>" +
  '<section class="sec"><div class="wrap">' + sh("Yaklaşan tarihler", "", ["#takvim", "Takvimin tamamı"]) + '<div class="drow">' + M.DATES.filter(x => until(x.d) >= 0).map(dcard).join("") + "</div></div></section>";
}

function pageList() {
  const q = state.q.trim().toLocaleLowerCase("tr");
  const L = state.list;
  const match = x => !q || (x.title + " " + x.spot + " " + x.kurum + " " + x.tur + " " + x.cat.map(k => CAT[k].ad).join(" ") + " " + (x.body || []).join(" ")).toLocaleLowerCase("tr").includes(q);
  const pass = x => L === "all" || (L === "gundem" ? x.kind === "g" : x.cat.includes(L));
  const vis = ALL.filter(x => pass(x) && match(x));
  const btn = (k, label, n, c) => '<button type="button" class="fbtn" data-list="' + k + '" aria-pressed="' + (L === k) + '"' + (c ? ' style="--c:' + cv(c) + '"' : "") + ">" + (c ? ic(c) : "") + label + " <small>" + n + "</small></button>";
  return '<section class="phead"><div class="wrap"><nav class="crumb" aria-label="Konum"><a href="#ana">Ana sayfa</a>' + ic("chev") + '<span>Tüm haberler</span></nav><h1>Tüm haberler</h1><p>' + M.ITEMS.length + " haber, en yeniden eskiye. Son 7 günün değişiklikleri ve önceki haftalardan hâlâ gündemde olan düzenlemeler.</p></div></section>" +
    '<section class="sec" style="padding-top:22px"><div class="wrap"><div class="filters" role="group" aria-label="Alana göre süz">' +
    btn("all", "Tümü", M.ITEMS.length) + M.CATS.map(c => btn(c.k, esc(c.ad), M.ITEMS.filter(x => x.cat.includes(c.k)).length, c.k)).join("") + btn("gundem", "Ekonomi gündemi", M.ITEMS.filter(x => x.kind === "g").length) +
    '</div><p class="status" role="status" aria-live="polite">' + (q ? "“" + esc(state.q.trim()) + "” için " : "") + vis.length + " haber" + "</p>" +
    (vis.length ? '<div class="lrows">' + vis.map(row).join("") + "</div>" : '<div class="empty">Aramanızla eşleşen haber yok. <a href="#haberler" id="clearq">Aramayı temizleyin</a> ya da başka bir alan seçin.</div>') +
    "</div></section>";
}

function pageCat(k) {
  const c = CAT[k];
  if (!c) return pageHome();
  const list = ALL.filter(x => x.cat.includes(k));
  const wk = list.filter(inWeek), old = list.filter(x => !inWeek(x));
  return '<section class="phead" style="--c:' + cv(k) + '"><div class="wrap"><nav class="crumb" aria-label="Konum"><a href="#ana">Ana sayfa</a>' + ic("chev") + '<a href="#haberler">Tüm haberler</a>' + ic("chev") + "<span>" + esc(c.ad) + "</span></nav>" +
    '<h1><span class="cdot">' + ic(k) + "</span>" + esc(c.ad) + "</h1><p>" + list.length + " haber. " + (wk.length ? "Son 7 günde " + wk.length + " gelişme var." : "Son 7 günde bu alanda değişiklik yayımlanmadı; aşağıda son düzenlemeler yer alıyor.") + "</p></div></section>" +
    (wk.length ? '<section class="sec" style="padding-top:26px"><div class="wrap">' + sh("Son 7 gün", M.WEEK.label) + '<div class="grid-3">' + wk.map(x => card(x)).join("") + "</div></div></section>" : "") +
    (old.length ? '<section class="sec"><div class="wrap">' + sh("Önceki haberler", "") + '<div class="lrows">' + old.map(row).join("") + "</div></div></section>" : "") +
    '<section class="sec"><div class="wrap">' + sh("Diğer alanlar", "") + '<div class="chips">' + M.CATS.filter(o => o.k !== k).map(o => chip(o.k, true)).join("") + "</div></div></section>";
}

function pageArticle(id) {
  const x = byId[id];
  if (!x) return pageHome();
  const k = c0(x);
  const idx = ALL.indexOf(x), prev = ALL[idx + 1], next = ALL[idx - 1];
  const rel = ALL.filter(o => o !== x && o.cat.some(c => x.cat.includes(c))).slice(0, 3);
  const same = ALL.filter(o => o !== x && o.cat.includes(k) && !rel.includes(o)).slice(0, 4);
  const t0 = today();
  let nowMarked = false;
  const tl = (x.dates || []).map(dd => {
    let cls = "";
    if (!nowMarked && pd(dd[0]) >= t0) { cls = ' class="now"'; nowMarked = true; }
    return "<li" + cls + "><b>" + fD(dd[0]) + "</b><span>" + esc(dd[1]) + (until(dd[0]) >= 0 ? " (" + cdLabel(until(dd[0])).toLocaleLowerCase("tr") + ")" : "") + "</span></li>";
  }).join("");
  let chart = "";
  if (x.chart) {
    const mx = Math.max.apply(null, x.chart.rows.map(r => Math.max(r[1], r[2]))) * 1.18;
    chart = '<div class="box" style="margin:20px 0 6px"><h3>' + esc(x.chart.cap) + '</h3><div class="gchart" style="margin-top:6px"><div class="gleg"><span><i style="background:var(--line-2)"></i>' + x.chart.a + '</span><span><i style="background:var(--c-distic)"></i>' + x.chart.b + '</span></div><div class="gplot">' +
      x.chart.rows.map(r => '<div class="ggrp"><span class="gb a" style="height:' + (r[1] / mx * 100) + '%" title="' + r[0] + " sonu, " + x.chart.a + ": %" + String(r[1]).replace(".", ",") + '"><span>%' + String(r[1]).replace(".", ",") + '</span></span><span class="gb b" style="height:' + (r[2] / mx * 100) + '%" title="' + r[0] + " sonu, " + x.chart.b + ": %" + String(r[2]).replace(".", ",") + '"><span>%' + String(r[2]).replace(".", ",") + "</span></span></div>").join("") +
      '</div><div class="gx">' + x.chart.rows.map(r => "<span>" + r[0] + " sonu</span>").join("") + "</div></div></div>";
  }
  const tbl = x.tbl ? '<div class="tblw"><table class="tbl">' + (x.tbl.cap ? "<caption>" + esc(x.tbl.cap) + "</caption>" : "") + "<thead><tr>" + x.tbl.h.map(h => '<th scope="col">' + esc(h) + "</th>").join("") + "</tr></thead><tbody>" + x.tbl.r.map(r => "<tr>" + r.map(c => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>" : "";
  return '<article class="art" style="--c:' + cv(k) + '"><div class="wrap">' +
    '<nav class="crumb" aria-label="Konum"><a href="#ana">Ana sayfa</a>' + ic("chev") + '<a href="#kategori-' + k + '">' + esc(CAT[k].ad) + "</a>" + ic("chev") + "<span>" + (x.kind === "g" ? "Ekonomi gündemi" : "Mevzuat") + "</span></nav>" +
    '<header class="ahead"><div class="tags">' + x.cat.map(c => chip(c, true)).join("") + impP(x) + "</div>" +
      "<h1>" + esc(x.title) + '</h1><p class="spot">' + esc(x.spot) + "</p>" +
      '<div class="ameta"><span>Yayım <b>' + fD(x.d) + "</b></span><span>Kurum <b>" + esc(x.kurum) + "</b></span><span>Tür <b>" + esc(x.tur) + "</b></span>" + (x.rg ? "<span>Resmî Gazete <b>" + x.rg + "</b></span>" : "") +
      '<button type="button" id="copy">' + ic("link") + "Bağlantıyı kopyala</button></div></header>" +
    '<div class="keyband"><div class="ktop">' + tab(k) + stamp(x) + '</div><div class="kmain"><div class="' + figC(x.key) + '">' + fig(x.key) + '</div><div class="kl">' + esc(x.key.ks) + "</div></div>" + ill(k, "kbill") + "</div>" +
    '<div class="agrid"><div class="prose">' +
      "<h2>" + (x.kind === "g" ? "Ayrıntılar" : "Ne değişti?") + "</h2>" + x.body.map(p => "<p>" + esc(p) + "</p>").join("") + chart + tbl +
      (x.warn ? '<div class="warn">' + ic("alert") + "<div><b>Dikkat</b>" + esc(x.warn) + "</div></div>" : "") +
      "<h2>Kimleri etkiliyor?</h2><div class=\"who\">" + x.who.map(w => "<span>" + ic("user") + esc(w) + "</span>").join("") + "</div>" +
      (x.todo && x.todo.length ? '<h2>Ne yapmalısınız?</h2><ul class="todo" id="todo">' + x.todo.map((t, i) => '<li><label><input type="checkbox" data-i="' + i + '"><span>' + esc(t) + "</span></label></li>").join("") + '</ul><p class="prog" id="prog">' + x.todo.length + " adımdan 0 tamamlandı.</p>" : "") +
      '<h2>Kaynaklar</h2><ul class="srclist">' + x.src.map(s => '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + ic("ext") + esc(s[0]) + '<span class="sr"> (yeni sekmede açılır)</span></a></li>').join("") + "</ul>" +
    "</div>" +
    '<aside class="aside" aria-label="Haber künyesi"><div class="box"><h3>Künye</h3><dl class="dl"><dt>Kurum</dt><dd>' + esc(x.kurum) + "</dd><dt>Tür</dt><dd>" + esc(x.tur) + "</dd><dt>Yayım</dt><dd>" + fD(x.d) + "</dd>" + (x.rg ? "<dt>Resmî Gazete</dt><dd>Sayı " + x.rg + "</dd>" : "") + "<dt>" + (x.kind === "g" ? "Tarih" : "Yürürlük") + "</dt><dd>" + esc(x.yur) + "</dd><dt>Etki</dt><dd>" + (x.kind === "g" ? "Ekonomi gündemi" : M.IMP[x.imp]) + "</dd></dl></div>" +
      (tl ? '<div class="box"><h3>Önemli tarihler</h3><ul class="tl">' + tl + "</ul></div>" : "") +
      (same.length ? '<div class="box"><h3>' + esc(CAT[k].ad) + ' alanında</h3><ul class="mini">' + same.map(o => '<li><a href="#haber-' + o.id + '">' + esc(o.title) + "<small>" + fD(o.d) + "</small></a></li>").join("") + "</ul></div>" : "") +
    "</aside></div></div></article>" +
    (rel.length ? '<section class="sec"><div class="wrap">' + sh("İlgili haberler", "") + '<div class="grid-3">' + rel.map(o => card(o)).join("") + "</div></div></section>" : "") +
    '<section class="sec"><div class="wrap"><nav class="pn" aria-label="Önceki ve sonraki haber">' +
      (prev ? '<a href="#haber-' + prev.id + '"><small>Önceki haber</small><b>' + esc(prev.title) + "</b></a>" : "<span></span>") +
      (next ? '<a class="nx" href="#haber-' + next.id + '"><small>Sonraki haber</small><b>' + esc(next.title) + "</b></a>" : "<span></span>") +
    "</nav></div></section>";
}

function pageTakvim() {
  const months = {};
  M.DATES.forEach(x => { const m = pd(x.d); const key = MON[m.getMonth()] + " " + m.getFullYear(); (months[key] = months[key] || []).push(x); });
  return '<section class="phead"><div class="wrap"><nav class="crumb" aria-label="Konum"><a href="#ana">Ana sayfa</a>' + ic("chev") + '<span>Takvim</span></nav><h1>Yaklaşan tarihler</h1><p>Yürürlük tarihleri, son başvuru günleri ve ilanlar. Her tarih, ayrıntısını anlatan habere bağlanır.</p></div></section>' +
    Object.keys(months).map(m => '<section class="sec" style="padding-top:26px"><div class="wrap">' + sh(m, "") + '<div class="grid-3">' + months[m].map(dcard).join("") + "</div></div></section>").join("");
}

function pageKaynak() {
  return '<section class="phead"><div class="wrap"><nav class="crumb" aria-label="Konum"><a href="#ana">Ana sayfa</a>' + ic("chev") + '<span>Kaynaklar</span></nav><h1>Kaynak ağı</h1><p>Haberler bu resmî kaynaklardan ve meslek kuruluşlarından derlenir. Her haberin altında kullanılan kaynakların bağlantıları yer alır. Renkli noktalar, kaynağın hangi alanlar için tarandığını gösterir.</p></div></section>' +
    '<section class="sec" style="padding-top:26px"><div class="wrap">' + srcGrid(M.SOURCES) + "</div></section>";
}

/* ── yönlendirme ── */
function route() {
  let h = (location.hash || "#ana").slice(1);
  if (h === "hafta") h = "bu-hafta";
  if (h === "takvim" || h === "kaynaklar" || h === "haberler" || h === "bu-hafta" || h === "ana") return { r: h };
  if (h.indexOf("haber-") === 0) return { r: "haber", id: h.slice(6) };
  if (h.indexOf("kategori-") === 0) return { r: "kategori", k: h.slice(9) };
  return { r: "ana" };
}
let lastKey = "";
function render(keepScroll) {
  const R = route();
  const main = $("#icerik");
  let html, title = "Mevzuat Habercisi";
  if (R.r === "bu-hafta") { html = pageWeek(); title = "Son 7 günün panosu, " + M.WEEK.label + " | Mevzuat Habercisi"; }
  else if (R.r === "haberler") { html = pageList(); title = "Tüm haberler | Mevzuat Habercisi"; }
  else if (R.r === "takvim") { html = pageTakvim(); title = "Yaklaşan tarihler | Mevzuat Habercisi"; }
  else if (R.r === "kaynaklar") { html = pageKaynak(); title = "Kaynak ağı | Mevzuat Habercisi"; }
  else if (R.r === "kategori" && CAT[R.k]) { html = pageCat(R.k); title = CAT[R.k].ad + " haberleri | Mevzuat Habercisi"; }
  else if (R.r === "haber" && byId[R.id]) { html = pageArticle(R.id); title = byId[R.id].title + " | Mevzuat Habercisi"; }
  else { html = pageHome(); title = "Mevzuat Habercisi | Gümrük, dış ticaret, vergi ve finansman mevzuatı"; }
  main.innerHTML = html;
  document.title = title;
  const navKey = R.r === "haber" || R.r === "kategori" ? "" : R.r;
  $$(".nav a").forEach(a => a.getAttribute("data-r") === navKey ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  const key = location.hash;
  if (!keepScroll && key !== lastKey) { window.scrollTo(0, 0); try { main.focus({ preventScroll: true }); } catch (e) {} }
  lastKey = key;
  growBars(main);
  wire(R);
}

function wire(R) {
  const hv = $("#hv");
  if (hv) {
    const btn = $("#hvp");
    const sync = () => { const p = hv.paused; btn.innerHTML = ic(p ? "play" : "pause"); btn.setAttribute("aria-label", p ? "Videoyu oynat" : "Videoyu duraklat"); };
    btn.addEventListener("click", () => { if (hv.paused) { const pr = hv.play(); if (pr && pr.catch) pr.catch(() => {}); } else hv.pause(); });
    hv.addEventListener("play", sync); hv.addEventListener("pause", sync);
    $("#hvr").addEventListener("click", () => showSplash(true));
    if (!RM) { const pr = hv.play(); if (pr && pr.catch) pr.catch(() => sync()); }
  }
  $$(".bar[data-day]").forEach(b => b.addEventListener("click", () => {
    const d = b.getAttribute("data-day");
    if (R.r === "bu-hafta") { state.day = state.day === d ? null : d; render(true); }
    else { state.day = d; state.cat = null; location.hash = "#bu-hafta"; }
  }));
  $$(".fbtn[data-cat]").forEach(b => b.addEventListener("click", () => { state.cat = b.getAttribute("data-cat") || null; render(true); }));
  $$(".fbtn[data-clearday]").forEach(b => b.addEventListener("click", () => { state.day = null; render(true); }));
  $$(".fbtn[data-list]").forEach(b => b.addEventListener("click", () => { state.list = b.getAttribute("data-list"); render(true); }));
  const cq = $("#clearq");
  if (cq) cq.addEventListener("click", e => { e.preventDefault(); state.q = ""; state.list = "all"; $("#q").value = ""; render(true); });
  const nl = $("#nlf");
  if (nl) nl.addEventListener("submit", e => {
    e.preventDefault();
    const v = $("#nle").value.trim(), m = $("#nlm");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { m.textContent = "Geçerli bir e-posta adresi yazın, örneğin ad@firma.com.tr."; return; }
    m.textContent = "Teşekkürler. Bu önizlemede kayıt tutulmuyor; site yayına alındığında abonelik bu formdan yapılacak.";
  });
  const cp = $("#copy");
  if (cp) cp.addEventListener("click", () => copyLink(location.href));
  const td = $("#todo");
  if (td) td.addEventListener("change", () => {
    const all = $$("input", td), n = all.filter(i => i.checked).length;
    $("#prog").textContent = all.length + " adımdan " + n + " tamamlandı.";
  });
}

function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.h); toast.h = setTimeout(() => el.classList.remove("on"), 2200); }
function copyLink(u) {
  const ok = () => toast("Bağlantı kopyalandı");
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(u).then(ok, fallback); return; }
  } catch (e) {}
  fallback();
  function fallback() {
    try { const ta = document.createElement("textarea"); ta.value = u; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); const r = document.execCommand("copy"); ta.remove(); toast(r ? "Bağlantı kopyalandı" : "Kopyalanamadı; adres çubuğundan kopyalayın"); }
    catch (e) { toast("Kopyalanamadı; adres çubuğundan kopyalayın"); }
  }
}

/* ── arama ── */
const qi = $("#q");
qi.addEventListener("input", () => {
  state.q = qi.value;
  if (route().r !== "haberler") { state.list = "all"; location.hash = "#haberler"; }
  else render(true);
});
qi.addEventListener("keydown", e => { if (e.key === "Escape") { qi.value = ""; state.q = ""; if (route().r === "haberler") render(true); } });

/* ── giriş videosu ── */
const sp = $("#splash"), sv = $("#sv"), sbar = $("#sbar");
let raf = 0, splashOn = false, lastFocus = null;
function seen() { try { return sessionStorage.getItem("mh-intro") === "1"; } catch (e) { return false; } }
function markSeen() { try { sessionStorage.setItem("mh-intro", "1"); } catch (e) {} }
function tickBar() { if (!splashOn) return; if (sv.duration) sbar.style.transform = "scaleX(" + Math.min(1, sv.currentTime / sv.duration) + ")"; raf = requestAnimationFrame(tickBar); }
function showSplash(force) {
  if (!force && (RM || seen())) return;
  splashOn = true; lastFocus = document.activeElement;
  sp.hidden = false; sp.classList.remove("out"); document.body.classList.add("locked");
  const hv = $("#hv"); if (hv) hv.pause();
  try { sv.currentTime = 0; } catch (e) {}
  const pr = sv.play();
  if (pr && pr.catch) pr.catch(() => hideSplash());
  $("#skip").focus();
  raf = requestAnimationFrame(tickBar);
  clearTimeout(showSplash.t);
  showSplash.t = setTimeout(() => { if (splashOn && sv.currentTime < 0.05) hideSplash(); }, 3500);
}
function hideSplash() {
  if (!splashOn) return;
  splashOn = false; markSeen(); cancelAnimationFrame(raf);
  sp.classList.add("out"); document.body.classList.remove("locked");
  setTimeout(() => { sp.hidden = true; sv.pause(); }, 460);
  const hv = $("#hv"); if (hv && !RM) { const pr = hv.play(); if (pr && pr.catch) pr.catch(() => {}); }
  if (lastFocus && lastFocus.focus && lastFocus !== document.body) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
}
sv.addEventListener("ended", hideSplash);
sv.addEventListener("error", hideSplash);
$("#skip").addEventListener("click", hideSplash);
document.addEventListener("keydown", e => { if (splashOn && (e.key === "Escape" || e.key === "Enter")) { e.preventDefault(); hideSplash(); } if (splashOn && e.key === "Tab") { e.preventDefault(); $("#skip").focus(); } });

/* ── başlat ── */
renderTicker();
window.addEventListener("hashchange", () => render(false));
render(false);
if (route().r === "ana") showSplash(false);
})();
