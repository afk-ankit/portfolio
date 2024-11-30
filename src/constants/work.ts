import { IWork } from "../types/work.type";

export const WORK_DESCRIPTIONS: IWork[] = [
  {
    id: 1,
    company: "Upesto.com",
    logo: "/upesto_logo.png",
    location: "remote",
    jobRole: "Tech Lead",
    joiningDate: new Date(2023, 11),
    leavingDate: new Date(2024, 1),
    achievements: ["Building Next-gen developer collaboration tool"],
  },
  {
    id: 2,
    company: "Samtal.io",
    location: "remote",
    jobRole: "Freelance Developer",
    joiningDate: new Date(2023, 11),
    leavingDate: new Date(2024, 1),
    achievements: ["Building Next-gen developer collaboration tool"],
  },
];
