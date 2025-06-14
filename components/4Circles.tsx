"use client"
import React from 'react'
import { motion } from 'motion/react'


const CirclesCompoent = () => {

    const ParentVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 } }
    }
    const ChildVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <div>
            <motion.div id='PARENT' className='bg-stone-300 rounded-2xl flex mx-auto items-center justify-center gap-5 w-fit p-4' variants={ParentVariants} initial="hidden" animate="visible" >
                <motion.span className="CHILD size-32 rounded-full bg-stone-400" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-stone-500" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-stone-600" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-stone-700" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-stone-800" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-stone-900" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-stone-950" variants={ChildVariants}></motion.span>
                <motion.span className="CHILD size-32 rounded-full bg-black" variants={ChildVariants}></motion.span>
            </motion.div>
        </div>
    )
}

export default CirclesCompoent