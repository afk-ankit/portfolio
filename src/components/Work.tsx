import { useState } from "react";
import { WORK_DESCRIPTIONS } from "../constants/work";
import WorkDescription from "./WorkDescription";
import WorkItem from "./WorkItem";
import WorkMeteore from "./WorkMeteore";
import SectionDetails from "./SectionDetails";
import SectionContainer from "./SectionContainer";
const Work = () => {
  const [work, setWork] = useState(1);
  const handleWorkChange = (id: number) => {
    setWork(id);
  };
  return (
    <SectionContainer id="work">
      <SectionDetails
        title="Work Experience"
        description="I love them all. It's mostly about the culture."
      />
      <div className="h-64 md:ml-32 mt-20 flex flex-col md:flex-row gap-8">
        <WorkMeteore />
        <div className="flex flex-row flex-wrap md:flex-col gap-4 self-center">
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
    </SectionContainer>
  );
};

export default Work;
