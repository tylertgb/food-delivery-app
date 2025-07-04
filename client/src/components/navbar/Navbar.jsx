import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../hooks/useStoreContext";

const Navbar = ({ setShowLoginModal }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems, getCartCount } = useStoreContext();
  return (
    <div className=" bg-transparent px-4 md:px-36 py-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          {" "}
          <img src={assets.logo} className="w-24 md:w-36" alt="" />
        </Link>
        <ul className="hidden md:flex items-center gap-1 text-gray-600">
          <Link
            to="/"
            onClick={() => setMenu("home")}
            className={`rounded-4xl px-4 py-2 cursor-pointer border  hover:bg-orange-50 duration-50 GH₵{menu === 'home' ? 'border border-orange-50 bg-orange-50 duration-500': 'border border-transparent'}`}
          >
            Home
          </Link>
          <a
            href="#menu"
            onClick={() => setMenu("menu")}
            className={`rounded-4xl px-4 py-2 cursor-pointer border hover:bg-orange-50 duration-50 GH₵{menu === 'menu' ? 'border border-orange-50 bg-orange-50 duration-500': 'border border-transparent'}`}
          >
            Menu
          </a>
          <a
            href="#mobile-app"
            onClick={() => setMenu("mobile-app")}
            className={`rounded-4xl px-4 cursor-pointer py-2 border-transparent hover:bg-orange-50 duration-50 GH₵{menu === 'mobile-app' ? 'border border-orange-50 bg-orange-50 duration-500': 'border border-transparent'}`}
          >
            Mobile App
          </a>
          <a
            href="#contact-us"
            onClick={() => setMenu("contact-us")}
            className={`rounded-4xl px-4 cursor-pointer py-2 border-transparent hover:bg-orange-50 duration-50 GH₵{menu === 'contact-us' ? 'border border-orange-50 bg-orange-50 duration-500': 'border border-transparent'}`}
          >
            Contact us
          </a>
        </ul>
        <div className="flex items-center gap-5">
          <img src={assets.search_icon} className="h-6 w-6" alt="" />
          <div className="relative">
            <Link to="cart">
              {" "}
              <img src={assets.basket_icon} className="h-7 w-7" alt="" />
            </Link>
            {Object.keys(cartItems).length > 0 && (
              <div className="absolute -top-1 right-0 bg-red-500 h-4 w-4 text-white flex items-center justify-center rounded-full">
                <span className="text-xs font-semibold">{getCartCount()}</span>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowLoginModal(true)}
            className="border border-orange-500 rounded-4xl px-6 py-2 cursor-pointer hover:bg-orange-50 duration-500"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
