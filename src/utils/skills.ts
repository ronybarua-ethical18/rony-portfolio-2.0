import { IconType } from "react-icons";

import { IoLogoJavascript } from "react-icons/io";
import {
  SiTypescript,
  SiRedux,
  SiTrpc,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongoose,
  SiPrisma,
  SiRedis,
  SiStrapi,
  SiSentry,
  SiPm2,
  SiSwagger,
  SiGithubactions,
} from "react-icons/si";
import { AiOutlinePython } from "react-icons/ai";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs, FaDocker, FaAws, FaStripe, FaShopify } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { GiSatelliteCommunication } from "react-icons/gi";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlineWebhook } from "react-icons/md";
import { DiMongodb } from "react-icons/di";

// Define types
type Skill = {
  id: number;
  name: string;
  icon: IconType; // Use IconType instead of React.ReactElement
};

type SkillCategory = {
  title: string;
  skillSet: Skill[];
};

// Define skills array with type
const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    skillSet: [
      {
        id: 1,
        name: "Javascript",
        icon: IoLogoJavascript,
      },
      {
        id: 2,
        name: "Typescript",
        icon: SiTypescript,
      },
      {
        id: 3,
        name: "Python",
        icon: AiOutlinePython,
      },
    ],
  },
  {
    title: "Front-end Technologies",
    skillSet: [
      {
        id: 1,
        name: "Next JS",
        icon: RiNextjsLine,
      },
      {
        id: 2,
        name: "Redux",
        icon: SiRedux,
      },
      {
        id: 3,
        name: "Tailwind CSS",
        icon: RiTailwindCssFill,
      },
      {
        id: 4,
        name: "TRPC",
        icon: SiTrpc,
      },
    ],
  },
  {
    title: "Back-end Technologies",
    skillSet: [
      {
        id: 1,
        name: "Node JS",
        icon: FaNodeJs,
      },
      {
        id: 2,
        name: "Express JS",
        icon: SiExpress,
      },
      {
        id: 3,
        name: "Nest JS",
        icon: SiNestjs,
      },
      {
        id: 4,
        name: "Nginx",
        icon: SiNginx,
      },
    ],
  },
  {
    title: "APIs",
    skillSet: [
      {
        id: 1,
        name: "Restful API",
        icon: GiSatelliteCommunication,
      },
      {
        id: 2,
        name: "GraphQL",
        icon: GrGraphQl,
      },
      {
        id: 3,
        name: "Webhook",
        icon: MdOutlineWebhook,
      },
    ],
  },
  {
    title: "Databases & Cloud Services",
    skillSet: [
      {
        id: 1,
        name: "MongoDB",
        icon: DiMongodb,
      },
      {
        id: 2,
        name: "PostgreSQL",
        icon: SiPostgresql,
      },
      {
        id: 3,
        name: "Docker",
        icon: FaDocker,
      },
      {
        id: 4,
        name: "AWS",
        icon: FaAws,
      },
      {
        id: 5,
        name: "Github Actions",
        icon: SiGithubactions,
      },
      {
        id: 6,
        name: "Mongoose",
        icon: SiMongoose,
      },
      {
        id: 7,
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    title: "Tools & Platforms",
    skillSet: [
      {
        id: 1,
        name: "Stripe",
        icon: FaStripe,
      },
      {
        id: 2,
        name: "Redis",
        icon: SiRedis,
      },
      {
        id: 3,
        name: "Strapi",
        icon: SiStrapi,
      },
      {
        id: 4,
        name: "Sentry",
        icon: SiSentry,
      },
      {
        id: 5,
        name: "PM2",
        icon: SiPm2,
      },
      {
        id: 6,
        name: "Shopify",
        icon: FaShopify,
      },
      {
        id: 7,
        name: "Swagger",
        icon: SiSwagger,
      },
    ],
  },
];

export default skills;
