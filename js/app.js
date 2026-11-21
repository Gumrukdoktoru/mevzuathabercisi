/* mevzuathabercisi.com — arayüz (gazete düzeni) */
(function () {
"use strict";
const M = window.MH, ART = window.MHART;
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const RM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ── ikonlar ── */
const P = {
  arr: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  chev: '<path d="m9 6 6 6-6 6"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  user: '<circle cx="12" cy="8" r="3.6"/><path d="M5 20c.8-3.6 3.6-5.6 7-5.6s6.2 2 7 5.6"/>',
  alert: '<path d="M12 3 2.5 20h19z"/><path d="M12 10v4.5M12 17.3v.2"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
  play: '<path d="M8 5.5v13l11-6.5z"/>'
};
const ic = (k, cls) => '<svg class="ic' + (cls ? " " + cls : "") + '" viewBox="0 0 24 24" aria-hidden="true">' + P[k] + "</svg>";

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

/* ── veri ── */
const CAT = Object.fromEntries(M.CATS.map(c => [c.k, c]));
const byId = Object.fromEntries(M.ITEMS.map(x => [x.id, x]));
const order = new Map(M.ITEMS.map((x, i) => [x.id, i]));
const sorted = list => list.slice().sort((a, b) => (a.d < b.d ? 1 : a.d > b.d ? -1 : order.get(a.id) - order.get(b.id)));
const ALL = sorted(M.ITEMS);
const inWeek = x => x.d >= M.WEEK.from && x.d <= M.WEEK.to;
const WEEKM = ALL.filter(x => inWeek(x) && x.kind === "m");
const cv = k => "var(--c-" + k + ")";
const c0 = x => x.cat[0];
const LASTDAY = M.DAYS[M.DAYS.length - 1];
const NEWFROM = M.DAYS.length > 1 ? M.DAYS[M.DAYS.length - 2].d : M.WEEK.to;
const isNew = x => x.d >= NEWFROM;
const rgNo = d => String(d.rg || "").split(" ")[0];

/* ── parçalar ── */
const href = x => "#haber-" + x.id;
const figTxt = key => key.old ? "<s>" + esc(key.old) + "</s>" + esc(key.neu) : esc(key.kv);
const kc = (x, k) => (k && x.cat.indexOf(k) >= 0) ? k : c0(x);
const badge = (x, sm) => '<span class="badge' + (sm ? " sm" : "") + '"><b>' + figTxt(x.key) + "</b><small>" + esc(x.key.ks) + "</small></span>";
const kick = (x, k) => { k = kc(x, k); return '<a class="kick" style="--c:' + cv(k) + '" href="#kategori-' + k + '">' + esc(CAT[k].ad) + "</a>" + (isNew(x) ? '<span class="new">Yeni</span>' : ""); };
const impP = x => x.kind === "g" ? '<span class="gd">Ekonomi gündemi</span>' : '<span class="imp imp-' + x.imp + '">' + M.IMP[x.imp] + "</span>";
/* Habere özel temsili görseller. Burada adı geçmeyen haberlere alanın
   fotoğraf havuzundan sırayla görsel verilir (media/haber/alan/<alan>-<n>.webp). */
const photos = {
  "ihale-borc-siniri": "kamu-1",
  "sgk-ihale-borc-genelgesi": "kamu-2",
  "deniz-hava-muafiyet-genelgesi": "konteyner-limani",
  "iplik-damping-surdurme": "iplik",
  "dir-kumas-kirpinti-gozetim": "iplik",
  "yabanci-yatirimci-ikamet": "istanbul",
  "ab-soguk-celik-antidamping": "celik",
  "lisansli-depo-tarife": "depo",
  "tio-tehlikeli-madde-cezalari": "nakliye",
  "ncts-ihracat-kapatma": "nakliye",
  "vuk-597-borclu-listesi": "mali-kayit",
  "kdv-beyannamesi-511": "mali-kayit",
  "bm-malvarligi-listesi": "mali-kayit",
  "kgk-surdurulebilirlik-tfrs18": "mali-kayit"
};
/* Alan fotoğraf havuzu: her alanda kaç görsel var. Aynı alandaki haberler
   tarih sırasıyla havuzu dolaşır; böylece yan yana iki haber aynı görseli almaz. */
const POOL = { gumruk: 3, distic: 2, vergi: 3, muhasebe: 3, finans: 3, lojistik: 3, depolama: 3, denetim: 2 };
const poolPhoto = {};
Object.keys(POOL).forEach(k => {
  let i = 0;
  ALL.forEach(x => { if (x.cat.indexOf(k) >= 0 && !photos[x.id]) poolPhoto[k + "|" + x.id] = "alan/" + k + "-" + (i++ % POOL[k] + 1); });
});
const photoOf = (x, k) => photos[x.id] || poolPhoto[k + "|" + x.id] || poolPhoto[c0(x) + "|" + x.id];
function visual(x, k, priority = false) {
  const photo = photoOf(x, k);
  if (!photo) return ART.scene(k, x.id, { label: CAT[k].ad + " için temsili çizim" });
  return '<img class="news-photo" src="media/haber/' + photo + '.webp" alt="" ' +
    (priority ? 'fetchpriority="high"' : 'loading="lazy"') + ' decoding="async">';
}
const art = (x, cls, withBadge, k) => { k = kc(x, k); return '<a class="img' + (cls ? " " + cls : "") + '" href="' + href(x) + '" tabindex="-1" aria-hidden="true" style="--c:' + cv(k) + '">' + visual(x, k, withBadge) + (withBadge ? badge(x) : "") + "</a>"; };
const meta = (x, full) => '<div class="meta"><span>' + (full ? fD(x.d) : fDs(x.d)) + "</span>" + (full ? "<span>" + esc(x.kurum) + "</span>" : "") + impP(x) + "</div>";
const head = (x, tag) => "<" + tag + ' class="hl"><a href="' + href(x) + '">' + esc(x.title) + "</a></" + tag + ">";

const stLead = (x, k) => '<article class="st st-lead">' + art(x, "", true, k) + '<div class="kk">' + kick(x, k) + "</div>" + head(x, "h2") + '<p class="spot">' + esc(x.spot) + "</p>" + meta(x, true) + "</article>";
const stMd = (x, o) => '<article class="st st-md">' + art(x, "", false, o && o.k) + '<div class="kk">' + kick(x, o && o.k) + "</div>" + head(x, "h3") + (o && o.spot ? '<p class="spot">' + esc(x.spot) + "</p>" : "") + meta(x) + "</article>";
const stSm = (x, k) => '<article class="st st-sm"><div class="kk">' + kick(x, typeof k === "string" ? k : null) + "</div>" + head(x, "h3") + meta(x) + "</article>";
const stRow = (x, k) => { k = typeof k === "string" ? k : null; return '<article class="st-row"><div class="txt"><div class="kk">' + kick(x, k) + "</div>" + head(x, "h3") + '<p class="spot">' + esc(x.spot) + "</p>" + meta(x, true) + "</div>" + art(x, "r43", false, k) + "</article>"; };

const sech = (title, sub, more, c) => '<div class="sech"' + (c ? ' style="--c:' + c + '"' : "") + "><div><h2>" + title + "</h2>" + (sub ? "<p>" + sub + "</p>" : "") + "</div>" + (more ? '<a class="more" href="' + more[0] + '">' + more[1] + "</a>" : "") + "</div>";

function dlItem(x, long) {
  const n = until(x.d), h = x.id ? "#haber-" + x.id : x.u, ext = !x.id;
  return '<li><a href="' + esc(h) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ' style="--c:' + cv(x.c) + '"><span class="dd"><b>' + pd(x.d).getDate() + "</b><span>" + MONS[pd(x.d).getMonth()] + '</span></span><span><span class="tt">' + esc(x.t) + "</span>" +
    (long ? '<span class="cd" style="display:block;font-weight:500">' + esc(x.s) + "</span>" : "") + '<span class="cd' + (n <= 7 ? " soon" : "") + '">' + cdLabel(n) + "</span>" + (ext ? '<span class="sr"> (yeni sekmede açılır)</span>' : "") + "</span></a></li>";
}

function bars(active) {
  const cnt = M.DAYS.map(d => WEEKM.filter(x => x.d === d.d).length);
  const max = Math.max(1, Math.max.apply(null, cnt));
  return '<div class="bars anim" role="group" aria-label="Günlere göre değişiklik sayısı">' +
    M.DAYS.map((d, i) => {
      const n = cnt[i], dt = pd(d.d);
      const lbl = fDm(d.d) + " " + DAYL[dt.getDay()] + ": " + (n ? n + " değişiklik" : "değişiklik yok");
      return '<button type="button" class="bar' + (n === max && n ? " top" : "") + '" data-day="' + d.d + '" aria-pressed="' + (active === d.d) + '" aria-label="' + lbl + '" title="' + lbl + '">' +
        '<span class="col' + (n ? "" : " zero") + '" style="height:' + (n ? "calc((100% - 44px) * " + (n / max).toFixed(3) + ")" : "5px") + '"><span class="n">' + (n || "") + "</span></span>" +
        '<span class="d"><b>' + dt.getDate() + "</b>" + DAYS3[dt.getDay()] + "</span></button>";
    }).join("") + "</div>";
}
function growBars(root) {
  const b = $(".bars.anim", root);
  if (!b) return;
  if (RM) { b.classList.remove("anim"); return; }
  requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add("go")));
}
function chartHTML(ch) {
  const mx = Math.max.apply(null, ch.rows.map(r => Math.max(r[1], r[2]))) * 1.18;
  const pc = v => "%" + String(v).replace(".", ",");
  return '<div class="gchart"><div class="gleg"><span><i style="background:var(--rule-2)"></i>' + esc(ch.a) + '</span><span><i style="background:var(--c-distic)"></i>' + esc(ch.b) + "</span></div>" +
    '<div class="gplot">' + ch.rows.map(r => '<div class="ggrp"><span class="gb a" style="height:' + (r[1] / mx * 100) + '%" title="' + r[0] + " sonu, " + esc(ch.a) + ": " + pc(r[1]) + '"><span>' + pc(r[1]) + '</span></span><span class="gb b" style="height:' + (r[2] / mx * 100) + '%" title="' + r[0] + " sonu, " + esc(ch.b) + ": " + pc(r[2]) + '"><span>' + pc(r[2]) + "</span></span></div>").join("") + "</div>" +
    '<div class="gx">' + ch.rows.map(r => "<span>" + r[0] + " sonu</span>").join("") + "</div></div>";
}
function srcGrid(groups) {
  return groups.map(g => '<h2 class="grp">' + esc(g.g) + '</h2><div class="srcs">' + g.items.map(s =>
    '<a class="src" href="' + esc(s[3]) + '" target="_blank" rel="noopener"><span class="mono">' + esc(s[0]) + '</span><span><b>' + esc(s[1]) + '</b><span class="sd">' + esc(s[2]) + '</span><span class="dots" aria-label="Takip edilen alanlar: ' + s[4].map(k => CAT[k] ? CAT[k].ad : k).join(", ") + '">' + s[4].map(k => '<i style="--c:' + cv(k) + '"></i>').join("") + "</span></span></a>").join("") + "</div>").join("");
}
function newsletter() {
  return '<div class="nl"><h3>Günlük bülten</h3><p>Her sabah, günün değişiklikleri ve yaklaşan tarihler e-postanızda.</p>' +
    '<form id="nlf" novalidate><label class="sr" for="nle">E-posta adresi</label><input id="nle" type="email" placeholder="ornek@firma.com.tr" autocomplete="email"><button type="submit">Abone ol</button></form><div class="msg" id="nlm" role="status" aria-live="polite"></div></div>';
}
const crumb = parts => '<nav class="crumb" aria-label="Konum"><a href="#ana">Ana sayfa</a>' + parts.map(p => ic("chev") + (p[1] ? '<a href="' + p[1] + '">' + esc(p[0]) + "</a>" : "<span>" + esc(p[0]) + "</span>")).join("") + "</nav>";

/* ── Bugünün Resmî Gazetesi ── */
function rgPanel() {
  const tracked = M.DAYS.slice().reverse().map(d => ({ d: d, items: ALL.filter(x => x.rg && String(x.rg).split(" ")[0] === rgNo(d)) }));
  const today = tracked[0];
  const lastFull = tracked.find(t => t.items.length);
  const groupOf = x => { const t = String(x.tur || ""); if (/cumhurba/i.test(t)) return "Cumhurbaşkanı kararları"; if (/yönetmelik/i.test(t)) return "Yönetmelikler"; if (/tebliğ/i.test(t)) return "Tebliğler"; if (/genelge/i.test(t)) return "Genelgeler"; if (/karar/i.test(t)) return "Kararlar"; return "Diğer düzenlemeler"; };
  const list = items => {
    const groups = {};
    items.forEach(x => { const g = groupOf(x); (groups[g] = groups[g] || []).push(x); });
    return Object.keys(groups).map(g => '<h3 class="rgh">' + g + '</h3><ul class="rgl">' + groups[g].map(x => '<li style="--c:' + cv(c0(x)) + '"><a href="' + href(x) + '"><span class="rgt">' + esc(x.tur) + '<span class="sr">, ' + esc(CAT[c0(x)].ad) + '</span></span><span class="rgn">' + esc(x.title) + "</span></a></li>").join("") + "</ul>").join("");
  };
  let body;
  if (today.items.length) body = list(today.items) + (today.d.note ? '<p class="rgnote">' + esc(today.d.note) + "</p>" : "");
  else body = '<p class="rgnone">' + esc(today.d.note || "Bugünkü sayıda takip alanlarına giren düzenleme yok.") + "</p>" +
    (lastFull ? '<details><summary class="rgprev">Son düzenleme içeren sayı: ' + fDm(lastFull.d.d) + ", sayı " + esc(rgNo(lastFull.d)) + "</summary>" + list(lastFull.items.slice(0, 4)) + "</details>" : "");
  return '<section class="rgp" aria-labelledby="rg-h"><div class="rgtop"><span class="rgseal" aria-hidden="true">RG</span><div><h2 id="rg-h">Bugünün Resmî Gazetesi</h2><p>' + fD(today.d.d) + ", " + dayName(today.d.d) + "</p></div><span class=\"rgno\">Sayı " + esc(rgNo(today.d)) + "</span></div>" + body +
    '<a class="more rgmore" href="#bu-hafta">Son 7 günün sayıları</a></section>';
}

/* ── sayfalar ── */
const state = { cat: null, day: null, list: "all", q: "" };

function pageHome() {
  const lead = byId[M.LEAD] || ALL[0];
  const tops = M.TOP.map(id => byId[id]).filter(x => x && x !== lead);
  const under = tops.slice(0, 3);
  while (under.length < 3) { const n = ALL.find(x => x !== lead && under.indexOf(x) < 0); if (!n) break; under.push(n); }
  const flow = ALL.filter(x => x !== lead && !under.includes(x)).slice(0, 4);
  const gLead = byId[M.GUMRUK_LEAD] || ALL.find(x => x.cat.includes("gumruk"));
  const gList = ALL.filter(x => inWeek(x) && x.kind !== "g" && x !== gLead && (x.cat.includes("gumruk") || x.cat.includes("distic"))).slice(0, 5);
  const gCount = ALL.filter(x => inWeek(x) && x.kind !== "g" && (x.cat.includes("gumruk") || x.cat.includes("distic"))).length;
  const up = M.DATES.filter(x => until(x.d) >= 0).sort((a, b) => a.d < b.d ? -1 : 1);
  const cats6 = M.CATS.filter(c => c.k !== "gumruk" && c.k !== "distic");
  const gItems = ALL.filter(x => x.kind === "g");
  const chartItem = gItems.find(x => x.chart) || ALL.find(x => x.chart);
  const ecoList = gItems.filter(x => x !== chartItem).slice(0, 3);
  const archive = M.ARCHIVE_PICKS.map(id => byId[id]).filter(Boolean);

  let h = '<div class="wrap"><div class="edition">' +
    '<article class="cover"><a href="' + href(lead) + '"><span class="cover-image" aria-hidden="true">' + visual(lead, c0(lead), true) + '</span>' +
      '<div class="cover-copy"><div class="cover-kind">Haftanın manşeti<span>' + esc(CAT[c0(lead)].ad) + '</span></div>' +
      '<h1>' + esc(lead.title) + '</h1><p>' + esc(lead.spot) + '</p><div class="cover-foot"><time datetime="' + esc(lead.d) + '">' + fD(lead.d) + '</time><span>Haberi oku</span></div></div></a></article>' +
    '<section class="latest"><div class="boxh"><h2>Son eklenenler</h2><a class="more" href="#haberler">Tümü</a></div><ol class="flow">' +
      flow.map(x => '<li><a href="' + href(x) + '" style="--c:' + cv(c0(x)) + '"><span class="flow-meta"><span class="k">' + esc(CAT[c0(x)].ad) + '</span><time datetime="' + x.d + '">' + fDs(x.d) + '</time></span><span class="t">' + esc(x.title) + "</span></a></li>").join("") + "</ol></section>" +
    '<section class="picks"><div class="boxh"><h2>Öne çıkanlar</h2></div><div class="under">' + under.map(x => stMd(x)).join("") + '</div></section>' +
    '<aside class="issue-rail" aria-label="Resmî Gazete ve piyasalar">' + rgPanel() +
      '<details><summary>Piyasa kapanışları</summary><table class="mtab"><tbody>' + M.MARKET.items.map(m => "<tr><td>" + esc(m[0]) + (m[2] ? ' <small style="color:var(--ink-3)">(' + esc(m[2]) + ")</small>" : "") + "</td><td>" + esc(m[1]) + "</td></tr>").join("") + '</tbody></table><p class="mnote">' + esc(M.MARKET.asof) + "</p></details>" +
    "</aside></div></div>";

  if (gLead) h += '<section class="blk wrap">' + sech('<a href="#kategori-gumruk">Gümrük ve dış ticaret</a>', "Son 7 günde " + gCount + " gelişme: tebliğler, genelgeler, GGM yazıları ve AB kararları", ["#kategori-gumruk", "Tüm gümrük haberleri"], cv("gumruk")) +
    '<div class="desk">' + stMd(gLead, { spot: true }) + "<div>" + gList.map(stSm).join("") + "</div>" +
    '<div class="dates"><h3>Yaklaşan tarihler</h3><ul class="dl">' + up.slice(0, 5).map(x => dlItem(x)).join("") + '</ul><p style="margin:10px 0 8px"><a class="more" href="#takvim">Takvimin tamamı</a></p></div></div></section>';

  h += '<section class="blk wrap">' + sech("Haftanın rakamları", M.WEEK.label + ": " + WEEKM.length + " mevzuat değişikliği, " + M.WEEK.rgCount + " Resmî Gazete sayısı", ["#bu-hafta", "Son 7 günün panosu"]) +
    '<div class="nums">' + M.TILES.map(t => '<a class="num" href="#haber-' + t.id + '"><span class="kick" style="--c:' + cv(t.c) + '">' + esc(CAT[t.c].ad) + "</span><b>" + (t.old ? "<s>" + esc(t.old) + "</s>" : "") + esc(t.v) + "</b><span>" + esc(t.l) + "</span></a>").join("") + "</div>" +
    '<div class="week2"><div><div class="wcap"><b>Günlere göre mevzuat değişikliği</b><span>Bir güne dokunun, o günün haberleri açılsın</span></div>' + bars() + "</div>" +
    '<button class="vcard" id="vplay" type="button" aria-label="Günün özeti videosunu tam ekran izle"><img src="media/poster.jpg" alt=""><span class="vp"><i>' + ic("play") + "</i><span><b>Günün özeti videosu</b><small>Son 7 gün, 15 saniyede</small></span></span></button></div></section>";

  const used = new Set([lead, ...under, gLead].filter(Boolean).map(x => x.id));
  h += '<section class="blk wrap"><div class="cgrid">' + cats6.map(c => {
    const list = ALL.filter(x => x.cat.includes(c.k)), wk = list.filter(inWeek).length;
    const top = list.find(x => !used.has(x.id) && c0(x) === c.k) || list.find(x => !used.has(x.id)) || list[0];
    if (top) used.add(top.id);
    const rest = list.filter(x => x !== top).sort((a, b) => (used.has(a.id) ? 1 : 0) - (used.has(b.id) ? 1 : 0) || (a.d < b.d ? 1 : a.d > b.d ? -1 : 0)).slice(0, 3);
    return '<div class="csec">' + sech('<a href="#kategori-' + c.k + '">' + esc(c.ad) + "</a>", wk ? "Son 7 günde " + wk + " haber" : "Son 7 günde haber yok; son düzenlemeler", ["#kategori-" + c.k, "Tümü"], cv(c.k)) +
      (top ? stMd(top, { k: c.k }) + rest.map(x => stSm(x, c.k)).join("") : '<p class="cempty">Bu alanda henüz haber yok.</p>') + "</div>";
  }).join("") + "</div></section>";

  if (chartItem) h += '<section class="blk wrap">' + sech("Ekonomi gündemi", "Mevzuatın arka planındaki rakamlar", ["#haberler", "Tüm haberler"], cv("finans")) +
    '<div class="eco"><a class="chartbox" href="' + href(chartItem) + '" style="--c:' + cv(c0(chartItem)) + '"><span class="kick" style="--c:' + cv(c0(chartItem)) + '">' + esc(CAT[c0(chartItem)].ad) + '</span><h3 class="hl">' + esc(chartItem.title) + "</h3><p>" + esc(chartItem.spot) + "</p>" + (chartItem.chart ? chartHTML(chartItem.chart) : "") + "</a>" +
    "<div>" + ecoList.map(stRow).join("") + "</div></div></section>";

  if (archive.length) h += '<section class="blk wrap">' + sech("Önceki haftalardan", "Hâlâ gündemde olan düzenlemeler", ["#haberler", "Arşiv"]) + '<div class="row4">' + archive.map(x => stMd(x)).join("") + "</div></section>";

  h += '<section class="blk wrap"><div class="duo"><div class="partner"><span class="seal" aria-hidden="true">UÇ</span><div><small>Eğitim ortağı</small><h3>Gümrük Koçu - Ufuk Çetintaş</h3><p>Gümrük mevzuatı ve gümrük müşavirliği sınavlarına hazırlık eğitimleri.</p></div></div>' + newsletter() + "</div></section>";
  return h;
}

function pageWeek() {
  const f = state.cat, d = state.day;
  const pool = ALL.filter(inWeek);
  const counts = Object.fromEntries(M.CATS.map(c => [c.k, pool.filter(x => x.cat.includes(c.k)).length]));
  const vis = pool.filter(x => (!f || x.cat.includes(f)) && (!d || x.d === d));
  const nM = vis.filter(x => x.kind === "m").length, nD = vis.filter(x => x.kind === "d").length, nG = vis.filter(x => x.kind === "g").length;
  const status = (f || d)
    ? (vis.length ? vis.length + " haber gösteriliyor" + (f ? ", alan: " + CAT[f].ad : "") + (d ? ", gün: " + fDm(d) : "") + "." : "Bu seçimle eşleşen haber yok.")
    : nM + " mevzuat değişikliği, " + nD + " kurum duyurusu ve " + nG + " ekonomi gündemi haberi.";
  let feed = "";
  M.DAYS.slice().reverse().filter(x => !d || x.d === d).forEach(day => {
    const its = vis.filter(x => x.d === day.d);
    if (!its.length && f) return;
    feed += '<div class="day"><div class="dayh"><h3>' + fDm(day.d) + ", " + dayName(day.d) + '</h3><span class="rg">Resmî Gazete ' + esc(day.rg) + "</span></div>" +
      (its.length ? its.map(stRow).join("") : '<div class="emptyday">' + esc(day.note || "Takip alanlarına giren düzenleme yayımlanmadı.") + "</div>") + "</div>";
  });
  if (f && !vis.length) {
    const last = ALL.find(x => x.cat.includes(f));
    feed = '<div class="empty" style="margin-top:20px">Son 7 günde ' + esc(CAT[f].ad) + " alanında değişiklik yayımlanmadı." + (last ? ' Bu alandaki son haber: <a href="' + href(last) + '">' + esc(last.title) + "</a> (" + fD(last.d) + ")." : "") + "</div>";
  }
  return '<section class="phead wrap">' + crumb([["Son 7 gün"]]) + '<h1><span class="cb"></span>Son 7 gün</h1><p class="lede">' + M.WEEK.label + ": " + WEEKM.length + " mevzuat değişikliği. " + M.WEEK.rgCount + " Resmî Gazete sayısı, " + M.WEEK.kurumCount + " kurum ve " + M.WEEK.srcCount + " kaynak tarandı." + (M.WEEK.note ? " " + esc(M.WEEK.note) : "") + '</p><div class="hr"></div></section>' +
    '<section class="wrap" style="margin-top:22px"><div class="nums">' + M.TILES.map(t => '<a class="num" href="#haber-' + t.id + '"><span class="kick" style="--c:' + cv(t.c) + '">' + esc(CAT[t.c].ad) + "</span><b>" + (t.old ? "<s>" + esc(t.old) + "</s>" : "") + esc(t.v) + "</b><span>" + esc(t.l) + "</span></a>").join("") + "</div>" +
    '<div style="margin-top:22px"><div class="wcap"><b>Günlere göre mevzuat değişikliği</b><span>Bir güne dokunarak süzün</span></div>' + bars(d) + "</div></section>" +
    '<section class="wrap"><div class="filters" role="group" aria-label="Alana göre süz">' +
      '<button type="button" class="fbtn" data-cat="" aria-pressed="' + (!f) + '">Tümü <small>' + pool.length + "</small></button>" +
      M.CATS.map(c => '<button type="button" class="fbtn" data-cat="' + c.k + '" aria-pressed="' + (f === c.k) + '" style="--c:' + cv(c.k) + '"><i></i>' + esc(c.ad) + " <small>" + counts[c.k] + "</small></button>").join("") +
      (d ? '<button type="button" class="fbtn" data-clearday="1" aria-pressed="true">' + fDm(d) + " ×</button>" : "") +
    '</div><p class="status" role="status" aria-live="polite">' + status + "</p>" + feed + "</section>";
}

function pageList() {
  const q = state.q.trim().toLocaleLowerCase("tr");
  const L = state.list;
  const match = x => !q || (x.title + " " + x.spot + " " + x.kurum + " " + x.tur + " " + x.cat.map(k => CAT[k].ad).join(" ") + " " + (x.body || []).join(" ")).toLocaleLowerCase("tr").includes(q);
  const pass = x => L === "all" || (L === "gundem" ? x.kind === "g" : x.cat.includes(L));
  const vis = ALL.filter(x => pass(x) && match(x));
  const btn = (k, label, n, c) => '<button type="button" class="fbtn" data-list="' + k + '" aria-pressed="' + (L === k) + '"' + (c ? ' style="--c:' + cv(c) + '"' : "") + ">" + (c ? "<i></i>" : "") + label + " <small>" + n + "</small></button>";
  return '<section class="phead wrap">' + crumb([["Tüm haberler"]]) + '<h1><span class="cb"></span>Tüm haberler</h1><p class="lede">' + M.ITEMS.length + ' haber, en yeniden eskiye.</p><div class="hr"></div></section>' +
    '<section class="wrap"><div class="filters" role="group" aria-label="Alana göre süz">' +
    btn("all", "Tümü", M.ITEMS.length) + M.CATS.map(c => btn(c.k, esc(c.ad), M.ITEMS.filter(x => x.cat.includes(c.k)).length, c.k)).join("") + btn("gundem", "Ekonomi gündemi", M.ITEMS.filter(x => x.kind === "g").length) +
    '</div><p class="status" role="status" aria-live="polite">' + (q ? "“" + esc(state.q.trim()) + "” için " : "") + vis.length + " haber</p>" +
    (vis.length ? '<div style="margin-top:6px">' + vis.map(stRow).join("") + "</div>" : '<div class="empty">Aramanızla eşleşen haber yok. <a href="#haberler" id="clearq">Aramayı temizleyin</a> ya da başka bir alan seçin.</div>') +
    "</section>";
}

function pageCat(k) {
  const c = CAT[k];
  const list = ALL.filter(x => x.cat.includes(k));
  const wk = list.filter(inWeek);
  const dts = M.DATES.filter(x => x.c === k && until(x.d) >= 0);
  let h = '<section class="phead wrap" style="--c:' + cv(k) + '">' + crumb([[c.ad]]) + '<h1><span class="cb"></span>' + esc(c.ad) + '</h1><p class="lede">' + list.length + " haber. " + (wk.length ? "Son 7 günde " + wk.length + " gelişme var." : "Son 7 günde bu alanda değişiklik yayımlanmadı; aşağıda son düzenlemeler yer alıyor.") + '</p><div class="hr"></div></section>';
  if (!list.length) return h + '<section class="wrap" style="margin-top:24px"><div class="empty">Bu alanda henüz haber yok.</div></section>';
  h += '<div class="wrap"><div class="front"><div>' + stLead(list[0], k) + (list.length > 1 ? '<div class="under">' + list.slice(1, 4).map(x => stMd(x, { k: k })).join("") + "</div>" : "") + "</div>" +
    '<aside class="side">' + (dts.length ? '<section><div class="boxh"><h2>Bu alanda yaklaşan tarihler</h2></div><ul class="dl">' + dts.map(x => dlItem(x)).join("") + "</ul></section>" : "") +
    '<section><div class="boxh"><h2>Diğer alanlar</h2></div><ul class="mini">' + M.CATS.filter(o => o.k !== k).map(o => '<li><a href="#kategori-' + o.k + '" style="font-family:var(--sans);font-size:15px;display:flex;align-items:center;gap:8px"><span style="width:9px;height:9px;border-radius:2px;background:' + cv(o.k) + '"></span>' + esc(o.ad) + "</a></li>").join("") + "</ul></section></aside></div></div>";
  if (list.length > 4) h += '<section class="blk wrap" style="--c:' + cv(k) + '">' + sech("Daha önceki haberler", "", null, cv(k)) + list.slice(4).map(x => stRow(x, k)).join("") + "</section>";
  return h;
}

function pageArticle(id) {
  const x = byId[id];
  const k = c0(x);
  const idx = ALL.indexOf(x), prev = ALL[idx + 1], next = ALL[idx - 1];
  const rel = ALL.filter(o => o !== x && o.cat.some(c => x.cat.includes(c))).slice(0, 3);
  const same = ALL.filter(o => o !== x && o.cat.includes(k) && rel.indexOf(o) < 0).slice(0, 5);
  const t0 = today();
  let nowMarked = false;
  const tl = (x.dates || []).map(dd => {
    let cls = "";
    if (!nowMarked && pd(dd[0]) >= t0) { cls = ' class="now"'; nowMarked = true; }
    return "<li" + cls + "><b>" + fD(dd[0]) + "</b><span>" + esc(dd[1]) + (until(dd[0]) >= 0 ? " (" + cdLabel(until(dd[0])).toLocaleLowerCase("tr") + ")" : "") + "</span></li>";
  }).join("");
  const tbl = x.tbl ? '<div class="tblw"><table class="tbl">' + (x.tbl.cap ? "<caption>" + esc(x.tbl.cap) + "</caption>" : "") + "<thead><tr>" + x.tbl.h.map(t => '<th scope="col">' + esc(t) + "</th>").join("") + "</tr></thead><tbody>" + x.tbl.r.map(r => "<tr>" + r.map(c => "<td>" + esc(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div>" : "";
  return '<article class="art wrap" style="--c:' + cv(k) + '">' + crumb([[CAT[k].ad, "#kategori-" + k], [x.kind === "g" ? "Ekonomi gündemi" : "Mevzuat"]]) +
    '<div class="agrid"><div>' +
      '<header class="ahead"><div class="tags">' + x.cat.map(c => '<a class="kick" style="--c:' + cv(c) + '" href="#kategori-' + c + '">' + esc(CAT[c].ad) + "</a>").join("") + impP(x) + (isNew(x) ? '<span class="new">Yeni</span>' : "") + "</div>" +
        "<h1>" + esc(x.title) + '</h1><p class="spot">' + esc(x.spot) + "</p></header>" +
      '<div class="ameta"><span>Yayım <b>' + fD(x.d) + "</b></span><span>Kurum <b>" + esc(x.kurum) + "</b></span>" +
        '<div class="article-actions"><button type="button" id="sources-jump">Kaynakları gör</button><button type="button" id="copy">' + ic("link") + "Bağlantıyı kopyala</button></div></div>" +
      '<figure class="hero-img"><span class="img">' + visual(x, k, true) + badge(x) + "</span><figcaption>" + (photoOf(x, k) ? "Yapay zekâ ile oluşturulmuş temsili görsel." : "Temsili çizim.") + "</figcaption></figure>" +
      '<div class="prose">' +
        "<h2>" + (x.kind === "g" ? "Ayrıntılar" : "Ne değişti?") + "</h2>" + x.body.map(p => "<p>" + esc(p) + "</p>").join("") +
        (x.chart ? '<div style="font-family:var(--sans);margin:10px 0 24px"><b style="font-size:15px">' + esc(x.chart.cap || "") + "</b>" + chartHTML(x.chart) + "</div>" : "") + tbl +
        (x.warn ? '<div class="warn">' + ic("alert") + "<div><b>Dikkat</b>" + esc(x.warn) + "</div></div>" : "") +
        "<h2>Kimleri etkiliyor?</h2>" + '<div class="who">' + x.who.map(w => "<span>" + ic("user") + esc(w) + "</span>").join("") + "</div>" +
        (x.todo && x.todo.length ? '<h2>Ne yapmalısınız?</h2><ul class="todo" id="todo">' + x.todo.map((t, i) => '<li><label><input type="checkbox" data-i="' + i + '"><span>' + esc(t) + "</span></label></li>").join("") + '</ul><p class="prog" id="prog">' + x.todo.length + " adımdan 0 tamamlandı.</p>" : "") +
        '<h2 id="article-sources" tabindex="-1">Kaynaklar</h2><ul class="srclist">' + x.src.map(s => '<li><a href="' + esc(s[1]) + '" target="_blank" rel="noopener">' + ic("ext") + esc(s[0]) + '<span class="sr"> (yeni sekmede açılır)</span></a></li>').join("") + "</ul>" +
      "</div></div>" +
      '<aside class="aside" aria-label="Haber künyesi"><div class="abox"><h3>Künye</h3><dl class="kv"><dt>Kurum</dt><dd>' + esc(x.kurum) + "</dd><dt>Tür</dt><dd>" + esc(x.tur) + "</dd><dt>Yayım</dt><dd>" + fD(x.d) + "</dd>" + (x.rg ? "<dt>Resmî Gazete</dt><dd>Sayı " + esc(x.rg) + "</dd>" : "") + "<dt>" + (x.kind === "g" ? "Tarih" : "Yürürlük") + "</dt><dd>" + esc(x.yur) + "</dd><dt>Etki</dt><dd>" + (x.kind === "g" ? "Ekonomi gündemi" : M.IMP[x.imp]) + "</dd></dl></div>" +
        (tl ? '<div class="abox"><h3>Önemli tarihler</h3><ul class="tl">' + tl + "</ul></div>" : "") +
        (same.length ? '<div class="abox"><h3>' + esc(CAT[k].ad) + ' alanında son haberler</h3><ul class="mini">' + same.map(o => '<li><a href="' + href(o) + '">' + esc(o.title) + "<small>" + fD(o.d) + "</small></a></li>").join("") + "</ul></div>" : "") +
      "</aside></div>" +
      (rel.length ? '<section class="blk">' + sech("İlgili haberler", "", null, cv(k)) + '<div class="under" style="border-top:0;padding-top:0;margin-top:0">' + rel.map(o => stMd(o)).join("") + "</div></section>" : "") +
      '<nav class="pn blk" aria-label="Önceki ve sonraki haber">' +
        (prev ? '<a href="' + href(prev) + '"><small>Önceki haber</small><b>' + esc(prev.title) + "</b></a>" : "<span></span>") +
        (next ? '<a class="nx" href="' + href(next) + '"><small>Sonraki haber</small><b>' + esc(next.title) + "</b></a>" : "<span></span>") +
      "</nav></article>";
}

function pageTakvim() {
  const months = {};
  M.DATES.slice().sort((a, b) => a.d < b.d ? -1 : 1).forEach(x => { const m = pd(x.d); const key = MON[m.getMonth()] + " " + m.getFullYear(); (months[key] = months[key] || []).push(x); });
  return '<section class="phead wrap">' + crumb([["Takvim"]]) + '<h1><span class="cb"></span>Yaklaşan tarihler</h1><p class="lede">Yürürlük tarihleri, son başvuru günleri ve ilanlar. Her tarih, ayrıntısını anlatan habere bağlanır.</p><div class="hr"></div></section>' +
    Object.keys(months).map(m => '<section class="blk wrap">' + sech(m, months[m].length + " tarih") + '<ul class="dl dgrid">' + months[m].map(x => dlItem(x, true)).join("") + "</ul></section>").join("");
}

function pageKaynak() {
  return '<section class="phead wrap">' + crumb([["Kaynaklar"]]) + '<h1><span class="cb"></span>Kaynak ağı</h1><p class="lede">Haberler bu resmî kaynaklardan ve meslek kuruluşlarından derlenir. Renkli işaretler, kaynağın hangi alanlar için tarandığını gösterir.</p><div class="hr"></div></section>' +
    '<section class="wrap">' + srcGrid(M.SOURCES) + "</section>";
}

/* ── çerçeve: üst şerit, menü, alt bilgi ── */
const NAVN = { muhasebe: "Muhasebe ve SGK", lojistik: "Lojistik", denetim: "Denetim" };
function frame() {
  $("#tbdate").innerHTML = "<b>" + fD(M.WEEK.to) + '</b> <span class="dn">' + dayName(M.WEEK.to) + "</span>";
  $("#tbrg").innerHTML = '<i aria-hidden="true"></i>Resmî Gazete ' + esc(rgNo(LASTDAY));
  $("#tbmkt").innerHTML = M.MARKET.items.slice(0, 4).map(m => "<span>" + esc(m[0]) + "<b>" + esc(m[1]) + "</b></span>").join("");
  const links = M.CATS.map(c => '<a href="#kategori-' + c.k + '" data-r="kategori-' + c.k + '" style="--c:' + cv(c.k) + '"><i aria-hidden="true"></i>' + esc(NAVN[c.k] || c.ad) + '</a>').join("");
  const extra = '<a href="#takvim" data-r="takvim">Takvim</a><a href="#kaynaklar" data-r="kaynaklar">Kaynaklar</a>';
  $("#catnav").innerHTML = '<a href="#ana" data-r="ana">Ana sayfa</a><a href="#haberler" data-r="haberler">Tüm haberler</a><a href="#bu-hafta" data-r="bu-hafta">Son 7 gün</a>' +
    '<span class="nav-topics">' + M.CATS.filter(c => ["gumruk", "distic", "vergi"].includes(c.k)).map(c => '<a href="#kategori-' + c.k + '" data-r="kategori-' + c.k + '">' + esc(c.ad) + '</a>').join("") + '</span><span class="nav-extra">' + extra + '</span><details class="areas"><summary><span class="wide-label">Haber alanları</span><span class="narrow-label">Menü</span></summary>' +
    '<div class="areas-panel">' + links + '<div class="mobile-links">' + extra + '</div></div></details>';
  const areas = $(".areas");
  areas.addEventListener("click", e => { if (e.target.closest("a")) areas.open = false; });
  document.addEventListener("click", e => { if (!areas.contains(e.target)) areas.open = false; });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && areas.open) { areas.open = false; $("summary", areas).focus(); }
  });
  $("#fcats").innerHTML = M.CATS.map(c => '<li><a href="#kategori-' + c.k + '">' + esc(c.ad) + "</a></li>").join("");
}

/* ── yönlendirme ── */
function route() {
  let h = (location.hash || "#ana").slice(1);
  if (h === "hafta") h = "bu-hafta";
  if (["takvim", "kaynaklar", "haberler", "bu-hafta", "ana"].indexOf(h) >= 0) return { r: h };
  if (h.indexOf("haber-") === 0 && byId[h.slice(6)]) return { r: "haber", id: h.slice(6) };
  if (h.indexOf("kategori-") === 0 && CAT[h.slice(9)]) return { r: "kategori", k: h.slice(9) };
  return { r: "ana" };
}
let lastKey = "";
function render(keepScroll) {
  const R = route();
  $(".areas").open = false;
  const main = $("#icerik");
  let html, title;
  if (R.r === "bu-hafta") { html = pageWeek(); title = "Son 7 gün, " + M.WEEK.label + " | Mevzuat Habercisi"; }
  else if (R.r === "haberler") { html = pageList(); title = "Tüm haberler | Mevzuat Habercisi"; }
  else if (R.r === "takvim") { html = pageTakvim(); title = "Yaklaşan tarihler | Mevzuat Habercisi"; }
  else if (R.r === "kaynaklar") { html = pageKaynak(); title = "Kaynak ağı | Mevzuat Habercisi"; }
  else if (R.r === "kategori") { html = pageCat(R.k); title = CAT[R.k].ad + " haberleri | Mevzuat Habercisi"; }
  else if (R.r === "haber") { html = pageArticle(R.id); title = byId[R.id].title + " | Mevzuat Habercisi"; }
  else { html = pageHome(); title = "Mevzuat Habercisi | Gümrük, dış ticaret, vergi ve finansman mevzuatı"; }
  main.innerHTML = html;
  document.title = title;
  const navKey = R.r === "kategori" ? "kategori-" + R.k : R.r === "haber" ? "kategori-" + c0(byId[R.id]) : R.r;
  $$("#catnav a").forEach(a => a.getAttribute("data-r") === navKey ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current"));
  const pr = $("#progress");
  pr.style.display = R.r === "haber" ? "block" : "none";
  if (R.r === "haber") pr.style.setProperty("--c", cv(c0(byId[R.id])));
  const key = location.hash;
  if (!keepScroll && key !== lastKey) { window.scrollTo(0, 0); try { if (!(R.r === "haberler" && document.activeElement === $("#q"))) main.focus({ preventScroll: true }); } catch (e) {} }
  lastKey = key;
  growBars(main);
  wire(R);
  onScroll();
}

function wire(R) {
  const vp = $("#vplay");
  if (vp) vp.addEventListener("click", showSplash);
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
  const sources = $("#sources-jump");
  if (sources) sources.addEventListener("click", () => {
    const heading = $("#article-sources");
    heading.focus({ preventScroll: true });
    heading.scrollIntoView({ block: "start" });
  });
  const cp = $("#copy");
  if (cp) cp.addEventListener("click", () => copyLink(location.href));
  const td = $("#todo");
  if (td) td.addEventListener("change", () => {
    const all = $$("input", td), n = all.filter(i => i.checked).length;
    $("#prog").textContent = all.length + " adımdan " + n + " tamamlandı.";
  });
}

/* okuma çubuğu */
function onScroll() {
  const pr = $("#progress");
  if (!pr || pr.style.display === "none") return;
  const h = document.documentElement.scrollHeight - innerHeight;
  $("i", pr).style.transform = "scaleX(" + (h > 0 ? Math.min(1, scrollY / h) : 0) + ")";
}
window.addEventListener("scroll", onScroll, { passive: true });

function toast(t) { const el = $("#toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toast.h); toast.h = setTimeout(() => el.classList.remove("on"), 2200); }
function copyLink(u) {
  const ok = () => toast("Bağlantı kopyalandı");
  try { if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(u).then(ok, fallback); return; } } catch (e) {}
  fallback();
  function fallback() {
    try { const ta = document.createElement("textarea"); ta.value = u; ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select(); const r = document.execCommand("copy"); ta.remove(); toast(r ? "Bağlantı kopyalandı" : "Kopyalanamadı; adres çubuğundan kopyalayın"); }
    catch (e) { toast("Kopyalanamadı; adres çubuğundan kopyalayın"); }
  }
}

/* arama */
const qi = $("#q");
qi.addEventListener("input", () => {
  state.q = qi.value;
  if (route().r !== "haberler") { state.list = "all"; location.hash = "#haberler"; }
  else render(true);
});
qi.addEventListener("keydown", e => { if (e.key === "Escape") { qi.value = ""; state.q = ""; if (route().r === "haberler") render(true); } });

/* giriş videosu */
const sp = $("#splash"), sv = $("#sv"), sbar = $("#sbar");
let raf = 0, splashOn = false, lastFocus = null;
function tickBar() { if (!splashOn) return; if (sv.duration) sbar.style.transform = "scaleX(" + Math.min(1, sv.currentTime / sv.duration) + ")"; raf = requestAnimationFrame(tickBar); }
function showSplash() {
  splashOn = true; lastFocus = document.activeElement;
  sp.hidden = false; sp.classList.remove("out"); document.body.classList.add("locked");
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
  splashOn = false; cancelAnimationFrame(raf);
  sp.classList.add("out"); document.body.classList.remove("locked");
  setTimeout(() => { sp.hidden = true; sv.pause(); }, 460);
  if (lastFocus && lastFocus.focus && lastFocus !== document.body) try { lastFocus.focus({ preventScroll: true }); } catch (e) {}
}
sv.addEventListener("ended", hideSplash);
sv.addEventListener("error", hideSplash);
$("#skip").addEventListener("click", hideSplash);
document.addEventListener("keydown", e => { if (splashOn && (e.key === "Escape" || e.key === "Enter")) { e.preventDefault(); hideSplash(); } if (splashOn && e.key === "Tab") { e.preventDefault(); $("#skip").focus(); } });

/* başlat */
frame();
$(".skip").addEventListener("click", e => {
  e.preventDefault();
  const main = $("#icerik");
  main.focus({ preventScroll: true });
  main.scrollIntoView();
});
window.addEventListener("hashchange", () => render(false));
render(false);
})();
