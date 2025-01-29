import { WORK_DESCRIPTIONS } from "../constants/work";
import WorkAchievements from "./WorkAchievements";
import { motion } from "motion/react";
import { format } from "date-fns";

const WorkDescription = ({ id }: { id: number }) => {
  const description = WORK_DESCRIPTIONS[id - 1];
  return (
    <motion.div
      className="p-8"
      key={id} // This ensures a new animation trigger for each id change
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      <div className="space-y-2">
        <h1 className="font-bold text-2xl">
          {description.jobRole}{" "}
          <span className="text-accent capitalize">@{description.company}</span>
        </h1>
        <h3 className="text-sm text-zinc-400">
          {format(description.joiningDate, "MMMM yyyy")} -{" "}
          {description.leavingDate
            ? format(description.leavingDate, "MMMM yyyy")
            : "currently working"}
        </h3>
        <h3 className="text-sm text-zinc-400 capitalize">
          {description.location}
        </h3>
      </div>
      <div className="mt-4">
        {description.achievements.map((item, key) => (
          <WorkAchievements key={key} achievements={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkDescription;
