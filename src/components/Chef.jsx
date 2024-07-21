import React from 'react'
import images from '../constants/images'

const Chef = () => {
  return (
    <section className='w-full bg-[url("src/assets/bg.png")] py-40 flex justify-center items-center pl-40 max-lg:pl-0 max-lg:py-20'>
        <div className='w-[85%] flex justify-center items-center max-lg:flex-col'>
            <div className='max-lg:mb-20'>
                <img src={images.chef} width={1200} alt="" className=''/>
            </div>
            <div className='flex flex-col justify-center ml-[7rem] max-sm:ml-9'>
                <div className='mb-20'>
                    <h3 className='text-white text-2xl cormorant-upright-regular mb-2'>Chef's Word</h3>
                    <img src={images.spoon} className='mb-6' alt="" />
                    <h1 className='text-golden cormorant-upright-semibold text-5xl word-spacing-wider'>What We Believe In</h1>
                </div>
                <div className='mb-20 w-4/6'>
                    <div className='flex items-center'>
                        <img src={images.quote} width={50} className='mr-3' alt="" />
                        <p className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
                    </div>
                    <div>
                        <p className='text-grey'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scel
                        erisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-golden cormorant-upright-regular text-3xl word-spacing-wider'>Kevin Luo</h2>
                    <h4 className='text-grey cormorant-upright-regular text-lg mb-8'>Chef & Founder</h4>
                </div>
                <div>
                    <img src={images.sign} width={200} alt="" />
                </div>
            </div>

        </div>
    </section>
  )
}

export default Chef