import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiApachekafka,
  SiExpress,
  SiFormik,
  SiMaterialdesign,
  SiNestjs,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
} from "react-icons/si";
import {
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandVite,
} from "react-icons/tb";
import { IProject } from "../types/project.type";

export const PROJECTS: IProject[] = [
  {
    title: "Upesto.com",
    logo: "/upesto_project.png",
    link: "https://upestov2.solytech.in",
    description:
      "Upesto is a freelancer hiring platform with Jira-like project management, real-time chat, and seamless collaboration tools. It simplifies hiring, task management, and team communication in one place.",
    logos: [
      TbBrandNextjs,
      TbBrandTypescript,
      SiExpress,
      SiSocketdotio,
      RiTailwindCssFill,
      TbBrandMysql,
      SiReactquery,
    ],
  },
  {
    title: "Watchnow.in",
    logo: "/watch_now_project.png",
    link: "https://watchnow.avocadorable.in",
    description:
      "WatchNow is a React-based movie discovery platform that leverages the IMDB API to offer personalized recommendations, helping users find trending films, classics, and hidden gems.",
    logos: [TbBrandVite, RiTailwindCssFill, SiShadcnui, SiReactquery],
  },
  {
    title: "Waitlist.biz",
    logo: "/waitlist_project.png",
    link: "https://app.gohighlevel.com/integration/67ae150b365d032764d62876",
    description:
      "Watilist is a restaurant waitlist integration built on GoHighLevel CRM, offering features like guest messaging, notifications, and seamless reservation management to enhance customer experience.",
    logos: [TbBrandVite, RiTailwindCssFill, SiShadcnui, SiNestjs, SiSupabase],
  },
  {
    title: "Samtal.io",
    logo: "/samtal_project.png",
    link: "https://samtal.io",
    description:
      "Samtal is a white-labeled employee engagement platform with HRIS-based onboarding, smart grouping, and real-time chat. It enables teams to share posts, announcements, and updates, fostering seamless communication.",
    logos: [
      TbBrandNextjs,
      RiTailwindCssFill,
      SiShadcnui,
      BiLogoPostgresql,
      SiNestjs,
      SiSocketdotio,
      SiRedis,
      SiApachekafka,
    ],
  },
  {
    title: "RapidResume.in",
    logo: "/rapid_resume_project.png",
    link: "https://rapidresume.avocadorable.in",
    description:
      "Rapid Resume is a React-based resume builder that helps users create professional resumes effortlessly with prebuilt templates, customizable sections, and an intuitive interface.",
    logos: [TbBrandVite, SiMaterialdesign, SiFormik],
  },
];
