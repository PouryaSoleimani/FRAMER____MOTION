'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';

const SharedLayout2 = () => {
  const [isRow, setIsRow] = useState(true);
  const [isGray, setIsGray] = useState(false);
  const [isCircle, setIsCircle] = useState(false);
  const [isMargin, setIsMargin] = useState(false);

  return (
    <div className="bg-zinc-700 p-6 rounded-2xl">
      <button className="btn btn-accent border-dashed text-xl font-bold mx-2" onClick={() => setIsRow(!isRow)}>
        CHANGE LAYOUT
      </button>
      <button className="btn  border-dashed text-xl font-bold mx-2" onClick={() => setIsGray(!isGray)}>
        GRAYSCALE
      </button>
      <button className="btn btn-secondary  border-dashed text-xl font-bold mx-2" onClick={() => setIsCircle(!isCircle)}>
        CIRCLE
      </button>
      <button className="btn btn-primary  border-dashed text-xl font-bold mx-2" onClick={() => setIsMargin(!isMargin)}>
        MARGIN
      </button>

      <motion.div layout className={`flex  gap-3 m-3  h-72 ${isRow ? 'flex-row' : 'flex-col'}`}>
        <motion.span layout className={`card bg-red-600 size-32 ${isMargin ? 'm-16' : 'm-0'} ${isCircle ? 'rounded-full' : 'rounded-lg'} ${isGray ? 'grayscale' : ''}`}></motion.span>
        <motion.span layout className={`card bg-blue-600 size-32 ${isMargin ? 'm-16' : 'm-0'} ${isCircle ? 'rounded-full' : 'rounded-lg'} ${isGray ? 'grayscale' : ''}`}></motion.span>
        <motion.span layout className={`card bg-green-600 size-32 ${isMargin ? 'm-16' : 'm-0'} ${isCircle ? 'rounded-full' : 'rounded-lg'} ${isGray ? 'grayscale' : ''}`}></motion.span>
        <motion.span layout className={`card bg-yellow-500 size-32 ${isMargin ? 'm-16' : 'm-0'} ${isCircle ? 'rounded-full' : 'rounded-lg'} ${isGray ? 'grayscale' : ''}`}></motion.span>
      </motion.div>
    </div>
  );
};

export default SharedLayout2;
