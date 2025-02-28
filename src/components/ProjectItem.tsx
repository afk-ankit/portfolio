import { IProject } from "../types/project.type";

const ProjectItem = ({ project }: { project: IProject }) => {
  return (
    <div className="rounded-md bg-zinc-800 transition-transform overflow-hidden cursor-pointer flex flex-col max-w-[350px]">
      <a href={project.link} target="_blank" className="flex flex-col h-full">
        <div className="h-44 overflow-hidden">
          <img
            src={project.logo}
            alt=""
            className="w-full object-cover h-full object-left-top "
          />
        </div>
        <div className="pt-8 px-4 space-y-4 flex-1">
          <h1 className="font-bold">{project.title}</h1>
          <p className="tracking-wide leading-relaxed text-zinc-400 text-sm">
            {project.description}
          </p>
        </div>
        <div className="flex gap-2 py-8 px-4">
          {project.logos.map((Item, key) => (
            <Item className="text-zinc-400" key={key} />
          ))}
        </div>
      </a>
    </div>
  );
};

export default ProjectItem;
