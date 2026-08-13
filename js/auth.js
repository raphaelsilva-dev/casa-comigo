(() => {
  const AUTH_KEY='nosdois-auth';
  const LOGIN_EMAIL='marianajr@nosdois.com';
  const LOGIN_PASSWORD='aaa@192530';
  const PROFILE_IMAGE='images/profile/mariana.jpg';

  const COPY={
    pt:{entry:'Entrar',kicker:'CONTA · NÓS DOIS',welcome:'Bem-vinda, Mariana',title:'Entrar na conta',lead:'Use o acesso criado especialmente para este site.',email:'E-mail',password:'Senha',emailPh:'seu e-mail',passwordPh:'sua senha',submit:'Entrar',invalid:'E-mail ou senha incorretos. Tenta de novo 😌',fine:'',member:'Titular autenticada',logout:'Sair da conta',aria:'Abrir conta',signed:'Sessão ativa neste navegador.'},
    en:{entry:'Sign in',kicker:'ACCOUNT · US TWO',welcome:'Welcome, Mariana',title:'Sign in',lead:'Use the access created especially for this website.',email:'Email',password:'Password',emailPh:'your email',passwordPh:'your password',submit:'Sign in',invalid:'Incorrect email or password. Try again 😌',fine:'',member:'Authenticated account holder',logout:'Sign out',aria:'Open account',signed:'Session active in this browser.'},
    es:{entry:'Entrar',kicker:'CUENTA · NOSOTROS DOS',welcome:'Bienvenida, Mariana',title:'Iniciar sesión',lead:'Usa el acceso creado especialmente para este sitio.',email:'E-mail',password:'Contraseña',emailPh:'tu e-mail',passwordPh:'tu contraseña',submit:'Entrar',invalid:'E-mail o contraseña incorrectos. Inténtalo otra vez 😌',fine:'',member:'Titular autenticada',logout:'Cerrar sesión',aria:'Abrir cuenta',signed:'Sesión activa en este navegador.'}
  };

  const getLang=()=>{
    const code=(document.getElementById('lang-current-code')?.textContent||document.getElementById('sub-lang-code')?.textContent||'PT').trim().toLowerCase();
    return ['pt','en','es'].includes(code)?code:'pt';
  };
  const copy=()=>COPY[getLang()]||COPY.pt;
  const read=()=>{try{return JSON.parse(localStorage.getItem(AUTH_KEY)||'null')}catch(e){return null}};
  const isAuthenticated=()=>read()?.email===LOGIN_EMAIL;
  const emit=()=>document.dispatchEvent(new CustomEvent('nosdois:authchange',{detail:{authenticated:isAuthenticated(),user:read()}}));
  const showWelcome=()=>{
    document.querySelector('.auth-welcome-toast')?.remove();
    const toast=document.createElement('div');toast.className='auth-welcome-toast';toast.innerHTML=`<span>♥</span><strong>${copy().welcome}</strong>`;document.body.appendChild(toast);
    requestAnimationFrame(()=>toast.classList.add('is-visible'));
    setTimeout(()=>{toast.classList.remove('is-visible');setTimeout(()=>toast.remove(),320)},1200);
  };
  const login=(email,password)=>{
    const ok=(email||'').trim().toLowerCase()===LOGIN_EMAIL && password===LOGIN_PASSWORD;
    if(!ok)return false;
    try{localStorage.setItem(AUTH_KEY,JSON.stringify({email:LOGIN_EMAIL,name:'Mariana',loggedAt:Date.now()}))}catch(e){}
    renderAll();emit();showWelcome();return true;
  };
  const logout=()=>{try{localStorage.removeItem(AUTH_KEY)}catch(e){}renderAll();emit()};

  let loginSuccessCallback=null;
  function ensureLoginModal(){
    let modal=document.getElementById('auth-login-backdrop');
    if(modal)return modal;
    modal=document.createElement('div');modal.id='auth-login-backdrop';modal.className='auth-login-backdrop';modal.setAttribute('aria-hidden','true');
    modal.innerHTML='<section class="auth-login-modal" role="dialog" aria-modal="true" aria-labelledby="auth-login-title"><button class="auth-login-close" type="button" aria-label="Fechar">×</button><div class="auth-login-content"></div></section>';
    document.body.appendChild(modal);
    modal.querySelector('.auth-login-close')?.addEventListener('click',closeLogin);
    modal.addEventListener('click',e=>{if(e.target===modal)closeLogin();});
    return modal;
  }
  function renderLoginModal(){
    const modal=ensureLoginModal(),c=copy(),area=modal.querySelector('.auth-login-content');
    area.innerHTML=`<h2 id="auth-login-title">${c.title}</h2><p>${c.lead}</p><form class="auth-modal-form" novalidate><label><span>${c.email}</span><input type="email" autocomplete="username" placeholder="${c.emailPh}" required></label><label><span>${c.password}</span><input type="password" autocomplete="current-password" placeholder="${c.passwordPh}" required></label><p class="auth-error" role="alert" aria-live="polite"></p><button class="auth-submit" type="submit" disabled>${c.submit}</button></form>`;
    const form=area.querySelector('form'),inputs=form.querySelectorAll('input'),submit=form.querySelector('.auth-submit');
    const syncSubmit=()=>{const ready=[...inputs].every(input=>input.value.trim().length>0);submit.disabled=!ready;submit.classList.toggle('is-ready',ready);};
    inputs.forEach(input=>input.addEventListener('input',syncSubmit));syncSubmit();
    form.addEventListener('submit',e=>{e.preventDefault();if(submit.disabled)return;if(!login(inputs[0].value,inputs[1].value)){area.querySelector('.auth-error').textContent=c.invalid;inputs[1].select();return;}const cb=loginSuccessCallback;closeLogin();setTimeout(()=>{cb?.();},220);});
  }
  function openLogin(opts={}){loginSuccessCallback=typeof opts.onSuccess==='function'?opts.onSuccess:null;renderLoginModal();const modal=ensureLoginModal();modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('auth-modal-open');setTimeout(()=>modal.querySelector('input')?.focus(),60);}
  function closeLogin(){const modal=document.getElementById('auth-login-backdrop');if(!modal)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('auth-modal-open');loginSuccessCallback=null;}

  window.NosDoisAuth={isAuthenticated,login,logout,getUser:read,email:LOGIN_EMAIL,openLogin,closeLogin};

  function imageMarkup(cls=''){
    return `<img class="${cls}" src="${PROFILE_IMAGE}" alt="Foto da Mariana"><span class="auth-avatar-fallback">M</span>`;
  }
  function makeRoot(){
    const root=document.createElement('div');root.className='auth-shell';root.dataset.authShell='';
    root.innerHTML='<button class="auth-entry" type="button"></button><div class="auth-popover"></div>';
    root.addEventListener('click',e=>e.stopPropagation());
    return root;
  }
  function insertRoot(){
    if(document.querySelector('[data-auth-shell]'))return;
    const root=makeRoot();
    const themeButton=document.querySelector('.site-hotbar [data-theme-toggle], .sub-hotbar [data-theme-toggle]');
    const mainPlayer=document.querySelector('.music-mini-player');
    const subPlayer=document.querySelector('.sub-player');
    if(themeButton)themeButton.insertAdjacentElement('afterend',root);
    else if(mainPlayer)mainPlayer.insertAdjacentElement('afterend',root);
    else if(subPlayer)subPlayer.insertAdjacentElement('afterend',root);
    else document.body.appendChild(root);
  }
  function bindImageFallback(root){
    root.querySelectorAll('.auth-avatar img,.auth-account-photo img').forEach(img=>{
      const fail=()=>img.classList.add('is-missing');
      img.addEventListener('error',fail,{once:true});
      if(img.complete && !img.naturalWidth)fail();
    });
  }
  function render(root){
    const c=copy(), on=isAuthenticated(), user=read();
    const button=root.querySelector('.auth-entry,.auth-profile-button');
    if(on){
      button.className='auth-profile-button';button.setAttribute('aria-label',c.aria);button.innerHTML=`<span class="auth-avatar">${imageMarkup('')}<span class="auth-online-dot"></span></span>`;
      root.querySelector('.auth-popover').innerHTML=`<div class="auth-account-head" role="button" tabindex="0" aria-label="Abrir perfil da Mariana" title="Abrir perfil"><div class="auth-account-photo">${imageMarkup('')}</div><div class="auth-account-meta"><strong>${user?.name||'Mariana'}</strong><small>${LOGIN_EMAIL}</small></div></div><button class="auth-logout" type="button">${c.logout}</button>`;
      root.querySelector('.auth-logout')?.addEventListener('click',()=>{root.classList.remove('is-open');logout()});
    }else{
      button.className='auth-entry';button.setAttribute('aria-label',c.aria);button.innerHTML=`<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 7a7 7 0 0 0-14 0"></path></svg><span class="auth-entry-label">${c.entry}</span>`;
      root.querySelector('.auth-popover').innerHTML='';root.classList.remove('is-open');
    }
    bindImageFallback(root);
    const trigger=root.querySelector('.auth-entry,.auth-profile-button');
    if(trigger)trigger.onclick=()=>{if(!isAuthenticated()){openLogin();return;}document.querySelectorAll('[data-auth-shell].is-open').forEach(x=>{if(x!==root)x.classList.remove('is-open')});root.classList.toggle('is-open');};
  }
  function renderAll(){document.querySelectorAll('[data-auth-shell]').forEach(render)}

  insertRoot();renderAll();
  document.addEventListener('click',()=>document.querySelectorAll('[data-auth-shell].is-open').forEach(x=>x.classList.remove('is-open')));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('[data-auth-shell].is-open').forEach(x=>x.classList.remove('is-open'));if(document.getElementById('auth-login-backdrop')?.classList.contains('is-open'))closeLogin();}});
  const langNode=document.getElementById('lang-current-code')||document.getElementById('sub-lang-code');
  if(langNode)new MutationObserver(renderAll).observe(langNode,{childList:true,characterData:true,subtree:true});
})();
