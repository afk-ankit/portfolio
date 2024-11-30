import { motion, useAnimationControls } from "motion/react";
import { useEffect } from "react";

const WorkMeteore = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    const animate = async () => {
      await controls.start({
        y: ["0px", "200px"],
        opacity: [0, 1, 0],
        transition: {
          duration: 2,
          repeatDelay: 2,
          repeat: Infinity,
          ease: "circIn",
        },
      });
    };
    animate();
  }, [controls]);

  return (
    <div className="h-full border-l-[1px] w-0 border-zinc-800 relative">
      <motion.div
        className="w-[1px] h-[60px] absolute -left-[0.6px] bg-gradient-to-b from-transparent via-accent to-transparent bg-no-repeat bg-full"
        animate={controls}
      />
    </div>
  );
};

export default WorkMeteore;
