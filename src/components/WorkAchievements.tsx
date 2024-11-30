import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkAchievements = ({ achievements }: { achievements: string }) => {
  return (
    <div className="flex gap-2 items-center mt-2">
      <FontAwesomeIcon icon={faCheck} size="sm" className="text-accent" />
      <span className="text-zinc-400 text-sm">{achievements}</span>
    </div>
  );
};

export default WorkAchievements;
