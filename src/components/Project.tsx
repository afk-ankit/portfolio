import { PROJECTS } from "../constants/project";
import ProjectItem from "./ProjectItem";
import SectionContainer from "./SectionContainer";
import SectionDetails from "./SectionDetails";

const Project = () => {
  return (
    <SectionContainer id="project">
      <SectionDetails
        title="Projects"
        description="Explore a selection of courses designed to help you enhance your skills."
      />
      <div className="grid grid-cols-3 mx-auto mt-12 gap-6">
        {PROJECTS.map((item, key) => (
          <ProjectItem key={key} project={item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Project;
