import React, { use } from 'react';
import { NavLink, useLoaderData } from 'react-router';
const categoryPromise = fetch("/categories.json")
  .then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div className='p-5'>
      <h1 className='font-black'>All Categories ({categories.length})</h1>
      <div className='flex flex-col gap-3 bg-white'>
        {
          categories.map(category => <NavLink
            key={category.id}
            className={"btn bg-base-100 border-0 hover:bg-base-300"}
            to={`/category/${category.id}`}
          >{category.name}</NavLink>)
        }
      </div>
    </div>
  );
};

export default Categories;