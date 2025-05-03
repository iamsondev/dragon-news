import { format } from 'date-fns';
import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center m-5 text-secondary'>
           <img src="https://i.ibb.co.com/XfG3Kg3d/logo.png" alt="" />
           <p className=''>Journalism without fear and brave</p>
           <p>{format(new Date (), "EEEE, MMMM MM, yyyy")}</p>
    </div>
  );
};

export default Header;