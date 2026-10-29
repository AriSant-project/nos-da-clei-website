import React from 'react';

export const V2WaveDivider = ({ from = '#F5F0E6', to = '#ECE4D5' }) => {
  return (
    <div
      className="w-full overflow-hidden leading-none -my-1 pointer-events-none"
      style={{ backgroundColor: from, color: to }}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-8 sm:h-14 fill-current"
      >
        <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z" />
      </svg>
    </div>
  );
};
