import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  // tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  canguro,
  // tesla,
  // shopify,
  // carrent,
  jobit,
  tripguide,
  // threejs,
  socialdev,
  linkedin,
  indracompany,
  sqlserver,
  net,
  python,
  mui,
  bootstrap,
  pokedex
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "SQL/NoSQL",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: ".Net",
    icon: net,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Sql Server",
    icon: sqlserver,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
  {
    name: "material ui",
    icon: mui,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
];

const experiences = [
  {
    title: "Jr. Fullstack Developer",
    company_name: "Remote",
    icon: linkedin ,
    iconBg: "#E6DEDD",
    date: "April 2023 - August 2023",
    points: [
      "I've worked with cutting-edge technologies like React, Redux, .NET, and Node.js to build beautiful, responsive, and functional user interfaces that deliver exceptional end-user experiences. My commitment to technical excellence has been combined with my passion for intuitive design, resulting in apps that not only perform well, but are also visually captivating.",
      "I contributed to the expansion of the system by adding functionalities that were adapted to the needs of the client. These functions included the manipulation of specific data, driving agility in decision making. The implementation was done using a combination of technologies such as React, Redux, .NET (C#), and SQL Server, backed by stored procedures.",
    ],
  },
  {
    title: "Jr. Web and Mobile Developer",
    company_name: "Canguro Int",
    icon: canguro,
    iconBg: "#E6DEDD",
    date: "August 2022 - May 2023",
    points: [
      "I developed a module to move items between warehouses or in the same warehouse in different sections reading barcodes and QR code laser sections (Mobile) using React Native, .Net(C#), SQLServer with stored procedures.",
      "Add functions capture all the items that are in the section to carry out inventory in the warehouse in reading the QR code of sections in laser using React Native, .Net(C#), SQLServer with stored procedures.",
      "I developed a module to level the articles that are located in each section so that the physical quantity is equal to the database quantity using React Native, .Net(C#), SQLServer with stored procedures.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Jr. Web Developer",
    company_name: "Indra Company",
    icon: indracompany,
    iconBg: "#014153",
    date: "November 2021 - June 2022",
    points: [
      "Responsible for developing Fullstack Web applications using ReactJS, NodeJS, ExpressJS and mongoDB (MERN), I provided functional and technical support to the Commercial Management Systems of companies such as Air-e and Afinia in configuring, monitoring and solving incidents that arise in the databases using SQL and Unix. Companies providing services on the Colombian coast.",
      "I collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
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
    name: "Social Dev",
    description:
      "It is a mini Social Network for developers where you can post, comment, like, and you can also add features like skills and knowledge on your profile to attract recruiters and HR.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "orange-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "orange-text-gradient",
      },
    ],
    image: socialdev,
    source_code_link: "https://github.com/ASierraYepes/Red_Social_MERN",
    demo: "https://social-dev-cau2.onrender.com"
  },
  {
    name: "Pokedex",
    description:
      "It is a fully responsive web application that simulates a pokedex that allows users to search for their favorite pokemon, see powers, strength, abilities and levels, it was developed in Html, Css and Javascripts consuming rest api.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://github.com/ASierraYepes/Pokedex.git",
    demo:"https://js-pokedex-virid.vercel.app/"
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
    demo:""
  },
];

export { services, technologies, experiences, testimonials, projects };
