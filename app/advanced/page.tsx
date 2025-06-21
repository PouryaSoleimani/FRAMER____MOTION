/* eslint-disable react-hooks/exhaustive-deps */
// ^ ADVANCED FRAMER MOTION PRACTICE ===================================================================================================================
"use client"
import React, { useEffect } from 'react'
import { AnimatePresence, motion, useMotionValue, animate } from 'motion/react';
import Link from 'next/link';


const DragAndDropPage = () => {
    const count = useMotionValue(0)
    
    useEffect(() => {
        const controls = animate(count, 100, { duration: 5 })
        return () => controls.stop()
    }, [])

    return (
        <div className='p-10 w-screen h-screen'>
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