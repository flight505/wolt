'use client';

import React, { useEffect } from 'react';

export default function OmnesFontLoader() {
  useEffect(() => {
    // Create a style element to load the fonts
    const style = document.createElement('style');
    
    // Define the font faces for Omnes family
    style.textContent = `
      @font-face {
        font-family: 'Omnes';
        src: url('/Omnes Font Family/Omnes Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Omnes';
        src: url('/Omnes Font Family/Omnes Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Omnes';
        src: url('/Omnes Font Family/Omnes SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Omnes';
        src: url('/Omnes Font Family/Omnes Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
      }
      
      @font-face {
        font-family: 'Omnes';
        src: url('/Omnes Font Family/Omnes Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
    `;
    
    // Add the style element to the head
    document.head.appendChild(style);
    
    // Clean up the style element on component unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
} 