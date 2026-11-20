# Mevzuat Habercisi: günlük güncelleme talimatı

Bu dosya, her sabah çalışan zamanlanmış görevin izleyeceği adımları anlatır. Görev kendi başına çalışır; kullanıcıya soru sormaz, makul olanı yapar ve sonunda Türkçe bir özet gönderir.

- Site: https://claude.ai/artifact/VQBrDDeueh7iGvP5AVTmxc
- Artifact slug: `e5fcacbf-119f-4f76-a72b-1d94b0a99639`
- Marka: Mevzuat Habercisi (mevzuathabercisi.com), bağımsız haber markası. Eğitim ortağı: Gümrük Koçu - Ufuk Çetintaş.
- Dil: kullanıcıya ve siteye yazılan her şey Türkçe. İngilizce yazma.

## 1. Dosyaları al

1. ToolSearch ile `mcp__claude-artifacts__list_files`, `mcp__claude-artifacts__read_file` ve `mcp__claude-artifacts__publish_files` araçlarını tek çağrıda yükle.
2. `list_files` ile artifact'ın güncel sürümünü (base_version olarak kullanılacak) not et.
3. `read_file` aracını `paths` ile bir kez çağır (tek çağrıda en çok 32 dosya, toplam 4 MiB):
   `js/data.js`, `src/intro.html`, `src/render.py.txt`, `src/make_vdata.js.txt`, `src/kontrol.js.txt`,
   `fonts/sg-latin-400.woff2`, `fonts/sg-latin-500.woff2`, `fonts/sg-latin-700.woff2`, `fonts/sg-latin-800.woff2`,
   `fonts/sg-latin-ext-400.woff2`, `fonts/sg-latin-ext-500.woff2`, `fonts/sg-latin-ext-700.woff2`, `fonts/sg-latin-ext-800.woff2`
4. Araç her dosyayı /tmp/claude-tool-results/... altına rastgele bir adla kaydeder (ör. `mcp-claude-artifacts-blob-...-0e1371c3.js`). Kayıtlar, sonucun başındaki listeyle aynı sırada gelir; eşleştirmeyi bu sırayla yap, gerekirse `sha256sum` ile listedeki sha256 değerine bakarak doğrula. Ardından dosyaları çalışma klasöründe şu düzene kopyala:

```
is/site/js/data.js
is/video/intro.html
is/video/render.py          (render.py.txt)
is/video/make_vdata.js      (make_vdata.js.txt)
is/video/kontrol.js         (kontrol.js.txt)
is/video/fonts/sg-*.woff2   (8 yazı tipi dosyası)
is/site/media/              (video çıktısı buraya yazılır)
```

## 2. Bugünü tara

Bugün = görevin çalıştığı gün (Europe/Istanbul). Resmî Gazete gece yarısı yayımlandığı için bugünün sayısı sabah hazırdır. Bir önceki günün akşamı yayımlanan kurum duyurularını da kontrol et (data.js'te yoksa önceki günün tarihiyle ekle).

Bakılacak yerler (WebSearch ve WebFetch ile):

- Resmî Gazete içindekiler: "Resmi Gazete'de bugün GG.AA.YYYY" araması (Bloomberg HT, NTV, Lexpera, alomaliye sayfaları). resmigazete.gov.tr doğrudan okunamıyor; arama özetlerini ve aynalarını kullan.
- https://www.mevzuat.net/Guncellik.aspx ve https://www.mevzuat.net/ (gümrük ve dış ticaret için en verimli kaynak: GGM yazıları, genelgeler, ithalatta haksız rekabet tebliğleri, AB önlemleri, BTB).
- Ticaret Bakanlığı ve Gümrükler Genel Müdürlüğü duyuruları; İhracatçı birlikleri (https://oaib.org.tr/duyurular-ve-bilgilendirme, https://immib.org.tr).
- Vergi ve muhasebe: GİB duyuru ve sirkülerleri (alomaliye.com aynaları), SGK, KGK, TÜRMOB.
- Finansman: TCMB, BDDK, SPK bülteni, SEDDK genelgeleri.
- Lojistik ve depolama: Ulaştırma ve Altyapı Bakanlığı, gümrüklü antrepo ve geçici depolama düzenlemeleri.
- Teyit ve ayrıntı için: Anadolu Ajansı, Foreks, Endeks24, Dünya, Ekonomim, CNBC-e haberleri. Tablo ve oranları birden fazla kaynakla karşılaştır.
- Piyasa: Bloomberg HT "Piyasalarda günün özeti <dün>" sayfası (USD/TRY, EUR/TRY, gram altın, ons, BIST 100 kapanışı).

Takip alanları: gümrük, dış ticaret, vergi, muhasebe/SGK/İK, finansman, lojistik ve nakliye, depolama, denetim ve uyum. Üniversite yönetmelikleri, atamalar, imar planları gibi alan dışı kalemler haber yapılmaz; günün notuna sayıca yazılır.

## 3. data.js'i güncelle

`window.MH` içindeki yapılar:

- `WEEK`: `from` = bugün − 6 gün, `to` = bugün, `label` = "12–18 Kasım 2026" biçimi (aylar farklıysa "28 Kasım – 4 Aralık 2026"), `rgCount` = DAYS içindeki Resmî Gazete sayısı (normalde 7), `kurumCount` ve `srcCount` = son 7 günde haberi çıkan kurum ve kullanılan kaynak sayısı (yaklaşık olabilir), `updated` = "18 Kasım 2026, 07:10" biçiminde İstanbul saati, `note` = isteğe bağlı tek cümle (boş bırakılabilir).
- `DAYS`: her zaman tam 7 gün. En eski günü çıkar, bugünü `{ d: "YYYY-AA-GG", rg: "33435" }` olarak sona ekle. Sayı bir öncekinin bir fazlasıdır; mükerrer sayı varsa `rg: "33435 ve mükerrer"` yaz. Alan dışı kalemler varsa `note: "3 üniversite yönetmeliği yayımlandı; takip alanlarının dışında."` gibi bir not ekle.
- `ITEMS`: yeni haberleri dosyada ilgili gün başlığının altına ekle (`/* ───────── 19 KASIM ───────── */` gibi). Eski haberleri silme; pencereden çıkanlar sitede "Önceki haftalardan" ve arşivde görünmeye devam eder. data.js 1 MB'ı geçerse 90 günden eski ve hiçbir listede kullanılmayan haberleri silebilirsin.
- `LEAD`: son 7 günün en geniş etkili değişikliği. `GUMRUK_LEAD`: son 7 günün en önemli gümrük ya da dış ticaret haberi. `TOP`: son 7 günden 4 haber (LEAD hariç). `ARCHIVE_PICKS`: pencereden yeni çıkmış, hâlâ gündemde olan 4 haber.
- `TILES`: tam 4 kart, son 7 günün en çarpıcı rakamları: `{ id, c, v, l, old? }`. `v` kısa olsun (en çok 12 karakter idealdir, ör. "50.000 TL", "%3 – %7,8", "12 ay", "0,80 $/kg"). Eski değer varsa `old: "5.000"`. `l` en çok 60 karakter.
- `DATES`: yaklaşan son tarihler `{ d, t, s, c, id? }`. Yeni haberlerde son tarih varsa ekle; 30 günden eski tarihleri temizle.
- `MARKET`: dünkü kapanış değerleri ve `asof` metni ("17 Kasım kapanışı, kaynak Bloomberg HT" gibi). Bulunamazsa olduğu gibi bırak.

Haber şeması:

```
{ id: "kisa-kebab-id", d: "YYYY-AA-GG", kind: "m" | "d" | "g", cat: ["gumruk", "distic"], imp: "yuk" | "usul" | "bilgi" | "kolay",
  kurum: "Ticaret Bakanlığı", tur: "Tebliğ 2026/32", rg: "33434" ya da null, yur: "Yayım günü" ya da tarih,
  title: "Sade, en çok 90 karakterlik başlık",
  spot: "Ne değişti, kimi etkiliyor: 1–2 cümle.",
  key: { kv: "5 yıl", ks: "Kısa açıklama" }  ya da  { old: "5.000 TL", neu: "50.000 TL", ks: "..." },
  body: ["2–4 kısa paragraf"],
  tbl: { cap: "isteğe bağlı", h: ["Sütun", ...], r: [["satır", ...]] },   (isteğe bağlı)
  who: ["Etkilenenler"], todo: ["Yapılacaklar, emir kipiyle"], warn: "isteğe bağlı dikkat notu",
  dates: [["YYYY-AA-GG", "Yayım ve yürürlük"]],
  src: [["Kaynak adı, tarih", "https://..."]] }
```

- `kind`: `m` = bağlayıcı düzenleme (Resmî Gazete'de yayımlanan kanun, karar, yönetmelik, tebliğ; genelge; GGM yazısı ve talimatı; kurul kararı; Türk ihracatçısını doğrudan bağlayan yabancı ülke önlemi). `d` = kurum duyurusu ve bilgilendirme (sınav sonucu, birlik duyurusu, yabancı ülke soruşturması bildirimi). `g` = ekonomi gündemi (rapor, veri, destek paketi).
- `imp`: `yuk` yeni yükümlülük ya da maliyet, `usul` usul ve süreç değişikliği, `bilgi` bilgilendirme, `kolay` kolaylık ya da süre uzatımı.
- `cat` anahtarları: gumruk, distic, vergi, muhasebe, finans, lojistik, depolama, denetim.

Yazım kuralları:

- Yalnızca kaynakta yazan bilgiyi kullan. Oran, tutar, tarih ve firma adlarını kaynaktan aynen al; tahmin etme. Emin olamadığın ayrıntıyı yazma. Her haberde en az bir çalışan bağlantı olsun.
- Kaynak metinden uzun alıntı yapma; kendi cümlelerinle, kısa ve sade yaz.
- Fıkra numarasıyla atıf yapma ("Md. 3/2" gibi yazma).
- "Yapılacaklar" maddeleri kaynağa dayanmalı; kaynağın söylemediği bir yükümlülük uydurma.
- Aynı düzenlemeyi iki kez ekleme: id ve başlıklara bakarak mevcut haberleri kontrol et.
- Bugün takip alanlarında hiçbir değişiklik yoksa yine de DAYS ve WEEK'i kaydır, `updated`'ı yenile, günün notunu yaz.

## 4. Denetle

```
cd is/video
node kontrol.js ../site/js/data.js        # HATA satırı varsa düzelt, tekrar çalıştır
```

## 5. Videoyu üret

```
cd is/video
node make_vdata.js ../site/js/data.js vdata.json
python3 render.py all vdata.json ../site/media      # intro.mp4 + poster.jpg
python3 render.py stills vdata.json 5.6 9.8          # still_05.60.png ve still_09.80.png
```

Kareleri Read ile aç ve bak: sayı, gün çubukları ve dört kart taşmadan görünmeli. Gerekiyorsa TILES metinlerini kısaltıp yeniden üret. Chrome (/usr/bin/google-chrome), python playwright ve ffmpeg ortamda hazırdır.

## 6. Yayınla

`publish_files` ile slug ve 1. adımda alınan base_version'ı vererek şu üç dosyayı yayınla (varsayılan patch kipi; diğer dosyalara dokunma):

- `js/data.js` ← is/site/js/data.js
- `media/intro.mp4` ← is/site/media/intro.mp4
- `media/poster.jpg` ← is/site/media/poster.jpg

Sürüm çakışması dönerse `list_files` ile yeni sürümü al ve yalnızca bu üç dosyayla yeniden yayınla.

**Kesin kural:** `index.html`, `js/app.js`, `js/art.js`, `fonts/` ve `src/` dosyalarını hiçbir koşulda yayınlama, okuma amacıyla bile `files` listesine koyma. Bu dosyalar tasarımdır ve ayrı yönetilir. `read_file` bir HTML dosyasını döndürürken başına okuma için bir sarmalayıcı (`<!doctype html><html><head>…<body>`) ekleyebilir; böyle bir kopya yayınlanırsa site bozulur.

## 7. Raporla

SendUserMessage ile kullanıcıya Türkçe, kısa bir özet gönder: bugünün Resmî Gazete sayısı, eklenen haberler (başlık ve alan), son 7 günün toplam mevzuat değişikliği sayısı ve sitenin bağlantısı. Bir adım başarısız olduysa neyin yapılamadığını açıkça yaz.
