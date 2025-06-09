import React from 'react'

export default function About() {
  return <>
  <div>
    <div className="aboutPage">
      <h2 className='mt-5'>ABOUT COMPONENT</h2>
      <div className="star d-flex justify-content-center align-items-center gap-2">
        <div className='line'></div><i class="fa-solid fa-star"></i><div className='line'></div>
      </div>
      <div className="container">
        <div className="row mt-2">
        <div className="col-md-6 ps-5 pe-5">
          <div><p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        </div>
        <div className="col-md-6 ps-5 pe-5">
          <div><p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
        </div>
      </div>
      </div>
    </div>
  </div>
  </>
}
