import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-11/12 m-5'>
        <div className=''></div>
        <div className='space-x-10'>
             <NavLink to="/">Home</NavLink>
             <NavLink to="/about">About</NavLink>
             <NavLink to="/career">Career</NavLink>
        </div>
        <div className='flex gap-6'>
            <img src="https://i.ibb.co.com/4gVTfxh8/user.png" alt="" />
            <button className='btn btn-warning'>Login</button>
        </div>
    </div>
  );
};

export default Navbar;