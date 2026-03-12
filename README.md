# 📋 Sanal mı Gerçek mi? (Virtual or Real?)

Sosyal kimlik ve çevrimiçi davranış araştırması için etkileşimli anket uygulaması.

## 🎯 Proje Hakkında

Bu uygulama, kullanıcıların sosyal kaygı, sosyal bağlılık ve benlik sunumu boyutlarında gerçek hayat ile dijital ortamda nasıl farklılaştığını araştırır. Katılımcılar sorulara cevap verdikten sonra, kendilerine özgü bir persona kartı ve detaylı analiz raporu alırlar.

## 📁 Klasör Yapısı

```
Soru-CevapİkiDünya/
├── index.html              # Ana HTML dosyası
├── css/
│   └── style.css          # Tüm stil tanımlamaları
├── js/
│   └── script.js          # Uygulama mantığı ve işlevselliği
└── README.md              # Bu dosya
```

## 🚀 Özellikler

- **48 Soruluk Anket** - 3 ana başlık altında gerçek hayat & dijital ortam soruları
- **Otomatik İlerleme** - Cevap verilince sonraki soruya otomatik geçiş
- **XP Sistemi** - Her soruya cevap için 10 XP kazanç
- **Persona Kartı** - Gerçek ve dijital persona detaylı analiz
- **Donut Grafikleri** - Gerçek vs Dijital karşılaştırmalı gösterim
- **Yazdırılabilir Rapor** - Sonuçları dosya olarak kaydetme imkanı

## 📊 Araştırma Başlıkları

1. **🔒 Sosyal Kaygı** (LSAS tabanlı)
2. **🔗 Sosyal Bağlılık** (SBÖ tabanlı)
3. **🪞 Benlik Sunumu** (ÇBSÖ tabanlı)

Her başlık altında 8 gerçek hayat + 8 dijital ortam sorusu = 48 soru toplam

## 🎮 Nasıl Kullanılır

1. `index.html` dosyasını tarayıcıda açın
2. Adınızı girin ve "🎮 Ankete Başla" düğmesine tıklayın
3. 48 sorudan cevap verin (Likert ölçeği: 1-5)
4. Kişi kartı sorularına cevap verin (isteğe bağlı)
5. Persona kartını ve analiz raporunuzu görüntüleyin
6. Sonuçları yazdırabilir veya yeniden başlayabilirsiniz

## 🎨 Tasarım Özellikleri

- Modern, minimalist arayüz
- Renkli tema sistemi (Rose, Lavender, Sage)
- Soft rounded corners ve shadows
- Responsive tasarım (mobil uyumlu)
- Smooth animasyonlar ve geçişler
- Google Fonts entegrasyonu (Caveat, DM Sans, Lora)

## 📱 Responsive Breakpoints

- 480px ve altı: Daraltılmış layout
- 360px ve altı: Tek sütun görünüm

## 🔐 Gizlilik

- Tüm veriler browser'da işlenir
- Sunucuya hiçbir veri gönderilmez
- Kullanıcı anonymity korunur

## 🛠 Geliştirme

### Dosya Açıklaması

#### `css/style.css`
- CSS Custom Properties (Variables) ile renk tanımlamaları
- 6 ana ekran stilizasyonu (S1-S6)
- Responsive grid ve layout sistemleri
- Animasyonlar ve keyframes

#### `js/script.js`
- Anket veri yapısı (SECTIONS, PERSONA_QS)
- Persona tipleri ve puanlama sistemi
- Screen navigasyon mantığı
- Scoring ve analiz algoritmaları
- DOM manipulasyonu ve event handlers

### Yeni Soru Ekleme

1. SECTIONS dizisine yeni soru ekleyin:
```javascript
{id:'q50', no:'Q50', text:'Soru metni...', rev:false}
```

2. Puanlama üst sınırını güncelleyin (`scoreEnv` fonksiyonunda `max` parametresi)

## 📈 Gelecek Fikirler

- [ ] Verileri localStorage'a kaydetme
- [ ] Çok dilli destek
- [ ] API entegrasyonu
- [ ] Gelişmiş istatistikler
- [ ] Sosyal paylaşım özellikleri
- [ ] Progresif Web App (PWA) desteği

## 📄 Lisans

Bu proje araştırma amaçlı oluşturulmuştur.

---

**Son Güncelleme:** 12 Mart 2026
**Versiyon:** 1.0
