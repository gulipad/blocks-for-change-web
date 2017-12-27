myApp.config(['$translateProvider', function ($translateProvider) {
  var translationsEN = {
    HELP_GROW: 'Help us grow',
    ADD_TO_CHROME: '+ Add to Chrome',
    JOIN_SLACK: 'Join the conversation!',
    NAME: 'Name',
    EMAIL: 'Email',
    MESSAGE: 'Message',
    SEND: 'Send',
    GOOD_MORNING: 'Good morning',
    GOOD_AFTERNOON: 'Good afternoon',
    GOOD_EVENING: 'Good evening',
    GOOD_NIGHT: 'Good night',
    HELLO: 'Hello',
    YOU: 'rockstar',
    FRONT_PAGE: {
      SALUTATION: 'Hey there, rockstar',
      PROMPT: 'Turn your Chrome new tab page into a tool for social change.'
    },
    WHY_PAGE: {
      TITLE: 'We believe in technology as a force for good.',
      TEXT: 'We have one mission. To turn technology into a tool for social change. The blockchain is revolutionizing money, businesses and organizations. Our idea is simple: we want to revolutionize charity.'
    },
    HOW_PAGE: {
      TITLE: 'Become part of a network of heroes.',
      TEXT: 'Instead of donating money or time, you help us by donating a tiny bit of your spare computer power. We use this power to raise cryptocoins (think Bitcoin), and then give it all away. We are just getting started. We are still growing. Enter a number below to see how much our network can generate.',
      USERS: 'users',
      UNIT: '€/year'
    },
    WHAT_PAGE: {
      TITLE: 'It\'s more than just a dashboard. It\'s people helping people.',
      TEXT: 'Blocks for Change is a beautiful dashboard for Chrome. It replaces your boring new tab page with a gorgeous, inspiring dashboard. Every time you open a new tab, you help our network generate cryptocoin for charity.'
    },
    FAQ: {
      TITLE: 'Got questions? We\'re here to answer.',
      TEXT: 'If you want to talk to us don\'t hesitate to get in touch. Join the conversation in our Slack channel by clicking on the icon on the bottom right corner, or shoot us a message below!',
      ONE: {
        QUESTION: 'Who does the money go to?',
        ANSWER: 'We are working hard to look for partner charitable organizations to donate the funds to. Our goal is to partner with smaller organizatinos who have more difficulties finding donations. If you are part of a charitable organization, join our Slack channel to get in touch! Right now, we do not have any costs, so we donate 100% of what is generated. We are also putting in a lot of effort to make the entire process as transparent as possible. The possibility for you to vote for projects based on how many tabs you have opened is also in the roadmap.'
      },
      TWO: {
        QUESTION: 'Is it bad for my computer?',
        ANSWER: 'Blocks for Change will not harm your computer in any way. It uses a very small amount of CPU power (around 3-5% generally, 10% at most during peaks), so you should not even notice it\'s running. If you need to perform some CPU heavy actions, you can always turn mining off in the settings.'
      },
      THREE: {
        QUESTION: 'Do I have to pay to use it?',
        ANSWER: 'Nope. Downloading - and using - Blocks for Change, is free and always will be. Just by using it you will already be helping out! If you want to help the team, get in touch with us through Slack, and share the project. The more users we have the more people we\'ll be able to help.'
      }
    }
  }

  var translationsES = {
    HELP_GROW: 'Ayúdanos a crecer',
    ADD_TO_CHROME: '+ Añadir a Chrome',
    JOIN_SLACK: 'Únete a la conversación',
    NAME: 'Nombre',
    EMAIL: 'Email',
    MESSAGE: 'Mensaje',
    SEND: 'Enviar',
    GOOD_MORNING: 'Buenos dias',
    GOOD_AFTERNOON: 'Buenas tardes',
    GOOD_EVENING: 'Buenas tardes',
    GOOD_NIGHT: 'Buenas noches',
    HELLO: 'Hola',
    YOU: 'capitán',
    FRONT_PAGE: {
      PROMPT: 'Transforma tu página de inicio en una herramienta para un mundo mejor.'
    },
    WHY_PAGE: {
      TITLE: 'Creemos en la tecnología como fuerza para mejorar vidas.',
      TEXT: 'Nuestra misión: Transformar la tecnología en una herramienta de cambio social. El blockchain está revolucionando el dinero, los negocios, y las organizaciones. Nuestra idea es sencilla: queremos revolucionar la ayuda humanitaria.'
    },
    HOW_PAGE: {
      TITLE: 'Forma parte de nuestra comunidad de héroes.',
      TEXT: 'En lugar de donar tiempo o dinero, nos ayudas donando un poquito de energía que tu ordenador no esté utilizando. Usamos esta energía para generar criptomonedas (piensa en Bitcoin), y luego las donamos. Acabamos de empezar. Introduce un número de usuarios para ver cuánto puede generar nuestra comunidad.',
      USERS: 'usuarios',
      UNIT: '€/año'
    },
    WHAT_PAGE: {
      TITLE: 'Es más que una página de inicio. Somos personas ayudando a personas.',
      TEXT: 'Blocks for Change reemplaza la página aburrida de inicio de Chrome con otra bonita e inspiradora. Con cada pestaña que abres nos ayudas a recaudar criptomonedas para ayuda humanitaria.'
    },
    FAQ: {
      TITLE: '¿Preguntas? Estamos aquí para resolverlas.',
      TEXT: 'Si quieres hablar con nosotros, no dudes en ponerte en contacto. Únete a la conversación en nuestro canal de Slack con el icono de la esquina inferior derecha, o mándanos un mensaje.',
      ONE: {
        QUESTION: '¿A quién va el dinero?',
        ANSWER: 'Trabajamos continuamente para encontrar proyectos benéficos a los que donar los fondos. Nuestro objetivo es unirnos a proyectos más pequeños, que tienen más dificultades para recaudar fondos. Si eres parte de una organización benéfica, únete a nuestro canal de Slack para ponerte en contacto. A día de hoy, todos nuestros gastos están cubiertos, así que donamos el 100% de lo que generamos. Estamos esforzándonos también por hacer nuestra organización lo más transparente posible.'
      },
      TWO: {
        QUESTION: '¿Es malo para mi ordenador?',
        ANSWER: 'Blocks for Change no afecta negativamente a ningún orenador. Utiliza sólamente capacidad de computación sobrante de tu ordenador (en torno al 3-5% generalmente), así que no deberías ni notar que está funcionando. Si necesitas ejecutar programas muy intensivos para el CPU, siempre puedes apagar el minador en tus ajustes.'
      },
      THREE: {
        QUESTION: '¿Hay que pagar para utilizarlo?',
        ANSWER: 'Nope. Descargar - y usar - Blocks for Change, es gratis y siempre lo será. ¡Sólo con utilizarlo ya estás ayudando! Si quieres ayudar todavía más, ponte en contacto con el equipo a través de Slack, y comparte el proyecto. Cuantos más usuarios tengamos, más impacto positivo tendremos.'
      }
    }
  }

  $translateProvider.translations('en', translationsEN)

  $translateProvider.translations('es', translationsES)

  $translateProvider.preferredLanguage('en')
}])
