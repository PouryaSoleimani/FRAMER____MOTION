'use client';
import React from 'react';
// import { motion } from 'motion/react';

const Numbers = () => {
  return (
    <div>
      <div id="PARENT">
        <div className="card w-96 bg-base-100 card-xs shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Xsmall Card</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="justify-end card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <span>1</span>
      </div>
    </div>
  );
};

export default Numbers;
