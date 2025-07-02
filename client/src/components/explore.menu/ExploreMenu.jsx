import React from 'react'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className='py-20'>
        <h1 className='text-3xl font-semibold'>Explore Menu</h1>
        <p className='text-lg text-gray-500 mt-3'>Choose from a diverse menu featuring a deletable array of dishes. Our mission is to provide food of various menu to our customers</p>
        <div className='explore-menu-list flex items-center justify-between gap-6 overflow-x-scroll w-full mt-8'>
            {menu_list.map((item, index) => {
                return(
                    <div key={index} className='flex flex-col items-center gap-3 cursor-pointer my-5'>
                        <img src={item.menu_image} alt={item.menu_name} className='rounded-full w-36 min-w-36' />
                        <p className='text-gray-500'>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExploreMenu