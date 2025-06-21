"use client"
import React from 'react'
import { motion } from 'motion/react';




const DragAndDropPage = () => {
    return (
        <div className='p-10 w-screen h-screen'>
            <motion.div
                drag
                dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
                whileDrag={{ scale: 1.2 }}
                style={{ width: 100, height: 100, background: 'blue', borderRadius: 10 }}
            />
        </div>
    )
}

export default DragAndDropPage