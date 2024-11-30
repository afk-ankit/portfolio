import { IWork } from "../types/work.type";
import { cn } from "../utils/cn";

const WorkItem = ({
  work,
  changeHandler,
  currId,
}: {
  work: IWork;
  changeHandler: (id: number) => void;
  currId: number;
}) => {
  return (
    <div
      className={cn(
        "text-zinc-400 cursor-pointer px-4 py-2 rounded-lg flex gap-2 items-center hover:bg-zinc-800 transition-colors duration-500",
        {
          "bg-zinc-800": currId === work.id,
        },
      )}
      onClick={() => {
        changeHandler(work.id);
      }}
    >
      <div className="w-[30px] h-[30px] rounded-full bg-white overflow-hidden p-1">
        {work.logo && (
          <img src={work.logo} className="w-full h-full object-contain" />
        )}
      </div>
      <span>{work.company}</span>
    </div>
  );
};

export default WorkItem;
