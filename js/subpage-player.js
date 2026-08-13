(() => {
  const CFG = window.NOSDOIS_CONFIG || (typeof CONFIG !== 'undefined' ? CONFIG : null);
  if(!CFG || !Array.isArray(CFG.localPlaylist) || !CFG.localPlaylist.length) return;

  const STATE_KEY = 'nosdois-player-state';
  const CROSSFADE = 4;
  const MANUAL_FADE = 1.8;
  const player = document.getElementById('sub-player');
  const control = document.getElementById('sub-music-control');
  const titleEl = document.getElementById('sub-music-title');
  const menuList = document.getElementById('sub-music-list');
  const menu = player?.querySelector('.sub-music-menu');
  const menuClose = player?.querySelector('.sub-music-menu-close');
  const menuPlaceholder = menu ? document.createComment('sub-music-menu-home') : null;
  if(menu && menuPlaceholder) menu.parentNode?.insertBefore(menuPlaceholder,menu);
  const audios = [document.getElementById('sub-audio-a'), document.getElementById('sub-audio-b')];
  if(!player || !control || !menuList || audios.some(a => !a)) return;

  const touch = window.matchMedia('(max-width:900px), (hover:none), (pointer:coarse)');
  let active = 0, playing = false, fading = false, frame = null, queued = null;
  let current = 0, shuffleBag = [], history = [], failed = new Set();
  let restoredTime = 0;

  function readState(){
    try{return JSON.parse(localStorage.getItem(STATE_KEY) || 'null')}catch(e){return null}
  }
  function saveState(){
    const audio = audios[active];
    const data = {trackIndex:current,currentTime:Number.isFinite(audio.currentTime)?audio.currentTime:0,isPlaying:playing,updatedAt:Date.now(),shuffleBag,history};
    try{localStorage.setItem(STATE_KEY,JSON.stringify(data))}catch(e){}
  }
  const saved = readState();
  if(saved && Number.isInteger(saved.trackIndex)) current = ((saved.trackIndex%CFG.localPlaylist.length)+CFG.localPlaylist.length)%CFG.localPlaylist.length;
  else current = Math.floor(Math.random()*CFG.localPlaylist.length);
  if(saved && Array.isArray(saved.shuffleBag)) shuffleBag = saved.shuffleBag.filter(Number.isInteger);
  if(saved && Array.isArray(saved.history)) history = saved.history.filter(Number.isInteger).slice(-5);
  restoredTime = saved && Number.isFinite(saved.currentTime) ? Math.max(0,saved.currentTime) : 0;

  const activeAudio=()=>audios[active], standbyAudio=()=>audios[1-active];
  const normalize=i=>(i%CFG.localPlaylist.length+CFG.localPlaylist.length)%CFG.localPlaylist.length;
  const clean=v=>String(v||'').replace(/^.*[\\/]/,'').replace(/\.(mp3|m4a|aac|wav|ogg|flac)$/i,'').trim();
  const trackTitle=i=>clean(CFG.localPlaylist[i]?.title||CFG.localPlaylist[i]?.src||'Faixa');
  const mood=i=>CFG.localPlaylist[i]?.mood||'warm';
  const random=a=>a[Math.floor(Math.random()*a.length)];
  function refill(){shuffleBag=CFG.localPlaylist.map((_,i)=>i).filter(i=>i!==current&&!failed.has(i))}
  function nextIndex(){
    if(queued!==null&&!failed.has(queued)) return queued;
    if(!shuffleBag.length) refill();
    let candidates=shuffleBag.filter(i=>i!==current&&!failed.has(i));
    if(!candidates.length){refill();candidates=[...shuffleBag]}
    if(!candidates.length) return current;
    const last=history.at(-1), prev=history.at(-2), lm=Number.isInteger(last)?mood(last):mood(current), pm=Number.isInteger(prev)?mood(prev):null;
    let preferred=candidates.filter(i=>{const m=mood(i);if((lm==='melancholy'||lm==='intense')&&m===lm)return false;if(pm&&pm===lm&&m===lm)return false;return true});
    queued=random(preferred.length?preferred:candidates);return queued;
  }
  function register(i){shuffleBag=shuffleBag.filter(x=>x!==i);history.push(i);if(history.length>5)history.shift();queued=null;saveState()}
  function setTrack(audio,i,reset=true){const n=normalize(i),t=CFG.localPlaylist[n];if(Number(audio.dataset.trackIndex)!==n||!audio.getAttribute('src')){audio.src=t.src;audio.dataset.trackIndex=String(n);audio.load()}if(reset){try{audio.currentTime=0}catch(e){}}}
  function restorePosition(audio,time){if(!time)return;const set=()=>{try{if(Number.isFinite(audio.duration)&&time<audio.duration)audio.currentTime=time}catch(e){}};if(audio.readyState>=1)set();else audio.addEventListener('loadedmetadata',set,{once:true})}
  function render(){
    titleEl.textContent=trackTitle(current);control.title=`${trackTitle(current)}${CFG.localPlaylist[current]?.artist?' — '+CFG.localPlaylist[current].artist:''}`;control.classList.toggle('playing',playing);
    menuList.innerHTML=CFG.localPlaylist.map((t,i)=>`<button class="sub-track ${i===current?'active':''}" type="button" data-track="${i}"><span class="sub-track-index">${String(i+1).padStart(2,'0')}</span><span class="sub-track-copy"><span class="sub-track-title">${clean(t.title||t.src)}</span><span class="sub-track-artist">${t.artist||''}</span></span><span class="sub-track-mark">♪</span></button>`).join('');
  }
  function setPlaying(v){playing=!!v;render();saveState()}
  function prepare(){if(fading)return;const n=nextIndex();if(n===current)return;const a=standbyAudio();setTrack(a,n,true);a.volume=0}
  function stopFade(){if(frame)cancelAnimationFrame(frame);frame=null;fading=false}
  function pause(){stopFade();audios.forEach((a,i)=>{a.pause();a.volume=i===active?1:0});setPlaying(false)}
  async function start(){const a=activeAudio();setTrack(a,current,false);a.volume=1;try{await a.play();if(!history.length||history.at(-1)!==current)register(current);setPlaying(true);prepare();return true}catch(e){setPlaying(false);return false}}
  async function fadeTo(i,seconds=MANUAL_FADE){
    if(fading)return false;const n=normalize(i);if(n===current)return start();const from=activeAudio(),to=standbyAudio();setTrack(to,n,true);to.volume=0;try{await to.play()}catch(e){failed.add(n);return false}fading=true;const dur=Math.max(.25,seconds)*1000,startAt=performance.now();
    const step=now=>{const p=Math.min(1,(now-startAt)/dur);from.volume=Math.cos(p*Math.PI*.5);to.volume=Math.sin(p*Math.PI*.5);if(p<1){frame=requestAnimationFrame(step);return}from.pause();try{from.currentTime=0}catch(e){}from.volume=0;to.volume=1;active=1-active;current=n;register(n);fading=false;frame=null;setPlaying(true);prepare()};frame=requestAnimationFrame(step);return true
  }

  function setMenuExpanded(open){control.setAttribute('aria-expanded',open?'true':'false')}
  function openMobileMenu(){
    if(!menu)return;
    if(menu.parentNode!==document.body)document.body.appendChild(menu);
    player.classList.add('menu-open');menu.classList.add('is-mobile-open');document.body.classList.add('music-menu-modal-open');setMenuExpanded(true);
    requestAnimationFrame(()=>menu.querySelector('.sub-track.active')?.scrollIntoView({block:'center'}));
  }
  function closeMobileMenu(restoreFocus=false){
    if(!menu)return;
    player.classList.remove('menu-open');menu.classList.remove('is-mobile-open');document.body.classList.remove('music-menu-modal-open');setMenuExpanded(false);
    if(menuPlaceholder?.parentNode&&menu.parentNode===document.body)menuPlaceholder.parentNode.insertBefore(menu,menuPlaceholder.nextSibling);
    if(restoreFocus)control.focus({preventScroll:true});
  }
  control.setAttribute('aria-controls','sub-music-menu');setMenuExpanded(false);if(menu)menu.id='sub-music-menu';

  control.addEventListener('click',async e=>{if(touch.matches){openMobileMenu();e.stopPropagation()}if(playing&&!activeAudio().paused)pause();else await start()});
  menuList.addEventListener('click',async e=>{const b=e.target.closest('[data-track]');if(!b)return;e.stopPropagation();const n=Number(b.dataset.track);queued=null;if(playing&&!activeAudio().paused)await fadeTo(n,MANUAL_FADE);else{current=normalize(n);setTrack(activeAudio(),current,true);render();await start()}});
  document.addEventListener('click',e=>{if(!e.target.closest('#sub-player')&&!e.target.closest('#sub-music-menu'))closeMobileMenu()});
  menuClose?.addEventListener('click',e=>{e.stopPropagation();closeMobileMenu(true)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('is-mobile-open'))closeMobileMenu(true)});
  touch.addEventListener?.('change',e=>{if(!e.matches)closeMobileMenu()});

  audios.forEach((a,i)=>{a.addEventListener('timeupdate',()=>{if(i!==active||fading||a.paused)return;if(Math.floor(a.currentTime)%2===0)saveState();if(Number.isFinite(a.duration)&&a.duration>CROSSFADE+1&&a.duration-a.currentTime<=CROSSFADE)fadeTo(nextIndex(),CROSSFADE)});a.addEventListener('ended',()=>{if(i===active&&!fading)fadeTo(nextIndex(),.45)});a.addEventListener('error',()=>{const n=Number(a.dataset.trackIndex);if(Number.isInteger(n))failed.add(n)})});
  window.addEventListener('pagehide',saveState);

  setTrack(activeAudio(),current,false);restorePosition(activeAudio(),restoredTime);refill();render();prepare();
  if(saved?.isPlaying && Date.now()-(saved.updatedAt||0)<20000){setTimeout(()=>start(),120)}
})();
