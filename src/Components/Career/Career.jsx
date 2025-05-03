import React from 'react';
import { Link } from 'react-router';

const Career = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h3>This is career</h3>
        
        <Link to={"/"}><button className='btn btn-success'>Back to Home</button></Link>   
 </div>
  );
};

export default Career;