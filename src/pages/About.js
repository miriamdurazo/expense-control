import React from 'react';
import Darwin  from '../assets/images/Darwin_Michell.jpg';
import Giuliana from '../assets/images/Giuliana_Castillo.jpg';
import Miriam from '../assets/images/Miriam_Durazo.jpg';
import Vanessa from '../assets/images/Vanessa_Dantonio.jpg';

export const About = () => {
  function sayHi(e) {
    e.preventDefault();
    alert(`✨Hello World!✨

This is an alert message, but feel free to send us an email instead!

Happy coding!`);}
  return (
    <div name='about' className='bg-gradient-to-r from-[#ec915f] to-[#eae1af] w-full h-screen px-4 mx-auto my-auto'>
      
      <div className='flex flex-col lg:flex-row lg:items-center lg:p-24 mx-auto my-auto'>
        <div className='flex-1 text-center font-secondary lg:text-left content-center justify-center'>
          <h1 className='pt-24 text-4xl max-w-[215px] font-semibold border-b-4 border-[#ff884a]'>Who We Are</h1>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>We are a team of Front-End Web Development students aiming to start a new career and deliver amazing UX projects. This webpage is the final project to our 16-weeks bootcamp by edX. Want to see our progress so far? Follow us on GitHub and have a look at our repositories or say Hi below!</p>
          <div>
            <button onClick={sayHi} className='text-white bg-[#ff884a] px-[0.75rem] py-[0.375rem] text-[1rem] leading-6 rounded-full my-2 flex-items-center hover:bg-[#f55d0c]'>Send Hi</button>
          </div>
        </div>
    
        <div className='grid grid-cols-2 mx-auto my-auto'>
          <img className='h-64 p-2 rounded-full w-full' id='darwin' src={ Darwin } alt='expense control logo' />
          <img className='h-64 p-2 rounded-full w-full' id='giuliana' src={ Giuliana } alt='expense control logo' />
          <img className='h-64 p-2 rounded-full w-full' id='miriam' src={ Miriam } alt='expense control logo' />
          <img className='h-64 p-2 rounded-full w-full' id='vanessa' src={ Vanessa } alt='expense control logo' />
        </div>
      </div>
    </div>
  );
}