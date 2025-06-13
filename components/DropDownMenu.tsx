'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Variants2 from './Variants2';

const DropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { when: 'afterChildren', staggerChildren: 0.05, staggerDirection: -1 },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { when: 'beforeChildren', staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  // ^ RETURN ______________________________________________________________________________________________________________________________________________________
  return (
    <div className="p-10">
      <button onClick={() => setIsOpen(prev => !prev)} className="bg-indigo-600 text-white p-3 rounded mb-4">
        Toggle Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul className="bg-zinc-700 rounded p-4 space-y-2 overflow-hidden my-10" initial="hidden" animate="visible" exit="hidden" variants={menuVariants}>
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <motion.li key={item} variants={itemVariants} className="p-2 bg-zinc-950 text-white rounded shadow">
                {item.toLocaleUpperCase()}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <motion.div animate={{ x: [0, 500, 0], scale: [1, 2, 1], rotate: [0, 90, 0], borderRadius: ['0%', '50%', '0%'], transition: { duration: 1.5, times: [0, 0.5, 1] } }} className="size-32 bg-white my-16" />

      <Variants2 />
      
    </div>
  );
};

export default DropDownMenu;
