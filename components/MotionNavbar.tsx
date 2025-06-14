'use client';
import React from 'react';
import { motion } from 'motion/react';
// ^ COMPONENT
const MotionNavbar = () => {
    const ParentVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { when: 'beforeChildren', staggerChildren: 0.06, ease: "backOut" }
        },
    };

    const ChildVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <motion.ul
                className="flex justify-around bg-neutral-900 py-5 rounded-xl"
                variants={ParentVariants}
                initial="hidden"
                animate="visible"
            >
                {['HOME', 'GALLERY', 'ABOUT', 'SERVICES', 'LOGIN'].map((i, index) => (
                    <motion.li
                        className="bg-zinc-800 p-3 rounded-md font-bold w-1/4 text-center mx-4 border-4 border-black"
                        key={index}
                        variants={ChildVariants}
                    >
                        {i}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default MotionNavbar;
