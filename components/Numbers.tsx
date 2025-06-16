/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import { motion } from 'motion/react';

const Numbers = () => {
  const ParentVariant = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 } },
  };
  const ChildVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={ParentVariant} initial="hidden" animate="visible" className="bg-zinc-500 w-full justify-evenly p-5 h-fit flex my-10">
      <motion.span variants={ChildVariant} className="size-32 rounded-lg bg-black"></motion.span>
      <motion.span variants={ChildVariant} className="size-32 rounded-lg bg-black"></motion.span>
      <motion.span variants={ChildVariant} className="size-32 rounded-lg bg-black"></motion.span>
      <motion.span variants={ChildVariant} className="size-32 rounded-lg bg-black"></motion.span>
      <motion.span variants={ChildVariant} className="size-32 rounded-lg bg-black"></motion.span>
    </motion.div>
  );
};

export default Numbers;
