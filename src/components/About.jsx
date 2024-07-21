import React from 'react'
import images from '../constants/images'

const About = () => {
  return (
    <section className='relative'>
    <div className={`w-full bg-[url('src/assets/bg.png')] flex justify-center items-center`}>
            <div className='w-4/6 flex justify-between items-center max-sm:flex-col max-sm:w-5/6 max-sm:text-center relative z-10 max-lg:w-5/6  '>
                <div className='w-2/6 relative  max-lg:left-0 max-sm:w-full max-sm:text-center max-sm:mt-12 text-right flex flex-col items-end max-sm:items-center'>
                    <h2 className='text-golden cormorant-upright-semibold text-5xl mb-3'>About Us</h2>
                    <div className='flex max-lg:justify-center w-full justify-end'>
                        <img src={images.spoon} width={30} alt="" className='mb-6 rotate-180'/>
                    </div>
                    <p className='text-grey mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                    <button className='bg-golden w-[10rem] h-10 cormorant-upright-semibold sm:text-lg text-black'>
                        Know More
                    </button>
                </div>
                <div>
                    <img src={images.knife} width={100} alt="knife" className='my-20'/>
                </div>
                <div className='w-2/6 relative right-5 max-lg:right-0 max-sm:w-full max-sm:mb-12'>
                    <h2 className='text-golden cormorant-upright-semibold text-5xl mb-3 w-full'>Our History</h2>
                    <div className='flex max-lg:justify-center w-full '>
                        <img src={images.spoon} width={30} alt="" className='mb-6'/>
                    </div>
                    <p className='text-grey mb-10'>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                    <button className='bg-golden w-[10rem] h-10 cormorant-upright-semibold sm:text-lg text-black'>
                        Know More
                    </button>
                </div>
            </div>
    </div>
        <div className='absolute inset-0 justify-center items-center flex z-5'>
            <img src={images.G} width={500} className='' alt="" />
        </div>
    </section>
  )
}

export default About