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
      <motion.ul layout className={`navbar bg-black/80 rounded-box backdrop-blur-2xl items-center justify-evenly ${isSticky ? 'fixed w-[90%] mx-auto top-2 border-4 py-5 left-0 right-0 z-50' : ''}`}>
        <motion.li layout className={`btn text-black ${isSticky ? 'btn-accent w-1/6' : 'btn-secondary'}`}>
          HOME
        </motion.li>
        <motion.li layout className={`btn text-black ${isSticky ? 'btn-accent w-1/6' : 'btn-secondary'}`}>
          GALLERY
        </motion.li>
        <motion.li layout className={`btn text-black ${isSticky ? 'btn-accent w-1/6' : 'btn-secondary'}`}>
          ABOUT
        </motion.li>
        <motion.li layout className={`btn text-black ${isSticky ? 'btn-accent w-1/6' : 'btn-secondary'}`}>
          CONTACT US
        </motion.li>
        <motion.li layout className={`btn text-black ${isSticky ? 'btn-accent w-1/6' : 'btn-secondary'}`}>
          PROFILE
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default SharedLayout4;
