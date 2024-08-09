const menu = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Sobre Nós",
    href: "/sobre",
  },
  {
    name: "Eventos",
    href: "/eventos",
  },
  {
    name: "Datas Importantes",
    href: "/calendario",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Professores",
    href: "/professores",
  },
];

const areas = [
  {
    title: "New Product Launch",
    description:
      "Discover the amazing features of our new product. It’s designed to enhance your productivity and efficiency.",
    hasButton: true,
    link: "/product-launch",
    buttonText: "Learn More",
    imageHref:
      "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Summer Sale",
    description:
      "Take advantage of our summer sale with up to 50% off on selected items. Hurry, offer ends soon!",
    hasButton: true,
    link: "/summer-sale",
    buttonText: "Shop Now",
    imageHref:
      "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Customer Testimonials",
    description:
      "Hear from our satisfied customers about how our products have made a difference in their lives.",
    hasButton: false, // No button for this item
    link: "", // No link as there is no button
    buttonText: "",
    imageHref:
      "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const blogPosts = [
  {
    title: "Entendendo Solidity",
    description:
      "Uma introdução à linguagem de programação Solidity, usada para desenvolver smart contracts na blockchain Ethereum.",
    link: "https://example.com/entendendo-solidity",
    buttonText: "Leia mais",
    imageHref:  "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem representando a linguagem Solidity",
  },
  {
    title: "Primeiros Passos com Remix",
    description:
      "Aprenda a usar o Remix IDE para desenvolver e testar seus primeiros smart contracts.",
    link: "https://example.com/primeiros-passos-remix",
    buttonText: "Explore agora",
    imageHref:  "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem do ambiente de desenvolvimento Remix",
  },
  {
    title: "Smart Contracts Avançados",
    description:
      "Descubra técnicas avançadas para desenvolver smart contracts eficientes e seguros.",
    link: "https://example.com/smart-contracts-avancados",
    buttonText: "Saiba mais",
    imageHref:  "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem de contratos inteligentes",
  },
  {
    title: "Segurança em Blockchain",
    description:
      "Entenda os principais desafios e práticas de segurança no desenvolvimento de aplicações blockchain.",
    link: "https://example.com/seguranca-blockchain",
    buttonText: "Leia mais",
    imageHref:  "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem representando segurança em blockchain",
  },
  {
    title: "Integração de APIs com Blockchain",
    description:
      "Aprenda como integrar APIs externas com seus smart contracts para expandir suas funcionalidades.",
    link: "https://example.com/integracao-apis-blockchain",
    buttonText: "Veja como",
    imageHref:  "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem de integração de APIs",
  },
  {
    title: "O Futuro dos Smart Contracts",
    description:
      "Explorando o potencial dos smart contracts e suas aplicações futuras no mundo digital.",
    link: "https://example.com/futuro-smart-contracts",
    buttonText: "Descubra agora",
    imageHref:  "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem representando o futuro dos smart contracts",
  },
];

const footerMenu = [
  {
    title: "Escola",
    links: [
      {
        name: "Sobre",
        href: "/sobre",
      },
      {
        name: "Direção",
        href: "/direcao",
      },
      {
        name: "Avisos",
        href: "/avisos",
      },
      {
        name: "Projetos",
        href: "/projetos",
      },
    ],
  },
  {
    title: "Professores",
    links: [
      {
        name: "Quem Somos",
        href: "/quem-somos",
      },
      {
        name: "Disciplinas",
        href: "/disciplinas",
      },
      {
        name: "Testes e Provas",
        href: "/testes-e-provas",
      },
    ],
  },
  {
    title: "Alunos",
    links: [
      {
        name: "Destaques do Bimestre",
        href: "/destaques-do-bimestre",
      },
      {
        name: "Grêmio",
        href: "/gremio",
      },
      {
        name: "Talentos da Escola",
        href: "/talentos-da-escola",
      },
      {
        name: "Cursos e Oportunidades",
        href: "/cursos-e-oportunidades",
      },
    ],
  },
  {
    title: "Questões Legais",
    links: [
      {
        name: "Calendário Anual",
        href: "/calendario",
      },
      {
        name: "Seeduc",
        href: "/seeduc",
      },
      {
        name: "Políticas de privacidade",
        href: "/politicas-de-privacidade",
      },
    ],
  },
];

const imagesExamples = [
  {
    image:
      "https://images.unsplash.com/photo-1722241493021-1d0d3ce79f5e?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "alt de teste",
  },
  {
    image:
      "https://images.unsplash.com/photo-1722171210773-4a2e54197061?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "alt de teste",
  },
  {
    image:
      "https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "alt de teste",
  },
  {
    image:
      "https://images.unsplash.com/photo-1722422608959-e7c57b9bfef3?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "alt de teste",
  },
  {
    image:
      "https://images.unsplash.com/photo-1700183069109-b0a91cff80c3?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "alt de teste",
  },
  {
    image:
      "https://images.unsplash.com/photo-1722519554066-a8b2e1f916eb?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "alt de teste",
  },
];

const professores = [
  {
    name: "Vinicius Sodré",
    disciplina: "Biologia",
    bio: "Lorem ipsm dolor sit amet consectetur adipisic ipsm dolor sit amet consectetur adipisic",
    contato: {
      email: "xH9Qs@example.com",
      tel: "11 99999-9999",
      instagram: "@viniciussodre",
      site: "https://viniciussodre.com",
    },
    page: "/professores/vinicius-sodre",
  },
  {
    name: "Mariana Costa",
    disciplina: "Matemática",
    bio: "Expert em equações diferenciais e álgebra linear.",
    contato: {
      email: "mariana@example.com",
      tel: "21 98888-8888",
      instagram: "@marianacosta",
      site: "https://marianacosta.com",
    },
    page: "/professores/mariana-costa",
  },
  {
    name: "Carlos Almeida",
    disciplina: "Física",
    bio: "Entusiasta da física quântica e astrofísica.",
    contato: {
      email: "carlos@example.com",
      tel: "31 97777-7777",
      instagram: "@carlosalmeida",
      site: "https://carlosalmeida.com",
    },
    page: "/professores/carlos-almeida",
  },
  {
    name: "Fernanda Lima",
    disciplina: "Química",
    bio: "Especialista em química orgânica e inorgânica.",
    contato: {
      email: "fernanda@example.com",
      tel: "41 96666-6666",
      instagram: "@fernandalima",
      site: "https://fernandalima.com",
    },
    page: "/professores/fernanda-lima",
  },
  {
    name: "Roberto Silva",
    disciplina: "História",
    bio: "Apaixonado por história medieval e contemporânea.",
    contato: {
      email: "roberto@example.com",
      tel: "51 95555-5555",
      instagram: "@robertosilva",
      site: "https://robertosilva.com",
    },
    page: "/professores/roberto-silva",
  },
  {
    name: "Ana Paula",
    disciplina: "Geografia",
    bio: "Especialista em geografia física e humana.",
    contato: {
      email: "ana@example.com",
      tel: "61 94444-4444",
      instagram: "@anapaula",
      site: "https://anapaula.com",
    },
    page: "/professores/ana-paula",
  },
  {
    name: "Lucas Fernandes",
    disciplina: "Inglês",
    bio: "Professor de inglês com foco em conversação e gramática.",
    contato: {
      email: "lucas@example.com",
      tel: "71 93333-3333",
      instagram: "@lucasfernandes",
      site: "https://lucasfernandes.com",
    },
    page: "/professores/lucas-fernandes",
  },
  {
    name: "Juliana Mendes",
    disciplina: "Português",
    bio: "Amante da literatura e gramática portuguesa.",
    contato: {
      email: "juliana@example.com",
      tel: "81 92222-2222",
      instagram: "@julianamendes",
      site: "https://julianamendes.com",
    },
    page: "/professores/juliana-mendes",
  },
  {
    name: "Ricardo Oliveira",
    disciplina: "Educação Física",
    bio: "Especialista em condicionamento físico e nutrição.",
    contato: {
      email: "ricardo@example.com",
      tel: "91 91111-1111",
      instagram: "@ricardooliveira",
      site: "https://ricardooliveira.com",
    },
    page: "/professores/ricardo-oliveira",
  },
  {
    name: "Gabriela Souza",
    disciplina: "Artes",
    bio: "Artista plástica e professora de artes visuais.",
    contato: {
      email: "gabriela@example.com",
      tel: "31 90000-0000",
      instagram: "@gabrielasouza",
      site: "https://gabrielasouza.com",
    },
    page: "/professores/gabriela-souza",
  },
  {
    name: "Felipe Duarte",
    disciplina: "Sociologia",
    bio: "Pesquisador em sociologia urbana e política.",
    contato: {
      email: "felipe@example.com",
      tel: "11 98989-8989",
      instagram: "@felipeduarte",
      site: "https://felipeduarte.com",
    },
    page: "/professores/felipe-duarte",
  },
  {
    name: "Patrícia Carvalho",
    disciplina: "Filosofia",
    bio: "Entusiasta da filosofia moderna e contemporânea.",
    contato: {
      email: "patricia@example.com",
      tel: "21 97878-7878",
      instagram: "@patriciacarvalho",
      site: "https://patriciacarvalho.com",
    },
    page: "/professores/patricia-carvalho",
  },
  {
    name: "Thiago Pinto",
    disciplina: "Informática",
    bio: "Especialista em desenvolvimento de software e redes.",
    contato: {
      email: "thiago@example.com",
      tel: "31 96767-6767",
      instagram: "@thiagopinto",
      site: "https://thiagopinto.com",
    },
    page: "/professores/thiago-pinto",
  },
  {
    name: "Lorena Marques",
    disciplina: "Química",
    bio: "Focada em pesquisas de bioquímica e nanotecnologia.",
    contato: {
      email: "lorena@example.com",
      tel: "41 95656-5656",
      instagram: "@lorenamarques",
      site: "https://lorenamarques.com",
    },
    page: "/professores/lorena-marques",
  },
  {
    name: "Gustavo Ribeiro",
    disciplina: "Geometria",
    bio: "Apaixonado por geometria euclidiana e não euclidiana.",
    contato: {
      email: "gustavo@example.com",
      tel: "51 94545-4545",
      instagram: "@gustavoribeiro",
      site: "https://gustavoribeiro.com",
    },
    page: "/professores/gustavo-ribeiro",
  },
  {
    name: "Camila Silva",
    disciplina: "História",
    bio: "Pesquisadora em história antiga e arqueologia.",
    contato: {
      email: "camila@example.com",
      tel: "61 93434-3434",
      instagram: "@camilasilva",
      site: "https://camilasilva.com",
    },
    page: "/professores/camila-silva",
  },
  {
    name: "Renato Castro",
    disciplina: "Física",
    bio: "Especialista em mecânica clássica e termodinâmica.",
    contato: {
      email: "renato@example.com",
      tel: "71 92323-2323",
      instagram: "@renatocastro",
      site: "https://renatocastro.com",
    },
    page: "/professores/renato-castro",
  },
];

export { menu, areas, blogPosts,footerMenu, imagesExamples, professores };
