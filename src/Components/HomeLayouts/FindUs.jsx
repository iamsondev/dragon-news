import React from 'react';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
        <h1 className='text-2xl font-bold mt-5'>Find us</h1>
        <div className='flex flex-col gap-3'>
             <button className='btn w-full'><FaFacebook size={20}/>Sign in With Facebook</button>
             <button className='btn w-full'> <FaGithub size={20} />Sign in With Github</button>
             <button className='btn w-full'><FaInstagram size={20} /> Sign in With Instagram</button>
        </div>
    </div>
  );
};

export default FindUs;