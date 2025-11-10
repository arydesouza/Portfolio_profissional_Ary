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
  meta,
  starbucks,
  tesla,
  shopify,
  PTI,
  focus,
  carrent,
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
    title: "Engenheiro de Software",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
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
    date: "Fevereiro 2023 - Abril 2023",
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
    ],
  },
  {
    title: "Desenvolvedor Front-end",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Agosto 2024 - Atual",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };