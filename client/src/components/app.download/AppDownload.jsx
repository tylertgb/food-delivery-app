import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='pb-24 pt-5 bg-white flex flex-col items-center justify-center gap-6 md:gap-12'>
        <p className='text-2xl md:text-5xl font-semibold text-center'>For Better Experience Download <span className='text-2xl md:text-5xl font-semibold text-orange-500'>Tomato App</span></p>

        <div className='flex items-center gap-4'>
            <img src={assets.play_store} alt="" className='w-30 md:w-40' />
            <img src={assets.app_store} alt="" className='w-30 md:w-40' />
        </div>
    </div>
  )
}

export default AppDownload