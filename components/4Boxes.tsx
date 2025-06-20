/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React from 'react'
import { motion } from 'motion/react'

const BoxesComponent = () => {
    const ParentVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.1, ease: "backOut" } }
    }

    const ChildVariants = {
        hidden: { opacity: 0, y: -90 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='w-full bg-zinc-300 my-3 p-4'>
            <motion.div
                className='flex flex-wrap gap-1 justify-evenly'
                variants={ParentVariants as any}
                initial="hidden"
                animate="visible"
            >
                <motion.span className='w-36 h-36 rounded-2xl bg-zinc-600' variants={ChildVariants}></motion.span>
                <motion.span className='w-36 h-36 rounded-2xl bg-zinc-700' variants={ChildVariants}></motion.span>
                <motion.span className='w-36 h-36 rounded-2xl bg-zinc-800' variants={ChildVariants}></motion.span>
                <motion.span className='w-36 h-36 rounded-2xl bg-zinc-900' variants={ChildVariants}></motion.span>
                <motion.span className='w-36 h-36 rounded-2xl bg-zinc-950' variants={ChildVariants}></motion.span>
            </motion.div>
        </div>
    )
}

export default BoxesComponent