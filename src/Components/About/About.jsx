import React from 'react';
import { Link } from 'react-router';

const About = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
         <h1>This is about</h1>
        <Link to={"/"}> <button className='btn btn-success'>Back to Home</button></Link>
    </div>
  );
};

export default About;