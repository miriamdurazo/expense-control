import React from 'react';
import heroImage from '../assets/images/hero.png';

export const Hero = () => {
  return (
    <div className='hero row-container'>
      <div className='hero-row'>
        <img id='heroImg' src={ heroImage } alt='your finances at one place' />
      </div>
    </div>
  );
}