let currentLanguage = 'pt';

function languageData(lang){ return LANG_PACKS[lang] || LANG_PACKS.pt; }

const CONTRACT_VARIANTS={
  pt:{
    namoro:{title:'Contrato de Renovação de Namoro',subtitle:'um acordo firmado com carinho, sem letras miúdas',clauses:[
      'As partes abaixo resolvem renovar, por mais um capítulo, o namoro já existente entre elas, mantidos todos os direitos a abraços, colo, ligações demoradas e escolher o filme de vez em quando.',
      'Raphael se compromete a continuar apoiando, ouvindo, cuidando e fazendo de cada conversa um lugar seguro, leve e verdadeiro.',
      'Mariana se compromete apenas a continuar sendo quem é, porque é exatamente essa pessoa que ele escolhe todos os dias.',
      'A renovação não cobra juros financeiros. Os únicos juros permitidos são carinho acumulado, saudade convertida em abraço e novas histórias rendendo para nós dois.',
      'Ao assinar, as partes reconhecem que este capítulo não possui reembolso, troca, estorno ou devolução. Em caso de arrependimento, a única política disponível é conversar, se abraçar e negociar diretamente entre os dois administradores do relacionamento.'
    ],signature:'E, por estarem de comum acordo (e apaixonados), assinam abaixo:',accept:'Sim, eu renovo ♥'},
    casamento:{title:'Contrato de Upgrade para Casamento',subtitle:'com juras, votos e nenhuma vontade de voltar atrás',clauses:[
      'As partes abaixo resolvem transformar o plano Namoro em Casamento, preservando tudo o que já construíram e adicionando uma licença vitalícia de nós dois.',
      'Raphael promete escolher Mariana nos dias leves e nos difíceis, dividir casa, rotina, planos, cobertas, responsabilidades e todos os sonhos que couberem no caminho.',
      'Mariana promete continuar construindo esse futuro ao lado dele, com conversa, parceria, carinho e liberdade para os dois continuarem crescendo juntos.',
      'Ficam incluídos neste acordo as viagens, projetos, uma casa com a nossa cara, muitos anos de histórias e, quando chegar o capítulo certo, a família e os mini nós dois que já fazem parte dos nossos planos.',
      'Não há multa por excesso de amor. As juras e os votos aqui registrados vencem apenas para serem renovados todos os dias.',
      'Após a assinatura, este upgrade não admite reembolso, troca, estorno ou devolução. Qualquer ajuste futuro deverá ser resolvido em conversa, parceria e comum acordo entre os dois titulares.'
    ],signature:'E, decididos a transformar o nosso “nós” em casa, futuro e família, fazem suas juras e assinam abaixo:',accept:'Sim, eu aceito casar ♥'},
    plus:{title:'Contrato de Casamento Plus',subtitle:'o pacote completo, com juras, votos e planos de família',clauses:[
      'As partes abaixo escolhem o pacote completo: casamento, casa, viagens, projetos, muitos anos juntos e uma vida construída em modo cooperativo.',
      'Raphael promete ser parceiro, abrigo, torcida e companhia, inclusive quando houver boletos, sono, bagunça, decisões difíceis e discussões sobre quem roubou a coberta.',
      'Mariana promete continuar trazendo para essa vida a sua força, seu jeito, sua verdade e essa conexão que transforma qualquer conversa simples em alguma coisa nossa.',
      'A expansão de família está incluída nos planos: os mini nós dois serão recebidos no tempo certo, com decisão conjunta, amor, responsabilidade e provavelmente fotos demais no celular.',
      'Validade: vitalícia. Juros: carinho composto. Reajuste anual: mais histórias, mais cumplicidade e mais motivos para escolher um ao outro.',
      'O pacote completo, depois de assinado, não possui reembolso, troca, estorno ou devolução. Atualizações futuras são tratadas diretamente pelos dois administradores, sempre em comum acordo.'
    ],signature:'E, porque ela escolheu o pacote completo, fazem suas juras, registram seus votos e assinam abaixo:',accept:'Sim, eu quero o pacote completo ♥'}
  },
  en:{
    namoro:{title:'Dating Renewal Contract',subtitle:'an agreement made with affection and no fine print',clauses:['The parties renew their existing relationship for another chapter, keeping all rights to hugs, long calls and shared movie choices.','Raphael promises to keep supporting, listening and making every conversation feel safe and genuine.','Mariana only promises to keep being exactly who she is, the person he chooses every day.','There is no financial interest here. The only compound interest allowed is affection, longing converted into hugs and new stories earning value for both.','Once signed, this chapter has no refund, exchange, reversal or return policy. Any future adjustment must be negotiated through conversation, hugs and mutual agreement between both relationship administrators.'],signature:'And, being in complete agreement (and in love), the parties sign below:',accept:'Yes, I renew ♥'},
    casamento:{title:'Marriage Upgrade Contract',subtitle:'with promises, vows and no intention of turning back',clauses:['The parties upgrade Dating to Marriage, preserving everything already built and adding a lifetime license for us two.','Raphael promises to choose Mariana on easy and hard days and to share home, routines, plans, blankets, responsibilities and dreams.','Mariana promises to keep building that future beside him with conversation, partnership and affection.','Trips, projects, a home that feels like us, years of stories and, at the right chapter, the family and mini us two already in our plans are included.','No penalty applies for excessive love. These vows simply renew themselves every day.','After signature, this upgrade has no refund, exchange, reversal or return policy. Future adjustments must be handled through conversation, partnership and mutual agreement.'],signature:'And, choosing to turn our “us” into home, future and family, the parties make their vows and sign below:',accept:'Yes, I choose marriage ♥'},
    plus:{title:'Marriage Plus Contract',subtitle:'the full package, with vows and family plans',clauses:['The parties choose the full package: marriage, home, trips, projects, many years together and a life built in cooperative mode.','Raphael promises to be partner, shelter, supporter and company through bills, sleepy days, messes and every big decision.','Mariana promises to keep bringing her strength, truth and the connection that turns ordinary conversations into something that belongs to us.','Family expansion is part of the plan: mini us two will arrive at the right time, through a shared decision, love and responsibility.','Validity: lifetime. Interest: compound affection. Annual adjustment: more stories and more reasons to choose each other.','Once signed, the full package has no refund, exchange, reversal or return policy. Future updates are handled directly by both administrators, always by mutual agreement.'],signature:'And, because she chose the full package, the parties make their vows and sign below:',accept:'Yes, I want the full package ♥'}
  },
  es:{
    namoro:{title:'Contrato de Renovación del Noviazgo',subtitle:'un acuerdo firmado con cariño y sin letra pequeña',clauses:['Las partes renuevan su noviazgo por un capítulo más, manteniendo todos los derechos a abrazos, llamadas largas y películas compartidas.','Raphael promete seguir apoyando, escuchando y haciendo de cada conversación un lugar seguro y verdadero.','Mariana solo promete seguir siendo exactamente quien es, la persona que él elige todos los días.','No hay intereses financieros. Los únicos intereses permitidos son cariño acumulado, nostalgia convertida en abrazo y nuevas historias para los dos.','Una vez firmado, este capítulo no admite reembolso, cambio, reversión ni devolución. Cualquier ajuste futuro deberá negociarse con conversación, abrazos y acuerdo mutuo entre ambos administradores de la relación.'],signature:'Y, estando de común acuerdo (y enamorados), firman a continuación:',accept:'Sí, renuevo ♥'},
    casamento:{title:'Contrato de Upgrade a Matrimonio',subtitle:'con promesas, votos y ninguna intención de volver atrás',clauses:['Las partes transforman el Noviazgo en Matrimonio, preservando todo lo construido y añadiendo una licencia vitalicia de nosotros dos.','Raphael promete elegir a Mariana en los días fáciles y difíciles y compartir casa, rutina, planes, mantas, responsabilidades y sueños.','Mariana promete seguir construyendo ese futuro a su lado con conversación, compañerismo y cariño.','Viajes, proyectos, una casa con nuestra cara, muchos años de historias y, cuando llegue el capítulo adecuado, la familia y los mini nosotros dos ya incluidos en nuestros planes forman parte del acuerdo.','No existe multa por exceso de amor. Estos votos se renuevan todos los días.','Después de la firma, este upgrade no admite reembolso, cambio, reversión ni devolución. Los ajustes futuros deberán resolverse con conversación, compañerismo y acuerdo mutuo.'],signature:'Y, decididos a transformar nuestro “nosotros” en casa, futuro y familia, hacen sus votos y firman a continuación:',accept:'Sí, acepto casarme ♥'},
    plus:{title:'Contrato de Matrimonio Plus',subtitle:'el paquete completo, con votos y planes de familia',clauses:['Las partes eligen el paquete completo: matrimonio, casa, viajes, proyectos, muchos años juntos y una vida construida en modo cooperativo.','Raphael promete ser compañero, refugio, apoyo y compañía incluso entre cuentas, sueño, desorden y decisiones importantes.','Mariana promete seguir aportando su fuerza, su verdad y esa conexión que convierte cualquier conversación en algo nuestro.','La expansión familiar forma parte del plan: los mini nosotros dos llegarán en el momento adecuado, con decisión conjunta, amor y responsabilidad.','Validez: vitalicia. Intereses: cariño compuesto. Reajuste anual: más historias y más razones para elegirse.','Una vez firmado, el paquete completo no admite reembolso, cambio, reversión ni devolución. Las futuras actualizaciones serán tratadas directamente por ambos administradores, siempre de común acuerdo.'],signature:'Y, porque ella eligió el paquete completo, hacen sus votos y firman a continuación:',accept:'Sí, quiero el paquete completo ♥'}
  }
};
function applySelectedContract(pack){
  const state=window.NosDoisProgress?.read?.()||{};
  const key=['casamento','plus'].includes(state.plan)?state.plan:'namoro';
  const variant=(CONTRACT_VARIANTS[currentLanguage]||CONTRACT_VARIANTS.pt)[key];
  CONFIG.letterTitle=variant.title;CONFIG.letterSubtitle=variant.subtitle;CONFIG.clauses=[...variant.clauses];CONFIG.signatureLine=variant.signature;CONFIG.contractAccept=variant.accept;
}
function binaryVoucherCode(code){
  const digits = String(code || '').replace(/\D/g, '');
  const num = Number.parseInt(digits || '0', 10);
  return num.toString(2).padStart(11, '0');
}

function refreshTimelineLanguage(pack){
  const items = document.querySelectorAll('#timeline .tl-item');
  items.forEach((item, i) => {
    const m = pack.milestones[i];
    if(!m) return;
    const who = (i % 2 === 0) ? pack.yourPhotoLabel : pack.partnerPhotoLabel;
    const date = item.querySelector('.tl-date');
    const title = item.querySelector('.tl-title');
    const text = item.querySelector('.tl-text');
    const signature = item.querySelector('.tl-signature');
    const hint = item.querySelector('.tl-photo-placeholder .hint');
    const imgs = item.querySelectorAll('.tl-photo-inner img');
    if(date) date.textContent = m.date;
    if(title) title.textContent = m.title || '';
    if(text) text.textContent = m.text;
    if(signature) signature.textContent = m.signature || '';
    if(hint) hint.innerHTML = `${pack.photoPlaceholder}<br>${who}`;
    imgs.forEach((img, photoIndex) => { img.alt = `${pack.photoPlaceholder} ${who}${imgs.length > 1 ? ` ${photoIndex + 1}` : ''}`; });
  });
}

function refreshVoucherLanguage(pack){
  if(!voucherBuilt || !voucherBaseCount) return;
  document.querySelectorAll('#voucher-track .voucher-card').forEach((slide, index) => {
    const data = CONFIG.vouchers[index % voucherBaseCount];
    if(!data) return;
    const front = slide.querySelector('.v-front');
    const back = slide.querySelector('.v-back');
    if(front){
      const stub = front.querySelector('.v-stub');
      const title = front.querySelector('.v-title');
      const tag = front.querySelector('.v-tagline');
      if(stub) stub.textContent = `${pack.voucherTiny} · ${data.code || 'VC-000'}`;
      if(title) title.textContent = data.title;
      if(tag) tag.textContent = data.tagline;
    }
    if(back){
      const stub = back.querySelector('.v-stub');
      const title = back.querySelector('.v-title');
      const tag = back.querySelector('.v-tagline');
      const number = back.querySelector('.v-number');
      if(stub) stub.textContent = pack.voucherDetails;
      if(title) title.textContent = data.title;
      if(tag) tag.textContent = data.desc;
      if(number) number.innerHTML = `${binaryVoucherCode(data.code)}<br>${pack.voucherValidity}`;
      const redeemBtn=back.querySelector('.v-redeem-btn');
      const redeemed=back.querySelector('.v-redeemed-stamp');
      const rc=voucherRedeemCopy();
      if(redeemBtn) redeemBtn.textContent=isVoucherRedeemed(data.code)?rc.redeemed:rc.button;
      if(redeemed) redeemed.textContent=rc.stamp;
    }
  });
  updateVoucherRedemptionState();
}

function renderLoveNotes(){
  const el = document.getElementById('love-notes-marquee');
  if(!el) return;
  const notes = Array.isArray(CONFIG.loveNotes) ? CONFIG.loveNotes : [];
  const repeated = [];
  const repeatCount = Math.max(5, Math.ceil((window.innerWidth || 1440) / 420));
  for(let i = 0; i < repeatCount; i++) repeated.push(...notes);
  el.innerHTML = repeated.map(note => {
    const item = typeof note === 'string' ? {brand:'nós dois', headline:note, tagline:''} : note;
    return `<article class="love-note-card">
      <div class="love-note-top">
        <span class="love-note-heart">♥</span>
        <span class="love-note-brand">${item.brand || 'nós dois'}</span>
      </div>
      <div class="love-note-headline">${item.headline || ''}</div>
      <div class="love-note-tagline">${item.tagline || ''}</div>
    </article>`;
  }).join('');
}

function footerContactMarkup(contact, label){
  const icon = ICONS[contact.type] || ICONS.other;
  if(contact.action === 'phone'){
    return `
      <button class="footer-social-item" type="button" data-contact-action="phone" aria-label="${label}">
        <span class="footer-social">${icon}</span>
      </button>
    `;
  }
  const href = contact.href || '#';
  const newTab = /^(https?:)?\/\//.test(href);
  return `
    <a class="footer-social-item" href="${href}" ${newTab ? 'target="_blank" rel="noopener noreferrer"' : ''} aria-label="${label}">
      <span class="footer-social">${icon}</span>
    </a>
  `;
}

function renderFooterMeta(pack){
  const promiseLinksEl = document.getElementById('promise-links');
  promiseLinksEl.innerHTML = CONFIG.promiseLinks.map((link, i) => `
    <a href="${link.url}" ${link.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${pack.promiseLabels[i] || link.label}</a>
  `).join('');

  const footerSocialsEl = document.getElementById('footer-socials');
  footerSocialsEl.innerHTML = CONFIG.contacts.map((contact, i) =>
    footerContactMarkup(contact, pack.contactLabels[i] || contact.label)
  ).join('');
}

function applyLanguage(lang){
  const pack = languageData(lang);
  currentLanguage = LANG_PACKS[lang] ? lang : 'pt';
  document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : currentLanguage;
  try{ localStorage.setItem('site-language', currentLanguage); }catch(e){}

  CONFIG.heroTitle = pack.heroTitle;
  CONFIG.heroSubtitle = pack.heroSubtitle;
  CONFIG.yourPhotoLabel = pack.yourPhotoLabel;
  CONFIG.partnerPhotoLabel = pack.partnerPhotoLabel;
  CONFIG.milestones = pack.milestones.map((m, i) => {
    const photos = [...(SITE_ASSETS.milestonePhotos[i] || [])];
    return {...m, photos, photo:photos[0] || ""};
  });
  CONFIG.letterTitle = pack.letterTitle;
  CONFIG.letterSubtitle = pack.letterSubtitle;
  CONFIG.clauses = [...pack.clauses];
  CONFIG.signatureLine = pack.signatureLine;
  CONFIG.contractAccept = pack.accept;
  applySelectedContract(pack);
  CONFIG.vouchersTitle = pack.vouchersTitle;
  CONFIG.vouchers = pack.vouchers.map((v, i) => ({...v, image:SITE_ASSETS.voucherImages[i] || "", code:SITE_ASSETS.voucherCodes[i] || `VC-${String(i+1).padStart(3,'0')}`}));
  CONFIG.bouquetNote = pack.bouquetNote;
  CONFIG.bouquetSigned = pack.bouquetSigned;
  CONFIG.bouquetPhotos = [...SITE_ASSETS.bouquetPhotos];
  CONFIG.loveNotes = [...pack.loveNotes];

  document.getElementById('hero-title').textContent = CONFIG.heroTitle;
  document.getElementById('hero-subtitle').textContent = CONFIG.heroSubtitle;
  const scrollHint = document.querySelector('.scroll-hint'); if(scrollHint) scrollHint.textContent = pack.scrollHint;
  const loadingText = document.getElementById('loading-text'); if(loadingText) loadingText.textContent = pack.loadingText;

  document.querySelector('#timeline-section .eyebrow').textContent = pack.timelineEyebrow;
  document.querySelector('#timeline-section .section-title').textContent = pack.timelineTitle;
  refreshTimelineLanguage(pack);

  document.querySelector('#envelope-section .eyebrow').textContent = pack.envelopeEyebrow;
  document.querySelector('#envelope-section .section-title').textContent = pack.envelopeTitle;
  if(!opened){ envelopeHint.textContent = pack.envelopeHint; envelopeHint.style.opacity = ''; }

  document.querySelector('#vouchers-section .eyebrow').textContent = pack.voucherEyebrow;
  document.getElementById('vouchers-title').textContent = pack.vouchersTitle;
  refreshVoucherLanguage(pack);

  document.getElementById('bouquet-note').firstChild.textContent = pack.bouquetNote + ' ';
  document.getElementById('bouquet-signed').textContent = pack.bouquetSigned;
  document.querySelectorAll('#flowers .memory-caption').forEach((el, i) => { if(pack.bouquetLabels[i]) el.textContent = pack.bouquetLabels[i]; });
  document.querySelectorAll('#flowers .photo-card-placeholder .hint').forEach(el => el.textContent = pack.bouquetPlaceholder);

  document.querySelector('#love-notes-section .eyebrow').textContent = pack.loveEyebrow;
  document.querySelector('#love-notes-section .section-title').textContent = pack.loveTitle;
  renderLoveNotes();

  const footerCta = document.querySelector('.footer-cta');
  footerCta.querySelector('h2').innerHTML = pack.footerCallTitle;
  footerCta.querySelector('p').textContent = pack.footerCallText;
  document.getElementById('open-phone-modal').textContent = pack.revealPhone;
  document.querySelector('.footer-story h3').textContent = pack.footerStoryTitle;
  document.querySelector('.footer-story p').textContent = pack.footerStoryText;
  document.querySelectorAll('.footer-story-links a').forEach((a, i) => { if(pack.footerStoryLinks[i]) a.textContent = pack.footerStoryLinks[i]; });
  document.querySelector('.footer-group.promises h3').textContent = pack.promisesTitle;
  document.querySelector('.footer-group.contacts h3').textContent = pack.contactTitle;
  const bottomSpans = document.querySelectorAll('.footer-bottom > span'); if(bottomSpans[1]) bottomSpans[1].textContent = pack.footerBottom;
  renderFooterMeta(pack);
  window.NosDoisProgress?.refresh?.();

  const phoneHeader = document.querySelector('.phone-note-header'); if(phoneHeader) phoneHeader.textContent = pack.phoneTitle;
  const phoneSub = document.querySelector('.phone-note-sub'); if(phoneSub) phoneSub.textContent = pack.phoneSub;
  const phoneLabel = document.querySelector('.handwritten-label'); if(phoneLabel) phoneLabel.textContent = pack.phoneLabel;

  document.getElementById('nav-story-label').textContent = pack.nav.story;
  document.getElementById('nav-timeline').textContent = pack.nav.timeline;
  document.getElementById('nav-contract').textContent = pack.nav.contract;
  document.getElementById('nav-promises').textContent = pack.nav.promises;
  document.getElementById('hotbar-call-label').textContent = pack.nav.call;
  document.getElementById('mobile-nav-story').firstChild.textContent = pack.nav.story + ' ';
  document.getElementById('mobile-nav-contract').firstChild.textContent = pack.nav.contract + ' ';
  const mobilePlans=document.getElementById('mobile-nav-planos'); if(mobilePlans) mobilePlans.firstChild.textContent=(pack.promiseLabels?.[0]||'Planos')+' ';
  const mobileArchive=document.getElementById('mobile-nav-acervo'); if(mobileArchive) mobileArchive.firstChild.textContent=(pack.promiseLabels?.[1]||'Acervo')+' ';
  document.getElementById('mobile-call-label').textContent = pack.nav.call;
  document.getElementById('lang-current-code').textContent = pack.code;
  document.querySelectorAll('.lang-option').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === currentLanguage));
  updateSpotifyAccessibility();

  if(opened && letterSection.classList.contains('shown')) buildLetter();
  measureDots();
  updateTlProgress();
}


/* ==================== aplica textos do CONFIG ==================== */
document.getElementById('hero-title').textContent = CONFIG.heroTitle;
document.getElementById('hero-subtitle').textContent = CONFIG.heroSubtitle;
document.getElementById('vouchers-title').textContent = CONFIG.vouchersTitle;
document.getElementById('bouquet-note').firstChild.textContent = CONFIG.bouquetNote + " ";
document.getElementById('bouquet-signed').textContent = CONFIG.bouquetSigned;
document.getElementById('footer-text').textContent = CONFIG.footerText;
document.getElementById('phone-number-display').textContent = CONFIG.phoneNumber;

const promiseLinksEl = document.getElementById('promise-links');
promiseLinksEl.innerHTML = CONFIG.promiseLinks.map(link => `
  <a href="${link.url}" ${link.newTab ? 'target="_blank" rel="noopener noreferrer"' : ''}>${link.label}</a>
`).join('');

const ICONS = {
  email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="m5 7 7 6 7-6"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l1.5 4-2 1.8a16 16 0 0 0 5.7 5.7L16 14l4 1.5v4a2 2 0 0 1-2.2 2A17.8 17.8 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4Z"/></svg>`,
  other: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18"/><path d="M3 12h18"/><path d="m5.6 5.6 12.8 12.8"/><path d="M18.4 5.6 5.6 18.4"/></svg>`
};
const footerSocialsEl = document.getElementById('footer-socials');
footerSocialsEl.innerHTML = CONFIG.contacts.map(contact => footerContactMarkup(contact, contact.label)).join('');

renderLoveNotes();

const phoneModalBackdrop = document.getElementById('phone-modal-backdrop');
const openPhoneModalBtn = document.getElementById('open-phone-modal');
const closePhoneModalBtn = document.getElementById('close-phone-modal');
footerSocialsEl.addEventListener('click', (event) => {
  const phoneButton = event.target.closest('[data-contact-action="phone"]');
  if(!phoneButton) return;
  event.preventDefault();
  openPhoneModal();
});
window.addEventListener('resize', () => renderLoveNotes());

function openPhoneModal(){
  phoneModalBackdrop.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closePhoneModal(){
  phoneModalBackdrop.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

openPhoneModalBtn.addEventListener('click', openPhoneModal);
['click','pointerup','touchend'].forEach(evt => {
  closePhoneModalBtn.addEventListener(evt, (event) => {
    event.preventDefault();
    event.stopPropagation();
    closePhoneModal();
  }, {passive:false});
});
document.querySelector('.phone-modal').addEventListener('click', (event) => {
  event.stopPropagation();
});
phoneModalBackdrop.addEventListener('click', (event) => {
  if(event.target === phoneModalBackdrop) closePhoneModal();
});
document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape' && phoneModalBackdrop.classList.contains('is-open')) closePhoneModal();
});

/* ==================== estrelas sutis ==================== */
const starsLayer = document.getElementById('stars-layer');
const STAR_COUNT = window.innerWidth < 640 ? 24 : 42;

for(let i = 0; i < STAR_COUNT; i++){
  const star = document.createElement('span');
  star.className = 'star-dot';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.setProperty('--twinkle-duration', (7 + Math.random() * 9).toFixed(2) + 's');
  star.style.setProperty('--drift-duration', (18 + Math.random() * 22).toFixed(2) + 's');
  star.style.setProperty('--delay', (-Math.random() * 12).toFixed(2) + 's');
  star.style.setProperty('--drift-x', ((Math.random() - .5) * 18).toFixed(1) + 'px');
  star.style.setProperty('--drift-y', ((Math.random() - .5) * 22).toFixed(1) + 'px');
  starsLayer.appendChild(star);
}

/* ==================== pixel heart loading ==================== */
const HEART_MAP = [
  "0110110",
  "1111111",
  "1111111",
  "1111111",
  "0111110",
  "0011100",
  "0001000"
];
const heartEl = document.getElementById('pixel-heart');
const cells = [];
HEART_MAP.forEach(row=>{
  [...row].forEach(v=>{
    const d = document.createElement('div');
    d.className = 'pixel';
    heartEl.appendChild(d);
    if(v==='1') cells.push(d);
  });
});
// preenche de baixo pra cima (linhas invertidas)
const fillOrder = [];
[...HEART_MAP].reverse().forEach((row,ri)=>{
  const realRow = HEART_MAP.length-1-ri;
  [...row].forEach((v,ci)=>{
    if(v==='1'){
      const idx = realRow*7+ci;
      fillOrder.push(cells[ [...HEART_MAP.slice(0,realRow).join('')].filter(c=>c==='1').length + [...row.slice(0,ci)].filter(c=>c==='1').length ]);
    }
  });
});
let filled = 0;
const total = fillOrder.length;
const percentEl = document.getElementById('loading-percent');
const loadingInterval = setInterval(()=>{
  if(filled < total){
    if(fillOrder[filled]) fillOrder[filled].classList.add('on');
    filled++;
    percentEl.textContent = Math.round((filled/total)*100) + '%';
  } else {
    clearInterval(loadingInterval);
    setTimeout(()=>{
      document.getElementById('loading').classList.add('hidden');
    }, 500);
  }
}, 70);

/* ==================== timeline ==================== */
function milestonePhotos(m){
  const photos = Array.isArray(m.photos) ? m.photos.filter(Boolean) : [];
  if(m.photo && !photos.includes(m.photo)) photos.unshift(m.photo);
  return photos;
}

const tlEl = document.getElementById('timeline');
CONFIG.milestones.forEach((m,i)=>{
  const item = document.createElement('div');
  item.className = 'tl-item';
  const whoLabel = (i % 2 === 0) ? CONFIG.yourPhotoLabel : CONFIG.partnerPhotoLabel;
  const photoSet = milestonePhotos(m);
  const photoInner = photoSet.length
    ? `<div class="tl-photo-stack" data-photo-count="${photoSet.length}">
         ${photoSet.map((src, photoIndex) => `<img class="tl-photo-slide${photoIndex === 0 ? ' is-active' : ''}" src="${src}" alt="foto de ${whoLabel}${photoSet.length > 1 ? ` ${photoIndex + 1}` : ''}">`).join('')}
       </div>`
    : `<div class="tl-photo-placeholder">
         <span class="icon">📷</span>
         <span class="hint">cole aqui a foto<br>de ${whoLabel}</span>
       </div>`;
  item.innerHTML = `
    <div class="tl-dot"></div>
    <div class="tl-photo"><div class="tl-photo-inner">${photoInner}</div></div>
    <span class="tl-date">${m.date}</span>
    <h3 class="tl-title">${m.title || ''}</h3>
    <p class="tl-text">${m.text}</p>
    <span class="tl-signature">${m.signature || ''}</span>
  `;
  tlEl.appendChild(item);
});
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.3});
document.querySelectorAll('.tl-item').forEach(el=>observer.observe(el));

/* Com várias fotos no mesmo marco, elas trocam automaticamente enquanto
   aquele capítulo estiver visível. Assim dá tempo de ver 3+ fotos sem
   precisar continuar rolando a página. */
const TIMELINE_PHOTO_INTERVAL = 5000;
const timelinePhotoStates = new WeakMap();
const timelineItemsInView = new Set();

function setTimelinePhoto(item, index){
  const slides = [...item.querySelectorAll('.tl-photo-slide')];
  if(slides.length < 2) return;
  const safeIndex = ((index % slides.length) + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === safeIndex));
  const state = timelinePhotoStates.get(item) || {index:0, timer:null};
  state.index = safeIndex;
  timelinePhotoStates.set(item, state);
}

function stopTimelinePhotos(item){
  const state = timelinePhotoStates.get(item);
  if(!state?.timer) return;
  clearInterval(state.timer);
  state.timer = null;
}

function startTimelinePhotos(item){
  const slides = [...item.querySelectorAll('.tl-photo-slide')];
  if(slides.length < 2 || document.hidden) return;
  const state = timelinePhotoStates.get(item) || {index:0, timer:null};
  if(state.timer) return;
  timelinePhotoStates.set(item, state);
  state.timer = setInterval(() => {
    state.index = (state.index + 1) % slides.length;
    setTimelinePhoto(item, state.index);
  }, TIMELINE_PHOTO_INTERVAL);
}

const timelinePhotoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const item = entry.target;
    if(entry.isIntersecting){
      timelineItemsInView.add(item);
      startTimelinePhotos(item);
    } else {
      timelineItemsInView.delete(item);
      stopTimelinePhotos(item);
    }
  });
}, {threshold:.25});

document.querySelectorAll('.tl-item').forEach(item => {
  if(item.querySelectorAll('.tl-photo-slide').length > 1){
    timelinePhotoStates.set(item, {index:0, timer:null});
    timelinePhotoObserver.observe(item);
  }
});

document.addEventListener('visibilitychange', () => {
  if(document.hidden){
    timelineItemsInView.forEach(stopTimelinePhotos);
  } else {
    timelineItemsInView.forEach(startTimelinePhotos);
  }
});

/* ponto que desce pela linha do tempo, sincronizado com o 1º e o último marco */
const tlProgress = document.createElement('div');
tlProgress.className = 'tl-progress';
tlProgress.id = 'tlProgress';
tlEl.appendChild(tlProgress);

let firstDotTop = 0, lastDotTop = 0;
function measureDots(){
  const dots = tlEl.querySelectorAll('.tl-dot');
  if(!dots.length) return;
  const firstDot = dots[0];
  const lastDot = dots[dots.length - 1];
  firstDotTop = firstDot.offsetParent === tlEl
    ? firstDot.offsetTop
    : firstDot.closest('.tl-item').offsetTop + firstDot.offsetTop;
  lastDotTop = lastDot.offsetParent === tlEl
    ? lastDot.offsetTop
    : lastDot.closest('.tl-item').offsetTop + lastDot.offsetTop;
}

let tlTicking = false;
function updateTlProgress(){
  const rect = tlEl.getBoundingClientRect();
  const span = lastDotTop - firstDotTop;
  const viewportCenter = window.innerHeight * 0.5;
  let progress = (viewportCenter - rect.top - firstDotTop) / span;
  progress = Math.max(0, Math.min(1, progress));
  tlProgress.style.top = (firstDotTop + progress * span) + 'px';
  tlProgress.style.opacity = (rect.bottom < 0 || rect.top > window.innerHeight) ? '0' : '1';
  tlTicking = false;
}
window.addEventListener('scroll', ()=>{
  if(!tlTicking){
    requestAnimationFrame(updateTlProgress);
    tlTicking = true;
  }
}, {passive:true});
window.addEventListener('resize', ()=>{ measureDots(); updateTlProgress(); });
window.addEventListener('load', ()=>{ measureDots(); updateTlProgress(); });
measureDots();
updateTlProgress();

/* ==================== envelope -> carta ==================== */
const envelope = document.getElementById('envelope');
const envelopeHint = document.getElementById('envelope-hint');
const letterSection = document.getElementById('letter-section');
const letterCard = document.getElementById('letter-card');

function buildLetter(){
  const progressState=window.NosDoisProgress?.read?.()||{};
  const signedCopy={pt:['CONTRATO ASSINADO','Este capítulo já foi escolhido e assinado. Agora ele fica aqui para ser relido sempre que bater vontade de reviver esse momento.'],en:['CONTRACT SIGNED','This chapter has already been chosen and signed. It stays here so you can reread it whenever you want to revisit this moment.'],es:['CONTRATO FIRMADO','Este capítulo ya fue elegido y firmado. Se queda aquí para releerlo siempre que quieras volver a este momento.']}[currentLanguage]||['CONTRATO ASSINADO','Este capítulo já foi escolhido e assinado.'];
  letterCard.innerHTML = `
    <div class="letter-title">${CONFIG.letterTitle}</div>
    <div class="letter-sub">${CONFIG.letterSubtitle}</div>
    ${CONFIG.clauses.map(c=>`<p class="clause">${c}</p>`).join('')}
    <p class="signature-line">${CONFIG.signatureLine}</p>
    ${progressState.contractAccepted?`<div class="contract-signed-state"><span>${signedCopy[0]}</span><p>${signedCopy[1]}</p></div>`:`<div class="decision-row"><button class="btn btn-yes" id="btn-yes">${CONFIG.contractAccept || languageData(currentLanguage).accept}</button><button class="btn btn-no" id="btn-no">${languageData(currentLanguage).decline}</button></div>`}
  `;
  document.getElementById('btn-yes')?.addEventListener('click', onAccept);
  document.getElementById('btn-no')?.addEventListener('click', onDecline);
}

let opened = false;
envelope.addEventListener('click', ()=>{
  if(opened) return;
  opened = true;
  window.NosDoisProgress?.update?.({contractViewed:true});
  envelope.classList.add('open');
  envelopeHint.style.opacity = '0';
  setTimeout(()=>{
    buildLetter();
    letterSection.classList.add('shown');
    if(window.NosDoisProgress?.read?.().contractAccepted)revealPostContractContent(false);
    letterSection.scrollIntoView({behavior:'smooth'});
  }, 1000);
});

/* botão não: diminui a cada clique até sumir */
let noClicks = 0;
function onDecline(){
  noClicks++;
  const btn = document.getElementById('btn-no');
  const scale = Math.max(1 - noClicks*0.18, 0);
  btn.style.transform = `scale(${scale})`;
  btn.style.opacity = scale <= 0.05 ? '0' : String(scale);
  if(scale <= 0.05){
    btn.style.pointerEvents = 'none';
    btn.style.display = 'none';
  }
}

/* botão sim: revela vouchers + memórias */
function revealPostContractContent(scrollToVouchers=false){
  const vouchersSection=document.getElementById('vouchers-section');
  const bouquetSection=document.getElementById('bouquet-section');
  const loveNotesSection=document.getElementById('love-notes-section');
  [vouchersSection,bouquetSection,loveNotesSection].forEach((section,index)=>{if(!section)return;section.classList.add('shown');section.classList.remove('section-enter');section.style.setProperty('--section-delay',`${index*.12}s`);void section.offsetWidth;section.classList.add('section-enter');});
  buildVouchers();buildFlowers();prepareVoucherLayout();
  if(scrollToVouchers&&vouchersSection)setTimeout(()=>vouchersSection.scrollIntoView({behavior:'smooth',block:'start'}),760);
}
function onAccept(){
  const state=window.NosDoisProgress?.read?.()||{};
  if(state.contractAccepted){buildLetter();revealPostContractContent(false);return;}
  const signedAt=Date.now();
  const plan=state.plan||'namoro';
  const history=Array.isArray(state.contractHistory)?[...state.contractHistory]:[];
  if(!history.some(item=>item&&item.plan===plan&&item.signedAt===state.signedAt))history.push({plan,signedAt});
  window.NosDoisProgress?.update?.({contractAccepted:true,contractUnlocked:true,signedAt,contractHistory:history});
  burstHearts();
  buildLetter();
  revealPostContractContent(true);
}

function burstHearts(){
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight * 0.54;
  const burstChars = ['♥','♡','♥','❤'];

  for(let i=0;i<34;i++){
    const h = document.createElement('div');
    h.className = 'burst-heart burst';
    h.textContent = burstChars[Math.floor(Math.random()*burstChars.length)];
    const angle = (Math.PI * 2 * i) / 34 + (Math.random() * 0.28);
    const distance = 90 + Math.random() * 180;
    h.style.left = centerX + 'px';
    h.style.top = centerY + 'px';
    h.style.setProperty('--tx', `${Math.cos(angle) * distance}px`);
    h.style.setProperty('--ty', `${Math.sin(angle) * distance - 130}px`);
    h.style.setProperty('--rot', `${-40 + Math.random()*80}deg`);
    h.style.animationDelay = (Math.random() * 0.18) + 's';
    h.style.fontSize = (14 + Math.random()*18) + 'px';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(), 3200);
  }

  for(let i=0;i<22;i++){
    const h = document.createElement('div');
    h.className = 'burst-heart rain';
    h.textContent = i % 3 === 0 ? '♡' : '♥';
    h.style.left = (8 + Math.random()*84) + 'vw';
    h.style.top = (-8 - Math.random()*12) + 'vh';
    h.style.setProperty('--drift', `${-20 + Math.random()*40}px`);
    h.style.setProperty('--rot', `${-65 + Math.random()*130}deg`);
    h.style.animationDelay = (Math.random() * 0.55) + 's';
    h.style.fontSize = (10 + Math.random()*14) + 'px';
    document.body.appendChild(h);
    setTimeout(()=>h.remove(), 4300);
  }
}

/* ==================== vouchers ==================== */
let voucherBuilt = false;
let voucherCurrentIndex = 0;
let voucherAnimating = false;
let voucherAnimationTimer = 0;
let voucherTouchStartX = 0;
let voucherBaseCount = 0;

function buildVoucherIcon(v){
  if(v.image){
    return `<img src="${v.image}" alt="Ícone do voucher ${v.title}" onerror="this.style.display='none'; this.parentElement.classList.add('is-missing');"><div class="v-icon-placeholder v-icon-fallback">adicione
seu ícone</div>`;
  }
  return `<div class="v-icon-placeholder">adicione
seu ícone</div>`;
}

const VOUCHER_REDEEM_KEY='nosdois-voucher-redemptions';
function voucherRedeemCopy(){
  return ({
    pt:{button:'Resgatar voucher',redeemed:'Voucher resgatado',stamp:'RESGATADO',kicker:'RESGATE DE VOUCHER',confirm:'Confirmar resgate',cancel:'Ainda não',warning:'Ao confirmar o uso, este voucher será marcado como utilizado. Não há reembolso, estorno, devolução ou segunda via. Carinho adicional pode ser negociado diretamente com o administrador Raphael 😌',done:'Resgate confirmado ♥',doneText:'Este voucher agora faz parte do histórico oficial de benefícios utilizados.'},
    en:{button:'Redeem voucher',redeemed:'Voucher redeemed',stamp:'REDEEMED',kicker:'VOUCHER REDEMPTION',confirm:'Confirm redemption',cancel:'Not yet',warning:'Once confirmed, this voucher will be marked as used. There are no refunds, reversals, returns or replacement copies. Additional affection may be negotiated directly with administrator Raphael 😌',done:'Redemption confirmed ♥',doneText:'This voucher is now part of the official history of used benefits.'},
    es:{button:'Canjear voucher',redeemed:'Voucher canjeado',stamp:'CANJEADO',kicker:'CANJE DE VOUCHER',confirm:'Confirmar canje',cancel:'Todavía no',warning:'Al confirmar el uso, este voucher quedará marcado como utilizado. No hay reembolso, reversión, devolución ni segunda copia. El cariño adicional puede negociarse directamente con el administrador Raphael 😌',done:'Canje confirmado ♥',doneText:'Este voucher ahora forma parte del historial oficial de beneficios utilizados.'}
  })[currentLanguage]||({pt:{}}).pt;
}
function readVoucherRedemptions(){try{return JSON.parse(localStorage.getItem(VOUCHER_REDEEM_KEY)||'{}')}catch(e){return {}}}
function isVoucherRedeemed(code){return !!readVoucherRedemptions()[code]}
function saveVoucherRedemption(code){const state=readVoucherRedemptions();state[code]={redeemed:true,at:Date.now()};try{localStorage.setItem(VOUCHER_REDEEM_KEY,JSON.stringify(state))}catch(e){}updateVoucherRedemptionState();}
function updateVoucherRedemptionState(){
  const rc=voucherRedeemCopy();
  document.querySelectorAll('.voucher[data-voucher-code]').forEach(card=>{
    const used=isVoucherRedeemed(card.dataset.voucherCode);
    card.classList.toggle('is-redeemed',used);
    if(used)card.classList.remove('redeem-ready');
    const btn=card.querySelector('.v-redeem-btn');if(btn){btn.disabled=used;btn.textContent=used?rc.redeemed:rc.button;}
    const stamp=card.querySelector('.v-redeemed-stamp');if(stamp)stamp.textContent=rc.stamp;
  });
  syncVoucherRedeemLayout?.();
}
function ensureVoucherRedeemModal(){
  let modal=document.getElementById('voucher-redeem-modal');if(modal)return modal;
  modal=document.createElement('div');modal.id='voucher-redeem-modal';modal.className='voucher-redeem-backdrop';modal.setAttribute('aria-hidden','true');
  modal.innerHTML='<article class="voucher-redeem-modal" role="dialog" aria-modal="true"><button class="voucher-redeem-close" type="button" aria-label="Fechar">×</button><span class="voucher-redeem-kicker"></span><h2 class="voucher-redeem-title"></h2><p class="voucher-redeem-desc"></p><div class="voucher-redeem-warning"></div><div class="voucher-redeem-actions"><button class="voucher-redeem-confirm" type="button"></button><button class="voucher-redeem-cancel" type="button"></button></div></article>';
  document.body.appendChild(modal);
  const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('voucher-redeem-open');};
  modal.querySelector('.voucher-redeem-close').addEventListener('click',close);modal.querySelector('.voucher-redeem-cancel').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});
  modal._closeVoucherRedeem=close;return modal;
}
function tinyVoucherHeartBurst(){for(let i=0;i<22;i++){const h=document.createElement('span');h.className='voucher-redeem-heart';h.textContent=i%5?'♥':'♡';h.style.left=(30+Math.random()*40)+'vw';h.style.top=(38+Math.random()*25)+'vh';h.style.setProperty('--vx',`${-120+Math.random()*240}px`);h.style.setProperty('--vy',`${-120-Math.random()*220}px`);document.body.appendChild(h);setTimeout(()=>h.remove(),1800)}}
function openVoucherRedeemModal(v){
  const modal=ensureVoucherRedeemModal(),rc=voucherRedeemCopy();
  const actions=modal.querySelector('.voucher-redeem-actions');
  const warning=modal.querySelector('.voucher-redeem-warning');
  actions.classList.remove('is-done');
  warning.hidden=false;
  actions.innerHTML='<button class="voucher-redeem-confirm" type="button"></button><button class="voucher-redeem-cancel" type="button"></button>';
  modal.querySelector('.voucher-redeem-cancel').onclick=modal._closeVoucherRedeem;
  modal.querySelector('.voucher-redeem-kicker').textContent=rc.kicker;
  modal.querySelector('.voucher-redeem-title').textContent=v.title;
  modal.querySelector('.voucher-redeem-desc').textContent=v.desc;
  modal.querySelector('.voucher-redeem-warning').textContent=rc.warning;
  const confirm=modal.querySelector('.voucher-redeem-confirm');confirm.textContent=isVoucherRedeemed(v.code)?rc.redeemed:rc.confirm;confirm.disabled=isVoucherRedeemed(v.code);
  modal.querySelector('.voucher-redeem-cancel').textContent=rc.cancel;
  confirm.onclick=()=>{if(isVoucherRedeemed(v.code))return;saveVoucherRedemption(v.code);tinyVoucherHeartBurst();modal.querySelector('.voucher-redeem-kicker').textContent=rc.done;modal.querySelector('.voucher-redeem-title').textContent=v.title;modal.querySelector('.voucher-redeem-desc').textContent=rc.doneText;warning.textContent='';warning.hidden=true;actions.classList.add('is-done');actions.innerHTML=`<button class="voucher-redeem-confirm" type="button">OK ♥</button>`;modal.querySelector('.voucher-redeem-confirm').onclick=modal._closeVoucherRedeem;};
  modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('voucher-redeem-open');
}

function voucherMarkup(v){
  const pack = languageData(currentLanguage);
  return `
    <article class="voucher" data-voucher-code="${v.code || 'VC-000'}">
      <div class="voucher-inner">
        <div class="v-face v-front">
          <div class="v-media">
            <div class="v-icon-box${v.image ? ' has-image' : ''}">${buildVoucherIcon(v)}</div>
          </div>
          <div class="v-content">
            <div class="v-stub">${pack.voucherTiny} · ${v.code || 'VC-000'}</div>
            <div class="v-title">${v.title}</div>
            <div class="v-tagline">${v.tagline}</div>
          </div>
        </div>
        <div class="v-face v-back">
          <div class="v-content">
            <div class="v-stub">${pack.voucherDetails}</div>
            <div class="v-title">${v.title}</div>
            <div class="v-tagline">${v.desc}</div>
            <div class="v-code-wrap">
              <div class="v-barcode" aria-hidden="true"></div>
              <div class="v-number">${binaryVoucherCode(v.code)}<br>${pack.voucherValidity}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="v-redeem-zone"><button class="v-redeem-btn" type="button">${voucherRedeemCopy().button}</button><span class="v-redeemed-stamp">${voucherRedeemCopy().stamp}</span></div>
    </article>
  `;
}

function getVoucherRealIndex(){
  if(!voucherBaseCount) return 0;
  return ((voucherCurrentIndex % voucherBaseCount) + voucherBaseCount) % voucherBaseCount;
}

function updateVoucherState(){
  const slides = [...document.querySelectorAll('#voucher-track .voucher-card')];
  slides.forEach((slide,index)=>{
    slide.classList.remove('is-active','is-prev','is-next');
    if(index===voucherCurrentIndex) slide.classList.add('is-active');
    if(index===voucherCurrentIndex-1) slide.classList.add('is-prev');
    if(index===voucherCurrentIndex+1) slide.classList.add('is-next');
  });
}

function syncVoucherLayout(){
  const viewport = document.getElementById('voucher-viewport');
  const carousel = document.getElementById('voucher-carousel');
  if(!viewport || !carousel) return false;

  const outerWidth = carousel.clientWidth;
  if(outerWidth < 40) return false;

  let visibleCount = 3;
  if(outerWidth <= 720) visibleCount = 1;
  else if(outerWidth <= 1040) visibleCount = 2;

  const compactSingle = visibleCount === 1;
  const gap = compactSingle ? 0 : 26;
  const horizontalInset = compactSingle ? 0 : 12;
  const rawWidth = Math.floor((outerWidth - horizontalInset*2 - gap*(visibleCount-1)) / visibleCount);
  const minWidth = compactSingle ? 250 : (visibleCount === 2 ? 230 : 220);
  const maxWidth = compactSingle ? 320 : (visibleCount === 2 ? 290 : 290);
  const cardWidth = Math.max(minWidth, Math.min(maxWidth, rawWidth));
  const stageWidth = cardWidth * visibleCount + gap * (visibleCount - 1);

  carousel.style.setProperty('--voucher-card-width', `${cardWidth}px`);
  carousel.style.setProperty('--voucher-gap', `${gap}px`);
  carousel.style.setProperty('--voucher-stage-width', `${Math.min(stageWidth, outerWidth)}px`);
  carousel.classList.toggle('compact-single', compactSingle);
  return true;
}

function setVoucherTrackPosition(animated=true){
  const viewport = document.getElementById('voucher-viewport');
  const track = document.getElementById('voucher-track');
  const slides = track.children;
  const currentSlide = slides[voucherCurrentIndex];
  if(!currentSlide || !syncVoucherLayout()) return false;

  track.style.transition = animated ? 'transform .56s cubic-bezier(.22,1,.36,1)' : 'none';
  const slideCenter = currentSlide.offsetLeft + currentSlide.offsetWidth/2;
  const viewportCenter = viewport.clientWidth/2;
  track.style.transform = `translate3d(${viewportCenter-slideCenter}px,0,0)`;
  updateVoucherState();

  if(!animated){
    requestAnimationFrame(()=>{track.style.transition='transform .56s cubic-bezier(.22,1,.36,1)';});
  }
  return true;
}

function prepareVoucherLayout(){
  const carousel = document.getElementById('voucher-carousel');
  if(!carousel) return;

  carousel.classList.remove('is-ready');
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      if(setVoucherTrackPosition(false)){
        carousel.classList.add('is-ready');
      } else {
        setTimeout(()=>{ if(setVoucherTrackPosition(false)) carousel.classList.add('is-ready'); }, 60);
      }
    });
  });
}

function pulseVoucherArrow(direction){
  const target = document.getElementById(direction<0?'voucher-prev':'voucher-next');
  if(!target) return;
  target.classList.remove('is-pulsing');
  void target.offsetWidth;
  target.classList.add('is-pulsing');
  setTimeout(()=>target.classList.remove('is-pulsing'),360);
}

function syncVoucherRedeemLayout(){
  const carousel=document.getElementById('voucher-carousel');
  const active=document.querySelector('#voucher-track .voucher-card.is-active .voucher');
  carousel?.classList.toggle('has-redeem-active',!!active&&(active.classList.contains('redeem-ready')||(active.classList.contains('is-redeemed')&&active.classList.contains('flipped'))));
}
function resetVoucherReveal(){
  document.querySelectorAll('#voucher-track .voucher').forEach(card=>{
    card.classList.remove('flipped','redeem-ready');
  });
  syncVoucherRedeemLayout();
}

function moveVoucher(direction){
  if(voucherAnimating) return;
  pulseVoucherArrow(direction);
  voucherAnimating=true;
  resetVoucherReveal();
  voucherCurrentIndex += direction;
  const moved=setVoucherTrackPosition(true);
  clearTimeout(voucherAnimationTimer);
  voucherAnimationTimer=setTimeout(()=>{normalizeVoucherLoop();updateVoucherState();voucherAnimating=false;},680);
  if(!moved){voucherAnimating=false;clearTimeout(voucherAnimationTimer);}
}

function normalizeVoucherLoop(){
  if(!voucherBaseCount) return;
  if(voucherCurrentIndex < voucherBaseCount){
    voucherCurrentIndex += voucherBaseCount;
    setVoucherTrackPosition(false);
  } else if(voucherCurrentIndex >= voucherBaseCount * 2){
    voucherCurrentIndex -= voucherBaseCount;
    setVoucherTrackPosition(false);
  }
}

function handleVoucherLoop(event){
  if(event && event.target!==event.currentTarget) return;
  clearTimeout(voucherAnimationTimer);
  normalizeVoucherLoop();
  updateVoucherState();
  voucherAnimating=false;
}

function buildVouchers(){
  if(voucherBuilt) return;
  voucherBuilt=true;
  const track=document.getElementById('voucher-track');
  const vouchers=CONFIG.vouchers;
  voucherBaseCount = vouchers.length;
  voucherCurrentIndex = voucherBaseCount;
  const looped=[...vouchers, ...vouchers, ...vouchers];

  looped.forEach((voucherData,index)=>{
    const slide=document.createElement('div');
    slide.className='voucher-card';
    slide.dataset.index=index;
    slide.innerHTML=voucherMarkup(voucherData);
    const card=slide.querySelector('.voucher');
    const redeemButton=card.querySelector('.v-redeem-btn');
    redeemButton?.addEventListener('click',event=>{event.stopPropagation();if(!isVoucherRedeemed(voucherData.code))openVoucherRedeemModal(voucherData);});
    card.addEventListener('click',event=>{
      if(event.target.closest('.v-redeem-btn'))return;
      const clickedIndex=Number(slide.dataset.index);
      if(clickedIndex!==voucherCurrentIndex){
        if(voucherAnimating) return;
        voucherAnimating=true;
        resetVoucherReveal();
        voucherCurrentIndex=clickedIndex;
        const moved=setVoucherTrackPosition(true);
        clearTimeout(voucherAnimationTimer);
        voucherAnimationTimer=setTimeout(()=>{normalizeVoucherLoop();updateVoucherState();voucherAnimating=false;},680);
        if(!moved){voucherAnimating=false;clearTimeout(voucherAnimationTimer);}
        return;
      }
      if(!card.classList.contains('flipped')){
        card.classList.add('flipped');
        if(!card.classList.contains('is-redeemed'))card.classList.add('redeem-ready');
        syncVoucherRedeemLayout();
        return;
      }
      if(!card.classList.contains('is-redeemed'))card.classList.remove('flipped','redeem-ready');
      else card.classList.remove('flipped');
      syncVoucherRedeemLayout();
    });
    track.appendChild(slide);
  });

  updateVoucherState();
  updateVoucherRedemptionState();
  document.getElementById('voucher-prev').addEventListener('click',()=>moveVoucher(-1));
  document.getElementById('voucher-next').addEventListener('click',()=>moveVoucher(1));
  track.addEventListener('transitionend',handleVoucherLoop);

  const viewport=document.getElementById('voucher-viewport');
  let pointerStartX=0;
  let pointerActive=false;
  if('PointerEvent' in window){
    viewport.addEventListener('pointerdown',(event)=>{
      // Mouse usa clique normal no ticket. Capturar o ponteiro aqui roubava o click do voucher no desktop.
      if(event.pointerType==='mouse')return;
      pointerActive=true;pointerStartX=event.clientX;
      try{viewport.setPointerCapture(event.pointerId)}catch(e){}
    });
    viewport.addEventListener('pointerup',(event)=>{
      if(event.pointerType==='mouse'||!pointerActive)return;
      const diff=event.clientX-pointerStartX;pointerActive=false;
      try{viewport.releasePointerCapture(event.pointerId)}catch(e){}
      if(Math.abs(diff)<44)return;moveVoucher(diff>0?-1:1);
    });
    viewport.addEventListener('pointercancel',event=>{if(event.pointerType!=='mouse')pointerActive=false;});
  }else{
    viewport.addEventListener('touchstart',(event)=>{voucherTouchStartX=event.changedTouches[0].clientX;},{passive:true});
    viewport.addEventListener('touchend',(event)=>{const diff=event.changedTouches[0].clientX-voucherTouchStartX;if(Math.abs(diff)<44)return;moveVoucher(diff>0?-1:1);},{passive:true});
  }

  let voucherResizeFrame = 0;
  const refreshVoucherLayout = ()=>{
    cancelAnimationFrame(voucherResizeFrame);
    voucherResizeFrame = requestAnimationFrame(()=>setVoucherTrackPosition(false));
  };
  window.addEventListener('resize', refreshVoucherLayout);

  if('ResizeObserver' in window){
    const voucherResizeObserver = new ResizeObserver(()=>{
      if(document.getElementById('vouchers-section').classList.contains('shown')) refreshVoucherLayout();
    });
    voucherResizeObserver.observe(document.getElementById('voucher-carousel'));
  }
}

/* ==================== buquê ==================== */
function buildFlowers(){
  const wrap = document.getElementById('flowers');
  if(wrap.childElementCount) return;

  const photos = CONFIG.bouquetPhotos && CONFIG.bouquetPhotos.length ? CONFIG.bouquetPhotos : ["", "", ""];
  const pack = languageData(currentLanguage);
  const cards = [
    { cls: 'main', label: pack.bouquetLabels[0], photo: photos[0] || milestonePhotos(CONFIG.milestones[4] || {})[0] || '' },
    { cls: 'left', label: pack.bouquetLabels[1], photo: photos[1] || milestonePhotos(CONFIG.milestones[1] || {})[0] || '' },
    { cls: 'right', label: pack.bouquetLabels[2], photo: photos[2] || milestonePhotos(CONFIG.milestones[0] || {})[0] || '' }
  ];

  cards.forEach(card => {
    const photoInner = card.photo
      ? `<img src="${card.photo}" alt="${card.label}">`
      : `<div class="photo-card-placeholder"><span class="icon">📷</span><span class="hint">${pack.bouquetPlaceholder}</span></div>`;

    const el = document.createElement('div');
    el.className = `memory-photo ${card.cls}`;
    el.innerHTML = `
      <div class="tl-photo-inner">${photoInner}</div>
      <div class="memory-caption">${card.label}</div>
    `;
    wrap.appendChild(el);
  });
}

/* ==================== Player local ==================== */
const audioPlayers = [
  document.getElementById('site-audio-a'),
  document.getElementById('site-audio-b')
];
const musicControl = document.getElementById('music-control');
const musicMiniPlayer = document.getElementById('music-mini-player');
const musicCurrentTitle = document.getElementById('music-current-title');
const musicMenuList = document.getElementById('music-menu-list');
const musicMenu = document.getElementById('music-menu');
const musicMenuClose = document.getElementById('music-menu-close');
const musicMenuPlaceholder = musicMenu ? document.createComment('music-menu-home') : null;
if(musicMenu && musicMenuPlaceholder) musicMenu.parentNode?.insertBefore(musicMenuPlaceholder, musicMenu);
const musicMenuLabel = document.getElementById('music-menu-label');
const musicPlayerStatus = document.getElementById('music-player-status');
const MUSIC_CROSSFADE_SECONDS = 4;
const MUSIC_MANUAL_FADE_SECONDS = 1.8;
const musicTouchQuery = window.matchMedia('(max-width:900px), (hover:none), (pointer:coarse)');
const PLAYER_STATE_KEY = 'nosdois-player-state';
function readSavedPlayerState(){
  try{ return JSON.parse(localStorage.getItem(PLAYER_STATE_KEY) || 'null'); }catch(e){ return null; }
}
let savedPlayerState = readSavedPlayerState();
let restoredPlayerTime = savedPlayerState && Number.isFinite(savedPlayerState.currentTime) ? Math.max(0, savedPlayerState.currentTime) : 0;
let lastPlayerStateSave = 0;
function savePlayerState(force=false){
  const now = Date.now();
  if(!force && now - lastPlayerStateSave < 900) return;
  lastPlayerStateSave = now;
  const audio = audioPlayers[activeAudioIndex];
  const state = {
    trackIndex: currentTrackIndex,
    currentTime: audio && Number.isFinite(audio.currentTime) ? audio.currentTime : 0,
    isPlaying: musicIsPlaying,
    updatedAt: now,
    shuffleBag,
    playHistory
  };
  try{ localStorage.setItem(PLAYER_STATE_KEY, JSON.stringify(state)); }catch(e){}
}
function restorePlayerPosition(audio, time){
  if(!audio || !time) return;
  const apply = () => { try{ if(Number.isFinite(audio.duration) && time < audio.duration) audio.currentTime = time; }catch(e){} };
  if(audio.readyState >= 1) apply(); else audio.addEventListener('loadedmetadata', apply, {once:true});
}

let musicIsPlaying = false;
let currentTrackIndex = 0;
let activeAudioIndex = 0;
let crossfadeInProgress = false;
let crossfadeFrame = null;
let queuedNextTrackIndex = null;
let shuffleBag = [];
let playHistory = [];
let failedTrackIndexes = new Set();

function cleanTrackName(value=''){
  return String(value)
    .replace(/^.*[\\/]/, '')
    .replace(/\.(mp3|m4a|aac|wav|ogg|flac)$/i, '')
    .trim();
}

function trackDisplayTitle(track){
  return cleanTrackName(track?.title || track?.src || 'Faixa');
}

function currentTrack(){
  return CONFIG.localPlaylist[currentTrackIndex] || CONFIG.localPlaylist[0];
}

function activeAudio(){ return audioPlayers[activeAudioIndex]; }
function standbyAudio(){ return audioPlayers[1 - activeAudioIndex]; }

function normalizeTrackIndex(index){
  const total = CONFIG.localPlaylist.length;
  return total ? (index % total + total) % total : 0;
}

function randomItem(items){
  return items[Math.floor(Math.random() * items.length)];
}

function trackMood(index){
  return CONFIG.localPlaylist[index]?.mood || 'warm';
}

function refillShuffleBag(){
  const total = CONFIG.localPlaylist.length;
  shuffleBag = Array.from({length: total}, (_, index) => index)
    .filter(index => index !== currentTrackIndex && !failedTrackIndexes.has(index));
}

function chooseSmartShuffleIndex(){
  if(!CONFIG.localPlaylist.length) return 0;
  if(!shuffleBag.length) refillShuffleBag();

  let candidates = shuffleBag.filter(index => index !== currentTrackIndex && !failedTrackIndexes.has(index));
  if(!candidates.length){
    refillShuffleBag();
    candidates = [...shuffleBag];
  }
  if(!candidates.length) return currentTrackIndex;

  const last = playHistory.at(-1);
  const previous = playHistory.at(-2);
  const lastMood = Number.isInteger(last) ? trackMood(last) : trackMood(currentTrackIndex);
  const previousMood = Number.isInteger(previous) ? trackMood(previous) : null;

  // Evita duas faixas muito melancólicas/intensas coladas e evita três climas iguais seguidos.
  let preferred = candidates.filter(index => {
    const mood = trackMood(index);
    if((lastMood === 'melancholy' || lastMood === 'intense') && mood === lastMood) return false;
    if(previousMood && previousMood === lastMood && mood === lastMood) return false;
    return true;
  });

  // Se o filtro ficar restritivo demais, volta ao conjunto completo do ciclo.
  if(!preferred.length) preferred = candidates;
  return randomItem(preferred);
}

function consumeFromShuffleBag(index){
  shuffleBag = shuffleBag.filter(item => item !== index);
  if(queuedNextTrackIndex === index) queuedNextTrackIndex = null;
}

function registerPlayedTrack(index){
  consumeFromShuffleBag(index);
  playHistory.push(index);
  if(playHistory.length > 5) playHistory.shift();
  savePlayerState(true);
}

function markTrackUnavailable(index){
  if(!Number.isInteger(index)) return;
  failedTrackIndexes.add(index);
  consumeFromShuffleBag(index);
  if(queuedNextTrackIndex === index) queuedNextTrackIndex = null;
}

function setAudioTrack(audio, trackIndex, resetTime=true){
  const normalized = normalizeTrackIndex(trackIndex);
  const track = CONFIG.localPlaylist[normalized];
  if(!audio || !track) return;
  const previousIndex = Number(audio.dataset.trackIndex);
  if(previousIndex !== normalized || !audio.getAttribute('src')){
    audio.src = track.src;
    audio.dataset.trackIndex = String(normalized);
    audio.load();
  }
  if(resetTime){
    try{ audio.currentTime = 0; }catch(e){}
  }
}

function updateMusicAccessibility(){
  if(!musicControl || !CONFIG.localPlaylist.length) return;
  const pack = languageData(currentLanguage);
  const track = currentTrack();
  const title = trackDisplayTitle(track);
  const label = musicIsPlaying ? pack.nav.pausePlaylist : pack.nav.playPlaylist;
  musicControl.setAttribute('aria-label', `${label}: ${title}`);
  musicControl.title = track.artist ? `${title}, ${track.artist}` : title;
  if(musicCurrentTitle) musicCurrentTitle.textContent = title;
  if(musicMenuLabel) musicMenuLabel.textContent = pack.nav.playlist;
  if(musicPlayerStatus){
    musicPlayerStatus.textContent = musicIsPlaying
      ? `${title}${track.artist ? ` · ${track.artist}` : ''} · aleatório sem repetição`
      : `${CONFIG.localPlaylist.length} faixas · aleatório sem repetição · crossfade ${MUSIC_CROSSFADE_SECONDS}s`;
  }
  renderMusicMenu();
}

function setMusicPlaying(isPlaying){
  musicIsPlaying = Boolean(isPlaying);
  musicControl?.classList.toggle('playing', musicIsPlaying);
  musicMiniPlayer?.classList.toggle('playing', musicIsPlaying);
  updateMusicAccessibility();
  savePlayerState(true);
}

function renderMusicMenu(){
  if(!musicMenuList) return;
  musicMenuList.innerHTML = CONFIG.localPlaylist.map((track, index) => {
    const title = trackDisplayTitle(track);
    const artist = track.artist || '';
    const unavailable = failedTrackIndexes.has(index);
    return `
      <button class="music-track-option ${index === currentTrackIndex ? 'active' : ''}" type="button" data-track-index="${index}" aria-label="Tocar ${title}" ${unavailable ? 'data-unavailable="true"' : ''}>
        <span class="music-track-index">${String(index + 1).padStart(2,'0')}</span>
        <span class="music-track-copy">
          <span class="music-track-title">${title}</span>
          ${artist ? `<span class="music-track-artist">${artist}</span>` : ''}
        </span>
        <span class="music-track-playing" aria-hidden="true">${unavailable ? '×' : '♪'}</span>
      </button>`;
  }).join('');
}

function stopCrossfadeAnimation(){
  if(crossfadeFrame){
    cancelAnimationFrame(crossfadeFrame);
    crossfadeFrame = null;
  }
  crossfadeInProgress = false;
}

function pauseAllMusic(){
  stopCrossfadeAnimation();
  audioPlayers.forEach((audio, index) => {
    if(!audio) return;
    audio.pause();
    audio.volume = index === activeAudioIndex ? 1 : 0;
    if(index !== activeAudioIndex){
      try{ audio.currentTime = 0; }catch(e){}
    }
  });
  setMusicPlaying(false);
}

function nextAutomaticTrackIndex(){
  if(queuedNextTrackIndex !== null && !failedTrackIndexes.has(queuedNextTrackIndex)){
    return queuedNextTrackIndex;
  }
  queuedNextTrackIndex = chooseSmartShuffleIndex();
  return queuedNextTrackIndex;
}

function prepareNextTrack(){
  if(!CONFIG.localPlaylist.length || crossfadeInProgress) return;
  const nextIndex = nextAutomaticTrackIndex();
  if(nextIndex === currentTrackIndex) return;
  const standby = standbyAudio();
  setAudioTrack(standby, nextIndex, true);
  standby.volume = 0;
}

async function fadeToTrack(nextIndex, seconds=MUSIC_CROSSFADE_SECONDS, manual=false){
  if(!CONFIG.localPlaylist.length || crossfadeInProgress) return false;
  const normalizedNext = normalizeTrackIndex(nextIndex);
  if(normalizedNext === currentTrackIndex) return true;

  const from = activeAudio();
  const to = standbyAudio();
  setAudioTrack(to, normalizedNext, true);
  to.volume = 0;

  try{
    await to.play();
  }catch(error){
    console.warn('Não foi possível iniciar a próxima faixa:', error);
    markTrackUnavailable(normalizedNext);
    if(musicPlayerStatus){
      musicPlayerStatus.textContent = `Não encontrei ${trackDisplayTitle(CONFIG.localPlaylist[normalizedNext])}. Confira music/music-${String(normalizedNext + 1).padStart(2,'0')}.mp3`;
    }
    if(!manual){
      queuedNextTrackIndex = null;
      prepareNextTrack();
    }
    renderMusicMenu();
    return false;
  }

  crossfadeInProgress = true;
  const duration = Math.max(.25, seconds) * 1000;
  const started = performance.now();

  const step = now => {
    const progress = Math.min(1, (now - started) / duration);
    // Curva "equal power" aproximada: a troca fica mais natural que um fade linear.
    const fromGain = Math.cos(progress * Math.PI * .5);
    const toGain = Math.sin(progress * Math.PI * .5);
    from.volume = Math.max(0, Math.min(1, fromGain));
    to.volume = Math.max(0, Math.min(1, toGain));

    if(progress < 1){
      crossfadeFrame = requestAnimationFrame(step);
      return;
    }

    from.pause();
    try{ from.currentTime = 0; }catch(e){}
    from.volume = 0;
    to.volume = 1;
    activeAudioIndex = 1 - activeAudioIndex;
    currentTrackIndex = normalizedNext;
    registerPlayedTrack(normalizedNext);
    queuedNextTrackIndex = null;
    crossfadeFrame = null;
    crossfadeInProgress = false;
    setMusicPlaying(true);
    prepareNextTrack();
  };

  crossfadeFrame = requestAnimationFrame(step);
  return true;
}

async function startCurrentTrack(attempt=0){
  if(!CONFIG.localPlaylist.length) return;
  const audio = activeAudio();
  setAudioTrack(audio, currentTrackIndex, false);
  audio.volume = 1;

  try{
    await audio.play();
    failedTrackIndexes.delete(currentTrackIndex);
    if(!playHistory.length || playHistory.at(-1) !== currentTrackIndex){
      registerPlayedTrack(currentTrackIndex);
    }
    setMusicPlaying(true);
    prepareNextTrack();
  }catch(error){
    markTrackUnavailable(currentTrackIndex);
    console.warn('Não foi possível iniciar o áudio:', error);

    // Se algum arquivo ainda não foi colocado na pasta, procura outra faixa do ciclo.
    if(attempt < CONFIG.localPlaylist.length - 1){
      const fallback = chooseSmartShuffleIndex();
      if(fallback !== currentTrackIndex){
        currentTrackIndex = fallback;
        setAudioTrack(audio, currentTrackIndex, true);
        updateMusicAccessibility();
        return startCurrentTrack(attempt + 1);
      }
    }

    setMusicPlaying(false);
    if(musicPlayerStatus){
      musicPlayerStatus.textContent = 'Não encontrei os áudios. Confira se music-01.mp3 até music-16.mp3 estão dentro da pasta music/.';
    }
  }
}

async function selectMusicTrack(index){
  const nextIndex = normalizeTrackIndex(index);
  if(nextIndex === currentTrackIndex){
    if(activeAudio().paused) await startCurrentTrack();
    return;
  }

  failedTrackIndexes.delete(nextIndex);
  queuedNextTrackIndex = null;

  if(musicIsPlaying && !activeAudio().paused){
    await fadeToTrack(nextIndex, MUSIC_MANUAL_FADE_SECONDS, true);
  }else{
    stopCrossfadeAnimation();
    audioPlayers.forEach((audio, idx) => {
      audio.pause();
      audio.volume = idx === activeAudioIndex ? 1 : 0;
    });
    currentTrackIndex = nextIndex;
    setAudioTrack(activeAudio(), currentTrackIndex, true);
    updateMusicAccessibility();
    await startCurrentTrack();
  }
}


function setMusicMenuExpanded(open){
  musicControl?.setAttribute('aria-expanded', open ? 'true' : 'false');
}
function openMobileMusicMenu(){
  if(!musicMenu || !musicMiniPlayer) return;
  if(musicMenu.parentNode !== document.body) document.body.appendChild(musicMenu);
  musicMiniPlayer.classList.add('menu-open');
  musicMenu.classList.add('is-mobile-open');
  document.body.classList.add('music-menu-modal-open');
  setMusicMenuExpanded(true);
  requestAnimationFrame(()=>{
    const activeOption=musicMenu.querySelector('.music-track-option.active');
    if(activeOption) activeOption.scrollIntoView({block:'center'});
  });
}
function closeMobileMusicMenu({restoreFocus=false}={}){
  if(!musicMenu || !musicMiniPlayer) return;
  musicMiniPlayer.classList.remove('menu-open');
  musicMenu.classList.remove('is-mobile-open');
  document.body.classList.remove('music-menu-modal-open');
  setMusicMenuExpanded(false);
  if(musicMenuPlaceholder?.parentNode && musicMenu.parentNode===document.body){
    musicMenuPlaceholder.parentNode.insertBefore(musicMenu, musicMenuPlaceholder.nextSibling);
  }
  if(restoreFocus) musicControl?.focus({preventScroll:true});
}
setMusicMenuExpanded(false);
musicControl?.setAttribute('aria-controls','music-menu');

musicControl?.addEventListener('click', async event => {
  // No celular não existe hover: um toque também mantém a lista aberta,
  // e ela fecha apenas ao tocar fora do player.
  if(musicTouchQuery.matches){
    openMobileMusicMenu();
    event.stopPropagation();
  }

  if(musicIsPlaying && !activeAudio().paused){
    pauseAllMusic();
  }else{
    await startCurrentTrack();
  }
});

musicMenuList?.addEventListener('click', async event => {
  const option = event.target.closest('.music-track-option');
  if(!option) return;
  event.stopPropagation();
  await selectMusicTrack(Number(option.dataset.trackIndex));
});

document.addEventListener('click', event => {
  if(!event.target.closest('.music-mini-player') && !event.target.closest('#music-menu')){
    closeMobileMusicMenu();
  }
});

musicTouchQuery.addEventListener?.('change', event => {
  if(!event.matches) closeMobileMusicMenu();
});

musicMenuClose?.addEventListener('click', event => { event.stopPropagation(); closeMobileMusicMenu({restoreFocus:true}); });
document.addEventListener('keydown', event => { if(event.key==='Escape' && musicMenu?.classList.contains('is-mobile-open')) closeMobileMusicMenu({restoreFocus:true}); });

audioPlayers.forEach((audio, index) => {
  audio.addEventListener('timeupdate', () => {
    if(index !== activeAudioIndex || crossfadeInProgress || audio.paused) return;
    savePlayerState(false);
    if(!Number.isFinite(audio.duration) || audio.duration <= MUSIC_CROSSFADE_SECONDS + 1) return;
    const remaining = audio.duration - audio.currentTime;
    if(remaining <= MUSIC_CROSSFADE_SECONDS){
      fadeToTrack(nextAutomaticTrackIndex(), MUSIC_CROSSFADE_SECONDS, false);
    }
  });

  audio.addEventListener('ended', () => {
    if(index !== activeAudioIndex || crossfadeInProgress) return;
    // Fallback caso o navegador não tenha disparado o crossfade a tempo.
    fadeToTrack(nextAutomaticTrackIndex(), .45, false);
  });

  audio.addEventListener('error', () => {
    const failedIndex = Number(audio.dataset.trackIndex);
    if(Number.isInteger(failedIndex)) markTrackUnavailable(failedIndex);

    if(index === activeAudioIndex){
      musicControl.title = 'Arquivo de música não encontrado';
    }else if(failedIndex === queuedNextTrackIndex){
      queuedNextTrackIndex = null;
      prepareNextTrack();
    }
    renderMusicMenu();
  });
});

// Cada abertura do site começa em uma faixa diferente. Depois, o "saco" do shuffle
// garante que nenhuma música se repita automaticamente antes das demais passarem.
if(CONFIG.localPlaylist.length){
  if(savedPlayerState && Number.isInteger(savedPlayerState.trackIndex)){
    currentTrackIndex = normalizeTrackIndex(savedPlayerState.trackIndex);
    if(Array.isArray(savedPlayerState.shuffleBag)) shuffleBag = savedPlayerState.shuffleBag.filter(Number.isInteger);
    if(Array.isArray(savedPlayerState.playHistory)) playHistory = savedPlayerState.playHistory.filter(Number.isInteger).slice(-5);
  }else{
    currentTrackIndex = Math.floor(Math.random() * CONFIG.localPlaylist.length);
  }
  if(!shuffleBag.length) refillShuffleBag();
  setAudioTrack(activeAudio(), currentTrackIndex, false);
  restorePlayerPosition(activeAudio(), restoredPlayerTime);
  updateMusicAccessibility();
  prepareNextTrack();
  if(savedPlayerState?.isPlaying && Date.now() - (savedPlayerState.updatedAt || 0) < 20000){
    setTimeout(() => startCurrentTrack(), 120);
  }
}
window.addEventListener('pagehide', () => savePlayerState(true));

/* ==================== hotbar + idiomas ==================== */
const storyDropdown = document.getElementById('story-dropdown');
const storyDropdownBtn = document.getElementById('nav-story-btn');
const langSwitcher = document.getElementById('lang-switcher');
const langCurrentBtn = document.getElementById('lang-current');
const hotbarMenuToggle = document.getElementById('hotbar-menu-toggle');
const hotbarMobilePanel = document.getElementById('hotbar-mobile-panel');

function closeHotbarPopovers(){
  storyDropdown.classList.remove('open');
  storyDropdownBtn.setAttribute('aria-expanded','false');
  langSwitcher.classList.remove('open');
  langCurrentBtn.setAttribute('aria-expanded','false');
}

storyDropdownBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  const open = !storyDropdown.classList.contains('open');
  closeHotbarPopovers();
  storyDropdown.classList.toggle('open', open);
  storyDropdownBtn.setAttribute('aria-expanded', String(open));
});

let storyHoverTimer=null;
function setStoryHoverOpen(value){
  clearTimeout(storyHoverTimer);
  storyDropdown.classList.toggle('open',value);
  storyDropdownBtn.setAttribute('aria-expanded',String(value));
}
storyDropdown.addEventListener('mouseenter',()=>setStoryHoverOpen(true));
storyDropdown.addEventListener('mouseleave',()=>{storyHoverTimer=setTimeout(()=>setStoryHoverOpen(false),180)});

langCurrentBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  const open = !langSwitcher.classList.contains('open');
  closeHotbarPopovers();
  langSwitcher.classList.toggle('open', open);
  langCurrentBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.lang-option').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.dataset.lang);
    closeHotbarPopovers();
  });
});

hotbarMenuToggle.addEventListener('click', (event) => {
  event.stopPropagation();
  const open = !hotbarMobilePanel.classList.contains('open');
  hotbarMobilePanel.classList.toggle('open', open);
  hotbarMenuToggle.classList.toggle('open', open);
  hotbarMenuToggle.setAttribute('aria-expanded', String(open));
});

function openPhoneFromHotbar(){
  hotbarMobilePanel.classList.remove('open');
  hotbarMenuToggle.classList.remove('open');
  hotbarMenuToggle.setAttribute('aria-expanded','false');
  openPhoneModal();
}
document.getElementById('hotbar-call').addEventListener('click', openPhoneFromHotbar);
document.getElementById('mobile-call').addEventListener('click', openPhoneFromHotbar);

document.querySelectorAll('.site-hotbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    closeHotbarPopovers();
    hotbarMobilePanel.classList.remove('open');
    hotbarMenuToggle.classList.remove('open');
    hotbarMenuToggle.setAttribute('aria-expanded','false');
  });
});

document.addEventListener('click', (event) => {
  if(!event.target.closest('.site-hotbar')){
    closeHotbarPopovers();
    hotbarMobilePanel.classList.remove('open');
    hotbarMenuToggle.classList.remove('open');
    hotbarMenuToggle.setAttribute('aria-expanded','false');
  }
});

document.addEventListener('keydown', (event) => {
  if(event.key === 'Escape'){
    closeHotbarPopovers();
    hotbarMobilePanel.classList.remove('open');
    hotbarMenuToggle.classList.remove('open');
    hotbarMenuToggle.setAttribute('aria-expanded','false');
  }
});

let initialLanguage = 'pt';
try{
  const saved = localStorage.getItem('site-language');
  if(saved && LANG_PACKS[saved]) initialLanguage = saved;
}catch(e){}
applyLanguage(initialLanguage);
