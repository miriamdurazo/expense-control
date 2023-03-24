import React from "react";

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 pt-30'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffd700] text-gray-300 justify-center'>Contact Me</p>
                <p className='text-gray-300 py-4'>Send me an email</p>
            </div>
            <input className='bg-[#dee2e6] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#dee2e6] rounded-md' type="email" placeholder='Email Address' name='email' />
            <textarea className='bg-[#dee2e6] p-2 rounded-md' name="message" rows="5" placeholder='Enter Your Message'></textarea>
            <button className='text-white border-2 px-[0.75rem] py-[0.375rem] text-[1rem] leading-6 rounded-md my-8 flex-items-center hover:bg-[#ffd700] hover:border-[#ffd700] mx-auto'>Send Message</button>
        </form>
    </div>
  );
}