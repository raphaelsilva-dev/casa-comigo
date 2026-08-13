(() => {
  if(document.body.dataset.page!=='acervo')return;
  // V73 — todo o conteúdo agora vem de js/acervo-conteudo.js.
  const CONTENT=window.ACERVO_CONTENT||{pt:[],en:[],es:[]};
  const masterPosts=(Array.isArray(CONTENT.pt)?CONTENT.pt:[]).filter(post=>post&&post.published!==false);
  function localizedPosts(language){
    if(language==='pt')return masterPosts.map(post=>({...post}));
    const translated=new Map((Array.isArray(CONTENT[language])?CONTENT[language]:[]).map(post=>[post.id,post]));
    return masterPosts.map(post=>{
      const tr=translated.get(post.id);
      if(!tr)return {...post};
      return {...post,category:tr.category??post.category,title:tr.title??post.title,text:tr.text??post.text,signature:tr.signature??post.signature};
    });
  }
  const POSTS={pt:localizedPosts('pt'),en:localizedPosts('en'),es:localizedPosts('es')};
  // v65 — contadores afetivos dos elogios.
  const USAGE_KEY='nosdois-acervo-usage';
  const USAGE_EPOCH=Date.UTC(2026,7,9);
  const USAGE_META={
    'compliment-01':[1873,3],'compliment-02':[2538,5],'compliment-03':[1294,2],'compliment-04':[1108,2],
    'compliment-05':[1567,3],'compliment-06':[2084,4],'compliment-07':[999,2],'compliment-08':[3231,5],
    'love-01':[28496,42]
  };
  const EXTRA_UI={
    pt:{search:'Pesquisar no Acervo',placeholder:'Pesquisar',empty:'Nada por aqui com esse termo.',usage:'REGISTRO · {n} VEZES'},
    en:{search:'Search the Archive',placeholder:'Search',empty:'Nothing here matches that search.',usage:'RECORD · {n} TIMES'},
    es:{search:'Buscar en el Archivo',placeholder:'Buscar',empty:'No hay resultados para esa búsqueda.',usage:'REGISTRO · {n} VECES'}
  };
  function readUsage(){try{return JSON.parse(localStorage.getItem(USAGE_KEY)||'{}')}catch(e){return {}}}
  function usageCount(item,increment=false){
    const meta=USAGE_META[item?.id];if(!meta)return null;
    const state=readUsage();if(increment){state[item.id]=(state[item.id]||0)+1;try{localStorage.setItem(USAGE_KEY,JSON.stringify(state))}catch(e){}}
    const days=Math.max(0,Math.floor((Date.now()-USAGE_EPOCH)/86400000));
    return meta[0]+days*meta[1]+(state[item.id]||0);
  }
  function formatUsage(n){return new Intl.NumberFormat(currentLang==='pt'?'pt-BR':currentLang==='es'?'es-ES':'en-US').format(n)}
  const extraCopy=()=>EXTRA_UI[currentLang]||EXTRA_UI.pt
  
  const UI={"pt":{"title":"Acervo","lead":"Aqui mora o que não cabe na linha do tempo: palavras que ficaram, fotos que guardam dias inteiros, conversas que eu não quero esquecer e pequenos pedaços do mundo que, de algum jeito, passaram a ter o seu nome. Não é só um arquivo, é um lugar onde continuo encontrando nós dois.","shuffle":"Misturar o Acervo","counter":"{n} / 10 descobertas nesta rodada","new":"NOVO","locked":"PROTEGIDO","missing":"adicione esta mídia em","close":"Fechar","prev":"Anterior","next":"Próximo","loginK":"ENTRAR","loginTitle":"Você ainda não está logada","loginCopy":"Para continuar com este conteúdo, entre na sua conta.","loginBtn":"Entrar","contractK":"ARQUIVO PROTEGIDO","contractTitle":"Esse conteúdo ainda está bloqueado","contractCopy":"Essa parte só abre depois que o próximo capítulo estiver assinado.","plans":"Ir para os planos →","contract":"Ir para o contrato →","cycleK":"ENTRAR","cycleTitle":"Continue com sua conta","cycleCopy":"Para continuar explorando o Acervo, entre na sua conta.","explore":"Entrar","carousel":"carrossel","video":"vídeo","postPrev":"Publicação anterior","postNext":"Próxima publicação","hasMedia":"tem foto","lyricCategory":"TRECHO"},"en":{"title":"Archive","lead":"This is where everything that does not fit on a timeline gets to live: words that stayed, photos that hold entire days, conversations I never want to lose and little pieces of the world that somehow started carrying your name. It is not just an archive, it is a place where I keep finding us.","shuffle":"Shuffle the Archive","counter":"{n} / 10 discoveries this round","new":"NEW","locked":"PROTECTED","missing":"add this media at","close":"Close","prev":"Previous","next":"Next","loginK":"SIGN IN","loginTitle":"You are not signed in yet","loginCopy":"Sign in to continue with this content.","loginBtn":"Sign in","contractK":"PROTECTED FILE","contractTitle":"This content is still locked","contractCopy":"This part opens after the next chapter has been signed.","plans":"Go to plans →","contract":"Go to the contract →","cycleK":"SIGN IN","cycleTitle":"Continue with your account","cycleCopy":"To keep exploring the Archive, sign in to your account.","explore":"Sign in","carousel":"carousel","video":"video","postPrev":"Previous post","postNext":"Next post","hasMedia":"has photo","lyricCategory":"EXCERPT"},"es":{"title":"Archivo","lead":"Aquí vive todo lo que no cabe en una línea del tiempo: palabras que se quedaron, fotos que guardan días enteros, conversaciones que no quiero olvidar y pequeños pedazos del mundo que, de alguna forma, empezaron a llevar tu nombre. No es solo un archivo: es un lugar donde sigo encontrándonos.","shuffle":"Mezclar el Archivo","counter":"{n} / 10 descubrimientos en esta ronda","new":"NUEVO","locked":"PROTEGIDO","missing":"añade este archivo en","close":"Cerrar","prev":"Anterior","next":"Siguiente","loginK":"ENTRAR","loginTitle":"Todavía no has iniciado sesión","loginCopy":"Entra en tu cuenta para continuar con este contenido.","loginBtn":"Entrar","contractK":"ARCHIVO PROTEGIDO","contractTitle":"Este contenido todavía está bloqueado","contractCopy":"Esta parte se abre después de firmar el próximo capítulo.","plans":"Ir a los planes →","contract":"Ir al contrato →","cycleK":"ENTRAR","cycleTitle":"Continúa con tu cuenta","cycleCopy":"Para seguir explorando el Archivo, entra en tu cuenta.","explore":"Entrar","carousel":"carrusel","video":"vídeo","postPrev":"Publicación anterior","postNext":"Siguiente publicación","hasMedia":"tiene foto","lyricCategory":"FRAGMENTO"}};
  const CYCLE_KEY='nosdois-acervo-cycle';
  const LIMIT=10;
  let currentLang='pt', currentPosts=[], feedPosts=[], currentItem=null, currentMediaIndex=0, currentFeedIndex=-1, feedBatch=0, searchQuery='';
  let feedSource=[], feedCursor=0;
  const FEED_BATCH_SIZE=18;
  let cycle={views:0,seenIds:[],locked:false,freeMode:false,gateCompleted:false,order:[]};

  const grid=document.getElementById('archive-grid');
  const shuffleBtn=document.getElementById('archive-shuffle');
  const searchWrap=document.getElementById('archive-search'),searchToggle=document.getElementById('archive-search-toggle'),searchInput=document.getElementById('archive-search-input');
  const viewer=document.getElementById('archive-viewer');
  const lockModal=document.getElementById('archive-lock-modal');
  const sentinel=document.getElementById('archive-sentinel');
  const langCode=document.getElementById('sub-lang-code');
  const auth=()=>window.NosDoisAuth?.isAuthenticated?.()===true;
  const progress=()=>window.NosDoisProgress?.read?.()||{};
  const copy=()=>UI[currentLang]||UI.pt;

  function readCycle(){
    const defaults={views:0,seenIds:[],locked:false,freeMode:false,gateCompleted:false,order:[]};
    try{
      const stored={...defaults,...JSON.parse(localStorage.getItem(CYCLE_KEY)||'{}')};
      // Migração das regras anteriores: quem já chegou ao modo livre continua nele.
      if(stored.freeMode||stored.exploredElsewhere){stored.freeMode=true;stored.gateCompleted=true;stored.locked=false;}
      return stored;
    }catch(e){return defaults;}
  }
  function saveCycle(patch={}){
    cycle={...cycle,...patch};
    try{localStorage.setItem(CYCLE_KEY,JSON.stringify(cycle))}catch(e){}
    syncCycleLock();
  }
  function prepareCycle(){
    cycle=readCycle();
    // Se a conta já estiver autenticada, a etapa surpresa de login já está cumprida.
    if(auth()&&!cycle.gateCompleted){cycle={...cycle,locked:false,freeMode:true,gateCompleted:true,gateCompletedAt:Date.now()};try{localStorage.setItem(CYCLE_KEY,JSON.stringify(cycle))}catch(e){}}
  }
  function shuffle(list){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
  const ORDER_VERSION=81;
  function feedShapeHint(item){
    if(!item||item.type!=='media')return 'square';
    const ratio=item.feed?.ratio||'auto';
    if(ratio==='16:9')return 'wide';
    if(ratio==='4:5'||ratio==='9:16')return 'tall';
    if(ratio==='1:1')return 'square';
    return item.wide?'wide':'square';
  }
  function feedMediaKey(item){
    const media=Array.isArray(item?.media)?item.media.filter(Boolean):[];
    return media.length?media[0]:'';
  }
  function smartShuffle(list,context=[]){
    const pool=shuffle(list);
    const out=[];
    const history=[...context].filter(Boolean).slice(-10);
    while(pool.length){
      let best=0,bestScore=Infinity;
      for(let i=0;i<pool.length;i++){
        const item=pool[i],shape=feedShapeHint(item),key=feedMediaKey(item);
        const recent=[...history,...out].slice(-10);
        const last=recent.at(-1),last2=recent.slice(-2),last4=recent.slice(-4);
        let score=Math.random()*3;
        if(recent.slice(-8).some(x=>x.id===item.id))score+=1200;
        if(key&&recent.slice(-7).some(x=>feedMediaKey(x)===key))score+=700;
        if(shape!=='square'&&last&&feedShapeHint(last)!=='square')score+=140;
        if(shape!=='square'&&last2.filter(x=>feedShapeHint(x)!=='square').length>=1)score+=75;
        if(shape!=='square'&&last4.filter(x=>feedShapeHint(x)!=='square').length>=2)score+=95;
        if(last&&item.type===last.type)score+=8;
        if(last&&item.category&&last.category&&item.category===last.category)score+=5;
        if(score<bestScore){bestScore=score;best=i}
      }
      out.push(pool.splice(best,1)[0]);
    }
    return out;
  }
  function restoreOrder(base){
    if(cycle.orderVersion!==ORDER_VERSION)return smartShuffle(base);
    const byId=new Map(base.map(item=>[item.id,item]));const saved=Array.isArray(cycle.order)?cycle.order:[];const ordered=saved.map(id=>byId.get(id)).filter(Boolean);const used=new Set(ordered.map(item=>item.id));const rest=base.filter(item=>!used.has(item.id));return ordered.length?[...ordered,...smartShuffle(rest,ordered.slice(-8))]:smartShuffle(base)
  }
  function rememberOrder(list){cycle={...cycle,order:list.map(item=>item.id),orderVersion:ORDER_VERSION};try{localStorage.setItem(CYCLE_KEY,JSON.stringify(cycle))}catch(e){}}
  function isVideo(src=''){return /\.(mp4|webm|mov)$/i.test(src)}
  function thumbnailSrc(src=''){
    if(!/^images\/acervo\//i.test(src)||/\.(gif|mp4|webm|mov)$/i.test(src))return src;
    const name=src.split('/').pop();
    return name?`images/acervo/thumbs/${name}.webp`:src;
  }
  function isLyricItem(item){return item?.type==='lyric'||/m[uú]sica|music|song/i.test(item?.category||'')}
  function itemAvailable(item){const p=progress();const hasSigned=!!(p.contractAccepted||(Array.isArray(p.contractHistory)&&p.contractHistory.length));if(item.lock==='login')return auth();if(item.lock==='contract')return auth()&&hasSigned;return true}
  function excerpt(t='',limit=125){const clean=t.replace(/\s+/g,' ').trim();return clean.slice(0,limit)+(clean.length>limit?'…':'')}
  function showTitleFeed(item){return item?.showTitleFeed??(item?.showTitle!==false)}
  function showTitlePost(item){return item?.showTitlePost??(item?.showTitle!==false)}
  function showTextFeed(item){return item?.showTextFeed!==false}
  function showTextPost(item){return item?.showTextPost!==false}
  function showDetailsPost(item){return item?.showDetailsPost!==false}

  const visibleVideoObserver=('IntersectionObserver' in window)?new IntersectionObserver(entries=>{
    entries.forEach(entry=>{const video=entry.target;if(entry.isIntersecting&&entry.intersectionRatio>.08){video.play().catch(()=>{})}else video.pause()});
  },{rootMargin:'180px 0px',threshold:[0,.08]}):null;
  function observeFeedVideo(video){if(!video)return;if(visibleVideoObserver)visibleVideoObserver.observe(video);else video.play().catch(()=>{})}

  function mediaMarkup(item){
    const src=item.media?.[0]||'';
    if(!src)return `<div class="archive-text-orb"><span>${(item.type==='compliment'||item.type==='lyric')?'':item.category}</span></div>`;
    if(isVideo(src))return `<video class="archive-card-media" muted loop playsinline preload="metadata" src="${src}"></video><div class="archive-media-fallback"><span>${copy().video}</span><small>${copy().missing}<br>${src}</small></div>`;
    return `<img class="archive-card-media" src="${thumbnailSrc(src)}" data-full-src="${src}" alt="${item.title}" loading="lazy" decoding="async" fetchpriority="low"><div class="archive-media-fallback"><span>${item.category}</span><small>${copy().missing}<br>${src}</small></div>`;
  }

  function lockBadgeMarkup(protectedItem){
    if(!protectedItem)return '';
    const label=copy().locked;
    return `<span class="archive-lock-badge" aria-label="${label}" title="${label}"><svg aria-hidden="true" viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2"></rect><path d="M8 10V7a4 4 0 0 1 8 0v3"></path></svg></span>`;
  }

  function hasTitle(item){return !!String(item?.title||'').trim()}
  function categoryLabel(item){if(isLyricItem(item))return copy().lyricCategory;if(item?.type==='compliment')return '';return item?.category||''}
  function textCardMarkup(item,i,protectedItem){
    const src=item.media?.[0]||'';
    const backdrop=src?`<div class="archive-text-backdrop" aria-hidden="true">${isVideo(src)?`<video class="archive-text-backdrop-media" muted loop playsinline preload="metadata" src="${src}"></video>`:`<img class="archive-text-backdrop-media" src="${thumbnailSrc(src)}" data-full-src="${src}" alt="" loading="lazy" decoding="async" fetchpriority="low">`}<span class="archive-text-backdrop-glass"></span></div>`:'';
    const category=categoryLabel(item);
    const limit=item.type==='poem'?112:isLyricItem(item)?118:138;
    const title=showTitleFeed(item)&&hasTitle(item)?`<h2>${item.title}</h2>`:'';
    const preview=showTextFeed(item)&&item.text?`<p>${excerpt(item.text,limit)}</p>`:'';
    return `${backdrop}${i<3?`<span class="archive-new-badge">${copy().new}</span>`:''}${lockBadgeMarkup(protectedItem)}<div class="archive-card-copy archive-card-copy--text">${category?`<span class="archive-card-category">${category}</span>`:''}${title}${preview}</div>`;
  }
  function mediaCardMarkup(item,i,protectedItem){
    return `<div class="archive-card-media-wrap">${mediaMarkup(item)}<span class="archive-media-category">${item.category}</span>${i<3?`<span class="archive-new-badge">${copy().new}</span>`:''}${lockBadgeMarkup(protectedItem)}${item.media?.length>1?`<span class="archive-carousel-count">${item.media.length}</span>`:''}</div>`;
  }
  function feedSettings(item){
    const feed=item?.feed||{};
    return {
      ratio:feed.ratio||'auto',
      x:Number.isFinite(Number(feed.x))?Number(feed.x):50,
      y:Number.isFinite(Number(feed.y))?Number(feed.y):50,
      zoom:Math.min(2.5,Math.max(1,Number(feed.zoom)||1)),
      rotate:[0,90,180,270].includes(Number(feed.rotate))?Number(feed.rotate):0
    };
  }
  function applyFeedCrop(mediaEl,item){
    if(!mediaEl)return;
    const feed=feedSettings(item);
    mediaEl.style.objectPosition=`${feed.x}% ${feed.y}%`;
    mediaEl.style.setProperty('--archive-feed-zoom',String(feed.zoom));
    mediaEl.style.setProperty('--archive-feed-rotate',`${feed.rotate}deg`);
  }
  function detectLandscape(card,mediaEl,item){
    if(!mediaEl||item.type!=='media')return;
    applyFeedCrop(mediaEl,item);
    const apply=()=>{
      const feed=feedSettings(item);
      card.classList.remove('is-wide','is-tall','is-square');
      if(feed.ratio==='1:1'){card.classList.add('is-square');scheduleGridLayout();return}
      if(feed.ratio==='16:9'){card.classList.add('is-wide');scheduleGridLayout();return}
      if(feed.ratio==='4:5'||feed.ratio==='9:16'){card.classList.add('is-tall');scheduleGridLayout();return}
      const w=mediaEl.videoWidth||mediaEl.naturalWidth||0;
      const h=mediaEl.videoHeight||mediaEl.naturalHeight||0;
      if(!w||!h){card.classList.add('is-square');scheduleGridLayout();return}
      const ratio=w/h;
      if(ratio>1.28)card.classList.add('is-wide');
      else if(ratio<0.78)card.classList.add('is-tall');
      else card.classList.add('is-square');
      scheduleGridLayout();
    };
    mediaEl.addEventListener(mediaEl.tagName==='VIDEO'?'loadedmetadata':'load',apply,{once:true});
    apply();
  }

  function buildFeedCard(item,displayIndex,batchIndex){
    const protectedItem=!itemAvailable(item);
    const textType=item.type==='poem'||item.type==='compliment'||item.type==='lyric';
    const card=document.createElement('article');
    card.className=`archive-card ${textType?'is-text-post':'is-media-post'} ${item.type==='poem'?'is-poem':''} ${item.type==='compliment'?'is-compliment':''} ${isLyricItem(item)?'is-lyric':''} ${textType?'is-square':''}`;
    card.tabIndex=0;card.dataset.id=item.id;card.dataset.feedIndex=String(displayIndex);
    if(protectedItem)card.classList.add('is-protected');
    if(textType&&item.media?.length)card.classList.add('has-text-media');
    card.innerHTML=textType?textCardMarkup(item,batchIndex,protectedItem):mediaCardMarkup(item,batchIndex,protectedItem);
    const mediaEl=card.querySelector('.archive-card-media'),fallback=card.querySelector('.archive-media-fallback');
    if(mediaEl&&fallback){mediaEl.addEventListener('error',()=>{
      const full=mediaEl.dataset.fullSrc||'';
      if(full&&!mediaEl.dataset.thumbFallback){mediaEl.dataset.thumbFallback='1';mediaEl.src=full;return}
      mediaEl.classList.add('is-missing');fallback.classList.add('is-visible');card.classList.remove('is-wide','is-tall');card.classList.add('is-square');scheduleGridLayout()
    });detectLandscape(card,mediaEl,item);if(mediaEl.tagName==='VIDEO')observeFeedVideo(mediaEl)}
    const textBackdrop=card.querySelector('.archive-text-backdrop-media');
    if(textBackdrop){
      applyFeedCrop(textBackdrop,item);
      if(textBackdrop.tagName==='VIDEO')observeFeedVideo(textBackdrop);
      const removeBrokenBackdrop=()=>{
        const full=textBackdrop.dataset.fullSrc||'';
        if(full&&!textBackdrop.dataset.thumbFallback){textBackdrop.dataset.thumbFallback='1';textBackdrop.src=full;return}
        card.classList.remove('has-text-media');textBackdrop.closest('.archive-text-backdrop')?.remove()
      };
      textBackdrop.addEventListener('error',removeBrokenBackdrop);
      if(textBackdrop.tagName==='IMG'&&textBackdrop.complete&&!textBackdrop.naturalWidth)removeBrokenBackdrop();
    }
    // Listener direto deixa o card confiável no desktop, inclusive após busca, shuffle e lotes infinitos.
    card.addEventListener('click',()=>{const idx=Number(card.dataset.feedIndex);const selected=feedPosts[idx]||item;openItem(selected,card,idx)});
    card.addEventListener('keydown',event=>{if(event.key!=='Enter'&&event.key!==' ')return;event.preventDefault();const idx=Number(card.dataset.feedIndex);const selected=feedPosts[idx]||item;openItem(selected,card,idx)});
    return card;
  }
  let layoutFrame=0;
  function scheduleGridLayout(){cancelAnimationFrame(layoutFrame);layoutFrame=requestAnimationFrame(layoutGrid)}
  function layoutGrid(){
    if(!grid)return;
    const cards=[...grid.querySelectorAll('.archive-card')];
    const styles=getComputedStyle(grid);
    const gap=parseFloat(styles.columnGap)||0;
    const cell=Math.max(1,(grid.clientWidth-gap*2)/3);
    grid.style.setProperty('--archive-cell-size',`${cell}px`);
    if(grid.classList.contains('is-searching')){cards.forEach(card=>{card.style.removeProperty('grid-column');card.style.removeProperty('grid-row')});return}
    const occupied=[];const largeRows=new Set();let largeIndex=0;
    const free=(row,col,h=1,w=1)=>{for(let r=row;r<row+h;r++)for(let c=col;c<col+w;c++)if(occupied[r]?.[c])return false;return true};
    const mark=(row,col,h,w)=>{for(let r=row;r<row+h;r++){occupied[r]??=[];for(let c=col;c<col+w;c++)occupied[r][c]=true}};
    const findSquare=()=>{for(let row=1;row<10000;row++)for(let col=1;col<=3;col++)if(free(row,col))return [row,col];return [1,1]};
    cards.forEach(card=>{
      const shape=card.classList.contains('is-wide')?'wide':card.classList.contains('is-tall')?'tall':'square';
      let row=1,col=1,h=1,w=1;
      if(shape==='square'){[row,col]=findSquare()}
      else if(shape==='wide'){
        w=2;const preferred=(largeIndex++%2===0)?1:2;
        outer:for(row=1;row<10000;row++){
          if(largeRows.has(row-1)||largeRows.has(row)||largeRows.has(row+1))continue;
          for(const start of [preferred,preferred===1?2:1])if(free(row,start,1,2)){col=start;break outer}
        }
        largeRows.add(row);
      }else{
        h=2;const preferred=(largeIndex++%2===0)?1:3;
        outer:for(row=1;row<10000;row++){
          if(largeRows.has(row-1)||largeRows.has(row)||largeRows.has(row+1)||largeRows.has(row+2))continue;
          for(const start of [preferred,preferred===1?3:1,2])if(free(row,start,2,1)){col=start;break outer}
        }
        largeRows.add(row);largeRows.add(row+1);
      }
      mark(row,col,h,w);
      card.style.setProperty('grid-column',`${col} / span ${w}`,'important');card.style.setProperty('grid-row',`${row} / span ${h}`,'important');
    });
  }
  if('ResizeObserver' in window)new ResizeObserver(scheduleGridLayout).observe(grid);else window.addEventListener('resize',scheduleGridLayout,{passive:true});

  function nextInfiniteBatch(){
    const base=POSTS[currentLang]||POSTS.pt;
    return smartShuffle(base,feedPosts.slice(-10));
  }
  function appendFeedBatch(list=null){
    if(cycle.locked&&!auth())return;
    let batch;
    if(Array.isArray(list)){
      batch=list;
    }else{
      if(!feedSource.length||feedCursor>=feedSource.length){
        feedSource=feedPosts.length?nextInfiniteBatch():(currentPosts.length?currentPosts:(POSTS[currentLang]||POSTS.pt));
        feedCursor=0;
      }
      batch=feedSource.slice(feedCursor,feedCursor+FEED_BATCH_SIZE);
      feedCursor+=batch.length;
    }
    if(!batch?.length)return;
    const frag=document.createDocumentFragment();
    batch.forEach(item=>{
      const displayIndex=feedPosts.length;
      const badgeIndex=displayIndex<3?displayIndex:999;
      feedPosts.push(item);
      frag.appendChild(buildFeedCard(item,displayIndex,badgeIndex));
    });
    grid.appendChild(frag);feedBatch++;
    syncCycleLock();scheduleGridLayout();
  }
  function renderGrid(reshuffle=true){
    grid.classList.remove('is-searching');
    const base=POSTS[currentLang]||POSTS.pt;
    if(reshuffle||!currentPosts.length){currentPosts=smartShuffle(base);rememberOrder(currentPosts)}
    grid.innerHTML='';feedPosts=[];feedBatch=0;currentFeedIndex=-1;
    feedSource=[...currentPosts];feedCursor=0;sentinel.hidden=false;
    appendFeedBatch();
  }
  function normalizeSearch(value=''){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim()}
  function renderSearch(){
    const q=normalizeSearch(searchQuery);sentinel.hidden=!!q;
    grid.classList.toggle('is-searching',!!q);
    if(!q){renderGrid(false);return;}
    const base=POSTS[currentLang]||POSTS.pt;
    const matches=base.filter(item=>normalizeSearch([item.title,item.text,item.signature,(item.type==='compliment'||item.type==='lyric')?'':item.category].filter(Boolean).join(' ')).includes(q));
    grid.innerHTML='';feedPosts=[];feedBatch=0;currentFeedIndex=-1;feedSource=[];feedCursor=0;
    if(!matches.length){grid.innerHTML=`<div class="archive-empty">${extraCopy().empty}</div>`;scheduleGridLayout();return;}
    appendFeedBatch(matches);
  }

  function syncCycleLock(){
    const locked=!!cycle.locked&&!auth();
    document.body.classList.toggle('archive-cycle-locked',locked);
    document.querySelectorAll('.archive-card').forEach(c=>c.classList.toggle('is-cycle-locked',locked));
  }
  function recordView(item){
    if(cycle.gateCompleted||auth()){if(auth()&&!cycle.gateCompleted)saveCycle({freeMode:true,gateCompleted:true,locked:false,gateCompletedAt:Date.now()});return;}
    const ids=[...(cycle.seenIds||[])];
    if(!ids.includes(item.id))ids.push(item.id);
    const next={seenIds:ids,views:ids.length};
    if(ids.length>=LIMIT){next.locked=true;next.loginGateReached=true;next.loginGateReachedAt=Date.now()}
    saveCycle(next);
  }

  function showBackdrop(modal){modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('archive-modal-open')}
  function hideBackdrop(modal){modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('archive-modal-open')}
  function openSharedLogin(afterLogin){
    window.NosDoisAuth?.openLogin?.({onSuccess:()=>{saveCycle({locked:false,freeMode:true,gateCompleted:true,gateCompletedAt:Date.now()});renderGrid(false);afterLogin?.()}});
  }
  function showLock(item,feedIndex=-1){
    const c=copy(),authOn=auth(),p=progress();let k,title,text,button,label;
    if(!authOn){k=c.loginK;title=c.loginTitle;text=c.loginCopy;label=c.loginBtn;button='login'}
    else{k=c.contractK;title=c.contractTitle;text=c.contractCopy;button=p.contractUnlocked?'contract':'plans';label=p.contractUnlocked?c.contract:c.plans}
    lockModal.querySelector('[data-archive-lock-kicker]').textContent=k;
    lockModal.querySelector('[data-archive-lock-title]').textContent=title;
    lockModal.querySelector('[data-archive-lock-copy]').textContent=text;
    const action=lockModal.querySelector('[data-archive-lock-action]');action.textContent=label;action.classList.toggle('is-plan-route',button==='plans');
    action.onclick=()=>{hideBackdrop(lockModal);if(button==='login')openSharedLogin(()=>{if(itemAvailable(item))setTimeout(()=>openItem(item,null,feedIndex),120)});else location.href=button==='contract'?'index.html#envelope-section':'planos.html'};
    showBackdrop(lockModal);
  }
  function showCycleLogin(){
    const c=copy();
    lockModal.querySelector('[data-archive-lock-kicker]').textContent=c.cycleK;
    lockModal.querySelector('[data-archive-lock-title]').textContent=c.cycleTitle;
    lockModal.querySelector('[data-archive-lock-copy]').textContent=c.cycleCopy;
    const action=lockModal.querySelector('[data-archive-lock-action]');action.textContent=c.explore;action.classList.remove('is-plan-route');
    action.onclick=()=>{hideBackdrop(lockModal);openSharedLogin()};
    showBackdrop(lockModal);
  }

  function setViewerMedia(){
    const mediaArea=viewer.querySelector('[data-archive-media]'),src=currentItem?.media?.[currentMediaIndex]||'';
    mediaArea.innerHTML='';mediaArea.classList.toggle('is-empty',!src);
    if(src&&isVideo(src)){const v=document.createElement('video');v.controls=true;v.playsInline=true;v.src=src;v.addEventListener('error',()=>{mediaArea.innerHTML=`<div class="archive-viewer-placeholder"><small>${copy().missing}<br>${src}</small></div>`});mediaArea.appendChild(v)}
    else if(src){const img=document.createElement('img');img.alt=currentItem?.title||'';img.src=src;img.addEventListener('error',()=>{mediaArea.innerHTML=`<div class="archive-viewer-placeholder"><small>${copy().missing}<br>${src}</small></div>`});mediaArea.appendChild(img)}
    const total=(currentItem?.media||[]).filter(Boolean).length;const nav=viewer.querySelector('[data-archive-carousel-nav]');nav.hidden=total<=1;viewer.querySelector('[data-archive-position]').textContent=total>1?`${currentMediaIndex+1} / ${total}`:'';
  }
  function fillViewer(item,animate=false,feedIndex=currentFeedIndex){
    currentItem=item;currentMediaIndex=0;if(Number.isInteger(feedIndex)&&feedIndex>=0){currentFeedIndex=feedIndex<feedPosts.length?feedIndex:Math.max(0,feedPosts.findIndex(x=>x.id===item.id));}
    const card=viewer.querySelector('.archive-viewer-card');
    if(animate){card.classList.remove('archive-post-swap');void card.offsetWidth;card.classList.add('archive-post-swap')}
    const mediaCount=(item.media||[]).filter(Boolean).length,hasMedia=mediaCount>0;
    const categoryText=categoryLabel(item),titleVisible=showTitlePost(item)&&hasTitle(item),textVisible=showTextPost(item)&&!!item.text,signVisible=!!item.signature;
    const usage=viewer.querySelector('[data-archive-usage]');const count=item.type==='compliment'?usageCount(item,true):null;
    const meaningfulCopy=!!(titleVisible||textVisible||signVisible||count!=null);
    // Categoria sozinha não cria uma coluna vazia ao lado de foto/vídeo. Sem mídia, o texto ocupa o modal inteiro.
    const copyVisible=hasMedia?(showDetailsPost(item)&&meaningfulCopy):!!(meaningfulCopy||categoryText);
    viewer.classList.toggle('has-media',hasMedia);viewer.classList.toggle('has-copy',copyVisible);viewer.classList.toggle('is-media-only',hasMedia&&!copyVisible);viewer.classList.toggle('is-copy-only',!hasMedia&&copyVisible);
    const category=viewer.querySelector('[data-archive-category]');category.textContent=categoryText;category.hidden=!(copyVisible&&categoryText);
    if(usage){usage.hidden=!(copyVisible&&count!=null);usage.textContent=count==null?'':extraCopy().usage.replace('{n}',formatUsage(count));}
    const viewerTitle=viewer.querySelector('[data-archive-title]');viewerTitle.textContent=item.title||'';viewerTitle.hidden=!(copyVisible&&titleVisible);
    const txt=viewer.querySelector('[data-archive-text]');txt.textContent=item.text||'';txt.hidden=!(copyVisible&&textVisible);
    const sign=viewer.querySelector('[data-archive-signature]');sign.textContent=item.signature||'';sign.hidden=!(copyVisible&&signVisible);
    setViewerMedia();recordView(item);
  }
  function openItem(item,trigger,feedIndex=-1){
    if(cycle.locked&&!auth()){showCycleLogin();return}
    if(!itemAvailable(item)){showLock(item,feedIndex);return}
    fillViewer(item,false,feedIndex);showBackdrop(viewer);
  }
  function closeViewer(){
    hideBackdrop(viewer);currentItem=null;currentMediaIndex=0;currentFeedIndex=-1;
    if(cycle.locked&&!auth())setTimeout(showCycleLogin,180);
  }
  function changeMedia(dir){const total=currentItem?.media?.length||0;if(total<=1)return;currentMediaIndex=(currentMediaIndex+dir+total)%total;setViewerMedia()}
  function navigatePost(dir){
    if(!currentItem||!feedPosts.length)return;
    let nextIndex=currentFeedIndex+dir;
    if(dir>0&&nextIndex>=feedPosts.length){appendFeedBatch();nextIndex=currentFeedIndex+1}
    if(dir<0&&nextIndex<0)nextIndex=feedPosts.length-1;
    const next=feedPosts[nextIndex];if(!next)return;
    if(cycle.locked&&!auth()){hideBackdrop(viewer);showCycleLogin();return}
    if(!itemAvailable(next)){hideBackdrop(viewer);showLock(next,nextIndex);return}
    fillViewer(next,true,nextIndex);
  }

  function applyLanguage(lang){
    currentLang=['pt','en','es'].includes(lang)?lang:'pt';const c=copy();document.title=`${c.title} · nós dois`;
    const mainTitle=document.querySelector('[data-archive-title-main]');if(mainTitle)mainTitle.textContent=c.title.toUpperCase();document.querySelector('.page-lead').textContent=c.lead;
    shuffleBtn.setAttribute('aria-label',c.shuffle);shuffleBtn.setAttribute('title',c.shuffle);
    if(searchToggle){searchToggle.setAttribute('aria-label',extraCopy().search);searchToggle.setAttribute('title',extraCopy().search)}if(searchInput){searchInput.setAttribute('aria-label',extraCopy().search);searchInput.placeholder=extraCopy().placeholder}
    viewer.querySelector('.archive-viewer-close').setAttribute('aria-label',c.close);lockModal.querySelector('.archive-lock-close').setAttribute('aria-label',c.close);
    viewer.querySelector('[data-archive-prev]').setAttribute('aria-label',c.prev);viewer.querySelector('[data-archive-next]').setAttribute('aria-label',c.next);
    viewer.querySelector('[data-archive-post-prev]').setAttribute('aria-label',c.postPrev);viewer.querySelector('[data-archive-post-next]').setAttribute('aria-label',c.postNext);
    currentPosts=restoreOrder(POSTS[currentLang]||POSTS.pt);renderGrid(false);
  }

  shuffleBtn.addEventListener('click',()=>{currentPosts=smartShuffle(currentPosts.length?currentPosts:(POSTS[currentLang]||POSTS.pt));rememberOrder(currentPosts);if(searchQuery)renderSearch();else renderGrid(false);shuffleBtn.classList.remove('is-shuffling');void shuffleBtn.offsetWidth;shuffleBtn.classList.add('is-shuffling')});
  searchToggle?.addEventListener('click',()=>{const open=!searchWrap.classList.contains('is-open');searchWrap.classList.toggle('is-open',open);if(open)setTimeout(()=>searchInput?.focus(),80);else{searchQuery='';if(searchInput)searchInput.value='';renderGrid(false)}});
  searchInput?.addEventListener('input',()=>{searchQuery=searchInput.value;renderSearch()});
  searchInput?.addEventListener('keydown',e=>{
    if(e.key==='Enter'&&searchInput.value.trim().toUpperCase()==='EDITARACERVO'){
      e.preventDefault();
      searchInput.value='';searchQuery='';
      try{sessionStorage.setItem('nosdois-admin-acervo-entry','1')}catch(err){}
      location.href='admin-acervo.html';
      return;
    }
    if(e.key==='Escape'){e.preventDefault();searchQuery='';searchInput.value='';searchWrap.classList.remove('is-open');renderGrid(false);searchToggle?.focus()}
  });
  viewer.querySelector('.archive-viewer-close').addEventListener('click',closeViewer);viewer.addEventListener('click',e=>{if(e.target===viewer)closeViewer()});
  viewer.querySelector('[data-archive-prev]').addEventListener('click',()=>changeMedia(-1));viewer.querySelector('[data-archive-next]').addEventListener('click',()=>changeMedia(1));
  viewer.querySelector('[data-archive-post-prev]').addEventListener('click',()=>navigatePost(-1));viewer.querySelector('[data-archive-post-next]').addEventListener('click',()=>navigatePost(1));
  lockModal.querySelector('.archive-lock-close').addEventListener('click',()=>hideBackdrop(lockModal));lockModal.addEventListener('click',e=>{if(e.target===lockModal)hideBackdrop(lockModal)});
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'){if(viewer.classList.contains('is-open'))closeViewer();else if(lockModal.classList.contains('is-open'))hideBackdrop(lockModal)}
    if(viewer.classList.contains('is-open')&&e.key==='ArrowLeft'&&!e.shiftKey)navigatePost(-1);
    if(viewer.classList.contains('is-open')&&e.key==='ArrowRight'&&!e.shiftKey)navigatePost(1);
    if(viewer.classList.contains('is-open')&&e.shiftKey&&e.key==='ArrowLeft')changeMedia(-1);
    if(viewer.classList.contains('is-open')&&e.shiftKey&&e.key==='ArrowRight')changeMedia(1);
  });
  document.addEventListener('nosdois:authchange',e=>{
    if(auth())saveCycle({locked:false,freeMode:true,gateCompleted:true,gateCompletedAt:Date.now()});
    renderGrid(false);
  });
  document.addEventListener('nosdois:progresschange',()=>renderGrid(false));
  if(langCode)new MutationObserver(()=>applyLanguage((langCode.textContent||'PT').trim().toLowerCase())).observe(langCode,{childList:true,subtree:true,characterData:true});

  if(sentinel&&'IntersectionObserver' in window){
    const feedObserver=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)&&!searchQuery&&!(cycle.locked&&!auth()))appendFeedBatch();},{rootMargin:'700px 0px 700px',threshold:0});
    feedObserver.observe(sentinel);
  }

  prepareCycle();
  try{const saved=localStorage.getItem('site-language');if(['pt','en','es'].includes(saved))currentLang=saved}catch(e){}
  currentPosts=restoreOrder(POSTS[currentLang]||POSTS.pt);if(!cycle.order?.length||cycle.orderVersion!==ORDER_VERSION)rememberOrder(currentPosts);applyLanguage(currentLang);
})();
