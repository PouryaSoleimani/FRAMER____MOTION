'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';

const SharedLayout3 = () => {
  const [isMargin, setIsMargin] = useState(false);

  return (
    <div>
      <button className="btn btn-secondary text-black" onClick={() => setIsMargin(!isMargin)}>
        ADD MARGIN
      </button>

      <motion.div layout className={`bg-red-100 rounded-lg flex items-center gap-2 *:rounded-xl my-5 p-6 ${isMargin ? 'justify-between' : ''}`}>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
        <motion.span layout className={`size-28 bg-black`}></motion.span>
      </motion.div>
    </div>
  );
};

export default SharedLayout3;
