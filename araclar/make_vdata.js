// Kullanım: node make_vdata.js <site/js/data.js> <çıktı/vdata.json>
// data.js'teki WEEK, DAYS, ITEMS ve TILES'tan giriş videosunun verisini üretir.
const fs = require("fs"), path = require("path"), vm = require("vm");
const src = process.argv[2] || path.join(__dirname, "../mevzuathabercisi/js/data.js");
const out = process.argv[3] || path.join(__dirname, "vdata.json");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(src, "utf8"), ctx);
const M = ctx.window.MH;
const GUN = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
const KISA = { gumruk: "Gümrük", distic: "Dış ticaret", vergi: "Vergi", muhasebe: "Muhasebe", finans: "Finansman", lojistik: "Lojistik", depolama: "Depolama", denetim: "Denetim" };
const inWin = d => d >= M.WEEK.from && d <= M.WEEK.to;
const mItems = M.ITEMS.filter(x => x.kind === "m" && inWin(x.d));
const days = M.DAYS.slice(-7).map(o => {
  const dt = new Date(o.d + "T12:00:00Z");
  return [GUN[dt.getUTCDay()], String(dt.getUTCDate()), mItems.filter(x => x.d === o.d).length];
});
const cards = M.TILES.slice(0, 4).map(t => {
  const c = { c: t.c, ad: KISA[t.c] || t.c, v: t.v, cap: t.vl || t.l };
  if (t.old) c.old = t.old;
  return c;
});
const W = M.WEEK;
const v = {
  label: "Son 7 gün: " + W.label,
  count: mItems.length,
  sub: W.rgCount + " Resmî Gazete sayısı, " + W.kurumCount + " kurum<br>ve " + W.srcCount + " kaynak tarandı",
  days, cards
};
fs.writeFileSync(out, JSON.stringify(v, null, 1));
console.log(JSON.stringify(v));
