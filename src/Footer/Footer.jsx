import React from 'react'

export default function Footer() {
  return <>
  <div className="footer text-center ">
    <div className="container overflow-auto">
      <div className="row p-5 mt-5">
        <div className="col-md-4">
          <div className='footerContentLeft'>
            <h3>LOCATION</h3>
            <div><p className='text-white'>2215 John Daniel Drive</p></div>
            <div><p className='text-white'>Clark, MO 65243</p></div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footerContentCenter">
            <h3>AROUND THE WEB</h3>
            <div className='socialMedia gap-2'>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-solid fa-globe"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footerContentRight">
            <h3>ABOUT FREELANCER</h3>
            <div><p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p></div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-end p-4">
      <div><p className='text-white m-0'>Copyright © Your Website 2021</p></div>
    </div>
  </div>
  </>
}
