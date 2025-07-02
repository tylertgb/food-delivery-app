import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, image, price, description}) => {
    const [itemCount, setItemCount] = useState(0);
  return (
    <div key={id} className='flex flex-col items-start shadow rounded-2xl'>
        <div className='overflow-hidden rounded-2xl relative'>
            <div className='z-10 absolute bottom-0 w-full h-20 bg-gradient-to-t from-orange-400 from-5% % to-transparent'><span className='h-10 w-20 rounded-tr-2xl rounded-br-2xl flex items-center justify-center bg-white text-orange-500 text-2xl font-semibold'>${price}</span></div>
            <img src={image} alt={name} className='z-0 w-full h-full rounded-2xl object-cover hover:scale-110 duration-500 ' />
            <div className='absolute top-0 right-3 flex items-center p-3'>
                {
                !itemCount ? <img src={assets.add_icon_white} alt="" onClick={() => setItemCount(prev=>prev+1)} className='w-10' /> 
                : 
                <div className='flex items-center gap-2'>
                    <img src={assets.remove_icon_red} alt="" onClick={() => setItemCount(prev => prev - 1)} className='w-9' />
                    <span className='text-white'>{itemCount}</span>
                    <img src={assets.add_icon_green} alt="" onClick={() => setItemCount(prev => prev + 1)} className='w-9' />
                </div>
                }
            </div>
        </div>
        <div className='flex flex-col gap-2 p-4'>
            <div className='flex items-center justify-between'>
                <p className='font-medium'>{name}</p>
                <img src={assets.rating_starts} alt="rate" className='w-20' />
            </div>
            <p className='text-gray-600'>{description}</p>
            <p className='text-xl font-semibold text-orange-500'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem