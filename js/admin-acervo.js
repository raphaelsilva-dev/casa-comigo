(() => {
  const originalContent=window.ACERVO_CONTENT||{pt:[],en:[],es:[]};
  const RESET_PASSWORD='aaa@192530';
  const EXPERIENCE_KEYS=['nosdois-progress','nosdois-auth','nosdois-plan-choice','nosdois-voucher-redemptions','nosdois-acervo-cycle','nosdois-acervo-usage','nosdois-profile-custom'];
  let posts=(Array.isArray(originalContent.pt)?originalContent.pt:[]).map(normalizePost);
  let translations={en:Array.isArray(originalContent.en)?originalContent.en:[],es:Array.isArray(originalContent.es)?originalContent.es:[]};
  let rootHandle=null,mediaDirHandle=null,thumbDirHandle=null,editingId=null,currentKind='photo',legacyWide=false;
  let mediaItems=[];
  let feed={ratio:'auto',x:50,y:50,zoom:1,rotate:0};
  const objectUrls=new Set();

  const $=s=>document.querySelector(s);
  const els={
    connect:$('#connect-project'),projectDot:$('[data-project-dot]'),projectStatus:$('[data-project-status]'),projectHint:$('[data-project-hint]'),
    editorKicker:$('[data-editor-kicker]'),editorTitle:$('[data-editor-title]'),typeGrid:$('#post-type-grid'),drop:$('#media-dropzone'),input:$('#media-input'),mediaList:$('#media-list'),
    cropSection:$('#crop-section'),cropPreview:$('#crop-preview'),ratio:$('#crop-ratio'),x:$('#crop-x'),y:$('#crop-y'),zoom:$('#crop-zoom'),xOut:$('#crop-x-output'),yOut:$('#crop-y-output'),zoomOut:$('#crop-zoom-output'),
    rotateLeft:$('#rotate-left'),rotateRight:$('#rotate-right'),cropReset:$('#crop-reset'),ratioPicker:$('#crop-ratio-picker'),ratioTrigger:$('#crop-ratio-trigger'),ratioMenu:$('#crop-ratio-menu'),ratioLabel:$('[data-ratio-label]'),title:$('#post-title'),titleFeed:$('#post-title-feed'),titlePost:$('#post-title-post'),text:$('#post-text'),textFeed:$('#post-text-feed'),textPost:$('#post-text-post'),detailsPost:$('#post-details-post'),signature:$('#post-signature'),lock:$('#post-lock'),category:$('#post-category'),published:$('#post-published'),
    preview:$('#post-preview'),publish:$('#publish-post'),draft:$('#save-draft'),reset:$('#reset-editor'),saveNote:$('#save-note'),
    manageSearch:$('#manage-search'),manageKind:$('#manage-kind'),manageLock:$('#manage-lock'),manageStatus:$('#manage-status'),postList:$('#post-list'),postCount:$('#post-count'),
    orphanSection:$('#orphan-section'),orphanList:$('#orphan-list'),orphanCount:$('#orphan-count'),exportBackup:$('#export-backup'),exportContent:$('#export-content'),toast:$('#admin-toast'),
    openReset:$('#open-progress-reset'),resetModal:$('#progress-reset-modal'),resetPassword:$('#progress-reset-password'),resetError:$('#progress-reset-error'),closeReset:$('#close-progress-reset'),cancelReset:$('#cancel-progress-reset'),confirmReset:$('#confirm-progress-reset')
  };

  const TYPE_INFO={
    photo:{type:'media',category:'FOTO',label:'Foto'},carousel:{type:'media',category:'CARROSSEL',label:'Carrossel'},video:{type:'media',category:'VÍDEO',label:'Vídeo'},gif:{type:'media',category:'GIF',label:'GIF'},conversation:{type:'media',category:'CONVERSA',label:'Conversa'},reference:{type:'media',category:'REFERÊNCIA',label:'Referência'},poem:{type:'poem',category:'POESIA',label:'Poesia'},lyric:{type:'lyric',category:'TRECHO',label:'Trecho'},compliment:{type:'compliment',category:'',label:'Texto curto'}
  };
  const MEDIA_EXT=/\.(jpe?g|png|gif|webp|avif|mp4|webm|mov)$/i;
  const VIDEO_EXT=/\.(mp4|webm|mov)$/i;

  function normalizePost(post={}){
    const legacyTitle=post.showTitle!==false;
    return {...post,
      published:post.published!==false,
      media:Array.isArray(post.media)?[...post.media]:[],
      showTitleFeed:post.showTitleFeed??legacyTitle,
      showTitlePost:post.showTitlePost??legacyTitle,
      showTextFeed:post.showTextFeed??true,
      showTextPost:post.showTextPost??true,
      showDetailsPost:post.showDetailsPost??true,
      feed:{ratio:'auto',x:50,y:50,zoom:1,rotate:0,...(post.feed||{})}
    };
  }
  function kindFromPost(post){
    if(post.type==='poem')return 'poem';
    if(post.type==='lyric'||/m[uú]sica|music|song/i.test(post.category||''))return 'lyric';
    if(post.type==='compliment')return 'compliment';
    const c=(post.category||'').toUpperCase();
    if(c.includes('CARROSSEL')||c.includes('CAROUSEL')||c.includes('CARRUSEL')||(post.media?.length||0)>1)return 'carousel';
    if(c.includes('VÍDEO')||c.includes('VIDEO')||VIDEO_EXT.test(post.media?.[0]||''))return 'video';
    if(c.includes('GIF')||/\.gif$/i.test(post.media?.[0]||''))return 'gif';
    if(c.includes('CONVERS'))return 'conversation';
    if(c.includes('REFER'))return 'reference';
    return 'photo';
  }
  function esc(value=''){return String(value).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]))}
  function slug(value='post'){return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,46)||'post'}
  function uniqueId(kind,title){const base=`${kind}-${slug(title||'novo')}`;let id=base,n=2;const ids=new Set(posts.map(p=>p.id));while(ids.has(id))id=`${base}-${n++}`;return id}
  function toast(message){els.toast.textContent=message;els.toast.classList.add('is-visible');clearTimeout(toast.t);toast.t=setTimeout(()=>els.toast.classList.remove('is-visible'),2600)}

  function setProjectStatus(on,text,hint){els.projectDot.classList.toggle('is-on',on);els.projectStatus.textContent=text;els.projectHint.textContent=hint||'';els.connect.textContent=on?'Trocar pasta do projeto':'Selecionar pasta do projeto'}

  function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open('nosdois-admin',1);req.onupgradeneeded=()=>req.result.createObjectStore('handles');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
  async function storeHandle(handle){try{const db=await openDB();const tx=db.transaction('handles','readwrite');tx.objectStore('handles').put(handle,'project');await new Promise((r,j)=>{tx.oncomplete=r;tx.onerror=()=>j(tx.error)});db.close()}catch(e){}}
  async function restoreHandle(){try{const db=await openDB();const tx=db.transaction('handles','readonly');const req=tx.objectStore('handles').get('project');const handle=await new Promise((r,j)=>{req.onsuccess=()=>r(req.result);req.onerror=()=>j(req.error)});db.close();if(!handle)return;const perm=await handle.queryPermission({mode:'readwrite'});if(perm==='granted')await useProjectHandle(handle,false)}catch(e){}}

  async function useProjectHandle(handle,persist=true){
    const jsDir=await handle.getDirectoryHandle('js');
    const images=await handle.getDirectoryHandle('images');
    const acervo=await images.getDirectoryHandle('acervo');
    const thumbs=await acervo.getDirectoryHandle('thumbs',{create:true});
    rootHandle=handle;mediaDirHandle=acervo;thumbDirHandle=thumbs;
    setProjectStatus(true,`Projeto conectado: ${handle.name}`,'Publicações podem ser gravadas direto na pasta.');
    if(persist)await storeHandle(handle);
    await scanOrphans();
    return jsDir;
  }
  async function connectProject(){
    if(!('showDirectoryPicker' in window)){toast('Seu navegador não liberou acesso à pasta. Use Edge/Chrome via localhost ou exporte o arquivo pelo botão de backup.');return false}
    try{
      const handle=await window.showDirectoryPicker({mode:'readwrite'});
      const permission=await handle.requestPermission({mode:'readwrite'});
      if(permission!=='granted')throw new Error('Permissão não concedida');
      await useProjectHandle(handle,true);toast('Pasta do projeto conectada ✓');return true;
    }catch(e){if(e?.name!=='AbortError')toast('Selecione a pasta raiz do projeto, aquela que contém js/ e images/.');return false}
  }
  async function ensureProject(){
    if(rootHandle){try{const p=await rootHandle.queryPermission({mode:'readwrite'});if(p==='granted')return true;const asked=await rootHandle.requestPermission({mode:'readwrite'});if(asked==='granted'){await useProjectHandle(rootHandle,false);return true}}catch(e){}}
    return connectProject();
  }

  function clearObjectUrls(){for(const url of objectUrls)URL.revokeObjectURL(url);objectUrls.clear()}
  function mediaUrl(item){if(item.file){if(!item.url){item.url=URL.createObjectURL(item.file);objectUrls.add(item.url)}return item.url}return item.path||''}
  function mediaName(item){return item.file?.name||item.path?.split('/').pop()||'mídia'}
  function isVideoItem(item){return item.file?item.file.type.startsWith('video/'):VIDEO_EXT.test(item.path||'')}

  function addFiles(files){
    const list=[...files].filter(file=>file.type.startsWith('image/')||file.type.startsWith('video/'));
    if(!list.length)return;
    list.forEach(file=>mediaItems.push({file,url:null,path:null}));
    if(currentKind==='photo'&&mediaItems.length>1)switchKind('carousel');
    renderMedia();renderCrop();renderPreview();
  }
  function setExistingMedia(paths=[]){clearObjectUrls();mediaItems=paths.map(path=>({file:null,url:null,path}));renderMedia();renderCrop()}
  function renderMedia(){
    els.mediaList.innerHTML='';
    mediaItems.forEach((item,index)=>{
      const row=document.createElement('div');row.className='admin-media-item'+(index===0?' is-first':'');row.draggable=true;row.dataset.index=index;
      const url=mediaUrl(item);const visual=isVideoItem(item)?`<video src="${esc(url)}" muted playsinline></video>`:`<img src="${esc(url)}" alt="">`;
      row.innerHTML=`${visual}<span class="admin-media-index">${index+1}</span><button class="admin-media-remove" type="button" aria-label="Remover">×</button><span class="admin-media-name">${esc(mediaName(item))}</span>`;
      row.querySelector('.admin-media-remove').addEventListener('click',e=>{e.stopPropagation();const [removed]=mediaItems.splice(index,1);if(removed?.url&&objectUrls.has(removed.url)){URL.revokeObjectURL(removed.url);objectUrls.delete(removed.url)}renderMedia();renderCrop();renderPreview()});
      row.addEventListener('dragstart',e=>{e.dataTransfer.setData('text/plain',String(index));e.dataTransfer.effectAllowed='move'});
      row.addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect='move'});
      row.addEventListener('drop',e=>{e.preventDefault();const from=Number(e.dataTransfer.getData('text/plain')),to=index;if(Number.isInteger(from)&&from!==to&&mediaItems[from]){const [m]=mediaItems.splice(from,1);mediaItems.splice(to,0,m);renderMedia();renderCrop();renderPreview()}});
      els.mediaList.appendChild(row);
    });
  }

  const RATIO_LABELS={auto:'Automático','1:1':'1:1 · Instagram','4:5':'4:5 · Retrato','9:16':'9:16 · Vertical','16:9':'16:9 · Horizontal',original:'Original'};
  function setRatioValue(value,update=true){
    const next=RATIO_LABELS[value]?value:'auto';
    els.ratio.value=next;
    if(els.ratioLabel)els.ratioLabel.textContent=RATIO_LABELS[next];
    els.ratioMenu?.querySelectorAll('[data-ratio-value]').forEach(btn=>btn.setAttribute('aria-selected',String(btn.dataset.ratioValue===next)));
    if(update){feed={...feed,ratio:next};renderCrop();renderPreview()}
  }
  function closeRatioPicker(returnFocus=false){els.ratioPicker?.classList.remove('is-open');els.ratioTrigger?.setAttribute('aria-expanded','false');if(returnFocus)els.ratioTrigger?.focus()}
  function openRatioPicker(){els.ratioPicker?.classList.add('is-open');els.ratioTrigger?.setAttribute('aria-expanded','true');const active=els.ratioMenu?.querySelector(`[data-ratio-value="${CSS.escape(els.ratio.value)}"]`);setTimeout(()=>active?.focus(),0)}

  function cropAspectValue(){return feed.ratio==='4:5'?'4 / 5':feed.ratio==='9:16'?'9 / 16':feed.ratio==='16:9'?'16 / 9':'1 / 1'}
  function renderCrop(){
    const first=mediaItems[0];
    els.cropSection.hidden=!first;
    if(!first){els.cropPreview.innerHTML='';return}
    const url=mediaUrl(first);const video=isVideoItem(first);
    els.cropPreview.innerHTML=`<div class="admin-crop-frame" data-ratio="${esc(feed.ratio)}" style="aspect-ratio:${cropAspectValue()}">${video?`<video src="${esc(url)}" muted autoplay loop playsinline></video>`:`<img src="${esc(url)}" alt="Prévia do enquadramento">`}</div>`;
    const media=els.cropPreview.querySelector('img,video');
    if(media){media.style.objectPosition=`${feed.x}% ${feed.y}%`;media.style.transform=`scale(${feed.zoom}) rotate(${feed.rotate}deg)`}
    setRatioValue(feed.ratio,false);els.x.value=feed.x;els.y.value=feed.y;els.zoom.value=feed.zoom;els.xOut.textContent=`${Math.round(feed.x)}%`;els.yOut.textContent=`${Math.round(feed.y)}%`;els.zoomOut.textContent=`${Number(feed.zoom).toFixed(2)}×`;
  }
  function readCropControls(){feed={...feed,ratio:els.ratio.value,x:Number(els.x.value),y:Number(els.y.value),zoom:Number(els.zoom.value)};renderCrop();renderPreview()}
  function resetCrop(){feed={ratio:'auto',x:50,y:50,zoom:1,rotate:0};renderCrop();renderPreview()}

  function switchKind(kind,{keepCategory=false}={}){
    if(!TYPE_INFO[kind])return;currentKind=kind;
    els.typeGrid.querySelectorAll('[data-kind]').forEach(btn=>btn.classList.toggle('is-active',btn.dataset.kind===kind));
    if(!keepCategory)els.category.value=TYPE_INFO[kind].category;
    els.drop.hidden=false;
    renderPreview();
  }

  function currentFormPost(publishedOverride=null){
    const info=TYPE_INFO[currentKind],title=els.title.value.trim();
    const id=editingId||uniqueId(currentKind,title);
    return normalizePost({
      id,type:info.type,category:els.category.value.trim()||info.category,title:title||(info.type==='media'?'Sem legenda':'Sem título'),
      showTitleFeed:els.titleFeed.checked,showTitlePost:els.titlePost.checked,showTextFeed:els.textFeed.checked,showTextPost:els.textPost.checked,showDetailsPost:els.detailsPost.checked,
      text:els.text.value.trim(),signature:els.signature.value.trim(),
      media:mediaItems.map(item=>item.path).filter(Boolean),wide:feed.ratio==='16:9'||(feed.ratio==='auto'&&legacyWide),lock:els.lock.value,
      published:publishedOverride===null?els.published.checked:publishedOverride,feed:{...feed}
    });
  }
  function renderPreview(){
    const post=currentFormPost();const first=mediaItems[0];
    if(!first&&!els.title.value.trim()&&!els.text.value.trim()){els.preview.innerHTML='<span class="admin-kicker">PRÉ-VISUALIZAÇÃO</span><div class="admin-preview-empty">Adicione mídia ou comece a escrever para ver uma prévia.</div>';return}
    const media=first?(()=>{const url=mediaUrl(first),style=`object-position:${feed.x}% ${feed.y}%;transform:scale(${feed.zoom}) rotate(${feed.rotate}deg)`;return isVideoItem(first)?`<video src="${esc(url)}" muted autoplay loop playsinline style="${style}"></video>`:`<img src="${esc(url)}" alt="" style="${style}">`})():'<span class="admin-kicker">TEXTO</span>';
    const textKind=['poem','lyric','compliment'].includes(currentKind);
    const hiddenCategory=currentKind==='compliment'&&!/m[uú]sica|music|song/i.test(post.category||'');
    const categoryLabel=currentKind==='lyric'||/m[uú]sica|music|song/i.test(post.category||'')?'TRECHO':(post.category||TYPE_INFO[currentKind].label);
    const previewTitle=post.showTitleFeed!==false?`<h4>${esc(post.title)}</h4>`:'';
    const previewText=post.showTextFeed!==false?`<p>${esc(post.text||'Sem comentário.')}</p>`:'';
    els.preview.innerHTML=`<span class="admin-kicker">PRÉ-VISUALIZAÇÃO DO FEED</span><div class="admin-preview-post ${textKind?'is-text-preview':''} ${textKind&&first?'has-text-media':''}">${textKind&&first?`<div class="admin-preview-text-bg">${media}</div>`:`<div class="admin-preview-media">${media}</div>`}<div class="admin-preview-copy">${hiddenCategory?'':`<small>${esc(categoryLabel)}</small>`}${previewTitle}${previewText}</div></div>`;
  }

  function resetEditor(){
    editingId=null;legacyWide=false;clearObjectUrls();mediaItems=[];feed={ratio:'auto',x:50,y:50,zoom:1,rotate:0};
    els.title.value='';els.titleFeed.checked=true;els.titlePost.checked=true;els.text.value='';els.textFeed.checked=true;els.textPost.checked=true;els.detailsPost.checked=true;els.signature.value='';els.lock.value='';els.published.checked=true;els.editorKicker.textContent='NOVO POST';els.editorTitle.textContent='Adicionar ao Acervo';els.publish.textContent='Publicar no Acervo';switchKind('photo');renderMedia();renderCrop();renderPreview();
  }
  function editPost(id){
    const post=posts.find(p=>p.id===id);if(!post)return;
    editingId=id;legacyWide=!!post.wide;feed={ratio:'auto',x:50,y:50,zoom:1,rotate:0,...(post.feed||{})};
    currentKind=kindFromPost(post);switchKind(currentKind,{keepCategory:true});els.category.value=post.category||TYPE_INFO[currentKind].category;els.title.value=post.title||'';els.titleFeed.checked=post.showTitleFeed!==false;els.titlePost.checked=post.showTitlePost!==false;els.text.value=post.text||'';els.textFeed.checked=post.showTextFeed!==false;els.textPost.checked=post.showTextPost!==false;els.detailsPost.checked=post.showDetailsPost!==false;els.signature.value=post.signature||'';els.lock.value=post.lock||'';els.published.checked=post.published!==false;setExistingMedia(post.media||[]);
    els.editorKicker.textContent='EDITANDO';els.editorTitle.textContent=post.title||post.id;els.publish.textContent='Salvar alterações';renderPreview();document.getElementById('editor-panel').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function duplicatePost(id){
    const post=posts.find(p=>p.id===id);if(!post)return;editPost(id);editingId=null;els.title.value=(post.title||'Sem título')+' · cópia';els.editorKicker.textContent='DUPLICANDO';els.editorTitle.textContent='Nova cópia';els.publish.textContent='Publicar cópia';renderPreview();
  }

  async function existingNames(){const set=new Set();if(!mediaDirHandle)return set;for await(const [name,handle] of mediaDirHandle.entries())if(handle.kind==='file')set.add(name.toLowerCase());return set}
  function safeFilename(name){const dot=name.lastIndexOf('.');const ext=dot>=0?name.slice(dot).toLowerCase():'';const stem=slug(dot>=0?name.slice(0,dot):name);return `${stem}${ext||'.jpg'}`}
  async function writeFeedThumbnail(file,originalName){
    if(!thumbDirHandle||!file?.type?.startsWith('image/')||/\.gif$/i.test(originalName))return;
    let bitmap;
    try{
      bitmap=await createImageBitmap(file);
      const maxSide=800,scale=Math.min(1,maxSide/Math.max(bitmap.width,bitmap.height));
      const canvas=document.createElement('canvas');
      canvas.width=Math.max(1,Math.round(bitmap.width*scale));canvas.height=Math.max(1,Math.round(bitmap.height*scale));
      const ctx=canvas.getContext('2d',{alpha:true});ctx.drawImage(bitmap,0,0,canvas.width,canvas.height);
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/webp',.82));
      if(!blob)return;
      const handle=await thumbDirHandle.getFileHandle(`${originalName}.webp`,{create:true});
      const writable=await handle.createWritable();await writable.write(blob);await writable.close();
    }catch(e){console.warn('Thumbnail não gerada:',originalName,e)}finally{bitmap?.close?.()}
  }
  async function copyNewMedia(){
    const names=await existingNames();
    for(const item of mediaItems){
      if(!item.file)continue;
      let name=safeFilename(item.file.name),base=name.replace(/\.[^.]+$/,''),ext=name.slice(base.length),n=2;
      while(names.has(name.toLowerCase()))name=`${base}-${n++}${ext}`;
      const handle=await mediaDirHandle.getFileHandle(name,{create:true});const writable=await handle.createWritable();await writable.write(item.file);await writable.close();
      await writeFeedThumbnail(item.file,name);
      names.add(name.toLowerCase());item.path=`images/acervo/${name}`;
    }
  }
  function contentSource(){
    const payload={pt:posts.map(p=>normalizePost(p)),en:translations.en,es:translations.es};
    return `/* ======================================================================\n   ACERVO, CONTEÚDO ÚNICO / V83\n   Gerenciado pelo painel admin-acervo.html.\n   A lista pt é a fonte principal; EN/ES guardam traduções existentes.\n   ====================================================================== */\n\nwindow.ACERVO_CONTENT = ${JSON.stringify(payload,null,2)};\n`;
  }
  async function writeContentFile(){
    const jsDir=await rootHandle.getDirectoryHandle('js');const handle=await jsDir.getFileHandle('acervo-conteudo.js',{create:true});const writable=await handle.createWritable();await writable.write(contentSource());await writable.close();window.ACERVO_CONTENT={pt:posts,en:translations.en,es:translations.es};
  }
  async function savePost(published){
    if(!(await ensureProject()))return;
    try{
      await copyNewMedia();
      const post=currentFormPost(published);
      if(editingId){const idx=posts.findIndex(p=>p.id===editingId);if(idx>=0)posts[idx]=post;else posts.push(post)}else posts.push(post);
      await writeContentFile();toast(post.published?'Publicado no Acervo ✓':'Rascunho salvo ✓');resetEditor();renderLibrary();await scanOrphans();
    }catch(e){console.error(e);toast('Não consegui salvar. Confira se a pasta conectada é a pasta raiz do projeto.')}
  }
  async function deletePost(id){
    const post=posts.find(p=>p.id===id);if(!post)return;
    if(!confirm(`Excluir “${post.title||post.id}” do Acervo?\n\nOs arquivos de mídia NÃO serão apagados da pasta.`))return;
    if(!(await ensureProject()))return;
    posts=posts.filter(p=>p.id!==id);try{await writeContentFile();if(editingId===id)resetEditor();renderLibrary();await scanOrphans();toast('Post removido. A mídia foi preservada na pasta.')}catch(e){toast('Não consegui gravar a exclusão.')}
  }

  function renderLibrary(){
    const q=els.manageSearch.value.trim().toLowerCase(),kind=els.manageKind.value,lock=els.manageLock.value,status=els.manageStatus.value;
    const filtered=posts.filter(post=>{
      const pKind=kindFromPost(post),text=`${post.title||''} ${post.text||''} ${post.category||''}`.toLowerCase();
      if(q&&!text.includes(q))return false;if(kind!=='all'&&pKind!==kind)return false;
      if(lock==='public'&&post.lock)return false;if(lock==='login'&&post.lock!=='login')return false;if(lock==='contract'&&post.lock!=='contract')return false;
      if(status==='published'&&post.published===false)return false;if(status==='draft'&&post.published!==false)return false;return true;
    });
    els.postCount.textContent=`${filtered.length} / ${posts.length} posts`;
    els.postList.innerHTML='';
    filtered.forEach(post=>{
      const kindName=TYPE_INFO[kindFromPost(post)]?.label||'Post',src=post.media?.[0]||'',visual=src?(VIDEO_EXT.test(src)?`<video src="${esc(src)}" muted></video>`:`<img src="${esc(src)}" alt="">`):`<span>${esc(kindName)}</span>`;
      const row=document.createElement('div');row.className='admin-post-row';row.innerHTML=`<div class="admin-post-thumb">${visual}</div><div class="admin-post-meta"><strong>${esc(post.title||post.id)}</strong><div class="admin-post-tags"><span>${esc(kindName)}</span><span>${post.lock==='contract'?'contrato':post.lock==='login'?'login':'público'}</span>${post.published===false?'<span class="is-draft">rascunho</span>':''}</div></div><div class="admin-row-actions"><button type="button" data-action="edit" title="Editar">✎</button><button type="button" data-action="duplicate" title="Duplicar">⧉</button><button type="button" data-action="delete" title="Excluir">×</button></div>`;
      row.querySelector('[data-action="edit"]').addEventListener('click',()=>editPost(post.id));row.querySelector('[data-action="duplicate"]').addEventListener('click',()=>duplicatePost(post.id));row.querySelector('[data-action="delete"]').addEventListener('click',()=>deletePost(post.id));els.postList.appendChild(row);
    });
  }

  async function scanOrphans(){
    if(!mediaDirHandle){els.orphanSection.hidden=true;return}
    const referenced=new Set(posts.flatMap(p=>p.media||[]).map(path=>path.split('/').pop()?.toLowerCase()).filter(Boolean));const files=[];
    try{for await(const [name,handle] of mediaDirHandle.entries()){if(handle.kind==='file'&&MEDIA_EXT.test(name)&&!referenced.has(name.toLowerCase()))files.push(name)}}catch(e){return}
    files.sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));els.orphanSection.hidden=!files.length;els.orphanCount.textContent=`${files.length}`;els.orphanList.innerHTML='';
    files.forEach(name=>{const path=`images/acervo/${name}`,video=VIDEO_EXT.test(name);const item=document.createElement('div');item.className='admin-orphan';item.innerHTML=`${video?`<video src="${esc(path)}" muted></video>`:`<img src="${esc(path)}" alt="">`}<button type="button">Criar post</button>`;item.querySelector('button').addEventListener('click',()=>{resetEditor();const ext=name.split('.').pop().toLowerCase();switchKind(video?'video':ext==='gif'?'gif':'photo');setExistingMedia([path]);els.title.value=name.replace(/\.[^.]+$/,'').replace(/[-_]+/g,' ');renderPreview();document.getElementById('editor-panel').scrollIntoView({behavior:'smooth'})});els.orphanList.appendChild(item)});
  }


  function openProgressReset(){
    if(!els.resetModal)return;
    els.resetError.textContent='';els.resetPassword.value='';
    els.resetModal.classList.add('is-open');els.resetModal.setAttribute('aria-hidden','false');
    setTimeout(()=>els.resetPassword.focus(),80);
  }
  function closeProgressReset(){
    if(!els.resetModal)return;
    els.resetModal.classList.remove('is-open');els.resetModal.setAttribute('aria-hidden','true');els.resetError.textContent='';
  }
  function resetExperienceFromAdmin(){
    if(els.resetPassword.value!==RESET_PASSWORD){
      els.resetError.textContent='Senha incorreta. Use a mesma senha da conta da Mariana.';els.resetPassword.select();return;
    }
    EXPERIENCE_KEYS.forEach(key=>{try{localStorage.removeItem(key)}catch(e){}});
    try{sessionStorage.setItem('nosdois-reset-just-now','1')}catch(e){}
    closeProgressReset();toast('Progresso reiniciado ✓ O conteúdo do Acervo foi preservado.');
  }

  function download(name,data,type='application/json'){const blob=new Blob([data],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}

  els.connect.addEventListener('click',connectProject);
  els.typeGrid.addEventListener('click',e=>{const btn=e.target.closest('[data-kind]');if(btn)switchKind(btn.dataset.kind)});
  els.drop.addEventListener('click',()=>els.input.click());els.drop.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();els.input.click()}});els.input.addEventListener('change',()=>{addFiles(els.input.files);els.input.value=''})
  ;['dragenter','dragover'].forEach(type=>els.drop.addEventListener(type,e=>{e.preventDefault();els.drop.classList.add('is-dragging')}));['dragleave','drop'].forEach(type=>els.drop.addEventListener(type,e=>{e.preventDefault();els.drop.classList.remove('is-dragging')}));els.drop.addEventListener('drop',e=>addFiles(e.dataTransfer.files));
  [els.x,els.y,els.zoom].forEach(el=>el.addEventListener('input',readCropControls));els.rotateLeft.addEventListener('click',()=>{feed.rotate=(feed.rotate+270)%360;renderCrop();renderPreview()});els.rotateRight.addEventListener('click',()=>{feed.rotate=(feed.rotate+90)%360;renderCrop();renderPreview()});els.cropReset.addEventListener('click',resetCrop);
  [els.title,els.titleFeed,els.titlePost,els.text,els.textFeed,els.textPost,els.detailsPost,els.signature,els.lock,els.category,els.published].forEach(el=>el.addEventListener('input',renderPreview));
  els.ratioTrigger?.addEventListener('click',()=>els.ratioPicker?.classList.contains('is-open')?closeRatioPicker():openRatioPicker());
  els.ratioMenu?.addEventListener('click',e=>{const option=e.target.closest('[data-ratio-value]');if(!option)return;setRatioValue(option.dataset.ratioValue,true);closeRatioPicker(true)});
  els.ratioMenu?.addEventListener('keydown',e=>{
    const options=[...els.ratioMenu.querySelectorAll('[data-ratio-value]')],i=options.indexOf(document.activeElement);
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();options[(i+(e.key==='ArrowDown'?1:-1)+options.length)%options.length]?.focus()}
    if(e.key==='Escape'){e.preventDefault();closeRatioPicker(true)}
  });
  document.addEventListener('click',e=>{if(els.ratioPicker?.classList.contains('is-open')&&!e.target.closest('#crop-ratio-picker'))closeRatioPicker()});

  els.publish.addEventListener('click',()=>savePost(true));els.draft.addEventListener('click',()=>savePost(false));els.reset.addEventListener('click',resetEditor);
  [els.manageSearch,els.manageKind,els.manageLock,els.manageStatus].forEach(el=>el.addEventListener('input',renderLibrary));
  els.exportBackup.addEventListener('click',()=>download(`acervo-backup-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify({pt:posts,en:translations.en,es:translations.es},null,2)));
  els.exportContent.addEventListener('click',()=>download('acervo-conteudo.js',contentSource(),'text/javascript'));
  els.openReset?.addEventListener('click',openProgressReset);els.closeReset?.addEventListener('click',closeProgressReset);els.cancelReset?.addEventListener('click',closeProgressReset);els.confirmReset?.addEventListener('click',resetExperienceFromAdmin);
  els.resetPassword?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();resetExperienceFromAdmin()}});
  els.resetModal?.addEventListener('click',e=>{if(e.target===els.resetModal)closeProgressReset()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(els.resetModal?.classList.contains('is-open'))closeProgressReset();if(els.ratioPicker?.classList.contains('is-open'))closeRatioPicker(true)}});

  window.addEventListener('beforeunload',clearObjectUrls);
  resetEditor();renderLibrary();setProjectStatus(false,'Pasta do projeto não conectada','Conecte a pasta raiz para copiar mídias e salvar o Acervo.');restoreHandle();
})();
