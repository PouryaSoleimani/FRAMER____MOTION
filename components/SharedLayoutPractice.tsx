/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
    { id: '1', title: 'TOMATO', description: '🍅' },
    { id: '2', title: 'CUCUMBER', description: '🥒' },
    { id: '3', title: 'POTATO', description: '🥔' },
    { id: '4', title: 'ONION', description: '🧅' },
];


const SharedLayoutPractice = () => {

    const [selectedId, setSelectedId] = useState<any>(null);



    return (
        <div className="p-10 grid grid-cols-4 gap-4">
            {items.map((item: { id: string, title: string, description: string }) => (
                <motion.div
                    className="p-6 bg-zinc-900 text-xl text-white rounded-md cursor-pointer text-center"
                    key={item.id}
                    layoutId={item.id}
                    onClick={() => { setSelectedId(item?.id); console.info(item?.id) }}
                >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                </motion.div>
            ))}
            <AnimatePresence>
                {selectedId && (
                    <motion.div layoutId={selectedId} className='fixed w-screen h-screen inset-0 bg-black/60 z-50 flex items-center justify-center gap-10 '>
                        <motion.div layout className='p-20 rounded-lg bg-zinc-900 relative inset-0'>
                            <span onClick={() => setSelectedId(null)} className='absolute top-4 left-4 cursor-pointer hover:bg-red-800 bg-red-900 text-white size-9 flex items-center justify-center rounded-lg font-black'>X</span>
                            <motion.div layout className='bg-black p-10 text-3xl gap-5 font-black flex flex-col items-center justify-center rounded-lg'>
                                <h2>{items.find(i => i?.id == selectedId)?.title}</h2>
                                <p className='text-9xl'>{items.find(i => i?.id == selectedId)?.description}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SharedLayoutPractice