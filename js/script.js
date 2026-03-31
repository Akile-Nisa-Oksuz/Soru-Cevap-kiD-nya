/* ─── SURVEY DATA ─── */
const SECTIONS = [
  {id:'b1',name:'🔒 Sosyal Kaygı',emoji:'😰',src:'LSAS (Liebowitz,1987)',
   color:{a:'#E8547A',lt:'#FFE0E8',md:'#FFBCCB',dk:'#C03060',fill:'linear-gradient(90deg,#FFBCCB,#E8547A)'},
   envs:[
    {type:'real',label:'🌿 Gerçek Hayat',questions:[
      {id:'q2', no:'Q2', text:'Başkalarının benim hakkımda ne düşündüğünden endişelenirim.',rev:false},
      {id:'q3', no:'Q3', text:'Yeni insanlarla tanıştığımda tedirgin olurum.',rev:false},
      {id:'q4', no:'Q4', text:'Bir grup insanla birlikteyken çekinik ya da sessiz kalırım.',rev:false},
      {id:'q5', no:'Q5', text:'Eleştirilmekten ya da yanlış anlaşılmaktan korkarım.',rev:false},
      {id:'q6', no:'Q6', text:'Kendimi rahatça ifade edebildiğimi hissederim.',rev:true},
      {id:'q7', no:'Q7', text:'Görünüşümle ilgili başkalarının ne düşündüğünü kafama takarım.',rev:false},
      {id:'q8', no:'Q8', text:'Fotoğraf çekilmek beni rahatsız eder.',rev:false},
      {id:'q9', no:'Q9', text:'Görünüşümden dolayı insanların beni olumsuz değerlendireceğinden korkarım.',rev:false},
    ]},
    {type:'digital',label:'📡 Dijital Hayat',questions:[
      {id:'q10',no:'Q10',text:'Çevrimiçi ortamda başkalarının benim hakkımda ne düşündüğünden endişelenirim.',rev:false},
      {id:'q11',no:'Q11',text:'Çevrimiçi yeni insanlarla iletişime geçmek beni tedirgin eder.',rev:false},
      {id:'q12',no:'Q12',text:'Çevrimiçi grup sohbetlerinde çekinik ya da sessiz kalırım.',rev:false},
      {id:'q13',no:'Q13',text:'Sosyal medyada eleştirilmekten ya da yanlış anlaşılmaktan korkarım.',rev:false},
      {id:'q14',no:'Q14',text:'Dijital ortamda kendimi rahatça ifade edebildiğimi hissederim.',rev:true},
      {id:'q15',no:'Q15',text:'Profilim / fotoğraflarım hakkında başkalarının ne düşündüğünü kafama takarım.',rev:false},
      {id:'q16',no:'Q16',text:'Fotoğraflarımın veya videolarımın paylaşılması beni rahatsız eder.',rev:false},
      {id:'q17',no:'Q17',text:'Dijital görünüşümden dolayı insanların beni olumsuz değerlendireceğinden korkarım.',rev:false},
    ]},
  ]},
  {id:'b2',name:'🔗 Sosyal Bağlılık',emoji:'🤝',src:'SBÖ (Duru,2007)',
   color:{a:'#8B68D4',lt:'#EDE8FF',md:'#C9B5F0',dk:'#6845B8',fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)'},
   envs:[
    {type:'real',label:'🌿 Gerçek Hayat',questions:[
      {id:'q18',no:'Q18',text:'Kendimi çevremdeki insanlara ait hissediyorum.',rev:false},
      {id:'q19',no:'Q19',text:'Önem verdiğim insanlarla gerçek anlamda bağlı hissediyorum.',rev:false},
      {id:'q20',no:'Q20',text:'Zor anlarda yanımda olan insanlar var.',rev:false},
      {id:'q21',no:'Q21',text:'Çevremdeki insanlarla anlamlı paylaşımlarım oluyor.',rev:false},
      {id:'q22',no:'Q22',text:'Kendimi yalnız ve kopuk hissediyorum.',rev:true},
      {id:'q23',no:'Q23',text:'Çevremdeki insanlar beni gerçekten tanıyor.',rev:false},
      {id:'q24',no:'Q24',text:'Kendimi bir grubun ya da topluluğun parçası olarak hissediyorum.',rev:false},
      {id:'q25',no:'Q25',text:'İnsanlarla kurduğum ilişkiler yüzeysel kalıyor.',rev:true},
    ]},
    {type:'digital',label:'📡 Dijital Hayat',questions:[
      {id:'q26',no:'Q26',text:'Çevrimiçi topluluklarda kendimi ait hissediyorum.',rev:false},
      {id:'q27',no:'Q27',text:'Dijital ortamda iletişim kurduğum insanlarla gerçekten bağlı hissediyorum.',rev:false},
      {id:'q28',no:'Q28',text:'Zor anlarda çevrimiçi destek bulurum.',rev:false},
      {id:'q29',no:'Q29',text:'Sosyal medyada anlamlı paylaşımlar yapıyorum.',rev:false},
      {id:'q30',no:'Q30',text:'Sosyal medyayı aktif kullansam da yalnız ve kopuk hissediyorum.',rev:true},
      {id:'q31',no:'Q31',text:'Çevrimiçi bağlantılarım beni gerçekten tanıyor.',rev:false},
      {id:'q32',no:'Q32',text:'Kendimi bir dijital topluluğun parçası olarak hissediyorum.',rev:false},
      {id:'q33',no:'Q33',text:'Çevrimiçi ilişkilerim yüzeysel kalıyor.',rev:true},
    ]},
  ]},
  {id:'b3',name:'🪞 Benlik Sunumu',emoji:'🎭',src:'ÇBSÖ (Dalkılıç,2025)',
   color:{a:'#3DAB8C',lt:'#E0F5EC',md:'#90D0B0',dk:'#2A8068',fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)'},
   envs:[
    {type:'real',label:'🌿 Gerçek Hayat',questions:[
      {id:'q34',no:'Q34',text:'Gerçek beni olduğu gibi yansıtabiliyorum.',rev:false},
      {id:'q35',no:'Q35',text:'Kendimi samimi ve otantik biçimde ifade edebiliyorum.',rev:false},
      {id:'q36',no:'Q36',text:"Başkalarının beklentilerine göre farklı bir 'ben' canlandırıyorum.",rev:true},
      {id:'q37',no:'Q37',text:'Kendimi olduğumdan farklı göstermem gerektiğini hissediyorum.',rev:true},
      {id:'q38',no:'Q38',text:'İçimdeki ben ile dışarıya yansıttığım ben tutarlı.',rev:false},
      {id:'q39',no:'Q39',text:'İnsanlarla iletişim kurmak bana kolay geliyor.',rev:false},
      {id:'q40',no:'Q40',text:'Beğenilmek ya da onay almak için davranışlarımı değiştiriyorum.',rev:true},
      {id:'q41',no:'Q41',text:'Kendimi özgürce ve baskısız biçimde ifade edebiliyorum.',rev:false},
    ]},
    {type:'digital',label:'📡 Dijital Hayat',questions:[
      {id:'q42',no:'Q42',text:'Sosyal medyada gerçek beni yansıtabiliyorum.',rev:false},
      {id:'q43',no:'Q43',text:'Çevrimiçi ortamda kendimi samimi biçimde ifade edebiliyorum.',rev:false},
      {id:'q44',no:'Q44',text:"Sosyal medyada başkalarının beklentilerine göre farklı bir 'ben' canlandırıyorum.",rev:true},
      {id:'q45',no:'Q45',text:'Sosyal medyada olduğumdan farklı görünmem gerektiğini hissediyorum.',rev:true},
      {id:'q46',no:'Q46',text:'Sosyal medya profilim gerçek benliğimle tutarlı.',rev:false},
      {id:'q47',no:'Q47',text:'Çevrimiçi insanlarla iletişim kurmak bana kolay geliyor.',rev:false},
      {id:'q48',no:'Q48',text:'Beğeni veya onay almak için sosyal medyadaki içeriklerimi değiştiriyorum.',rev:true},
      {id:'q49',no:'Q49',text:'Sosyal medyada kendimi özgürce ve baskısız biçimde ifade edebiliyorum.',rev:false},
    ]},
  ]},
];

/* ─── PERSONA QUESTIONNAIRE ─── */
const PERSONA_QS = [
  {
    id:'pq1', type:'text',
    label:'Seni en çok tanımlayan bir cümle ya da alıntı nedir?',
    hint:'Bir söz, şarkı sözü veya kendi cümlenden olabilir.',
    placeholder:'"İnsan olmanın bedeli…"',
    mapTo:'quote',
  },
  {
    id:'pq2', type:'textarea',
    label:'Kendini kısaca tanıt — kim olduğunu anlat.',
    hint:'İlgi alanların, nelerden hoşlandığın, geçmişin hakkında birkaç cümle.',
    placeholder:'Örn: 3. sınıf psikoloji öğrencisiyim, müzik ve yazı işleriyle ilgileniyorum...',
    mapTo:'background',
  },
  {
    id:'pq3', type:'single',
    label:'Sosyal hayatta en güçlü yanın nedir?',
    hint:'Seni en iyi tanımlayan tek özelliği seç.',
    opts:['Empati & Anlayış','Derin Dinleme','Esprili İletişim','Çözüm Üretme','Güven Verme','Liderlik & Yönlendirme'],
    mapTo:'skill_main',
  },
  {
    id:'pq4', type:'multi',
    label:'Sosyal hayatta diğer güçlü yönlerin neler?',
    hint:'Birden fazla seçilebilir.',
    opts:['Merak & Araştırma','Sabır','Yaratıcılık','Uyum Sağlama','Dürüstlük','Sınır Koyma'],
    mapTo:'skills_extra',
  },
  {
    id:'pq5', type:'single',
    label:'Sosyal ortamlardaki temel hedefin nedir?',
    hint:'',
    opts:['Derin ve kalıcı bağlar kurmak','Kendimle barışık olmak','Güvenli bir topluluk bulmak','Özgürce kendimi ifade etmek','Fark yaratmak ve ilham vermek'],
    mapTo:'goal',
  },
  {
    id:'pq6', type:'single',
    label:'Seni en çok ne motive eder?',
    hint:'',
    opts:['Tanınma ve takdir','Anlam & Amaç hissi','Bağlantı & Aidiyet','Özerklik & Özgürlük','Başarı & Gelişim'],
    mapTo:'motivation',
  },
  {
    id:'pq7', type:'single',
    label:'Sosyal ortamlarda en çok neye ihtiyaç duyarsın?',
    hint:'',
    opts:['Kabul görmek','Anlaşılmak','Güven ortamı','Kişisel alan','Net sınırlar','Destek & Yardım'],
    mapTo:'need',
  },
  {
    id:'pq8', type:'multi',
    label:'Hangi sosyal platformları aktif kullanıyorsun?',
    hint:'Birden fazla seçilebilir.',
    opts:['Instagram','TikTok','Twitter/X','LinkedIn','Discord','YouTube','Diğer','Kullanmıyorum'],
    mapTo:'platforms',
  },
  {
    id:'pq9', type:'single',
    label:'Yaş aralığın nedir?',
    hint:'',
    opts:['17 ve altı','18–21','22–25','26–30','31 ve üzeri'],
    mapTo:'age',
  },
  {
    id:'pq10', type:'single',
    label:'Cinsiyetin',
    hint:'',
    opts:['Kadın','Erkek','Non-binary','Belirtmek istemiyorum'],
    mapTo:'gender',
  },
];

/* ─── PERSONA TYPES ─── */
const PERSONA_TYPES = {
  real:[
    {range:[0,45],   name:'Sessiz Gözlemci',  emoji:'🌙', tagline:'Derinlemesine düşünen, sözcüklerini dikkatle seçen; gerçek bağlar kurduğunda son derece sadık ve güçlü.'},
    {range:[46,65],  name:'Dengeli Yolcu',    emoji:'⚖️', tagline:'Sosyal durumları hem içgüdüsel hem düşünceli değerlendirirsin. Esnek, uyumlu ve güvenilir bir sosyal profil.'},
    {range:[66,100], name:'Açık Kalp',        emoji:'🌻', tagline:'Gerçek hayatta tam anlamıyla kendiniz. Otantikliğin ve bağlılık gücün çevrendeki insanlara ilham veriyor.'},
  ],
  digital:[
    {range:[0,45],   name:'Dijital Gölge',    emoji:'👤', tagline:'Çevrimiçi ortamda tedirgin ve çekimsersin. Dijital dünya seni zorlasa da bu tamamen normaldir.'},
    {range:[46,65],  name:'Seçici Paylaşımcı',emoji:'🎛️', tagline:'Sosyal medyada ne paylaşacağını özenle seçiyorsun. Dijital kimliğini bilinçli şekillendiriyorsun.'},
    {range:[66,100], name:'Dijital Özgün',    emoji:'✨', tagline:'Çevrimiçi ortamda kendinle barışık, özgün ve bağlanabilen birisin. Dijital ve gerçek benliğin uyumlu.'},
  ],
};

function getPersonaType(pct100, env) {
  return PERSONA_TYPES[env].find(p => pct100 >= p.range[0] && pct100 <= p.range[1]) || PERSONA_TYPES[env][1];
}

/* ─── STATE ─── */
const A = {};          // all answers
const PQA = {};        // persona q answers
let userName   = '';
let totalXP    = 0;
let flatQs     = [];
let curQ       = 0;
let curPQ      = 0;
let popCB      = null;

/* ─── BUILD FLAT LIST ─── */
function buildFlatQs() {
  flatQs = [];
  SECTIONS.forEach(sec => sec.envs.forEach(env => env.questions.forEach(q => flatQs.push({...q, section:sec, env}))));
}

/* ─── SCREEN NAV ─── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
}

function confirmBack() {
  if (confirm('Ana menüye dönmek istiyor musun?')) showScreen('s-splash');
}

/* ─── START ─── */
function startSurvey() {
  userName = (document.getElementById('ni').value.trim()) || 'Katılımcı';
  buildFlatQs(); curQ = 0;
  renderQ();
  showScreen('s-question');
}

/* ─── RENDER SURVEY QUESTION ─── */
function renderQ() {
  if (curQ >= flatQs.length) { goPersonaQ(); return; }
  const qd = flatQs[curQ];
  const sec = qd.section, c = sec.color;
  const isReal = qd.env.type === 'real';
  const envColor = isReal ? '#3DAB8C' : '#8B68D4';
  const envBg    = isReal ? '#E0F5EC' : '#EDE8FF';
  const envBdr   = isReal ? '#90D0B0' : '#C9B5F0';

  const total = flatQs.length;
  const pct   = Math.round((curQ / total) * 100);

  document.getElementById('prog-fill').style.width      = pct + '%';
  document.getElementById('prog-fill').style.background  = c.fill;
  document.getElementById('tb-sec').textContent   = sec.name + ' · ' + qd.env.label;
  document.getElementById('tb-cnt').textContent   = (curQ+1) + ' / ' + total;
  document.getElementById('btn-back').disabled    = (curQ === 0);
  document.getElementById('btn-next').disabled    = (A[qd.id] === undefined);

  /* dots */
  const envQs = qd.env.questions;
  document.getElementById('s-dots').innerHTML = envQs.map(q => {
    let cls = A[q.id] !== undefined ? 'done' : 'future';
    if (q.id === qd.id) cls = 'curr';
    return '<div class="s-dot ' + cls + '"></div>';
  }).join('');

  /* body */
  document.getElementById('q-body').innerHTML = `
    <div class="q-env-tag slide-in" style="color:${envColor};border-color:${envBdr};background:${envBg}">
      ${qd.env.label} · Madde ${envQs.indexOf(qd)+1}
    </div>
    <div class="q-card slide-in">
      <div class="q-num-badge" style="color:${c.a};border-color:${c.md};background:${c.lt}">
        ${qd.no}${qd.rev ? '<span style="font-size:.62rem;background:#FFE0E8;color:#C03060;border:1px solid #FFBCCB;border-radius:4px;padding:1px 5px;margin-left:4px">Ters</span>' : ''}
      </div>
      <div class="q-text-main">"${qd.text}"</div>
      <div class="likert-row">
        ${[{v:1,t:'Kesinlikle<br>Katılmıyorum'},{v:2,t:'Katıl-<br>mıyorum'},{v:3,t:'Kararsı-<br>zım'},{v:4,t:'Katılı-<br>yorum'},{v:5,t:'Kesinlikle<br>Katılıyorum'}]
          .map(o => `<button class="lk-btn ${A[qd.id]===o.v ? 'sel-'+o.v+' selected':''}" onclick="pickLikert('${qd.id}',${o.v},this)">
            <span class="lk-num">${o.v}</span><span class="lk-text">${o.t}</span>
          </button>`).join('')}
      </div>
    </div>
    <div class="auto-hint">✨ Seçim yapınca otomatik ilerler</div>
  `;
}

/* ─── PICK LIKERT ─── */
function pickLikert(qid, val, btn) {
  const fresh = A[qid] === undefined;
  A[qid] = val;
  if (fresh) { totalXP += 10; spawnXP(btn); }

  /* update visuals */
  btn.closest('.likert-row').querySelectorAll('.lk-btn').forEach(b => b.className = 'lk-btn');
  btn.classList.add('sel-'+val, 'selected');
  document.getElementById('btn-next').disabled = false;

  /* update dots */
  const qd = flatQs[curQ];
  document.getElementById('s-dots').innerHTML = qd.env.questions.map(q => {
    let cls = A[q.id]!==undefined ? 'done' : 'future';
    if (q.id === qd.id) cls = 'curr';
    return '<div class="s-dot '+cls+'"></div>';
  }).join('');

  setTimeout(() => autoAdv(), 420);
}

function autoAdv() {
  const qd  = flatQs[curQ];
  if (A[qd.id] === undefined) return;
  const envQs = qd.env.questions;
  const secEnvs = qd.section.envs;
  const isLastOfEnv = (qd === envQs[envQs.length-1]);
  const isLastOfSec = isLastOfEnv && (qd.env === secEnvs[secEnvs.length-1]);

  if (curQ >= flatQs.length-1) { goPersonaQ(); return; }

  if (isLastOfSec) {
    showPopup(qd.section, qd.env, true, () => { curQ++; renderQ(); });
  } else if (isLastOfEnv) {
    showPopup(qd.section, qd.env, false, () => { curQ++; renderQ(); });
  } else {
    curQ++; renderQ();
  }
}

function nextQ() { autoAdv(); }
function prevQ() { if (curQ > 0) { curQ--; renderQ(); } }

/* ─── POPUPS ─── */
function showPopup(sec, env, isSec, cb) {
  popCB = cb;
  const nextSec = SECTIONS[SECTIONS.indexOf(sec)+1];
  const isReal  = env.type === 'real';
  const p = document.getElementById('sc-popup');

  if (isSec) {
    p.innerHTML = `
      <div class="scp-emoji">🎉</div>
      <div class="scp-title" style="color:${sec.color.a}">${sec.name} Tamamlandı!</div>
      <div class="scp-sub">${nextSec ? 'Sırada: <strong>'+nextSec.name+'</strong>' : 'Son bölümdeydin!'}<br><br>⭐ ${totalXP} XP kazandın!</div>
      <button class="scp-btn" style="background:linear-gradient(135deg,${nextSec?nextSec.color.a:sec.color.a},${nextSec?nextSec.color.md:sec.color.md})" onclick="closePopup()">
        ${nextSec ? '🚀 '+nextSec.name+' →' : '🪪 Kişi Kartına Geç →'}
      </button>`;
  } else {
    p.innerHTML = `
      <div class="scp-emoji">${isReal ? '🌿' : '📡'}</div>
      <div class="scp-title" style="color:${sec.color.a}">${isReal ? 'Gerçek Hayat' : 'Dijital Hayat'} Tamamlandı!</div>
      <div class="scp-sub">${isReal ? 'Şimdi aynı soruları <strong>dijital ortam</strong> için değerlendiriyoruz.' : 'Bu bölüm tamamlandı!'}</div>
      <button class="scp-btn" style="background:linear-gradient(135deg,${sec.color.a},${sec.color.md})" onclick="closePopup()">
        ${isReal ? '📡 Dijital Sorulara Geç →' : '➡️ Devam Et'}
      </button>`;
  }
  document.getElementById('sc-overlay').classList.add('show');
  spawnConfetti(sec.color.a);
}

function closePopup() {
  document.getElementById('sc-overlay').classList.remove('show');
  if (popCB) { popCB(); popCB = null; }
}

/* ─── PERSONA QUESTIONNAIRE ─── */
function goPersonaQ() {
  curPQ = 0;
  showScreen('s-persona-q');
  renderPQ();
}

function renderPQ() {
  const total = PERSONA_QS.length;
  if (curPQ >= total) { startLoading(); return; }

  const q = PERSONA_QS[curPQ];
  document.getElementById('pq-prog').style.width = Math.round((curPQ/total)*100) + '%';
  document.getElementById('pq-cnt').textContent  = (curPQ+1) + ' / ' + total;

  /* dots */
  const dotsH = PERSONA_QS.map((_,i) => {
    let cls = PQA[PERSONA_QS[i].id]!==undefined ? 'done' : 'future';
    if (i===curPQ) cls='curr';
    return '<div class="pq-dot '+cls+'" onclick="jumpPQ('+i+')"></div>';
  }).join('');

  let inputHTML = '';
  if (q.type==='text') {
    inputHTML = `<input class="pq-input" id="pq-input" type="text" placeholder="${q.placeholder||''}" value="${PQA[q.id]||''}" oninput="PQA['${q.id}']=this.value">`;
  } else if (q.type==='textarea') {
    inputHTML = `<textarea class="pq-textarea" id="pq-input" placeholder="${q.placeholder||''}" oninput="PQA['${q.id}']=this.value">${PQA[q.id]||''}</textarea>`;
  } else if (q.type==='single') {
    inputHTML = `<div class="pq-opts">${q.opts.map(o => `<button class="pq-opt${PQA[q.id]===o?' sel':''}" onclick="pickPQ('${q.id}','${o}','single',this)">${o}</button>`).join('')}</div>`;
  } else if (q.type==='multi') {
    const sel = Array.isArray(PQA[q.id]) ? PQA[q.id] : [];
    inputHTML = `<div class="pq-opts">${q.opts.map(o => `<button class="pq-opt${sel.includes(o)?' sel-multi':''}" onclick="pickPQMulti('${q.id}','${o}',this)">${o}</button>`).join('')}</div>`;
  }

  document.getElementById('pq-body').innerHTML = `
    <div class="pq-hero">
      <div class="pq-hero-icon">🪪</div>
      <div>
        <h2>Kişi Kartın Oluşturuluyor</h2>
        <p>Bu bilgiler persona kartına yansıyacak.</p>
      </div>
    </div>
    <div class="pq-progress-row">${dotsH}</div>
    <div class="pq-card">
      <div class="pq-label">${q.label}</div>
      ${q.hint ? '<div class="pq-hint">'+q.hint+'</div>' : ''}
      ${inputHTML}
    </div>
    <button class="btn-pq-next" onclick="advPQ()">
      ${curPQ < total-1 ? 'Devam Et →' : '✨ Kartımı Oluştur!'}
    </button>
    <button class="btn-pq-skip" onclick="skipPQ()">Bu soruyu geç →</button>
  `;
}

function pickPQ(id, val, type, btn) {
  PQA[id] = val;
  btn.closest('.pq-opts').querySelectorAll('.pq-opt').forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  setTimeout(advPQ, 350);
}

function pickPQMulti(id, val, btn) {
  if (!PQA[id]) PQA[id] = [];
  const i = PQA[id].indexOf(val);
  if (i===-1) PQA[id].push(val); else PQA[id].splice(i,1);
  btn.classList.toggle('sel-multi');
}

function advPQ() {
  /* save text/textarea */
  const inp = document.getElementById('pq-input');
  if (inp && inp.value) PQA[PERSONA_QS[curPQ].id] = inp.value;
  curPQ++;
  renderPQ();
}

function skipPQ() { curPQ++; renderPQ(); }
function jumpPQ(i) { curPQ = i; renderPQ(); }

/* ─── LOADING ─── */
function startLoading() {
  showScreen('s-loading');
  const steps   = document.querySelectorAll('.load-step');
  const titles  = ['Veriler işleniyor...','Sosyal profil hesaplanıyor...','Kimlikler karşılaştırılıyor...','Persona tipin belirleniyor...','Kartın oluşturuluyor...'];
  const subs    = ['Kaygı örüntülerin analiz ediliyor.','Bağlılık ve kopukluk haritanız çiziliyor.','Gerçek hayat ile dijital kimliğin karşılaştırılıyor.','Sana özel persona türü seçiliyor.','Son rötuşlar yapılıyor...'];
  let step = 0;
  function adv() {
    if (step>0) { steps[step-1].className='load-step done'; steps[step-1].querySelector('.load-step-icon').textContent='✅'; }
    if (step<steps.length) {
      steps[step].className='load-step active';
      document.getElementById('load-title').textContent = titles[step];
      document.getElementById('load-sub').textContent   = subs[step];
      step++; setTimeout(adv, 850);
    } else {
      steps[steps.length-1].className='load-step done'; steps[steps.length-1].querySelector('.load-step-icon').textContent='✅';
      setTimeout(buildPersonaCard, 500);
    }
  }
  adv();
}

/* ─── SCORING ─── */
function scoreEnv(secId, envType) {
  const sec = SECTIONS.find(s=>s.id===secId);
  const env = sec.envs.find(e=>e.type===envType);
  let t=0; env.questions.forEach(q=>{let v=A[q.id]||3; if(q.rev)v=6-v; t+=v;}); return t;
}
function pct(raw,max=40){return Math.round((raw/max)*100);}

/* ─── BUILD PERSONA CARD ─── */
function buildPersonaCard() {
  const sc = {
    b1r:scoreEnv('b1','real'), b1d:scoreEnv('b1','digital'),
    b2r:scoreEnv('b2','real'), b2d:scoreEnv('b2','digital'),
    b3r:scoreEnv('b3','real'), b3d:scoreEnv('b3','digital'),
  };
  const realAvg = Math.round((sc.b1r+sc.b2r+sc.b3r)/3);
  const digAvg  = Math.round((sc.b1d+sc.b2d+sc.b3d)/3);
  const rp = pct(realAvg), dp = pct(digAvg);

  const realP = getPersonaType(rp,'real');
  const digP  = getPersonaType(dp,'digital');

  /* insight */
  const insights = [];
  const d1 = pct(sc.b1d)-pct(sc.b1r), d2 = pct(sc.b2d)-pct(sc.b2r), d3 = pct(sc.b3d)-pct(sc.b3r);
  if(Math.abs(d1)>8) insights.push(d1>0?'Dijital ortamdaki sosyal kaygın gerçek hayatından <strong>belirgin şekilde daha yüksek</strong>.':'Gerçek hayattaki sosyal kaygın dijital ortamına göre <strong>daha fazla</strong>.');
  else insights.push('Sosyal kaygı düzeylerin gerçek ve dijital ortamda <strong>birbirine yakın</strong>.');
  if(Math.abs(d2)>8) insights.push(d2>0?'Dijital ortam sana daha güçlü bir <strong>aidiyet hissi</strong> veriyor.':'Gerçek hayattaki sosyal bağlılık hissin dijital ortamına göre <strong>çok daha güçlü</strong>.');
  if(Math.abs(d3)>8) insights.push(d3>0?'Dijital ortamda kendini <strong>daha özgür ve otantik</strong> ifade ediyorsun.':'Gerçek hayatta benlik sunumun dijital kimliğinden <strong>daha otantik</strong>.');
  const insightText = insights.join(' ');

  window._SD = {sc, realP, digP, insightText, rp, dp};

  /* collected persona data */
  const pd = {
    quote:      PQA.pq1 || '"Kendim olmak en cesur eylem."',
    background: PQA.pq2 || 'Belirtilmedi.',
    skill_main: PQA.pq3 || '—',
    skills_extra: Array.isArray(PQA.pq4) ? PQA.pq4 : [],
    goal:       PQA.pq5 || '—',
    motivation: PQA.pq6 || '—',
    need:       PQA.pq7 || '—',
    platforms:  Array.isArray(PQA.pq8) ? PQA.pq8 : (PQA.pq8 ? [PQA.pq8] : []),
    age:        PQA.pq9  || '—',
    gender:     PQA.pq10 || '—',
  };

  document.getElementById('pn-title').textContent = `${userName}'in Persona Kartı`;

  /* Build both panels */
  const panels = document.getElementById('p-panels');
  panels.innerHTML = `
    <div class="p-panel active" id="panel-real">
      ${makePersonaGrid('real', realP, sc, pd, insightText)}
    </div>
    <div class="p-panel" id="panel-dig">
      ${makePersonaGrid('digital', digP, sc, pd, insightText)}
    </div>
  `;

  /* animate metric bars */
  setTimeout(() => {
    panels.querySelectorAll('.pc-mini-fill[data-w]').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 200);

  showScreen('s-persona');
  spawnConfetti('#C9B5F0');
  setTimeout(()=>spawnConfetti('#FFBCCB'),300);
}

function makePersonaGrid(envType, persona, sc, pd, insightText) {
  const isReal = envType==='real';
  const c  = isReal ? {a:'#3DAB8C',lt:'#E0F5EC',md:'#90D0B0',fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)'}
                    : {a:'#8B68D4',lt:'#EDE8FF',md:'#C9B5F0',fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)'};
  const envLabel = isReal ? '🌿 Gerçek Persona' : '📡 Dijital Persona';

  const metrics = [
    {lbl:'Sosyal Kaygı',   val:isReal?pct(sc.b1r):pct(sc.b1d), fill:'linear-gradient(90deg,#FFBCCB,#E8547A)'},
    {lbl:'Sosyal Bağlılık',val:isReal?pct(sc.b2r):pct(sc.b2d), fill:'linear-gradient(90deg,#C9B5F0,#8B68D4)'},
    {lbl:'Benlik Sunumu',  val:isReal?pct(sc.b3r):pct(sc.b3d), fill:'linear-gradient(90deg,#90D0B0,#3DAB8C)'},
  ];

  const allSkills = [pd.skill_main, ...pd.skills_extra].filter(Boolean);

  /* build "önemli noktalar" from analysis */
  const keyObs = isReal
    ? [
        pct(sc.b1r)>60?'Gerçek hayatta sosyal kaygı belirgin':'Gerçek hayatta sosyal kaygı düşük',
        pct(sc.b2r)>55?'Güçlü gerçek bağlılık':'Gerçek bağlılık gelişebilir',
        pct(sc.b3r)>60?'Yüksek otantiklik':'Otantiklik orta düzeyde',
      ]
    : [
        pct(sc.b1d)>60?'Dijital kaygı belirgin':'Dijital kaygı düşük',
        pct(sc.b2d)>55?'Dijital bağlılık güçlü':'Dijital bağlılık zayıf',
        pct(sc.b3d)>60?'Dijitalde özgün ifade':'Dijitalde performatif davranış',
      ];

  return `
  <!-- PERSONA CARD GRID -->
  <div class="pc-grid">

    <!-- HEADER -->
    <div class="pc-header">
      <div class="pc-name-cell">
        <span style="font-size:1.4rem">${persona.emoji}</span>
        ${userName}
      </div>
      <div class="pc-type-cell" style="color:${c.a}">
        <span>${persona.name}</span>
        <span style="font-size:1.1rem">${isReal?'🌿':'📡'}</span>
      </div>
    </div>

    <!-- BODY -->
    <div class="pc-body">

      <!-- LEFT COLUMN -->
      <div class="pc-left">

        <!-- kişinin resmi / avatar -->
        <div class="pc-left-cell">
          <div class="pc-cell-lbl">👤 Profil</div>
          <div class="pc-avatar" style="background:${c.lt};border-color:${c.md};box-shadow:2px 2px 0 ${c.md}">${persona.emoji}</div>
          <div style="font-family:'Caveat',cursive;font-size:.85rem;font-weight:700;color:${c.a}">${persona.name}</div>
          <div style="font-size:.7rem;color:var(--ink-lt);margin-top:2px">${envLabel}</div>
        </div>

        <!-- demografik bilgiler -->
        <div class="pc-left-cell">
          <div class="pc-cell-lbl">📊 Demografik</div>
          <div style="font-size:.75rem;color:var(--ink-mid);line-height:1.55">
            ${pd.age!=='—'?'🎂 '+pd.age+'<br>':''}
            ${pd.gender!=='—'?'⚧ '+pd.gender+'<br>':''}
            ${pd.platforms.length?'📱 '+pd.platforms.slice(0,3).join(', '):''}
          </div>
        </div>

        <!-- yetenekler -->
        <div class="pc-left-cell">
          <div class="pc-cell-lbl">⚡ Yetenekler</div>
          <div>
            ${allSkills.map(s=>`<span class="pc-tag" style="background:${c.lt};color:${c.a};border-color:${c.md}">${s}</span>`).join('') || '<span style="font-size:.75rem;color:var(--ink-lt)">Belirtilmedi</span>'}
          </div>
        </div>

        <!-- önemli noktalar -->
        <div class="pc-left-cell" style="flex:1">
          <div class="pc-cell-lbl">📌 Önemli Noktalar</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            ${keyObs.map(o=>`<div style="font-size:.72rem;color:var(--ink);line-height:1.4;display:flex;gap:4px"><span style="flex-shrink:0">•</span>${o}</div>`).join('')}
          </div>
        </div>

      </div><!-- /pc-left -->

      <!-- RIGHT COLUMN -->
      <div class="pc-right">

        <!-- alıntı cümle -->
        <div class="pc-right-cell">
          <div class="pc-cell-lbl">💬 Sevdiği Alıntı</div>
          <div class="pc-quote">${pd.quote}</div>
        </div>

        <!-- arka plan -->
        <div class="pc-right-cell">
          <div class="pc-cell-lbl">📖 Arka Plan</div>
          <div class="pc-cell-val">${pd.background}</div>
        </div>

        <!-- hedefler ve davranışlar -->
        <div class="pc-right-cell">
          <div class="pc-cell-lbl">🎯 Hedefler & Davranışlar</div>
          <div class="pc-cell-val">
            <strong>Hedef:</strong> ${pd.goal}<br>
            <strong>Tip:</strong> ${persona.tagline}
          </div>
          <div style="margin-top:8px">
            ${metrics.map(m=>`
              <div class="pc-metric-mini" title="${m.lbl}">
                <span style="font-size:.68rem;width:72px;flex-shrink:0;color:var(--ink-lt)">${m.lbl}</span>
                <div class="pc-mini-bar">
                  <div class="pc-mini-fill" data-w="${m.val}" style="width:0%;background:${m.fill}"></div>
                </div>
                <span class="pc-mini-val">${m.val}%</span>
              </div>`).join('')}
          </div>
        </div>

        <!-- motivasyon + ihtiyaçlar -->
        <div class="pc-bottom-split">
          <div class="pc-split-cell">
            <div class="pc-cell-lbl">💡 Motivasyon</div>
            <div class="pc-cell-val">${pd.motivation}</div>
          </div>
          <div class="pc-split-cell">
            <div class="pc-cell-lbl">🫶 İhtiyaçlar</div>
            <div class="pc-cell-val">${pd.need}</div>
          </div>
        </div>

      </div><!-- /pc-right -->
    </div><!-- /pc-body -->
  </div><!-- /pc-grid -->

  <!-- ANALYSIS SECTION -->
  <div class="analysis-section">
    <div class="analysis-title">📈 ${isReal?'Gerçek Hayat':'Dijital Hayat'} Analizi</div>
    <div class="analysis-row">
      ${metrics.map(m=>`
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

function switchPTab(type) {
  document.getElementById('tab-real').classList.toggle('active', type==='real');
  document.getElementById('tab-dig').classList.toggle('active',  type==='digital');
  document.getElementById('panel-real').classList.toggle('active', type==='real');
  document.getElementById('panel-dig').classList.toggle('active',  type==='digital');
  /* re-animate bars */
  setTimeout(()=>{
    document.querySelectorAll('.pc-mini-fill[data-w]').forEach(el=>{
      el.style.width='0%'; setTimeout(()=>{ el.style.width=el.dataset.w+'%'; },60);
    });
  },40);
}

/* ─── RESULTS ─── */
function buildResults() {
  const d = window._SD; if(!d) return;
  const {sc,insightText} = d;
  const C  = 2*Math.PI*36, Ci = 2*Math.PI*22;
  const dA = (p,circ) => { const f=(p/100)*circ; return f.toFixed(2)+' '+(circ-f).toFixed(2); };

  const charts = [
    {lbl:'Sosyal Kaygı',icon:'🔒', real:pct(sc.b1r),dig:pct(sc.b1d)},
    {lbl:'Sosyal Bağlılık',icon:'🔗',real:pct(sc.b2r),dig:pct(sc.b2d)},
    {lbl:'Benlik Sunumu',icon:'🪞',real:pct(sc.b3r),dig:pct(sc.b3d)},
  ];

  const chartsH = charts.map(ch=>`
    <div class="chart-item">
      <div class="donut-wrap">
        <svg viewBox="0 0 84 84">
          <circle cx="42" cy="42" r="36" fill="none" stroke="#E8E0F4" stroke-width="8"/>
          <circle cx="42" cy="42" r="22" fill="none" stroke="#E8E0F4" stroke-width="8"/>
          <circle cx="42" cy="42" r="36" fill="none" stroke="#3DAB8C" stroke-width="8" stroke-linecap="round"
            stroke-dasharray="0 ${C.toFixed(2)}" class="arc-a" data-t="${dA(ch.real,C)}"
            style="transition:stroke-dasharray 1.3s cubic-bezier(0.23,1,0.32,1)"/>
          <circle cx="42" cy="42" r="22" fill="none" stroke="#8B68D4" stroke-width="8" stroke-linecap="round"
            stroke-dasharray="0 ${Ci.toFixed(2)}" class="arc-a" data-t="${dA(ch.dig,Ci)}"
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

  const demo = { age:PQA.pq9||'—', gender:PQA.pq10||'—', platforms:(Array.isArray(PQA.pq8)?PQA.pq8:[]).join(', ')||'—' };

  document.getElementById('rh-xp').textContent = `⭐ ${totalXP} XP kazandın!`;
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
        <div class="demo-item">🎂 Yaş: <strong>${demo.age}</strong></div>
        <div class="demo-item">⚧ Cinsiyet: <strong>${demo.gender}</strong></div>
        <div class="demo-item" style="grid-column:1/-1">📱 Platformlar: <strong>${demo.platforms}</strong></div>
      </div>
    </div>
    <div class="results-cta">
      <button class="btn-r btn-restart" onclick="restartAll()">🔄 Yeniden Başla</button>
      <button class="btn-r btn-dl" onclick="window.print()">🖨️ Yazdır</button>
    </div>
    <div style="text-align:center;font-size:.7rem;color:var(--ink-lt);margin-top:8px;line-height:1.6">
      Katılımın için teşekkürler, ${userName}! 🌸<br>
      Bu veriler araştırma amacıyla kullanılmaktadır.
    </div>
  `;

  showScreen('s-results');
  setTimeout(()=>{
    document.querySelectorAll('.arc-a').forEach(a=>a.setAttribute('stroke-dasharray',a.dataset.t));
  },200);
  spawnConfetti('#FFBCCB');
  setTimeout(()=>spawnConfetti('#C9B5F0'),350);
  setTimeout(()=>spawnConfetti('#90D0B0'),700);
}

/* ─── RESTART ─── */
function restartAll() {
  if (!confirm('Tüm yanıtlar sıfırlanacak?')) return;
  Object.keys(A).forEach(k=>delete A[k]);
  Object.keys(PQA).forEach(k=>delete PQA[k]);
  totalXP=0; curQ=0; curPQ=0; window._SD=null;
  document.getElementById('ni').value='';
  showScreen('s-splash');
}

/* ─── UTILS ─── */
function spawnConfetti(color) {
  for(let i=0;i<22;i++){
    const el=document.createElement('div');
    el.className='confetti-el';
    el.style.cssText=`left:${Math.random()*100}vw;top:-10px;background:${color};width:${Math.random()*10+5}px;height:${Math.random()*10+5}px;border-radius:${Math.random()>.5?'50%':'3px'};animation-duration:${Math.random()*2+1.5}s;animation-delay:${Math.random()*.6}s;`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),3500);
  }
}
function spawnXP(el){
  const r=el.getBoundingClientRect();
  const f=document.createElement('div');
  f.className='xp-float'; f.textContent='+10 XP';
  f.style.cssText=`left:${r.left+r.width/2-24}px;top:${r.top-8}px;`;
  document.body.appendChild(f);
  setTimeout(()=>f.remove(),1100);
}
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(t._t); t._t=setTimeout(()=>t.classList.remove('show'),2500);
}

buildFlatQs();
