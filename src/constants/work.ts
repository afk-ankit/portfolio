import { IWork } from "../types/work.type";

export const WORK_DESCRIPTIONS: IWork[] = [
  {
    id: 1,
    company: "CDAC",
    location: "Bangalore",
    logo: "cdac_logo.jpg",
    jobRole: "Project Intern",
    joiningDate: new Date(2025, 0),
    achievements: [
      "Using Python and Django to build backend systems so smooth, they almost write themselves. 🐍✨",
      "Added async functions—not just to speed up APIs, but also to make my job feel like a sci-fi movie. 🚀",
      "Debugging Django so often, I’m starting to think the framework should pay me rent. 🏠🔧",
    ],
  },
  {
    id: 2,
    company: "Upesto.com",
    logo: "/upesto_logo.png",
    location: "remote",
    jobRole: "Freelance Developer",
    joiningDate: new Date(2023, 11),
    leavingDate: new Date(2024, 1),
    achievements: [
      "Built a freelancer hiring platform so smooth, even freelancers stopped ghosting clients. 👻💼",
      "Designed a Jira-like project management system—because chaos is fun, but organized chaos is profitable. 📊⚡",
      "Integrated real-time chat so fast, it makes email feel like sending letters by pigeon. 📬🐦",
    ],
  },
  // {
  //   id: 3,
  //   company: "Samtal.io",
  //   logo: "/samtal_logo.png",
  //   location: "remote",
  //   jobRole: "Freelance Developer",
  //   joiningDate: new Date(2023, 11),
  //   leavingDate: new Date(2024, 1),
  //   achievements: ["Building Next-gen developer collaboration tool"],
  // },
];
