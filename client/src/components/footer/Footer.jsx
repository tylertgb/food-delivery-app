import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black/70 px-4 md:px-36 pt-20'>
        <div className='grid grid-cols-3 items-start place-items-end'>
            <div>
                <img src={assets.logo} alt="" className='mb-6' />
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis numquam ipsum, error labore corrupti distinctio neque magnam ut consequuntur cum sapiente, illo necessitatibus fuga consectetur.</p>

                <div className='flex items-center gap-3 mt-4'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div>
                <h2 className='text-3xl text-white font-semibold mb-3'>Company</h2>
                <ul className='flex flex-col items-start gap-2 text-white'>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Mobile App</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div>
                <h2 className='text-3xl text-white font-semibold mb-3'>Get In Touch</h2>
                <ul className='flex flex-col items-start gap-2 text-white'>
                    <li>Address</li>
                    <li>Phone</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
        <div className='mt-20 py-6 text-center text-white border-t border-black/20'>
            <p>Copyright &copy; 2025. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer