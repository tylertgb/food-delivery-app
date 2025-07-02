import React, { useState } from "react";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMenu] = useState('home');

  return (
    <div className=" bg-transparent px-4 md:px-36 py-4">
      <div className="flex items-center justify-between">
        <img src={assets.logo} className="w-36" alt="" />
        <ul className="flex items-center gap-1">
          <li onClick={() => setMenu('home')} className={`rounded-4xl px-4 py-2 bg-transparent hover:bg-orange-50 duration-50 ${menu === 'home' ? 'border border-orange-50 duration-500': 'border border-transparent'}`}>Home</li>
          <li onClick={() => setMenu('menu')} className={`rounded-4xl px-4 py-2 bg-transparent hover:bg-orange-50 duration-50 ${menu === 'menu' ? 'border border-orange-50 duration-500': 'border border-transparent'}`}>Menu</li>
          <li onClick={() => setMenu('mobile-app')} className={`rounded-4xl px-4 py-2 bg-transparent hover:bg-orange-50 duration-50 ${menu === 'mobile-app' ? 'border border-orange-50 duration-500': 'border border-transparent'}`}>Mobile App</li>
          <li onClick={() => setMenu('contact-us')} className={`rounded-4xl px-4 py-2 bg-transparent hover:bg-orange-50 duration-50 ${menu === 'contact-us' ? 'border border-orange-50 duration-500': 'border border-transparent'}`}>Contact us</li>
        </ul>
        <div className="flex items-center gap-5">
          <img src={assets.search_icon} className="h-6 w-6" alt="" />
          <div className="relative">
            <img src={assets.basket_icon} className="h-7 w-7" alt="" />
            <div className="absolute top-1 right-0 bg-red-500 h-3 w-3 rounded-full"></div>
          </div>
          <button className="border border-orange-500 rounded-4xl px-6 py-2 cursor-pointer hover:bg-orange-50 duration-500">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
