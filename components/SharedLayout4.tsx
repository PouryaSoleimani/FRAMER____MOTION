'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';

const SharedLayout4 = () => {
  const [isSticky, setIsSticky] = useState(false);
  return (
    <div>
      <button className="btn btn-primary my-6" onClick={() => setIsSticky(!isSticky)}>
        STICK TO TOP
      </button>
      <motion.div layout className={`navbar bg-black/80 rounded-box backdrop-blur-2xl items-center justify-evenly ${isSticky ? '*:w-fit' : ''}`}>
<motion.span layout className={`btn text-black btn-secondary w-1/6`}> HOME </motion.span>
        <motion.span layout className={`btn text-black btn-secondary w-1/6`}>
          GALLERY
        </motion.span>
        <motion.span layout className={`btn text-black btn-secondary w-1/6`}>
          ABOUT
        </motion.span>
        <motion.span layout className={`btn text-black btn-secondary w-1/6`}>
          CONTACT US
        </motion.span>
        <motion.span layout className={`btn text-black btn-secondary w-1/6`}>
          PROFILE
        </motion.span>
      </motion.div>
    </div>
  );
};

export default SharedLayout4;
