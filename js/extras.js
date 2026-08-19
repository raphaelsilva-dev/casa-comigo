(() => {
  const PROFILE_KEY='nosdois-profile-custom';
  const PROFILE={
    name:'Mariana',
    handle:'@marianajr',
    age:'',
    bio:'Colecionando capítulos, músicas, fotos e um amor que ainda tem muita coisa para viver.',
    image:'images/profile/mariana.jpg',
    banner:'images/profile/banner.mp4',
    posts:19,
    followers:'4.3K',
    following:'45',
    gallery:[
      'images/profile/gallery/profile-01.jpg','images/profile/gallery/profile-02.jpg','images/profile/gallery/profile-03.jpg',
      'images/profile/gallery/profile-04.jpg','images/profile/gallery/profile-05.jpg','images/profile/gallery/profile-06.jpg',
      'images/profile/gallery/profile-07.jpg','images/profile/gallery/profile-08.jpg','images/profile/gallery/profile-09.jpg'
    ]
  };
  const SECRET_SONG='music/nossa-musica.mp3';
  const lang=()=>((document.getElementById('lang-current-code')?.textContent||document.getElementById('sub-lang-code')?.textContent||'PT').trim().toLowerCase());
  const TEXT={
    pt:{posts:'posts',followers:'seguidores',following:'seguindo',edit:'Editar perfil',changePhoto:'Trocar foto',bioLabel:'Bio',save:'Salvar alterações',cancel:'Cancelar',full:'Ver perfil completo',loading:'Carregando mais Mariana...',failed:'Não foi possível carregar o perfil completo.',failedCopy:'Ainda existem fotos que a gente não tirou, lugares que não visitou e versões de nós que esse perfil ainda não conhece. Esse espaço ficou reservado para elas.',back:'Voltar para o perfil',credits:'Créditos',creditTitle:'Créditos finais',creditIntro:'Um site feito para guardar uma história que, felizmente, ainda está longe de terminar.',creditMessage:'Esse espaço é para agradecer à Mariana, a inspiração por trás de cada detalhe, de cada música e de cada memória que ganhou lugar aqui. Tudo isso existe porque você foi a inspiração para transformar sentimentos em palavras, lembranças em páginas e momentos em algo que pudesse ser guardado para sempre. Cada detalhe deste cantinho carrega um pouco de você, daquilo que vivemos e de tudo que ainda quero construir ao seu lado. No fim, esses créditos são simplesmente para você, porque foi por você que essa história ganhou forma, e porque ainda temos muito para escrever juntos.',roles:[['Protagonista','Mariana'],['Criado para','Mariana, com todo o carinho'],['Ideia, textos e direção','Raphael'],['História original','nós dois'],['Assistência criativa e técnica','ChatGPT']],ending:'Se você chegou até aqui, então valeu cada detalhe. Isto não é o resumo da nossa história, é só mais uma página dela.',pixel:'continua...',tabs:['Fotos','Reels','Reposts','Mencionados']},
    en:{posts:'posts',followers:'followers',following:'following',edit:'Edit profile',changePhoto:'Change photo',bioLabel:'Bio',save:'Save changes',cancel:'Cancel',full:'View full profile',loading:'Loading more Mariana...',failed:'The full profile could not be loaded.',failedCopy:'There are still photos we have not taken, places we have not visited and versions of us this profile has not met yet. This space is reserved for them.',back:'Back to profile',credits:'Credits',creditTitle:'Final credits',creditIntro:'A website made to keep a story that, thankfully, is still far from ending.',creditMessage:'This space is dedicated to thanking Mariana, the inspiration behind every detail, every song, and every memory that found a place here. All of this exists because you were the inspiration to turn feelings into words, memories into pages, and moments into something that could be kept forever. Every detail of this little corner carries a piece of you, of what we have lived through, and of everything I still want to build by your side. In the end, these credits are simply for you, because you are the reason this story took shape, and because we still have so much left to write together.',roles:[['Starring','Mariana'],['Created for','Mariana, with all my affection'],['Idea, writing and direction','Raphael'],['Original story','us two'],['Creative and technical help','ChatGPT']],ending:'If you made it this far, every tiny detail was worth it. This is not the summary of our story, just another page of it.',pixel:'to be continued...',tabs:['Photos','Reels','Reposts','Tagged']},
    es:{posts:'posts',followers:'seguidores',following:'siguiendo',edit:'Editar perfil',changePhoto:'Cambiar foto',bioLabel:'Bio',save:'Guardar cambios',cancel:'Cancelar',full:'Ver perfil completo',loading:'Cargando más Mariana...',failed:'No fue posible cargar el perfil completo.',failedCopy:'Todavía existen fotos que no tomamos, lugares que no visitamos y versiones de nosotros que este perfil aún no conoce. Este espacio quedó reservado para ellas.',back:'Volver al perfil',credits:'Créditos',creditTitle:'Créditos finales',creditIntro:'Un sitio hecho para guardar una historia que, por suerte, todavía está lejos de terminar.',creditMessage:'Este espacio es para agradecer a Mariana, la inspiración detrás de cada detalle, de cada canción y de cada recuerdo que encontró aquí un lugar. Todo esto existe porque tú fuiste la inspiración para transformar sentimientos en palabras, recuerdos en páginas y momentos en algo que pudiera guardarse para siempre. Cada detalle de este pequeño rincón lleva un poco de ti, de lo que hemos vivido y de todo lo que todavía quiero construir a tu lado. Al final, estos créditos son simplemente para ti, porque fue por ti que esta historia tomó forma, y porque todavía nos queda mucho por escribir juntos.',roles:[['Protagonista','Mariana'],['Creado para','Mariana, con todo mi cariño'],['Idea, textos y dirección','Raphael'],['Historia original','nosotros dos'],['Ayuda creativa y técnica','ChatGPT']],ending:'Si llegaste hasta aquí, entonces cada detalle valió la pena. Esto no es el resumen de nuestra historia, es solo una página más.',pixel:'continúa...',tabs:['Fotos','Reels','Reposts','Menciones']}
  };
  const t=()=>TEXT[lang()]||TEXT.pt;
  const readProfile=()=>{try{return {...PROFILE,...JSON.parse(localStorage.getItem(PROFILE_KEY)||'{}')}}catch(e){return {...PROFILE}}};
  const saveProfile=(patch={})=>{const next={...readProfile(),...patch};try{localStorage.setItem(PROFILE_KEY,JSON.stringify({bio:next.bio,image:next.image}))}catch(e){};syncProfileImages();return next};
  function toast(message){document.querySelector('.secret-toast')?.remove();const el=document.createElement('div');el.className='secret-toast';el.textContent=message;document.body.appendChild(el);requestAnimationFrame(()=>el.classList.add('is-visible'));setTimeout(()=>{el.classList.remove('is-visible');setTimeout(()=>el.remove(),300)},2200)}
  function heartRain(amount=110){for(let i=0;i<amount;i++){const h=document.createElement('span');h.className='secret-heart';h.textContent='♥';h.style.setProperty('--x',`${(Math.random()-.5)*110}vw`);h.style.setProperty('--y',`${-(25+Math.random()*90)}vh`);h.style.setProperty('--r',`${(Math.random()-.5)*540}deg`);h.style.setProperty('--dur',`${2.4+Math.random()*2.3}s`);h.style.fontSize=`${10+Math.random()*30}px`;h.style.animationDelay=`${Math.random()*.45}s`;document.body.appendChild(h);setTimeout(()=>h.remove(),5200)}}

  const svg={
    grid:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    reels:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3"/><path d="M8 4l3 5M14 4l3 5M3 9h18"/><path d="m10 13 5 3-5 3z"/></svg>',
    repost:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h10l-3-3M17 7l-3 3M17 17H7l3 3M7 17l3-3"/></svg>',
    tagged:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3"/><path d="M5 20c.8-4 3.2-6 7-6s6.2 2 7 6"/><rect x="3" y="3" width="18" height="18" rx="3"/></svg>'
  };

  function syncProfileImages(){
    const p=readProfile();
    document.querySelectorAll('.auth-avatar img,.auth-account-photo img').forEach(img=>{if(p.image){img.src=p.image;img.classList.remove('is-missing')}});
  }
  document.addEventListener('nosdois:authchange',()=>setTimeout(syncProfileImages,0));
  setTimeout(syncProfileImages,0);

  let profileBackdrop;
  function ensureProfile(){
    if(profileBackdrop)return profileBackdrop;
    profileBackdrop=document.createElement('div');
    profileBackdrop.className='profile-backdrop';
    profileBackdrop.setAttribute('aria-hidden','true');
    profileBackdrop.innerHTML='<section class="profile-card" role="dialog" aria-modal="true" aria-label="Perfil da Mariana"><button class="profile-close" type="button" aria-label="Fechar">×</button><div data-profile-content></div></section>';
    document.body.appendChild(profileBackdrop);
    profileBackdrop.querySelector('.profile-close').addEventListener('click',closeProfile);
    profileBackdrop.addEventListener('click',e=>{if(e.target===profileBackdrop)closeProfile()});
    return profileBackdrop;
  }
  function stat(value,label){return `<div class="profile-stat"><strong>${value}</strong><span>${label}</span></div>`}
  function profileMarkup(){
    const c=t(),p=readProfile();
    return `<div class="profile-banner"><video class="profile-banner-gif is-ready" src="${p.banner}" autoplay muted loop playsinline preload></video></div>
      <div class="profile-body">
        <div class="profile-head">
          <div class="profile-avatar-large"><img src="${p.image}" alt="Foto da Mariana"><span class="profile-avatar-online" aria-hidden="true"></span></div>
          <div class="profile-main-info">
            <div class="profile-identity"><h2>${p.name}</h2><span class="profile-handle">${p.handle}</span>${p.age?`<span class="profile-age">${p.age}</span>`:''}</div>
            <div class="profile-stats">${stat(p.posts,c.posts)}${stat(p.followers,c.followers)}${stat(p.following,c.following)}</div>
          </div>
        </div>
        <div class="profile-bio-wrap"><p class="profile-bio"><span class="profile-bio-ring" aria-hidden="true">💍</span><span>${p.bio}</span></p><button class="profile-edit-button" type="button">${c.edit}</button></div>
        <div class="profile-tabs" aria-label="Atalhos visuais do perfil">
          <button class="is-active" type="button" aria-label="${c.tabs[0]}" title="${c.tabs[0]}">${svg.grid}</button>
          <button type="button" aria-label="${c.tabs[1]}" title="${c.tabs[1]}">${svg.reels}</button>
          <button type="button" aria-label="${c.tabs[2]}" title="${c.tabs[2]}">${svg.repost}</button>
          <button type="button" aria-label="${c.tabs[3]}" title="${c.tabs[3]}">${svg.tagged}</button>
        </div>
        <div class="profile-grid">${p.gallery.map((src,i)=>`<div class="profile-tile"><img src="${src}" alt="Post ${i+1}" onerror="this.classList.add('is-missing')"><span class="profile-tile-fallback">${String(i+1).padStart(2,'0')}</span></div>`).join('')}</div>
        <button class="profile-full-button" type="button">${c.full}</button>
      </div>`;
  }
  function bindProfileActions(){
    const modal=ensureProfile();
    modal.querySelector('.profile-full-button')?.addEventListener('click',showFullProfile);
    modal.querySelector('.profile-edit-button')?.addEventListener('click',showEditProfile);
  }
  function renderProfile(){const modal=ensureProfile();modal.querySelector('[data-profile-content]').innerHTML=profileMarkup();bindProfileActions()}
  function openProfile(){renderProfile();const modal=ensureProfile();modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('auth-modal-open')}
  function closeProfile(){if(!profileBackdrop)return;profileBackdrop.classList.remove('is-open');profileBackdrop.setAttribute('aria-hidden','true');document.body.classList.remove('auth-modal-open')}

  function cropAvatar(file){
    return new Promise((resolve,reject)=>{
      if(!file){reject(new Error('no file'));return}
      const reader=new FileReader();
      reader.onerror=reject;
      reader.onload=()=>{
        const img=new Image();
        img.onerror=reject;
        img.onload=()=>{
          const size=Math.min(img.naturalWidth,img.naturalHeight),sx=(img.naturalWidth-size)/2,sy=(img.naturalHeight-size)/2;
          const canvas=document.createElement('canvas');canvas.width=512;canvas.height=512;
          const ctx=canvas.getContext('2d');ctx.drawImage(img,sx,sy,size,size,0,0,512,512);
          resolve(canvas.toDataURL('image/jpeg',.86));
        };
        img.src=reader.result;
      };
      reader.readAsDataURL(file);
    });
  }
  function showEditProfile(){
    const c=t(),p=readProfile(),area=ensureProfile().querySelector('[data-profile-content]');
    area.innerHTML=`<div class="profile-edit-screen"><div class="profile-edit-preview"><div class="profile-edit-avatar"><img src="${p.image}" alt="Foto atual da Mariana"></div><label class="profile-photo-button">${c.changePhoto}<input type="file" accept="image/*" data-profile-photo></label></div><label class="profile-edit-field"><span>${c.bioLabel}</span><textarea maxlength="220" rows="5" data-profile-bio>${p.bio}</textarea></label><div class="profile-edit-actions"><button class="profile-edit-cancel" type="button">${c.cancel}</button><button class="profile-edit-save" type="button">${c.save}</button></div></div>`;
    let nextImage=p.image;
    const input=area.querySelector('[data-profile-photo]'),preview=area.querySelector('.profile-edit-avatar img');
    input.addEventListener('change',async()=>{const file=input.files?.[0];if(!file)return;try{nextImage=await cropAvatar(file);preview.src=nextImage}catch(e){toast('não consegui carregar essa foto agora')}});
    area.querySelector('.profile-edit-cancel').addEventListener('click',renderProfile);
    area.querySelector('.profile-edit-save').addEventListener('click',()=>{const bio=area.querySelector('[data-profile-bio]').value.trim()||PROFILE.bio;saveProfile({bio,image:nextImage});renderProfile();toast('perfil atualizado ♥')});
  }
  function showFullProfile(){const c=t(),area=ensureProfile().querySelector('[data-profile-content]');area.innerHTML=`<div class="profile-loading"><div class="profile-loading-inner"><span class="profile-loading-logo">M❤R · PERFIL COMPLETO</span><h2>${c.loading}</h2><p>aguarde só mais um pouquinho...</p><div class="profile-loader"><span></span></div><span class="profile-loader-count">0%</span></div></div>`;const bar=area.querySelector('.profile-loader span'),count=area.querySelector('.profile-loader-count');let n=0;const timer=setInterval(()=>{n=Math.min(100,n+Math.ceil(Math.random()*9));bar.style.width=n+'%';count.textContent=n+'%';if(n>=100){clearInterval(timer);setTimeout(()=>{area.innerHTML=`<div class="profile-loading"><div class="profile-loading-inner"><span class="profile-loading-logo">AINDA NÃO TERMINOU</span><h2>${c.failed}</h2><p>${c.failedCopy}</p><button class="profile-back-button" type="button">${c.back}</button></div></div>`;area.querySelector('.profile-back-button').addEventListener('click',renderProfile)},350)}},110)}

  let creditsBackdrop;
  function ensureCredits(){if(creditsBackdrop)return creditsBackdrop;creditsBackdrop=document.createElement('div');creditsBackdrop.className='credits-backdrop';creditsBackdrop.setAttribute('aria-hidden','true');creditsBackdrop.innerHTML='<article class="credits-note" role="dialog" aria-modal="true" aria-label="Créditos"><button class="credits-close" type="button" aria-label="Fechar">×</button><div data-credits-content></div></article>';document.body.appendChild(creditsBackdrop);creditsBackdrop.querySelector('.credits-close').addEventListener('click',closeCredits);creditsBackdrop.addEventListener('click',e=>{if(e.target===creditsBackdrop)closeCredits()});return creditsBackdrop}
  function openCredits(){const c=t(),m=ensureCredits();m.querySelector('[data-credits-content]').innerHTML=`<span class="credits-kicker">feito com ♥ e uns pixels</span><h2>${c.creditTitle}</h2><p class="credits-intro">${c.creditIntro}</p><p class="credits-message">${c.creditMessage||''}</p><p class="credits-ending">${c.ending}</p><span class="credits-pixel">${c.pixel}</span>`;m.classList.add('is-open');m.setAttribute('aria-hidden','false')}
  function closeCredits(){if(!creditsBackdrop)return;creditsBackdrop.classList.remove('is-open');creditsBackdrop.setAttribute('aria-hidden','true')}

  async function playSecretSong(){const pageAudios=[...document.querySelectorAll('audio')].filter(a=>!a.paused);pageAudios.forEach(a=>a.pause());const secret=new Audio(SECRET_SONG);secret.preload='auto';const resume=()=>pageAudios.forEach(a=>a.play().catch(()=>{}));secret.addEventListener('ended',resume,{once:true});secret.addEventListener('error',()=>{resume();toast('essa música ainda está esperando por nós ♡')},{once:true});try{await secret.play();toast('você encontrou a nossa música ♫')}catch(e){resume();toast('adicione music/nossa-musica.mp3 para liberar esse segredo ♫')}}

  document.addEventListener('click',e=>{const head=e.target.closest('.auth-account-head[role="button"]');if(head){e.preventDefault();e.stopPropagation();head.closest('.auth-shell')?.classList.remove('is-open');openProfile();return}if(e.target.closest('#open-credits-modal')){e.preventDefault();openCredits()}} ,true);
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProfile();closeCredits()}if((e.key==='Enter'||e.key===' ')&&e.target.matches('.auth-account-head[role="button"]')){e.preventDefault();openProfile()}});

  let logoClicks=0,logoTimer;
  document.addEventListener('click',e=>{if(!e.target.closest('.hotbar-brand'))return;logoClicks++;clearTimeout(logoTimer);logoTimer=setTimeout(()=>logoClicks=0,1800);if(logoClicks>=5){logoClicks=0;heartRain(140);toast('você encontrou um pedacinho extra de amor ♥')}});
  let markClicks=0,markTimer;
  document.addEventListener('click',e=>{if(!e.target.closest('.archive-title-mark'))return;markClicks++;clearTimeout(markTimer);markTimer=setTimeout(()=>markClicks=0,1600);if(markClicks>=3){markClicks=0;playSecretSong()}});

  const langNode=document.getElementById('lang-current-code')||document.getElementById('sub-lang-code');
  const syncLabels=()=>{const b=document.getElementById('open-credits-modal');if(b)b.textContent=t().credits;};
  syncLabels();if(langNode)new MutationObserver(()=>{syncLabels();if(profileBackdrop?.classList.contains('is-open'))renderProfile()}).observe(langNode,{childList:true,characterData:true,subtree:true});
  window.NosDoisExtras={openProfile,closeProfile,openCredits,heartRain};
})();
