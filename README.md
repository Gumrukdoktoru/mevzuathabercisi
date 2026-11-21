# Mevzuat Habercisi

mevzuathabercisi.com: gümrük, dış ticaret, vergi, muhasebe/SGK, finansman, lojistik, depolama ve denetim alanlarındaki Resmî Gazete değişikliklerini ve kurum duyurularını her gün özetleyen bağımsız haber sitesi.

Eğitim ortağı: Gümrük Koçu - Ufuk Çetintaş.

## Klasörler

| Yol | Ne işe yarar |
| --- | --- |
| `index.html` | Sayfa iskeleti ve tüm stiller (CSS). Görünümle ilgili değişikliklerin çoğu burada yapılır. |
| `js/app.js` | Sayfaları çizen kod: ana sayfa, son 7 gün panosu, haber sayfası, alan sayfaları, takvim, kaynaklar. |
| `js/art.js` | Haber görselleri: her alan için çizim sahnesi üretir. |
| `js/data.js` | Haberlerin ve sayfa ayarlarının tamamı (`window.MH`). Her sabah otomatik güncellenir. |
| `media/` | Giriş videosu (`intro.mp4`) ve kapak görseli (`poster.jpg`). Her sabah yeniden üretilir. |
| `fonts/` | Sitenin yazı tipi dosyaları. |
| `araclar/` | Günlük güncelleme talimatı, veri denetleyicisi ve video üretim araçları. |

## Yerelde çalıştırma

Kurulum gerekmez. Klasörde basit bir sunucu açıp tarayıcıda bakın:

```
python3 -m http.server 8000
```

Sonra http://localhost:8000 adresini açın.

## Denetim

Yayından önce veri dosyasını denetleyin:

```
node araclar/kontrol.js js/data.js
```

`HATA` satırı çıkmamalı.

## Giriş videosunu üretme

```
cd araclar
node make_vdata.js ../js/data.js vdata.json
python3 render.py all vdata.json ../media
```

Gerekenler: Node.js, Python 3, `pip install playwright`, Chrome ya da `playwright install chromium`, ffmpeg.

## Günlük güncelleme

Her sabah 06:53'te (İstanbul) çalışan zamanlanmış görev Resmî Gazete'yi ve kurum duyurularını tarar, `js/data.js` dosyasını günceller, videoyu yeniden üretir ve siteyi yayınlar. Ortak kontrolü etkinleştirmek için Claude görevinin başlangıç talimatına her çalışmada `main` dalındaki `araclar/GUNLUK-GUNCELLEME.md` dosyasını okumasını ekleyin. Görevin çalıştığı ortamda yetkili Codex CLI ve canlı web araması gerekir. Claude'un hazırladığı taslak ve önceki canlı veri kopyası `araclar/ortak-kontrol.js` ile karşılaştırılır. Yayıma geçen dosyanın SHA-256 değeri günlük kontrol çıktısında yer alır.

## Birlikte çalışma

Bu depoda hem Claude hem ChatGPT (Codex) çalışır. Çalışma kuralları `AGENTS.md` dosyasında. Kısaca: tasarım ve kod değişiklikleri ayrı dalda yapılır ve çekme isteğiyle (pull request) gelir; `js/data.js` ve `media/` dosyalarına elle dokunulmaz.
