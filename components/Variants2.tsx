import React from 'react';
import { motion } from 'motion/react';

const AnimationVariants2 = {
  initial: { borderRadius: 0, scale: 1, rotate: 0 },
  animate: { borderRadius: [10, 20, 0], scale: [1, 2, 1], rotate: [0, 120, 0], x: [0, 350, 0], transition: { duration: 2 } },
};

const Variants2 = () => {
  return (
    <div className="flex flex-col gap-10">
      <motion.div className="size-32 bg-indigo-600" variants={AnimationVariants2} initial="initial" animate="animate"></motion.div>
      <motion.div className="size-32 bg-violet-600" variants={AnimationVariants2} initial="initial" animate="animate"></motion.div>
      <motion.div className="size-32 bg-cyan-600" variants={AnimationVariants2} initial="initial" animate="animate"></motion.div>
    </div>
  );
};

export default Variants2;
