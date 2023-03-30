import React from 'react';

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/72c6906c-8ad5-458b-b076-dec044409191' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8 pt-30 mt-36'>
          <p className='text-4xl font-semibold inline border-b-4 border-[#ff884a]'>Get In Touch With Us</p>
          <p className=' py-4 text-center'>Feedbacks, concerns and suggestions to improve our website are always welcomed. We look forward to hearing from you.</p>
        </div>
        <input className='bg-[#dee2e6] p-2 rounded-md' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#dee2e6] rounded-md' type='email' placeholder='Email address' name='email' />
        <textarea className='bg-[#dee2e6] p-2 rounded-md' name='message' rows='5' placeholder='What can we help with?'></textarea>
        <button className='text-white bg-[#ff884a] px-[0.75rem] py-[0.5rem] text-[1rem] leading-6 rounded-full my-8 flex-items-center hover:bg-[#f55d0c] mx-auto'>Send Message</button>
      </form>
    </div>
  );
}