import React from 'react'
import  avataaars from '../assets/images/Home-img/avataaars.svg'

export default function Home() {
  return <>
  <div className=" homePage overflow-auto">
    <div className="homeContent m-5 pt-5">
      <div className='mt-5'><img src={avataaars} className='w-18' alt="boy-avatar"/></div>
      <div><h2 className='m-4'>START FRAMEWORK</h2></div>
      <div className="star d-flex justify-content-center align-items-center gap-2">
        <div className='line'></div><i class="fa-solid fa-star"></i><div className='line'></div>
      </div>
      <div><p className='text-white text-center m-2'>Graphic Artist - Web Designer - Illustrator</p></div>
    </div>
  </div>
  </>
}
