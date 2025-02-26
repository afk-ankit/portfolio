import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkAchievements = ({ achievements }: { achievements: string }) => {
  return (
    <div className="flex gap-2 mt-2 items-start">
      <FontAwesomeIcon icon={faCheck} size="xs" className="text-accent mt-1" />
      <span className="text-zinc-400 text-sm">{achievements}</span>
    </div>
  );
};

export default WorkAchievements;
