import React from 'react'
import images from '../constants/images'

const Laurels = () => {
  return (
    <section className='w-full relative bg-[url("src/assets/bg.png")] flex justify-center py-[5rem]'>
        <div className='flex w-full justify-between max-lg:flex-col max-lg:items-center'>
            <div className='flex justify-center flex-col ml-40 max-lg:ml-0 max-lg:mb-20'>
                <div className='mb-10 max-lg:flex max-lg:flex-col max-lg:items-center'>
                    <h2 className='text-white text-2xl cormorant-upright-regular mb-2'>Awards & recognition</h2>
                    <img src={images.spoon} width={30} className='mb-8 max-lg:mb-5' alt="" />
                    <h1 className='text-golden cormorant-upright-semibold text-7xl max-sm:text-6xl'>Our Laurels</h1>
                </div>
                <div>
                    <div className='flex flex-col gap-10 max-sm:mx-7'>
                        <div className='flex'>
                             <img src={images.award01} width={80} alt="" />
                            <div className='ml-10'>
                                <h4 className='text-golden cormorant-upright-semibold text-2xl'>Rising Star</h4>
                                <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div className='flex'>
                             <img src={images.award03} width={80} alt="" />
                            <div className='ml-10'>
                                <h4 className='text-golden cormorant-upright-semibold text-2xl'>Rising Star</h4>
                                <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div className='flex'>
                             <img src={images.award05} width={80} alt="" />
                            <div className='ml-10'>
                                <h4 className='text-golden cormorant-upright-semibold text-2xl'>Rising Star</h4>
                                <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div className='flex'>
                             <img src={images.award02} width={80} alt="" />
                            <div className='ml-10'>
                                <h4 className='text-golden cormorant-upright-semibold text-2xl'>Rising Star</h4>
                                <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>       
            <div className='mr-[10rem] flex items-center max-lg:relative max-lg:left-14'>
                <img src={images.laurels} width={650} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Laurels