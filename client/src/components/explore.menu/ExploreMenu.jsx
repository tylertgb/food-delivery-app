import React from "react";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div id="menu" className="pt-20 pb-10">
      <h1 className="text-3xl font-semibold">Explore Menu</h1>
      <p className="text-lg text-gray-500 mt-3">
        Choose from a diverse menu featuring a deletable array of dishes. Our
        mission is to provide food of various menu to our customers
      </p>
      <div className="explore-menu-list flex items-center justify-between gap-3 md:gap-6 overflow-x-scroll w-full mt-8">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="flex flex-col items-center gap-3 cursor-pointer w-36 min-w-36 my-5"
            >
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`rounded-full GH₵{category === item.menu_name ? 'border-4 border-orange-500 p-0.5 duration-500' : ' border-4 border-transparent p-0.5'}`}
              />
              <p className="text-gray-500">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className="bg-gray-100 h-1 border-0" />
    </div>
  );
};

export default ExploreMenu;
