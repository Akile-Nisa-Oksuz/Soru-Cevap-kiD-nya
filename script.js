/* ==============================================
   SORU HAVUZLARI – 6 havuz, her birinde 10 soru
   b1=Sosyal Kaygı  b2=Bağlılık  b3=Benlik
   _real = Gerçek Hayat   _dig = Dijital Hayat
============================================== */

const POOL = {
  b1_real: [
    {id:'b1r1', text:'Başkalarının benim hakkımda ne düşündüğünden endişelenirim.',          rev:false},
    {id:'b1r2', text:'Yeni insanlarla tanıştığımda tedirgin olurum.',                        rev:false},
    {id:'b1r3', text:'Bir grup insanla birlikteyken çekinik ya da sessiz kalırım.',          rev:false},
    {id:'b1r4', text:'Eleştirilmekten ya da yanlış anlaşılmaktan korkarım.',                 rev:false},
    {id:'b1r5', text:'Kendimi rahatça ifade edebildiğimi hissederim.',                       rev:true},
    {id:'b1r6', text:'Görünüşümle ilgili başkalarının ne düşündüğünü kafama takarım.',       rev:false},
    {id:'b1r7', text:'Fotoğraf çekilmek beni rahatsız eder.',                                rev:false},
    {id:'b1r8', text:'Görünüşümden dolayı insanların beni olumsuz değerlendireceğinden korkarım.', rev:false},
    {id:'b1r9', text:'Topluluk önünde konuşmak beni kaygılandırır.',                         rev:false},
    {id:'b1r10',text:'Sosyal ortamlarda kendimi geri planda tutarım.',                       rev:false},
  ],

  b1_dig: [
    {id:'b1d1', text:'Çevrimiçi ortamda başkalarının benim hakkımda ne düşündüğünden endişelenirim.', rev:false},
    {id:'b1d2', text:'Çevrimiçi yeni insanlarla iletişime geçmek beni tedirgin eder.',       rev:false},
    {id:'b1d3', text:'Çevrimiçi grup sohbetlerinde çekinik ya da sessiz kalırım.',           rev:false},
    {id:'b1d4', text:'Sosyal medyada eleştirilmekten ya da yanlış anlaşılmaktan korkarım.',  rev:false},
    {id:'b1d5', text:'Dijital ortamda kendimi rahatça ifade edebildiğimi hissederim.',       rev:true},
    {id:'b1d6', text:'Profilim / fotoğraflarım hakkında başkalarının ne düşündüğünü kafama takarım.', rev:false},
    {id:'b1d7', text:'Fotoğraflarımın veya videolarımın paylaşılması beni rahatsız eder.',   rev:false},
    {id:'b1d8', text:'Dijital görünüşümden dolayı insanların beni olumsuz değerlendireceğinden korkarım.',rev:false},
    {id:'b1d9', text:'Sosyal medyada yorum yazmaktan çekinirim.',                            rev:false},
    {id:'b1d10',text:'Beğeni sayım az olduğunda kendimi yetersiz hissederim.',               rev:false},
  ],

  b2_real: [
    {id:'b2r1', text:'Kendimi çevremdeki insanlara ait hissediyorum.',                       rev:false},
    {id:'b2r2', text:'Önem verdiğim insanlarla gerçek anlamda bağlı hissediyorum.',          rev:false},
    {id:'b2r3', text:'Zor anlarda yanımda olan insanlar var.',                               rev:false},
    {id:'b2r4', text:'Çevremdeki insanlarla anlamlı paylaşımlarım oluyor.',                  rev:false},
    {id:'b2r5', text:'Kendimi yalnız ve kopuk hissediyorum.',                                rev:true},
    {id:'b2r6', text:'Çevremdeki insanlar beni gerçekten tanıyor.',                          rev:false},
    {id:'b2r7', text:'Kendimi bir grubun ya da topluluğun parçası olarak hissediyorum.',     rev:false},
    {id:'b2r8', text:'İnsanlarla kurduğum ilişkiler yüzeysel kalıyor.',                      rev:true},
    {id:'b2r9', text:'Arkadaşlarımla vakit geçirmek bana iyi geliyor.',                      rev:false},
    {id:'b2r10',text:'Sosyal çevrem zor anlarda beni destekler.',                            rev:false},
  ],

  b2_dig: [
    {id:'b2d1', text:'Çevrimiçi topluluklarda kendimi ait hissediyorum.',                    rev:false},
    {id:'b2d2', text:'Dijital ortamda iletişim kurduğum insanlarla gerçekten bağlı hissediyorum.', rev:false},
    {id:'b2d3', text:'Zor anlarda çevrimiçi destek bulurum.',                                rev:false},
    {id:'b2d4', text:'Sosyal medyada anlamlı paylaşımlar yapıyorum.',                        rev:false},
    {id:'b2d5', text:'Sosyal medyayı aktif kullansam da yalnız ve kopuk hissediyorum.',      rev:true},
    {id:'b2d6', text:'Çevrimiçi bağlantılarım beni gerçekten tanıyor.',                      rev:false},
    {id:'b2d7', text:'Kendimi bir dijital topluluğun parçası olarak hissediyorum.',          rev:false},
    {id:'b2d8', text:'Çevrimiçi ilişkilerim yüzeysel kalıyor.',                              rev:true},
    {id:'b2d9', text:'DM / mesaj yoluyla kurulan ilişkiler bana anlamlı geliyor.',           rev:false},
    {id:'b2d10',text:'Çevrimiçi arkadaşlarımın desteğini hissediyorum.',                     rev:false},
  ],

  b3_real: [
    {id:'b3r1', text:'Gerçek beni olduğum gibi yansıtabiliyorum.',                           rev:false},
    {id:'b3r2', text:'Kendimi samimi ve otantik biçimde ifade edebiliyorum.',                rev:false},
    {id:'b3r3', text:"Başkalarının beklentilerine göre farklı bir 'ben' canlandırıyorum.",   rev:true},
    {id:'b3r4', text:'Kendimi olduğumdan farklı göstermem gerektiğini hissediyorum.',        rev:true},
    {id:'b3r5', text:'İçimdeki ben ile dışarıya yansıttığım ben tutarlı.',                   rev:false},
    {id:'b3r6', text:'İnsanlarla iletişim kurmak bana kolay geliyor.',                       rev:false},
    {id:'b3r7', text:'Beğenilmek ya da onay almak için davranışlarımı değiştiriyorum.',      rev:true},
    {id:'b3r8', text:'Kendimi özgürce ve baskısız biçimde ifade edebiliyorum.',              rev:false},
    {id:'b3r9', text:'Farklı sosyal gruplarda kendimi farklı gösteririm.',                   rev:true},
    {id:'b3r10',text:'Duygularımı insanlarla açıkça paylaşabilirim.',                        rev:false},
  ],

  b3_dig: [
    {id:'b3d1', text:'Sosyal medyada gerçek beni yansıtabiliyorum.',                         rev:false},
    {id:'b3d2', text:'Çevrimiçi ortamda kendimi samimi biçimde ifade edebiliyorum.',         rev:false},
    {id:'b3d3', text:"Sosyal medyada başkalarının beklentilerine göre farklı bir 'ben' canlandırıyorum.", rev:true},
    {id:'b3d4', text:'Sosyal medyada olduğumdan farklı görünmem gerektiğini hissediyorum.',  rev:true},
    {id:'b3d5', text:'Sosyal medya profilim gerçek benliğimle tutarlı.',                     rev:false},
    {id:'b3d6', text:'Çevrimiçi insanlarla iletişim kurmak bana kolay geliyor.',             rev:false},
    {id:'b3d7', text:'Beğeni veya onay almak için sosyal medyadaki içeriklerimi değiştiriyorum.', rev:true},
    {id:'b3d8', text:'Sosyal medyada kendimi özgürce ve baskısız biçimde ifade edebiliyorum.', rev:false},
    {id:'b3d9', text:'Farklı platformlarda farklı bir kimlik sergilerim.',                   rev:true},
    {id:'b3d10',text:'Duygularımı sosyal medyada açıkça paylaşabilirim.',                    rev:false},
  ],
};

/* -- Seçim sayıları – toplam = 25 -- */
const PICKS = { b1r:4, b1d:4, b2r:4, b2d:4, b3r:5, b3d:4 }; // 4+4+4+4+5+4 = 25

/* -- Section meta -- */
const SEC_META = {
  b1: { name:'😰 Sosyal Kaygı',  emoji:'😰', src:'LSAS (Liebowitz,1987)',
        color:{a:'#E8547A',lt:'#FFE0E8',md:'#FFBCCB',dk:'#C03060',fill:'linear-gradient(90deg,#FFBCCB,#E8547A)'} },
  b2: { name:'🤝 Sosyal Bağlılık',emoji:'🤝', src:'SBÖ (Duru,2007)',
        color:{a:'#8B68D4',lt:'#EDE8FF',md:'#C9B5F0',dk:'#6845B8',fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)'} },
  b3: { name:'🎭 Benlik Sunumu',  emoji:'🎭', src:'İBSÖ (Dalkılıç,2025)',
        color:{a:'#3DAB8C',lt:'#E0F5EC',md:'#90D0B0',dk:'#2A8068',fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)'} },
};

/* ==============================================
   PERSONA SORULARI – GERÇEK & DİJİTAL AYRI
   Her ortam için 8 soru; 3 ortak + 5 ortama özel
====================================== */

/* Ortak sorular (her iki karta da gider) */
const PQ_COMMON = [
  { id:'pqc1', type:'text',
    label:'Seni en çok tanımlayan bir cümle ya da alıntı nedir?',
    hint:'Bir söz, şarkı sözü veya kendi cümlenden olabilir.',
    placeholder:'"Kendim olmak en cesur eylem."' },

  { id:'pqc2', type:'textarea',
    label:'Kendini kısaca tanıt – kim olduğunu anlat.',
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
    opts:['Kadın','Erkek','Non-binary','Belirtmek istemiyorum'] },
];

/* Tüm persona soruları sırası: Ortak(3) – Gerçek(5) – Dijital(5) – Demo(2) = 15 soru */
const ALL_PQ = [...PQ_COMMON, ...PQ_REAL, ...PQ_DIG, ...PQ_DEMO];

/* ==============================================
   PERSONA TİPLERİ
====================================== */
const PERSONA_TYPES = {
  real: [
    { range:[0,45],   name:'Sessiz Gözlemci',   emoji:'🦉',
      tagline:'Derinlemesine düşünen, sözcüklerini dikkatle seçen; gerçek bağlar kurduğunda son derece sadık ve güçlü.' },
    { range:[46,65],  name:'Dengeli Yolcu',      emoji:'⚖️',
      tagline:'Sosyal durumları hem içgüdüsel hem düşünceli değerlendirirsin. Esnek, uyumlu ve güvenilir bir sosyal profil.' },
    { range:[66,100], name:'Açık Kalp',          emoji:'🦁',
      tagline:'Gerçek hayatta tam anlamıyla kendinsin. Otantikliğin ve bağlılık gücün çevrendeki insanlara ilham veriyor.' },
  ],
  digital: [
    { range:[0,45],   name:'Dijital Gölge',      emoji:'🥷',
      tagline:'Çevrimiçi ortamda tedirgin ve çekimsersin. Dijital dünya seni zorlasa da bu tamamen normaldir.' },
    { range:[46,65],  name:'Seçici Paylaşımcı',   emoji:'🕵️',
      tagline:'Sosyal medyada ne paylaşacağını özenle seçiyorsun. Dijital kimliğini bilinçli şekillendiriyorsun.' },
    { range:[66,100], name:'Dijital Özgün',        emoji:'🚀',
      tagline:'Çevrimiçi ortamda kendinle barışık, özgün ve bağlanabilen birisin. Dijital ve gerçek benliğin uyumlu.' },
  ],
};

function getPersonaType(pct100, env) {
  return PERSONA_TYPES[env].find(p => pct100 >= p.range[0] && pct100 <= p.range[1]) || PERSONA_TYPES[env][1];
}

/* ==============================================
   STATE
====================================== */
const A   = {};   // anket cevapları   { questionId: 1-5 }
const PQA = {};   // persona q cevapları { questionId: değer }
let userName = '';
let totalXP  = 0;
let flatQs   = []; // oturum soruları (25 adet)
let curQ     = 0;
let curPQ    = 0;
let popCB    = null;


/* ==============================================
   FISHER-YATES SHUFFLE + SEÇİM
====================================== */
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
    b2_dig:  shuffle(POOL.b2_dig).slice(0, PICKS.b2d),
    b3_real: shuffle(POOL.b3_real).slice(0, PICKS.b3r),
    b3_dig:  shuffle(POOL.b3_dig).slice(0, PICKS.b3d),
  };

  /* Oturum soru dizisi: B1Real – B1Dig – B2Real – B2Dig – B3Real – B3Dig */
  const order = [
    { qs: picked.b1_real, secId:'b1', envType:'real' },
    { qs: picked.b1_dig, secId:'b1', envType:'digital' },
    { qs: picked.b2_real, secId:'b2', envType:'real' },
    { qs: picked.b2_dig, secId:'b2', envType:'digital' },
    { qs: picked.b3_real, secId:'b3', envType:'real' },
    { qs: picked.b3_dig, secId:'b3', envType:'digital' },
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
        envLabel: envType === 'real' ? '🌿 Gerçek Hayat' : '📱 Dijital Hayat',
      });
    });
  });

  flatQs.forEach((q, i) => {
    const next = flatQs[i + 1];
    q.isLastOfGroup = !next || next.secId !== q.secId || next.envType !== q.envType;
    q.isLastOfSec   = !next || next.secId !== q.secId;
  });

  return flatQs;
}

/* ==============================================
   EKRAN YÖNETİMİ
====================================== */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function confirmBack() {
  if (confirm('Ana menüye dönmek istiyor musun?')) showScreen('s-splash');
}

/* ==============================================
   BAŞLAT
====================================== */
function startSurvey() {
  userName = document.getElementById('ni').value.trim() || 'Katılımcı';
  buildSession();
  curQ = 0;
  renderQ();
  showScreen('s-question');
}

/* ==============================================
   SORU RENDER
====================================== */
function renderQ() {
  if (curQ >= flatQs.length) { goPersonaQ(); return; }

  const qd = flatQs[curQ];
  const c = qd.secMeta.color;
  const isReal = qd.envType === 'real';
  const envColor = isReal ? '#3DAB8C' : '#8B68D4';
  const envBg = isReal ? '#E0F5EC' : '#EDE8FF';
  const envBdr = isReal ? '#90D0B0' : '#C9B5F0';

  const total = flatQs.length;
  const pct = Math.round((curQ / total) * 100);

  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-fill').style.background = c.fill;
  document.getElementById('tb-sec').textContent = qd.secMeta.name + ' — ' + qd.envLabel;
  document.getElementById('tb-cnt').textContent = (curQ + 1) + ' / ' + total;
  document.getElementById('btn-back').disabled = (curQ === 0);
  document.getElementById('btn-next').disabled = (A[qd.id] === undefined);

  const groupQs = flatQs.filter(q => q.secId === qd.secId && q.envType === qd.envType);
  document.getElementById('s-dots').innerHTML = groupQs.map(q => {
    let cls = A[q.id] !== undefined ? 'done' : 'future';
    if (q.id === qd.id) cls = 'curr';
    return '<div class="s-dot ' + cls + '"></div>';
  }).join('');

  document.getElementById('q-body').innerHTML = `
    <div class="q-env-tag slide-in" style="color:${envColor};border-color:${envBdr};background:${envBg}">
      ${qd.envLabel} — ${qd.secMeta.name}
    </div>
    <div class="q-card slide-in">
      <div class="q-num-badge" style="color:${c.a};border-color:${c.md};background:${c.lt}">
        ${qd.no}
        ${qd.rev ? '<span style="font-size:.62rem;background:#FFE0E8;color:#C03060;border:1px solid #FFBCCB;border-radius:4px;padding:1px 5px;margin-left:4px">Ters</span>' : ''}
      </div>
      <div class="q-text-main">"${qd.text}"</div>
      <div class="likert-row">
        ${[
          {v:1,t:'Kesinlikle<br>Katılmıyorum'},
          {v:2,t:'Katıl-<br>mıyorum'},
          {v:3,t:'Kararsı-<br>zım'},
          {v:4,t:'Katılı-<br>yorum'},
          {v:5,t:'Kesinlikle<br>Katılıyorum'}
        ].map(o => `
          <button class="lk-btn ${A[qd.id] === o.v ? 'sel-'+o.v+' selected' : ''}"
                  onclick="pickLikert('${qd.id}',${o.v},this)">
            <span class="lk-num">${o.v}</span>
            <span class="lk-text">${o.t}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="auto-hint">⚡ Seçim yapınca otomatik ilerler</div>
  `;
}

function pickLikert(qid, val, btn) {
  const fresh = A[qid] === undefined;
  A[qid] = val;
  if (fresh) { totalXP += 10; spawnXP(btn); }

  btn.closest('.likert-row').querySelectorAll('.lk-btn').forEach(b => b.className = 'lk-btn');
  btn.classList.add('sel-' + val, 'selected');
  document.getElementById('btn-next').disabled = false;

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

function showPopup(qd, isSec, cb) {
  popCB = cb;
  const c = qd.secMeta.color;
  const nextQ = flatQs[curQ + 1];
  const nextMeta = nextQ ? SEC_META[nextQ.secId] : null;
  const isReal = qd.envType === 'real';
  const p = document.getElementById('sc-popup');

  if (isSec) {
    p.innerHTML = `
      <div class="scp-emoji">🎉</div>
      <div class="scp-title" style="color:${c.a}">${qd.secMeta.name} Tamamlandı!</div>
      <div class="scp-sub">${nextMeta ? 'Sırada: <strong>' + nextMeta.name + '</strong>' : 'Son bölümdeydin!'}<br><br>💎 ${totalXP} XP kazandın!</div>
      <button class="scp-btn" style="background:linear-gradient(135deg,${nextMeta ? nextMeta.color.a : c.a},${nextMeta ? nextMeta.color.md : c.md})" onclick="closePopup()">
        ${nextMeta ? '▶️ ' + nextMeta.name + ' →' : '🎟️ Kişi Kartına Geç →'}
      </button>`;
  } else {
    p.innerHTML = `
      <div class="scp-emoji">${isReal ? '📱' : '🌿'}</div>
      <div class="scp-title" style="color:${c.a}">${isReal ? 'Gerçek Hayat' : 'Dijital Hayat'} Tamamlandı!</div>
      <div class="scp-sub">${isReal ? 'Şimdi aynı konuyu <strong>dijital ortam</strong> için değerlendiriyoruz.' : 'Bu bölümün dijital kısmı bitti!'}</div>
      <button class="scp-btn" style="background:linear-gradient(135deg,${c.a},${c.md})" onclick="closePopup()">
        ${isReal ? '📱 Dijital Sorulara Geç →' : '➡️ Devam Et'}
      </button>`;
  }

  document.getElementById('sc-overlay').classList.add('show');
  spawnConfetti(c.a);
}

function closePopup() {
  document.getElementById('sc-overlay').classList.remove('show');
  if (popCB) { popCB(); popCB = null; }
}

function goPersonaQ() {
  curPQ = 0;
  showScreen('s-persona-q');
  renderPQ();
}

function renderPQ() {
  const total = ALL_PQ.length;
  if (curPQ >= total) { startLoading(); return; }

  const q = ALL_PQ[curPQ];

  document.getElementById('pq-prog').style.width = Math.round((curPQ / total) * 100) + '%';
  document.getElementById('pq-cnt').textContent = (curPQ + 1) + ' / ' + total;

  let groupLabel = '💡 Genel';
  if (PQ_COMMON.find(x => x.id === q.id)) groupLabel = '👤 Genel Bilgiler';
  else if (PQ_REAL.find(x => x.id === q.id)) groupLabel = '🌿 Gerçek Hayat Profili';
  else if (PQ_DIG.find(x => x.id === q.id)) groupLabel = '📱 Dijital Hayat Profili';
  else groupLabel = '📊 Demografik';

  const dotsH = ALL_PQ.map((_, i) => {
    let cls = PQA[ALL_PQ[i].id] !== undefined ? 'done' : 'future';
    if (i === curPQ) cls = 'curr';
    return '<div class="pq-dot ' + cls + '" onclick="jumpPQ(' + i + ')"></div>';
  }).join('');

  let inputHTML = '';
  const selVal = PQA[q.id];
  const selArr = Array.isArray(selVal) ? selVal : [];

  if (q.type === 'text') {
    inputHTML = `<input class="pq-input" id="pq-inp" type="text" placeholder="${q.placeholder || ''}" value="${selVal || ''}" oninput="PQA['${q.id}']=this.value">`;
  } else if (q.type === 'textarea') {
    inputHTML = `<textarea class="pq-textarea" id="pq-inp" placeholder="${q.placeholder || ''}" oninput="PQA['${q.id}']=this.value">${selVal || ''}</textarea>`;
  } else if (q.type === 'single') {
    inputHTML = `<div class="pq-opts">${q.opts.map(o => `<button class="pq-opt${selVal===o?' sel':''}" onclick="pickPQSingle('${q.id}','${o}',this)">${o}</button>`).join('')}</div>`;
  } else if (q.type === 'multi') {
    inputHTML = `<div class="pq-opts">${q.opts.map(o => `<button class="pq-opt${selArr.includes(o)?' sel-multi':''}" onclick="pickPQMulti('${q.id}','${o}',this)">${o}</button>`).join('')}</div>`;
  }

  document.getElementById('pq-body').innerHTML = `
    <div class="pq-hero">
      <div class="pq-hero-icon">🎨</div>
      <div>
        <h2>Kişi Kartın Oluşturuluyor</h2>
        <p>${groupLabel} — ${curPQ + 1} / ${total}</p>
      </div>
    </div>
    <div class="pq-progress-row">${dotsH}</div>
    <div class="pq-card">
      <div class="pq-label">${q.label}</div>
      ${q.hint ? '<div class="pq-hint">' + q.hint + '</div>' : ''}
      ${inputHTML}
    </div>
    <button class="btn-pq-next" onclick="advPQ()">${curPQ < total - 1 ? 'Devam Et →' : '🪄 Kartımı Oluştur!'}</button>
    <button class="btn-pq-skip" onclick="skipPQ()">Bu soruyu geç ⏭️</button>
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
  if (inp && inp.value) PQA[ALL_PQ[curPQ].id] = inp.value;
  curPQ++;
  renderPQ();
}

function skipPQ() { curPQ++; renderPQ(); }
function jumpPQ(i) { curPQ = i; renderPQ(); }

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

function scoreGroup(secId, envType) {
  const qs = flatQs.filter(q => q.secId === secId && q.envType === envType);
  const max = qs.length * 5;
  let raw = 0;
  qs.forEach(q => {
    let v = A[q.id] || 3;
    if (q.rev) v = 6 - v; // Ters çevrilmiş sorular için akademik hesaplama
    raw += v;
  });
  return max > 0 ? Math.round((raw / max) * 100) : 50;
}

function buildPersonaCard() {
  const sc = {
    b1r: scoreGroup('b1','real'),    b1d: scoreGroup('b1','digital'),
    b2r: scoreGroup('b2','real'),    b2d: scoreGroup('b2','digital'),
    b3r: scoreGroup('b3','real'),    b3d: scoreGroup('b3','digital'),
  };

  const realAvg = Math.round((sc.b1r + sc.b2r + sc.b3r) / 3);
  const digAvg  = Math.round((sc.b1d + sc.b2d + sc.b3d) / 3);

  const realP = getPersonaType(realAvg, 'real');
  const digP  = getPersonaType(digAvg,  'digital');

  const insights = [];
  const d1 = sc.b1d - sc.b1r, d2 = sc.b2d - sc.b2r, d3 = sc.b3d - sc.b3r;
  
  if (Math.abs(d1) > 8) insights.push(d1 > 0 ? 'Dijital ortamdaki sosyal kaygın gerçek hayatından <strong>belirgin şekilde daha yüksek</strong>.' : 'Gerçek hayattaki sosyal kaygın dijital ortamına göre <strong>daha fazla</strong>.');
  else insights.push('Sosyal kaygı düzeylerin gerçek ve dijital ortamda <strong>birbirine yakın</strong>.');
  
  if (Math.abs(d2) > 8) insights.push(d2 > 0 ? 'Dijital ortam sana daha güçlü bir <strong>aidiyet hissi</strong> veriyor.' : 'Gerçek hayattaki sosyal bağlılık hissin dijital ortamına göre <strong>çok daha güçlü</strong>.');
  
  if (Math.abs(d3) > 8) insights.push(d3 > 0 ? 'Dijital ortamda kendini <strong>daha özgür ve otantik</strong> ifade ediyorsun.' : 'Gerçek hayatta benlik sunumun dijital kimliğinden <strong>daha otantik</strong>.');
  
  const insightText = insights.join(' ');

  window._SD = { sc, realP, digP, insightText, realAvg, digAvg };

  const common = {
    quote:      PQA.pqc1 || '"Kendim olmak en cesur eylem."',
    background: PQA.pqc2 || 'Belirtilmedi.',
    skill_main: PQA.pqc3 || '—',
    age:        PQA.pqz1 || '—',
    gender:     PQA.pqz2 || '—',
  };

  const realData = {
    goal:       PQA.pqr1 || '—',
    motivation: PQA.pqr2 || '—',
    need:       PQA.pqr3 || '—',
    environments: Array.isArray(PQA.pqr4) ? PQA.pqr4 : [],
    conflict:   PQA.pqr5 || '—',
  };

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

  setTimeout(() => {
    panels.querySelectorAll('.pc-mini-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 200);

  showScreen('s-persona');
  spawnConfetti('#C9B5F0');
  setTimeout(() => spawnConfetti('#FFBCCB'), 300);
}

/* ==============================================
   EKSİK KALAN VE TAMAMLANAN UI FONKSİYONLARI
============================================== */

function makePersonaGrid(envType, persona, sc, common, envData, insightText) {
    const isReal = envType === 'real';
    const c = isReal ? { a:'#3DAB8C', lt:'#E0F5EC', md:'#90D0B0' } : { a:'#8B68D4', lt:'#EDE8FF', md:'#C9B5F0' };
    
    // Metrikler
    const m1 = isReal ? sc.b1r : sc.b1d; // Sosyal Kaygı
    const m2 = isReal ? sc.b2r : sc.b2d; // Sosyal Bağlılık
    const m3 = isReal ? sc.b3r : sc.b3d; // Benlik Sunumu

    return `
    <div class="pc-grid slide-in">
        <div class="pc-header" style="background:${c.lt}">
            <div class="pc-name-cell">
                <div class="pc-avatar" style="background:white; border-color:${c.md}; color:${c.a}; font-size:1.5rem; display:flex; align-items:center; justify-content:center; border-radius:50%; width:40px; height:40px; border:2px solid;">${persona.emoji}</div>
                <span style="margin-left:10px; font-weight:bold;">${userName}</span>
            </div>
            <div class="pc-type-cell" style="color:${c.a}; font-weight:bold;">
                ${isReal ? '🌿 Gerçek Dünya' : '📱 Dijital Dünya'}
            </div>
        </div>
        <div class="pc-body" style="padding:15px; display:flex; flex-direction:column; gap:15px;">
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                <div class="pc-left-cell" style="flex:1; min-width:120px;">
                    <div class="pc-cell-lbl" style="font-size:0.8rem; color:gray;">Persona Tipi</div>
                    <div class="pc-cell-val" style="font-weight:800; font-size:1.2rem; color:${c.a}">${persona.name}</div>
                </div>
                <div class="pc-left-cell" style="flex:1; min-width:120px;">
                    <div class="pc-cell-lbl" style="font-size:0.8rem; color:gray;">Demografik</div>
                    <div class="pc-cell-val" style="font-weight:bold;">${common.age} Yaş / ${common.gender}</div>
                </div>
            </div>
            
            <div class="pc-right-cell" style="background:#f9f9f9; padding:10px; border-radius:8px; border-left:4px solid ${c.md}">
                <div class="pc-cell-lbl" style="font-size:0.8rem; color:gray; margin-bottom:5px;">Karakter Mottosu</div>
                <div class="pc-quote" style="font-style:italic;">${common.quote}</div>
            </div>

            <div class="pc-right-cell">
                <div class="pc-cell-lbl" style="font-size:0.8rem; color:gray; margin-bottom:8px;">Metrik Analizi</div>
                <div class="pc-metric-mini" style="display:flex; align-items:center; margin-bottom:5px;">
                    <div class="pc-mini-val" style="width:75px; font-size:0.85rem;">Kaygı:</div>
                    <div class="pc-mini-bar" style="flex:1; height:8px; background:#eee; border-radius:4px; overflow:hidden;"><div class="pc-mini-fill" style="width:${m1}%; height:100%; background:#E8547A; transition:width 1s;"></div></div>
                    <div style="width:35px; text-align:right; font-size:0.8rem; font-weight:bold;">%${m1}</div>
                </div>
                <div class="pc-metric-mini" style="display:flex; align-items:center; margin-bottom:5px;">
                    <div class="pc-mini-val" style="width:75px; font-size:0.85rem;">Bağlılık:</div>
                    <div class="pc-mini-bar" style="flex:1; height:8px; background:#eee; border-radius:4px; overflow:hidden;"><div class="pc-mini-fill" style="width:${m2}%; height:100%; background:#8B68D4; transition:width 1s;"></div></div>
                    <div style="width:35px; text-align:right; font-size:0.8rem; font-weight:bold;">%${m2}</div>
                </div>
                <div class="pc-metric-mini" style="display:flex; align-items:center; margin-bottom:5px;">
                    <div class="pc-mini-val" style="width:75px; font-size:0.85rem;">Otantiklik:</div>
                    <div class="pc-mini-bar" style="flex:1; height:8px; background:#eee; border-radius:4px; overflow:hidden;"><div class="pc-mini-fill" style="width:${m3}%; height:100%; background:#3DAB8C; transition:width 1s;"></div></div>
                    <div style="width:35px; text-align:right; font-size:0.8rem; font-weight:bold;">%${m3}</div>
                </div>
            </div>
        </div>
        <div class="pc-bottom-split" style="display:flex; border-top:1px solid #eee; background:${c.lt}40; border-radius:0 0 8px 8px;">
            <div class="pc-split-cell" style="flex:1; padding:10px; border-right:1px solid #eee;">
                <div class="pc-cell-lbl" style="font-size:0.75rem; color:gray;">Motivasyon</div>
                <div class="pc-cell-val" style="font-size:0.9rem; font-weight:bold;">${envData.motivation}</div>
            </div>
            <div class="pc-split-cell" style="flex:1; padding:10px;">
                <div class="pc-cell-lbl" style="font-size:0.75rem; color:gray;">Temel İhtiyaç</div>
                <div class="pc-cell-val" style="font-size:0.9rem; font-weight:bold;">${envData.need}</div>
            </div>
        </div>
    </div>
    <div class="analysis-section" style="margin-top:20px; background:#fff; padding:15px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.05); border:1px solid #eee;">
        <div class="analysis-title" style="font-weight:bold; color:#333; margin-bottom:8px;">🔍 İlişkisel Boşluk Analizi</div>
        <div class="insight-box" style="font-size:0.95rem; line-height:1.5; color:#555;">${insightText}</div>
    </div>
    `;
}

function switchPTab(type) {
  document.getElementById('tab-real').classList.toggle('active', type === 'real');
  document.getElementById('tab-dig').classList.toggle('active', type === 'digital');
  document.getElementById('panel-real').classList.toggle('active', type === 'real');
  document.getElementById('panel-dig').classList.toggle('active', type === 'digital');

  setTimeout(() => {
    document.querySelectorAll('.pc-mini-fill').forEach(el => {
      const targetW = el.style.width;
      el.style.width = '0%';
      setTimeout(() => { el.style.width = targetW; }, 60);
    });
  }, 40);
}

function buildResults() {
  if (!window._SD) {
    showToast('Persona kartı verisi eksik; hesaplama yeniden yapılıyor...');
    buildPersonaCard();
  }

  const d = window._SD;
  if (!d) {
    showToast('Analiz verisi bulunamadı. Lütfen tekrar başlatın.');
    return;
  }

  document.getElementById('rh-xp').textContent = '⭐ ' + totalXP + ' XP';

  function meter(label, value, color) {
    return `
      <div class="analysis-chip" style="border-color:${color};">
        <div class="ach-lbl">${label}</div>
        <div style="height:8px;background:#eee;border-radius:6px;overflow:hidden;margin-top:6px;">
          <div style="width:${value}%;height:100%;background:${color};transition:width 0.8s;"></div>
        </div>
        <div style="margin-top:4px;font-size:.75rem;color:#555;">%${value}</div>
      </div>
    `;
  }

  const donutParameters = (label, value, maxValue, color) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const filled = (value / maxValue) * circumference;
    return `
    <div class="chart-item">
      <div class="donut-wrap">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="${radius}" fill="none" stroke="#eee" stroke-width="12"></circle>
          <circle cx="60" cy="60" r="${radius}" fill="none" stroke="${color}" stroke-width="12"
            stroke-dasharray="${filled} ${circumference - filled}"
            stroke-dashoffset="${circumference * 0.25}"
            stroke-linecap="round"></circle>
        </svg>
        <div class="donut-center">
          <div class="dc-icon">${label}</div>
          <div class="dc-real">%${value}</div>
        </div>
      </div>
      <div class="chart-lbl">${label}</div>
    </div>`;
  };

  document.getElementById('results-body').innerHTML = `
    <div class="results-card">
      <h3>Detaylı Analiz</h3>
      <p><strong>Gerçek Persona:</strong> ${d.realP.name} (%${d.realAvg})</p>
      <p><strong>Dijital Persona:</strong> ${d.digP.name} (%${d.digAvg})</p>
      <p><strong>Fark:</strong> %${Math.abs(d.realAvg - d.digAvg)}</p>
      <p><strong>İçgörü:</strong> ${d.insightText || 'Veri mevcut, analiz detaylanıyor...'}</p>
      <div class="analysis-title" style="margin-top:14px;">📊 Kapsamlı Ölçüm Grafikleri</div>
      <div class="charts-card">
        <div class="charts-ttl">İç İçe Gerçek vs Dijital Donut Grafiği</div>
        <div class="charts-grid">
          ${donutParameters('Kaygı G', d.sc.b1r, 100, '#E8547A')}
          ${donutParameters('Kaygı D', d.sc.b1d, 100, '#C03060')}
          ${donutParameters('Bağlılık G', d.sc.b2r, 100, '#8B68D4')}
          ${donutParameters('Bağlılık D', d.sc.b2d, 100, '#6845B8')}
          ${donutParameters('Benlik G', d.sc.b3r, 100, '#3DAB8C')}
          ${donutParameters('Benlik D', d.sc.b3d, 100, '#2A8068')}
        </div>
      </div>
    </div>
  `;

  showScreen('s-results');
  const resultTitle = document.querySelector('.rh-title');
  if (resultTitle) resultTitle.textContent = "Test Tamamlandı, " + userName + "!";
}

function restartAll() {
  if (confirm('Tüm ilerlemen sıfırlanacak. Başa dönmek istediğine emin misin?')) {
    location.reload();
  }
}

function spawnConfetti(color) {
  for (let i = 0; i < 25; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-el';
    el.style.position = 'fixed';
    el.style.left = Math.random() * 100 + 'vw';
    el.style.top = '-10px';
    el.style.backgroundColor = color || '#8B68D4';
    el.style.width = (Math.random() * 8 + 5) + 'px';
    el.style.height = (Math.random() * 8 + 5) + 'px';
    el.style.opacity = Math.random() + 0.5;
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    el.style.zIndex = '9999';
    el.style.transition = `top ${Math.random() * 2 + 1.5}s ease-in, transform ${Math.random() * 2 + 1.5}s linear`;
    document.body.appendChild(el);
    
    setTimeout(() => {
      el.style.top = '100vh';
      el.style.transform = `rotate(${Math.random() * 720}deg)`;
    }, 50);

    setTimeout(() => el.remove(), 3500);
  }
}

function spawnXP(el) {
  const rect = el.getBoundingClientRect();
  const floating = document.createElement('div');
  floating.className = 'xp-float';
  floating.textContent = '+10 XP';
  floating.style.position = 'fixed';
  floating.style.left = (rect.left + rect.width / 2 - 20) + 'px';
  floating.style.top = rect.top + 'px';
  floating.style.color = '#FFA500';
  floating.style.fontWeight = 'bold';
  floating.style.zIndex = '1000';
  floating.style.transition = 'all 1s ease-out';
  floating.style.pointerEvents = 'none';
  document.body.appendChild(floating);
  
  setTimeout(() => {
    floating.style.top = (rect.top - 50) + 'px';
    floating.style.opacity = '0';
  }, 50);

  setTimeout(() => floating.remove(), 1050);
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '20px';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    toast.style.zIndex = '9999';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  setTimeout(() => toast.style.opacity = '0', 3000);
}