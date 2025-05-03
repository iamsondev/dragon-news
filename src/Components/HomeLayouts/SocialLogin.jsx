import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div>
      <h1 className='font-bold'>Login With</h1>
      <div className='flex flex-col mt-5 gap-3'>
        <button className='btn w-full'><FcGoogle size={25} /> Login With Google</button>
        <button  className='btn w-full'><BsGithub size={25}/> Login With Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;