import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
        <div className='flex bg-gray-300 p-7 text-xl font-normal justify-around'>
           <div>
           <h1 className='text-2xl font-semibold'>Parnership</h1>
            <h4>Websites</h4>
            <h4>Social Media</h4>
            <h4>Branding</h4>
           </div>
            <div>
            <h1 className='text-2xl font-semibold'>About</h1>
            <h4>Our Foods</h4>
            <h4>Services</h4>
            </div>
            <div>
            <h1 className='text-2xl font-semibold'>Support</h1>
            <h4>Support Requrest</h4>
            <h4>Conact</h4>
            </div>
        </div>
        <hr />
        <div className='flex bg-gray-300 p-7 text-xl font-normal justify-between'>
           <h1 className='text-2xl font-semibold'>All Rights Reserved 2022</h1>
           <div className='flex gap-4'>
               <span><FaFacebookF /></span>
               <span><FaTwitter /></span>
               <span><FaLinkedinIn/></span>
               <span><FaYoutube /></span>
        </div>
        </div>
        </div>
    );
};

export default Footer;
