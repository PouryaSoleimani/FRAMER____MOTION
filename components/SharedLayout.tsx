/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: '1', title: 'ITEM 1', description: 'Details about Item 1' },
  { id: '2', title: 'ITEM 2', description: 'Details about Item 2' },
  { id: '3', title: 'ITEM 3', description: 'Details about Item 3' },
];

export default function SharedLayoutExample() {

  const [selectedId, setSelectedId] = useState<any>(null);

  return (
    <div className="p-10 grid grid-cols-3 gap-4">
      {items.map(item => (
        <motion.div key={item.id} layoutId={item.id} className="p-6 bg-indigo-900 rounded-md cursor-pointer text-center" onClick={() => setSelectedId(item?.id)}>
          <h3 className="text-lg font-semibold">{item.title}</h3>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId} className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50" onClick={() => setSelectedId(null)}>
            <motion.div className="bg-black text-center font-bold text-2xl p-10 rounded-lg w-96" layout onClick={e => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4">{items.find(i => i.id === selectedId)?.title}</h3>
              <p>{items.find(i => i.id === selectedId)?.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
