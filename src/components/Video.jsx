import React, { useRef, useState } from 'react'
import meal from '../assets/meal.mp4';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const Video = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevVideoState) => !prevVideoState);

    if(playVideo) {
      vidRef.current.play();
    } else {  
      vidRef.current.pause();
    }
  };

  return (
    <section className='h-full relative'>
      <video 
      src={meal}
      controls={false}
      muted
      type='video/mp4'
      loop
      ref={vidRef}
      >

      </video>
      <div className=' inset-0 absolute flex justify-center items-center'>
        <div className='w-[100px] h-[100px] border-golden border-2 rounded-full flex justify-center items-center cursor-pointer' onClick={handleVideo}>
          {playVideo 
          ? <BsFillPlayFill color='#fff' fontSize={30}/> 
          : <BsPauseFill color='#fff' fontSize={30}/>}
        </div>
      </div>
    </section>
  )
}

export default Video