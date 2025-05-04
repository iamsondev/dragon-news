import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Latest from '../Latest/Latest';
import LeftAside from './LeftAside';
import RightAside from './RightAside';

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
          <Latest></Latest>
        </section>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='w-11/12 mx-auto grid grid-cols-12 gap-4'>
        <aside className='col-span-3'>
          <LeftAside></LeftAside>
        </aside>
        <section className='main col-span-6'>
          <Outlet></Outlet>
        </section>
        <aside className='col-span-3'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;