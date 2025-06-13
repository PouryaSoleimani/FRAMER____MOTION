'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import Variants from '@/components/Variants';

const FramerMotionPage1 = () => {
  
  const { scrollYProgress } = useScroll();

  const [show, setShow] = useState(false);

  // ^ VARIANTS
  const AnimationVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'backOut' } },
    exit: { opacity: 0, x: -100, transition: { duration: 1 } },
  };

  function showHandler() {
    setShow(prev => !prev);
  }

  // ^ RETURN
  return (
    <section className="*:rounded-lg *:m-3 overflow-x-hidden p-6">
      <motion.div id="BOX___1" className="bg-orange-500 size-32" initial={{ scale: 0 }} animate={{ scale: 1, rotate: 180, transition: { ease: 'backOut', duration: 2 } }}></motion.div>
      <motion.div variants={AnimationVariants} id="BOX___1" className="bg-red-500 size-32" initial="hidden" animate="visible" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}></motion.div>
      <motion.div id="BOX___1" className="bg-violet-500 size-32" initial={{ rotate: 0 }} animate={{ rotate: 360, x: 350 }} transition={{ duration: 2, ease: 'backOut', bounce: 0.2, delay: 0.5 }}></motion.div>
      {/* //^ AnimatePresence ^// */}
      <div className="p-3 rounded border border-zinc-800 space-y-3 *:rounded-lg min-h-[228px] w-44">
        <button onClick={showHandler} className="text-white px-4 py-2 bg-emerald-600 w-full">
          TOGGLE
        </button>
        <AnimatePresence>{show ? <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.5, ease: 'backOut', bounce: 0.2 } }} className="bg-yellow-500 size-[150px] mx-auto" /> : null}</AnimatePresence>
      </div>
      {/* //^ VARIANT ^// */}
      <Variants />
      {/* //^ LONG DIV ^// */}
      <LongDiv />

      {/* //^ ON SCROLL ANIMATION */}
      <motion.div className="bg-[#ff0088] fixed -top-2 left-0 right-0 h-4" id="scroll-indicator" style={{ scaleX: scrollYProgress, originX: 0 }} />
      <motion.div id="BOX___1" className="bg-rose-500 size-32" initial={{ opacity: 0 }} whileInView={{ opacity: 1, rotate: 180 }} transition={{ duration: 1.2, ease: 'backOut', bounce: 0.2, delay: 0.3 }}></motion.div>
    </section>
  );
};

export default FramerMotionPage1;

function LongDiv() {
  return <div className="h-screen w-full"></div>;
}
