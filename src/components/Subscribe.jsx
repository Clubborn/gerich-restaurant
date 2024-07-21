import React from 'react'
import images from '../constants/images';
import facebook from '../assets/social-media.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png'

const Subscribe = () => {
  return (
    <section className='w-full bg-black flex flex-col items-center'>
        <div className='w-full flex justify-center'>
            <div className='w-[70%] border-[1px] border-t-0 border-golden flex items-center flex-col'>
                <h2 className='text-white cormorant-upright-regular text-xl mb-3 mt-8'>Newsletter</h2>
                <img src={images.spoon} className='mb-6' alt="" />
                <h1 className='text-golden text-6xl cormorant-upright-semibold mb-10 max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl max-sm:mb-5'>Subscribe To Our Newsletter</h1>
                <h3 className='text-white text-lg mb-20 max-sm:mb-10'>And never miss latest Updates!</h3>
                <div className='w-full flex justify-center'>
                    <form name='email' className='mb-10 w-full flex justify-center'>
                        <input type="text" className='border-[1px] w-[65%] border-grey h-12 bg-transparent text-white pl-4' placeholder='Email Address'/>
                    </form>
                </div>
            </div>
        </div>
        <div className='w-full bg-[url("src/assets/bg.png")] flex justify-center items-center px-[10%] max-xl:px-[3%] max-lg:[px-2]'>
            <div className='flex w-full mt-28 mb-40 justify-between items-center gap-5  max-md:flex-col'>
                <div className='flex flex-col items-center text-center pr-2 mb-20'>
                    <h2 className='text-white cormorant-upright-light text-3xl mb-8'>Contact Us</h2>
                    <p className='text-grey mb-3'>9 W 53rd St, New York, NY 10019, USA</p>
                    <p className='text-grey'>+1 212-344-1230</p>
                    <p className='text-grey'>+1 212-555-1230</p>
                </div>
                <div className='flex flex-col items-center mb-20 text-center'>
                    <h1 className='text-golden text-8xl mb-10 cormorant-upright-bold max-lg:5xl'>Gericht</h1>
                    <p className='text-white mb-6'>"The best way to find yourself is to lose yourself in the service of others.”</p>
                    <img src={images.spoon} className='mb-6' alt="" />
                    <div className='flex gap-3'>
                        <img src={facebook} width={30} alt="" />
                        <img src={instagram} width={30} alt="" />
                        <img src={twitter} width={30} alt="" />
                    </div>
                </div>
                <div className='flex flex-col items-center text-center pl-2'>
                    <h2 className='text-white cormorant-upright-light text-3xl mb-8 '>Working Hours</h2>
                    <p className='text-grey'>Monday-Friday:</p>
                    <p className='text-grey mb-2'> 08:00 am -12:00 am</p>
                    <p className='text-grey'>Saturday-Sunday:</p>
                    <p className='text-grey'>07:00am -11:00 pm</p>
                </div>
            </div>
        </div>
        <div className='bg-black my-2'>
            <h2 className='text-white'>2021 Gerícht. All Rights reserved.</h2>
        </div>
    </section>
  )
}

export default Subscribe