import { useState } from "react";
import { WORK_DESCRIPTIONS } from "../constants/work";
import WorkDescription from "./WorkDescription";
import WorkItem from "./WorkItem";
import WorkMeteore from "./WorkMeteore";
const Work = () => {
  const [work, setWork] = useState(1);
  const handleWorkChange = (id: number) => {
    setWork(id);
  };
  return (
    <section className="mt-32 scroll-mt-32" id="work">
      <h1 className="text-3xl font-bold ">Work Experience</h1>
      <p className="text-zinc-400 mt-4">
        I switch a lot of companies. It's mostly about the culture.
      </p>
      <div className="h-64 ml-32 mt-20 flex gap-8">
        <WorkMeteore />
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
    </section>
  );
};

export default Work;
