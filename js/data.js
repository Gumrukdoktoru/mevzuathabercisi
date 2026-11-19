/* mevzuathabercisi.com — içerik verisi (13–19 Kasım 2026 haftası ve arşiv) */
window.MH = (function () {

/* Kayan 7 günlük pencere. Günlük güncellemede from/to/label/updated ve DAYS birlikte güncellenir. */
const WEEK = { from: "2026-11-13", to: "2026-11-19", label: "13–19 Kasım 2026", rgCount: 7, kurumCount: 10, srcCount: 24,
  updated: "19 Kasım 2026, 07:30", note: "19 Kasım sayısında takip alanlarında düzenleme yok; 18 Kasım sayısından iki karar eklendi." };

const CATS = [
  { k: "gumruk",   ad: "Gümrük" },
  { k: "distic",   ad: "Dış ticaret" },
  { k: "vergi",    ad: "Vergi" },
  { k: "muhasebe", ad: "Muhasebe, SGK ve İK" },
  { k: "finans",   ad: "Finansman" },
  { k: "lojistik", ad: "Lojistik ve nakliye" },
  { k: "depolama", ad: "Depolama" },
  { k: "denetim",  ad: "Denetim ve uyum" }
];

const IMP = { yuk: "Yükümlülük", usul: "Usul", bilgi: "Bilgi", kolay: "Kolaylık" };

const DAYS = [
  { d: "2026-11-13", rg: "33429" },
  { d: "2026-11-14", rg: "33430" }, { d: "2026-11-15", rg: "33431" },
  { d: "2026-11-16", rg: "33432", note: "4 üniversite yönetmeliği yayımlandı; takip alanlarının dışında." },
  { d: "2026-11-17", rg: "33433", note: "2 yönetmelik ve 1 Anayasa Mahkemesi kararı yayımlandı; takip alanlarının dışında." },
  { d: "2026-11-18", rg: "33434" },
  { d: "2026-11-19", rg: "33435", note: "Pilot Lisans Yönetmeliği değişikliği ve 2 üniversite yönetmeliği yayımlandı; takip alanlarının dışında." }
];

/* kind: m = mevzuat değişikliği, g = ekonomi gündemi */
const ITEMS = [
/* ───────── 11 KASIM ───────── */
{ id: "kore-implant-damping", d: "2026-11-11", kind: "m", cat: ["gumruk", "distic"], imp: "yuk",
  kurum: "Ticaret Bakanlığı", tur: "Tebliğ", rg: "33427", yur: "Yayım günü",
  title: "Kore implant parçalarında damping önlemi brüt kilograma göre uygulanacak",
  spot: "Ticaret Bakanlığı, Kore menşeli protez diş bağlantı parçalarına uygulanan damping önleminin tablosunu yeniden düzenledi. Kilogram başına uygulanan tutarlar artık brüt ağırlık üzerinden hesaplanacak.",
  key: { old: "$/kg", neu: "$/kg brüt", ks: "Kilogram bazlı önlemlerde ölçü birimi" },
  body: [
    "Değişiklik, 2025/4 sayılı İthalatta Haksız Rekabetin Önlenmesine İlişkin Tebliğ'deki önlem tablosunu yeniden düzenliyor. Önlem, GTİP 9021.29.00.00.00 altında sınıflandırılan protez dişlere ait bağlantı parçalarını kapsıyor.",
    "Kilogram bazında uygulanan önlemlerin ölçü birimi 'ABD doları/kg' yerine 'ABD doları/kg/brüt' oldu. Dio Corporation için kilogram başına 140 dolar, Evidence ve Megagen için 320 dolar artık brüt ağırlık üzerinden hesaplanıyor.",
    "ACH Medical, Biotem, Cowellmedi, Dentis ve Dentium'un da aralarında olduğu sekiz üretici için önlem CIF bedelin %15'i. Tabloda adı geçmeyen üreticiler için oran %25."
  ],
  tbl: { cap: "Firma bazında önlem", h: ["Üretici", "Önlem"], r: [["ACH Medical, Biotem, Cowellmedi, Dentis, Dentium ve tebliğde sayılan diğer üç firma", "CIF bedelin %15'i"], ["Dio Corporation", "140 $/kg brüt"], ["Evidence ve Megagen", "320 $/kg brüt"], ["Diğer tüm üreticiler", "%25"]] },
  who: ["İthalatçılar", "Gümrük müşavirleri", "Dental ürün tedarikçileri"],
  todo: ["Kilogram bazlı önlemde beyannamedeki brüt ağırlığı esas alın", "Üretici unvanını fatura ve menşe belgesinden doğrulayın", "Fiyat tekliflerini %25 genel oran ihtimaliyle yeniden hesaplayın"],
  warn: "Brüt ağırlık ambalajı da içerdiğinden, kilogram bazlı önlemde ödenecek tutar net ağırlığa göre hesaplanandan yüksek çıkar.",
  dates: [["2026-11-11", "Yayım ve yürürlük"]],
  src: [["Resmî Gazete, 11.11.2026", "https://www.resmigazete.gov.tr/eskiler/2026/11/20261111-3.htm"], ["mevzuat.net özeti", "https://www.mevzuat.net/Guncellik.aspx"], ["orgtr.org, tebliğ metni", "https://orgtr.org/?p=34788"]] },

{ id: "tcmb-e-para-iptal", d: "2026-11-11", kind: "m", cat: ["finans"], imp: "usul",
  kurum: "TCMB", tur: "Karar", rg: "33427", yur: "Yayım günü",
  title: "TCMB iki elektronik para kuruluşunun faaliyet iznini iptal etti",
  spot: "Merkez Bankası, Ozan Elektronik Para A.Ş. ile A Ödeme ve Elektronik Para Hizmetleri A.Ş.'nin faaliyet izinlerini iptal etti. Kararlar 11 Kasım'da Resmî Gazete'de yayımlandı.",
  key: { kv: "2 kuruluş", ks: "Faaliyet izni iptal edildi" },
  body: [
    "Kararlar, ödeme hizmetleri ve elektronik para kuruluşlarını düzenleyen 6493 sayılı Kanun'a dayanıyor.",
    "Ozan Elektronik Para A.Ş.'ye 2019'da verilen izin 12111/21710 sayılı kararla, A Ödeme ve Elektronik Para Hizmetleri A.Ş.'ye 2022'de verilen izin 12113/21712 sayılı kararla iptal edildi."
  ],
  tbl: { h: ["Kuruluş", "İzin yılı", "İptal kararı"], r: [["Ozan Elektronik Para A.Ş.", "2019", "12111/21710"], ["A Ödeme ve Elektronik Para Hizmetleri A.Ş.", "2022", "12113/21712"]] },
  who: ["Bu kuruluşlarla çalışan işletmeler", "E-ticaret satıcıları", "Muhasebe ve finans birimleri"],
  todo: ["Tahsilat veya ödeme altyapınızda bu kuruluşlar varsa başka bir kanala geçin", "Bekleyen bakiye ve iadeler için kuruluşla yazılı iletişim kurun", "Bu kuruluşlardaki bakiyeleri muhasebede ayrıca izleyin"],
  dates: [["2026-11-11", "Yayım"]],
  src: [["Foreks", "https://www.foreks.com/haber/detay/6af3a16195131d72027db360/PICNEWS/tr/tcmb-ozan-elektronik-para-nin-faaliyet-iznini-iptal-etti-11-11-26/"], ["Endeks24", "https://www.endeks24.com/tcmb-iki-elektronik-para-kurulusunun-faaliyet-iznini-iptal-etti"]] },

{ id: "bm-malvarligi-listesi", d: "2026-11-11", kind: "m", cat: ["denetim", "finans"], imp: "usul",
  kurum: "Cumhurbaşkanlığı", tur: "Cumhurbaşkanı Kararı", rg: "33427", yur: "Yayım günü",
  title: "BM yaptırım listesine dayalı malvarlığı dondurma listesi güncellendi",
  spot: "BM Güvenlik Konseyi yaptırım kararlarına dayanan malvarlığı dondurma listesinde değişiklik yapıldı. Tarama listelerinin güncellenmesi gerekiyor.",
  key: { kv: "Karar 11959", ks: "BMGK 1267, 1988, 1989 ve 2253" },
  body: [
    "11959 sayılı Cumhurbaşkanı Kararı ile 2013/5428 sayılı kararın eki (1) sayılı listede değişiklik yapıldı.",
    "Liste, BM Güvenlik Konseyi'nin 1267, 1988, 1989 ve 2253 sayılı kararları kapsamında belirlenen kişi ve kuruluşları içeriyor ve bu kararlarla uyumlu tutuluyor."
  ],
  who: ["Bankalar ve ödeme kuruluşları", "MASAK yükümlüleri", "Dış ticaret şirketleri"],
  todo: ["Müşteri ve karşı taraf tarama listelerinizi güncelleyin", "Güncellemeden sonra mevcut müşteri portföyünü yeniden taratın"],
  dates: [["2026-11-11", "Yayım ve yürürlük"]],
  src: [["Lexpera, 11.11.2026 Resmî Gazete", "https://www.lexpera.com.tr/resmi-gazete/yayintarihi/11-11-2026"], ["Politikam", "https://www.politikam.com/11-kasim-2026-resmi-gazete-kararlari-faaliyet-izni-iptalleri"]] },

{ id: "trafik-sigortasi-aralik", d: "2026-11-11", kind: "m", cat: ["finans", "lojistik"], imp: "bilgi",
  kurum: "SEDDK", tur: "Genelge 2026/31", rg: null, yur: "1 Aralık 2026",
  title: "Trafik sigortasında Aralık tavanı: genel %1, taksi ve otobüste %3",
  spot: "SEDDK, zorunlu trafik sigortası azami primlerinin Aralık 2026'da Kasım'a göre %1 artırılmasına karar verdi. Taksi, minibüs ve belirli otobüs gruplarında artış %3.",
  key: { kv: "%1 / %3", ks: "Aralık azami prim artışı: genel / taksi, minibüs, otobüs" },
  body: [
    "11 Kasım 2026 tarihli ve 2026/31 sayılı Genelge ile Kasım 2026'da araç grubu ve kullanım türüne göre uygulanan azami primler Aralık için yeniden belirlendi.",
    "Genel artış %1; taksi, minibüs ve genelgede sayılan otobüs gruplarında oran %3. Yeni tavanlar 1 Aralık'tan itibaren geçerli.",
    "Kasım için de aynı yöntem uygulanmıştı: 2026/30 sayılı Genelge ile azami primler Kasım'da %1, taksi, minibüs ve otobüslerde %3 artırılmıştı."
  ],
  tbl: { cap: "Aralık 2026 azami prim artışı", h: ["Araç grubu", "Artış"], r: [["Diğer araçlar (genel)", "%1"], ["Taksi", "%3"], ["Minibüs", "%3"], ["Genelgede sayılan otobüs grupları", "%3"]] },
  who: ["Taşımacılık şirketleri", "Taksi ve servis işletmeleri", "Filo sahipleri", "Sigorta acenteleri"],
  todo: ["Aralık'ta yenilenecek poliçeleri listeleyip primleri yeni tavana göre bütçeleyin", "Aldığınız teklifin azami primi aşmadığını kontrol edin"],
  dates: [["2026-11-11", "Genelge"], ["2026-12-01", "Yeni tavanlar geçerli"]],
  src: [["Alomaliye, 2026/31 sayılı Genelge", "https://www.alomaliye.com/?p=194263"], ["Alomaliye, Kasım artışı (2026/30)", "https://www.alomaliye.com/2026/10/09/trafik-sigortasi-tavanina-kasim-artisi/"]] },

/* ───────── 12 KASIM ───────── */
{ id: "butunlesik-sigorta", d: "2026-11-12", kind: "m", cat: ["finans"], imp: "yuk",
  kurum: "SEDDK", tur: "Yönetmelik", rg: "33428", yur: "Yayım günü",
  title: "Alışverişte satılan sigortalara prim tavanı ve yeni kurallar",
  spot: "Bütünleşik Sigortalar Hakkında Yönetmelik yürürlüğe girdi. Ürün veya hizmetle birlikte sunulan sigortalara yıllık prim tavanı ve süre sınırı geldi; sigorta artık satışın şartı yapılamayacak.",
  key: { kv: "33.030 TL", ks: "2026 için yıllık brüt prim tavanı" },
  body: [
    "Yönetmelik, perakende ve e-ticarette ürün ya da hizmetle birlikte sunulan sigortaların kapsamını, prim tutarlarını, teminat sürelerini ve sözleşmenin sona erdirilmesini düzenliyor.",
    "Sigorta, mal veya hizmet alımının şartı yapılamaz. Satış sırasında ya da sözleşmeden sonraki 14 gün içinde sunulabilir.",
    "Yıllık prim, aylık brüt asgari ücreti aşamaz; bu tutar 2026 için 33.030 TL. Teminat süresi, uzatılmış garanti kapsamındaki ürünler dışında 2 yılı geçemez. SEDDK, tavanı yarıya indirme ya da iki katına çıkarma yetkisine sahip.",
    "Yetkili kuruluşlar, uygulamaya geçmeden en az bir ay önce SEDDK'yı bilgilendirecek; Kurum gerekli gördüğünde değişiklik isteyebilecek. Düzenlemeden yaklaşık 10 milyon kişinin faydalanması bekleniyor."
  ],
  tbl: { cap: "Yeni kurallar bir bakışta", h: ["Konu", "Kural"], r: [["Satışın şartı yapılabilir mi?", "Hayır"], ["Ne zaman sunulabilir?", "Satış sırasında veya sonraki 14 gün içinde"], ["Yıllık prim tavanı", "Aylık brüt asgari ücret (2026: 33.030 TL)"], ["Azami süre", "2 yıl (uzatılmış garanti hariç)"], ["SEDDK'ya bildirim", "Uygulamadan en az 1 ay önce"], ["Kapsam dışı", "Nakliyat, zorunlu, konut ve işyeri ile birikimli sigortalar"]] },
  who: ["Perakende ve e-ticaret", "Sigorta şirketleri ve acenteler", "Elektronik ve beyaz eşya satıcıları"],
  todo: ["Ödeme ekranında sigortanın ön seçili ya da zorunlu görünmediğini kontrol edin", "Sigortayı satıştan sonraki 14 gün içinde de sunabileceğiniz bir süreç kurun", "Prim hesaplarını 33.030 TL yıllık tavana göre güncelleyin", "Uygulamaya başlamadan en az 1 ay önce SEDDK'ya bildirim yapın"],
  warn: "Sigortayı alışverişin şartı hâline getiren satış akışları yönetmeliğe aykırı.",
  dates: [["2026-11-12", "Yayım ve yürürlük"]],
  src: [["Forbes Türkiye", "https://www.forbes.com.tr/haberler/tuketiciye-sunulan-sigortalarda-prim-ve-sure-sinirlari-yeniden-belirlendi"], ["Endeks24", "https://www.endeks24.com/seddk-butunlesik-sigortada-yillik-prim-tavanini-33-bin-lirayla-sinirladi"], ["Ekonomi Gazetesi", "https://www.ekonomigazetesi.com/sektor-haberleri/alisveriste-dogrudan-sigorta-aciklamasi-10-milyon-kisinin-faydalanmasi-bekleniyor-92164"], ["Alomaliye, yönetmelik metni", "https://www.alomaliye.com/2026/11/12/butunlesik-sigortalar-hakkinda-yonetmelik/"]] },

{ id: "mesafeli-sigorta", d: "2026-11-12", kind: "m", cat: ["finans"], imp: "bilgi",
  kurum: "SEDDK", tur: "Yönetmelik değişikliği", rg: "33428", yur: "Yayım günü",
  title: "Mesafeli sigorta sözleşmeleri yönetmeliği yeni düzene uyarlandı",
  spot: "Bütünleşik sigortaya ilişkin eski madde kaldırıldı; yönetmelik, aynı gün yayımlanan yeni düzenlemeye atıf yapacak şekilde güncellendi.",
  key: { kv: "1 madde", ks: "Kaldırıldı, atıf yeni yönetmeliğe" },
  body: [
    "Sigortacılık Kapsamında Değerlendirilecek Faaliyetler ve Mesafeli Akdedilen Sigorta Sözleşmeleri Hakkında Yönetmelik'te değişiklik yapıldı.",
    "Tüketici lehine yapılan sigorta sözleşmeleri amaç maddesine eklendi; üçüncü bölümün adı Mesafeli Akdedilen Sigorta Sözleşmeleri oldu.",
    "Bütünleşik sigortayı düzenleyen 10. madde yürürlükten kaldırıldı. 9. maddedeki atıf, Bütünleşik Sigortalar Hakkında Yönetmelik'e çevrildi."
  ],
  who: ["Sigorta şirketleri", "Acenteler"],
  todo: ["İç prosedürlerdeki eski 10. madde atıflarını yeni yönetmeliğe göre güncelleyin"],
  dates: [["2026-11-12", "Yayım ve yürürlük"]],
  src: [["Foreks", "https://www.foreks.com/haber/detay/6af531ad4b185239144611ab/FRKS/tr/sigorta-sozlesmelerine-iliskin-yonetmelik-degisti-12-11-26/"]] },

{ id: "tcmb-enflasyon-raporu", d: "2026-11-12", kind: "g", cat: ["finans", "distic"], imp: "bilgi",
  kurum: "TCMB", tur: "Enflasyon Raporu 2026-IV", rg: null, yur: "12 Kasım 2026",
  title: "TCMB yıl sonu enflasyon tahminini %29,5'e yükseltti",
  spot: "Merkez Bankası, yılın son Enflasyon Raporu'nda 2026 sonu tahminini %28'den %29,5'e, 2027 sonu tahminini %15'ten %21'e çıkardı.",
  key: { old: "%28", neu: "%29,5", ks: "2026 yıl sonu enflasyon tahmini" },
  body: [
    "TCMB Başkanı Fatih Karahan, Enflasyon Raporu 2026-IV'ü 12 Kasım'da İstanbul'da açıkladı. 2028 sonu tahmini %9'dan %13,5'e yükseldi; 2029 sonu için tahmin %9.",
    "2026 gıda enflasyonu tahmini %28,5'ten %31,3'e çıktı. Ortalama petrol varsayımı 2026 için 87,8 dolardan 97,2 dolara, 2027 için 76,4 dolardan 86,7 dolara yükseltildi.",
    "2026 ara hedefi %24'te korundu; 2027 ve 2028 ara hedefleri %21 ve %13,5 oldu. APİ portföyüne ilişkin yol haritası, Aralık'ta yayımlanacak 2027 Para Politikası metninde paylaşılacak."
  ],
  chart: { cap: "Yıl sonu enflasyon tahmini (%)", a: "Ağustos raporu", b: "Kasım raporu", rows: [["2026", 28, 29.5], ["2027", 15, 21], ["2028", 9, 13.5]] },
  tbl: { cap: "Tahminler", h: ["Yıl sonu", "Ağustos raporu", "Kasım raporu"], r: [["2026", "%28", "%29,5"], ["2027", "%15", "%21"], ["2028", "%9", "%13,5"], ["2029", "–", "%9"]] },
  who: ["Finans ve bütçe birimleri", "Dış ticaret şirketleri", "Fiyatlama ekipleri"],
  todo: ["2027 bütçe ve fiyatlama varsayımlarınızı yeni tahminlerle karşılaştırın"],
  dates: [["2026-11-12", "Rapor açıklandı"]],
  src: [["Bloomberg HT", "https://bloomberght.com/yilin-son-enflasyon-raporu-3794290"], ["Endeks24", "https://www.endeks24.com/tcmb-2027-enflasyon-tahminini-yuzde-15ten-21e-cikardi-2028-de-yukseldi"], ["Alomaliye", "https://www.alomaliye.com/2026/11/12/tcmbnin-yil-sonu-enflasyon-tahmini-yuzde-29-5/"]] },

{ id: "osb-yesil-donusum", d: "2026-11-12", kind: "g", cat: ["finans"], imp: "kolay",
  kurum: "Sanayi ve Teknoloji Bakanlığı", tur: "Destek paketi", rg: null, yur: "12 Kasım 2026",
  title: "OSB'lerdeki şirketlere özel yeşil dönüşüm destek paketi imzalandı",
  spot: "COP31 kapsamında imzalanan paket, organize sanayi bölgelerindeki işletmelerin yeşil dönüşüm yatırımları için finansmana erişimini kolaylaştırmayı hedefliyor.",
  key: { kv: "5 milyar €+", ks: "2030'a kadar hedeflenen uluslararası finansman" },
  body: [
    "Sanayi ve Teknoloji Bakanı Mehmet Fatih Kacır, OSB'lerdeki Şirketlere Özel Yeşil Dönüşüm Destek Paketi'nin tanıtım ve imza törenine COP31 kapsamında katıldı.",
    "Paketin amacı, OSB'lerde faaliyet gösteren işletmelerin yeşil dönüşüm yatırımları için finansmana erişimini kolaylaştırmak.",
    "Kacır, 2030'a kadar Türkiye'nin yeşil dönüşüm hedefleri için 5 milyar avronun üzerinde uluslararası finansman sağlanmasını hedeflediklerini söyledi."
  ],
  who: ["OSB'deki sanayi işletmeleri", "Finans birimleri", "Enerji yöneticileri"],
  todo: ["Başvuru koşulları açıklandığında OSB müdürlüğünüzden bilgi alın"],
  dates: [["2026-11-12", "İmza töreni"]],
  src: [["Milliyet", "https://www.milliyet.com.tr/haber/7699464/"]] },

/* ───────── 13 KASIM ───────── */
{ id: "taksi-mali-cihaz", d: "2026-11-13", kind: "m", cat: ["vergi"], imp: "kolay",
  kurum: "GİB", tur: "Duyuru", rg: null, yur: "13 Kasım 2026",
  title: "Taksi mali cihaza geçiş süresi 25 Aralık'a uzatıldı",
  spot: "GİB, taksilerde mali cihaz kullanımına geçiş için son tarihi 16 Kasım'dan 25 Aralık 2026'ya erteledi. Zorunluluk sürüyor; yalnızca süre değişti.",
  key: { old: "16 Kasım", neu: "25 Aralık", ks: "Geçiş için son tarih" },
  body: [
    "591 Sıra No.lu VUK Genel Tebliği (RG 13.02.2026, 33167) ile getirilen geçiş takvimi ikinci kez uzatıldı.",
    "İlk son tarih 1 Eylül 2026'ydı; ardından 16 Kasım'a ertelenmişti. Yeni son tarih 25 Aralık 2026."
  ],
  tbl: { cap: "Takvim", h: ["Aşama", "Tarih"], r: [["591 Sıra No.lu tebliğin yayımı", "13 Şubat 2026"], ["İlk geçiş tarihi", "1 Eylül 2026"], ["Birinci uzatma", "16 Kasım 2026"], ["Yeni son tarih", "25 Aralık 2026"]] },
  who: ["Taksi işletmecileri", "Mali müşavirler", "Cihaz tedarikçileri"],
  todo: ["Cihaz siparişini ve kurulumunu 25 Aralık'tan önce tamamlayın", "Mükellef listenizdeki taksi işletmelerini ayrıca takip edin"],
  warn: "Süre iki kez uzatıldı. Yeni bir erteleme beklentisiyle planlama yapmayın.",
  dates: [["2026-11-13", "Duyuru"], ["2026-12-25", "Geçiş son günü"]],
  src: [["Alomaliye, GİB duyurusu", "https://www.alomaliye.com/?p=194269"], ["Hukukçular Evi", "https://hukukcularevi.com/hukuk-gundemi/taksi-mali-cihaz-sure-uzatimi-25-aralik-2026-gib-duyurusu-591-sira-no-lu-vuk-genel-tebligi-13-kasim-2026/"]] },

{ id: "spk-2026-80", d: "2026-11-13", kind: "m", cat: ["denetim", "finans"], imp: "bilgi",
  kurum: "SPK", tur: "Bülten 2026/80", rg: null, yur: "13 Kasım 2026",
  title: "SPK bülteni: üç payda 65 kişiye suç duyurusu ve işlem yasağı",
  spot: "SPK'nın 2026/80 sayılı bülteninde üç paydaki incelemeler sonucunda 65 kişi hakkında suç duyurusu ve 2 yıllık işlem yasağı kararı yer aldı.",
  key: { kv: "65 kişi", ks: "2 yıl işlem yasağı" },
  body: [
    "KARCL, GRTHO ve EDATA paylarında yürütülen incelemeler sonuçlandı.",
    "Kişiler hakkında suç duyurusunda bulunulmasına ve 2 yıl süreyle pay piyasalarında işlem yasağı getirilmesine karar verildi. Bültende A1 Capital, Pardus ve Tera kurumlarına ilişkin yasaklar da yer aldı."
  ],
  who: ["Aracı kurumlar", "Halka açık şirketler"],
  todo: ["Aracı kurumlar: işlem yasağı listesini müşteri sistemlerine işleyin"],
  dates: [["2026-11-13", "Bülten"]],
  src: [["Hukukçular Evi", "https://hukukcularevi.com/hukuk-gundemi/spk-2026-80-bulteni-karcl-grtho-edata-suc-duyurusu-islem-yasagi-a1-tera-pardus-2026/"]] },

/* ───────── 14 KASIM ───────── */
{ id: "jetco-singapur", d: "2026-11-14", kind: "m", cat: ["distic"], imp: "bilgi",
  kurum: "Ticaret Bakanlığı", tur: "Protokol", rg: null, yur: "14 Kasım 2026",
  title: "Türkiye ile Singapur arasında JETCO Protokolü imzalandı",
  spot: "Ekonomi ve Ticaret Ortak Komitesi (JETCO) Protokolü İstanbul'da imzalandı. İki ülke arasında düzenli istişare mekanizması kuruldu.",
  key: { kv: "1,4 milyar $", ks: "2026 sonu için beklenen ticaret hacmi (üst sınır)" },
  body: [
    "Protokolle iki ülke arasında ticaret ve yatırım konularında düzenli istişare mekanizması kuruldu.",
    "İkili ticaret hacmi 2025'te 1,1 milyar dolar oldu; 2026 sonunda 1,3–1,4 milyar dolar bekleniyor. İki ülke arasındaki serbest ticaret anlaşması 14 Kasım 2015'te imzalanmıştı."
  ],
  tbl: { h: ["Gösterge", "Değer"], r: [["Ticaret hacmi, 2025", "1,1 milyar $"], ["Beklenti, 2026 sonu", "1,3–1,4 milyar $"], ["Serbest ticaret anlaşması", "14 Kasım 2015"]] },
  who: ["İhracatçılar", "Asya pazarındaki firmalar", "Lojistik firmaları"],
  todo: ["Singapur'a ihracatta STA kapsamındaki tercihli tarifeyi ve menşe kurallarını kontrol edin"],
  dates: [["2026-11-14", "İmza"]],
  src: [["Bloomberg HT", "https://www.bloomberght.com/turkiye-ile-singapur-arasinda-jetco-protokolu-imzalandi-3794657"], ["Politikam", "https://www.politikam.com/turkiye-singapur-jetco-protokolu-imzalandi-ticaret-hacmi-1-4-milyar-dolar"]] },

{ id: "adil-gecis-genelgesi", d: "2026-11-14", kind: "m", cat: ["muhasebe"], imp: "bilgi",
  kurum: "Cumhurbaşkanlığı", tur: "Genelge 2026/13", rg: "33430", yur: "Yayım günü",
  title: "Ulusal Adil Geçiş Stratejisi (2027–2029) genelgesi yayımlandı",
  spot: "Yeşil ve dijital dönüşümün çalışma hayatına etkilerini yönetmeyi hedefleyen strateji 17 sektörü ve 33 temayı kapsıyor.",
  key: { kv: "17 sektör", ks: "33 tema, 3 politika alanı" },
  body: [
    "Strateji, dönüşümden etkilenecek sektörlerde istihdamı korumayı ve çalışanların yeni becerilere uyumunu hedefliyor. Beceri uyumu ve sosyal koruma öne çıkan başlıklar.",
    "33 tema üç politika alanı altında toplanıyor. İlk pilot uygulamalar 2027'de dört sektörde başlayacak."
  ],
  who: ["İK ve bordro birimleri", "Sanayi işletmeleri", "Mesleki eğitim kurumları"],
  todo: ["Pilot sektörler açıklandığında işletmenizin kapsama girip girmediğini kontrol edin"],
  dates: [["2026-11-14", "Yayım"], ["2027-01-01", "Strateji dönemi başlıyor"]],
  src: [["Alomaliye, genelge metni", "https://www.alomaliye.com/?p=194284"], ["CNBC-e", "https://www.cnbce.com/haberler/17-sektor-belirlendi-bakan-isikhandan-2053-net-sifir-emisyon-hedefi-aciklamasi-h41809"]] },

/* ───────── 15 KASIM ───────── */
{ id: "ihale-borc-siniri", d: "2026-11-15", kind: "m", cat: ["vergi", "muhasebe"], imp: "kolay",
  kurum: "Kamu İhale Kurumu", tur: "Tebliğ yürürlüğü", rg: "33402", yur: "15 Kasım 2026",
  title: "Kamu ihalelerinde vergi ve SGK borcu sınırı 50.000 TL oldu",
  spot: "İhaleye katılımda engel sayılan kesinleşmiş SGK prim ve vergi borcu sınırı 5.000 TL'den 50.000 TL'ye çıktı. Değişiklik 15 Kasım'da yürürlüğe girdi.",
  key: { old: "5.000 TL", neu: "50.000 TL", ks: "Kesinleşmiş borç sınırı" },
  body: [
    "16 Ekim 2026 tarihli ve 33402 sayılı Resmî Gazete'de yayımlanan tebliğ değişikliği, yayımından bir ay sonra, 15 Kasım'da yürürlüğe girdi.",
    "Kamu İhale Genel Tebliği'nin 17.3.2 ve 17.4.1 maddelerinde yer alan sınır, 1 Mart 2018'den bu yana 5.000 TL olarak uygulanıyordu.",
    "Yeni sınır 15 Kasım'dan itibaren ilan edilen ihalelerde geçerli. Daha önce ilan edilen ihalelerde eski 5.000 TL sınırı uygulanıyor."
  ],
  tbl: { cap: "Önce ve sonra", h: ["", "Önce", "Sonra"], r: [["SGK prim borcu sınırı", "5.000 TL", "50.000 TL"], ["Vergi borcu sınırı", "5.000 TL", "50.000 TL"], ["Uygulandığı ihaleler", "15 Kasım'dan önce ilan edilenler", "15 Kasım'dan itibaren ilan edilenler"]] },
  who: ["İhaleye giren firmalar", "Muhasebe ve finans birimleri", "Mali müşavirler"],
  todo: ["Hangi sınırın geçerli olduğunu ihalenin ilan tarihinden belirleyin", "SGK ve vergi dairesi borç durumu belgelerini teklif öncesi güncelleyin", "Sınıra yaklaşan borçlar için ödeme planını ihale takvimine göre ayarlayın"],
  warn: "Sınır kesinleşmiş borçlar için geçerli ve ilan tarihine göre belirleniyor.",
  dates: [["2026-10-16", "Tebliğ yayımı"], ["2026-11-15", "Yürürlük"]],
  src: [["Alomaliye", "https://www.alomaliye.com/2026/10/16/kamu-ihalelerinde-sgk-ve-vergi-borcu-siniri-50-bin-tl/"], ["CottGroup", "https://www.cottgroup.com/tr/mevzuat/item/kamu-ihalelerinde-vergi-ve-sgk-prim-borcu-siniri-50000-tlye-yukseltildi"]] },

{ id: "spk-tasfiye-geri-alim", d: "2026-11-15", kind: "m", cat: ["finans"], imp: "bilgi",
  kurum: "SPK", tur: "Basın duyurusu", rg: null, yur: "15 Kasım 2026",
  title: "Tasfiyedeki fon payları şirketlere kapanış fiyatından satılabiliyor",
  spot: "SPK, olağanüstü tasfiyedeki fonların portföyündeki payların ilgili halka açık şirketlere geri alım yoluyla satılabileceğini açıkladı.",
  key: { kv: "Kapanış fiyatı", ks: "Borsadaki son işlem günü esas" },
  body: [
    "Olağanüstü tasfiyedeki fonların payları, ilgili halka açık şirketlere geri alım yoluyla satılabiliyor.",
    "Satış fiyatı, payın borsada işlem gördüğü son günün kapanış fiyatı. Amaç, varlıkların objektif bir fiyatla nakde çevrilmesi ve fon yatırımcılarının korunması."
  ],
  who: ["Halka açık şirketler", "Fon yatırımcıları", "Portföy yönetim şirketleri"],
  todo: [],
  dates: [["2026-11-15", "Duyuru"]],
  src: [["Bloomberg HT", "https://www.bloomberght.com/spk-dan-olaganustu-tasfiyedeki-pay-geri-alimlarina-iliskin-aciklama-3794681"], ["CNBC-e", "https://www.cnbce.com/borsa/spkdan-tasfiye-edilen-fonlardaki-hisseler-icin-yeni-aciklama-h41854"]] },

/* ───────── GÜMRÜK VE DIŞ TİCARET (11–17 KASIM) ───────── */
{ id: "ab-soguk-celik-antidamping", d: "2026-11-16", kind: "m", cat: ["distic", "gumruk"], imp: "yuk",
  kurum: "Avrupa Komisyonu", tur: "Uygulama Tüzüğü (AB) 2026/2547", rg: null, yur: "17 Kasım 2026",
  title: "AB, Türk soğuk haddelenmiş çeliğine kesin antidamping vergisi getirdi",
  spot: "Avrupa Komisyonu; Hindistan, Japonya, Tayvan, Türkiye ve Vietnam menşeli soğuk haddelenmiş yassı çeliğe kesin antidamping vergisi uyguluyor. Türk üreticiler için oranlar %3 ile %7,8 arasında; uygulama 17 Kasım'da başladı.",
  key: { kv: "%3 – %7,8", ks: "Türkiye menşeli ürünlerde AB antidamping vergisi" },
  body: [
    "AB Resmî Gazetesi'nde 16 Kasım'da yayımlanan 2026/2547 sayılı Uygulama Tüzüğü ile kesin antidamping vergisi 17 Kasım'dan itibaren uygulanıyor. Kapsamda 7209, 7211 ve 7225/7226 alt pozisyonlarındaki soğuk haddelenmiş yassı ürünler var.",
    "Türkiye için oranlar: Borçelik %7,8, Tatmetal %3,0, soruşturmada iş birliği yapan diğer firmalar %4,9, diğer tüm ithalat %7,8. Vergi, AB sınırındaki CIF fiyat üzerinden ve gümrük vergisinden önce hesaplanıyor.",
    "Komisyon Ağustos'ta Borçelik için %9,7, Tatmetal için %5,6, iş birliği yapan diğer firmalar için %7,3 önermişti; firmaların itirazlarından sonra oranlar düşürüldü. Diğer ülkelerde oranlar Hindistan için %9,5, Vietnam için %16, Tayvan için %20,7–%27, Japonya için %27,9.",
    "Soruşturma 18 Eylül 2025'te başlatılmıştı."
  ],
  tbl: { cap: "Türkiye menşeli ürünler", h: ["Üretici", "Vergi", "TARIC ek kodu"], r: [["Borçelik Çelik Sanayi Ticaret A.Ş.", "%7,8", "88GI"], ["Tatmetal Çelik Sanayi ve Ticaret A.Ş.", "%3,0", "88GJ"], ["İş birliği yapan diğer firmalar", "%4,9", "–"], ["Diğer tüm ithalat", "%7,8", "8999"]] },
  who: ["Çelik ihracatçıları", "AB'deki alıcılar", "Gümrük müşavirleri"],
  todo: ["AB'ye kesilen faturanın tüzükteki ticari fatura şartlarını karşıladığını kontrol edin", "Fiyat tekliflerinizi yeni vergi oranına göre güncelleyin"],
  warn: "Firmaya özel oran, AB gümrüğüne geçerli bir ticari fatura sunulduğunda uygulanır; aksi hâlde 'diğer tüm ithalat' oranı devreye girer.",
  dates: [["2025-09-18", "Soruşturma başladı"], ["2026-11-16", "Tüzük yayımlandı"], ["2026-11-17", "Vergi uygulanmaya başladı"]],
  src: [["mevzuat.net, AB mevzuatı özeti", "https://www.mevzuat.net/"], ["Eurometal", "https://eurometal.net/?p=44083"], ["GMK Center", "https://gmk.center/?p=130784"], ["KPMG, soruşturma duyurusu", "https://kpmgvergi.com/yayinlar/mali-bultenler/gumruk/ab-tarafindan-soguk-haddelenmis-sac-cinsi-esyalara-yonelik-anti-damping-sorusturmasi-duyurusu-yayimlanmistir/3244"]] },

{ id: "gm-sinavi-cevap-anahtari", d: "2026-11-16", kind: "d", cat: ["gumruk"], imp: "bilgi",
  kurum: "Ticaret Bakanlığı / Hacettepe Üniversitesi", tur: "Sınav duyurusu", rg: null, yur: "15 Kasım 2026 (sınav)",
  title: "Gümrük müşavirliği ve yardımcılığı sınavlarının cevap anahtarları yayımlandı",
  spot: "15 Kasım'da Ankara'da yapılan gümrük müşavirliği ve gümrük müşavir yardımcılığı yazılı sınavlarının soru kitapçıkları ve cevap anahtarları yayımlandı.",
  key: { kv: "15 Kasım", ks: "Yazılı sınav, Ankara" },
  body: [
    "Sınavlar 15 Kasım 2026 Pazar günü Ankara'da Hacettepe Üniversitesi tarafından yapıldı. Soru kitapçıkları ve cevap anahtarları Hacettepe'nin sınav sayfasında (sinav.hacettepe.edu.tr) yayımlandı.",
    "Sınavın uygulama kılavuzu Ticaret Bakanlığı'nın 5 Ekim tarihli duyurusuyla aynı adreste yayımlanmıştı. Ön kayıt başvuruları 4 Mayıs–22 Haziran 2026 arasında alınmıştı.",
    "Geçen yıl yazılı sınav 30 Kasım 2025'te yapılmış, sözlü sınava katılmaya hak kazananlar Mart 2026'da duyurulmuştu."
  ],
  who: ["Gümrük müşavirliği adayları", "Gümrük müşavir yardımcılığı adayları", "Hazırlık kursları"],
  todo: ["Cevap anahtarıyla doğru ve yanlışlarınızı sayıp tahmini puanınızı hesaplayın", "Sonuç ve itiraz takvimi için Hacettepe sınav sayfasını takip edin"],
  dates: [["2026-10-05", "Uygulama kılavuzu"], ["2026-11-15", "Yazılı sınav"], ["2026-11-16", "Cevap anahtarları"]],
  src: [["mevzuat.net duyurusu", "https://www.mevzuat.net/"], ["Ticaret Bakanlığı, sınav duyurusu", "https://ticaret.gov.tr/duyurular/2026-yili-gumruk-musavirligi-ve-gumruk-musavir-yardimciligi-sinavi-duyurusu"], ["Gümrükler GM ön kayıt yazısı", "https://orgtr.org/?p=33818"], ["Ticaret Bakanlığı, 2025 sözlü sınav duyurusu", "https://ticaret.gov.tr/duyurular/2025-yili-gumruk-musavirligi-sozlu-sinavina-katilmaya-hak-kazanan-adaylara-iliskin-duyuruguncelleme"]] },

{ id: "ykts-police-zorunlu-alan", d: "2026-11-16", kind: "m", cat: ["gumruk"], imp: "yuk",
  kurum: "Gümrükler Genel Müdürlüğü", tur: "Yazı 128561799", rg: null, yur: "Duyuru tarihi",
  title: "YKTS'de poliçe kayıtlarında gönderici, alıcı ve brüt ağırlık zorunlu oldu",
  spot: "Yükümlü Kayıt ve Takip Sistemi'nde abonman sözleşmelerine bağlı sigorta poliçelerinin kaydında üç alan zorunlu hâle getirildi.",
  key: { kv: "3 alan", ks: "Gönderici, alıcı ve brüt ağırlık veya miktar" },
  body: [
    "YKTS üzerinden abonman sözleşmelerine bağlı poliçeler kaydedilirken gönderici ve alıcının adı veya unvanı ile eşyanın brüt ağırlığı ya da miktarı artık zorunlu alan.",
    "Değişiklik 16 Kasım'da duyuruldu. 6 Kasım'da yayımlanan ayrı bir yazıyla da yükümlülerin onaylanmamış vekâlet kayıtlarını iptal edebilmesine imkân tanınmıştı."
  ],
  who: ["Gümrük müşavirleri", "Sigorta acenteleri", "İthalatçı ve ihracatçılar"],
  todo: ["Poliçe kayıt şablonlarınıza üç zorunlu alanı ekleyin", "Onaylanmamış vekâlet kayıtlarınızı gözden geçirip gerekirse iptal edin"],
  dates: [["2026-11-06", "Vekâlet kaydı iptali yazısı"], ["2026-11-16", "Zorunlu alanlar duyuruldu"]],
  src: [["mevzuat.net, güncellik listesi", "https://www.mevzuat.net/Guncellik.aspx"]] },

{ id: "dir-kumas-kirpinti-gozetim", d: "2026-11-17", kind: "d", cat: ["gumruk", "distic"], imp: "bilgi",
  kurum: "Ticaret Bakanlığı", tur: "Yazı 128536369", rg: null, yur: "Yazı tarihi: 13 Kasım 2026",
  title: "DİR'de oluşan kumaş kırpıntıları gözetim kaydından muaf tutulmadı",
  spot: "Dahilde işleme rejimi kapsamında oluşan kumaş kırpıntılarının gözetim kaydından muaf tutulması ya da kayıt işlemlerinin kolaylaştırılması talebi uygun görülmedi.",
  key: { kv: "Talep reddedildi", ks: "2020/9 sayılı Tebliğ uygulanmaya devam ediyor" },
  body: [
    "Ticaret Bakanlığı'nın 13 Kasım tarihli yazısına göre, DİR kapsamında oluşan kumaş kırpıntılarının ithalatında kayda alma uygulamasından muafiyet ya da kolaylık talebi kabul edilmedi.",
    "İthalat işlemleri, bazı tekstil, konfeksiyon ve deri ürünlerinde kayda alma uygulamasını düzenleyen İthalatta Gözetim Uygulanmasına İlişkin Tebliğ (2020/9) hükümlerine göre yürütülecek."
  ],
  who: ["Tekstil ve konfeksiyon üreticileri", "DİR kullanan firmalar", "Gümrük müşavirleri"],
  todo: ["Kırpıntı ithalatlarında kayıt belgesi sürecini olağan şekilde planlayın"],
  dates: [["2026-11-13", "Yazı"], ["2026-11-17", "Duyuru"]],
  src: [["mevzuat.net duyurusu", "https://www.mevzuat.net/"], ["Ticaret Bakanlığı, 2020/9 sayılı Tebliğ", "https://ticaret.gov.tr/haberler/ithalatta-gozetim-uygulanmasina-iliskin-teblig-teblig-no2020-9de-degisiklik-yapilmasina-dair-teblig-yayimlandi"]] },

{ id: "ihracatci-birlikleri-ticaret-savunma", d: "2026-11-17", kind: "d", cat: ["distic", "gumruk"], imp: "bilgi",
  kurum: "Orta Anadolu İhracatçı Birlikleri", tur: "Sirküler özeti", rg: null, yur: "Son bir hafta",
  title: "İhracatçı birliklerinden: Ukrayna, ABD ve İngiltere'den ticaret savunma duyuruları",
  spot: "OAİB'nin son bir haftada yayımladığı sirkülerler arasında Türk ihracatını ilgilendiren ticaret savunma soruşturmaları, önlemler ve iki JETCO toplantısı öne çıkıyor.",
  key: { kv: "6 sirküler", ks: "Ticaret savunması ve ikili ticaret" },
  body: [
    "OAİB'nin sirküler sayfasında son bir haftada yayımlanan ve dış ticaret ile ticaret savunmasına ilişkin başlıklar aşağıda. Sayfa yalnızca başlıkları gösteriyor; ayrıntılar ilgili sirkülerlerde.",
    "AB'nin manganez ve silikon bazlı ferro-alaşımlara yönelik korunma önlemi 18 Kasım 2025'te üç yıllığına yürürlüğe girmişti; yeni sirküler bu önlemle ilgili."
  ],
  tbl: { cap: "Sirküler başlıkları", h: ["Konu", "Birim", "Sirküler no"], r: [["AB manganez ve silikon bazlı alaşımlarda korunma önlemi", "Ankara Demir ve Demir Dışı Metaller İB", "2026/220-11276"], ["Kablo ve iletken ürünlerine anti-damping soruşturması (Ukrayna)", "Sirküler Birimi", "2026/1796-11182"], ["ABD anti-damping soruşturması", "Ankara Demir ve Demir Dışı Metaller İB", "2026/217-11145"], ["Birleşik Krallık telafi edici vergi nihai kararı", "Sirküler Birimi", "2026/1752-10981"], ["Türkiye-Irak JETCO III. Dönem Toplantısı", "Sirküler Birimi", "2026/1808-11255"], ["Türkiye-Güney Afrika 1. Dönem JETCO Toplantısı", "Sirküler Birimi", "2026/1797-11183"]] },
  who: ["Çelik ve metal ihracatçıları", "Kablo üreticileri", "Irak ve Güney Afrika'ya ihracat yapan firmalar"],
  todo: ["Ürününüz bu soruşturmaların kapsamındaysa birliğinizle iletişime geçip soruşturma takvimini takip edin"],
  dates: [["2025-11-18", "AB ferro-alaşım korunma önlemi başladı"]],
  src: [["OAİB sirkülerleri", "https://oaib.org.tr/duyurular-ve-bilgilendirme"], ["Reed Smith, AB ferro-alaşım önlemi", "https://www.reedsmith.com/our-insights/blogs/trade-compliance-resource-hub/4827/eu-introduces-safeguard-measures-on-ferro-alloys-imports/"]] },

{ id: "dir-maden-metal-genelgesi", d: "2026-11-12", kind: "m", cat: ["gumruk", "distic"], imp: "kolay",
  kurum: "Ticaret Bakanlığı İhracat Genel Müdürlüğü", tur: "Genelge değişikliği", rg: null, yur: "10 Kasım 2026 (onay)",
  title: "Dahilde işleme: rüzgâr kulesi ihracatında DİİB süresi 12 ay olabilecek",
  spot: "Maden, metal ve orman ürünleri sektörlerine ilişkin dahilde işleme rejimi genelgesinde üç değişiklik yapıldı. Değişiklik, Bakanlık Makamının 10 Kasım tarihli onayıyla uygun görüldü.",
  key: { kv: "12 ay", ks: "Rüzgâr türbini kulesi ihracatında DİİB süresi" },
  body: [
    "Değişiklik, Bakanlık Makamının 10 Kasım 2026 tarihli ve 128418291 sayılı onayıyla uygun görüldü; ihracatçı birlikleri 12 Kasım'da duyurdu.",
    "Boru şeklindeki rüzgâr türbini çelik kuleleri ve kule bölümleri ihracatına yönelik düzenlenen dahilde işleme izin belgelerinin (DİİB) süresi 12 ay olarak belirlenebilecek.",
    "Bu belgeler kapsamında ithal edilen levha hâlindeki sıcak saclar (GTP 7208) için asgari yurt içi alım zorunluluğu uygulanmayacak.",
    "Genelgenin Ek-2 listesindeki 'Çelik filmaşin (GTP: 7213, 7221 ve 7227)' ifadesi 'Demir veya alaşımsız çelikten filmaşin (GTP: 7213)' olarak değiştirildi."
  ],
  tbl: { cap: "Üç değişiklik", h: ["Konu", "Değişiklik"], r: [["DİİB süresi", "Rüzgâr kulesi ihracatında 12 ay belirlenebilir"], ["Asgari yurt içi alım", "Bu DİİB'lerde ithal edilen sıcak saclar (7208) için uygulanmaz"], ["Ek-2 listesi", "Filmaşin kapsamı yalnızca 7213 pozisyonuna indirildi"]] },
  who: ["Rüzgâr kulesi üreticileri ve ihracatçıları", "Çelik ithalatçıları", "DİR kullanan firmalar ve müşavirleri"],
  todo: ["Yeni DİİB başvurularında 12 aylık süre talebini değerlendirin", "Ek-2 kapsamındaki filmaşin ithalatlarınızı yeni GTP sınırına göre kontrol edin"],
  dates: [["2026-11-10", "Makam onayı"], ["2026-11-12", "Birliklerin duyurusu"]],
  src: [["mevzuat.net duyurusu", "https://www.mevzuat.net/"], ["LinkedIn, Murat Yıldız paylaşımı", "https://www.linkedin.com/in/murat-yildiz-1509158a/"], ["OAİB sirkülerleri", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },

{ id: "kdv-beyannamesi-511", d: "2026-11-11", kind: "m", cat: ["vergi"], imp: "usul",
  kurum: "GİB", tur: "Duyuru", rg: null, yur: "Ekim 2026 dönemi",
  title: "KDV beyannamesine 511 'Vergiye Tabi Olmayan İşlemler' satırı eklendi",
  spot: "GİB, 1 No.lu KDV beyannamesinde Ekim 2026 döneminden itibaren geçerli iki değişiklik yaptı.",
  key: { kv: "511", ks: "Yeni işlem türü: Vergiye Tabi Olmayan İşlemler" },
  body: [
    "Beyannamenin Matrah sayfasındaki Diğer İşlemler tablosuna 511 'Vergiye Tabi Olmayan İşlemler' işlem türü eklendi. Bu satırdaki matrah Toplam Matrah'ı etkilemeyecek, vergi ise Hesaplanan KDV alanına eklenecek.",
    "Sonuç Hesapları sayfasındaki 'Teslim ve Hizmetlerin Karşılığını Teşkil Eden Bedel (Kümülatif)' alanı beyannameden ve beyanname PDF'inden kaldırıldı."
  ],
  who: ["KDV mükellefleri", "Mali müşavirler", "Muhasebe yazılımı sağlayıcıları"],
  todo: ["Ekim dönemi beyannamesinde 511 satırına girecek işlemleri belirleyin", "Muhasebe programınızın beyanname aktarımını güncelleyin"],
  dates: [["2026-11-11", "Duyuru"]],
  src: [["Alomaliye, GİB duyurusu", "https://www.alomaliye.com/2026/11/11/kdv-beyannamesinde-degisiklik-11-11-2026/"]] },

{ id: "kayda-bagli-ihracat-bakliyat", d: "2026-11-11", kind: "m", cat: ["distic", "gumruk"], imp: "usul",
  kurum: "OAİB / UİB", tur: "Duyuru", rg: null, yur: "Duyuru tarihi",
  title: "Nohut, yeşil mercimek ve fasulye ihracatında kayıt işlemleri değişti",
  spot: "Kayda bağlı ihracat listesindeki nohut, yeşil mercimek ve adi fasulyede kayıt işlemlerinin usulü değişti; kaydı yalnızca OAİB Genel Sekreterliği yapıyor.",
  key: { kv: "3 ürün", ks: "Kayıt yalnızca OAİB Genel Sekreterliği'nden" },
  body: [
    "Duyuru, OAİB'nin 30 Ekim 2026 tarihli ve 10713 sayılı yazısına dayanıyor; Uludağ İhracatçı Birlikleri 11 Kasım'da üyelerine duyurdu.",
    "OAİB Genel Sekreterliği koordinatör birlik olarak belirlendi ve kayıt işlemlerini yapan tek kurum.",
    "Ürünler, İhracı Kayda Bağlı Mallar Listesi'ne (İhracat: 2006/7) 2021 ve 2023'teki değişikliklerle eklenmişti."
  ],
  tbl: { h: ["Ürün", "GTİP", "Listeye eklenme"], r: [["Nohut (tohumluk olmayan)", "0713.20.00.00.19", "2021/09 değişikliği"], ["Yeşil mercimek", "0713.40.00.00.12", "2023/06 değişikliği"], ["Adi fasulye (beyaz fasulye dahil)", "0713.33.90.00.19", "2023/06 değişikliği"]] },
  who: ["Bakliyat ihracatçıları", "Gümrük müşavirleri"],
  todo: ["Kayıt taleplerinizi OAİB Genel Sekreterliği'ne yönlendirin: 0312 447 27 40 (dahili 1402–1408)"],
  dates: [["2026-10-30", "OAİB yazısı"], ["2026-11-11", "Birlik duyurusu"]],
  src: [["mevzuat.net duyurusu", "https://www.mevzuat.net/"], ["OAİB sirkülerleri", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },

{ id: "bugday-karantina-tilletia", d: "2026-11-11", kind: "m", cat: ["gumruk", "distic"], imp: "yuk",
  kurum: "Tarım ve Orman Bakanlığı / Ticaret Bakanlığı", tur: "Yönetmelik eki değişikliği", rg: null, yur: "Duyuru tarihi",
  title: "Buğday ithalatında iki karantina etmeni bulaşık sevkiyatlar kabul edilmeyecek",
  spot: "Bitki Karantinası Yönetmeliği'nin ek listelerindeki değişiklikle, laboratuvar analizinde Tilletia indica veya Tilletia barclayana bulaşık çıkan buğday sevkiyatları ülkeye kabul edilmeyecek.",
  key: { kv: "2 etmen", ks: "Tilletia indica ve Tilletia barclayana" },
  body: [
    "Ticaret Bakanlığı, Tarım ve Orman Bakanlığı'nın yazısına atıfla buğday ithalatındaki analizlere ilişkin değişikliği ihracatçı birlikleri üzerinden duyurdu.",
    "Dayanak, 6 Mayıs 2026 tarihli ve 33245 sayılı Resmî Gazete'de yayımlanan Bitki Karantinası Yönetmeliği'nin Ek-1 ve Ek-2 listeleri.",
    "Bu iki etmen Türkiye'de bulunmuyor. Laboratuvar analizinde bulaşık olduğu tespit edilen sevkiyatlar kabul edilmeyecek."
  ],
  who: ["Buğday ithalatçıları", "Un ve makarna sanayicileri", "Gümrük müşavirleri"],
  todo: ["Tedarikçi ülkenin bitki sağlık sertifikasında bu etmenlere ilişkin beyanı kontrol edin", "Alım sözleşmelerinize ret durumunda sorumluluk hükmü ekleyin"],
  dates: [["2026-05-06", "Yönetmelik"], ["2026-11-11", "Duyuru"]],
  src: [["mevzuat.net duyurusu", "https://www.mevzuat.net/"], ["OAİB sirkülerleri", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },

{ id: "cin-ihracat-kontrolleri", d: "2026-11-11", kind: "d", cat: ["distic"], imp: "bilgi",
  kurum: "Ticaret Bakanlığı / OAİB", tur: "Duyuru", rg: null, yur: "Ekim 2026 (Çin)",
  title: "Çin 40 kritik teknolojide ihracat kontrolü getiriyor",
  spot: "Ticaret Bakanlığı, Çin Ticaret Bakanlığı'nın (MOFCOM) 16 ve 19 Ekim'de yayımladığı ihracat kontrolü duyurularını ihracatçı birlikleri üzerinden paylaştı.",
  key: { kv: "40 teknoloji", ks: "Planlanan: 14'ü tamamen yasak, 26'sı lisansa bağlı" },
  body: [
    "Duyurular, Çin'in 1 Aralık 2020 tarihli İhracat Kontrol Kanunu'na dayanıyor ve 2026/48–52 numaralı beş ayrı duyurudan oluşuyor.",
    "2026/48 ile yapay zekâ, biyotıp ve fotovoltaik/güneş alanlarında 40 kritik teknoloji belirlendi; bunlardan 14'ünün ihracatının tamamen yasaklanması, 26'sının lisansa bağlanması planlanıyor.",
    "2026/49 sivil insansız hava araçlarını, 2026/50 tünel açma makinelerini ilgili teknoloji ve bileşenleriyle kapsıyor. 2026/51 ile tarak başlıkları, pompalar ve parçaları MOFCOM lisansına bağlandı; 2026/52 ile çift kullanımlı eşyanın sınıflandırma kuralları revize edildi."
  ],
  tbl: { h: ["Duyuru", "Kapsam"], r: [["2026/48", "Yapay zekâ, biyotıp, güneş: 40 kritik teknoloji"], ["2026/49", "Sivil İHA, teknoloji ve bileşenler"], ["2026/50", "Tünel açma makineleri"], ["2026/51", "Tarak başlıkları, pompalar ve parçaları (lisans)"], ["2026/52", "Çift kullanımlı eşya sınıflandırma kuralları"]] },
  who: ["Çin'den teknoloji ve makine tedarik eden ithalatçılar", "Güneş enerjisi yatırımcıları", "İnşaat ve madencilik firmaları"],
  todo: ["Çin'den tedarik ettiğiniz ürünlerin bu listelerde olup olmadığını tedarikçinizle teyit edin"],
  dates: [["2026-10-16", "MOFCOM duyuruları"], ["2026-10-19", "MOFCOM duyuruları"], ["2026-11-11", "Türkiye'de duyuru"]],
  src: [["mevzuat.net duyurusu", "https://www.mevzuat.net/"], ["OAİB sirkülerleri", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },

{ id: "ab-e-imza-karsilikli-tanima", d: "2026-11-11", kind: "d", cat: ["distic"], imp: "bilgi",
  kurum: "Ticaret Bakanlığı", tur: "Niyet Beyanı", rg: null, yur: "Henüz yürürlükte değil",
  title: "Türkiye ile AB arasında e-imzaların karşılıklı tanınması için süreç başladı",
  spot: "Elektronik imza ve mühürlerin karşılıklı tanınmasına yönelik Niyet Beyanı 9 Kasım'da Kişinev'de Avrupa Komisyonu ile teati edildi. İlk teknik toplantı Kasım içinde yapılacak.",
  key: { kv: "Niyet Beyanı", ks: "9 Kasım, Kişinev" },
  body: [
    "Niyet Beyanı, 9 Kasım'da Moldova'nın başkenti Kişinev'de düzenlenen AB-Orta Asya Dijital Bağlantısallık Platformu toplantısında teati edildi. Türkiye'yi Ticaret Bakanlığı koordinatör, BTK icracı kurum olarak temsil etti.",
    "Türkiye'de ilgili kurumların katılımıyla Ulusal Çalışma Grubu kurulacak ve karşılıklı tanıma için gereken hukuki, idari ve teknik koşulları değerlendirecek.",
    "Amaç; kamu ihalelerine uzaktan katılım, süreçlerin uzaktan takibi ve ticaretin finansmanında sınır ötesi dijital işlemleri kolaylaştırmak. Uygulama henüz yürürlükte değil."
  ],
  who: ["AB ile ticaret yapan firmalar", "AB kamu ihalelerine katılan firmalar", "Bankalar"],
  todo: [],
  dates: [["2026-10-13", "Yüksek Düzeyli Ticaret Diyaloğu"], ["2026-11-09", "Niyet Beyanı"], ["2026-11-11", "Bakanlık duyurusu"]],
  src: [["Ticaret Bakanlığı", "https://ticaret.gov.tr/haberler/turkiye-ab-ticaretinde-dijital-entegrasyon-icin-onemli-adim-elektronik-imzalarin-karsilikli-taninmasina-yonelik-is-birligi-sureci-basliyor"], ["Alomaliye", "https://www.alomaliye.com/2026/11/11/turkiye-ab-ticaretinde-e-imza-adimi/"], ["CNBC-e", "https://www.cnbce.com/haberler/e-imza-avrupaya-aciliyor-turkiye-ile-ab-arasinda-yeni-surec-basladi-h41745"]] },

/* ───────── 18 KASIM ───────── */
{ id: "iplik-damping-surdurme", d: "2026-11-18", kind: "m", cat: ["gumruk", "distic"], imp: "yuk",
  kurum: "Ticaret Bakanlığı", tur: "Tebliğ 2026/32", rg: "33434", yur: "Yayım günü",
  title: "Yedi ülkeden kesik elyaf ipliğinde damping önlemi 5 yıl daha sürecek",
  spot: "Ticaret Bakanlığı, Çin, Endonezya, Hindistan, Malezya, Pakistan, Tayland ve Vietnam menşeli sentetik ve suni devamsız lif ipliklerine uygulanan damping önlemini, nihai gözden geçirme sonunda mevcut oranlarla sürdürdü.",
  key: { kv: "5 yıl", ks: "Önlem mevcut ülke ve firma oranlarıyla devam ediyor" },
  body: [
    "2026/32 sayılı İthalatta Haksız Rekabetin Önlenmesine İlişkin Tebliğ, 18 Kasım'da Resmî Gazete'de yayımlanarak yürürlüğe girdi. Nihai gözden geçirme soruşturmasında, önlem kaldırılırsa dampingin ve yerli üreticinin zararının sürmesinin ya da yeniden ortaya çıkmasının muhtemel olduğu tespit edildi.",
    "Haberlere göre kapsam, 55.08, 55.09, 55.10 ve 55.11 pozisyonlarındaki sentetik ve suni devamsız lif iplikleri. Önlem bazı ülkelerde kilogram başına dolar, bazılarında CIF bedelin yüzdesi olarak uygulanıyor: Çin'de 0,49–0,80 $/kg, Hindistan'da 0,29–0,39 $/kg, Vietnam'da %19,48–%26,25.",
    "Önlem yürürlük tarihinden itibaren 5 yıl geçerli. Süre dolmadan yeni bir nihai gözden geçirme açılırsa, soruşturma bitene kadar uygulanmaya devam ediyor."
  ],
  tbl: { cap: "Ülke ve firma bazında önlem", h: ["Ülke / üretici", "Önlem"], r: [
    ["Çin – Nantong A-Z Textile", "0,49 $/kg"], ["Çin – diğerleri", "0,80 $/kg"],
    ["Hindistan – RSWM Limited", "0,29 $/kg"], ["Hindistan – diğerleri", "0,39 $/kg"],
    ["Endonezya – PT Apac Inti Corpora", "0,23 $/kg"], ["Endonezya – PT Kamaltex", "0,25 $/kg"],
    ["Endonezya – PT Elegant Textile Industry", "CIF %3,62"], ["Endonezya – PT Sunrise Bumi Textiles", "CIF %5,03"], ["Endonezya – diğerleri", "0,40 $/kg"],
    ["Malezya – Penfabric", "CIF %17,03"], ["Malezya – Recron", "CIF %11,26"], ["Malezya – diğerleri", "CIF %18,32"],
    ["Pakistan – Din Textile Mills", "CIF %10,02"], ["Pakistan – Margalla ve Monnoowal Textile Mills", "CIF %6,62"], ["Pakistan – diğerleri", "CIF %12,18"],
    ["Tayland – Indo-Thai Synthetic", "CIF %7,79"], ["Tayland – Lucky Spinning", "CIF %14,02"], ["Tayland – diğerleri", "CIF %20,24"],
    ["Vietnam – tebliğde adı geçen firmalar", "CIF %19,48 – %23,91"], ["Vietnam – diğerleri", "CIF %26,25"]] },
  who: ["İplik ve dokuma ithalatçıları", "Tekstil üreticileri", "Gümrük müşavirleri"],
  todo: ["Tedarikçinin tabloda adı geçen üretici olup olmadığını fatura ve menşe belgesiyle doğrulayın", "Maliyeti kilogram bazlı önlemlerde miktar, yüzde bazlı önlemlerde CIF bedel üzerinden yeniden hesaplayın", "Uzun vadeli alım sözleşmelerinde önlemin Kasım 2031'e kadar sürebileceğini hesaba katın"],
  warn: "Tabloda adı geçmeyen üreticiler için en yüksek oranlar uygulanır: Vietnam'da %26,25, Tayland'da %20,24, Çin'de 0,80 $/kg.",
  dates: [["2026-11-18", "Yayım ve yürürlük"], ["2031-11-18", "5 yıllık sürenin sonu"]],
  src: [["Anadolu Ajansı, 18.11.2026", "https://www.aa.com.tr/tr/ekonomi/kesik-elyaf-ipligi-ithalatina-yonelik-dampinge-karsi-onlemin-devam-etmesi-kararlastirildi/4128545"], ["CNBC-e, oranlar tablosu", "https://www.cnbce.com/haberler/7-ulkeden-iplik-ithalatina-5-yil-daha-damping-vergisi-oranlar-belli-oldu-h42055"], ["SON TV, kapsam pozisyonları", "https://www.son.tv/thalatta-yeni-karar-ticaret-bakanligi-8-ulkeden-ithal-edilen-ipliklere-yonelik-damping-onlemlerini-surdurecek/"], ["mevzuat.net güncellik", "https://www.mevzuat.net/Guncellik.aspx"]] },

{ id: "yabanci-yatirimci-ikamet", d: "2026-11-18", kind: "m", cat: ["finans"], imp: "kolay",
  kurum: "Cumhurbaşkanlığı", tur: "Cumhurbaşkanı Kararı 11994", rg: "33434", yur: "Yayım günü",
  title: "Yabancı yatırımcıya 150 bin dolara 3 yıl, 200 bin dolara 5 yıl ikamet izni",
  spot: "Türkiye'de çalışmayan ve belirli finansal araçlara yatırım yapan yabancılara, yatırım tutarına göre 3 veya 5 yıllık ikamet izni verilebilecek. Yatırımcının yabancı eşi ve çocukları da kapsamda.",
  key: { old: "En fazla 2 yıl", neu: "3 / 5 yıl", ks: "Kısa dönem ikamet izni süresi: önceki genel kural / yatırımcı izni" },
  body: [
    "Yabancı Yatırımcılara Düzenlenecek İkamet İzinlerine Dair Karar, 6458 sayılı Yabancılar ve Uluslararası Koruma Kanunu'nun 31. maddesine dayanıyor ve yayımı günü yürürlüğe girdi.",
    "Yatırım; bankalardaki mevduat, devlet borçlanma araçları, gayrimenkul veya girişim sermayesi yatırım fonu katılma payları ve bireysel emeklilik katkı payı olarak yapılabiliyor. Tutarı ve süresini sırasıyla BDDK, Hazine ve Maliye Bakanlığı, SPK ve SEDDK tespit edecek.",
    "Yatırımın, verilen izin süresinin en az yarısı boyunca korunması gerekiyor. Başvuru ve hizmetlere ilişkin usul ve esasları İçişleri Bakanlığı belirleyecek."
  ],
  tbl: { h: ["Asgari yatırım", "İkamet izni", "Yatırımın korunma süresi"], r: [["150.000 $ veya karşılığı döviz", "3 yıl", "18 ay"], ["200.000 $ veya karşılığı döviz", "5 yıl", "30 ay"]] },
  who: ["Yabancı ortaklı şirketler ve yöneticileri", "Bankalar ve portföy yönetim şirketleri", "Yabancı müşterilere hizmet veren mali müşavirler"],
  todo: ["Yabancı müşterinin yatırım aracını kararın saydığı türlerle eşleştirin", "Yatırımın korunma süresini (18 veya 30 ay) takvime işleyin", "Başvuru adımları için İçişleri Bakanlığının usul ve esaslarını takip edin"],
  warn: "Bu yolla alınan ikamet izni, Türk Vatandaşlığı Kanunu'nun 12. maddesindeki istisnai vatandaşlık kapsamında değerlendirilmez.",
  dates: [["2026-11-18", "Yayım ve yürürlük"]],
  src: [["Habere Güven, 18.11.2026", "https://www.habereguven.com/yabanci-yatirimcilara-150-bin-dolara-3-yil-200-bin-dolara-5-yil-ikamet-izni"], ["Gazete Kamu", "https://gazetekamu.com/yabanci-yatirimcilara-ikamet-izni-mujdesi/"], ["Gün Haber", "https://www.gunhaber.com.tr/haber/erdogan-imzaladi-yabancilara-yeni-ikamet-izni/578148"], ["mevzuat.net güncellik", "https://www.mevzuat.net/Guncellik.aspx"]] },

{ id: "adil-katilim-tmsf", d: "2026-11-18", kind: "m", cat: ["finans"], imp: "bilgi",
  kurum: "BDDK", tur: "Kurul Kararı 11601", rg: "33434", yur: "Yayım günü",
  title: "Adil Katılım Bankası'nın yönetimi ve denetimi TMSF'ye devredildi",
  spot: "BDDK, Adil Katılım Bankası'nın temettü hariç ortaklık hakları ile yönetim ve denetimini Tasarruf Mevduatı Sigorta Fonu'na devretti. 17 Kasım tarihli karar 18 Kasım'da Resmî Gazete'de yayımlandı.",
  key: { kv: "TMSF", ks: "Temettü hariç ortaklık hakları, yönetim ve denetim devredildi" },
  body: [
    "Bankacılık Düzenleme ve Denetleme Kurulu'nun 17 Kasım 2026 tarihli ve 11601 sayılı kararı, 5411 sayılı Bankacılık Kanunu'nun 71. maddesine dayanıyor. Bu madde; mali yapıyı güçlendirme tedbirlerinin yetersiz kalması, yükümlülüklerin zamanında yerine getirilememesi ya da borçların varlıkları aşması gibi durumlarda BDDK'ya müdahale yetkisi veriyor.",
    "Banka, 2024'te BDDK'dan kuruluş izni, 2025'te faaliyet izni almıştı. Haberlere göre karar metninde faaliyet izninin kaldırıldığına dair bir hüküm yok.",
    "Kararda müşteri hesaplarının kullanımı ve katılım fonlarının ödenmesine ilişkin bir takvim yer almıyor; bu konuda TMSF'nin sonraki açıklamaları belirleyici olacak."
  ],
  who: ["Bankanın bireysel ve kurumsal müşterileri", "Bankayla çalışan işletmelerin finans birimleri", "Muhasebe birimleri"],
  todo: ["Bu bankada hesabınız veya alacağınız varsa BDDK ve TMSF'nin resmî açıklamalarını takip edin", "Bankadaki bakiyeleri ve bekleyen işlemleri muhasebede ayrıca izleyin"],
  dates: [["2026-11-17", "Kurul kararı"], ["2026-11-18", "Resmî Gazete'de yayım"]],
  src: [["Malatya Söz, 18.11.2026", "https://www.malatyasoz.com/adil-katilim-bankasi-kimin-neden-tmsfye-devredildi"], ["Ekonomist, 18.11.2026", "https://www.ekonomist.com.tr/ekonomi-haberleri/bddk-kararini-verdi-adil-katilim-bankasi-nin-yonetimi-tmsf-ye-devredildi-81013"], ["Bloomberg HT, faaliyet izni (2025)", "https://www.bloomberght.com/bddk-dan-adil-katilim-bankasi-na-faaliyet-izni-3757592"]] },

{ id: "ukrayna-sta-yururluk", d: "2026-11-18", kind: "m", cat: ["distic", "gumruk"], imp: "bilgi",
  kurum: "Cumhurbaşkanlığı", tur: "Cumhurbaşkanı Kararı 11992", rg: "33434", yur: "1 Ekim 2026",
  title: "Ukrayna STA'nın yürürlük tarihi Resmî Gazete'de: indirimler 1 Ocak 2027'de",
  spot: "Türkiye-Ukrayna Serbest Ticaret Anlaşması'nın 1 Ekim 2026'da yürürlüğe girdiği Resmî Gazete'de ilan edildi. Ticaret Bakanlığına göre ürün listelerindeki gümrük vergisi indirimleri 1 Ocak 2027'den itibaren uygulanacak.",
  key: { kv: "1 Ocak 2027", ks: "Gümrük vergisi indirimlerinin başlangıcı" },
  body: [
    "17 Kasım tarihli ve 11992 sayılı Cumhurbaşkanı Kararı ile beş milletlerarası anlaşmanın yürürlük tarihleri 18 Kasım'da Resmî Gazete'de yayımlandı. Bunlardan dış ticareti doğrudan ilgilendireni, 3 Şubat 2022'de Kiev'de imzalanan Türkiye-Ukrayna Serbest Ticaret Anlaşması.",
    "Ticaret Bakanlığına göre onay süreci Türkiye'de 4 Ekim 2024 tarihli Cumhurbaşkanı Kararı, Ukrayna'da 31 Temmuz 2026 tarihli onayla tamamlandı ve anlaşma 1 Ekim 2026'da yürürlüğe girdi. Mal ticaretine ilişkin ürün listelerindeki gümrük vergisi indirimleri 1 Ocak 2027'den itibaren uygulanacak.",
    "Haberlere göre anlaşma mal ticaretinin yanı sıra hizmetler, yatırımlar, elektronik ticaret, ticaretin kolaylaştırılması ve gümrük işbirliğini de kapsıyor. Aynı kararla yürürlük tarihleri ilan edilen diğer anlaşmalar AB mali işbirliği, COP31 toplantıları ve Katar ile bir savunma düzenlemesine ilişkin."
  ],
  tbl: { cap: "Anlaşmanın takvimi", h: ["Adım", "Tarih"], r: [["İmza (Kiev)", "3 Şubat 2022"], ["Türkiye'de onay kararı", "4 Ekim 2024"], ["Ukrayna'da onay", "31 Temmuz 2026"], ["Yürürlük", "1 Ekim 2026"], ["Gümrük vergisi indirimleri", "1 Ocak 2027"]] },
  who: ["Ukrayna ile ticaret yapan ihracatçı ve ithalatçılar", "Gümrük müşavirleri", "Lojistik firmaları"],
  todo: ["Ürünlerinizin GTİP'lerini anlaşmanın ürün listelerinde kontrol edin", "Anlaşma metnini Ticaret Bakanlığının STA sayfasından inceleyin", "Ocak 2027 ve sonrası sevkiyatların fiyatlamasını indirimli vergiye göre gözden geçirin"],
  warn: "Anlaşma 1 Ekim'den beri yürürlükte olsa da ürün listelerindeki gümrük vergisi indirimleri 1 Ocak 2027'den itibaren uygulanıyor.",
  dates: [["2026-10-01", "Yürürlük"], ["2026-11-18", "Yürürlük tarihinin Resmî Gazete'de yayımı"], ["2027-01-01", "Gümrük vergisi indirimleri başlıyor"]],
  src: [["Ticaret Bakanlığı, Ukrayna STA sayfası", "https://ticaret.gov.tr/dis-iliskiler/serbest-ticaret-anlasmalari/yururlukte-bulunan-stalar/ukrayna"], ["RayHaber, 18.11.2026", "https://rayhaber.com/2026/11/turkiyenin-5-uluslararasi-anlasmasi-resmi-gazetede-ukrayna-katar/"], ["BirGün, 18.11.2026", "https://www.birgun.net/haber/ukrayna-ile-serbest-ticaret-katar-ile-askeri-duzenleme-5-anlasma-resmi-gazete-de-747040"], ["Endeks24, kapsam", "https://www.endeks24.com/turkiye-ukrayna-serbest-ticaret-anlasmasi-yururluge-girdi"]] },

{ id: "uk-skdm-seminer", d: "2026-11-18", kind: "d", cat: ["distic", "denetim"], imp: "bilgi",
  kurum: "Orta Anadolu İhracatçı Birlikleri", tur: "Sirküler 2026/303", rg: null, yur: "Kayıt: 24 Kasım",
  title: "İngiltere'nin sınırda karbon düzenlemesi için Ankara ve İstanbul'da seminer",
  spot: "Birleşik Krallık'ın 1 Ocak 2027'de uygulamaya koymayı planladığı Sınırda Karbon Düzenleme Mekanizması için 7 Aralık'ta Ankara'da, 8 Aralık'ta İstanbul'da İngiliz yetkililerin katılacağı bilgilendirme toplantıları yapılacak.",
  key: { kv: "24 Kasım", ks: "Katılım formu ve soruların gönderilmesi için son gün" },
  body: [
    "Çimento, Cam, Seramik ve Toprak Ürünleri İhracatçıları Birliği'nin 18 Kasım tarihli sirkülerine göre Birleşik Krallık, Sınırda Karbon Düzenleme Mekanizması'nı (UK SKDM) 1 Ocak 2027'de uygulamaya koymayı planlıyor. Sirkülerde kapsamdaki sektörler sayılmıyor.",
    "Ankara'daki toplantı 7 Aralık Pazartesi saat 11.00'de Ticaret Bakanlığı zemin kat konferans salonunda, İstanbul'daki toplantı 8 Aralık Salı saat 13.30'da TİM Dış Ticaret Kompleksi konferans salonunda yapılacak. Katılımcılar uygulamaya ilişkin soru ve görüşlerini doğrudan iletebilecek.",
    "Katılmak isteyen üyelerin ekteki formu ve varsa sorularını 24 Kasım mesai bitimine kadar yesilekonomi@oaib.org.tr adresine göndermesi isteniyor. Aynı başlıkla ikinci bir sirküler (2026/302-11319) de yayımlandı."
  ],
  tbl: { h: ["Şehir", "Tarih ve saat", "Yer"], r: [["Ankara", "7 Aralık 2026, 11.00", "Ticaret Bakanlığı konferans salonu"], ["İstanbul", "8 Aralık 2026, 13.30", "TİM Dış Ticaret Kompleksi"]] },
  who: ["Birleşik Krallık'a ihracat yapan firmalar", "Çimento, cam, seramik ve toprak ürünleri ihracatçıları", "Sürdürülebilirlik ve uyum birimleri"],
  todo: ["Katılım formunu ve sorularınızı 24 Kasım mesai bitimine kadar yesilekonomi@oaib.org.tr adresine gönderin", "Ürünlerinizin UK SKDM kapsamında olup olmadığını toplantıda İngiliz yetkililere sorun"],
  dates: [["2026-11-24", "Kayıt son günü"], ["2026-12-07", "Ankara toplantısı"], ["2026-12-08", "İstanbul toplantısı"], ["2027-01-01", "UK SKDM'nin planlanan başlangıcı"]],
  src: [["OAİB sirküleri 2026/303-11323", "https://oaib.org.tr/Uploads/Sirkuler/2026303-11323.pdf"], ["OAİB duyurular", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },

{ id: "avustralya-biyoguvenlik-firma", d: "2026-11-17", kind: "d", cat: ["distic", "gumruk"], imp: "bilgi",
  kurum: "Orta Anadolu İhracatçı Birlikleri", tur: "Sirküler 2026/469", rg: null, yur: "12 Kasım 2026",
  title: "Avustralya, iki Türk ilaçlama firmasının biyogüvenlik sertifikalarını kabul etmiyor",
  spot: "Avustralya Tarım Bakanlığı, sevkiyat öncesi işlem yapan iki Türk firmasının yetkisini 'uygunluk incelemesi altında' olarak güncelledi. Bu firmaların düzenlediği sertifikalar 12 Kasım'dan itibaren kabul edilmiyor.",
  key: { kv: "2 firma", ks: "Sertifikaları 12 Kasım'dan itibaren kabul edilmiyor" },
  body: [
    "Orta Anadolu Hububat, Bakliyat, Yağlı Tohumlar İhracatçı Birlikleri'nin 17 Kasım tarihli sirkülerine göre Avustralya Federal Hükümeti Tarım, Balıkçılık ve Orman Bakanlığı, 12 Kasım 2026 tarihli ve 194-2026 sayılı duyurusuyla Türkiye'deki iki işlem sağlayıcının yetkisini güncelledi.",
    "Avustralya'ya gönderilen bazı ürünlerin ihracattan önce sevk ülkesinde Avustralya'nın onayladığı firmalarca işleme tabi tutulması gerekiyor. Onaylı firmaların güncel listesi Avustralya Tarım Bakanlığının internet sitesinde yer alıyor.",
    "Epcon Çevre Sağlığı Sistemleri ile ABM Pest İlaçlama'nın yetkileri, tespit edilen biyogüvenlik endişeleri nedeniyle incelemeye alındı. Bu firmaların sertifikaları, işlem ve sertifika tarihine bakılmaksızın 12 Kasım'dan itibaren kabul edilmiyor."
  ],
  tbl: { cap: "Yetkisi incelemeye alınan firmalar", h: ["Firma", "AEI kodu"], r: [["Epcon Çevre Sağlığı Sistemleri San. ve Tic. Ltd. Şti.", "TR4011SB"], ["ABM Pest İlaçlama İç ve Dış Tic. Nak. Ltd. Şti.", "TR4019SB"]] },
  who: ["Avustralya'ya ihracat yapan firmalar", "İlaçlama ve fumigasyon hizmeti alan ihracatçılar", "Lojistik firmaları"],
  todo: ["Avustralya sevkiyatlarınızda işlem yapan firmanın onaylı listede olduğunu kontrol edin", "Bu iki firmanın sertifikasıyla yolda olan sevkiyatlarınızı belirleyip birliğinizle iletişime geçin"],
  warn: "Sertifikanın düzenlendiği tarih fark etmiyor: bu iki firmanın sertifikaları 12 Kasım'dan itibaren kabul edilmiyor.",
  dates: [["2026-11-12", "Sertifikalar kabul edilmiyor"], ["2026-11-17", "Birlik sirküleri"]],
  src: [["OAİB sirküleri 2026/469-11312", "https://oaib.org.tr/Uploads/Sirkuler/2026469-11312.pdf"], ["OAİB duyurular", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },

/* ───────── ARŞİV: 1–10 KASIM VE EKİM ───────── */
{ id: "ncts-ihracat-kapatma", d: "2026-11-10", kind: "m", cat: ["gumruk", "lojistik"], imp: "kolay",
  kurum: "Gümrükler Genel Müdürlüğü", tur: "Yazı 128396161", rg: null, yur: "Yazı tarihi",
  title: "Aynı taşıttaki NCTS beyannamelerine bağlı ihracat beyannameleri birlikte kapanacak",
  spot: "Gümrükler Genel Müdürlüğü, aynı taşıttaki transit beyannamelerinin ihracat beyanlarının kapatılması için ilişkilendirilmesine yönelik yazı yayımladı. Kapanmayan ihracat beyannamesi sorununun azalması bekleniyor.",
  key: { kv: "Tek taşıt", ks: "Birden fazla NCTS beyannamesi birlikte ilişkilendiriliyor" },
  body: [
    "Aynı taşıtta bulunan birden fazla NCTS beyannamesinin MRN bilgileri sistemde ilişkilendirilecek; bunlara bağlı ihracat beyannameleri de otomatik olarak kapatılacak.",
    "NCTS beyannamelerindeki çekici plakası, eşyayı fiilen taşıyan araçla aynı olmalı. Hatalı plakalar araç sahadan çıkmadan düzeltilmeli.",
    "Onaylanmış gönderici tesislerinden yapılan sevkiyatlarda plaka güncellemesine ilişkin teknik çalışma sürüyor."
  ],
  who: ["İhracatçılar", "Gümrük müşavirleri", "Kara yolu taşımacıları"],
  todo: ["Transit beyannamelerindeki çekici plakasını yükleme öncesi kontrol edin", "Kapanmamış ihracat beyannamelerinizi listeleyip yeni uygulamayla eşleştirin"],
  dates: [["2026-11-10", "Yazı"]],
  src: [["mevzuat.net, güncellik listesi", "https://www.mevzuat.net/Guncellik.aspx"], ["LinkedIn, Fırat Yalçın paylaşımı", "https://www.linkedin.com/in/f%C4%B1rat-yal%C3%A7in-b6777b2b0/"], ["OAİB sirkülerleri", "https://oaib.org.tr/duyurular-ve-bilgilendirme"]] },


{ id: "yesil-mutabakat-2026-2030", d: "2026-11-10", kind: "m", cat: ["distic", "gumruk"], imp: "bilgi",
  kurum: "Cumhurbaşkanlığı / Ticaret Bakanlığı", tur: "Genelge 2026/12", rg: "33426", yur: "Yayım günü",
  title: "Yeşil Mutabakat Eylem Planı 2026–2030 yayımlandı",
  spot: "2021'den bu yana uygulanan plan güncellendi. Yeni plan 11 ana başlık, 41 hedef ve 142 eylem içeriyor; yeşil ve dijital dönüşümü birlikte ele alıyor.",
  key: { kv: "142 eylem", ks: "11 ana başlık, 41 hedef" },
  body: [
    "Plan, 2026/12 sayılı Cumhurbaşkanlığı Genelgesi ile 10 Kasım 2026 tarihli ve 33426 sayılı Resmî Gazete'de duyuruldu; Ticaret Bakanlığı koordinasyonunda hazırlandı.",
    "2021/15 sayılı Genelge ile yürürlüğe konan ilk planın yerini alıyor ve ikiz dönüşüm yaklaşımını esas alıyor.",
    "Başlıklar arasında karbon fiyatlandırma politikaları, yeşil ve döngüsel ekonomi, yeşil finansman, temiz ve güvenli enerji arzı ile sürdürülebilir tarım bulunuyor.",
    "Eylemlerin takibini, Ticaret Bakanı veya görevlendireceği bakan yardımcısı başkanlığındaki Yeşil Mutabakat Çalışma Grubu yapacak."
  ],
  who: ["AB'ye ihracat yapan firmalar", "Sanayi işletmeleri", "Gümrük müşavirleri"],
  todo: ["AB'ye ihracat yapıyorsanız planın karbon fiyatlandırma başlığını inceleyin", "Planın tam metnini Ticaret Bakanlığı sitesinden indirin"],
  dates: [["2026-11-10", "Yayım"]],
  src: [["Ticaret Bakanlığı", "https://ticaret.gov.tr/haberler/yesil-mutabakat-eylem-plani-20262030-yayimlandi"], ["Erdem & Erdem", "https://www.erdem-erdem.av.tr/bilgi-bankasi/yesil-mutabakat-eylem-plani-2026-2030-hakkinda-cumhurbaskanligi-genelgesi-yayimlandi"], ["Bengütürk", "https://www.benguturk.com/gundem/turkiyenin-yesil-mutabakat-eylem-plani-ile-41-hedef-icin-yol-haritasi-cizildi-288710h"]] },

{ id: "vuk-597-borclu-listesi", d: "2026-11-10", kind: "m", cat: ["vergi"], imp: "usul",
  kurum: "GİB", tur: "VUK Genel Tebliği 597", rg: "33426", yur: "Yayım günü",
  title: "5 milyon TL üzeri vergi borçluları Aralık'ta açıklanacak",
  spot: "597 Sıra No.lu VUK Genel Tebliği ile her vergi dairesine 5 milyon TL ve üzeri borcu olan mükelleflerin ilanı için takvim belirlendi. Esas tarih 20 Kasım.",
  key: { kv: "5 milyon TL", ks: "Her vergi dairesi için ayrı sınır" },
  body: [
    "Kapsama, her bir vergi dairesine 5 milyon TL ve daha fazla borcu olan ya da bu tutarda kesinleşmiş vergi ve cezası bulunan mükellefler giriyor.",
    "Sınır, Türkiye genelindeki toplam üzerinden değil, her vergi dairesi için ayrı değerlendiriliyor; tam 5 milyon TL de sınırın içinde. Eşik tutarı geçen yıla göre değişmedi.",
    "Listeler 1–15 Aralık'ta vergi dairelerinde, 16–30 Aralık'ta GİB'in internet sitesinde ilan edilecek."
  ],
  tbl: { cap: "Takvim", h: ["Adım", "Tarih"], r: [["Borç durumuna esas tarih", "20 Kasım 2026"], ["Vergi dairelerinde ilan", "1–15 Aralık 2026"], ["GİB internet sitesinde ilan", "16–30 Aralık 2026"]] },
  who: ["Mükellefler", "Mali müşavirler", "Finans birimleri"],
  todo: ["Her vergi dairesindeki borç bakiyenizi ayrı ayrı kontrol edin", "Ödeme, tecil veya yapılandırma işlemlerini 20 Kasım'dan önce tamamlayın"],
  warn: "Listeye esas tarih 20 Kasım. Hazırlığı bu tarihe göre yapın.",
  dates: [["2026-11-20", "Esas tarih"], ["2026-12-01", "Vergi dairelerinde ilan"], ["2026-12-16", "GİB sitesinde ilan"]],
  src: [["Alomaliye, tebliğ metni", "https://www.alomaliye.com/2026/11/10/vergi-usul-kanunu-genel-tebligi-sira-no-597/"], ["Hukukçular Evi", "https://hukukcularevi.com/hukuk-gundemi/vergi-borclulari-listesi-5-milyon-tl-vuk-genel-teblig-597-33426-2026/"], ["NTV", "https://www.ntv.com.tr/ntvpara/galeri-vergi-yuzsuzleri-aciklanacak-iste-tarihler-1750199"]] },

{ id: "bddk-golden-global", d: "2026-11-06", kind: "m", cat: ["finans"], imp: "bilgi",
  kurum: "BDDK", tur: "Kurul Kararı 11593", rg: "33422", yur: "Yayım günü",
  title: "BDDK, Golden Global Yatırım Bankası'nın faaliyet iznini kaldırdı",
  spot: "BDDK'nın 4 Kasım tarihli ve 11593 sayılı kararı 6 Kasım'da Resmî Gazete'de yayımlandı. Karar, yükümlülüklerin vadesinde yerine getirilememesine dayanıyor.",
  key: { kv: "Karar 11593", ks: "Faaliyet izni kaldırıldı" },
  body: [
    "Kurul, 4 Kasım 2026 tarihli toplantısında bankanın faaliyet izninin 5411 sayılı Bankacılık Kanunu'nun 71. maddesi çerçevesinde kaldırılmasına karar verdi. Dayanılan bent, yükümlülüklerin vadesinde yerine getirilememesi hâlini düzenliyor.",
    "Bu kapsamdaki kararlarda Resmî Gazete'deki yayım tarihi tebliğ tarihi sayılıyor; süreler 6 Kasım esas alınarak hesaplanıyor."
  ],
  who: ["Bankayla çalışan kurumsal müşteriler", "Finans birimleri"],
  todo: ["Bu bankada hesap, teminat mektubu veya kredi ilişkiniz varsa durumu yazılı olarak teyit edin"],
  dates: [["2026-11-04", "Kurul kararı"], ["2026-11-06", "Resmî Gazete"]],
  src: [["Hukukçular Evi", "https://hukukcularevi.com/hukuk-gundemi/bddk-golden-global-yatirim-bankasi-faaliyet-izni-kaldirildi-5411-71-1-c-11593-2026/"], ["24 Saat", "https://www.24saatgazetesi.com/bddk-golden-global-yatirim-bankasinin-faaliyet-izni-kaldirdi"], ["BDDK duyurusu", "https://www.bddk.org.tr/Duyuru/Detay/4320"]] },

{ id: "kgk-surdurulebilirlik-tfrs18", d: "2026-11-05", kind: "m", cat: ["denetim", "muhasebe"], imp: "kolay",
  kurum: "KGK", tur: "Kurul kararları", rg: "33421", yur: "Yayım günü",
  title: "KGK: sürdürülebilirlik denetiminde muafiyet uzadı, TFRS 18 tablo örnekleri yayımlandı",
  spot: "KGK'nın 30 Ekim tarihli iki kararı 5 Kasım'da yayımlandı. Biri sürdürülebilirlik denetim ekiplerine tanınan muafiyeti bir yıl uzatıyor, diğeri yeni finansal tablo örneklerini getiriyor.",
  key: { kv: "+1 yıl", ks: "Sürdürülebilirlik denetim ekibi muafiyeti" },
  body: [
    "Sürdürülebilirlik denetim ekiplerine ilişkin muafiyet bir yıl daha uzatıldı. Karar, 1 Ocak 2028'den önce biten hesap dönemlerinin denetimlerini kapsıyor.",
    "Muafiyetle, sorumlu denetçi ile en az bir denetçinin sürdürülebilirlik alanında yetkili olması şartıyla, bu alanda yetkisi olmayan bağımsız denetçiler de ekipte yer alabiliyor.",
    "İkinci kararla Finansal Tablo Örnekleri ve Kullanım Rehberi yayımlandı. TFRS 18 ile kâr veya zarar tablosu esas faaliyet, yatırım ve finansman olmak üzere üç bölüme ayrılıyor."
  ],
  who: ["Bağımsız denetim kuruluşları", "Sürdürülebilirlik raporu hazırlayan şirketler", "Muhasebe birimleri"],
  todo: ["Denetim ekibi planlamanızı uzatılan muafiyete göre gözden geçirin", "Kâr veya zarar tablosu sınıflandırmanızı yeni örneklerle karşılaştırın"],
  dates: [["2026-10-30", "Kurul kararları"], ["2026-11-05", "Resmî Gazete"]],
  src: [["Hukukçular Evi", "https://hukukcularevi.com/hukuk-gundemi/kgk-finansal-tablo-ornekleri-rehberi-tfrs-18-surdurulebilirlik-denetimi-33420-33421-2026/"], ["Bloomberg HT", "https://www.bloomberght.com/surdurulebilirlik-denetiminde-muafiyet-suresi-bir-yil-uzatildi-3793570"], ["KGK duyurusu", "https://www.kgk.gov.tr/Portalv2Uploads/files/Duyurular/v2/Diger/Duyuru%20-%2057_.pdf"]] },

{ id: "kgk-e-sinav", d: "2026-11-04", kind: "m", cat: ["denetim", "muhasebe"], imp: "usul",
  kurum: "KGK", tur: "Duyuru 2026-45", rg: null, yur: "23 Kasım 2026",
  title: "Bağımsız denetçilik sınavları 23 Kasım'dan itibaren elektronik ortamda",
  spot: "KGK, bağımsız denetçilik ve sürdürülebilirlik denetçiliği sınavlarını SPL ile iş birliği içinde e-sınav olarak yapacak.",
  key: { kv: "23 Kasım", ks: "E-sınav dönemi başlıyor" },
  body: [
    "Sınavların operasyonel ve teknik süreçlerini Sermaye Piyasası Lisanslama Sicil ve Eğitim Kuruluşu (SPL) yürütecek. İş birliği, KGK ile SPL arasında imzalanan protokole dayanıyor.",
    "İlk aşamada Türkiye Muhasebe Standartları, Türkiye Denetim Standartları ile Kurumsal Yönetim İlkeleri ve Finansal Yönetim konularında e-sınavlar başlıyor; diğer konular kademeli olarak eklenecek.",
    "Başvuru tarihleri, ücretler ve uygulama esaslarını içeren kılavuz Kasım içinde KGK ve SPL sitelerinde yayımlanacak."
  ],
  who: ["Denetçi adayları", "Bağımsız denetim kuruluşları", "Mali müşavirler"],
  todo: ["Kılavuz yayımlandığında başvuru tarihlerini ve ücretleri kontrol edin"],
  dates: [["2026-11-04", "Duyuru"], ["2026-11-23", "E-sınavlar başlıyor"]],
  src: [["Muhasebetr", "https://www.muhasebetr.com/muhasebeyazilari/guncelmevzuat/mevzuat_oku.php?mevzuat_id=7255"], ["Alomaliye", "https://www.alomaliye.com/2026/11/05/bagimsiz-denetcilik-ve-surdurulebilirlik-denetciliginde-e-sinav-donemi/"]] },

{ id: "tufe-ekim", d: "2026-11-03", kind: "g", cat: ["finans", "muhasebe"], imp: "bilgi",
  kurum: "TÜİK", tur: "Veri bülteni", rg: null, yur: "3 Kasım 2026",
  title: "Ekim'de yıllık enflasyon %29,77 oldu",
  spot: "TÜFE Ekim'de aylık %2,58, yıllık %29,77 arttı. On iki aylık ortalamalara göre artış %31,23.",
  key: { kv: "%29,77", ks: "Yıllık TÜFE, Ekim 2026" },
  body: [
    "Bir önceki yılın Aralık ayına göre artış %27,52 oldu.",
    "Gıda ve alkolsüz içecekler aylık %3,50 arttı. Yıllık enflasyona en büyük katkı gıdadan (6,81 puan), ulaştırmadan (6,10 puan) ve konuttan (4,71 puan) geldi.",
    "Özel kapsamlı TÜFE göstergesi (B) yıllık %28,46, aylık %2,00 arttı."
  ],
  tbl: { h: ["Gösterge", "Ekim 2026"], r: [["Aylık", "%2,58"], ["Yıllık", "%29,77"], ["Aralık ayına göre", "%27,52"], ["12 aylık ortalama", "%31,23"]] },
  who: ["Muhasebe ve bordro", "Kira ve sözleşme yönetimi", "Finans birimleri"],
  todo: ["Endekse bağlı sözleşme güncellemelerinde Ekim verisini kullanın"],
  dates: [["2026-11-03", "Açıklandı"]],
  src: [["Alomaliye, TÜİK bülteni", "https://www.alomaliye.com/2026/11/03/enflasyon-rakamlari-tufe-ekim-2026/"]] },

{ id: "istanbul-kdv-ebeyan", d: "2026-11-01", kind: "m", cat: ["vergi"], imp: "usul",
  kurum: "GİB", tur: "Duyuru", rg: null, yur: "1 Kasım 2026",
  title: "İstanbul'da KDV beyannameleri yeni e-Beyan sisteminde",
  spot: "İstanbul'daki mükellefler için 1 Kasım 2026'dan, Ekim 2026 döneminden itibaren KDV beyannameleri yeni e-Beyan sisteminden alınıyor.",
  key: { kv: "5 tür", ks: "KDV1, KDV2, KDV2B, KDV4, KDV9015" },
  body: [
    "GİB duyurusuna göre KDV1, KDV2, KDV2B, KDV4 ve KDV9015 beyannameleri İstanbul'da da yeni e-Beyan sisteminden alınmaya başlandı.",
    "İlk dönem Ekim 2026 vergilendirme dönemi. Yeni sistemde beyannamelere ilişkin ayrıntılı açıklamaların bulunduğu modüllere erişim sağlanıyor."
  ],
  who: ["İstanbul'daki mükellefler", "Mali müşavirler"],
  todo: ["Ekim dönemi KDV beyannamesini hazırlamadan önce yeni sistemdeki kullanıcı yetkilerini kontrol edin"],
  dates: [["2026-11-01", "Yeni sistem İstanbul'da"]],
  src: [["Alomaliye, GİB duyurusu", "https://www.alomaliye.com/2026/10/14/kdv-beyannamelerine-iliskin-onemli-duyuru-kdv1-kdv2-kdv2b-kdv4-kdv9015/"], ["Alomaliye, 2 Kasım", "https://www.alomaliye.com/2026/11/02/kvd-beyannamelerine-iliskin-onemli-duyuru-kdv1-kdv2-kdv2b-kdv4-kdv9015/"]] },

{ id: "ab-eihracat-urun-kodu", d: "2026-11-01", kind: "m", cat: ["gumruk", "distic", "lojistik"], imp: "yuk",
  kurum: "AB / Ticaret Bakanlığı uyarısı", tur: "Uygulama", rg: null, yur: "1 Kasım 2026",
  title: "AB'ye e-ihracatta ürün kodu beyanı zorunlu hâle geldi",
  spot: "1 Kasım 2026'dan itibaren AB gümrüklerinde satıcı ve üretici ürün kodlarının (M-PID ve NS-PID) beyanı zorunlu. Uygulama Temmuz'dan beri gönüllüydü.",
  key: { kv: "2 kod", ks: "M-PID ve NS-PID beyanı" },
  body: [
    "Batı Akdeniz İhracatçılar Birliği'nin duyurusu ve Ticaret Bakanlığı'nın uyarılarına göre, AB'ye e-ihracat yapan işletmelerin gümrük işlemlerinde iki ürün kodunun beyanı zorunlu oldu.",
    "Amaç, gümrükte ürün bilgilerinin doğrulanması ve sevkiyatların izlenebilirliğinin artırılması.",
    "Ticaret Bakanlığı, e-ihracatçılardan dijital satış ve beyan süreçlerini gözden geçirmelerini, ürün kodlarını doğru ürünlerle eşleştirmelerini istedi."
  ],
  who: ["E-ihracatçılar", "Kargo ve hızlı kargo firmaları", "Pazar yeri satıcıları"],
  todo: ["Ürün kataloğunuzda her ürün için iki kodu tanımlayın", "Satış platformu ile gümrük beyanı arasındaki veri akışını test edin", "Kargo firmanızdan beyan formatı için teyit alın"],
  warn: "Kodların ürünlerle doğru eşleşmemesi, AB gümrüğündeki doğrulamada sorun çıkarabilir.",
  dates: [["2026-11-01", "Zorunlu uygulama başladı"]],
  src: [["YatırımX", "https://www.yatirimx.com.tr/dunya/avrupa-birliginde-gumruk-kurallari-degisiyor-1-kasimda-donem-basliyor/26415"]] },

{ id: "gumruk-ek-tahakkuk", d: "2026-10-30", kind: "g", cat: ["gumruk", "denetim"], imp: "bilgi",
  kurum: "Ticaret Bakanlığı", tur: "Açıklama", rg: null, yur: "30 Ekim 2026",
  title: "Gümrükte 9 ayda 11,7 milyar TL ek tahakkuk ve ceza",
  spot: "Ticaret Bakanlığı, 2026'nın ilk dokuz ayında ikincil kontrol ve sonradan kontrol denetimleri sonucunda 11,7 milyar TL ek tahakkuk ve ceza kararı düzenledi. Tutar geçen yılın aynı dönemine göre %32 arttı.",
  key: { kv: "11,7 milyar TL", ks: "Ocak–Eylül 2026, yıllık %32 artış" },
  body: [
    "804 ikincil kontrol raporu kapsamında 155.270 gümrük beyannamesi yeniden incelendi. 3.947 firmanın tescil ettiği ve usulsüzlük tespit edilen 26.653 beyanname için 9,9 milyar TL ek tahakkuk ve ceza kararı düzenlendi. Yeniden incelenen beyannamelerin yaklaşık %17'sinde usulsüzlük bulundu.",
    "Sonradan kontrol kapsamında 180 firma denetlendi; bu denetimlerde 1,8 milyar TL ek tahakkuk ve ceza kararı düzenlendi.",
    "2025'in tamamında aynı kalemlerin toplamı 13,6 milyar TL olmuştu."
  ],
  tbl: { cap: "Ocak–Eylül 2026", h: ["Kontrol türü", "Tutar", "Yıllık artış"], r: [["İkincil kontrol (beyanname)", "9,9 milyar TL", "%37"], ["Sonradan kontrol (firma)", "1,8 milyar TL", "%11"], ["Toplam", "11,7 milyar TL", "%32"]] },
  who: ["İthalatçı ve ihracatçılar", "Gümrük müşavirleri", "İç denetim birimleri"],
  todo: ["Geçmiş dönem beyannamelerinde kıymet, menşe ve tarife pozisyonu tutarlılığını iç kontrolle tarayın", "Riskli kalemler için düzeltme imkânlarını müşavirinizle değerlendirin"],
  dates: [["2026-10-30", "Açıklama"]],
  src: [["Ticaret Bakanlığı", "https://ticaret.gov.tr/haberler/ticaret-bakanligi-2026-yilinin-ilk-9-ayinda-gerceklestirdigi-ikincil-kontrol-beyanname-incelemeleri-ve-sonradan-kontrol-amacli-firma-denetimleri-sonucunda-gecen-yila-gore-32-artisla-toplam-11-7-milyar-tl-ek-tahakkuk-ve-ceza-karari-duzenledi"], ["Alomaliye", "https://www.alomaliye.com/2026/10/30/gumrukte-11-7-milyar-tl-ek-tahakkuk-ve-ceza/"], ["Politikam", "https://www.politikam.com/ticaret-bakanligi-gumruk-denetimleri-11-7-milyar-tl-ceza-2026"], ["Ekonomist, 2025 verisi", "https://www.ekonomist.com.tr/haberler/bakanlik-acikladi-dis-ticaret-mevzuatina-aykiri-davranan-firmalara-13-6-milyar-lira-ceza-69991"]] },

{ id: "kasim-indirim-reklam-cezasi", d: "2026-10-28", kind: "m", cat: ["denetim"], imp: "yuk",
  kurum: "Ticaret Bakanlığı", tur: "Duyuru", rg: null, yur: "Kasım 2026",
  title: "Kasım indirimlerinde yanıltıcı reklama 39,9 milyon TL'ye kadar ceza",
  spot: "Ticaret Bakanlığı, Kasım kampanyalarını tüm mecralarda izlediğini ve yanıltıcı indirim reklamlarına ihlalin niteliğine göre 39.916.524 TL'ye kadar idari para cezası uygulanabileceğini duyurdu.",
  key: { kv: "39.916.524 TL", ks: "Azami idari para cezası" },
  body: [
    "Bakanlık, Kasım'da yoğunlaşan indirim kampanyalarında tüketicilerin yanıltılmasını önlemek için denetimlerini sürdürüyor.",
    "Reklam Kurulu, 2026'nın ilk dokuz ayında yanıltıcı reklam ve haksız ticari uygulamalara toplam 249 milyon TL idari para cezası uyguladı."
  ],
  who: ["E-ticaret ve perakende", "Pazarlama ekipleri", "Reklam ajansları"],
  todo: ["İndirim oranını hangi fiyata göre hesapladığınızı belgeleyin", "Kampanya görsellerinde süre ve stok koşullarını açıkça yazın"],
  dates: [["2026-10-28", "Duyuru"]],
  src: [["Alomaliye", "https://www.alomaliye.com/2026/10/28/kasim-indirimlerinde-aldatici-reklama-39-9-milyon-tl-ceza/"], ["Evrensel, 9 aylık toplam", "https://www.evrensel.net/haber/6005171/yaniltici-reklamlara-9-ayda-249-milyon-lira-ceza"]] },

{ id: "tio-tehlikeli-madde-cezalari", d: "2026-10-13", kind: "m", cat: ["lojistik"], imp: "yuk",
  kurum: "Ulaştırma ve Altyapı Bakanlığı", tur: "Yönetmelik değişiklikleri", rg: "33399", yur: "Yayım günü",
  title: "Taşıma işleri organizatörlüğü ve tehlikeli madde taşımacılığında cezalar güncellendi",
  spot: "13 Ekim'de yayımlanan değişikliklerle taşıma işleri organizatörlerine 3.187 TL'den 50.000 TL'ye kadar ceza öngörüldü; demiryoluyla tehlikeli madde taşımacılığında cezalar milyon TL düzeyine çıktı.",
  key: { kv: "50.000 TL", ks: "Taşıma işleri organizatörlüğünde en üst ceza" },
  body: [
    "Taşıma İşleri Organizatörlüğü Yönetmeliği'nin 21. maddesi tamamen yenilendi. Operasyonel şeffaflık, yetki ve bildirim kurallarını ihlal eden organizatörlere ihlalin niteliğine göre 3.187 TL ile 50.000 TL arasında ceza uygulanacak.",
    "Tehlikeli Maddelerin Demiryolu ile Taşınması Hakkında Yönetmelik'te belirli ihlallerde gönderene ve taşımacıya 4.263.586 TL ceza öngörüldü. Güvenlik danışmanı istihdam etmeyen veya hizmet almayan işletmelere 170.903 TL, faaliyet belgesi olmadan taşımacılık yapanlara 17.932 TL ceza uygulanacak.",
    "Cezalar her takvim yılı başında yeniden değerleme oranında artırılacak."
  ],
  tbl: { h: ["İhlal", "Ceza"], r: [["Taşıma işleri organizatörlüğü ihlalleri", "3.187 – 50.000 TL"], ["Demiryoluyla tehlikeli madde: belirli ihlaller", "4.263.586 TL"], ["Güvenlik danışmanı bulundurmamak", "170.903 TL"], ["Faaliyet belgesi olmadan taşımacılık", "17.932 TL"]] },
  who: ["Lojistik ve taşıma organizatörleri", "Demiryolu taşımacıları", "Tehlikeli madde gönderenleri"],
  todo: ["Yetki ve bildirim yükümlülüklerinizi yenilenen 21. maddeye göre kontrol edin", "Tehlikeli madde güvenlik danışmanı sözleşmenizin güncel olduğundan emin olun"],
  dates: [["2026-10-13", "Yayım ve yürürlük"]],
  src: [["24 Saat", "https://www.24saatgazetesi.com/tasima-isleri-organizatorlugu-yonetmeligi-degisti-ihlal-edene-50-bin-tl-ceza-kesilecek"], ["Yeni Bakış", "https://www.yenibakishaber.com/resmi-gazetede-yayimlandi-50-bin-tl-ceza-geliyor"], ["Alomaliye, demiryolu cezaları", "https://www.alomaliye.com/2026/10/13/demiryolunda-tehlikeli-madde-tasimaciligi-cezalari-guncellendi/"], ["Uzmanpara", "https://uzmanpara.milliyet.com.tr/uzmanpara/tasimacilikta-idari-para-cezalari-guncellendi-7678379"]] },

{ id: "lisansli-depo-tarife", d: "2026-10-03", kind: "m", cat: ["depolama"], imp: "kolay",
  kurum: "Ticaret Bakanlığı", tur: "Yönetmelik değişikliği", rg: "33389", yur: "Yayım günü",
  title: "Lisanslı depolar ücret tarifelerini yılda iki kez güncelleyebilecek",
  spot: "Tarım Ürünleri Lisanslı Depoculuk Yönetmeliği'nde yapılan değişiklikle bazı lisanslı depo ücret tarifelerinin yılda en fazla iki kez, farklı tarih ve oranlarda güncellenmesinin önü açıldı.",
  key: { kv: "Yılda 2 kez", ks: "Azami tarife güncellemesi" },
  body: [
    "Depo giriş ve çıkış ücretleri ile faaliyet konusu hububat, baklagiller ve yağlı tohumlar dışında olan lisanslı depo işletmelerinin tarifeleri, piyasa koşulları ve yöresel ihtiyaçlara göre yılda iki defadan fazla olmamak üzere güncellenebilecek.",
    "Yönetmeliğin 15. maddesindeki değişiklikle, poliçedeki teminatlara ilişkin sigorta bedellerindeki değişiklikler de düzenleme kapsamına alındı.",
    "Ücret tarifesi Bakanlıkça onaylanıyor ve Türkiye Ticaret Sicili Gazetesi'nde yayımlandığı tarihte yürürlüğe giriyor."
  ],
  who: ["Lisanslı depo işletmeleri", "Tarım ürünü tüccarları", "Ürün senedi yatırımcıları"],
  todo: ["Depolama sözleşmelerinizdeki tarife değişikliği hükümlerini güncelleyin"],
  dates: [["2026-10-03", "Yayım ve yürürlük"]],
  src: [["Foreks", "https://www.foreks.com/haber/detay/6ac0678195016b5817e6487b/PICNEWS/tr/lisansli-depoculukta-ucret-tarifeleri-ve-sigorta-bedellerine-yeni-duzenleme-03-10-26/"], ["Alomaliye, yönetmelik metni", "https://www.alomaliye.com/2026/10/03/tarim-urunleri-lisansli-depoculuk-yonetmeliginde-degisiklik-03-10-2026/"], ["Ekonomi Gazetesi", "https://www.ekonomigazetesi.com/sektor-haberleri/bakanlik-lisansli-depo-isletmelerinin-ucret-tarifelerini-yilda-2-defa-guncelleyebilecek-88930"]] }
];

const LEAD = "ihale-borc-siniri";
const TOP = ["iplik-damping-surdurme", "yabanci-yatirimci-ikamet", "ykts-police-zorunlu-alan", "adil-katilim-tmsf"];
const GUMRUK_LEAD = "ab-soguk-celik-antidamping";
const ARCHIVE_PICKS = ["butunlesik-sigorta", "dir-maden-metal-genelgesi", "tcmb-enflasyon-raporu", "vuk-597-borclu-listesi"];

const TILES = [
  { id: "ihale-borc-siniri", c: "vergi", old: "5.000", v: "50.000 TL", l: "Kamu ihalesinde vergi ve SGK borç sınırı" },
  { id: "ab-soguk-celik-antidamping", c: "distic", v: "%3 – %7,8", l: "AB'de Türk soğuk haddelenmiş çeliğine antidamping vergisi" },
  { id: "iplik-damping-surdurme", c: "gumruk", v: "0,80 $/kg", l: "Çin menşeli kesik elyaf ipliğinde damping (diğer üreticiler)" },
  { id: "yabanci-yatirimci-ikamet", c: "finans", v: "150.000 $", l: "Yabancı yatırımcıya 3 yıllık ikamet izni için asgari yatırım" }
];

const DATES = [
  { d: "2026-11-20", t: "Vergi borçlu listesine esas tarih", s: "5 milyon TL ve üzeri borçlar", c: "vergi", id: "vuk-597-borclu-listesi" },
  { d: "2026-11-23", t: "Bağımsız denetçilik sınavları e-sınava geçiyor", s: "KGK ve SPL iş birliği", c: "denetim", id: "kgk-e-sinav" },
  { d: "2026-11-24", t: "İhracat süreçleri ve devlet destekleri eğitimi", s: "Ticaret Bakanlığı, 24–26 Kasım, çevrimiçi ve ücretsiz", c: "distic", u: "https://ticaret.gov.tr/duyurular/ticaret-bakanligi-ihracat-surecleri-ve-devlet-destekleri-egitim-programi-24-25-26-kasim-2026" },
  { d: "2026-11-24", t: "UK SKDM seminerleri için kayıt son günü", s: "Form ve sorular yesilekonomi@oaib.org.tr adresine", c: "distic", id: "uk-skdm-seminer" },
  { d: "2026-12-01", t: "Trafik sigortasında Aralık tavanları", s: "Genel %1, taksi, minibüs ve otobüste %3", c: "lojistik", id: "trafik-sigortasi-aralik" },
  { d: "2026-12-01", t: "Borçlu listeleri vergi dairelerinde", s: "1–15 Aralık; GİB sitesinde 16–30 Aralık", c: "vergi", id: "vuk-597-borclu-listesi" },
  { d: "2026-12-07", t: "Birleşik Krallık SKDM bilgilendirme toplantıları", s: "Ankara 7 Aralık, İstanbul 8 Aralık", c: "distic", id: "uk-skdm-seminer" },
  { d: "2026-12-25", t: "Taksi mali cihaza geçiş son günü", s: "591 Sıra No.lu VUK Genel Tebliği", c: "vergi", id: "taksi-mali-cihaz" },
  { d: "2026-12-31", t: "Konaklama vergisinde %1 oranı sona eriyor", s: "11263 sayılı Cumhurbaşkanı Kararı", c: "vergi", u: "https://www.alomaliye.com/2026/06/19/konaklama-vergisi-rehberi-2026/" },
  { d: "2027-01-01", t: "Ukrayna STA'da gümrük vergisi indirimleri başlıyor", s: "Ürün listelerindeki indirimler", c: "gumruk", id: "ukrayna-sta-yururluk" }
];

const MARKET = {
  asof: "18 Kasım 18:30 itibarıyla, kaynak Bloomberg HT",
  items: [["USD/TRY", "50,44"], ["EUR/TRY", "55,37"], ["Gram altın", "6.095,96 TL"], ["Ons altın", "3.769 $"], ["BIST 100", "11.477,41", "18 Kasım kapanışı"]]
};

const SOURCES = [
  { g: "Resmî kaynaklar", items: [
    ["RG", "Resmî Gazete", "resmigazete.gov.tr", "https://www.resmigazete.gov.tr", ["gumruk", "vergi", "finans", "muhasebe", "distic", "lojistik", "depolama", "denetim"]],
    ["GİB", "Gelir İdaresi Başkanlığı", "gib.gov.tr", "https://www.gib.gov.tr", ["vergi"]],
    ["TB", "Ticaret Bakanlığı", "ticaret.gov.tr", "https://ticaret.gov.tr", ["gumruk", "distic", "depolama"]],
    ["MB", "Merkez Bankası", "tcmb.gov.tr", "https://www.tcmb.gov.tr", ["finans", "distic"]],
    ["BD", "BDDK", "bddk.org.tr", "https://www.bddk.org.tr", ["finans"]],
    ["SPK", "Sermaye Piyasası Kurulu", "spk.gov.tr", "https://spk.gov.tr", ["finans", "denetim"]],
    ["SE", "SEDDK", "seddk.gov.tr", "https://www.seddk.gov.tr", ["finans"]],
    ["KGK", "Kamu Gözetimi Kurumu", "kgk.gov.tr", "https://www.kgk.gov.tr", ["denetim", "muhasebe"]],
    ["SGK", "Sosyal Güvenlik Kurumu", "sgk.gov.tr", "https://www.sgk.gov.tr", ["muhasebe"]],
    ["UAB", "Ulaştırma ve Altyapı Bakanlığı", "uab.gov.tr", "https://www.uab.gov.tr", ["lojistik"]],
    ["KİK", "Kamu İhale Kurumu", "kik.gov.tr", "https://www.kik.gov.tr", ["muhasebe", "vergi"]]
  ]},
  { g: "Meslek ve sektör kaynakları", items: [
    ["TM", "TÜRMOB", "turmob.org.tr", "https://www.turmob.org.tr", ["muhasebe", "vergi"]],
    ["UT", "UTİKAD", "utikad.org.tr", "https://www.utikad.org.tr", ["lojistik", "depolama"]],
    ["UND", "Uluslararası Nakliyeciler Derneği", "und.org.tr", "https://www.und.org.tr", ["lojistik"]],
    ["AM", "Alomaliye", "alomaliye.com", "https://www.alomaliye.com", ["vergi", "muhasebe", "finans"]],
    ["LX", "Lexpera Resmî Gazete", "lexpera.com.tr", "https://www.lexpera.com.tr", ["gumruk", "vergi", "finans"]],
    ["OR", "ORGTR", "orgtr.org", "https://orgtr.org", ["gumruk", "distic"]]
  ]},
  { g: "Gümrük ve dış ticaret kaynakları", items: [
    ["MN", "mevzuat.net", "mevzuat.net", "https://www.mevzuat.net", ["gumruk", "distic", "vergi"]],
    ["OAİB", "Orta Anadolu İhracatçı Birlikleri", "oaib.org.tr", "https://oaib.org.tr/duyurular-ve-bilgilendirme", ["distic", "gumruk"]],
    ["İMMİB", "İstanbul Maden ve Metal İhracatçı Birlikleri", "immib.org.tr", "https://immib.org.tr", ["distic", "gumruk"]],
    ["GGM", "Gümrükler Genel Müdürlüğü (LinkedIn)", "linkedin.com", "https://www.linkedin.com/in/ticaret-bakanl%C4%B1%C4%9F%C4%B1-g%C3%BCmr%C3%BCkler-genel-m%C3%BCd%C3%BCrl%C3%BC%C4%9F%C3%BC-92a976270/", ["gumruk"]],
    ["EH", "Evrim Haber", "evrimhaber.com", "https://www.evrimhaber.com", ["gumruk", "lojistik"]]
  ]}
];

return { WEEK, CATS, IMP, DAYS, ITEMS, LEAD, TOP, GUMRUK_LEAD, ARCHIVE_PICKS, TILES, DATES, MARKET, SOURCES };
})();
