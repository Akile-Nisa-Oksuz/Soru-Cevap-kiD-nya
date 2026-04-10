/* ══════════════════════════════════════════════
   SORU HAVUZLARI — 6 havuz, her birinde 10 soru
   b1=Sosyal Kaygı  b2=Bağlılık  b3=Benlik
   _real = Gerçek Hayat   _dig = Dijital Hayat
══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   TEMA SİSTEMİ
══════════════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem('appTheme') || 'light';
  setTheme(saved);
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('appTheme', theme);
  
  // Buton görselleri güncelle
  document.querySelectorAll('.theme-btn,.theme-opt').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Tema butonlarının active'i güncelle
  const btnMap = { light: 0, mint: 1, dark: 2 };
  const idx = btnMap[theme];
  if (document.querySelectorAll('.theme-btn')[idx]) {
    document.querySelectorAll('.theme-btn')[idx].classList.add('active');
  }
  if (document.querySelectorAll('.theme-opt')[idx]) {
    document.querySelectorAll('.theme-opt')[idx].classList.add('active');
  }
}

function toggleThemeMenu() {
  const menu = document.getElementById('theme-menu');
  menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
}

// Sayfa yüklendiğinde temayı uygula
document.addEventListener('DOMContentLoaded', initTheme);

const POOL = {

  b1_real: [
    {id:'b1r1', text:'Başkalarının benim hakkımda ne düşündüğünden endişelenirim.',          rev:false},
    {id:'b1r2', text:'Yeni insanlarla tanıştığımda tedirgin olurum.',                        rev:false},
    {id:'b1r3', text:'Bir grup insanla birlikteyken çekinik ya da sessiz kalırım.',          rev:false},
    {id:'b1r4', text:'Eleştirilmekten ya da yanlış anlaşılmaktan korkarım.',                rev:false},
    {id:'b1r5', text:'Kendimi rahatça ifade edebildiğimi hissederim.',                       rev:true},
    {id:'b1r6', text:'Görünüşümle ilgili başkalarının ne düşündüğünü kafama takarım.',      rev:false},
    {id:'b1r7', text:'Fotoğraf çekilmek beni rahatsız eder.',                               rev:false},
    {id:'b1r8', text:'Görünüşümden dolayı insanların beni olumsuz değerlendireceğinden korkarım.', rev:false},
    {id:'b1r9', text:'Topluluk önünde konuşmak beni kaygılandırır.',                        rev:false},
    {id:'b1r10',text:'Sosyal ortamlarda kendimi geri planda tutarım.',                      rev:false},
  ],

  b1_dig: [
    {id:'b1d1', text:'Çevrimiçi ortamda başkalarının benim hakkımda ne düşündüğünden endişelenirim.', rev:false},
    {id:'b1d2', text:'Çevrimiçi yeni insanlarla iletişime geçmek beni tedirgin eder.',      rev:false},
    {id:'b1d3', text:'Çevrimiçi grup sohbetlerinde çekinik ya da sessiz kalırım.',          rev:false},
    {id:'b1d4', text:'Sosyal medyada eleştirilmekten ya da yanlış anlaşılmaktan korkarım.',rev:false},
    {id:'b1d5', text:'Dijital ortamda kendimi rahatça ifade edebildiğimi hissederim.',      rev:true},
    {id:'b1d6', text:'Profilim / fotoğraflarım hakkında başkalarının ne düşündüğünü kafama takarım.', rev:false},
    {id:'b1d7', text:'Fotoğraflarımın veya videolarımın paylaşılması beni rahatsız eder.', rev:false},
    {id:'b1d8', text:'Dijital görünüşümden dolayı insanların beni olumsuz değerlendireceğinden korkarım.', rev:false},
    {id:'b1d9', text:'Sosyal medyada yorum yazmaktan çekinirim.',                           rev:false},
    {id:'b1d10',text:'Beğeni sayım az olduğunda kendimi yetersiz hissederim.',              rev:false},
  ],

  b2_real: [
    {id:'b2r1', text:'Kendimi çevremdeki insanlara ait hissediyorum.',                      rev:false},
    {id:'b2r2', text:'Önem verdiğim insanlarla gerçek anlamda bağlı hissediyorum.',         rev:false},
    {id:'b2r3', text:'Zor anlarda yanımda olan insanlar var.',                              rev:false},
    {id:'b2r4', text:'Çevremdeki insanlarla anlamlı paylaşımlarım oluyor.',                rev:false},
    {id:'b2r5', text:'Kendimi yalnız ve kopuk hissediyorum.',                               rev:true},
    {id:'b2r6', text:'Çevremdeki insanlar beni gerçekten tanıyor.',                         rev:false},
    {id:'b2r7', text:'Kendimi bir grubun ya da topluluğun parçası olarak hissediyorum.',    rev:false},
    {id:'b2r8', text:'İnsanlarla kurduğum ilişkiler yüzeysel kalıyor.',                    rev:true},
    {id:'b2r9', text:'Arkadaşlarımla vakit geçirmek bana iyi geliyor.',                    rev:false},
    {id:'b2r10',text:'Sosyal çevrem zor anlarda beni destekler.',                           rev:false},
  ],

  b2_dig: [
    {id:'b2d1', text:'Çevrimiçi topluluklarda kendimi ait hissediyorum.',                   rev:false},
    {id:'b2d2', text:'Dijital ortamda iletişim kurduğum insanlarla gerçekten bağlı hissediyorum.', rev:false},
    {id:'b2d3', text:'Zor anlarda çevrimiçi destek bulurum.',                               rev:false},
    {id:'b2d4', text:'Sosyal medyada anlamlı paylaşımlar yapıyorum.',                       rev:false},
    {id:'b2d5', text:'Sosyal medyayı aktif kullansam da yalnız ve kopuk hissediyorum.',     rev:true},
    {id:'b2d6', text:'Çevrimiçi bağlantılarım beni gerçekten tanıyor.',                    rev:false},
    {id:'b2d7', text:'Kendimi bir dijital topluluğun parçası olarak hissediyorum.',         rev:false},
    {id:'b2d8', text:'Çevrimiçi ilişkilerim yüzeysel kalıyor.',                             rev:true},
    {id:'b2d9', text:'DM / mesaj yoluyla kurulan ilişkiler bana anlamlı geliyor.',          rev:false},
    {id:'b2d10',text:'Çevrimiçi arkadaşlarımın desteğini hissediyorum.',                   rev:false},
  ],

  b3_real: [
    {id:'b3r1', text:'Gerçek beni olduğum gibi yansıtabiliyorum.',                          rev:false},
    {id:'b3r2', text:'Kendimi samimi ve otantik biçimde ifade edebiliyorum.',               rev:false},
    {id:'b3r3', text:"Başkalarının beklentilerine göre farklı bir 'ben' canlandırıyorum.",  rev:true},
    {id:'b3r4', text:'Kendimi olduğumdan farklı göstermem gerektiğini hissediyorum.',       rev:true},
    {id:'b3r5', text:'İçimdeki ben ile dışarıya yansıttığım ben tutarlı.',                 rev:false},
    {id:'b3r6', text:'İnsanlarla iletişim kurmak bana kolay geliyor.',                     rev:false},
    {id:'b3r7', text:'Beğenilmek ya da onay almak için davranışlarımı değiştiriyorum.',    rev:true},
    {id:'b3r8', text:'Kendimi özgürce ve baskısız biçimde ifade edebiliyorum.',             rev:false},
    {id:'b3r9', text:'Farklı sosyal gruplarda kendimi farklı gösteririm.',                  rev:true},
    {id:'b3r10',text:'Duygularımı insanlarla açıkça paylaşabilirim.',                       rev:false},
  ],

  b3_dig: [
    {id:'b3d1', text:'Sosyal medyada gerçek beni yansıtabiliyorum.',                        rev:false},
    {id:'b3d2', text:'Çevrimiçi ortamda kendimi samimi biçimde ifade edebiliyorum.',        rev:false},
    {id:'b3d3', text:"Sosyal medyada başkalarının beklentilerine göre farklı bir 'ben' canlandırıyorum.", rev:true},
    {id:'b3d4', text:'Sosyal medyada olduğumdan farklı görünmem gerektiğini hissediyorum.',rev:true},
    {id:'b3d5', text:'Sosyal medya profilim gerçek benliğimle tutarlı.',                    rev:false},
    {id:'b3d6', text:'Çevrimiçi insanlarla iletişim kurmak bana kolay geliyor.',           rev:false},
    {id:'b3d7', text:'Beğeni veya onay almak için sosyal medyadaki içeriklerimi değiştiriyorum.', rev:true},
    {id:'b3d8', text:'Sosyal medyada kendimi özgürce ve baskısız biçimde ifade edebiliyorum.', rev:false},
    {id:'b3d9', text:'Farklı platformlarda farklı bir kimlik sergilerim.',                  rev:true},
    {id:'b3d10',text:'Duygularımı sosyal medyada açıkça paylaşabilirim.',                   rev:false},
  ],
};

/* ── Seçim sayıları — toplam = 25 ── */
const PICKS = { b1r:4, b1d:4, b2r:4, b2d:4, b3r:5, b3d:4 }; // 4+4+4+4+5+4 = 25

/* ── Section meta ── */
const SEC_META = {
  b1: { name:'🔒 Sosyal Kaygı',   emoji:'😰', src:'LSAS (Liebowitz,1987)',
        color:{a:'#E8547A',lt:'#FFE0E8',md:'#FFBCCB',dk:'#C03060',fill:'linear-gradient(90deg,#FFBCCB,#E8547A)'} },
  b2: { name:'🔗 Sosyal Bağlılık',emoji:'🤝', src:'SBÖ (Duru,2007)',
        color:{a:'#8B68D4',lt:'#EDE8FF',md:'#C9B5F0',dk:'#6845B8',fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)'} },
  b3: { name:'🪞 Benlik Sunumu',  emoji:'🎭', src:'ÇBSÖ (Dalkılıç,2025)',
        color:{a:'#3DAB8C',lt:'#E0F5EC',md:'#90D0B0',dk:'#2A8068',fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)'} },
};

/* ══════════════════════════════════════════════
   PERSONA SORULARI — GERÇEK & DİJİTAL AYRI
   Her ortam için 8 soru; 3 ortak + 5 ortama özel
══════════════════════════════════════════════ */

/* Ortak sorular (her iki karta da gider) */
const PQ_COMMON = [
  { id:'pqc1', type:'text',
    label:'Seni en çok tanımlayan bir cümle ya da alıntı nedir?',
    hint:'Bir söz, şarkı sözü veya kendi cümlenden olabilir.',
    placeholder:'"Kendim olmak en cesur eylem."' },

  { id:'pqc2', type:'textarea',
    label:'Kendini kısaca tanıt — kim olduğunu anlat.',
    hint:'İlgi alanların, geçmişin, nelerden hoşlandığın.',
    placeholder:'Örn: 3. sınıf psikoloji öğrencisiyim...' },

  { id:'pqc3', type:'single',
    label:'Sosyal hayatta en güçlü yanın nedir?',
    opts:['Empati & Anlayış','Derin Dinleme','Esprili İletişim','Çözüm Üretme','Güven Verme','Liderlik & Yönlendirme'] },
];

/* Gerçek hayata özel persona soruları */
const PQ_REAL = [
  { id:'pqr1', type:'single',
    label:'Gerçek hayatta sosyal ortamlardaki temel hedefin nedir?',
    opts:['Derin ve kalıcı bağlar kurmak','Kendimle barışık olmak','Güvenli bir topluluk bulmak','Özgürce kendimi ifade etmek','Fark yaratmak ve ilham vermek'] },

  { id:'pqr2', type:'single',
    label:'Yüz yüze ortamlarda seni en çok motive eden nedir?',
    opts:['Tanınma ve takdir','Anlam & Amaç hissi','Bağlantı & Aidiyet','Özerklik & Özgürlük','Başarı & Gelişim'] },

  { id:'pqr3', type:'single',
    label:'Gerçek hayatta sosyal ortamlarda en çok neye ihtiyaç duyarsın?',
    opts:['Kabul görmek','Anlaşılmak','Güven ortamı','Kişisel alan','Net sınırlar','Destek & Yardım'] },

  { id:'pqr4', type:'multi',
    label:'Gerçek hayatta en çok hangi ortamlarda kendini iyi hissedersin?',
    hint:'Birden fazla seçilebilir.',
    opts:['Küçük ve samimi gruplar','Büyük sosyal etkinlikler','Bire bir sohbetler','Doğa ve açık hava','Kültür-sanat mekânları','Spor ortamları'] },

  { id:'pqr5', type:'single',
    label:'Gerçek hayatta bir çatışma ya da anlaşmazlıkta nasıl davranırsın?',
    opts:['Uzlaşma ararım','Geri çekilirim','Açıkça konuşurum','Arabuluculuk yaparım','Konuyu değiştiririm'] },
];

/* Dijital hayata özel persona soruları */
const PQ_DIG = [
  { id:'pqd1', type:'single',
    label:'Sosyal medyada temel amacın nedir?',
    opts:['İlham almak & keşfetmek','Bağlantıda kalmak','Kendimi ifade etmek','Bilgi takip etmek','Eğlenmek'] },

  { id:'pqd2', type:'single',
    label:'Dijital ortamda seni en çok motive eden nedir?',
    opts:['Beğeni ve takipçi artışı','Anlamlı yorumlar ve geri bildirim','Topluluk hissi','Öğrenme & keşif','Yaratıcı üretim'] },

  { id:'pqd3', type:'single',
    label:'Dijital ortamda en çok neye ihtiyaç duyarsın?',
    opts:['Gizlilik & mahremiyet','Özgün paylaşım alanı','Destekleyici topluluk','Hızlı bilgiye erişim','Kontrol & sınır koyabilme'] },

  { id:'pqd4', type:'multi',
    label:'Hangi sosyal platformları aktif olarak kullanıyorsun?',
    hint:'Birden fazla seçilebilir.',
    opts:['Instagram','TikTok','Twitter/X','LinkedIn','Discord','YouTube','Reddit','Diğer','Kullanmıyorum'] },

  { id:'pqd5', type:'single',
    label:'Sosyal medyada olumsuz bir yorum ya da eleştiri aldığında nasıl hissedersin?',
    opts:['Çok etkiliyor, uzun süre düşünüyorum','Biraz etkiliyor ama atlayabiliyorum','Nadiren etkiliyor','Neredeyse hiç etkilemiyor'] },
];

/* Demografik (ortak, her iki karta yansır) */
const PQ_DEMO = [
  { id:'pqz1', type:'single',
    label:'Yaş aralığın nedir?',
    opts:['17 ve altı','18–21','22–25','26–30','31 ve üzeri'] },

  { id:'pqz2', type:'single',
    label:'Cinsiyetin',
    opts:['Kadın','Erkek','Belirtmek istemiyorum'] },
];

/* Tüm persona soruları sırası:
   Ortak(3) → Gerçek(5) → Dijital(5) → Demo(2) = 15 soru */
const ALL_PQ = [...PQ_COMMON, ...PQ_REAL, ...PQ_DIG, ...PQ_DEMO];

/* ══════════════════════════════════════════════
   PERSONA TİPLERİ
══════════════════════════════════════════════ */
const PERSONA_TYPES = {
  real: [
    { range:[0,45],   name:'Sessiz Gözlemci',   emoji:'🌙',
      tagline:'Derinlemesine düşünen, sözcüklerini dikkatle seçen; gerçek bağlar kurduğunda son derece sadık ve güçlü.' },
    { range:[46,65],  name:'Dengeli Yolcu',      emoji:'⚖️',
      tagline:'Sosyal durumları hem içgüdüsel hem düşünceli değerlendirirsin. Esnek, uyumlu ve güvenilir bir sosyal profil.' },
    { range:[66,100], name:'Açık Kalp',           emoji:'🌻',
      tagline:'Gerçek hayatta tam anlamıyla kendinsin. Otantikliğin ve bağlılık gücün çevrendeki insanlara ilham veriyor.' },
  ],
  digital: [
    { range:[0,45],   name:'Dijital Gölge',       emoji:'👤',
      tagline:'Çevrimiçi ortamda tedirgin ve çekimsersin. Dijital dünya seni zorlasa da bu tamamen normaldir.' },
    { range:[46,65],  name:'Seçici Paylaşımcı',   emoji:'🎛️',
      tagline:'Sosyal medyada ne paylaşacağını özenle seçiyorsun. Dijital kimliğini bilinçli şekillendiriyorsun.' },
    { range:[66,100], name:'Dijital Özgün',        emoji:'✨',
      tagline:'Çevrimiçi ortamda kendinle barışık, özgün ve bağlanabilen birisin. Dijital ve gerçek benliğin uyumlu.' },
  ],
};

function getPersonaType(pct100, env) {
  return PERSONA_TYPES[env].find(p => pct100 >= p.range[0] && pct100 <= p.range[1]) || PERSONA_TYPES[env][1];
}

/* ══════════════════════════════════════════════
   STATE
══════════════════════════════════════════════ */
const A   = {};   // anket cevapları   { questionId: 1-5 }
const PQA = {};   // persona q cevapları { questionId: değer }
let userName = '';
let totalXP  = 0;
let flatQs   = []; // oturum soruları (25 adet)
let curQ     = 0;
let curPQ    = 0;
let popCB    = null;

/* ── Soru meta (her soru hangi section/env/renk) ── */
// flatQs elemanları: { id, text, rev, secId, envType, secMeta, no }

/* ══════════════════════════════════════════════
   FISHER-YATES SHUFFLE + SEÇIM
══════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildSession() {
  /* Her havuzdan rastgele N soru çek */
  const picked = {
    b1_real: shuffle(POOL.b1_real).slice(0, PICKS.b1r),
    b1_dig:  shuffle(POOL.b1_dig ).slice(0, PICKS.b1d),
    b2_real: shuffle(POOL.b2_real).slice(0, PICKS.b2r),
    b2_dig:  shuffle(POOL.b2_dig ).slice(0, PICKS.b2d),
    b3_real: shuffle(POOL.b3_real).slice(0, PICKS.b3r),
    b3_dig:  shuffle(POOL.b3_dig ).slice(0, PICKS.b3d),
  };

  /* Oturum soru dizisi: B1Real → B1Dig → B2Real → B2Dig → B3Real → B3Dig */
  const order = [
    { qs: picked.b1_real, secId:'b1', envType:'real'    },
    { qs: picked.b1_dig,  secId:'b1', envType:'digital' },
    { qs: picked.b2_real, secId:'b2', envType:'real'    },
    { qs: picked.b2_dig,  secId:'b2', envType:'digital' },
    { qs: picked.b3_real, secId:'b3', envType:'real'    },
    { qs: picked.b3_dig,  secId:'b3', envType:'digital' },
  ];

  flatQs = [];
  let globalIdx = 1;
  order.forEach(({ qs, secId, envType }) => {
    qs.forEach(q => {
      flatQs.push({
        ...q,
        secId,
        envType,
        secMeta: SEC_META[secId],
        no: 'S' + globalIdx++,
        /* envLabel için */ envLabel: envType === 'real' ? '🌿 Gerçek Hayat' : '📡 Dijital Hayat',
      });
    });
  });

  /* Grup sınırlarını işaretle (bölüm/env geçişleri için) */
  flatQs.forEach((q, i) => {
    const next = flatQs[i + 1];
    q.isLastOfGroup = !next || next.secId !== q.secId || next.envType !== q.envType;
    q.isLastOfSec   = !next || next.secId !== q.secId;
  });

  return flatQs;
}

/* ══════════════════════════════════════════════
   EKRAN YÖNETİMİ
══════════════════════════════════════════════ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function confirmBack() {
  if (confirm('Ana menüye dönmek istiyor musun?')) showScreen('s-splash');
}

/* ══════════════════════════════════════════════
   BAŞLAT
══════════════════════════════════════════════ */
function startSurvey() {
  const realName = document.getElementById('ni-real').value.trim() || 'Katılımcı';
  const nickName = document.getElementById('ni-nick').value.trim();
  userName = nickName ? `${realName} (${nickName})` : realName;
  buildSession();
  curQ = 0;
  
  // Mobil cihazlarda ölçek açıklaması göster
  if (window.innerWidth <= 480) {
    document.getElementById('mobile-scale-overlay').style.display = 'flex';
  } else {
    renderQ();
    showScreen('s-question');
  }
}

/* ══════════════════════════════════════════════
   SORU RENDER
══════════════════════════════════════════════ */
function renderQ() {
  if (curQ >= flatQs.length) { goPersonaQ(); return; }

  const qd  = flatQs[curQ];
  const c   = qd.secMeta.color;
  const isReal = qd.envType === 'real';
  const envColor = isReal ? '#3DAB8C' : '#8B68D4';
  const envBg    = isReal ? '#E0F5EC' : '#EDE8FF';
  const envBdr   = isReal ? '#90D0B0' : '#C9B5F0';

  const total = flatQs.length;
  const pct   = Math.round((curQ / total) * 100);

  document.getElementById('prog-fill').style.width      = pct + '%';
  document.getElementById('prog-fill').style.background = c.fill;
  document.getElementById('tb-sec').textContent  = qd.secMeta.name + ' · ' + qd.envLabel;
  document.getElementById('tb-cnt').textContent  = (curQ + 1) + ' / ' + total;
  document.getElementById('btn-back').disabled   = (curQ === 0);
  document.getElementById('btn-next').disabled   = (A[qd.id] === undefined);

  /* Grup dot'ları — aynı sec+env grubundaki sorular */
  const groupQs = flatQs.filter(q => q.secId === qd.secId && q.envType === qd.envType);
  document.getElementById('s-dots').innerHTML = groupQs.map(q => {
    let cls = A[q.id] !== undefined ? 'done' : 'future';
    if (q.id === qd.id) cls = 'curr';
    return '<div class="s-dot ' + cls + '"></div>';
  }).join('');

  document.getElementById('q-body').innerHTML = `
    <div class="q-env-tag slide-in" style="color:${envColor};border-color:${envBdr};background:${envBg}">
      ${qd.envLabel} · ${qd.secMeta.name}
    </div>
    <div class="q-card slide-in">
      <div class="q-num-badge" style="color:${c.a};border-color:${c.md};background:${c.lt}">
        ${qd.no}
        ${qd.rev ? '<span style="font-size:.62rem;background:#FFE0E8;color:#C03060;border:1px solid #FFBCCB;border-radius:4px;padding:1px 5px;margin-left:4px">Ters</span>' : ''}
      </div>
      <div class="q-text-main">"${qd.text}"</div>
      ${qd.rev ? '<div class="q-rev-warn-mobile">⚠️ Şıklar terstir</div>' : ''}
      <div class="likert-row${qd.rev ? ' likert-reverse' : ''}">
        ${[
          {v:1,t:'Kesinlikle<br>Katılmıyorum',s:'--'},
          {v:2,t:'Katıl-<br>mıyorum',s:'-'},
          {v:3,t:'Kararsı-<br>zım',s:'○'},
          {v:4,t:'Katılı-<br>yorum',s:'+'},
          {v:5,t:'Kesinlikle<br>Katılıyorum',s:'++'}
        ].map(o => `
          <button class="lk-btn ${A[qd.id] === o.v ? 'sel-'+o.v+' selected' : ''}"
                  onclick="pickLikert('${qd.id}',${o.v},this)">
            <span class="lk-num" data-symbol="${o.s}">${o.v}</span>
            <span class="lk-text">${o.t}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="auto-hint">✨ Seçim yapınca otomatik ilerler</div>
  `;
}

/* ══════════════════════════════════════════════
   LİKERT SEÇİMİ
══════════════════════════════════════════════ */
function pickLikert(qid, val, btn) {
  const fresh = A[qid] === undefined;
  A[qid] = val;
  if (fresh) { totalXP += 10; spawnXP(btn); }

  btn.closest('.likert-row').querySelectorAll('.lk-btn').forEach(b => b.className = 'lk-btn');
  btn.classList.add('sel-' + val, 'selected');
  document.getElementById('btn-next').disabled = false;

  /* dot güncelle */
  const qd = flatQs[curQ];
  const groupQs = flatQs.filter(q => q.secId === qd.secId && q.envType === qd.envType);
  document.getElementById('s-dots').innerHTML = groupQs.map(q => {
    let cls = A[q.id] !== undefined ? 'done' : 'future';
    if (q.id === qd.id) cls = 'curr';
    return '<div class="s-dot ' + cls + '"></div>';
  }).join('');

  setTimeout(autoAdv, 420);
}

function autoAdv() {
  const qd = flatQs[curQ];
  if (A[qd.id] === undefined) return;

  if (curQ >= flatQs.length - 1) { goPersonaQ(); return; }

  if (qd.isLastOfSec) {
    showPopup(qd, true, () => { curQ++; renderQ(); });
  } else if (qd.isLastOfGroup) {
    showPopup(qd, false, () => { curQ++; renderQ(); });
  } else {
    curQ++; renderQ();
  }
}

function nextQ() { autoAdv(); }
function prevQ() { if (curQ > 0) { curQ--; renderQ(); } }

/* ══════════════════════════════════════════════
   POPUP (bölüm/ortam geçişi)
══════════════════════════════════════════════ */
function showPopup(qd, isSec, cb) {
  popCB = cb;
  const c      = qd.secMeta.color;
  const nextQ  = flatQs[curQ + 1];
  const nextMeta = nextQ ? SEC_META[nextQ.secId] : null;
  const isReal = qd.envType === 'real';
  const p = document.getElementById('sc-popup');

  if (isSec) {
    p.innerHTML = `
      <div class="scp-emoji">🎉</div>
      <div class="scp-title" style="color:${c.a}">${qd.secMeta.name} Tamamlandı!</div>
      <div class="scp-sub">${nextMeta ? 'Sırada: <strong>' + nextMeta.name + '</strong>' : 'Son bölümdeydin!'}<br><br>⭐ ${totalXP} XP kazandın!</div>
      <button class="scp-btn" style="background:linear-gradient(135deg,${nextMeta ? nextMeta.color.a : c.a},${nextMeta ? nextMeta.color.md : c.md})"
              onclick="closePopup()">
        ${nextMeta ? '🚀 ' + nextMeta.name + ' →' : '🪪 Kişi Kartına Geç →'}
      </button>`;
  } else {
    p.innerHTML = `
      <div class="scp-emoji">${isReal ? '🌿' : '📡'}</div>
      <div class="scp-title" style="color:${c.a}">${isReal ? 'Gerçek Hayat' : 'Dijital Hayat'} Tamamlandı!</div>
      <div class="scp-sub">${isReal ? 'Şimdi aynı konuyu <strong>dijital ortam</strong> için değerlendiriyoruz.' : 'Bu bölümün dijital kısmı bitti!'}</div>
      <button class="scp-btn" style="background:linear-gradient(135deg,${c.a},${c.md})"
              onclick="closePopup()">
        ${isReal ? '📡 Dijital Sorulara Geç →' : '➡️ Devam Et'}
      </button>`;
  }

  document.getElementById('sc-overlay').classList.add('show');
  spawnConfetti(c.a);
}

function closePopup() {
  document.getElementById('sc-overlay').classList.remove('show');
  if (popCB) { popCB(); popCB = null; }
}

/* ══════════════════════════════════════════════
   PERSONA SORULARI EKRANI
══════════════════════════════════════════════ */
function goPersonaQ() {
  curPQ = 0;
  showScreen('s-persona-q');
  renderPQ();
}

function renderPQ() {
  const total = ALL_PQ.length;
  if (curPQ >= total) { startLoading(); return; }

  const q = ALL_PQ[curPQ];

  /* progress */
  document.getElementById('pq-prog').style.width = Math.round((curPQ / total) * 100) + '%';
  document.getElementById('pq-cnt').textContent  = (curPQ + 1) + ' / ' + total;

  /* hangi gruba ait? etiket */
  let groupLabel = '🌐 Genel';
  if (PQ_COMMON.find(x => x.id === q.id)) groupLabel = '🌐 Genel Bilgiler';
  else if (PQ_REAL.find(x => x.id === q.id))   groupLabel = '🌿 Gerçek Hayat Profili';
  else if (PQ_DIG.find(x => x.id === q.id))    groupLabel = '📡 Dijital Hayat Profili';
  else groupLabel = '📊 Demografik';

  /* dots */
  const dotsH = ALL_PQ.map((_, i) => {
    let cls = PQA[ALL_PQ[i].id] !== undefined ? 'done' : 'future';
    if (i === curPQ) cls = 'curr';
    return '<div class="pq-dot ' + cls + '" onclick="jumpPQ(' + i + ')"></div>';
  }).join('');

  /* input */
  let inputHTML = '';
  const selVal = PQA[q.id];
  const selArr = Array.isArray(selVal) ? selVal : [];

  if (q.type === 'text') {
    inputHTML = `<input class="pq-input" id="pq-inp" type="text"
      placeholder="${q.placeholder || ''}" value="${selVal || ''}"
      oninput="PQA['${q.id}']=this.value">`;
  } else if (q.type === 'textarea') {
    inputHTML = `<textarea class="pq-textarea" id="pq-inp"
      placeholder="${q.placeholder || ''}"
      oninput="PQA['${q.id}']=this.value">${selVal || ''}</textarea>`;
  } else if (q.type === 'single') {
    inputHTML = `<div class="pq-opts">
      ${q.opts.map(o => `<button class="pq-opt${selVal===o?' sel':''}"
        onclick="pickPQSingle('${q.id}','${o}',this)">${o}</button>`).join('')}
    </div>`;
  } else if (q.type === 'multi') {
    inputHTML = `<div class="pq-opts">
      ${q.opts.map(o => `<button class="pq-opt${selArr.includes(o)?' sel-multi':''}"
        onclick="pickPQMulti('${q.id}','${o}',this)">${o}</button>`).join('')}
    </div>`;
  }

  document.getElementById('pq-body').innerHTML = `
    <div class="pq-hero">
      <div class="pq-hero-icon">🪪</div>
      <div>
        <h2>Kişi Kartın Oluşturuluyor</h2>
        <p>${groupLabel} · ${curPQ + 1} / ${total}</p>
      </div>
    </div>
    <div class="pq-progress-row">${dotsH}</div>
    <div class="pq-card">
      <div class="pq-label">${q.label}</div>
      ${q.hint ? '<div class="pq-hint">' + q.hint + '</div>' : ''}
      ${inputHTML}
    </div>
    <button class="btn-pq-next" onclick="advPQ()">
      ${curPQ < total - 1 ? 'Devam Et →' : '✨ Kartımı Oluştur!'}
    </button>
    <button class="btn-pq-skip" onclick="skipPQ()">Bu soruyu geç →</button>
  `;
}

function pickPQSingle(id, val, btn) {
  PQA[id] = val;
  btn.closest('.pq-opts').querySelectorAll('.pq-opt').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  setTimeout(advPQ, 350);
}

function pickPQMulti(id, val, btn) {
  if (!PQA[id]) PQA[id] = [];
  const i = PQA[id].indexOf(val);
  if (i === -1) PQA[id].push(val); else PQA[id].splice(i, 1);
  btn.classList.toggle('sel-multi');
}

function advPQ() {
  const inp = document.getElementById('pq-inp');
  const curQuestion = ALL_PQ[curPQ];
  
  // Eğer text veya textarea ise ve boş ise uyarı göster
  if ((curQuestion.type === 'text' || curQuestion.type === 'textarea') && inp && !inp.value.trim()) {
    showToast('⚠️ Lütfen doldurun veya soruyu geçebilirsiniz');
    return;
  }
  
  // Eğer single veya multi ise ve seçim yapılmamışsa uyarı göster
  if (curQuestion.type === 'single' && !PQA[curQuestion.id]) {
    showToast('⚠️ Lütfen işaretleyiniz veya bu bölümü geç');
    return;
  }
  
  if (curQuestion.type === 'multi' && (!PQA[curQuestion.id] || PQA[curQuestion.id].length === 0)) {
    showToast('⚠️ Lütfen işaretleyiniz veya bu bölümü geç');
    return;
  }
  
  if (inp && inp.value) PQA[ALL_PQ[curPQ].id] = inp.value;
  curPQ++;
  renderPQ();
}

function skipPQ()  { curPQ++; renderPQ(); }
function jumpPQ(i) { curPQ = i; renderPQ(); }

/* ══════════════════════════════════════════════
   LOADING
══════════════════════════════════════════════ */
function startLoading() {
  showScreen('s-loading');
  const steps  = document.querySelectorAll('.load-step');
  const titles = ['Veriler işleniyor...','Sosyal profil hesaplanıyor...','Kimlikler karşılaştırılıyor...','Persona tipin belirleniyor...','Kartın oluşturuluyor...'];
  const subs   = ['Kaygı örüntülerin analiz ediliyor.','Bağlılık ve kopukluk haritanız çiziliyor.','Gerçek hayat ile dijital kimliğin karşılaştırılıyor.','Sana özel persona türü seçiliyor.','Son rötuşlar yapılıyor...'];
  let step = 0;

  function adv() {
    if (step > 0) {
      steps[step-1].className = 'load-step done';
      steps[step-1].querySelector('.load-step-icon').textContent = '✅';
    }
    if (step < steps.length) {
      steps[step].className = 'load-step active';
      document.getElementById('load-title').textContent = titles[step];
      document.getElementById('load-sub').textContent   = subs[step];
      step++;
      setTimeout(adv, 850);
    } else {
      steps[steps.length-1].className = 'load-step done';
      steps[steps.length-1].querySelector('.load-step-icon').textContent = '✅';
      setTimeout(buildPersonaCard, 500);
    }
  }
  adv();
}

/* ══════════════════════════════════════════════
   PUANLAMA
══════════════════════════════════════════════ */
function scoreGroup(secId, envType) {
  const qs = flatQs.filter(q => q.secId === secId && q.envType === envType);
  const max = qs.length * 5;
  let raw = 0;
  qs.forEach(q => {
    let v = A[q.id] || 3;
    if (q.rev) v = 6 - v;
    raw += v;
  });
  return max > 0 ? Math.round((raw / max) * 100) : 50;
}

/* ══════════════════════════════════════════════
   PERSONA KARTI OLUŞTUR
══════════════════════════════════════════════ */
function buildPersonaCard() {
  /* Puanlar — her grup bağımsız */
  const sc = {
    b1r: scoreGroup('b1','real'),    b1d: scoreGroup('b1','digital'),
    b2r: scoreGroup('b2','real'),    b2d: scoreGroup('b2','digital'),
    b3r: scoreGroup('b3','real'),    b3d: scoreGroup('b3','digital'),
  };

  /* Genel ortalama */
  const realAvg = Math.round((sc.b1r + sc.b2r + sc.b3r) / 3);
  const digAvg  = Math.round((sc.b1d + sc.b2d + sc.b3d) / 3);

  const realP = getPersonaType(realAvg, 'real');
  const digP  = getPersonaType(digAvg,  'digital');

  /* Insight metni */
  const insights = [];
  const d1 = sc.b1d - sc.b1r, d2 = sc.b2d - sc.b2r, d3 = sc.b3d - sc.b3r;
  if (Math.abs(d1) > 8) insights.push(d1 > 0
    ? 'Dijital ortamdaki sosyal kaygın gerçek hayatından <strong>belirgin şekilde daha yüksek</strong>.'
    : 'Gerçek hayattaki sosyal kaygın dijital ortamına göre <strong>daha fazla</strong>.');
  else insights.push('Sosyal kaygı düzeylerin gerçek ve dijital ortamda <strong>birbirine yakın</strong>.');
  if (Math.abs(d2) > 8) insights.push(d2 > 0
    ? 'Dijital ortam sana daha güçlü bir <strong>aidiyet hissi</strong> veriyor.'
    : 'Gerçek hayattaki sosyal bağlılık hissin dijital ortamına göre <strong>çok daha güçlü</strong>.');
  if (Math.abs(d3) > 8) insights.push(d3 > 0
    ? 'Dijital ortamda kendini <strong>daha özgür ve otantik</strong> ifade ediyorsun.'
    : 'Gerçek hayatta benlik sunumun dijital kimliğinden <strong>daha otantik</strong>.');
  const insightText = insights.join(' ');

  window._SD = { sc, realP, digP, insightText, realAvg, digAvg };

  /* Persona verisi — ortak alanlar */
  const common = {
    quote:      PQA.pqc1 || '"Kendim olmak en cesur eylem."',
    background: PQA.pqc2 || 'Belirtilmedi.',
    skill_main: PQA.pqc3 || '—',
    age:        PQA.pqz1 || '—',
    gender:     PQA.pqz2 || '—',
  };

  /* Gerçek hayata özel */
  const realData = {
    goal:       PQA.pqr1 || '—',
    motivation: PQA.pqr2 || '—',
    need:       PQA.pqr3 || '—',
    environments: Array.isArray(PQA.pqr4) ? PQA.pqr4 : [],
    conflict:   PQA.pqr5 || '—',
  };

  /* Dijital hayata özel */
  const digData = {
    goal:       PQA.pqd1 || '—',
    motivation: PQA.pqd2 || '—',
    need:       PQA.pqd3 || '—',
    platforms:  Array.isArray(PQA.pqd4) ? PQA.pqd4 : [],
    feedback:   PQA.pqd5 || '—',
  };

  document.getElementById('pn-title').textContent = userName + "'in Persona Kartı";

  const panels = document.getElementById('p-panels');
  panels.innerHTML = `
    <div class="p-panel active" id="panel-real">
      ${makePersonaGrid('real',  realP, sc, common, realData, insightText)}
    </div>
    <div class="p-panel" id="panel-dig">
      ${makePersonaGrid('digital', digP, sc, common, digData,  insightText)}
    </div>
  `;

  /* Bar animasyonu */
  setTimeout(() => {
    panels.querySelectorAll('.pc-mini-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 200);

  showScreen('s-persona');
  spawnConfetti('#C9B5F0');
  setTimeout(() => spawnConfetti('#FFBCCB'), 300);
  
  // 5 saniye sonra analiz ekranına gitmek isteyip istemediğini sor
  setTimeout(() => {
    document.getElementById('persona-results-overlay').style.display = 'flex';
  }, 5000);
}

/* ══════════════════════════════════════════════
   PERSONA GRID ÇİZİCİ — AYNI TASARIM, FARKLI VERİ
══════════════════════════════════════════════ */
function makePersonaGrid(envType, persona, sc, common, envData, insightText) {
  const isReal   = envType === 'real';
  const c        = isReal
    ? { a:'#3DAB8C', lt:'#E0F5EC', md:'#90D0B0', fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)' }
    : { a:'#8B68D4', lt:'#EDE8FF', md:'#C9B5F0', fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)' };
  const envLabel = isReal ? '🌿 Gerçek Persona' : '📡 Dijital Persona';

  /* 3 bölüm metriği — her kart kendi puanını gösterir */
  const metrics = [
    { lbl:'Sosyal Kaygı',    val: isReal ? sc.b1r : sc.b1d, fill:'linear-gradient(90deg,#FFBCCB,#E8547A)' },
    { lbl:'Sosyal Bağlılık', val: isReal ? sc.b2r : sc.b2d, fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)' },
    { lbl:'Benlik Sunumu',   val: isReal ? sc.b3r : sc.b3d, fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)' },
  ];

  /* Önemli noktalar — ortama göre dinamik */
  const keyObs = isReal ? [
    sc.b1r > 60 ? 'Gerçek hayatta sosyal kaygı belirgin' : 'Gerçek hayatta sosyal kaygı düşük',
    sc.b2r > 55 ? 'Güçlü gerçek bağlılık'               : 'Gerçek bağlılık gelişebilir',
    sc.b3r > 60 ? 'Yüksek otantiklik'                    : 'Otantiklik orta düzeyde',
    envData.conflict !== '—' ? 'Çatışmada: ' + envData.conflict : null,
  ].filter(Boolean) : [
    sc.b1d > 60 ? 'Dijital kaygı belirgin'  : 'Dijital kaygı düşük',
    sc.b2d > 55 ? 'Dijital bağlılık güçlü'  : 'Dijital bağlılık zayıf',
    sc.b3d > 60 ? 'Dijitalde özgün ifade'   : 'Dijitalde performatif davranış',
    envData.feedback !== '—' ? 'Eleştiriye tepki: ' + envData.feedback : null,
  ].filter(Boolean);

  /* Demografik satır */
  const demoLine = [
    common.age    !== '—' ? '🎂 ' + common.age    : null,
    common.gender !== '—' ? '⚧ '  + common.gender : null,
    isReal && envData.environments && envData.environments.length
      ? '📍 ' + envData.environments.slice(0, 2).join(', ') : null,
    !isReal && envData.platforms && envData.platforms.length
      ? '📱 ' + envData.platforms.slice(0, 3).join(', ') : null,
  ].filter(Boolean).join('<br>');

  return `
  <div class="pc-grid">

    <!-- HEADER -->
    <div class="pc-header">
      <div class="pc-name-cell">
        <span style="font-size:1.4rem">${persona.emoji}</span>
        ${userName}
      </div>
      <div class="pc-type-cell" style="color:${c.a}">
        <span>${persona.name}</span>
        <span style="font-size:1.1rem">${isReal ? '🌿' : '📡'}</span>
      </div>
    </div>

    <!-- BODY -->
    <div class="pc-body">

      <!-- SOL SÜTUN -->
      <div class="pc-left">

        <div class="pc-left-cell">
          <div class="pc-cell-lbl">👤 Profil</div>
          <div class="pc-avatar"
               style="background:${c.lt};border-color:${c.md};box-shadow:2px 2px 0 ${c.md}">
            ${persona.emoji}
          </div>
          <div style="font-family:'Caveat',cursive;font-size:.85rem;font-weight:700;color:${c.a}">
            ${persona.name}
          </div>
          <div style="font-size:.7rem;color:var(--ink-lt);margin-top:2px">${envLabel}</div>
        </div>

        <div class="pc-left-cell">
          <div class="pc-cell-lbl">📊 Demografik</div>
          <div style="font-size:.75rem;color:var(--ink-mid);line-height:1.6">
            ${demoLine || '<span style="color:var(--ink-lt)">Belirtilmedi</span>'}
          </div>
        </div>

        <div class="pc-left-cell">
          <div class="pc-cell-lbl">⚡ Yetenekler</div>
          <div>
            ${common.skill_main !== '—'
              ? `<span class="pc-tag" style="background:${c.lt};color:${c.a};border-color:${c.md}">${common.skill_main}</span>`
              : '<span style="font-size:.75rem;color:var(--ink-lt)">Belirtilmedi</span>'}
          </div>
        </div>

        <div class="pc-left-cell" style="flex:1">
          <div class="pc-cell-lbl">📌 Önemli Noktalar</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${keyObs.map(o =>
              `<div style="font-size:.72rem;color:var(--ink);line-height:1.4;display:flex;gap:4px">
                <span style="flex-shrink:0">•</span>${o}
              </div>`
            ).join('')}
          </div>
        </div>

      </div><!-- /pc-left -->

      <!-- SAĞ SÜTUN -->
      <div class="pc-right">

        <div class="pc-right-cell">
          <div class="pc-cell-lbl">💬 Sevdiği Alıntı</div>
          <div class="pc-quote">${common.quote}</div>
        </div>

        <div class="pc-right-cell">
          <div class="pc-cell-lbl">📖 Arka Plan</div>
          <div class="pc-cell-val">${common.background}</div>
        </div>

        <div class="pc-right-cell">
          <div class="pc-cell-lbl">🎯 Hedefler & Davranışlar</div>
          <div class="pc-cell-val">
            <strong>Hedef:</strong> ${envData.goal}<br>
            <strong>Profil:</strong> ${persona.tagline}
          </div>
          <div style="margin-top:8px">
            ${metrics.map(m => `
              <div class="pc-metric-mini" title="${m.lbl}">
                <span style="font-size:.68rem;width:72px;flex-shrink:0;color:var(--ink-lt)">${m.lbl}</span>
                <div class="pc-mini-bar">
                  <div class="pc-mini-fill" data-w="${m.val}" style="width:0%;background:${m.fill}"></div>
                </div>
                <span class="pc-mini-val">${m.val}%</span>
              </div>`).join('')}
          </div>
        </div>

        <div class="pc-bottom-split">
          <div class="pc-split-cell">
            <div class="pc-cell-lbl">💡 Motivasyon</div>
            <div class="pc-cell-val">${envData.motivation}</div>
          </div>
          <div class="pc-split-cell">
            <div class="pc-cell-lbl">🫶 İhtiyaçlar</div>
            <div class="pc-cell-val">${envData.need}</div>
          </div>
        </div>

      </div><!-- /pc-right -->
    </div><!-- /pc-body -->
  </div><!-- /pc-grid -->

  <!-- ANALİZ -->
  <div class="analysis-section">
    <div class="analysis-title">
      📈 ${isReal ? 'Gerçek Hayat' : 'Dijital Hayat'} Analizi
    </div>
    <div class="analysis-row">
      ${metrics.map(m => `
        <div class="analysis-chip">
          <div class="ach-lbl">${m.lbl}</div>
          <div style="display:flex;align-items:center;gap:6px">
            <div style="flex:1;height:6px;background:var(--paper2);border-radius:3px;overflow:hidden">
              <div style="width:${m.val}%;height:100%;border-radius:3px;background:${m.fill}"></div>
            </div>
            <span style="font-family:'Caveat',cursive;font-size:.85rem;font-weight:800;color:var(--ink-mid)">${m.val}%</span>
          </div>
        </div>`).join('')}
    </div>
    <div class="insight-box">💡 ${insightText}</div>
  </div>
  `;
}

/* ══════════════════════════════════════════════
   TAB GEÇİŞİ
══════════════════════════════════════════════ */
function switchPTab(type) {
  document.getElementById('tab-real').classList.toggle('active', type === 'real');
  document.getElementById('tab-dig' ).classList.toggle('active', type === 'digital');
  document.getElementById('panel-real').classList.toggle('active', type === 'real');
  document.getElementById('panel-dig' ).classList.toggle('active', type === 'digital');

  setTimeout(() => {
    document.querySelectorAll('.pc-mini-fill[data-w]').forEach(el => {
      el.style.width = '0%';
      setTimeout(() => { el.style.width = el.dataset.w + '%'; }, 60);
    });
  }, 40);
}

/* ══════════════════════════════════════════════
   SONUÇLAR
══════════════════════════════════════════════ */
function buildResults() {
  // Modalı kapat
  document.getElementById('persona-results-overlay').style.display = 'none';
  
  const d = window._SD;
  if (!d) return;

  const { sc, insightText } = d;
  const C  = 2 * Math.PI * 36;
  const Ci = 2 * Math.PI * 22;
  const dA = (p, circ) => {
    const f = (p / 100) * circ;
    return f.toFixed(2) + ' ' + (circ - f).toFixed(2);
  };

  const charts = [
    { lbl:'Sosyal Kaygı',    icon:'🔒', real:sc.b1r, dig:sc.b1d },
    { lbl:'Sosyal Bağlılık', icon:'🔗', real:sc.b2r, dig:sc.b2d },
    { lbl:'Benlik Sunumu',   icon:'🪞', real:sc.b3r, dig:sc.b3d },
  ];

  const chartsH = charts.map(ch => `
    <div class="chart-item">
      <div class="donut-wrap">
        <svg viewBox="0 0 84 84">
          <circle cx="42" cy="42" r="36" fill="none" stroke="#E8E0F4" stroke-width="8"/>
          <circle cx="42" cy="42" r="22" fill="none" stroke="#E8E0F4" stroke-width="8"/>
          <circle cx="42" cy="42" r="36" fill="none" stroke="#3DAB8C" stroke-width="8"
            stroke-linecap="round" stroke-dasharray="0 ${C.toFixed(2)}"
            class="arc-a" data-t="${dA(ch.real, C)}"
            style="transition:stroke-dasharray 1.3s cubic-bezier(0.23,1,0.32,1)"/>
          <circle cx="42" cy="42" r="22" fill="none" stroke="#8B68D4" stroke-width="8"
            stroke-linecap="round" stroke-dasharray="0 ${Ci.toFixed(2)}"
            class="arc-a" data-t="${dA(ch.dig, Ci)}"
            style="transition:stroke-dasharray 1.3s cubic-bezier(0.23,1,0.32,1) .2s"/>
        </svg>
        <div class="donut-center">
          <div class="dc-icon">${ch.icon}</div>
          <div class="dc-real">🌿 ${ch.real}%</div>
          <div class="dc-dig">📡 ${ch.dig}%</div>
        </div>
      </div>
      <div class="chart-lbl">${ch.lbl}</div>
    </div>`).join('');

  const platforms = Array.isArray(PQA.pqd4) ? PQA.pqd4.join(', ') : '—';

  document.getElementById('rh-xp').textContent = '⭐ ' + totalXP + ' XP kazandın!';
  document.getElementById('results-body').innerHTML = `
    <div class="charts-card">
      <div class="charts-ttl">📊 Gerçek vs Dijital Karşılaştırma</div>
      <div class="charts-sub">Dış halka = 🌿 Gerçek Hayat &nbsp;·&nbsp; İç halka = 📡 Dijital Hayat</div>
      <div class="charts-grid">${chartsH}</div>
      <div class="charts-legend">
        <div class="leg-item"><div class="leg-dot" style="background:#3DAB8C"></div>🌿 Gerçek Hayat (dış)</div>
        <div class="leg-item"><div class="leg-dot" style="background:#8B68D4"></div>📡 Dijital Hayat (iç)</div>
      </div>
    </div>

    <div class="insight-card">
      <div class="ic-title">💡 Kişisel Değerlendirme</div>
      <div class="ic-text">${insightText}</div>
    </div>

    <div class="demo-card">
      <div class="demo-title">👤 Profil Bilgilerin</div>
      <div class="demo-grid">
        <div class="demo-item">🎂 Yaş: <strong>${PQA.pqz1 || '—'}</strong></div>
        <div class="demo-item">⚧ Cinsiyet: <strong>${PQA.pqz2 || '—'}</strong></div>
        <div class="demo-item" style="grid-column:1/-1">📱 Platformlar: <strong>${platforms}</strong></div>
      </div>
    </div>

    <div class="results-cta">
      <button class="btn-r btn-restart" onclick="restartAll()">🔄 Yeniden Başla</button>
      <button class="btn-r btn-dl"      onclick="printResults()">🖨️ Analizi Yazdır</button>
    </div>

    <div style="text-align:center;font-size:.7rem;color:var(--ink-lt);margin-top:8px;line-height:1.6">
      Katılımın için teşekkürler, ${userName}! 🌸<br>
      Bu veriler araştırma amacıyla kullanılmaktadır.
    </div>
  `;

  showScreen('s-results');
  setTimeout(() => {
    document.querySelectorAll('.arc-a').forEach(a => a.setAttribute('stroke-dasharray', a.dataset.t));
  }, 200);
  spawnConfetti('#FFBCCB');
  setTimeout(() => spawnConfetti('#C9B5F0'), 350);
  setTimeout(() => spawnConfetti('#90D0B0'), 700);
}

/* ══════════════════════════════════════════════
   RESTART
══════════════════════════════════════════════ */
function restartAll() {
  if (!confirm('Tüm yanıtlar sıfırlanacak?')) return;
  Object.keys(A).forEach(k => delete A[k]);
  Object.keys(PQA).forEach(k => delete PQA[k]);
  totalXP = 0; curQ = 0; curPQ = 0; window._SD = null;
  flatQs = [];
  document.getElementById('ni-real').value = '';
  document.getElementById('ni-nick').value = '';
  showScreen('s-splash');
}

/* ══════════════════════════════════════════════
   PRINT PERSONA CARD
══════════════════════════════════════════════ */
function printPersona() {
  if (!checkPrintPermission()) return;
  window._printMode = 'persona';
  window.print();
}

/* ══════════════════════════════════════════════
   PRINT RESULTS
══════════════════════════════════════════════ */
function printResults() {
  if (!checkPrintPermission()) return;
  window._printMode = 'results';
  window.print();
}

/* Print event listeners */
window.addEventListener('beforeprint', () => {
  const personaScreen = document.getElementById('s-persona');
  const resultsScreen = document.getElementById('s-results');
  
  if (window._printMode === 'persona') {
    resultsScreen.style.display = 'none';
  } else if (window._printMode === 'results') {
    personaScreen.style.display = 'none';
  }
});

window.addEventListener('afterprint', () => {
  document.getElementById('s-persona').style.display = '';
  document.getElementById('s-results').style.display = '';
});

/* ══════════════════════════════════════════════
   YAZDIRMA HAKKI KONTROL
══════════════════════════════════════════════ */
const MAX_XP = 480; // Maksimum XP (48 soru * 10)
const XP_PER_PRINT = 160; // 3 yazdırma hakkı

function getPrintCredits() {
  return Math.floor(totalXP / XP_PER_PRINT);
}

function checkPrintPermission() {
  if (getPrintCredits() > 0) {
    return true;
  } else {
    const needed = XP_PER_PRINT - totalXP;
    showToast(`⚠️ Yazdırma için ${needed} XP daha gerekli (${totalXP}/${XP_PER_PRINT} XP)`);
    return false;
  }
}

/* ══════════════════════════════════════════════
   YARDIMCI FONKSİYONLAR
══════════════════════════════════════════════ */
function spawnConfetti(color) {
  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-el';
    el.style.cssText = `left:${Math.random()*100}vw;top:-10px;background:${color};`
      + `width:${Math.random()*10+5}px;height:${Math.random()*10+5}px;`
      + `border-radius:${Math.random()>.5?'50%':'3px'};`
      + `animation-duration:${Math.random()*2+1.5}s;animation-delay:${Math.random()*.6}s;`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

function spawnXP(el) {
  const r = el.getBoundingClientRect();
  const f = document.createElement('div');
  f.className = 'xp-float';
  f.textContent = '+10 XP';
  f.style.cssText = `left:${r.left + r.width/2 - 24}px;top:${r.top - 8}px;`;
  document.body.appendChild(f);
  setTimeout(() => f.remove(), 1100);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), 2500);
}
