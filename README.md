# 📋 Sanal mı Gerçek mi? (Virtual or Real?)

Sosyal kimlik ve çevrimiçi davranış araştırması için etkileşimli anket uygulaması.

## 🎯 Proje Hakkında

Kullanıcıların sosyal kaygı, sosyal bağlılık ve benlik sunumu boyutlarında gerçek hayat ile dijital ortamda nasıl farklılaştığını araştıran uygulama. Katılımcılar 25 rasgele soruya cevap verdikten sonra, dörtlü persona kartı (gerçek & dijital) ve bilinçli analiz raporu alırlar.

## 📁 Klasör Yapısı

```
Soru-CevapİkiDünya/
├── index.html              # Ana HTML dosyası (6 ekran)
├── css/style.css           # Tüm stil tanımlamaları
├── js/script.js            # Uygulama mantığı (710 satır)
├── archive/                # Arşivlenmiş eski dosyalar
│   └── frontend_old/       # Eski React scaffolding
└── README.md               # Bu dosya
```

## ✨ Öne Çıkan Özellikler

| Özellik | Detay |
|---------|-------|
| **Soru Havuzu** | 6 havuz (gerçek/dijital × 3 boyut) = 60 soru |
| **Session** | Havuzlardan rastgele 25 soru seçilir (4+4+4+4+5+4 dağılımı) |
| **XP Sistemi** | 10 XP/soru = 250 XP maks |
| **Persona Q** | 15 soru (3 genel + 5 gerçek + 5 dijital + 2 demografik) |
| **Persona Types** | 3 tip × 2 ortam = 6 benzersiz persona |
| **Animasyonlar** | Confetti, floating XP, smooth transitions |

## 📐 Araştırma Yapısı

| Boyut | Icon | Kaynak | Soruları |
|-------|------|--------|----------|
| Sosyal Kaygı | 🔒 | LSAS | 8 real + 8 dig |
| Sosyal Bağlılık | 🔗 | SBÖ | 8 real + 8 dig |
| Benlik Sunumu | 🪞 | ÇBSÖ | 8 real + 8 dig |

## 🎮 Kullanım Akışı

```
Splash (isim) → 25 Soru (Likert 1-5) → Persona Q'lar (15) → Loading → 
Persona Card (real/dijital) → Sonuçlar (donut grafikler)
```

1. `index.html` tarayıcıda açın
2. Adınız girin → "Ankete Başla"
3. 25 soruya Likert ölçeği (1-5) ile cevap verin
4. Persona soruları doldurun (isteğe bağlı) 
5. 6 persona kartınızı görüntüleyin

## 🎨 Tasarım Sistem

**CSS Variables (DRY):**
```css
--rose, --lav, --sage, --sky, --peach, --gold (renkler)
--sh-sm, --sh-md, --sh-lg (gölgeler)
--bdr, --bdr-dk (kenarlıklar)
```

**Typography:**
- Başlıklar: Caveat (handwriting) — kişisel hiss
- Body: DM Sans (sans-serif) — okunabilirlik
- Alıntılar: Lora (serif) — ağırlık

**Responsive:**
- 480px: Compact layout
- 360px: Single-column

## 🔧 Kod Yapısı (JS)

### State Management (DRY)
- `A` → Survey answers
- `PQA` → Persona question answers
- Global counters: `totalXP`, `curQ`, `curPQ`

### Core Functions
| Fonksiyon | Amaç |
|-----------|------|
| `buildFlatQs()` | 6 havuzdan flat liste oluştur |
| `buildSession()` | Fisher-Yates shuffle (25 soru seç) |
| `renderQ()` | Dinamik soru render |
| `scoreEnv(secId, envType)` | Bölüm puanı hesapla |
| `buildPersonaCard()` | Persona kartı oluştur |
| `makePersonaGrid()` | Persona grid HTML'i |
| `buildResults()` | Donut grafikleri + insights |

### Scoring Logic (KISS)
```javascript
scoreEnv(b1, real) → Sum answers (1-5) → Reverse if rev:true → 0-40 range
pct() → (raw/40)*100 → 0-100% range
getPersonaType(pct) → [0-45], [46-65], [66-100] ranges
```

## 📊 Persona Tipler

**Gerçek Hayat:**
- 🌙 **Sessiz Gözlemci** (0-45%) — Derin düşünen, nazik
- ⚖️ **Dengeli Yolcu** (46-65%) — Uyumlu, güvenilir
- 🌻 **Açık Kalp** (66-100%) — Otantik, bağlantılı

**Dijital Hayat:**
- 👤 **Dijital Gölge** (0-45%) — Tedirgin, seçici
- 🎛️ **Seçici Paylaşımcı** (46-65%) — Bilinçli seçim
- ✨ **Dijital Özgün** (66-100%) — Özgür, uyumlu

## 🏗 Temiz Kod Prensipleri

### SOLID
- **S**ingle Responsibility: Herbir fonksiyon tek iş yapar
- **O**pen/Closed: CSS vars genişletilmeye açık
- **I**nterface Segregation: Minimal DOM coupling
- **D**ependency Inversion: Data-driven rendering

### YAGNI (You Aren't Gonna Need It)
- ✅ Removed: Old React scaffold (moved to archive/)
- ✅ Removed: Unused Zustand dependency
- ✅ Simplified: 48 → 25 random questions per session
- ✅ Removed: Outer backend API setup (vanilla JS only)

### KISS (Keep It Simple, Stupid)
- Persona taglines kısaltıldı (açıklık)
- Donut SVG inline (external lib yok)
- Event handlers inline onclick (jQuery yok)
- Vanilla JS (Framework free)

### DRY (Don't Repeat Yourself)
- CSS: Tüm renkler variables
- JS: `scoreEnv()` tüm bölümler için işe yarar
- Templates: `makePersonaGrid()` reusable
- Colors: SECTIONS'da merkezi tanım

## 🚀 Başlangıç

```bash
# Lokal sunucu başlat (Python)
python -m http.server 8000

# Veya VS Code Live Server
# Veya sadece tarayıcıda aç: file:///path/to/index.html
```

## 🔒 Gizlilik ve Etik

- ✅ Tüm veriler browser'da işlenir
- ✅ Sunucuya veri göndermez
- ✅ Cookie yok
- ✅ Session başında anonymity
- ✅ Araştırma standartlarına uygun

## 📝 Teknik Detaylar

### Browser Uyumluluğu
- Chrome/Edge: ✅ Tam destek
- Firefox: ✅ Tam destek  
- Safari: ✅ Tam destek
- IE11: ❌ Template literals gerekir

### Performance
- Initial load: ~50KB (HTML+CSS+JS combined)
- No external API calls (offline works)
- Smooth 60fps animations

## 🎓 Geliştirici Notları

### Yeni Soru Ekleme
```javascript
// SECTIONS.js'de:
{id:'q50', no:'Q50', text:'...', rev:false}

// max değerini scoreEnv'de güncelle
max = 40 → max = 45 (8 soru = 40 score)
```

### Persona Tipi Özelleştirme
```javascript
PERSONA_TYPES.real[0] = {
  range: [0, 45],
  name: 'Yeni İsim',
  emoji: '🎭',
  tagline: 'Yeni açıklama'
}
```

### CSS Teması Değiştirme
```css
:root {
  --rose: #NEW_COLOR;
  --lav: #NEW_COLOR;
  --sage: #NEW_COLOR;
}
```

## 📚 Referanslar

- LSAS: Liebowitz Social Anxiety Scale (1987)
- SBÖ: Sosyal Bağlılık Ölçeği (Duru, 2007)
- ÇBSÖ: Çevrimiçi Benlik Sunumu Ölçeği (Dalkılıç, 2025)

## 📄 Lisans

Bu araştırma aracı eğitim ve araştırma amaçlıdır.

## 📄 Lisans

Bu proje araştırma amaçlı oluşturulmuştur.

---

**Son Güncelleme:** 12 Mart 2026
**Versiyon:** 1.0
