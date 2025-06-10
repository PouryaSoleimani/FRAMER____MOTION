"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

const FramerMotionPage1 = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section className="*:rounded-lg *:m-3 overflow-x-hidden p-6">
      <motion.div
        id="BOX___1"
        className="bg-orange-500 size-32"
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, ease: "circOut" }}
      ></motion.div>
      <motion.div
        id="BOX___1"
        className="bg-red-500 size-32"
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.03 }}
      ></motion.div>
      <motion.div
        id="BOX___1"
        className="bg-violet-500 size-32"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360, x: 350 }}
        transition={{ duration: 2, ease: "backOut", bounce: 0.2, delay: 0.5 }}
      ></motion.div>
      <LongDiv />
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: -8,
          left: 0,
          right: 0,
          height: 15,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
    </section>
  );
};

export default FramerMotionPage1;

function LongDiv() {
  return <div className="h-screen w-full"></div>;
}
