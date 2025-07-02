import React from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ({id, name, image, price, description}) => {
  return (
    <div key={id} className='flex flex-col items-start gap-4'>
        <div className='overflow-hidden rounded-2xl'>
            <img src={image} alt={name} className='w-full h-full rounded-2xl hover:scale-110 duration-500' />
        </div>
        <div className='flex flex-col gap-2'>
            <div >
                <p className='text-xl'>{name}</p>
                <img src={assets.rating_starts} alt="rate" />
            </div>
            <p className='text-gray-600'>{description}</p>
            <p>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem