import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItem = () => {
  return (
    <div className="rounded-2xl bg-zinc-800 min-h-80 transition-transform overflow-hidden cursor-pointer">
      <div className="h-44 bg-red-500 relative overflow-hidden">
        <img
          src="/upesto_project.png"
          alt=""
          className="h-full w-full object-cover hover:scale-[1.2] transition-transform duration-300"
        />
      </div>
      <div className="pt-8 px-4 space-y-4">
        <h1 className="font-bold">Docker Mastery Course</h1>
        <p className="tracking-wide leading-relaxed text-zinc-400 text-sm">
          In this course, you will learn everything you need to know about
          Docker, a powerful tool for creating, deploying, and managing
          containerized applications.
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
