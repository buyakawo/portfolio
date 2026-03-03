import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  suncaper,
  bastion,
  carrent,
  jobit,
  tripguide,
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
    title: "Full stack Web Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
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
];

const experiences = [
  {
    title: "Intern - Big Data Analyst",
    company_name: "suncaper",
    icon: suncaper,
    iconBg: "#383E56",
    date: "March 2024 - may 2024",
    points: [
      " Participated in an internship at Suncaper, focusing on a Big Data Analysis project.",
      " Collaborated with a team to develop a website for analyzing large datasets, using technologies such as Apache Spark, SQL, MySQL, Flask, Hive, Hadoop, and Python.",
      " Contributed to the development of a scalable data architecture, ensuring high performance and reliability.",
      "  Gained hands-on experience with big data technologies, enhancing my skills in data analysis, web development, and system architecture. ",
    ],
  },
  {
    title: "Full Stack Engineer intern",
    company_name: "Bastion Trading",
    icon: bastion,
    iconBg: "#E6DEDD",
    date: "Sep 2025 - Jan 2026",
    points: [
      "Collaborated with trading and engineering teams based in HongKong to design and deliver internal tools supporting multi-exchange trading operations. ",
      "Developed a trade and balance reconciliation system across multiple exchanges using Python and PostgreSQL, ensuring data consistency between exchange reports and internal records.",
      "Built an exchange trade-bar streaming pipeline that ingested real-time market data via Websocket and Rest APIs and streamed aggregated bars into DolphinDB for quantitative analysis and strategy evaluation.",
      "Designed and implemented a full stack internal web app using nextjs, enabling traders to dynamically manage trading symbols and configurations.",
      "Integrated the application with Kubernetes cluster, supporting configuration updates without service downtime. ",
    ],
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

export { services, technologies, experiences, projects };