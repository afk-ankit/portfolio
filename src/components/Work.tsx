import { useState } from "react";
import { WORK_DESCRIPTIONS } from "../constants/work";
import WorkDescription from "./WorkDescription";
import WorkItem from "./WorkItem";
const Work = () => {
  const [work, setWork] = useState(1);
  const handleWorkChange = (id: number) => {
    setWork(id);
  };
  return (
    <div className="mt-32">
      <h1 className="text-3xl font-bold ">Work Experience</h1>
      <p className="text-zinc-400 mt-4">
        I switch a lot of companies. It's mostly about the culture.
      </p>
      <div className="h-64 ml-32 mt-20 flex gap-8">
        <div className="h-full border-l-[1px] w-0 border-zinc-800 relative">
          <div className="w-[2px] h-[30px] bg-accent absolute top-5 -left-[0.6px]"></div>
        </div>
        <div className="flex flex-col gap-4 self-center">
          {WORK_DESCRIPTIONS.map((item, key) => (
            <WorkItem
              key={key}
              work={item}
              changeHandler={handleWorkChange}
              currId={work}
            />
          ))}
        </div>
        <WorkDescription id={work} />
      </div>
    </div>
  );
};

export default Work;
