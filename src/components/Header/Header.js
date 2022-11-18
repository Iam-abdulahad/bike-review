import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
       return (
              <div>
                     <nav className='text-4xl py-8 bg-zinc-200'>
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