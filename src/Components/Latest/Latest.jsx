import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
  return (
    <div className='flex max-w-11/12 mx-auto bg-base-200 p-3 items-center gap-2'>
      <div className='bg-red-600 text-white px-5 py-2'>Latest</div>
      
        <Marquee className='gap-6' speed={50} pauseOnHover={true}>
          <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis cum deleniti, itaque porro quo.</p>

        <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis cum deleniti, itaque porro quo.</p>

        <p className='font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis cum deleniti, itaque porro quo.</p></Marquee>
      
    </div>
  );
};

export default Latest;