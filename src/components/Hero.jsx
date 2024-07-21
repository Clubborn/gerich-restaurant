import React from 'react'
import images from '../constants/images'

const Hero = () => {
  return (
    <section className='flex w-full bg-black justify-center items-center'>
        <div className='flex w-[70%] mb-20 justify-between max-lg:flex-col'>
                <div className='flex justify-center flex-col max-lg:mb-24 max-lg:items-center mr-20 max-lg:w-full'>
                    <h3 className='text-white cormorant-upright-light text-2xl max-sm:text-xl mb-1'>Chase The New Flavour</h3>
                    <img src={images.spoon} width={30} alt="" />
                    <h1 className='text-golden text-7xl max-sm:text-5xl cormorant-upright-semibold mb-6 mt-4 word-spacing-wider'>The Key To</h1>
                    <h1 className='text-golden text-7xl max-sm:text-5xl cormorant-upright-semibold word-spacing-wider'>Fine Dining</h1>
                    <p className='text-grey mt-12 cormorant-upright-regular text-lg max-sm:text-md mb-8 max-lg:text-center'>Sit tellus lobortis sed senectus vivamus molestie. <br />
                    Condimentum volutpat morbi facilisis quam scelerisque sapien. <br />
                    Et, penatibus aliquam amet tellus </p>
                    <button className='bg-golden w-[10rem] h-10 cormorant-upright-semibold sm:text-lg text-black'>Explore Menu</button>
                </div>
           
            <div className='flex items-center relative max-lg:left-5 max-sm:left-0'>
                <img src={images.welcome} width={650} alt="food" />
            </div>
        </div>
    </section>
  )
}

export default Hero