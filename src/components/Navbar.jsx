import React, { useState } from 'react'
import images from '../constants/images'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [toggle, settoggle] = useState(false)

  return (
    <header className='w-full bg-black px-10 py-4'> 
        <nav className='flex items-center justify-between mb-10 max-lg:mb-4'>
            <div>
                <a href='index.html'>
                    <img src={images.gericht} width='150px' alt="logo" />
                </a>
            </div>  
            <div className='text-white flex gap-10 max-lg:hidden'>
                {['Home', 'About', 'Menu', 'Awards', 'Contact'].map((link) => (
                    <a className='hover:text-grey' key={link} href={`#${link}`}>{link}</a>
                ))}
            </div>
            <div className='text-white flex gap-4 max-sm:hidden'>
                {['Log In / Register', 'Book Table'].map((link) => (
                    <a className='hover:underline underline-offset-[6px]' href={`#${link}`} key={link}>{link}</a>
                ))}
            </div>
            <div className='lg:hidden cursor-pointer'>
                <GiHamburgerMenu color='white' fontSize={28} onClick={() => {settoggle(!toggle)}}/>
            </div>
            
        </nav>
    </header>

  )
}

export default Navbar