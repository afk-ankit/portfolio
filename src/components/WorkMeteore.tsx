import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

const WorkTimeline = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        y: ["5px", "30px"],
        transition: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <div className="h-full border-l-[1px] w-0 border-zinc-800 relative">
      <motion.div
        className="w-[2px] h-[30px] bg-accent absolute top-5 -left-[0.6px]"
        animate={controls}
      />
    </div>
  );
};

export default WorkTimeline;
