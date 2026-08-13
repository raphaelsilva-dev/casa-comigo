(() => {
  const KEY='nosdois-progress';
  const SECRET_COMMAND='REINICIARNOSDOIS';
  const EXPERIENCE_KEYS=['nosdois-progress','nosdois-auth','nosdois-plan-choice','nosdois-voucher-redemptions','nosdois-acervo-cycle','nosdois-acervo-usage','nosdois-profile-custom'];
  const defaults={contractUnlocked:false,contractViewed:false,contractAccepted:false,renewalRequested:false,plan:null,previousPlan:null,signedAt:null,contractHistory:[]};
  const read=()=>{try{const value={...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')};if(value.contractAccepted)value.contractViewed=true;if(!Array.isArray(value.contractHistory))value.contractHistory=[];return value}catch(e){return {...defaults}}};
  const write=(patch={})=>{
    const next={...read(),...patch};
    try{localStorage.setItem(KEY,JSON.stringify(next))}catch(e){}
    document.dispatchEvent(new CustomEvent('nosdois:progresschange',{detail:next}));
    renderGate();
    return next;
  };
  const isAuth=()=>window.NosDoisAuth?.isAuthenticated?.()===true;

  const getLang=()=>((document.getElementById('lang-current-code')?.textContent||document.getElementById('sub-lang-code')?.textContent||'PT').trim().toLowerCase());
  const COPY={
    pt:{title:'E agora? Eu só quero mais capítulos de você na minha vida.',lead:'Eu amo tudo o que a gente já viveu, mas gosto ainda mais de imaginar o que ainda cabe em nós: mais dias, mais risadas, mais saudade virando abraço e histórias que a gente nem sabe que vai contar. Se você também quiser continuar escrevendo isso comigo, tem uma escolha esperando por você.',button:'Continuar nossa história →',signedTitle:'Nosso próximo capítulo já começou',signedLead:'Essa escolha já foi feita. Agora ela faz parte da nossa história.'},
    en:{title:'And now? I just want more chapters of you in my life.',lead:'I love everything we have already lived, but I love imagining what still fits inside us even more: more days, more laughter, more missing-you moments turning into hugs, and stories we do not even know we will tell yet. If you want to keep writing this with me too, there is a choice waiting for you.',button:'Continue our story →',signedTitle:'Our next chapter has already begun',signedLead:'That choice has already been made. Now it is part of our story.'},
    es:{title:'¿Y ahora? Solo quiero más capítulos tuyos en mi vida.',lead:'Amo todo lo que ya vivimos, pero me gusta todavía más imaginar todo lo que aún cabe en nosotros: más días, más risas, más nostalgia convertida en abrazo y historias que todavía ni sabemos que vamos a contar. Si tú también quieres seguir escribiendo esto conmigo, hay una elección esperándote.',button:'Continuar nuestra historia →',signedTitle:'Nuestro próximo capítulo ya empezó',signedLead:'Esa elección ya fue tomada. Ahora forma parte de nuestra historia.'}
  };
  function renderProgressUI(){
    const p=read(),auth=isAuth(),contractVisible=auth&&p.contractUnlocked;
    document.querySelectorAll('[data-contract-nav]').forEach(el=>{el.classList.toggle('contract-nav-hidden',!contractVisible);el.setAttribute('aria-hidden',String(!contractVisible));});
    const contractFooter=document.querySelector('[data-footer-progress="contract"]');
    const memoryFooter=document.querySelector('[data-footer-progress="memories"]');
    const footerCopy={
      pt:{contract:'Contrato',reread:'Reler o contrato',memories:'Memórias'},
      en:{contract:'Contract',reread:'Read the contract again',memories:'Memories'},
      es:{contract:'Contrato',reread:'Leer el contrato otra vez',memories:'Recuerdos'}
    }[getLang()]||{contract:'Contrato',reread:'Reler o contrato',memories:'Memórias'};
    if(contractFooter){
      const showContract=auth&&p.contractUnlocked;
      contractFooter.classList.toggle('footer-progress-hidden',!showContract);
      contractFooter.textContent=p.contractViewed?footerCopy.reread:footerCopy.contract;
    }
    if(memoryFooter){
      const showMemories=auth&&(p.contractAccepted||(Array.isArray(p.contractHistory)&&p.contractHistory.length>0));
      memoryFooter.classList.toggle('footer-progress-hidden',!showMemories);
      memoryFooter.textContent=footerCopy.memories;
    }
  }
  function renderGate(){
    renderProgressUI();
    const section=document.getElementById('envelope-section');
    const gate=document.getElementById('contract-gate');
    if(!section||!gate)return;
    const p=read(),auth=isAuth(), unlocked=auth&&p.contractUnlocked;
    section.classList.toggle('contract-is-locked',!unlocked);
    const c=COPY[getLang()]||COPY.pt;
    gate.querySelector('[data-gate-title]')?.replaceChildren(document.createTextNode(c.title));
    gate.querySelector('[data-gate-lead]')?.replaceChildren(document.createTextNode(c.lead));
    const btn=gate.querySelector('[data-gate-button]'); if(btn)btn.textContent=c.button;
  }

  function resetExperience(){
    EXPERIENCE_KEYS.forEach(k=>{try{localStorage.removeItem(k)}catch(e){}});
    try{sessionStorage.setItem('nosdois-reset-just-now','1')}catch(e){}
    const overlay=document.createElement('div');
    overlay.setAttribute('role','status');
    overlay.innerHTML='<div><span>REINICIANDO · NÓS DOIS</span><strong>Voltando ao começo… ♥</strong></div>';
    Object.assign(overlay.style,{position:'fixed',inset:'0',zIndex:'99999',display:'grid',placeItems:'center',background:'rgba(4,16,31,.72)',backdropFilter:'blur(18px)',WebkitBackdropFilter:'blur(18px)',color:'#f5f9ff',opacity:'0',transition:'opacity .28s ease'});
    const inner=overlay.firstElementChild;Object.assign(inner.style,{display:'grid',gap:'12px',textAlign:'center',padding:'28px'});
    Object.assign(inner.querySelector('span').style,{fontFamily:'"Press Start 2P", monospace',fontSize:'9px',letterSpacing:'1px',color:'#84b4ff'});
    Object.assign(inner.querySelector('strong').style,{fontFamily:'"Roboto Slab", Georgia, serif',fontSize:'clamp(1.6rem,4vw,2.5rem)'});
    document.body.appendChild(overlay);requestAnimationFrame(()=>overlay.style.opacity='1');
    setTimeout(()=>{location.href='index.html'},1250);
  }

  let secretBuffer='',secretTimer=0;
  document.addEventListener('keydown',e=>{
    const target=e.target;
    if(target&&(target.matches?.('input,textarea,[contenteditable="true"]')))return;
    clearTimeout(secretTimer);
    if(e.key==='Enter'){
      if(secretBuffer.endsWith(SECRET_COMMAND)){e.preventDefault();secretBuffer='';resetExperience();return;}
    }else if(e.key.length===1){
      secretBuffer=(secretBuffer+e.key.toUpperCase()).slice(-SECRET_COMMAND.length);
    }
    secretTimer=setTimeout(()=>{secretBuffer=''},4500);
  });

  window.NosDoisProgress={read,update:write,refresh:renderGate,isContractUnlocked:()=>read().contractUnlocked,isContractAccepted:()=>read().contractAccepted,isProtectedContentAvailable:()=>{const p=read();return isAuth()&&(p.contractAccepted||(Array.isArray(p.contractHistory)&&p.contractHistory.length>0))},resetExperience,secretCommand:SECRET_COMMAND};
  document.addEventListener('nosdois:authchange',renderGate);
  document.addEventListener('nosdois:progresschange',renderGate);
  const lang=document.getElementById('lang-current-code')||document.getElementById('sub-lang-code');
  if(lang)new MutationObserver(renderGate).observe(lang,{childList:true,subtree:true,characterData:true});
  renderGate();
})();
