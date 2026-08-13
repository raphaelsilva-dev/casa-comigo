(() => {
  const KEY = 'nosdois-theme';
  const root = document.documentElement;

  function systemTheme(){
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function savedTheme(){
    try{
      const value = localStorage.getItem(KEY);
      return value === 'dark' || value === 'light' ? value : null;
    }catch(e){ return null; }
  }

  function applyTheme(theme, persist=false){
    const next = theme === 'dark' ? 'dark' : 'light';
    root.dataset.theme = next;
    root.style.colorScheme = next;
    if(persist){
      try{ localStorage.setItem(KEY, next); }catch(e){}
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', next === 'dark' ? '#07111f' : '#d8e8ff');

    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const goingTo = next === 'dark' ? 'claro' : 'escuro';
      button.setAttribute('aria-label', `Ativar modo ${goingTo}`);
      button.setAttribute('title', `Modo ${goingTo}`);
      button.setAttribute('aria-pressed', String(next === 'dark'));
    });
  }

  // Executa cedo para evitar o clarão branco antes do CSS terminar de renderizar.
  applyTheme(savedTheme() || systemTheme());

  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(root.dataset.theme || savedTheme() || systemTheme());
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.addEventListener('click', () => {
        applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
      });
    });
  });

  window.addEventListener('storage', event => {
    if(event.key === KEY && (event.newValue === 'dark' || event.newValue === 'light')){
      applyTheme(event.newValue);
    }
  });
})();
