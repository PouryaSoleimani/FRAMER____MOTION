"use client"
import React from 'react'
import { motion } from 'motion/react'

const BoxesComponent = () => {
    const ParentVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.1, ease: "backOut" }
        }
    }

    const ChildVariants = {
        hidden: { opacity: 0, y: -90 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div className='w-full bg-zinc-300 my-3 p-4'>
            <motion.div
                className='flex flex-wrap gap-1 justify-evenly'
                variants={ParentVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span className='w-96 h-36 rounded-xl bg-red-600' variants={ChildVariants}></motion.span>
                <motion.span className='w-96 h-36 rounded-xl bg-blue-600' variants={ChildVariants}></motion.span>
                <motion.span className='w-96 h-36 rounded-xl bg-orange-600' variants={ChildVariants}></motion.span>
                <motion.span className='w-96 h-36 rounded-xl bg-indigo-600' variants={ChildVariants}></motion.span>
                <motion.span className='w-96 h-36 rounded-xl bg-teal-600' variants={ChildVariants}></motion.span>
            </motion.div>
        </div>
    )
}

export default BoxesComponent