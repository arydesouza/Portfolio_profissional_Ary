import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  angular,
  git,
  figma,
  docker,
  mysql,
  amazon_aws,
  next_js,
  meta,
  starbucks,
  tesla,
  shopify,
  PTI,
  focus,
  carrent,
  wavemotors,
  divideai,
  jobit,
  tripguide,
  threejs,
  freelancer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Experiência",
  },
  {
    id: "contact",
    title: "Contato",
  },  
];

const services = [
  {
    title: "Desenvolvedor Front-end",
    icon: web,
  },
  {
    title: "Desenvolvedor React",
    icon: mobile,
  },
  {
    title: "Desenvolvedor Angular",
    icon: backend,
  },
  {
    title: "Desenvolvedor Web",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "next_js",
    icon: next_js,
  },
  {
    name: "mysql",
    icon: mysql,
  },


];

const experiences = [
  {
    title: "Desenvolvedor Fullstack",
    company_name: "Parque Tecnológico de Itaipu (PTI)",
    icon: PTI,
    iconBg: "#383E56",
    date: "Fevereiro 2023 - Junho 2023",
    points: [
      "Desenvolvi e mantive o sistema web de gestão de estoque do LabMaker, atuando no front-end com HTML, CSS e JavaScript e no back-end com MySQL.",
      "Modelagem e implementação do banco de dados para garantir armazenamento seguro e rastreável das movimentações.",
      "Criação de funcionalidades de cadastro, controle de empréstimos, devoluções e níveis de acesso para diferentes usuários..",
      "Digitalização total do processo de controle de estoque, reduzindo em cerca de 70% o tempo gasto no registro de empréstimos e devoluções..",
      "Eliminação de erros manuais ao substituir formulários físicos e planilhas dispersas por um sistema integrado.",
    ],
  },
  {
    title: "Estágio em Implementação de SaaS",
    company_name: "Focus Technology",
    icon: focus,
    iconBg: "#E6DEDD",
    date: "Junho 2023 - Julho 2024",
    points: [
      "Atuava na linha de frente do suporte técnico, lidando diariamente com clientes internacionais e garantindo respostas rápidas e eficientes, em média, resolvia mais de 30 tickets por semana econseguia reduzir o tempo de resposta em cerca de 40%.",
      "Implantei e configurei soluções SaaS da Freshworks para vários clientes, personalizando os fluxos de trabalho e as automações da plataforma para atender a requisitos de negócios específicos.",
      "Atuei como ponto de contato técnico para os clientes, solucionando problemas e garantindo uma adoção bem-sucedida da plataforma.",
      "No desenvolvimento, criava interfaces web intuitivas com React.js, sempre com foco na usabilidade e na experiência do usuário, o que ajudou a aumentar o engajamento em aproximadamente 15%"
    ],
  },
  {
    title: "Desenvolvedor Front-end",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Agosto 2024 - Atual",
    points: [
      "Como desenvolvedor Front-end freelancer, atuei em projetos pessoais e para demandantes externos, criando interfaces modernas e performáticas com React, Angular e TypeScript, focando em usabilidade e desempenho do usuário.",
      "No projeto WaveMotors, otimizei o front-end de uma plataforma de e-commerce, melhorando a visibilidade dos anúncios em 35% e melhorei a experiência de compra e venda, impactando diretamente cerca de 10 usuários nos testes iniciais.",
      "Já no Divide.ai, desenvolvi um app de divisão de contas com React, TypeScript, Vite, TailwindCSS e Lovable, reduzindo o tempo de processamento em 60%.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WaveMotors",
    description:
      "Uma plataforma de e-commerce para compra e venda de veículos novos e seminovos, com sistema de busca, filtros de marcas, modelo e acessórios, favoritos, propostas de venda, entre outras funcionalidades.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: wavemotors,
    source_code_link: "https://github.com/arydesouza",
    live_demo_link: "https://frontendwavemotors.vercel.app/home",
  },
  {
    name: "Divide.ai",
    description:
      "Aplicativo mobile para divisão de contas entre amigos, desde o pagamento de uma conta até a divisão de contas de airbnb emuma viagem, com sistema de login, cadastro, divisão de contas, histórico de transações, entre outras funcionalidades.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: divideai,
    source_code_link: "https://github.com/arydesouza",
    live_demo_link: "https://preview--spend-split-pal.lovable.app/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/arydesouza",
    live_demo_link: "https://sua-demo-tripguide.com",
  },
];

export { services, technologies, experiences, testimonials, projects };