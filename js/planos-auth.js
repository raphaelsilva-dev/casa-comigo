(() => {
  if(document.body.dataset.page!=='planos')return;
  const COPY={
    PT:{close:'Fechar',acquire:'Adquirir',renew:'Renovar plano',upgrade:'Fazer upgrade',package:'O que inclui',fine:'Condições e observações',confirm:'Confirmar escolha',contract:'Ir para o contrato →',signedContract:'Ver contrato assinado →',choiceLocked:'Escolha confirmada',
      statuses:{guest:'DISPONÍVEL',current:'PLANO ATUAL',pending:'AGUARDANDO CONTRATO',active:'ATIVO'},
      notLogged:'Você ainda não está logada',notLoggedSub:'Para continuar com este plano, entre na sua conta.',enter:'Entrar',
      namoro:{kicker:'PLANO ATUAL',guestKicker:'PLANO NAMORO',title:'Namoro',intro:'O plano que já está funcionando muito bem e recebendo atualizações constantes.',guestIntro:'O plano para continuar escrevendo nossos capítulos, com carinho, conversa e muitas memórias novas.',items:['Abraços ilimitados','Conversas, ligações e saudade inclusas','Dates, filmes e lanches em modo cooperativo','Suporte emocional e novas memórias'],fine:'Renovável por mais um capítulo mediante confirmação da titular e assinatura do contrato.',actionTitle:'Renovar o Namoro por +1 ano?',choices:[['renew','Sim, renovar por +1 ano','bold']],responses:{renew:['RENOVAÇÃO CONFIRMADA','Mais um capítulo reservado. Agora falta ler e aceitar as condições do nosso contrato.']}},
      casamento:{kicker:'POSSÍVEL UPGRADE',title:'Casamento',intro:'Tudo do plano atual, agora com o modo cooperativo oficialmente transformado em endereço permanente.',items:['Tudo do plano Namoro','Casa e rotina oficialmente compartilhadas','Projetos grandes em modo cooperativo','Licença vitalícia de nós dois'],fine:'O upgrade só é concluído depois da leitura e assinatura do contrato correspondente.',actionTitle:'E então… Casamento?',choices:[['wait','Vou esperar o administrador 😌','soft'],['bold','Não depende dele. Ele vai casar comigo mesmo!!!','bold']],responses:{wait:['DECISÃO ADIADA','Tudo bem. O plano continua aqui quando você quiser voltar.'],bold:['CASAMENTO ESCOLHIDO','Se é casamento, então partiu ler as cláusulas, fazer as juras e assinar o contrato.']}},
      plus:{kicker:'PLANO RECOMENDADO',title:'Casamento Plus',intro:'O pacote completo para o futuro que queremos construir: casamento, casa, viagens, projetos e família.',items:['Tudo do Casamento','Casa e projetos grandes em modo “a gente resolve”','Viagens e memórias em família','Mini nós dois nos planos futuros'],fine:'O pacote completo segue para o contrato de casamento, com as condições e votos do nosso próximo capítulo.',actionTitle:'Quer mesmo o pacote completo?',choices:[['future','Guardar para outro capítulo','soft'],['full','Quero o pacote completo 😳','bold']],responses:{future:['GUARDADO PARA DEPOIS','Tudo bem. O pacote completo continua aqui para outro capítulo.'],full:['PACOTE COMPLETO ESCOLHIDO','Casamento, casa, viagens, muitos anos juntos e mini nós dois nos planos futuros. Aviso interno ao administrador Raphael: pode preparar o coração, ela escolheu tudo. ♥']}}
    },
    EN:{close:'Close',acquire:'Get plan',renew:'Renew plan',upgrade:'Upgrade',package:'What is included',fine:'Terms and notes',confirm:'Confirm choice',contract:'Go to the contract →',signedContract:'View signed contract →',choiceLocked:'Choice confirmed',statuses:{guest:'AVAILABLE',current:'CURRENT PLAN',pending:'AWAITING CONTRACT',active:'ACTIVE'},notLogged:'You are not signed in yet',notLoggedSub:'Sign in to continue with this plan.',enter:'Sign in',
      namoro:{kicker:'CURRENT PLAN',guestKicker:'DATING PLAN',title:'Dating',intro:'The plan already working very well and receiving constant updates.',guestIntro:'The plan for continuing our chapters with affection, conversations and plenty of new memories.',items:['Unlimited hugs','Conversations, calls and missing-you mode','Dates, movies and snacks in co-op','Emotional support and new memories'],fine:'Renewable for another chapter after account-holder confirmation and contract signature.',actionTitle:'Renew Dating for +1 year?',choices:[['renew','Yes, renew for +1 year','bold']],responses:{renew:['RENEWAL CONFIRMED','One more chapter reserved. Now it is time to read and accept our contract terms.']}},
      casamento:{kicker:'POSSIBLE UPGRADE',title:'Marriage',intro:'Everything in the current plan, now with co-op mode officially becoming a permanent address.',items:['Everything in Dating','Officially shared home and routine','Big projects in cooperative mode','Lifetime license for us two'],fine:'The upgrade is completed only after reading and signing the corresponding contract.',actionTitle:'So… Marriage?',choices:[['wait','I will wait for the administrator 😌','soft'],['bold','It does not depend on him. He is marrying me anyway!!!','bold']],responses:{wait:['DECISION POSTPONED','All right. The plan will still be here whenever you want to come back.'],bold:['MARRIAGE CHOSEN','If it is marriage, then let us read the clauses, make the vows and sign the contract.']}},
      plus:{kicker:'RECOMMENDED PLAN',title:'Marriage Plus',intro:'The full package for the future we want to build: marriage, home, trips, projects and family.',items:['Everything in Marriage','A home and big projects in “we will figure it out” mode','Family trips and memories','Mini us two in our future plans'],fine:'The full package moves to the marriage contract with the terms and vows for our next chapter.',actionTitle:'Do you really want the full package?',choices:[['future','Save it for another chapter','soft'],['full','I want the full package 😳','bold']],responses:{future:['SAVED FOR LATER','No problem. The full package will still be here for another chapter.'],full:['FULL PACKAGE CHOSEN','Marriage, home, trips, many years together and mini us two in our future plans. Internal note to administrator Raphael: prepare your heart, she chose everything. ♥']}}
    },
    ES:{close:'Cerrar',acquire:'Adquirir',renew:'Renovar plan',upgrade:'Hacer upgrade',package:'Qué incluye',fine:'Condiciones y observaciones',confirm:'Confirmar elección',contract:'Ir al contrato →',signedContract:'Ver contrato firmado →',choiceLocked:'Elección confirmada',statuses:{guest:'DISPONIBLE',current:'PLAN ACTUAL',pending:'ESPERANDO CONTRATO',active:'ACTIVO'},notLogged:'Todavía no has iniciado sesión',notLoggedSub:'Entra en tu cuenta para continuar con este plan.',enter:'Entrar',
      namoro:{kicker:'PLAN ACTUAL',guestKicker:'PLAN NOVIAZGO',title:'Noviazgo',intro:'El plan que ya funciona muy bien y recibe actualizaciones constantes.',guestIntro:'El plan para seguir escribiendo nuestros capítulos con cariño, conversaciones y nuevos recuerdos.',items:['Abrazos ilimitados','Conversaciones, llamadas y nostalgia incluidas','Citas, películas y meriendas en modo cooperativo','Soporte emocional y nuevos recuerdos'],fine:'Renovable por otro capítulo después de la confirmación de la titular y la firma del contrato.',actionTitle:'¿Renovar el Noviazgo por +1 año?',choices:[['renew','Sí, renovar por +1 año','bold']],responses:{renew:['RENOVACIÓN CONFIRMADA','Un capítulo más reservado. Ahora toca leer y aceptar las condiciones de nuestro contrato.']}},
      casamento:{kicker:'POSIBLE UPGRADE',title:'Matrimonio',intro:'Todo el plan actual, ahora con el modo cooperativo convertido oficialmente en dirección permanente.',items:['Todo el Noviazgo','Casa y rutina oficialmente compartidas','Grandes proyectos en modo cooperativo','Licencia vitalicia de nosotros dos'],fine:'El upgrade solo se completa después de leer y firmar el contrato correspondiente.',actionTitle:'Y entonces… ¿Matrimonio?',choices:[['wait','Voy a esperar al administrador 😌','soft'],['bold','No depende de él. ¡Se va a casar conmigo igual!!!','bold']],responses:{wait:['DECISIÓN APLAZADA','Todo bien. El plan seguirá aquí cuando quieras volver.'],bold:['MATRIMONIO ELEGIDO','Si es matrimonio, entonces vamos a leer las cláusulas, hacer los votos y firmar el contrato.']}},
      plus:{kicker:'PLAN RECOMENDADO',title:'Matrimonio Plus',intro:'El paquete completo para el futuro que queremos construir: matrimonio, casa, viajes, proyectos y familia.',items:['Todo el Matrimonio','Casa y grandes proyectos en modo “lo resolvemos juntos”','Viajes y recuerdos en familia','Mini nosotros dos en nuestros planes futuros'],fine:'El paquete completo pasa al contrato de matrimonio, con las condiciones y votos del próximo capítulo.',actionTitle:'¿De verdad quieres el paquete completo?',choices:[['future','Guardarlo para otro capítulo','soft'],['full','Quiero el paquete completo 😳','bold']],responses:{future:['GUARDADO PARA DESPUÉS','Todo bien. El paquete completo seguirá aquí para otro capítulo.'],full:['PAQUETE COMPLETO ELEGIDO','Matrimonio, casa, viajes, muchos años juntos y mini nosotros dos en nuestros planes futuros. Aviso interno al administrador Raphael: prepara el corazón, ella eligió todo. ♥']}}
    }
  };
  const workspace=document.getElementById('plan-workspace'),panel=document.getElementById('plan-confirm-card'),content=document.getElementById('plan-confirm-content'),closeBtn=document.getElementById('plan-confirm-back'),focusBackdrop=document.getElementById('plan-focus-backdrop'),langCode=document.getElementById('sub-lang-code');
  let currentPlan=null,mode='details';
  const PLAN_RANK={namoro:1,casamento:2,plus:3};
  const lang=()=>COPY[(langCode?.textContent||'PT').trim().toUpperCase()]||COPY.PT;
  const langId=()=>(langCode?.textContent||'PT').trim().toUpperCase();
  const isAuth=()=>window.NosDoisAuth?.isAuthenticated?.()===true;
  const progress=()=>window.NosDoisProgress?.read?.()||{};
  const extra=()=>({
    PT:{previous:'Plano anterior',finish:'Conclua o contrato',upgradeAvailable:'UPGRADE DISPONÍVEL'},
    EN:{previous:'Previous plan',finish:'Finish the contract',upgradeAvailable:'UPGRADE AVAILABLE'},
    ES:{previous:'Plan anterior',finish:'Termina el contrato',upgradeAvailable:'UPGRADE DISPONIBLE'}
  }[langId()]||{previous:'Plano anterior',finish:'Conclua o contrato',upgradeAvailable:'UPGRADE DISPONÍVEL'});
  const rankOf=p=>PLAN_RANK[p]||0;
  const hasPendingContract=()=>{const p=progress();return !!(p.plan&&p.contractUnlocked&&!p.contractAccepted)};
  function isCommitted(plan,choice){return plan==='namoro'&&choice==='renew'||plan==='casamento'&&choice==='bold'||plan==='plus'&&choice==='full';}
  function contractPlan(plan){return plan==='namoro'?'namoro':plan==='plus'?'plus':'casamento';}
  function stateFor(plan){
    const p=progress(),current=p.plan||null,cr=rankOf(current),pr=rankOf(plan);
    if(!isAuth())return 'guest';
    if(current&&p.contractUnlocked&&!p.contractAccepted){
      if(plan===current)return 'pending-current';
      return 'pending-other';
    }
    if(current&&p.contractAccepted){
      if(plan===current)return 'current-signed';
      if(pr<cr)return 'previous';
      if(pr>cr)return 'upgrade';
    }
    return plan==='namoro'?'current-unselected':'upgrade';
  }
  function updateCards(){
    const c=lang(),x=extra();
    document.querySelectorAll('.plan-card').forEach(card=>{
      const key=card.dataset.planKey,idx=card.querySelector('.plan-index'),btn=card.querySelector('[data-plan-action]'),state=stateFor(key);
      let status=key==='namoro'?c.statuses.current:(key==='casamento'?c.casamento.kicker:c.plus.kicker);
      if(state==='guest')status=key==='namoro'?c.statuses.guest:(key==='casamento'?c.casamento.kicker:c.plus.kicker);
      if(state==='pending-current')status=c.statuses.pending;
      if(state==='pending-other')status=x.finish.toUpperCase();
      if(state==='current-signed')status=c.statuses.active;
      if(state==='previous')status=x.previous.toUpperCase();
      if(state==='upgrade')status=key==='namoro'?c.statuses.current:x.upgradeAvailable;
      if(idx)idx.textContent=status;
      if(!btn)return;
      btn.disabled=false;delete btn.dataset.goContract;
      if(state==='guest')btn.textContent=c.acquire;
      else if(state==='pending-current'){btn.textContent=c.contract;btn.dataset.goContract='true';}
      else if(state==='pending-other'){btn.textContent=x.finish;btn.disabled=true;}
      else if(state==='current-signed'){btn.textContent=c.signedContract;btn.dataset.goContract='true';}
      else if(state==='previous'){btn.textContent=x.previous;btn.disabled=true;}
      else if(state==='current-unselected')btn.textContent=c.renew;
      else btn.textContent=c.upgrade;
    });
  }
  function selectPlan(plan){document.querySelectorAll('.plan-card').forEach(card=>card.classList.toggle('is-selected',card.dataset.planKey===plan));}
  function openPanel(plan){currentPlan=plan;selectPlan(plan);workspace?.classList.add('is-detail-open');panel?.classList.add('is-open');panel?.setAttribute('aria-hidden','false');focusBackdrop?.classList.add('is-open');document.body.classList.add('plan-detail-modal-open');closeBtn?.classList.remove('is-hidden');closeBtn?.setAttribute('aria-label',lang().close);}
  function closePanel(){currentPlan=null;mode='details';workspace?.classList.remove('is-detail-open');panel?.classList.remove('is-open','is-committed');panel?.setAttribute('aria-hidden','true');focusBackdrop?.classList.remove('is-open');document.body.classList.remove('plan-detail-modal-open');selectPlan(null);}
  function animate(){content?.classList.remove('is-changing');if(content)void content.offsetWidth;content?.classList.add('is-changing');}
  function commonDetails(d,c){return `<span class="plan-confirm-kicker">${d.kicker}</span><h2>${d.title}</h2><p class="plan-confirm-intro">${d.intro}</p><div class="plan-confirm-package"><span>${c.package}</span><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul></div><small class="plan-detail-fine"><strong>${c.fine}</strong><br>${d.fine}</small>`;}
  function renderRestrictedDetails(plan,state){
    const c=lang(),d=c[plan],x=extra();mode='details';openPanel(plan);panel?.classList.remove('is-committed');animate();
    let action='',link=false;
    if(state==='pending-current'){action=c.contract;link=true}
    else if(state==='current-signed'){action=c.signedContract;link=true}
    else if(state==='previous')action=x.previous;
    else action=x.finish;
    content.innerHTML=`${commonDetails(d,c)}<div class="plan-confirm-actions">${link?`<a class="plan-confirm-choice is-bold plan-locked-contract" href="index.html#envelope-section">${action}</a>`:`<button class="plan-confirm-choice is-soft" disabled type="button">${action}</button>`}</div>`;
  }
  function renderDetails(plan){
    const c=lang(),d=c[plan];if(!d)return;const state=stateFor(plan);
    if(['pending-current','pending-other','current-signed','previous'].includes(state)){renderRestrictedDetails(plan,state);return;}
    mode='details';openPanel(plan);panel?.classList.remove('is-committed');animate();
    const guest=state==='guest';const kicker=guest&&plan==='namoro'?d.guestKicker:d.kicker;const intro=guest&&plan==='namoro'?d.guestIntro:d.intro;
    const actionLabel=guest?c.acquire:(plan==='namoro'?c.renew:c.upgrade);
    content.innerHTML=`<span class="plan-confirm-kicker">${kicker}</span><h2>${d.title}</h2><p class="plan-confirm-intro">${intro}</p><div class="plan-confirm-package"><span>${c.package}</span><ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul></div><small class="plan-detail-fine"><strong>${c.fine}</strong><br>${d.fine}</small><div class="plan-confirm-actions"><button class="plan-confirm-choice is-bold" data-next-action type="button">${actionLabel}</button></div>`;
    content.querySelector('[data-next-action]')?.addEventListener('click',()=>{if(isAuth())renderConfirm(plan);else renderAuthRequired(plan);});
  }
  function renderAuthRequired(plan){const c=lang();mode='auth-required';openPanel(plan);animate();content.innerHTML=`<span class="plan-confirm-kicker">${c.enter.toUpperCase()}</span><h2>${c.notLogged}</h2><p class="plan-confirm-intro">${c.notLoggedSub}</p><div class="plan-confirm-actions"><button class="plan-confirm-choice is-bold" data-open-login type="button">${c.enter}</button></div>`;content.querySelector('[data-open-login]')?.addEventListener('click',()=>window.NosDoisAuth?.openLogin?.({onSuccess:()=>{if(currentPlan===plan)renderDetails(plan);}}));}
  function renderConfirm(plan){
    if(!isAuth()){renderAuthRequired(plan);return}
    const state=stateFor(plan);if(['pending-current','pending-other','current-signed','previous'].includes(state)){renderRestrictedDetails(plan,state);return}
    const c=lang(),d=c[plan];mode='confirm';openPanel(plan);animate();
    content.innerHTML=`<span class="plan-confirm-kicker">${d.kicker}</span><h2>${d.actionTitle}</h2><p class="plan-confirm-intro">${d.intro}</p><p class="plan-confirm-question">${c.confirm}</p><div class="plan-confirm-actions">${d.choices.map(([id,label,kind])=>`<button type="button" class="plan-confirm-choice ${kind==='bold'?'is-bold':'is-soft'}" data-choice="${id}">${label}</button>`).join('')}</div>`;
    content.querySelectorAll('[data-choice]').forEach(btn=>btn.addEventListener('click',()=>showResult(plan,btn.dataset.choice)));
  }
  function heartExplosion(){for(let i=0;i<48;i++){const h=document.createElement('span');h.className='plan-celebration-heart';h.textContent=i%4===0?'♡':'♥';h.style.left=(15+Math.random()*70)+'vw';h.style.top=(30+Math.random()*35)+'vh';h.style.setProperty('--hx',`${-180+Math.random()*360}px`);h.style.setProperty('--hy',`${-180-Math.random()*360}px`);h.style.setProperty('--hr',`${-90+Math.random()*180}deg`);h.style.animationDelay=(Math.random()*.22)+'s';document.body.appendChild(h);setTimeout(()=>h.remove(),2700);}}
  function resultTitle(plan,choice){
    const titles={PT:{renew:'Mais um capítulo reservado.',wait:'Tudo bem, sem pressa.',bold:'Então partiu assinar.',future:'Fica para outro capítulo.',full:'Você escolheu o pacote completo. ♥'},EN:{renew:'One more chapter reserved.',wait:'No rush.',bold:'Then let’s sign it.',future:'Saved for another chapter.',full:'You chose the full package. ♥'},ES:{renew:'Un capítulo más reservado.',wait:'Sin prisa.',bold:'Entonces vamos a firmar.',future:'Queda para otro capítulo.',full:'Elegiste el paquete completo. ♥'}};
    return (titles[langId()]||titles.PT)[choice]||lang()[plan]?.title||'';
  }
  function showResult(plan,choice){
    const c=lang(),r=c[plan]?.responses?.[choice];if(!r)return;animate();mode='result';
    if(!isCommitted(plan,choice)){panel?.classList.remove('is-committed');content.innerHTML=`<span class="plan-confirm-kicker">${r[0]}</span><h2>${resultTitle(plan,choice)}</h2><p class="plan-confirm-intro">${r[1]}</p>`;return;}
    const p=progress(),selected=contractPlan(plan),currentRank=rankOf(p.plan),selectedRank=rankOf(selected);
    if(hasPendingContract()||currentRank>=selectedRank&&p.contractAccepted){renderRestrictedDetails(plan,stateFor(plan));return;}
    try{localStorage.setItem('nosdois-plan-choice',JSON.stringify({plan,choice,at:Date.now()}))}catch(e){}
    window.NosDoisProgress?.update?.({contractUnlocked:true,contractViewed:false,contractAccepted:false,renewalRequested:true,previousPlan:p.plan||null,plan:selected,signedAt:null});
    if(plan==='plus'&&choice==='full')heartExplosion();
    panel?.classList.add('is-committed');closeBtn?.classList.add('is-hidden');
    content.innerHTML=`<span class="plan-confirm-kicker">${r[0]}</span><h2>${resultTitle(plan,choice)}</h2><p class="plan-confirm-intro">${r[1]}</p><a class="plan-result-link" href="index.html#envelope-section">${c.contract}</a>`;
    updateCards();
  }
  document.querySelectorAll('[data-plan-action]').forEach(btn=>btn.addEventListener('click',()=>{if(btn.dataset.goContract==='true'){location.href='index.html#envelope-section';return;}if(btn.disabled)return;renderDetails(btn.dataset.planAction);}));
  closeBtn?.addEventListener('click',()=>{if(panel?.classList.contains('is-committed'))return;closePanel();});
  focusBackdrop?.addEventListener('click',()=>{if(!panel?.classList.contains('is-committed'))closePanel();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&panel?.classList.contains('is-open')&&!panel.classList.contains('is-committed')&&!document.querySelector('.auth-login-backdrop.is-open'))closePanel();});
  document.addEventListener('nosdois:authchange',()=>{updateCards();if(currentPlan&&mode==='auth-required'&&isAuth())renderDetails(currentPlan);});
  document.addEventListener('nosdois:progresschange',updateCards);
  if(langCode)new MutationObserver(()=>{updateCards();if(currentPlan&&panel?.classList.contains('is-open')){if(mode==='details')renderDetails(currentPlan);else if(mode==='auth-required')renderAuthRequired(currentPlan);else if(mode==='confirm')renderConfirm(currentPlan);}}).observe(langCode,{childList:true,subtree:true,characterData:true});
  updateCards();
})();
