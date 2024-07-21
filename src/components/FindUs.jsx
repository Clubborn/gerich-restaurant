import React from 'react'
import images from '../constants/images'

const FindUs = () => {
  return (
    <section className='flex w-full bg-[url("src/assets/bg.png")] justify-center items-center py-20'>
        <div className='flex w-[80%] justify-between max-lg:flex-col max-lg:w-full max-lg:mx-4'>
                <div className='flex justify-center flex-col max-lg:mb-24 max-lg:items-center mr-20 max-lg:w-full'>
                    <h3 className='text-white cormorant-upright-light text-2xl max-sm:text-xl mb-1'>Contact</h3>
                    <img src={images.spoon} width={30} alt="" />
                    <h1 className='text-golden text-7xl max-sm:text-5xl cormorant-upright-semibold mb-10 mt-4 word-spacing-wider'>Find Us</h1>
                    <p className='text-gray mt-12 cormorant-upright-regular text-lg max-sm:text-md mb-8 max-lg:text-center'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <h3 className='text-golden cormorant-upright-regular text-2xl mb-8'>Opening Hours</h3>
                    <p className='text-grey text-lg mb-2'>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p className='text-grey text-lg mb-8'>Sat - Sun: 10:00 am - 03:00 am </p>
                    <button className='bg-golden w-[10rem] h-10 cormorant-upright-bold sm:text-lg text-black'>Visit Us</button>
                </div>
           
            <div className='flex items-center max-lg:justify-center max-sm:left-0'>
                <img src={images.findus} width={650} alt="" />
            </div>
        </div>
    </section>
  )
}

export default FindUs