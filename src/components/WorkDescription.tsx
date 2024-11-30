import { WORK_DESCRIPTIONS } from "../constants/work";
import WorkAchievements from "./WorkAchievements";
import { motion } from "motion/react";

const WorkDescription = ({ id }: { id: number }) => {
  const description = WORK_DESCRIPTIONS[id - 1];
  return (
    <motion.div
      className="p-8 space-y-2"
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
      <h1 className="font-bold text-2xl">
        {description.jobRole}{" "}
        <span className="text-accent">@{description.company}</span>
      </h1>
      <h3 className="text-sm text-zinc-400">Apr 2024 - Sep 2024</h3>
      <h3 className="text-sm text-zinc-400">{description.location}</h3>
      <div>
        {description.achievements.map((item, key) => (
          <WorkAchievements key={key} achievements={item} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkDescription;
