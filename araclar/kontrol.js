// Kullanım: node kontrol.js <site/js/data.js>
// data.js'in yayımlanmadan önce tutarlı olduğunu denetler. Hata varsa çıkış kodu 1.
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(process.argv[2], "utf8"), ctx);
const M = ctx.window.MH, err = [], warn = [];
const by = {}, CAT = new Set(M.CATS.map(c => c.k)), KIND = new Set(["m", "d", "g"]);
const isD = s => /^\d{4}-\d{2}-\d{2}$/.test(s);
M.ITEMS.forEach(x => {
  if (by[x.id]) err.push("Yinelenen id: " + x.id);
  by[x.id] = x;
  ["id", "d", "kind", "cat", "imp", "kurum", "tur", "title", "spot", "body", "src"].forEach(k => { if (x[k] === undefined || x[k] === "") err.push(x.id + ": eksik alan " + k); });
  if (!isD(x.d)) err.push(x.id + ": tarih biçimi YYYY-AA-GG olmalı");
  if (!KIND.has(x.kind)) err.push(x.id + ": kind m, d ya da g olmalı");
  if (!M.IMP[x.imp]) err.push(x.id + ": imp geçersiz (" + x.imp + ")");
  (x.cat || []).forEach(c => { if (!CAT.has(c)) err.push(x.id + ": kategori geçersiz " + c); });
  if (!Array.isArray(x.src) || !x.src.length || x.src.some(s => !/^https?:\/\//.test(s[1]))) err.push(x.id + ": en az bir kaynak bağlantısı gerekli");
  if (x.key && !x.key.ks) warn.push(x.id + ": key.ks boş");
  if (x.tbl && x.tbl.r.some(r => r.length !== x.tbl.h.length)) err.push(x.id + ": tablo satırı sütun sayısıyla uyuşmuyor");
  (x.dates || []).forEach(dd => { if (!isD(dd[0])) err.push(x.id + ": dates biçimi hatalı"); });
});
const W = M.WEEK;
if (M.DAYS.length !== 7) err.push("DAYS tam 7 gün olmalı (şu an " + M.DAYS.length + ")");
if (M.DAYS[0].d !== W.from) err.push("DAYS ilk günü WEEK.from ile aynı olmalı");
if (M.DAYS[M.DAYS.length - 1].d !== W.to) err.push("DAYS son günü WEEK.to ile aynı olmalı");
const inW = x => x.d >= W.from && x.d <= W.to;
[["LEAD", [M.LEAD]], ["GUMRUK_LEAD", [M.GUMRUK_LEAD]], ["TOP", M.TOP], ["ARCHIVE_PICKS", M.ARCHIVE_PICKS], ["TILES", M.TILES.map(t => t.id)]].forEach(([n, ids]) =>
  ids.forEach(i => { if (!by[i]) err.push(n + " bulunamayan id: " + i); }));
if (by[M.LEAD] && !inW(by[M.LEAD])) warn.push("LEAD son 7 günün dışında");
M.TOP.forEach(i => { if (by[i] && !inW(by[i])) warn.push("TOP öğesi son 7 günün dışında: " + i); });
if (M.TILES.length !== 4) err.push("TILES tam 4 kart olmalı");
M.TILES.forEach(t => { if (!CAT.has(t.c)) err.push("TILES kategori geçersiz: " + t.c); });
M.DATES.forEach(x => { if (!isD(x.d)) err.push("DATES tarih biçimi hatalı: " + x.t); if (x.id && !by[x.id]) err.push("DATES bulunamayan id: " + x.id); });
const w = M.ITEMS.filter(inW);
console.log("Pencere:", W.label, "| öğe:", w.length, "| mevzuat değişikliği:", w.filter(x => x.kind === "m").length);
console.log("Günlere göre:", M.DAYS.map(o => o.d.slice(8) + ":" + w.filter(x => x.kind === "m" && x.d === o.d).length).join(" "));
console.log("Toplam öğe:", M.ITEMS.length, "| dosya boyutu:", fs.statSync(process.argv[2]).size, "bayt");
warn.forEach(s => console.log("UYARI:", s));
err.forEach(s => console.log("HATA:", s));
process.exit(err.length ? 1 : 0);
