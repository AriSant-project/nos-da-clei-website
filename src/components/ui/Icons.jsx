import React from 'react';

export const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const PixIcon = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M17.47 5.62l-4.57 4.58a1.27 1.27 0 0 1-1.8 0L6.53 5.62a3.83 3.83 0 0 0-5.41 0 3.83 3.83 0 0 0 0 5.41l4.58 4.58a1.27 1.27 0 0 1 0 1.8l-4.58 4.58a3.83 3.83 0 0 0 0 5.41 3.83 3.83 0 0 0 5.41 0l4.57-4.58a1.27 1.27 0 0 1 1.8 0l4.57 4.58a3.83 3.83 0 0 0 5.41 0 3.83 3.83 0 0 0 0-5.41l-4.57-4.58a1.27 1.27 0 0 1 0-1.8l4.57-4.58a3.83 3.83 0 0 0 0-5.41 3.83 3.83 0 0 0-5.41 0zM12 13.8l-1.8-1.8 1.8-1.8 1.8 1.8-1.8 1.8z"/>
  </svg>
);
