/* eslint-disable @typescript-eslint/no-explicit-any */
//^ SHARED LAYOUT PRACTICE =================================================================================================================================================
"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'



const SharedLayoutPractice3 = () => {
    const [selectedID, setSelectedID] = useState<any>(null)
    const animationVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { type: "spring", duration: 1.5 } },
        exit: { opacity: 0, transition: { type: "spring", duration: 1.5 } }
    }
    const ITEMS = [
        { id: 1, title: "SWORD", desc: '🗡️' },
        { id: 2, title: "PISTOL", desc: '🔫' },
        { id: 3, title: "KNIFE", desc: '🔪' },
        { id: 4, title: "BOMB", desc: '💣' },
        { id: 5, title: "HAND", desc: '👊🏻' },
    ]
    return (
        <div className='w-screen h-screen bg-zinc-900 flex flex-col gap-10 p-10'>
            <div className='bg-black p-6 flex items-center justify-around rounded-xl'>
                {ITEMS.map(item => (
                    <motion.button layout key={item.id} onClick={() => setSelectedID(item.id)} layoutId={item.id.toString()} className={`btn btn-neutral w-1/6 !border-4 border-neutral-500 ${item.id == selectedID ? "!border-indigo-800" : ""}`}>
                        {item.title}
                    </motion.button>
                ))}
            </div>
            {selectedID && (
                <div className='flex flex-col gap-6'>
                    <motion.div layout layoutId={selectedID} className='card bg-black p-6 text-4xl font-bold text-center border-4 border-zinc-700' variants={animationVariant as any} initial="hidden" animate="visible" exit="exit" >
                        <motion.div>
                            <motion.h2 layout>{ITEMS.find(i => i.id == selectedID)?.title}</motion.h2>
                            <motion.p layout className='text-9xl'>{ITEMS.find(i => i.id == selectedID)?.desc}</motion.p>
                        </motion.div>
                    </motion.div>
                    <button className='btn btn-error text-white text-3xl' onClick={() => setSelectedID(null)}>CLEAR</button>
                </div>
            )}
        </div>
    )
}

export default SharedLayoutPractice3