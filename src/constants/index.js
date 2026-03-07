import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  suncaper,
  bastion,
  Reconciliation,
  callzy,
  rrr,
  python,
  xstocks,
  k8s1,
  api,
  sql,
  k8s,
  postgres,
  nextjs,
  jira,
  bitbucket,
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
    title: "Full stack Engineer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: python,
  },
  {
    title: "Web Developer",
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
    name: "nextjs",
    icon: nextjs,
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
    name: "python",
    icon: python,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "postgres",
    icon: postgres,
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
    name: "k8s",
    icon: k8s1,
  },
  {
    name: "bitbucket",
    icon: bitbucket,
  },
  {
    name: "jira",
    icon: jira,
  },
];

const experiences = [
  {
    title: "Intern - Big Data Analyst",
    company_name: "suncaper",
    icon: suncaper,
    iconBg: "#383E56",
    date: "Mar 2024 - may 2024",
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
    name: "CallZY",
    description:
      "CallZY is a full-stack video meeting web application built with Next.js>, enabling users to instantly start, schedule, and manage secure online meetings through a modern, responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: callzy,
    source_code_link: "https://github.com/buyakawo/callzy-app",
  },
  {
    name: "Reconciliation Automation System",
    description:
      "An automated reconciliation system integrating APIs from different exchanges {hyperliquid, binance, bybit....} to ingest trade and balance data, eliminating manual workflows and improving accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "Emailjs",
        color: "pink-text-gradient",
      },
    ],
    image: Reconciliation,
    source_code_link: "https://github.com/buyakawo/",
  },
  {
    name: "XStocks Streamer",
    description:
      "a Python pipeline that ingests live market data from multiple exchanges and internal feeds, generating OHLC/trade bars and streaming them to DolphinDB for low-latency analytics.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "dolphinDB",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: xstocks,
    source_code_link: "https://github.com/buyakawo",
  },
  {
    name: "Royal Remedy Run",
    description:
      "A 2D platformer game built with Python and Pygame where you play as a princess navigating through 4 challenging levels filled with enemies, lava traps, and collectible coins, all in search of the Royal Remedy!",
    tags: [
      {
        name: "PyGame",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: rrr,
    source_code_link: "https://github.com/buyakawo/Royal-Remedy-Run?tab=readme-ov-file",
  },
  {
    name: "TSU: Trading Symbol Updater",
    description:
      "Built Trading Symbols Updater, a full-stack web app using Next.js, TypeScript, and Tailwind that lets traders upload and manage daily trading symbols with validation.",
    tags: [
      {
        name: "Nextjs",
        color: "green-text-gradient",
      },
      {
        name: "AWS Cognito",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: k8s,
    source_code_link: "https://github.com/buyakawo",
  },
  {
    name: "Python library for internal APIs",
    description:
      "a Python library that abstracts and standardizes access to the documented internal APIs.",
    tags: [
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "pink-text-gradient",
      },
    ],
    image: api,
    source_code_link: "https://github.com/buyakawo",
  },
];

export { services, technologies, experiences, projects };