const CONFIG = {
  heroTitle: "Nosso Capítulo",
  heroSubtitle: "Antes de qualquer coisa, um aviso: isto aqui é sério (mas também é uma desculpa pra te lembrar o quanto eu te amo).",

  yourPhotoLabel: "nós",
  partnerPhotoLabel: "nós",
  milestones: [
    { date: "quando tudo começou", title: "O início", text: "No começo, eu não fazia ideia de tudo que ainda estava por vir. Só sabia que estar com você fazia os meus dias terem um jeito diferente de acontecer.", signature: "Raphael", photos: ["images/timeline/photo-61.png", "images/timeline/photo-60.png", "images/timeline/photo-62.jpeg"], photo: "" },
    { date: "os primeiros momentos", title: "Os primeiros momentos", text: "Aos poucos, fomos criando nossas próprias histórias. Conversas, risadas, abraços e aqueles pequenos momentos que talvez parecessem simples, mas que hoje fazem parte do que somos.", signature: "Nós dois", photos: ["images/timeline/photo-29.jpeg", "images/timeline/photo-18.png"], photo: "" },
    { date: "as risadas", title: "Nossas Risadas", text: "Acho que uma das minhas coisas favoritas em nós é poder ser eu mesmo com você. Rir de coisas bobas, falar besteira e transformar qualquer momento simples em uma lembrança boa.", signature: "Você + Eu", photos: ["images/timeline/photo-09.jpeg", "images/timeline/photo-114.jpeg"], photo: "" },
    { date: "os dias difíceis", title: "Nos dias difíceis", text: "Até nos dias mais bagunçados, a gente encontrou um jeito de continuar. De entender um ao outro, de cuidar, de ter paciência e, principalmente, de lembrar que estamos no mesmo time.", signature: "nós", photos: [], photo: "images/timeline/1-50.gif" },
    { date: "os pequenos detalhes", title: "Os pequenos detalhes", text: "Foi nos pequenos detalhes que eu percebi o quanto você foi se tornando importante para mim. Um sorriso, uma mensagem, um abraço demorado, uma preocupação… coisas pequenas que, juntas, significam muito.", signature: "Meu Lugar Favorito", photos: ["images/timeline/photo-111.png", "images/timeline/photo-44.png", "images/timeline/photo-112.png", "images/timeline/photo-30.jpeg"], photo: "" },
    { date: "19/08", title: "Hoje", text: "E quando eu olho para tudo que vivemos até aqui, percebo que não quero guardar essas lembranças apenas como parte de uma história bonita. Quero continuar criando novas histórias com você.", signature: "Hoje", photos: [], photo: "images/timeline/mari.gif" },
    { date: "o que eu escolho", title: "Eu escolheria você", text: "Se eu pudesse voltar para o começo e viver tudo outra vez, eu escolheria você novamente. Escolheria cada conversa, cada abraço, cada risada, cada dificuldade e cada momento que fez a gente chegar até aqui.", signature: "Eu escolheria você", photos: ["images/timeline/photo-11.jpeg", "images/timeline/photo-08.jpeg", "images/timeline/photo-09.jpeg", "images/timeline/photo-33.jpeg", "images/timeline/photo-34.jpeg", "images/timeline/photo-35.jpeg", "images/timeline/photo-36.jpeg"], photo: "" },
    { date: "+1 mês", title: "Mais um mês de nós", text: "Hoje a gente completa mais um mês juntos. E, mesmo que pareça pouco diante de tudo que ainda temos pela frente, para mim é mais uma oportunidade de agradecer por ter você na minha vida.", signature: "Obrigado por nós", photos: [], photo: "images/timeline/photo-06.jpeg" }
  ],

  letterTitle: "Contrato de Renovação de Namoro",
  letterSubtitle: "um acordo firmado com carinho, sem letras miúdas",
  clauses: [
    "As partes abaixo resolvem renovar, por tempo indeterminado, o namoro já existente entre elas, mantidos todos os direitos a abraços, colo e escolher o filme de vez em quando.",
    "Eu me comprometo a continuar te apoiando, ouvindo sua voz com a mesma alegria de sempre e fazendo de cada conversa nossa um lugar seguro e gostoso de estar.",
    "Você, por sua vez, se compromete a continuar sendo exatamente quem você é, porque é justamente isso que eu mais gosto em você.",
    "Sem prazo de validade. Renova-se sozinho, todos os dias, só de você estar por perto."
  ],
  signatureLine: "E, por estarem de comum acordo (e apaixonados), assinam abaixo:",

  vouchersTitle: "Os vouchers do nosso novo contrato",
  vouchers: [
    { image:"images/vouchers/voucher-01.png", code:"VC-001", title:"Encontro à noite", tagline:"Uma noite bonita, leve e só nossa.", desc:"Uma noite só nossa. Eu escolho o rolê, ou você, se preferir mandar. O importante é ter a sua companhia do começo ao fim." },
    { image:"images/vouchers/voucher-02.png", code:"VC-002", title:"Eu paro tudo", tagline:"Seu tempo vira prioridade no mesmo instante.", desc:"Um dia inteiro em que eu largo o que estiver fazendo pra fazer o que você quiser. Sem pressa e sem dividir atenção com mais nada." },
    { image:"images/vouchers/voucher-03.png", code:"VC-003", title:"Café na cama", tagline:"Carinho em forma de manhã preguiçosa.", desc:"Bandeja, comidinha gostosa e zero pressa. A ideia é começar o dia com você sendo mimada do jeito que merece." },
    { image:"images/vouchers/voucher-04.png", code:"VC-004", title:"Maratona de filmes", tagline:"Tela, coberta e companhia boa.", desc:"Você escolhe os filmes, eu faço a pipoca e aceito até aquele drama que você ama, porque o melhor roteiro ainda é ficar juntinho." },
    { image:"images/vouchers/voucher-05.png", code:"VC-005", title:"Massagem sem reclamação", tagline:"Relaxar também faz parte do contrato.", desc:"30 minutos completos, sem check no celular no meio e com dedicação total. É voucher premium, então vale capricho." },
    { image:"images/vouchers/voucher-06.png", code:"VC-006", title:"Perdão automático", tagline:"Para aqueles momentos em que eu precisar me redimir.", desc:"Use quando eu fizer besteira. Válido uma vez, sem perguntas e com direito a pedido de desculpas reforçado." }
  ],

  bouquetNote: "No lugar do buquê, deixei três lembranças para guardar com carinho, como fotos jogadas, mas cheias de significado.",
  bouquetSigned: "Com amor.",
  bouquetPhotos: ["images/memories/photo.01.jpg", "images/memories/photo.02.jpg", "images/memories/photo.03.jpg"],

  loveNotes: [
    { brand:"Sorriso & Co.", headline:"Amo seu sorriso", tagline:"o tipo de marca que melhora qualquer dia sem precisar fazer esforço" },
    { brand:"Porto Seguro™", headline:"Você é meu porto seguro", tagline:"onde o coração estaciona e a mente finalmente desacelera" },
    { brand:"Abraço Club", headline:"Seu abraço é meu lugar favorito", tagline:"conforto premium, quentinho e com vontade de ficar mais um pouco" },
    { brand:"Leveza Lab", headline:"Com você tudo fica mais leve", tagline:"uma campanha permanente contra os dias cinzas e pesados" },
    { brand:"Pedacinho de Paz", headline:"Você é meu pedacinho de paz", tagline:"pequeno no nome, enorme no efeito que tem em mim" },
    { brand:"Caos Bonito Studio", headline:"Seu sorriso é meu caos favorito", tagline:"aquela bagunça boa que eu toparia sentir de novo todas as vezes" },
    { brand:"Mundo Bonito", headline:"Você faz meu mundo bonito", tagline:"rebranding completo da minha rotina, agora com mais cor e sentido" },
    { brand:"Escolha Certa", headline:"Eu escolheria você de novo", tagline:"aprovado em todas as versões, fases e capítulos que ainda vêm por aí" }
  ],

  phoneNumber: "(11) 96591-6170",
  promiseLinks: [
    { label: "Planos", url: "planos.html", newTab: false },
    { label: "Acervo", url: "acervo.html", newTab: false }
  ],
  contacts: [
    { type: "email", label: "E-mail", href: "mailto:eeduardoraphael@gmail.com" },
    { type: "instagram", label: "Instagram", href: "https://instagram.com/rapha3i" },
    { type: "phone", label: "Telefone", action: "phone" }
  ],

  // Nossa trilha sonora, 16 faixas locais.
  // Mantenha os arquivos dentro da pasta music/ com esta numeração.
  // O campo mood é usado apenas pelo shuffle inteligente para variar o clima.
  localPlaylist: [
    { title: "Bilhete 2.0", artist: "Rashid & Luccas Carlos", src: "music/music-01.mp3", mood: "warm" },
    { title: "Pensando em Mim", artist: "Matchola, 2Z Diniz", src: "music/music-02.mp3", mood: "warm" },
    { title: "Só Me Ligar", artist: "BK', Júlia Mestre", src: "music/music-03.mp3", mood: "flirty" },
    { title: "Tatto", artist: "Fabio Brazza, Luccas Carlos", src: "music/music-04.mp3", mood: "warm" },
    { title: "Saudade", artist: "Luiz Lins", src: "music/music-05.mp3", mood: "melancholy" },
    { title: "Foi Assim", artist: "Sotam, Rob", src: "music/music-06.mp3", mood: "warm" },
    { title: "Planos", artist: "BK', Luccas Carlos", src: "music/music-07.mp3", mood: "warm" },
    { title: "Pouca Pausa", artist: "Clau, Cortesia da Casa", src: "music/music-08.mp3", mood: "flirty" },
    { title: "Te Amar Demais", artist: "Sodré", src: "music/music-09.mp3", mood: "melancholy" },
    { title: "Se Eu Não Te Cantar", artist: "FBC", src: "music/music-10.mp3", mood: "warm" },
    { title: "Perdição", artist: "L7NNON", src: "music/music-11.mp3", mood: "intense" },
    { title: "Papel de Parede", artist: "Pedro Qualy", src: "music/music-12.mp3", mood: "flirty" },
    { title: "Céu Azul", artist: "Charlie Brown Jr.", src: "music/music-13.mp3", mood: "nostalgic" },
    { title: "Flashback", artist: "Cael Gomes", src: "music/music-14.mp3", mood: "nostalgic" },
    { title: "Saturno", artist: "BIN, Ajaxx", src: "music/music-15.mp3", mood: "intense" },
    { title: "Vírus Love", artist: "Caio Luccas", src: "music/music-16.mp3", mood: "intense" }
  ],

  footerText: "feito com ♥ e uns pixels"
};


const SITE_ASSETS = {
  milestonePhotos: CONFIG.milestones.map(item => {
    const set = Array.isArray(item.photos) ? item.photos.filter(Boolean) : [];
    if(item.photo && !set.includes(item.photo)) set.unshift(item.photo);
    return set;
  }),
  voucherImages: CONFIG.vouchers.map(item => item.image || ""),
  voucherCodes: CONFIG.vouchers.map(item => item.code || ""),
  bouquetPhotos: [...CONFIG.bouquetPhotos]
};

const LANG_PACKS = {
  pt: {
    code:"PT",
    nav:{story:"Nossa história", timeline:"Linha do tempo", memories:"Memórias", phrases:"Frases", contract:"Contrato", vouchers:"Vouchers", promises:"Mais +", call:"Me liga", playlist:"Nossa playlist", playPlaylist:"Tocar nossa playlist", pausePlaylist:"Pausar nossa playlist"},
    heroTitle:"Nosso Capítulo",
    heroSubtitle:"Antes de qualquer coisa, um aviso: isto aqui é sério (mas também é uma desculpa pra te lembrar o quanto eu te amo).",
    scrollHint:"role para baixo ↓",
    loadingText:"enchendo de amor...",
    timelineEyebrow:"nossa história até aqui",
    timelineTitle:"O que nos trouxe até aqui",
    yourPhotoLabel:"nós",
    partnerPhotoLabel:"nós",
    photoPlaceholder:"cole aqui a foto de",
    milestones:[
      {date:"quando tudo começou", title:"O início", text:"No começo, eu não fazia ideia de tudo que ainda estava por vir. Só sabia que estar com você fazia os meus dias terem um jeito diferente de acontecer.", signature:"Raphael"},
      {date:"os primeiros momentos", title:"Os primeiros momentos", text:"Aos poucos, fomos criando nossas próprias histórias. Conversas, risadas, abraços e aqueles pequenos momentos que talvez parecessem simples, mas que hoje fazem parte do que somos.", signature:"Nós dois"},
      {date:"as risadas", title:"Nossas Risadas", text:"Acho que uma das minhas coisas favoritas em nós é poder ser eu mesmo com você. Rir de coisas bobas, falar besteira e transformar qualquer momento simples em uma lembrança boa.", signature:"Você + Eu"},
      {date:"os dias difíceis", title:"Nos dias difíceis", text:"Até nos dias mais bagunçados, a gente encontrou um jeito de continuar. De entender um ao outro, de cuidar, de ter paciência e, principalmente, de lembrar que estamos no mesmo time.", signature:"nós"},
      {date:"os pequenos detalhes", title:"Os pequenos detalhes", text:"Foi nos pequenos detalhes que eu percebi o quanto você foi se tornando importante para mim. Um sorriso, uma mensagem, um abraço demorado, uma preocupação… coisas pequenas que, juntas, significam muito.", signature:"Meu Lugar Favorito"},
      {date:"19/08", title:"Hoje", text:"E quando eu olho para tudo que vivemos até aqui, percebo que não quero guardar essas lembranças apenas como parte de uma história bonita. Quero continuar criando novas histórias com você.", signature:"Hoje"},
      {date:"o que eu escolho", title:"Eu escolheria você", text:"Se eu pudesse voltar para o começo e viver tudo outra vez, eu escolheria você novamente. Escolheria cada conversa, cada abraço, cada risada, cada dificuldade e cada momento que fez a gente chegar até aqui.", signature:"Eu escolheria você"},
      {date:"+1 mês", title:"Mais um mês de nós", text:"Hoje a gente completa mais um mês juntos. E, mesmo que pareça pouco diante de tudo que ainda temos pela frente, para mim é mais uma oportunidade de agradecer por ter você na minha vida.", signature:"Obrigado por nós"}
    ],
    envelopeEyebrow:"tem uma coisa pra você",
    envelopeTitle:"Chegou uma carta",
    envelopeHint:"toque no envelope para abrir",
    letterTitle:"Contrato de Renovação de Namoro",
    letterSubtitle:"um acordo firmado com carinho, sem letras miúdas",
    clauses:[
      "As partes abaixo resolvem renovar, por tempo indeterminado, o namoro já existente entre elas, mantidos todos os direitos a abraços, colo e escolher o filme de vez em quando.",
      "Eu me comprometo a continuar te apoiando, ouvindo sua voz com a mesma alegria de sempre e fazendo de cada conversa nossa um lugar seguro e gostoso de estar.",
      "Você, por sua vez, se compromete a continuar sendo exatamente quem você é, porque é justamente isso que eu mais gosto em você.",
      "Sem prazo de validade. Renova-se sozinho, todos os dias, só de você estar por perto."
    ],
    signatureLine:"E, por estarem de comum acordo (e apaixonados), assinam abaixo:",
    accept:"Sim, eu aceito ♥", decline:"Não",
    voucherEyebrow:"cláusula bônus",
    vouchersTitle:"Os vouchers do nosso novo contrato",
    voucherTiny:"tiny ticket", voucherDetails:"detalhes do ticket", voucherEntry:"entrada única", voucherValidity:"válido enquanto durar o amor",
    vouchers:[
      {title:"Encontro à noite", tagline:"Uma noite bonita, leve e só nossa.", desc:"Uma noite só nossa. Eu escolho o rolê, ou você, se preferir mandar. O importante é ter a sua companhia do começo ao fim."},
      {title:"Eu paro tudo", tagline:"Seu tempo vira prioridade no mesmo instante.", desc:"Um dia inteiro em que eu largo o que estiver fazendo pra fazer o que você quiser. Sem pressa e sem dividir atenção com mais nada."},
      {title:"Café na cama", tagline:"Carinho em forma de manhã preguiçosa.", desc:"Bandeja, comidinha gostosa e zero pressa. A ideia é começar o dia com você sendo mimada do jeito que merece."},
      {title:"Maratona de filmes", tagline:"Tela, coberta e companhia boa.", desc:"Você escolhe os filmes, eu faço a pipoca e aceito até aquele drama que você ama, porque o melhor roteiro ainda é ficar juntinho."},
      {title:"Massagem sem reclamação", tagline:"Relaxar também faz parte do contrato.", desc:"30 minutos completos, sem check no celular no meio e com dedicação total. É voucher premium, então vale capricho."},
      {title:"Perdão automático", tagline:"Para aqueles momentos em que eu precisar me redimir.", desc:"Use quando eu fizer besteira. Válido uma vez, sem perguntas e com direito a pedido de desculpas reforçado."}
    ],
    bouquetNote:"No lugar do buquê, deixei três lembranças para guardar com carinho, como fotos jogadas, mas cheias de significado.",
    bouquetSigned:"Com amor.",
    bouquetLabels:["Para a pessoa que eu mais amo, você!","19/06/2026","Mariana, eu amo amar você sempre!"],
    bouquetPlaceholder:"cole aqui\numa foto especial",
    loveEyebrow:"só pra te lembrar",
    loveTitle:"Pequenas frases que sempre me levam até você",
    loveNotes:["eu te amo","você é meu porto seguro","seu abraço é meu lugar favorito","com você tudo fica mais leve","eu escolheria você de novo","seu sorriso é meu caos favorito","você faz meu mundo bonito","você é meu pedacinho de paz"],
    footerCallTitle:"Gostou?<br>Me liga aí.",
    footerCallText:"Gosto de ouvir sua voz, saber do seu dia e roubar mais um tempinho nosso. Se quiser conversar, eu sempre vou adorar atender você.",
    revealPhone:"Ligar",
    footerStoryTitle:"Nossa história continua",
    footerStoryText:"A linha do tempo mostra como tudo começou, o contrato mostra o quanto isso faz sentido e essa parte final guarda o que mais importa: lembrar que tudo o que a gente viveu até aqui ainda abre espaço para muito mais conversa, carinho, risadas e capítulos bonitos juntos.",
    footerStoryLinks:["Rever nossa linha do tempo","Reler o contrato","Guardar essas memórias"],
    promisesTitle:"Saiba +", contactTitle:"Meus Contatos",
    promiseLabels:["Planos","Acervo"],
    contactLabels:["E-mail","Instagram","Telefone"],
    footerBottom:"Nosso Contrato · segue valendo em todos os capítulos",
    phoneTitle:"se bater saudade", phoneSub:"me chama, me liga ou só inventa uma desculpa bonita para conversar comigo", phoneLabel:"meu número"
  },
  en: {
    code:"EN",
    nav:{story:"Our story", timeline:"Timeline", memories:"Memories", phrases:"Notes", contract:"The contract", vouchers:"Vouchers", promises:"More +", call:"Call me", playlist:"Our playlist", playPlaylist:"Play our playlist", pausePlaylist:"Pause our playlist"},
    heroTitle:"Our Chapter",
    heroSubtitle:"Before anything else, a warning: this is serious (but it is also an excuse to remind you how much I love you).",
    scrollHint:"scroll down ↓",
    loadingText:"filling this with love...",
    timelineEyebrow:"our story so far",
    timelineTitle:"What brought us here",
    yourPhotoLabel:"us",
    partnerPhotoLabel:"us",
    photoPlaceholder:"place a photo here of",
    milestones:[
      {date:"when it all began", title:"The beginning", text:"At the start, I had no idea about everything that was still ahead of us. I only knew that being with you made my days feel different in the best way.", signature:"Raphael"},
      {date:"the first moments", title:"Our first moments", text:"Little by little, we started creating stories of our own. Conversations, laughter, hugs and those small moments that might have seemed simple, but today are part of who we are.", signature:"Us two"},
      {date:"the laughter", title:"Our Laughter", text:"I think one of my favorite things about us is being able to be completely myself with you. Laughing at silly things, talking nonsense and turning an ordinary moment into a good memory.", signature:"You + Me"},
      {date:"the hard days", title:"On the Hard Days", text:"Even on the messiest days, we found a way to keep going. To understand each other, to care, to be patient and, most importantly, to remember that we are on the same team.", signature:"us"},
      {date:"the little details", title:"The little details", text:"It was in the little details that I realized how important you were becoming to me. A smile, a message, a long hug, a little concern… small things that, together, mean so much.", signature:"My Favorite Place"},
      {date:"08/19", title:"Today", text:"And when I look at everything we have lived up to now, I realize I do not want to keep these memories only as part of a beautiful story. I want to keep creating new stories with you.", signature:"Today"},
      {date:"what I choose", title:"I would choose you", text:"If I could go back to the beginning and live it all again, I would choose you again. I would choose every conversation, every hug, every laugh, every difficulty and every moment that brought us here.", signature:"I would choose you"},
      {date:"+1 month", title:"One more month of us", text:"Today we complete another month together. And even if it seems small compared with everything still ahead of us, to me it is one more chance to be grateful for having you in my life.", signature:"Thank you for us"}
    ],
    envelopeEyebrow:"there is something for you",
    envelopeTitle:"A letter arrived",
    envelopeHint:"tap the envelope to open",
    letterTitle:"Relationship Renewal Contract",
    letterSubtitle:"an agreement made with affection, no fine print",
    clauses:[
      "The parties below agree to renew, for an indefinite period, the relationship already existing between them, including all rights to hugs, cuddles and choosing the movie once in a while.",
      "I promise to keep supporting you, listening to your voice with the same happiness as always, and making every conversation of ours feel safe and good.",
      "You, in return, promise to keep being exactly who you are, because that is precisely what I love most about you.",
      "No expiration date. It renews itself every day, simply because you are here."
    ],
    signatureLine:"And, being in complete agreement (and in love), the parties sign below:",
    accept:"Yes, I accept ♥", decline:"No",
    voucherEyebrow:"bonus clause",
    vouchersTitle:"The vouchers in our new contract",
    voucherTiny:"tiny ticket", voucherDetails:"ticket details", voucherEntry:"single admission", voucherValidity:"valid as long as love lasts",
    vouchers:[
      {title:"A night out", tagline:"A beautiful, easy night just for us.", desc:"A night just for us. I pick the plan, or you do, if you would rather be in charge. What matters is having you there from beginning to end."},
      {title:"I stop everything", tagline:"Your time becomes my priority instantly.", desc:"A whole day when I drop what I am doing to do whatever you want. No rush, no divided attention."},
      {title:"Breakfast in bed", tagline:"Affection disguised as a slow morning.", desc:"A tray, good food and absolutely no hurry. The plan is to start the day by spoiling you exactly the way you deserve."},
      {title:"Movie marathon", tagline:"A screen, a blanket and the best company.", desc:"You choose the movies, I make the popcorn and I will even accept that drama you love, because the best plot is still being close to you."},
      {title:"No-complaints massage", tagline:"Relaxing is part of the contract too.", desc:"30 full minutes, no checking my phone halfway through, with complete dedication. This is a premium voucher, so it deserves the full treatment."},
      {title:"Automatic forgiveness", tagline:"For the moments when I need to make things right.", desc:"Use it when I mess up. Valid once, no questions asked, with an upgraded apology included."}
    ],
    bouquetNote:"Instead of a bouquet, I left three memories to keep close, like scattered photographs, but full of meaning.",
    bouquetSigned:"With love.",
    bouquetLabels:["For the person I love the most, you!","19/06/2026","Mariana, I love loving you, always!"],
    bouquetPlaceholder:"place a special\nphoto here",
    loveEyebrow:"just a reminder",
    loveTitle:"Little words that always lead me back to you",
    loveNotes:["I love you","you are my safe harbor","your hug is my favorite place","everything feels lighter with you","I would choose you again","your smile is my favorite kind of chaos","you make my world beautiful","you are my little piece of peace"],
    footerCallTitle:"Liked it?<br>Call me.",
    footerCallText:"I love hearing your voice, knowing how your day went and stealing a little more time for us. If you feel like talking, I will always be happy to answer.",
    revealPhone:"Call",
    footerStoryTitle:"Our story continues",
    footerStoryText:"The timeline shows how everything began, the contract shows why it all makes sense, and this final part keeps what matters most: remembering that everything we have lived so far still leaves room for more conversations, affection, laughter and beautiful chapters together.",
    footerStoryLinks:["See our timeline again","Read the contract again","Keep these memories"],
    promisesTitle:"Learn more +", contactTitle:"My Contacts",
    promiseLabels:["Plans","Archive"],
    contactLabels:["Email","Instagram","Phone","Other socials"],
    footerBottom:"Our Contract · still valid in every chapter",
    phoneTitle:"if you miss me", phoneSub:"text me, call me, or just invent a cute excuse to talk to me", phoneLabel:"my number"
  },
  es: {
    code:"ES",
    nav:{story:"Nuestra historia", timeline:"Línea del tiempo", memories:"Recuerdos", phrases:"Frases", contract:"El contrato", vouchers:"Vales", promises:"Más +", call:"Llámame", playlist:"Nuestra playlist", playPlaylist:"Reproducir nuestra playlist", pausePlaylist:"Pausar nuestra playlist"},
    heroTitle:"Nuestro Capítulo",
    heroSubtitle:"Antes que nada, una advertencia: esto es serio (pero también es una excusa para recordarte cuánto te amo).",
    scrollHint:"desliza hacia abajo ↓",
    loadingText:"llenando esto de amor...",
    timelineEyebrow:"nuestra historia hasta aquí",
    timelineTitle:"Lo que nos trajo hasta aquí",
    yourPhotoLabel:"nosotros",
    partnerPhotoLabel:"nosotros",
    photoPlaceholder:"pon aquí una foto de",
    milestones:[
      {date:"cuando todo empezó", title:"El inicio", text:"Al principio, no tenía idea de todo lo que todavía estaba por venir. Solo sabía que estar contigo hacía que mis días tuvieran una forma diferente de suceder.", signature:"Raphael"},
      {date:"los primeros momentos", title:"Nuestros primeros momentos", text:"Poco a poco, fuimos creando nuestras propias historias. Conversaciones, risas, abrazos y esos pequeños momentos que quizá parecían simples, pero que hoy forman parte de lo que somos.", signature:"Nosotros dos"},
      {date:"las risas", title:"Nuestras Risas", text:"Creo que una de mis cosas favoritas de nosotros es poder ser yo mismo contigo. Reírnos de tonterías, decir cualquier cosa y convertir un momento sencillo en un buen recuerdo.", signature:"Tú + Yo"},
      {date:"los días difíciles", title:"En los Días Difíciles", text:"Incluso en los días más desordenados, encontramos una forma de seguir. De entendernos, cuidarnos, tener paciencia y, sobre todo, recordar que estamos en el mismo equipo.", signature:"nosotros"},
      {date:"los pequeños detalles", title:"Los pequeños detalles", text:"Fue en los pequeños detalles donde me di cuenta de lo importante que te estabas volviendo para mí. Una sonrisa, un mensaje, un abrazo largo, una preocupación… cosas pequeñas que, juntas, significan muchísimo.", signature:"Mi Lugar Favorito"},
      {date:"19/08", title:"Hoy", text:"Y cuando miro todo lo que hemos vivido hasta aquí, me doy cuenta de que no quiero guardar estos recuerdos solo como parte de una historia bonita. Quiero seguir creando nuevas historias contigo.", signature:"Hoy"},
      {date:"lo que elijo", title:"Te elegiría a ti", text:"Si pudiera volver al principio y vivirlo todo otra vez, te elegiría de nuevo. Elegiría cada conversación, cada abrazo, cada risa, cada dificultad y cada momento que nos hizo llegar hasta aquí.", signature:"Te elegiría a ti"},
      {date:"+1 mes", title:"Un mes más de nosotros", text:"Hoy cumplimos un mes más juntos. Y aunque parezca poco frente a todo lo que todavía tenemos por delante, para mí es otra oportunidad de agradecer que estés en mi vida.", signature:"Gracias por nosotros"}
    ],
    envelopeEyebrow:"hay algo para ti",
    envelopeTitle:"Llegó una carta",
    envelopeHint:"toca el sobre para abrir",
    letterTitle:"Contrato de Renovación del Noviazgo",
    letterSubtitle:"un acuerdo firmado con cariño, sin letra pequeña",
    clauses:[
      "Las partes abajo firmantes deciden renovar, por tiempo indefinido, el noviazgo que ya existe entre ellas, conservando todos los derechos a abrazos, mimos y elegir la película de vez en cuando.",
      "Me comprometo a seguir apoyándote, escuchando tu voz con la misma alegría de siempre y haciendo que cada conversación nuestra sea un lugar seguro y bonito.",
      "Tú, por tu parte, te comprometes a seguir siendo exactamente quien eres, porque eso es justamente lo que más me gusta de ti.",
      "Sin fecha de caducidad. Se renueva solo, todos los días, simplemente porque estás aquí."
    ],
    signatureLine:"Y, estando de común acuerdo (y enamorados), firman a continuación:",
    accept:"Sí, acepto ♥", decline:"No",
    voucherEyebrow:"cláusula extra",
    vouchersTitle:"Los vales de nuestro nuevo contrato",
    voucherTiny:"tiny ticket", voucherDetails:"detalles del vale", voucherEntry:"entrada única", voucherValidity:"válido mientras dure el amor",
    vouchers:[
      {title:"Cita nocturna", tagline:"Una noche bonita, tranquila y solo nuestra.", desc:"Una noche solo para nosotros. Yo elijo el plan, o tú, si prefieres mandar. Lo importante es tener tu compañía de principio a fin."},
      {title:"Lo dejo todo", tagline:"Tu tiempo se vuelve prioridad al instante.", desc:"Un día entero en el que dejo lo que esté haciendo para hacer lo que tú quieras. Sin prisa y sin dividir mi atención."},
      {title:"Desayuno en la cama", tagline:"Cariño en forma de mañana tranquila.", desc:"Una bandeja, algo rico y cero prisas. La idea es empezar el día mimándote como te mereces."},
      {title:"Maratón de películas", tagline:"Pantalla, manta y la mejor compañía.", desc:"Tú eliges las películas, yo hago las palomitas y hasta acepto ese drama que te encanta, porque la mejor historia sigue siendo estar juntitos."},
      {title:"Masaje sin quejas", tagline:"Relajarse también forma parte del contrato.", desc:"30 minutos completos, sin mirar el celular a mitad y con dedicación total. Es un vale premium, así que merece hacerlo bien."},
      {title:"Perdón automático", tagline:"Para esos momentos en los que tenga que compensarte.", desc:"Úsalo cuando meta la pata. Válido una vez, sin preguntas, e incluye una disculpa reforzada."}
    ],
    bouquetNote:"En lugar del ramo, dejé tres recuerdos para guardar con cariño, como fotos tiradas, pero llenas de significado.",
    bouquetSigned:"Con amor.",
    bouquetLabels:["Para la persona que más amo, ¡tú!","19/06/2026","Mariana, ¡amo amarte siempre!"],
    bouquetPlaceholder:"pon aquí\nuna foto especial",
    loveEyebrow:"solo para recordarte",
    loveTitle:"Pequeñas frases que siempre me llevan hasta ti",
    loveNotes:["te amo","eres mi puerto seguro","tu abrazo es mi lugar favorito","contigo todo se siente más ligero","te elegiría otra vez","tu sonrisa es mi caos favorito","haces bonito mi mundo","eres mi pedacito de paz"],
    footerCallTitle:"¿Te gustó?<br>Llámame.",
    footerCallText:"Me encanta escuchar tu voz, saber cómo fue tu día y robar un poquito más de tiempo para nosotros. Si quieres hablar, siempre me encantará atenderte.",
    revealPhone:"Llamar",
    footerStoryTitle:"Nuestra historia continúa",
    footerStoryText:"La línea del tiempo muestra cómo empezó todo, el contrato muestra por qué esto tiene tanto sentido y esta parte final guarda lo más importante: recordar que todo lo vivido hasta aquí todavía deja espacio para más conversaciones, cariño, risas y capítulos bonitos juntos.",
    footerStoryLinks:["Volver a nuestra línea del tiempo","Leer el contrato otra vez","Guardar estos recuerdos"],
    promisesTitle:"Saber más +", contactTitle:"Mis contactos",
    promiseLabels:["Planes","Archivo"],
    contactLabels:["E-mail","Instagram","Teléfono"],
    footerBottom:"Nuestro Contrato · sigue vigente en todos los capítulos",
    phoneTitle:"si me extrañas", phoneSub:"escríbeme, llámame o simplemente inventa una excusa bonita para hablar conmigo", phoneLabel:"mi número"
  }
};


// Compartilha a configuração com o player das páginas extras.
window.NOSDOIS_CONFIG = CONFIG;
