import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex justify-around items-center sticky top-0 bg-amber-900 py-4 text-white'>
           <h2 className='text-4xl'> MealDb </h2>
           <div className='flex gap-4'>
           <nav className='flex font-normal gap-4 text-xl col: '>
                    <CustomLink to= '/'>Home</CustomLink>
                    <CustomLink to= '/about'>About</CustomLink>
                    <CustomLink to= '/rastaurant'>Rastaurant</CustomLink>
                    <CustomLink to= '/contact'>Contact</CustomLink>
                    
            </nav>
            {/* <input onChange={searchFood} className='text-center text-black rounded-sm' type="text" placeholder='Search Here' /> */}
           </div>
        </div>
    );
};

export default Header;