import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
       return (
              <div className='bg-zinc-200 py-8'>
                     <nav className='container mx-auto text-4xl flex items-center '>
                            <Link to='/' className='mx-8'>HOME</Link>
                            <Link to='/reviews' className='mx-8'>REVIEWS</Link>
                            <Link to='/dashboard' className='mx-8'>DASHBOARD</Link>
                            <Link to='/blog' className='mx-8'>BLOGS</Link>
                            <Link to='/about' className='mx-8'>ABOUT</Link>
                     </nav>
              </div>
       );
};

export default Header;