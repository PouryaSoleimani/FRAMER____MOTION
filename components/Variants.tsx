'use client';
import React from 'react';
import { motion } from 'motion/react';

const Variants = () => {
  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.5 } },
  };
  return <motion.div variants={boxVariants} initial="hidden" animate="visible" exit="exit" className="size-32 bg-blue-600"></motion.div>;
};

export default Variants;
