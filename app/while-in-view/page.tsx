"use client"
import React from 'react'
import { motion } from 'motion/react'


const WhileInViewPage = () => {
    return (
        <div className='min-h-screen text-xl font-semibold p-10'>
            <div id="longDiv" className='h-[1500px] bg-zinc-900 rounded-xl'></div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.2 } }} className='bg-red-600 w-full h-32 rounded-xl my-5'></motion.div>
            <div id="longDiv" className='h-[1500px] bg-zinc-900 rounded-xl'></div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { delay: 0.2 } }} className='bg-violet-600 w-full h-32 rounded-xl my-5'></motion.div>
        </div>
    )
}

export default WhileInViewPage