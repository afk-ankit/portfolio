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
      <div className="flex md:flex-row flex-col md:grid-cols-2 mx-auto mt-12 gap-8 w-fit">
        {PROJECTS.map((item, key) => (
          <ProjectItem key={key} project={item} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Project;
