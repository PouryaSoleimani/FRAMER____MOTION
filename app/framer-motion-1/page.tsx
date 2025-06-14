'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import Variants from '@/components/Variants';

const FramerMotionPage1 = () => {
  // SCROLL PROGRESS
  const { scrollYProgress } = useScroll();

  // ANIMATE PRESENCE
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  // VARIANTS
  const AnimationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'backOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 1 } },
  };

  function showHandler() {
    setShow(prev => !prev);
  }

  // RETURN
  return (
    <section className="*:rounded-lg *:m-3 overflow-x-hidden p-6">

      <motion.div
        id="BOX___1"
        className="bg-orange-500 size-32"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 180, transition: { ease: 'backOut', duration: 2 } }}
      >
      </motion.div>

      <motion.div
        variants={AnimationVariants}
        id="BOX___1"
        className="bg-red-500 size-32"
        initial="hidden"
        animate="visible"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}>
      </motion.div>

      <motion.div
        id="BOX___1"
        className="bg-violet-500 size-32"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360, x: 350 }}
        transition={{ duration: 2, ease: 'backOut', bounce: 0.2, delay: 0.5 }}
      >
      </motion.div>

      {/*  AnimatePresence */}
      <div className="p-3 rounded border border-zinc-800 space-y-3 *:rounded-lg min-h-[228px] w-44">

        <button onClick={showHandler} className="text-white px-4 py-2 bg-emerald-600 w-full"> TOGGLE </button>

        <AnimatePresence>
          {show ?
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5, ease: 'backOut', bounce: 0.2 } }}
              whileTap={{ scale: 0.93 }}
              whileHover={{ scale: 1.03 }}
              className="bg-yellow-500 size-[150px] mx-auto"
            /> : null}
        </AnimatePresence>

      </div>

      {/*  VARIANT */}
      <Variants />
      {/*  ANIMATE PRESENCE --- SHOW 2 */}

      <div className="p-3 rounded border border-zinc-800 space-y-3 *:rounded-lg min-h-[228px] w-44">
        <button onClick={() => setShow2(prev => !prev)} className="text-white px-4 py-2 bg-emerald-600 w-full"> SHOW 2 </button>
        <AnimatePresence>
          {show2 ?
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="size-32 !rounded-full bg-white mx-auto mt-3"></motion.div> : null}
        </AnimatePresence>
      </div>

      {/*  LONG DIV */}
      <LongDiv />

      {/*  ON SCROLL ANIMATION */}
      {/* SCROLL BASE ANIMATIONS */}
      <motion.div className="fixed -top-3 h-2 right-0 left-0 bg-white" style={{ scaleX: scrollYProgress, originX: 0 }}></motion.div>
      <motion.div variants={AnimationVariants} initial="hidden" animate="visible" className="!rounded-full bg-amber-500 size-44 my-10"></motion.div>
      <motion.div variants={AnimationVariants} initial="hidden" animate="visible" className="!rounded-full bg-red-500 size-44 my-10"></motion.div>
      <motion.div variants={AnimationVariants} initial="hidden" animate="visible" className="!rounded-full bg-blue-500 size-44 my-10"></motion.div>
      <motion.div variants={AnimationVariants} initial="hidden" animate="visible" className="!rounded-full bg-green-500 size-44 my-10"></motion.div>

      <motion.div id="BOX___1" className="bg-rose-500 size-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, rotate: 180 }}
        transition={{ duration: 1.2, ease: 'backOut', bounce: 0.2, delay: 0.3 }}
      >
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, rotate: 360, transition: { duration: 2.5, ease: 'backOut' } }}
        className="size-32 rounded-md bg-zinc-500"
      >
      </motion.div>

    </section>
  );
};

export default FramerMotionPage1;

function LongDiv() {
  return <div className="h-[1000px] w-full"></div>;
}
