import { IWork } from "../types/work.type";

export const WORK_DESCRIPTIONS: IWork[] = [
  {
    id: 1,
    company: "CDAC",
    location: "Bangalore",
    logo: "cdac_logo.jpg",
    jobRole: "Project Intern",
    joiningDate: new Date(2025, 0),
    achievements: ["intern"],
  },
  {
    id: 2,
    company: "Upesto.com",
    logo: "/upesto_logo.png",
    location: "remote",
    jobRole: "Full Stack Developer",
    joiningDate: new Date(2023, 11),
    leavingDate: new Date(2024, 1),
    achievements: ["Building Next-gen developer collaboration tool"],
  },
  {
    id: 3,
    company: "Samtal.io",
    logo: "/samtal_logo.png",
    location: "remote",
    jobRole: "Freelance Developer",
    joiningDate: new Date(2023, 11),
    leavingDate: new Date(2024, 1),
    achievements: ["Building Next-gen developer collaboration tool"],
  },
];
