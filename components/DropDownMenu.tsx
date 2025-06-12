'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DropDownMenu = () => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        when: 'afterChildren', // اول آیتم‌ها مخفی بشن بعد منو
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        when: 'beforeChildren', // اول منو ظاهر شه بعد آیتم‌ها
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-10">
      <button onClick={() => setIsOpen(prev => !prev)} className="bg-indigo-600 text-white p-3 rounded mb-4">
        Toggle Menu
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul className="bg-zinc-700 rounded p-4 space-y-2 overflow-hidden" initial="hidden" animate="visible" exit="hidden" variants={menuVariants}>
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <motion.li key={item} variants={itemVariants} className="p-2 bg-zinc-950 text-white rounded shadow">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropDownMenu;
