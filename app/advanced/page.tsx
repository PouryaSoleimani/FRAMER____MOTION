/* eslint-disable react-hooks/exhaustive-deps */
// ^ ADVANCED FRAMER MOTION PRACTICE ===================================================================================================================
"use client"
import React, { useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, animate, useAnimation } from 'motion/react';
import Link from 'next/link';


const DragAndDropPage = () => {
    const count = useMotionValue(0)
    const controls = useAnimation();
    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])

    useEffect(() => {
        controls.start({ x: 100, transition: { duration: 1 } });

        setTimeout(() => { controls.start({ x: 0 }); }, 1500);

    }, []);

    return (
        <div className='px-16 py-10 w-screen h-screen'>
            <motion.div
                id='DRAG__AND__DROP'
                drag
                dragDirectionLock
                dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                whileDrag={{ scale: 1.2 }}
                style={{ width: 100, height: 100, background: 'blue', borderRadius: 10 }}
            />

            <motion.svg width="800" height="100" viewBox="0 0 100 100" id="SVG___PATH">
                <motion.path d="M 0,20 L 800,30" stroke="white" strokeWidth="5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
            </motion.svg>

            <AnimatePresence mode="wait">
                <Link href="/" className='btn btn-neutral !border' id='ROUTE___LAYOUT'>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}  >
                        صفحه اصلی
                    </motion.div>
                </Link>
            </AnimatePresence>

            <motion.div
                id='KEY__FRAMES'
                animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 180, 180, 0], borderRadius: ["0%", "0%", "50%", "50%", "0%"], }}
                transition={{ duration: 2, ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity, repeatDelay: 1, }}
                style={box}
            />
            <motion.pre>{count}</motion.pre>

            <motion.div
                id='3D___ANIMATION'
                className='size-24 bg-red-900 perspective-origin-left my-10 rounded-lg opacity-40'
                whileHover={{ scale: 1.25, rotateZ: 180, boxShadow: "2px 2px 20px #fafafa50", opacity: 1 }}
                transition={{ duration: 0.6 }}
            />

            <motion.div
                id='3D___ANIMATION___2'
                whileHover={{ scale: 1.2, rotateY: 180, boxShadow: "0 0 20px rgba(255, 255, 255, 0.409)" }}
                transition={{ duration: 0.5 }}
                style={{ width: 100, height: 100, background: 'orange', perspective: 1000, marginTop: "1rem" }}
            />

            <motion.div
                animate={controls}
                style={{ width: 100, height: 100, background: 'purple' }}
            />
            <motion.div
                className='size-32 bg-emerald-600'
                animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 180, 180, 0], }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                }}
            />
        </div>
    )
}

export default DragAndDropPage

// STYLES
const box = {
    width: 50,
    height: 50,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    margin: "1rem",
}