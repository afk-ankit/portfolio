import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { IProject } from "../types/project.type";
import {
  SiApachekafka,
  SiNestjs,
  SiRedis,
  SiSocketdotio,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <div className="rounded-md bg-zinc-800 transition-transform overflow-hidden cursor-pointer flex flex-col max-w-[350px]">
      <a href={project.link} target="_blank">
        <div className="h-44 overflow-hidden">
          <img
            src={project.logo}
            alt=""
            className="w-full object-cover h-full object-left"
          />
        </div>
        <div className="pt-8 px-4 space-y-4 flex-1">
          <h1 className="font-bold">{project.title}</h1>
          <p className="tracking-wide leading-relaxed text-zinc-400 text-sm">
            {project.description}
          </p>
        </div>
        <div className="flex gap-2 py-8 px-4">
          <TbBrandNextjs className="text-zinc-400" />
          <RiTailwindCssFill className="text-zinc-400" />
          <SiNestjs className="text-zinc-400" />
          <TbBrandTypescript className="text-zinc-400" />
          <SiApachekafka className="text-zinc-400" />
          <SiRedis className="text-zinc-400" />
          <BiLogoPostgresql className="text-zinc-400" />
          <SiSocketdotio className="text-zinc-400" />
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;
