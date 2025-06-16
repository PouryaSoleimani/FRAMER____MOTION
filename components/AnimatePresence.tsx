'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimationPresence() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="btn">
        {isOpen ? 'CLOSE' : 'OPEN'}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div className="card card-xl" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
            <ul className="card card-xl border p-2 *:border-2 border-red-500 *:p-2 *:w-fit *:my-3">
              <motion.li animate={{ transition: { delay: 0.2 } }}>آیتم ۱</motion.li>
              <motion.li animate={{ transition: { delay: 0.3 } }}>آیتم ۲</motion.li>
              <motion.li animate={{ transition: { delay: 0.4 } }}>آیتم ۳</motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
