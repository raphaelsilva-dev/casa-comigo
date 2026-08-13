(() => {
  const PAGE = document.body.dataset.page || '';

  const COMMON = {
    pt:{code:'PT',story:'Nossa história',timeline:'Linha do tempo',plans:'Planos',archive:'Acervo',contract:'Contrato',more:'Mais +',playlist:'Nossa playlist',footerA:'feito com ♥ e uns pixels',footerB:'nós dois · acervo',close:'Fechar'},
    en:{code:'EN',story:'Our story',timeline:'Timeline',plans:'Plans',archive:'Archive',contract:'Contract',more:'More +',playlist:'Our playlist',footerA:'made with ♥ and a few pixels',footerB:'us two · archive',close:'Close'},
    es:{code:'ES',story:'Nuestra historia',timeline:'Línea del tiempo',plans:'Planes',archive:'Archivo',contract:'Contrato',more:'Más +',playlist:'Nuestra playlist',footerA:'hecho con ♥ y unos píxeles',footerB:'nosotros dos · archivo',close:'Cerrar'}
  };

  const PLANS = {
    pt:{title:'Qual plano combina mais com a gente?',lead:'Uma comparação totalmente imparcial, auditada por ninguém e criada com uma conclusão um pouquinho suspeita: continuar com você parece um ótimo negócio.',cards:[
      {status:'ATIVO',name:'Namoro',price:'investimento: carinho recorrente',desc:'O plano que já vem entregando resultados e, até o momento, possui excelente taxa de renovação.',features:['Abraços sem limite de franquia','Conversas longas e assuntos aleatórios','Suporte emocional em horário integral','Dates, filmes e lanches compartilhados','Playlist oficial do relacionamento','Direito a saudade e ligação inesperada'],button:'Renovar plano'},
      {status:'POSSÍVEL UPGRADE',name:'Casamento',price:'investimento: um “sim” bem convicto',desc:'Inclui tudo do Namoro, com recursos de convivência permanente e uma licença vitalícia de nós dois.',features:['Tudo que já existe no plano Namoro','Rotina e domingos oficialmente juntos','Casa, planos e boletos em modo cooperativo','Viagens e aniversários em pacote familiar','Direito de reclamar do lado da cama','Renovação automática por tempo indeterminado'],button:'Fazer upgrade'},
      {status:'PLANO RECOMENDADO',name:'Casamento Plus',price:'investimento: construir uma vida inteira',desc:'Nossa edição mais completa. Tudo dos planos anteriores, com expansão de família liberada quando os dois quiserem.',features:['Todos os benefícios do Casamento','Projetos grandes no modo “a gente resolve”','Férias em família e fotos demais no celular','Possibilidade de mini nós dois*','Histórias para contar por muitos anos','Pacote de amor sem data de expiração'],button:'Fazer upgrade'}
    ],compareTitle:'Comparação técnica altamente científica',heads:['Recurso','Namoro','Casamento','Casamento Plus'],rows:[['Abraços ilimitados','+','+','+'],['Conversas até tarde','+','+','+'],['Casa juntos','planejamento','+','+'],['Vida inteira em co-op','beta','+','+'],['Mini nós dois','—','opcional','+'],['Validade','renovável','vitalícia','vitalícia + DLCs']],note:'* Recurso futuro, exclusivamente mediante aprovação dos dois administradores da conta.',package:'O que vem no pacote',details:{
      namoro:{kicker:'ATIVO',title:'Namoro',intro:'O pacote que já está instalado e recebendo atualizações constantes.',benefits:['Abraços ilimitados','Conversas e ligações sem franquia','Dates, filmes e lanches compartilhados','Suporte emocional 24/7','Playlist oficial e saudade inclusa'],fine:'Condições gerais: renovação automática enquanto continuar fazendo sentido para nós dois. Investimento recorrente em carinho, conversa e presença. Juros: 0%, o saldo só rende histórias.'},
      casamento:{kicker:'POSSÍVEL UPGRADE',title:'Casamento',intro:'A expansão que transforma o modo cooperativo em endereço permanente.',benefits:['Tudo do plano Namoro','Casa e rotina oficialmente compartilhadas','Domingos, viagens e aniversários em pacote familiar','Planos grandes em modo cooperativo','Licença vitalícia de “nós dois”'],fine:'Upgrade disponível mediante um “sim” bem convicto dos dois administradores. Manutenção incluída por conversa, paciência, parceria e divisão estratégica de cobertas.'},
      plus:{kicker:'PLANO RECOMENDADO',title:'Casamento Plus',intro:'A edição mais completa, feita para um futuro que só existe se continuar sendo uma escolha dos dois.',benefits:['Tudo do Casamento','Projetos grandes em modo “a gente resolve”','Férias e memórias em família','Possibilidade de mini nós dois, no tempo certo','Pacote de histórias sem data de expiração'],fine:'Plano recomendado para uso de longo prazo. Recursos familiares são opcionais e só podem ser ativados com aprovação dos dois. Validade estimada: vitalícia, com futuras DLCs e atualizações gratuitas.'}
    }},
    en:{title:'Which plan fits us best?',lead:'A completely unbiased comparison, audited by absolutely nobody, with one slightly suspicious conclusion: staying with you looks like an excellent deal.',cards:[
      {status:'ACTIVE',name:'Dating',price:'investment: recurring affection',desc:'The plan already delivering results and, so far, showing an excellent renewal rate.',features:['Unlimited hugs','Long conversations and random topics','Full-time emotional support','Dates, movies and shared snacks','Official relationship playlist','Missing-you rights and unexpected calls'],button:'Renew plan'},
      {status:'POSSIBLE UPGRADE',name:'Marriage',price:'investment: one very certain “yes”',desc:'Everything in Dating, plus permanent co-op living and a lifetime license for us two.',features:['Everything included in Dating','Officially shared routines and Sundays','Home, plans and bills in co-op mode','Trips and birthdays in the family pack','Right to complain about the side of the bed','Automatic renewal indefinitely'],button:'Upgrade'},
      {status:'RECOMMENDED PLAN',name:'Marriage Plus',price:'investment: building an entire life',desc:'Our most complete edition. Everything above, with family expansion unlocked whenever both want it.',features:['Everything in Marriage','Big projects in “we will figure it out” mode','Family holidays and too many phone photos','Possibility of mini us two*','Stories to tell for many years','Love package with no expiration date'],button:'Upgrade'}
    ],compareTitle:'Highly scientific technical comparison',heads:['Feature','Dating','Marriage','Marriage Plus'],rows:[['Unlimited hugs','+','+','+'],['Late-night conversations','+','+','+'],['Home together','planning','+','+'],['A whole life in co-op','beta','+','+'],['Mini us two','—','optional','+'],['Validity','renewable','lifetime','lifetime + DLCs']],note:'* Future feature, available exclusively with approval from both account administrators.',package:'What is included',details:{
      namoro:{kicker:'ACTIVE',title:'Dating',intro:'The package already installed and receiving constant updates.',benefits:['Unlimited hugs','Unlimited conversations and calls','Shared dates, movies and snacks','24/7 emotional support','Official playlist and missing-you mode included'],fine:'General conditions: automatic renewal while it keeps making sense for both of us. Recurring investment in affection, conversation and presence. Interest: 0%, the balance only earns stories.'},
      casamento:{kicker:'POSSIBLE UPGRADE',title:'Marriage',intro:'The expansion that turns co-op mode into a permanent address.',benefits:['Everything in Dating','Officially shared home and routine','Sundays, trips and birthdays in the family pack','Big plans in cooperative mode','Lifetime “us two” license'],fine:'Upgrade available with a very certain “yes” from both administrators. Maintenance included through conversation, patience, partnership and strategic blanket sharing.'},
      plus:{kicker:'RECOMMENDED PLAN',title:'Marriage Plus',intro:'The complete edition, designed for a future that only exists if it remains a choice for both of us.',benefits:['Everything in Marriage','Big projects in “we will figure it out” mode','Family holidays and memories','Possibility of mini us two, at the right time','A story pack with no expiration date'],fine:'Recommended for long-term use. Family features are optional and can only be activated with approval from both. Estimated validity: lifetime, with future DLCs and free updates.'}
    }},
    es:{title:'¿Qué plan combina más con nosotros?',lead:'Una comparación totalmente imparcial, auditada por nadie y con una conclusión un poquito sospechosa: seguir contigo parece un excelente negocio.',cards:[
      {status:'ACTIVO',name:'Noviazgo',price:'inversión: cariño recurrente',desc:'El plan que ya entrega resultados y, hasta ahora, tiene una excelente tasa de renovación.',features:['Abrazos ilimitados','Conversaciones largas y temas aleatorios','Soporte emocional a tiempo completo','Citas, películas y meriendas compartidas','Playlist oficial de la relación','Derecho a extrañarse y llamar de sorpresa'],button:'Renovar plan'},
      {status:'POSIBLE UPGRADE',name:'Matrimonio',price:'inversión: un “sí” muy convencido',desc:'Incluye todo el Noviazgo, con convivencia permanente y una licencia vitalicia de nosotros dos.',features:['Todo lo incluido en Noviazgo','Rutina y domingos oficialmente juntos','Casa, planes y cuentas en modo cooperativo','Viajes y cumpleaños en paquete familiar','Derecho a discutir por el lado de la cama','Renovación automática indefinida'],button:'Hacer upgrade'},
      {status:'PLAN RECOMENDADO',name:'Matrimonio Plus',price:'inversión: construir una vida entera',desc:'Nuestra edición más completa. Todo lo anterior, con expansión familiar disponible cuando ambos quieran.',features:['Todo lo incluido en Matrimonio','Grandes proyectos en modo “lo resolvemos juntos”','Vacaciones familiares y demasiadas fotos','Posibilidad de mini nosotros dos*','Historias para contar durante muchos años','Paquete de amor sin fecha de caducidad'],button:'Hacer upgrade'}
    ],compareTitle:'Comparación técnica altamente científica',heads:['Recurso','Noviazgo','Matrimonio','Matrimonio Plus'],rows:[['Abrazos ilimitados','+','+','+'],['Conversaciones hasta tarde','+','+','+'],['Casa juntos','planificación','+','+'],['Vida entera en co-op','beta','+','+'],['Mini nosotros dos','—','opcional','+'],['Validez','renovable','vitalicia','vitalicia + DLCs']],note:'* Recurso futuro, exclusivamente mediante aprobación de los dos administradores de la cuenta.',package:'Qué incluye el paquete',details:{
      namoro:{kicker:'ACTIVO',title:'Noviazgo',intro:'El paquete que ya está instalado y recibe actualizaciones constantes.',benefits:['Abrazos ilimitados','Conversaciones y llamadas sin franquicia','Citas, películas y meriendas compartidas','Soporte emocional 24/7','Playlist oficial y nostalgia incluida'],fine:'Condiciones generales: renovación automática mientras siga teniendo sentido para ambos. Inversión recurrente en cariño, conversación y presencia. Intereses: 0%, el saldo solo produce historias.'},
      casamento:{kicker:'POSIBLE UPGRADE',title:'Matrimonio',intro:'La expansión que convierte el modo cooperativo en una dirección permanente.',benefits:['Todo el plan Noviazgo','Casa y rutina oficialmente compartidas','Domingos, viajes y cumpleaños en paquete familiar','Grandes planes en modo cooperativo','Licencia vitalicia de “nosotros dos”'],fine:'Upgrade disponible mediante un “sí” muy convencido de ambos administradores. Mantenimiento incluido con conversación, paciencia, compañerismo y reparto estratégico de mantas.'},
      plus:{kicker:'PLAN RECOMENDADO',title:'Matrimonio Plus',intro:'La edición más completa, creada para un futuro que solo existe si sigue siendo una elección de ambos.',benefits:['Todo el Matrimonio','Grandes proyectos en modo “lo resolvemos juntos”','Vacaciones y recuerdos en familia','Posibilidad de mini nosotros dos, en el momento adecuado','Paquete de historias sin caducidad'],fine:'Plan recomendado para uso a largo plazo. Los recursos familiares son opcionales y solo se activan con aprobación de ambos. Validez estimada: vitalicia, con futuras DLCs y actualizaciones gratuitas.'}
    }}
  };


  const PLAN_CHOICES = {
    pt:{
      casamento:{
        label:'E agora, o que a titular deseja fazer?',
        buttons:[
          {id:'wait',label:'Vou esperar o administrador 😌',kind:'soft'},
          {id:'bold',label:'Não depende dele. Ele vai casar comigo mesmo!!!',kind:'bold'}
        ],
        responses:{
          wait:{title:'SOLICITAÇÃO REGISTRADA',text:'Tudo certo. O sistema vai aguardar o pedido oficial do administrador Raphael.',status:'Status: aguardando ação do administrador.'},
          bold:{title:'CASAMENTO APARENTEMENTE INEVITÁVEL',text:'A titular demonstrou confiança absoluta no futuro deste relacionamento. O administrador Raphael foi oficialmente informado de que sua margem de negociação pode estar diminuindo.',status:'Risco de fuga do administrador: 0%.'}
        }
      },
      plus:{
        label:'Esse pacote é grande. Deseja continuar?',
        buttons:[
          {id:'future',label:'Guardar para outro capítulo',kind:'soft'},
          {id:'full',label:'Quero o pacote completo 😳',kind:'bold'}
        ],
        responses:{
          future:{title:'PLANO SALVO PARA O FUTURO',text:'Tudo bem. O Casamento Plus continuará disponível quando chegar a hora certa.',status:'Status: reservado para um próximo capítulo.'},
          full:{title:'PACOTE COMPLETO SOLICITADO',text:'Solicitação recebida com sucesso. A titular confirmou interesse no pacote inteiro: casamento, casa, viagens, muitos anos juntos e mini nós dois incluídos nos planos futuros.',status:'O administrador Raphael foi avisado. Probabilidade de uma vida barulhenta, bonita e cheia de histórias: muito alta.'}
        }
      }
    },
    en:{
      casamento:{
        label:'What would the account holder like to do now?',
        buttons:[
          {id:'wait',label:'I’ll wait for the administrator 😌',kind:'soft'},
          {id:'bold',label:'It does not depend on him. He is marrying me anyway!!!',kind:'bold'}
        ],
        responses:{
          wait:{title:'REQUEST REGISTERED',text:'All set. The system will wait for the official proposal from administrator Raphael.',status:'Status: waiting for administrator action.'},
          bold:{title:'MARRIAGE APPARENTLY INEVITABLE',text:'The account holder has shown absolute confidence in the future of this relationship. Administrator Raphael has been officially informed that his negotiating room may be shrinking.',status:'Administrator escape risk: 0%.'}
        }
      },
      plus:{
        label:'This is a big package. Continue?',
        buttons:[
          {id:'future',label:'Save it for another chapter',kind:'soft'},
          {id:'full',label:'I want the full package 😳',kind:'bold'}
        ],
        responses:{
          future:{title:'PLAN SAVED FOR THE FUTURE',text:'No problem. Marriage Plus will remain available when the right chapter arrives.',status:'Status: reserved for a future chapter.'},
          full:{title:'FULL PACKAGE REQUESTED',text:'Request received successfully. The account holder confirmed interest in the full package: marriage, a home, trips, many years together and mini us two included in future plans.',status:'Administrator Raphael has been notified. Probability of a loud, beautiful life full of stories: very high.'}
        }
      }
    },
    es:{
      casamento:{
        label:'¿Qué desea hacer ahora la titular?',
        buttons:[
          {id:'wait',label:'Voy a esperar al administrador 😌',kind:'soft'},
          {id:'bold',label:'No depende de él. ¡¡¡Se va a casar conmigo igual!!!',kind:'bold'}
        ],
        responses:{
          wait:{title:'SOLICITUD REGISTRADA',text:'Todo listo. El sistema esperará la propuesta oficial del administrador Raphael.',status:'Estado: esperando acción del administrador.'},
          bold:{title:'MATRIMONIO APARENTEMENTE INEVITABLE',text:'La titular demostró una confianza absoluta en el futuro de esta relación. El administrador Raphael fue oficialmente informado de que su margen de negociación puede estar disminuyendo.',status:'Riesgo de fuga del administrador: 0%.'}
        }
      },
      plus:{
        label:'Este paquete es grande. ¿Deseas continuar?',
        buttons:[
          {id:'future',label:'Guardarlo para otro capítulo',kind:'soft'},
          {id:'full',label:'Quiero el paquete completo 😳',kind:'bold'}
        ],
        responses:{
          future:{title:'PLAN GUARDADO PARA EL FUTURO',text:'Todo bien. Matrimonio Plus seguirá disponible cuando llegue el momento correcto.',status:'Estado: reservado para un próximo capítulo.'},
          full:{title:'PAQUETE COMPLETO SOLICITADO',text:'Solicitud recibida con éxito. La titular confirmó interés en el paquete completo: matrimonio, casa, viajes, muchos años juntos y mini nosotros dos incluidos en los planes futuros.',status:'El administrador Raphael fue avisado. Probabilidad de una vida ruidosa, bonita y llena de historias: muy alta.'}
        }
      }
    }
  };

  const POEMS = {
  "pt": {
    "title": "Coisas que eu talvez não saiba dizer em voz alta",
    "lead": "Um mural de pequenos textos, lembranças e sentimentos. Sem ordem obrigatória, como um caderno que foi ganhando páginas aos poucos.",
    "fallback": "adicione uma foto para este poema",
    "items": [
      [
        "A Rainha do Meu Castelo",
        "Por mais jovem que seja, ela é a legítima merecedora do trono. Os motivos são tantos que eu poderia passar horas e horas os listando. Sua leveza, autenticidade e brilho... tudo nela é fascinante.\n\nEla vai muito além do charme e de um sorriso cativante; é mais do que esbelta: é incrível. Uma mistura de força e inteligência que se traduz em pura elegância, me atraindo de todas as formas.\n\nMas, acima de cada um desses detalhes incríveis, o que mais me emociona é a nossa conexão. Sendo quem é, ela escolhe se conectar comigo de forma humana e verdadeira. Busca me compreender, me decifrar e me escutar de fato.\n\nEla rega e nutre o nosso amor, e isso é admirável; isso me apaixona todos os dias.\n\nEla não só merece, como nasceu para ocupar o trono do meu castelo.",
        "Do seu fiel parceiro, o Rei do seu castelo"
      ],
      [
        "Coisas pequenas",
        "Uma mensagem perguntando se cheguei.\nUm áudio sem assunto.\nUm sorriso que aparece no meio da frase.\n\nTalvez amar seja isso:\nperceber que as coisas pequenas\ncomeçaram a ocupar os maiores lugares.",
        "Você é o meu lugar favorito"
      ],
      [
        "Depois da meia-noite",
        "Quero continuar descobrindo\nas versões de você que aparecem\nquando o dia termina,\nquando o sono chega,\nquando não existe assunto\ne ainda assim ninguém quer desligar.",
        "só mais cinco minutos"
      ],
      [
        "Escolha",
        "Se existisse um botão\npara voltar ao começo,\neu apertaria.\n\nNão para mudar nada.\nSó para ter a sorte\nde escolher você duas vezes.",
        "eu escolheria você"
      ],
      [
        "Futuro",
        "Não preciso saber exatamente\ncomo serão os próximos capítulos.\n\nSó gosto da ideia\nde que em várias páginas deles\nexiste um “nós”.",
        "Continua..."
      ],
      [
        "Sem título",
        "Você chegou devagar\ne foi ficando em lugares\nque eu nem sabia que estavam vazios.\n\nHoje, quando penso em paz,\nalguma parte de mim pensa em você.",
        "com amor"
      ],
      [
        "Um mês",
        "Bom diaaaaa, amooor\n\nHoje faz um mês, né?!\nEu acho que a gente já pode casar! 😏\nPode parecer pouco tempo, mas, para mim, já foi mais do que suficiente para perceber o quanto você se tornou importante na minha vida.\n\nTem dias em que a saudade aperta tanto que tudo o que eu queria era atravessar a tela do celular só para te dar um abraço. Infelizmente a tecnologia ainda não chegou nesse nível… então vou me contentando com as nossas chamadas, as mensagens e a certeza de que cada dia de espera nos deixa mais perto um do outro.\n\nObrigada por confiar em mim, por estar presente mesmo de longe, por me fazer sorrir todos os dias e por tornar especiais até as conversas mais aleatórias e sem sentido. Aliás, acho que a gente tem um talento incrível pra transformar qualquer assunto bobo em horas de conversa… e eu amo isso, tá?!\n\nVocê fez um mês parecer muito mais do que apenas 30 dias. Fez esse tempo se encher de carinho, saudade, risadas e da certeza de que vale a pena esperar.\n\nSe tivesse que escolher de novo, escolheria você. Em qualquer lugar, em qualquer distância e em qualquer versão da nossa história.\nEu te amo assim\n🫸🏻                                        🫷🏻",
        "Mariana"
      ],
      [
        "Amor, meu bem, bom dia",
        "Amor, meu bem, bom dia!\nEu não acho, eu acredito, que já podemos nos casar.\nTalvez eu nem saiba como começar, mas sei de uma coisa: os nossos momentos juntos são incríveis.\nEu aprendo todos os dias, sorrio todos os dias e me aperfeiçoo todos os dias.\nÉ incrível o quanto você é significativa para mim e o poder que tem de influenciar positivamente os meus dias.\nEu não imaginava o quão bom é amar, principalmente o quão bom é amar você.\nEu te amo e quero gritar isso, quero me entregar, quero que você saiba sempre o quanto eu te amo e o quanto te quero em todos os meus dias.\nTe quero de forma definitiva, absoluta.\nEu acordo pensando em você, passo o dia pensando em você, em qualquer contexto, e vou dormir pensando em você.\n\nAgradeço todos os dias.\nMeus dias são felizes ao seu lado, e eu não quero que nada mude.\nApenas anseio por estarmos juntos, porque, por mais que eu sinta você tão perto todas as vezes, eu quero estar ao seu lado.\nNão vejo a hora de me ajoelhar na sua frente e olhar nos seus olhos.",
        "com todo o meu amor"
      ]
    ]
  },
  "en": {
    "title": "Things I may not know how to say out loud",
    "lead": "A wall of small texts, memories and feelings. No required order, like a notebook that slowly gained pages.",
    "fallback": "add a photo for this poem",
    "items": [
      [
        "The Queen of My Castle",
        "As young as she may be, she is the rightful one for the throne. There are so many reasons that I could spend hours listing them. Her lightness, authenticity and glow... everything about her is fascinating.\n\nShe goes far beyond charm and a captivating smile; she is more than graceful: she is incredible. A mix of strength and intelligence translated into pure elegance, drawing me to her in every way.\n\nBut above every one of those wonderful details, what moves me most is our connection. Being exactly who she is, she chooses to connect with me in a human and genuine way. She tries to understand me, decipher me and truly listen to me.\n\nShe waters and nurtures our love, and that is admirable; it makes me fall in love every day.\n\nShe does not merely deserve it, she was born to sit on the throne of my castle.",
        "From your faithful partner, the king of your castle"
      ],
      [
        "Small things",
        "A message asking whether I arrived.\nA voice note about nothing.\nA smile appearing in the middle of a sentence.\n\nMaybe love is this:\nrealizing the little things\nstarted taking the biggest places.",
        "my favorite place"
      ],
      [
        "After midnight",
        "I want to keep discovering\nthe versions of you that appear\nwhen the day ends,\nwhen sleep arrives,\nwhen there is nothing left to say\nand still nobody wants to hang up.",
        "just five more minutes"
      ],
      [
        "Choice",
        "If there were a button\nto go back to the beginning,\nI would press it.\n\nNot to change anything.\nOnly to have the luck\nof choosing you twice.",
        "I would choose you"
      ],
      [
        "Future",
        "I do not need to know exactly\nwhat the next chapters will look like.\n\nI just like the idea\nthat on many of their pages\nthere is an “us”.",
        "to be continued..."
      ],
      [
        "Untitled",
        "You arrived slowly\nand stayed in places\nI did not know were empty.\n\nNow, when I think of peace,\nsome part of me thinks of you.",
        "with love"
      ],
      [
        "One month",
        "Good morning, loooove\n\nToday makes one month, right?!\nI think we can already get married! 😏\nIt may seem like a short time, but to me it has already been more than enough to realize how important you have become in my life.\n\nThere are days when I miss you so much that all I want is to cross the phone screen just to hug you. Unfortunately technology has not reached that level yet... so I keep myself content with our calls, our messages and the certainty that each day of waiting brings us closer to each other.\n\nThank you for trusting me, for being present even from afar, for making me smile every day and for making special even our most random, senseless conversations. In fact, I think we have an incredible talent for turning any silly subject into hours of conversation... and I love that, okay?!\n\nYou made one month feel like much more than just 30 days. You filled this time with affection, longing, laughter and the certainty that waiting is worth it.\n\nIf I had to choose again, I would choose you. In any place, across any distance and in any version of our story.\nI love you like this\n🫸🏻                                        🫷🏻",
        "Mariana"
      ],
      [
        "My love, good morning",
        "My love, good morning!\nI do not think it, I believe we can already get married.\nI may not even know how to start, but I know one thing: our moments together are incredible.\nI learn every day, I smile every day and I grow every day.\nIt is incredible how meaningful you are to me and how powerfully you positively influence my days.\nI never imagined how good it is to love, especially how good it is to love you.\nI love you and I want to shout it, I want to give myself fully, I want you to always know how much I love you and how much I want you in all of my days.\nI want you in a definite, absolute way.\nI wake up thinking about you, I spend the day thinking about you, in every context, and I go to sleep thinking about you.\n\nI am grateful every single day.\nMy days are happy with you by my side, and I do not want anything to change.\nI simply long for us to be together, because as close as I already feel you are, I still want to stand right beside you.\nI cannot wait to kneel in front of you and look into your eyes.",
        "with all my love"
      ]
    ]
  },
  "es": {
    "title": "Cosas que quizá no sepa decir en voz alta",
    "lead": "Un mural de pequeños textos, recuerdos y sentimientos. Sin orden obligatorio, como un cuaderno que fue ganando páginas poco a poco.",
    "fallback": "añade una foto para este poema",
    "items": [
      [
        "La Reina de Mi Castillo",
        "Por joven que sea, ella es la legítima merecedora del trono. Hay tantos motivos que podría pasar horas enumerándolos. Su ligereza, autenticidad y brillo... todo en ella es fascinante.\n\nVa mucho más allá del encanto y de una sonrisa cautivadora; es más que elegante: es increíble. Una mezcla de fuerza e inteligencia que se traduce en pura elegancia y me atrae de todas las formas.\n\nPero, por encima de cada uno de esos detalles increíbles, lo que más me emociona es nuestra conexión. Siendo quien es, elige conectarse conmigo de forma humana y verdadera. Busca comprenderme, descifrarme y escucharme de verdad.\n\nRiega y nutre nuestro amor, y eso es admirable; eso hace que me enamore todos los días.\n\nNo solo lo merece: nació para ocupar el trono de mi castillo.",
        "De tu fiel compañero, el rey de tu castillo"
      ],
      [
        "Cosas pequeñas",
        "Un mensaje preguntando si llegué.\nUn audio sin tema.\nUna sonrisa que aparece en medio de una frase.\n\nQuizá amar sea esto:\nnotar que las cosas pequeñas\nempezaron a ocupar los lugares más grandes.",
        "mi lugar favorito"
      ],
      [
        "Después de medianoche",
        "Quiero seguir descubriendo\nlas versiones de ti que aparecen\ncuando termina el día,\ncuando llega el sueño,\ncuando ya no hay tema\ny aun así nadie quiere colgar.",
        "solo cinco minutos más"
      ],
      [
        "Elección",
        "Si existiera un botón\npara volver al principio,\nlo pulsaría.\n\nNo para cambiar nada.\nSolo para tener la suerte\nde elegirte dos veces.",
        "te elegiría a ti"
      ],
      [
        "Futuro",
        "No necesito saber exactamente\ncómo serán los próximos capítulos.\n\nSolo me gusta la idea\nde que en muchas de sus páginas\nexista un “nosotros”.",
        "continúa..."
      ],
      [
        "Sin título",
        "Llegaste despacio\ny te fuiste quedando en lugares\nque ni sabía que estaban vacíos.\n\nHoy, cuando pienso en paz,\nalguna parte de mí piensa en ti.",
        "con amor"
      ],
      [
        "Un mes",
        "Buenos díiiias, amooor\n\nHoy cumplimos un mes, ¿verdad?\n¡Yo creo que ya nos podemos casar! 😏\nPuede parecer poco tiempo, pero para mí ya ha sido más que suficiente para darme cuenta de lo importante que te has vuelto en mi vida.\n\nHay días en los que te extraño tanto que todo lo que quiero es atravesar la pantalla del celular solo para darte un abrazo. Lamentablemente la tecnología todavía no ha llegado a ese nivel... así que me conformo con nuestras llamadas, nuestros mensajes y la certeza de que cada día de espera nos deja más cerca el uno del otro.\n\nGracias por confiar en mí, por estar presente incluso desde lejos, por hacerme sonreír todos los días y por volver especiales hasta las conversaciones más aleatorias y sin sentido. De hecho, creo que tenemos un talento increíble para convertir cualquier tema tonto en horas de conversación... y eso me encanta, ¿sí?!\n\nHiciste que un mes pareciera mucho más que solo 30 días. Llenaste este tiempo de cariño, nostalgia, risas y la certeza de que vale la pena esperar.\n\nSi tuviera que elegir otra vez, te elegiría a ti. En cualquier lugar, a cualquier distancia y en cualquier versión de nuestra historia.\nTe amo así\n🫸🏻                                        🫷🏻",
        "Mariana"
      ],
      [
        "Amor mío, buenos días",
        "Amor mío, buenos días.\nYo no lo creo solamente: yo creo de verdad que ya podemos casarnos.\nQuizá ni sepa cómo empezar, pero sí sé una cosa: nuestros momentos juntos son increíbles.\nAprendo cada día, sonrío cada día y crezco cada día.\nEs increíble lo significativa que eres para mí y el poder que tienes para influir positivamente en mis días.\nNo imaginaba lo bueno que es amar, y menos aún lo bueno que es amarte a ti.\nTe amo y quiero gritarlo, quiero entregarme, quiero que sepas siempre cuánto te amo y cuánto te quiero en todos mis días.\nTe quiero de una forma definitiva, absoluta.\nMe despierto pensando en ti, paso el día pensando en ti, en cualquier contexto, y me duermo pensando en ti.\n\nDoy gracias todos los días.\nMis días son felices a tu lado y no quiero que nada cambie.\nSolo anhelo que estemos juntos porque, por más cerca que te sienta siempre, quiero estar a tu lado.\nNo veo la hora de arrodillarme frente a ti y mirarte a los ojos.",
        "con todo mi amor"
      ]
    ]
  }
};

  const COMPLIMENTS = {
    pt:{title:'Dossiê: sobre você',lead:'Investigação aberta após repetidas evidências de que você tem qualidades demais para caber em um elogio só.',code:'DOSSIÊ 02 / NÓS DOIS',caseTitle:'Classificação: impossível não gostar',stamp:'CASO\nCONFIRMADO',ids:'EVIDÊNCIA',items:[['Seu sorriso','Tem uma facilidade injusta de mudar o clima de um lugar. Às vezes eu nem percebo que estava cansado até você sorrir e o dia parecer um pouco menos pesado.'],['Sua voz','É uma das coisas que mais gosto de ouvir. Mesmo quando a conversa não tem assunto nenhum, ainda existe uma parte de mim querendo que ela dure mais um pouco.'],['Seu jeito','Você tem um jeito muito seu de existir. As manias, as expressões, as pequenas reações, detalhes que talvez passem despercebidos para você e que eu aprendi a gostar.'],['Seu cuidado','Eu percebo quando você se preocupa, pergunta, lembra ou tenta ajudar. Tem carinho em coisas que você provavelmente nem considera grandes gestos.'],['Sua inteligência','Gosto de como sua cabeça funciona. Das coisas que você percebe, das opiniões que constrói e até das vezes em que me faz enxergar uma situação de outro jeito.'],['Sua presença','Tem gente que ocupa espaço. Você muda o espaço. Um lugar comum fica mais interessante simplesmente porque você está nele.'],['Sua força','Mesmo quando você não se sente forte, existe muito em você que continua tentando, aprendendo e seguindo. Eu admiro isso mais do que talvez eu diga.'],['Você inteira','O ponto é que eu poderia separar tudo em características, mas ainda faltaria alguma coisa. Porque o que eu gosto mesmo é do conjunto, de você sendo você.']],words:['linda','carinhosa','inteligente','forte','engraçada','especial','atenciosa','meu porto seguro','incrível','única','meu lugar favorito'],conclusion:'CONCLUSÃO DO CASO',verdict:'Suspeita confirmada: eu gosto de você por muito mais coisas do que consigo listar.',verdictP:'O dossiê permanece aberto porque novas evidências aparecem o tempo todo.'},
    en:{title:'Dossier: about you',lead:'An investigation opened after repeated evidence that you have far too many qualities to fit inside a single compliment.',code:'DOSSIER 02 / US TWO',caseTitle:'Classification: impossible not to like',stamp:'CASE\nCONFIRMED',ids:'EVIDENCE',items:[['Your smile','It has an unfair ability to change the mood of a place. Sometimes I do not even notice I was tired until you smile and the day suddenly feels a little lighter.'],['Your voice','It is one of my favorite things to hear. Even when our conversation is about absolutely nothing, part of me still wants it to last a little longer.'],['Your way','You have a very particular way of existing. The habits, expressions and tiny reactions, details you may barely notice and that I learned to love.'],['Your care','I notice when you worry, ask, remember or try to help. There is affection in things you probably do not even consider big gestures.'],['Your intelligence','I like the way your mind works. The things you notice, the opinions you build and the moments when you make me see something from another angle.'],['Your presence','Some people occupy space. You change the space. An ordinary place gets more interesting simply because you are there.'],['Your strength','Even when you do not feel strong, so much in you keeps trying, learning and moving forward. I admire that more than I probably say.'],['All of you','I could separate everything into traits and something would still be missing. Because what I really like is the whole thing, you being you.']],words:['beautiful','caring','intelligent','strong','funny','special','thoughtful','my safe harbor','incredible','unique','my favorite place'],conclusion:'CASE CONCLUSION',verdict:'Suspicion confirmed: I like you for far more reasons than I can list.',verdictP:'The dossier remains open because new evidence appears all the time.'},
    es:{title:'Dossier: sobre ti',lead:'Investigación abierta tras repetidas evidencias de que tienes demasiadas cualidades para caber en un solo elogio.',code:'DOSSIER 02 / NOSOTROS DOS',caseTitle:'Clasificación: imposible no gustar',stamp:'CASO\nCONFIRMADO',ids:'EVIDENCIA',items:[['Tu sonrisa','Tiene una facilidad injusta para cambiar el ambiente de un lugar. A veces ni noto que estaba cansado hasta que sonríes y el día parece un poco menos pesado.'],['Tu voz','Es una de las cosas que más me gusta escuchar. Aunque la conversación no tenga tema, una parte de mí sigue queriendo que dure un poco más.'],['Tu manera de ser','Tienes una forma muy tuya de existir. Las manías, expresiones y pequeñas reacciones, detalles que quizá ni notes y que yo aprendí a querer.'],['Tu cuidado','Noto cuando te preocupas, preguntas, recuerdas o intentas ayudar. Hay cariño en cosas que probablemente ni consideras grandes gestos.'],['Tu inteligencia','Me gusta cómo funciona tu cabeza. Lo que percibes, las opiniones que construyes y hasta las veces que me haces mirar una situación de otra manera.'],['Tu presencia','Hay gente que ocupa espacio. Tú cambias el espacio. Un lugar común se vuelve más interesante simplemente porque estás allí.'],['Tu fuerza','Aunque no te sientas fuerte, hay mucho en ti que sigue intentando, aprendiendo y avanzando. Admiro eso más de lo que quizá digo.'],['Tú entera','Podría separar todo en características y aun así faltaría algo. Porque lo que realmente me gusta es el conjunto, tú siendo tú.']],words:['hermosa','cariñosa','inteligente','fuerte','divertida','especial','atenta','mi puerto seguro','increíble','única','mi lugar favorito'],conclusion:'CONCLUSIÓN DEL CASO',verdict:'Sospecha confirmada: me gustas por muchas más cosas de las que consigo enumerar.',verdictP:'El dossier permanece abierto porque aparecen nuevas evidencias todo el tiempo.'}
  };

  let currentLang='pt';
  try{ const saved=localStorage.getItem('site-language'); if(['pt','en','es'].includes(saved)) currentLang=saved; }catch(e){}

  function commonApply(lang){
    const c=COMMON[lang]||COMMON.pt;
    document.documentElement.lang=lang==='pt'?'pt-BR':lang;
    document.querySelector('.sub-story-btn').childNodes[0].nodeValue=c.story+' ';
    const menuLinks=document.querySelectorAll('.sub-story-menu a');
    const labels=[c.timeline,c.plans,c.archive];
    menuLinks.forEach((a,i)=>{ if(labels[i]) a.textContent=labels[i]; });
    const direct=document.querySelectorAll('.sub-direct-link'); if(direct[0]) direct[0].textContent=c.contract; if(direct[1]) direct[1].textContent=c.more;
    const head=document.querySelector('.sub-music-menu-head span:first-child'); if(head) head.textContent=c.playlist;
    const foot=document.querySelectorAll('.sub-footer span'); if(foot[0]) foot[0].textContent=c.footerA; if(foot[1]) foot[1].textContent=c.footerB;
    const code=document.getElementById('sub-lang-code'); if(code) code.textContent=c.code;
    document.querySelectorAll('.sub-lang-option').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
    document.querySelectorAll('.sub-modal-close').forEach(b=>b.setAttribute('aria-label',c.close));
    document.querySelectorAll('.sub-mobile-panel [data-mobile-key]').forEach(a=>{const key=a.dataset.mobileKey;const label=c[key]||'';const arrow=a.querySelector('span');if(label){a.childNodes[0].nodeValue=label+' ';if(arrow)arrow.textContent='→';}});
  }

  function applyPlans(lang){
    const p=PLANS[lang]||PLANS.pt;
    document.title=`${p.cards[0].name==='Namoro'?'Planos':(lang==='en'?'Plans':'Planes')} · nós dois`;
    const hero=document.querySelector('.page-title'); if(hero) hero.textContent=p.title;
    const lead=document.querySelector('.page-lead'); if(lead) lead.textContent=p.lead;
    document.querySelectorAll('.plan-card').forEach((card,i)=>{
      const d=p.cards[i]; if(!d) return;
      card.querySelector('.plan-index').textContent=d.status; if(card.classList.contains('future')) card.dataset.ribbon=d.status; card.querySelector('.plan-name').textContent=d.name; card.querySelector('.plan-price').textContent=d.price; card.querySelector('.plan-desc').textContent=d.desc;
      card.querySelectorAll('.features li').forEach((li,j)=>{if(d.features[j]) li.textContent=d.features[j]}); card.querySelector('.plan-button').textContent=d.button;
    });
    document.querySelector('.compare-title').textContent=p.compareTitle;
    document.querySelectorAll('.compare-table thead th').forEach((el,i)=>{if(p.heads[i])el.textContent=p.heads[i]});
    document.querySelectorAll('.compare-table tbody tr').forEach((tr,i)=>tr.querySelectorAll('td').forEach((td,j)=>{if(p.rows[i]?.[j]!=null)td.textContent=p.rows[i][j]}));
    document.querySelector('.small-note').textContent=p.note;
    const h=document.querySelector('.plan-modal-section h3'); if(h)h.textContent=p.package;
    syncSavedPlanBadge();
  }
  function applyPoems(lang){
    const p=POEMS[lang]||POEMS.pt; document.title=`${lang==='pt'?'Poesias':lang==='en'?'Poems':'Poesías'} · nós dois`;
    document.querySelector('.page-title').textContent=p.title; document.querySelector('.page-lead').textContent=p.lead;
    document.querySelectorAll('.poem').forEach((poem,i)=>{const d=p.items[i];if(!d)return;const num=poem.querySelector('.poem-number');if(num)num.textContent=`${lang==='en'?'FILE':lang==='es'?'ARCHIVO':'ARQUIVO'} ${String(i+1).padStart(2,'0')}`;poem.querySelector('h2').textContent=d[0];poem.querySelector('p').textContent=d[1];poem.querySelector('.poem-sign').textContent=d[2];poem.setAttribute('aria-label',(lang==='pt'?'Ampliar poema ':lang==='en'?'Open poem ':'Ampliar poema ')+d[0]);});
    const f=document.querySelector('.poem-modal-media-fallback small');if(f)f.textContent=p.fallback;
  }
  function applyCompliments(lang){
    const p=COMPLIMENTS[lang]||COMPLIMENTS.pt; document.title=`${lang==='pt'?'Elogios':lang==='en'?'Compliments':'Elogios'} · nós dois`;
    document.querySelector('.page-title').textContent=p.title;document.querySelector('.page-lead').textContent=p.lead;document.querySelector('.case-code').textContent=p.code;document.querySelector('.case-title').textContent=p.caseTitle;document.querySelector('.case-stamp').textContent=p.stamp;
    document.querySelectorAll('.evidence').forEach((e,i)=>{const d=p.items[i];if(!d)return;e.querySelector('.evidence-id').textContent=`${p.ids} ${String(i+1).padStart(2,'0')}`;e.querySelector('h2').textContent=d[0];e.querySelector('p').textContent=d[1];});
    document.querySelectorAll('.word-cloud span').forEach((s,i)=>{if(p.words[i])s.textContent=p.words[i]}); const v=document.querySelector('.verdict'); if(v){v.querySelector('.section-kicker').textContent=p.conclusion;v.querySelector('h2').textContent=p.verdict;v.querySelector('p').textContent=p.verdictP;}
  }
  function applyLanguage(lang){
    currentLang=['pt','en','es'].includes(lang)?lang:'pt'; try{localStorage.setItem('site-language',currentLang)}catch(e){}
    commonApply(currentLang); if(PAGE==='planos')applyPlans(currentLang); if(PAGE==='poesias')applyPoems(currentLang); if(PAGE==='elogios')applyCompliments(currentLang);
  }

  const story=document.querySelector('.sub-story-dropdown'); const storyBtn=document.querySelector('.sub-story-btn');
  if(story&&storyBtn){
    let pinned=false;
    const setOpen=(value,{pin=false}={})=>{
      story.classList.toggle('open',value);
      storyBtn.setAttribute('aria-expanded',String(value));
      if(pin) pinned=value;
      if(!value) pinned=false;
    };
    storyBtn.addEventListener('click',e=>{
      e.stopPropagation();
      const next=!story.classList.contains('open')||!pinned;
      setOpen(next,{pin:next});
    });
    story.addEventListener('mouseenter',()=>{if(!pinned)setOpen(true)});
    story.addEventListener('mouseleave',()=>{if(!pinned)setOpen(false)});
    document.addEventListener('click',e=>{if(!e.target.closest('.sub-story-dropdown'))setOpen(false)});
    story.addEventListener('keydown',e=>{if(e.key==='Escape'){setOpen(false);storyBtn.focus()}});
  }
  document.querySelector(`.sub-story-menu [data-page="${PAGE}"]`)?.classList.add('active');
  document.querySelector(`.sub-mobile-panel [href="${PAGE}.html"]`)?.classList.add('active');
  const subMenuToggle=document.getElementById('sub-menu-toggle'),subMobilePanel=document.getElementById('sub-mobile-panel');
  if(subMenuToggle&&subMobilePanel){
    const setMobileOpen=v=>{subMenuToggle.classList.toggle('open',v);subMobilePanel.classList.toggle('open',v);subMenuToggle.setAttribute('aria-expanded',String(v))};
    subMenuToggle.addEventListener('click',e=>{e.stopPropagation();setMobileOpen(!subMobilePanel.classList.contains('open'))});
    subMobilePanel.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMobileOpen(false)));
    document.addEventListener('click',e=>{if(!e.target.closest('.sub-hotbar'))setMobileOpen(false)});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&subMobilePanel.classList.contains('open')){setMobileOpen(false);subMenuToggle.focus()}});
  }

  const langSwitch=document.getElementById('sub-lang-switcher'),langBtn=document.getElementById('sub-lang-current');
  if(langSwitch&&langBtn){langBtn.addEventListener('click',e=>{e.stopPropagation();const v=!langSwitch.classList.contains('open');langSwitch.classList.toggle('open',v);langBtn.setAttribute('aria-expanded',String(v))});document.querySelectorAll('.sub-lang-option').forEach(b=>b.addEventListener('click',()=>{applyLanguage(b.dataset.lang);langSwitch.classList.remove('open');langBtn.setAttribute('aria-expanded','false')}));document.addEventListener('click',e=>{if(!e.target.closest('.sub-lang-switcher')){langSwitch.classList.remove('open');langBtn.setAttribute('aria-expanded','false')}})}

  let pendingLockedElement=null;
  const isAuth=()=>window.NosDoisAuth?.isAuthenticated?.()===true;
  const protectedAvailable=()=>window.NosDoisProgress?.isProtectedContentAvailable?.()===true;
  const lockAvailable=el=>{
    const type=el?.dataset?.lock;
    if(type==='login')return isAuth();
    if(type==='contract')return protectedAvailable();
    return true;
  };
  function updateContentLocks(){
    document.querySelectorAll('[data-lock]').forEach(el=>{
      const locked=!lockAvailable(el);
      el.classList.toggle('is-locked',locked);
      el.setAttribute('aria-disabled',locked?'true':'false');
      el.dataset.lockLabel=(currentLang==='en'?'🔒  protected content':currentLang==='es'?'🔒  contenido protegido':'🔒  conteúdo protegido');
    });
  }
  function renderLockedPrompt(el){
    const modal=document.getElementById('content-lock-modal');if(!modal)return;
    pendingLockedElement=el;
    const lang=currentLang||'pt', auth=isAuth(), progress=window.NosDoisProgress?.read?.()||{}, type=el?.dataset?.lock||'contract';
    const copy={
      pt:{k:'ARQUIVO PROTEGIDO',title:'Esse conteúdo ainda está bloqueado',enter:'Entrar',plans:'Ir para os planos →',contract:'Ir para o contrato →'},
      en:{k:'PROTECTED FILE',title:'This content is still locked',enter:'Sign in',plans:'Go to plans →',contract:'Go to the contract →'},
      es:{k:'ARCHIVO PROTEGIDO',title:'Este contenido todavía está bloqueado',enter:'Entrar',plans:'Ir a los planes →',contract:'Ir al contrato →'}
    }[lang];
    modal.querySelector('[data-lock-kicker]').textContent=copy.k;
    modal.querySelector('[data-lock-title]').textContent=copy.title;
    const copyNode=modal.querySelector('[data-lock-copy]');if(copyNode){copyNode.textContent='';copyNode.hidden=true;}
    const body=modal.querySelector('[data-lock-body]');
    if(!auth){
      body.innerHTML=`<button class="lock-route-button lock-login-start" type="button">${copy.enter}</button>`;
      body.querySelector('.lock-login-start')?.addEventListener('click',()=>{
        closeModal(modal);
        window.NosDoisAuth?.openLogin?.({onSuccess:()=>{
          updateContentLocks();
          if(lockAvailable(el)){
            if(el.classList.contains('poem'))openPoem(el);
          }else{
            setTimeout(()=>renderLockedPrompt(el),180);
          }
        }});
      });
    }else if(type==='login'){
      closeModal(modal);if(el.classList.contains('poem'))setTimeout(()=>openPoem(el),30);return;
    }else{
      const href=progress.contractUnlocked?'index.html#envelope-section':'planos.html';
      const label=progress.contractUnlocked?copy.contract:copy.plans;
      body.innerHTML=`<a class="lock-route-button" href="${href}">${label}</a>`;
    }
    if(!modal.classList.contains('is-open'))openModal(modal,el);
  }
  document.addEventListener('nosdois:authchange',updateContentLocks);
  document.addEventListener('nosdois:progresschange',updateContentLocks);
  let lastTrigger=null;
  function openModal(modal,trigger){if(!modal)return;lastTrigger=trigger||document.activeElement;modal.querySelector('.sub-modal-card')?.scrollTo?.({top:0,left:0,behavior:'auto'});modal.querySelector('.poem-modal-copy')?.scrollTo?.({top:0,left:0,behavior:'auto'});modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('sub-modal-open');requestAnimationFrame(()=>modal.querySelector('.sub-modal-close')?.focus())}
  function closeModal(modal){if(!modal)return;modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('sub-modal-open');lastTrigger?.focus?.()}
  document.querySelectorAll('.sub-modal-backdrop').forEach(m=>{m.querySelector('.sub-modal-close')?.addEventListener('click',()=>closeModal(m));m.addEventListener('click',e=>{if(e.target===m)closeModal(m)})});document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.sub-modal-backdrop.is-open').forEach(closeModal)});

  const planModal=document.getElementById('plan-modal');
  const PLAN_CHOICE_STORAGE='nosdois-plan-choice';
  function savePlanChoice(plan,choice){
    try{localStorage.setItem(PLAN_CHOICE_STORAGE,JSON.stringify({plan,choice,at:Date.now()}));}catch(e){}
  }
  function readPlanChoice(){
    try{return JSON.parse(localStorage.getItem(PLAN_CHOICE_STORAGE)||'null')}catch(e){return null}
  }
  function syncSavedPlanBadge(){
    document.querySelectorAll('.plan-choice-saved').forEach(x=>x.remove());
    const saved=readPlanChoice();if(!saved)return;
    const data=(PLAN_CHOICES[currentLang]||PLAN_CHOICES.pt)[saved.plan];
    const response=data?.responses?.[saved.choice];if(!response)return;
    const button=document.querySelector(`[data-plan-open="${saved.plan}"]`);const card=button?.closest('.plan-card');if(!card)return;
    const badge=document.createElement('span');badge.className='plan-choice-saved';badge.textContent=response.title;card.appendChild(badge);
  }
  function renderPlanChoice(planKey){
    if(!planModal)return;
    const area=planModal.querySelector('[data-plan-choice-area]');
    const label=planModal.querySelector('[data-plan-choice-label]');
    const buttons=planModal.querySelector('[data-plan-choice-buttons]');
    const response=planModal.querySelector('[data-plan-choice-response]');
    const data=(PLAN_CHOICES[currentLang]||PLAN_CHOICES.pt)[planKey];
    if(!area||!label||!buttons||!response){return}
    if(!data){area.hidden=true;buttons.innerHTML='';response.hidden=true;response.innerHTML='';return}
    area.hidden=false;label.textContent=data.label;buttons.innerHTML='';response.hidden=true;response.innerHTML='';
    data.buttons.forEach(item=>{
      const b=document.createElement('button');
      b.type='button';b.className=`plan-choice-button ${item.kind==='bold'?'is-bold':'is-soft'}`;b.textContent=item.label;
      b.addEventListener('click',()=>{
        const r=data.responses[item.id];if(!r)return;
        savePlanChoice(planKey,item.id);syncSavedPlanBadge();
        response.innerHTML=`<span class="plan-choice-result-kicker">${r.title}</span><p>${r.text}</p><small>${r.status}</small>`;
        response.hidden=false;
        buttons.querySelectorAll('button').forEach(x=>x.classList.toggle('is-selected',x===b));
        requestAnimationFrame(()=>response.scrollIntoView({block:'nearest',behavior:'smooth'}));
      });
      buttons.appendChild(b);
    });
    const saved=readPlanChoice();
    if(saved&&saved.plan===planKey&&data.responses[saved.choice]){
      const r=data.responses[saved.choice];
      response.innerHTML=`<span class="plan-choice-result-kicker">${r.title}</span><p>${r.text}</p><small>${r.status}</small>`;
      response.hidden=false;
      [...buttons.children].forEach((b,i)=>b.classList.toggle('is-selected',data.buttons[i]?.id===saved.choice));
    }
  }
  document.querySelectorAll('[data-plan-open]').forEach(btn=>btn.addEventListener('click',()=>{
    const key=btn.dataset.planOpen;const d=(PLANS[currentLang]||PLANS.pt).details[key];if(!d||!planModal)return;
    planModal.querySelector('[data-plan-kicker]').textContent=d.kicker;planModal.querySelector('[data-plan-title]').textContent=d.title;planModal.querySelector('[data-plan-intro]').textContent=d.intro;planModal.querySelector('[data-plan-benefits]').innerHTML=d.benefits.map(x=>`<li>${x}</li>`).join('');planModal.querySelector('[data-plan-fineprint]').textContent=d.fine;renderPlanChoice(key);openModal(planModal,btn)
  }));

  const poemModal=document.getElementById('poem-modal'); const openPoem=poem=>{if(poem?.dataset?.lock&&!lockAvailable(poem)){renderLockedPrompt(poem);return;}if(!poemModal)return;poemModal.querySelector('[data-poem-number]').textContent=poem.querySelector('.poem-number')?.textContent||'';poemModal.querySelector('[data-poem-title]').textContent=poem.querySelector('h2')?.textContent||'';poemModal.querySelector('[data-poem-text]').textContent=poem.querySelector('p')?.textContent||'';poemModal.querySelector('[data-poem-sign]').textContent=poem.querySelector('.poem-sign')?.textContent||'';const media=poemModal.querySelector('[data-poem-media]'),img=poemModal.querySelector('[data-poem-image]'),src=poem.dataset.image||'';if(media&&img){media.classList.remove('has-image');img.removeAttribute('src');img.alt=poem.querySelector('h2')?.textContent?`${currentLang==='en'?'Image for poem':currentLang==='es'?'Imagen para el poema':'Imagem para o poema'} ${poem.querySelector('h2').textContent}`:'Imagem do poema';if(src){img.onload=()=>media.classList.add('has-image');img.onerror=()=>{media.classList.remove('has-image');img.removeAttribute('src')};img.src=src}}const copy=poemModal.querySelector('.poem-modal-copy');if(copy)copy.scrollTop=0;openModal(poemModal,poem)};
  document.querySelectorAll('.poem').forEach(poem=>{poem.addEventListener('click',()=>openPoem(poem));poem.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openPoem(poem)}})});
  document.querySelectorAll('.evidence[data-lock="contract"]').forEach(card=>{card.addEventListener('click',()=>{if(!protectedAvailable())renderLockedPrompt(card)});card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!protectedAvailable()){e.preventDefault();renderLockedPrompt(card)}})});

  applyLanguage(currentLang);
  updateContentLocks();
})();
