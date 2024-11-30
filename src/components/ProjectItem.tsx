import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IProject } from "../types/project.type";

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <div className="rounded-2xl bg-zinc-800 h-full transition-transform overflow-hidden cursor-pointer flex flex-col">
      <div className="h-44 relative overflow-hidden">
        <img
          src={project.logo}
          alt=""
          className="h-full w-full object-cover hover:scale-[1.2] transition-transform duration-300"
        />
      </div>
      <div className="pt-8 px-4 space-y-4 flex-1">
        <h1 className="font-bold">{project.title}</h1>
        <p className="tracking-wide leading-relaxed text-zinc-400 text-sm">
          {project.description}
        </p>
      </div>
      <div className="flex gap-2 py-8 px-4">
        <FontAwesomeIcon icon={faReact} className="text-zinc-400" />
        <span className="text-xs text-zinc-400">View Project</span>
      </div>
    </div>
  );
};

export default ProjectItem;
