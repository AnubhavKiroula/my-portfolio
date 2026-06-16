import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiChartdotjs,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiLeaflet,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiFastapi,
  SiFlutter,
  SiHuggingface,
  SiScikitlearn,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js (SSR Architecture)",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra (Component System)",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js (Async Backend)",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python (AI / Scripting)",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "Prisma (Type-Safe ORM)",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL (Relational DB)",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB (NoSQL Store)",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express (Web Framework)",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query (Cache Layer)",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "Shadcn (UI Architecture)",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity (Premium UI)",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind (Utility CSS)",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker (Containerization)",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js (Real-time CRDT)",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase (Cloud Services)",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io (Real-time events)",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript (Core Runtime)",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript (Static Safety)",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js (Reactive UI)",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React (Component UI)",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity (Headless CMS)",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline (3D Scenes)",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP (Motion Engine)",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion (Animations)",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase (Cloud BaaS)",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  java: {
    title: "Java (Enterprise Core)",
    bg: "black",
    fg: "white",
    icon: <FaJava />,
  },
  mysql: {
    title: "MySQL (Relational SQL)",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  flask: {
    title: "Flask (Python Backend)",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  leaflet: {
    title: "Leaflet (Interactive Maps)",
    bg: "black",
    fg: "white",
    icon: <SiLeaflet />,
  },
  chartjs: {
    title: "Chart.js (Data ViZ)",
    bg: "black",
    fg: "white",
    icon: <SiChartdotjs />,
  },
  fastapi: {
    title: "FastAPI (Python Web Framework)",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  flutter: {
    title: "Flutter (Cross-Platform Mobile)",
    bg: "black",
    fg: "white",
    icon: <SiFlutter />,
  },
  huggingface: {
    title: "HuggingFace (Transformers)",
    bg: "black",
    fg: "white",
    icon: <SiHuggingface />,
  },
  scikitlearn: {
    title: "Scikit-Learn (Machine Learning)",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "smart-library",
    category: "IoT / Full Stack",
    title: "Smart Library Management System",
    src: "/assets/projects-screenshots/smart-library.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.flutter,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.supabase,
      ],
    },
    live: "#",
    github: "https://github.com/AnubhavKiroula/Smart-Library",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated QR-Based occupancy tracking and real-time availability system.
          </TypographyP>
          <TypographyP className="font-mono">
            A comprehensive, high-throughput system automating space utilization and occupancy metrics for libraries supporting over 2,000 active users. Built to address seat-searching overheads and improve space efficiency.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            QR Occupancy Tracking
          </TypographyH3>
          <p className="font-mono mb-2">
            Reduced seat search time by 85% and improved space utilization by 25% for 2,000+ daily users using automated QR codes for entry and exit logging.
          </p>
          <TypographyH3 className="my-4 mt-8">
            RESTful API & Database
          </TypographyH3>
          <p className="font-mono mb-2">
            High-performance backend API boasting 100% entry/exit accuracy and &lt;500ms response times. Engineered transactional database operations in PostgreSQL with duplicate check protection and Jest tests.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Flutter Application & Admin Panel
          </TypographyH3>
          <p className="font-mono mb-2">
            Cross-platform mobile app displaying real-time seat availability maps, coupled with an interactive web admin dashboard. Containerized with Docker and deployed on Supabase.
          </p>
        </div>
      );
    },
  },
  {
    id: "data-cleaning-platform",
    category: "AI / Machine Learning",
    title: "Intelligent Data Cleaning Platform",
    src: "/assets/projects-screenshots/data-cleaning.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.huggingface,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "#",
    github: "https://github.com/AnubhavKiroula/data-cleaning-openenv",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            RL-Powered Automatic Data Imputation & Cleaning
          </TypographyP>
          <TypographyP className="font-mono">
            An intelligent SaaS platform that automates table validation, structure normalization, and missing value imputation using reinforcement learning and open-source LLMs.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Reinforcement Learning Imputation
          </TypographyH3>
          <p className="font-mono mb-2">
            Achieved 95%+ cleaning accuracy with an 80% reduction in manual scrubbing time. Powered by HuggingFace Llama-2 NLP-based missing value imputation.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Asynchronous Celery Workers
          </TypographyH3>
          <p className="font-mono mb-2">
            Handles large file uploads (up to 100MB CSVs) seamlessly. Leverages RabbitMQ and Celery task queues for high-concurrency data parsing and background operations.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Robust CI/CD & Testing
          </TypographyH3>
          <p className="font-mono mb-2">
            Maintained a 100% build success rate via GitHub Actions automation: running lint checks, Jest/Pytest suites, and managing automated multi-stage Docker builds.
          </p>
        </div>
      );
    },
  },
  {
    id: "stock-prediction",
    category: "AI / Finance",
    title: "Stock Price Prediction System",
    src: "/assets/projects-screenshots/stock-prediction.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.scikitlearn,
      ],
    },
    live: "https://stock-price-prediction1.netlify.app/",
    github: "https://github.com/AnubhavKiroula",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Market Trend Forecasting & Financial API Integration
          </TypographyP>
          <TypographyP className="font-mono">
            An ML-powered financial tool designed to forecast price trends using historical financial records and live market feeds.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Regression & Classification Models
          </TypographyH3>
          <p className="font-mono mb-2">
            Utilizes supervised learning algorithms from Scikit-Learn to estimate price bounds and determine bullish/bearish market sentiments.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Real-Time Data Pipelines
          </TypographyH3>
          <p className="font-mono mb-2">
            Consumes live quotes and stock metrics from financial APIs using pandas and numpy for streaming data manipulation and transformation.
          </p>
        </div>
      );
    },
  },
  {
    id: "crewai-agent",
    category: "AI / Automation",
    title: "AI Agent with CrewAI",
    src: "/assets/projects-screenshots/crewai-agent.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://ai-agent-crewai.netlify.app/",
    github: "https://github.com/AnubhavKiroula",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Multi-Agent Workflows & CrewAI Orchestration
          </TypographyP>
          <TypographyP className="font-mono">
            An automated project management system leveraging CrewAI to delegate, orchestrate, and log AI workflows in real time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Intelligent Task Delegation
          </TypographyH3>
          <p className="font-mono mb-2">
            Configures specialized agents with structured roles, tools, and objectives to collaboratively solve design, research, and coding tasks.
          </p>
          <TypographyH3 className="my-4 mt-8">
            Real-time Logging & Monitoring
          </TypographyH3>
          <p className="font-mono mb-2">
            Provides complete transparency into agent decision trajectories with detailed streaming logs and intermediate outputs.
          </p>
        </div>
      );
    },
  },
];
export default projects;
