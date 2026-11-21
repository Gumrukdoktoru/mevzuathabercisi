# Çalışma kuralları (Claude, ChatGPT/Codex ve diğer yapay zekâ ajanları için)

Bu dosya, depoda çalışan her ajanın uyacağı kuralları anlatır. Önce `README.md` dosyasını okuyun.

## Dil

- Sitedeki her metin, kod yorumları, commit mesajları ve çekme isteği açıklamaları Türkçe yazılır.
- Kullanıcıya verilen yanıtlar da Türkçedir. İngilizce yazılmaz.

## Neye dokunulur, neye dokunulmaz

- Tasarım ve arayüz değişiklikleri: `index.html` (CSS) ve `js/app.js`.
- `js/data.js`, `media/intro.mp4` ve `media/poster.jpg` her sabah otomatik güncellenir. Bu dosyaları tasarım çalışmasında değiştirmeyin; aksi hâlde ertesi sabahki güncellemeyle çakışır.
- `js/data.js` içindeki veri yapısını (alan adları: `WEEK`, `DAYS`, `ITEMS`, `LEAD`, `TOP`, `GUMRUK_LEAD`, `ARCHIVE_PICKS`, `TILES`, `DATES`, `MARKET`, `SOURCES`, `CATS`, `IMP`) değiştirmeyin. Yeni bir alana ihtiyaç varsa önce çekme isteğinde önerin; `araclar/kontrol.js`, `araclar/make_vdata.js` ve `araclar/GUNLUK-GUNCELLEME.md` birlikte güncellenmelidir.
- `araclar/` klasöründeki dosyalar günlük güncellemenin parçasıdır; değiştirirseniz nedenini çekme isteğinde açıkça yazın.

## Teknik sınırlar

- Dış kütüphane, çerçeve, derleme adımı veya CDN yok. Site düz HTML, CSS ve JavaScript'tir; dosyalar olduğu gibi yayınlanır.
- Harici kaynaktan yazı tipi, görsel ya da betik yüklenmez. Görseller SVG olarak koda gömülür veya depoya eklenir.
- Tarayıcı depolaması (`localStorage`, `sessionStorage`) yalnızca `try/catch` içinde kullanılır.
- Gezinme hash ile çalışır: `#ana`, `#bu-hafta`, `#haberler`, `#kategori-<alan>`, `#haber-<id>`, `#takvim`, `#kaynaklar`. Bu adresler korunmalıdır.

## Tasarım ilkeleri

- Açık zemin ve rahat okuma esastır. Sayfa geneline koyu arka plan konmaz; koyu görünüm yalnızca sağ üstteki düğmeyle seçilir.
- Yazı yığını yapılmaz: kısa başlık, bir iki cümlelik özet, büyük ana rakam.
- Alan renkleri sabittir (`--c-gumruk`, `--c-distic`, `--c-vergi`, `--c-muhasebe`, `--c-finans`, `--c-lojistik`, `--c-depolama`, `--c-denetim`); bir alan her yerde aynı renkle görünür.
- Düzen: ekonomi gazetesi. Büyük manşet ve yanında "Son eklenenler" akışı, altında alan bölümleri; bölüm başlıkları alan renginde üst çizgiyle ayrılır.
- Yazı tipleri: başlıklar ve haber metni Newsreader (serif), arayüz ve rakamlar IBM Plex Sans. Dosyalar `fonts/` klasöründe (`nr-*`, `px-*`); `sg-*` dosyaları yalnızca giriş videosu için.
- Haber görselleri `js/art.js` ile koda gömülü çizim sahneleridir (her alan için bir sahne; haberin id'sine göre farklı kadraj). Gerçek fotoğraf eklenecekse lisanslı ya da üretilmiş görseller `media/` altına konur ve hangi haberle eşleştiği açıkça belirtilir.
- Sekiz alanın renk şeridi sayfanın en üstünde ve alt bilgide durur.
- Ana sayfanın imzası "Bugünün Resmî Gazetesi" panelidir (günün sayısı ve takip alanına giren kalemler, Gazete'nin içindekiler düzeninde). Logo § işaretli mühürdür.
- Şablon izlerinden kaçının: bağlantı metinlerine ok (→) eklemeyin, bilgileri orta nokta (·) ile birleştirmeyin, başlıklara büyük harfli etiket koymayın.
- Mevzuat metinleri fıkra numarasıyla ("Md. 3/2" gibi) gösterilmez.
- Telefonda (390 px) yatay taşma olmamalı; klavyeyle gezinme ve odak görünürlüğü korunmalı; `prefers-reduced-motion` dikkate alınmalı.

## İçerik kuralları (haber eklenecekse)

- Yalnızca kaynakta yazan bilgi kullanılır; oran, tutar, tarih ve firma adları uydurulmaz.
- Her haberde en az bir çalışan kaynak bağlantısı bulunur.
- Ayrıntılı şema ve kurallar: `araclar/GUNLUK-GUNCELLEME.md`.

## Değişiklikten önce ve sonra

1. Yeni bir dal açın (ör. `tasarim/manset-duzeni`).
2. Değişikliği yapın, ardından denetleyin:
   - `node --check js/app.js`
   - `node araclar/kontrol.js js/data.js`
   - `python3 -m http.server 8000` ile ana sayfayı, bir haber sayfasını ve telefon görünümünü açıp tarayıcı konsolunda hata olmadığını kontrol edin.
3. Çekme isteği açın; açıklamada neyi neden değiştirdiğinizi ve mümkünse önce/sonra ekran görüntüsünü Türkçe yazın.
4. `main` dalına doğrudan yazmayın.

Her sabahki otomatik güncelleme `gunluk/YYYY-AA-GG` dalında "Günlük güncelleme: GG Ay YYYY" başlıklı bir çekme isteği açar; yalnızca `js/data.js`, `media/intro.mp4` ve `media/poster.jpg` dosyalarını değiştirir, ChatGPT incelemesinden sonra kendisi birleştirir.

Yayına alma: tasarım değişiklikleri (`index.html`, `js/app.js`, `js/art.js`, `fonts/`, `media/haber/`) ayrı bir çekme isteğiyle gelir; Claude dener, `main` dalına alır ve canlı siteye taşır.

Haber fotoğrafları: `media/haber/` altındaki görseller `js/app.js` içindeki `photos` eşlemesiyle haberlere bağlanır; eşlemesi olmayan haberlerde `js/art.js` çizimi kullanılır.


## Code Review Rules

<!-- Bu bölümün başlığı Codex'in tanıdığı addır; içerik Türkçedir. Codex, çekme isteklerini bu kurallara göre inceler. -->

### Günlük haber doğrulama

"Günlük güncelleme: …" başlıklı çekme istekleri haber doğrulama incelemesidir. Bu isteklerde yalnızca `js/data.js` içindeki yeni ve değişen haberleri incele:

- Her haberin `title`, `spot`, `key`, `body`, `tbl`, `dates`, `rg`, `kurum` ve `tur` alanlarını, aynı haberin `src` listesindeki bağlantılarla karşılaştır; mümkünse kaynak sayfayı aç.
- P0 say: kaynakla çelişen ya da yanlış yazılmış oran, tutar, tarih, Resmî Gazete sayısı, karar veya tebliğ numarası, firma ya da ülke adı.
- P1 say: listelenen kaynakların hiçbirinde bulunmayan iddia; kaynağın söylemediği bir yükümlülüğü yazan `todo` maddesi; eksik ya da çalışmayan kaynak bağlantısı; aynı düzenlemenin iki kez eklenmesi; yanlış alan (`cat`) ya da tür (`kind`); fıkra numarasıyla atıf; Türkçe olmayan metin.
- Üslup tercihlerini ve tasarım önerilerini bu isteklerde bulgu olarak yazma.
- Bulguları Türkçe yaz; her bulguda haberin `id` değerini ve dayandığın kaynağı belirt.

### Tasarım değişiklikleri

- `js/data.js`, `media/intro.mp4` ve `media/poster.jpg` dosyalarının değiştirilmesini P1 say.
- Telefonda (390 px) yatay taşma, konsol hatası, kırık hash adresi (`#ana`, `#bu-hafta`, `#haberler`, `#kategori-<alan>`, `#haber-<id>`, `#takvim`, `#kaynaklar`) ya da dış kaynaktan yüklenen dosya P1'dir.

## Review guidelines

Codex'in eski sürümleri bu başlığı okur; kurallar yukarıdaki "Code Review Rules" bölümüyle aynıdır.
