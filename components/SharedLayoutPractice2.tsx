/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const SharedLayoutPractice2 = () => {

    const ITEMS = [
        { id: 1, title: "GREEN", desc: "🟩" },
        { id: 2, title: "RED", desc: "🟥" },
        { id: 3, title: "BLUE", desc: "🟦" },
        { id: 4, title: "AMBER", desc: "🟧" }
    ]
    const [selectedID, setSelectedID] = useState<any>(null)

    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='grid grid-cols-2 gap-6 bg-zinc-900 p-6'>
                {ITEMS.map(item => (
                    <motion.div
                        className={`bg-${item?.title?.toLowerCase()}-500 bg-amber-700 size-64 text-center py-3 text-3xl font-bold rounded-xl cursor-pointer hover:scale-105`}
                        key={item.id}
                        layoutId={item.id.toString()}
                        onClick={() => setSelectedID(item.id.toString())}
                    >
                        {item.title}
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {selectedID && (
                    <motion.div layoutId={selectedID} className='fixed w-screen h-screen inset-0 bg-black/50 z-50 flex flex-col gap-10 items-center justify-center' transition={{ type: "spring", ease: "anticipate" }} onClick={e => e.stopPropagation()} >
                        <motion.span className='btn btn-error text-white text-xl' onClick={() => setSelectedID(null)}>X</motion.span>
                        <div className='bg-black flex flex-col p-10 gap-5 w-1/2 h-1/2 justify-center rounded-xl font-black text-3xl items-center'>
                            <h2>{ITEMS.find(item => item.id == selectedID)?.title}</h2>
                            <p className='text-9xl'>{ITEMS.find(item => item.id == selectedID)?.desc}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SharedLayoutPractice2

