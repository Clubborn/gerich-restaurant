import React, { useRef } from 'react'
import images from '../constants/images'
import { BsArrowLeft, BsArrowRight, BsInstagram } from 'react-icons/bs'

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };


  return (
    <section className='w-full bg-black flex justify-center pt-36 pb-24 max-lg:px-6'>
      <div className='flex w-5/6 max-lg:w-full max-sm:flex-col max-sm:items-center'>
        <div className=' mr-10 w-2/6 flex flex-col justify-center max-lg:mr-6 max-sm:w-5/6 max-sm:mb-20 max-sm:items-center max-sm:text-center'>
          <h2 className='text-white cormorant-upright-regular text-2xl mb-2'>Instagram</h2>
          <img src={images.spoon} width={30} className='mb-6' alt="" />
          <h1 className='text-golden cormorant-upright-semibold text-7xl mb-16 '>Photo Gallery</h1>
          <p className='text-grey mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
          <button className='bg-golden w-[9rem] h-10 cormorant-upright-semibold sm:text-lg text-black'>
            View More
          </button>
        </div>
        <div className='relative'>
          <div className='flex  overflow-scroll overflow-y-hidden gap-6' ref={scrollRef}>
            <img src={images.gallery01} width={300} alt="" />
            <img src={images.gallery02} width={300} alt="" />
            <img src={images.gallery03} width={300} alt="" />
            <img src={images.gallery04} width={300} alt="" />
            <img src={images.gallery01} width={300} alt="" />
            <img src={images.gallery02} width={300} alt="" />
          </div>
          <div className='absolute left-0 cursor-pointer max-lg:hidden'>
            <BsArrowLeft color='#fff' onClick={() => scroll('left')}/>
          </div>
          <div className='absolute right-0 cursor-pointer max-lg:hidden'>
            <BsArrowRight color='#fff' onClick={() => scroll('left')}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery