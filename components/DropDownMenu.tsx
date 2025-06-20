'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Variants2 from './Variants2';

const DropDownMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    visible: { height: '220px', opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.1 }, },
    hidden: { height: 0, opacity: 0, transition: { when: 'afterChildren', staggerChildren: 0.05, staggerDirection: -1 }, },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // ^ RETURN ______________________________________________________________________________________________________________________________________________________
  return (
    <div className="p-10">
      <div className="border p-4 rounded-lg border-zinc-700 h-[330px] ">
        <motion.button onClick={() => setIsOpen(prev => !prev)} className="bg-emerald-600 text-white p-3 rounded mb-4" whileHover={{ scale: 1.05, backgroundColor: 'limegreen' }} whileTap={{ backgroundColor: 'darkgreen' }}>
          Toggle Menu
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.ul className="bg-zinc-700 rounded p-4 space-y-2 overflow-hidden my-2" initial="hidden" animate="visible" exit="hidden" variants={menuVariants}>
              {['Home', 'About', 'Services', 'Contact'].map(item => (
                <motion.li key={item} variants={itemVariants} className="p-2 bg-zinc-950 text-white rounded shadow">
                  {item.toLocaleUpperCase()}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        animate={{
          x: [0, 500, 0],
          scale: [1, 2, 1],
          rotate: [0, 90, 0],
          borderRadius: ['0%', '50%', '0%'],
          transition: { duration: 1.5, times: [0, 0.5, 1] },
        }}
        className="size-32 bg-white my-16"
      ></motion.div>

      <Variants2 />

      <div id="LONG____DIV" className="h-[3000px]"></div>

      <motion.div
        initial={{ opacity: 0, rotate: 0, x: 50, borderRadius: 0 }}
        whileInView={{
          opacity: 1,
          rotate: [0, 90, 0],
          x: [0, 500, 0],
          borderRadius: ['0%', '100%', '0%'],
          backgroundColor: ['#ff3', '#14fafa', '#ff0000'],
          scale: [1, 1.5, 1],
          transition: { duration: 2, ease: 'backOut' },
        }}
        className="size-64 mb-32 bg-teal-500"
      ></motion.div>
    </div>
  );
};

export default DropDownMenu;
