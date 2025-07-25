import React from "react";
import '../../index.css'
const Header = () => {
  return (
    <main className="bg-[url(./assets/header_img.png)] flex flex-col justify-end h-[40vw] md:h-[34vw] bg-cover bg-no-repeat rounded-2xl overflow-hidden">
      <div className="header-content p-4 md:p-20 flex flex-col items-start gap-3 md:gap-6 max-w-4xl">
        <h2 className="text-2xl md:text-6xl font-semibold text-white">
          Order your favorite food here!
        </h2>
        <p className="text-white/95 text-lg hidden md:flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint numquam et odit amet? Assumenda, eius. Dolor enim repellat id nulla tempore accusantium ipsa quis facere, laboriosam sequi vitae odio.
        </p>
        <button className="px-5 py-2 md:px-9 md:py-3 bg-white border border-white rounded-4xl hover:text-white hover:border hover:border-white duration-500 hover:bg-transparent">
          View Menu
        </button>
      </div>
    </main>
  );
};

export default Header;
