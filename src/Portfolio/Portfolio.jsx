import React from 'react'
import { useState } from 'react'
import port1 from '../assets/images/portfolio/poert1.png'
import port2 from '../assets/images/portfolio/port2.png'
import port3 from '../assets/images/portfolio/port3.png'

export default function Portfolio() {
  const [selectedImg, setSelectedImg] = useState(null);

  function handleImgClick(img) {
    setSelectedImg(img);
  }

  function closeModal() {
    setSelectedImg(null);
  }
  return <>
    <div className="container overflow-auto">
      <div className="portfolio-header pt-5 mt-5">
        <h2 className='pt-5 text-center'>PORTFOLIO COMPONENT</h2>
        <div className="star-p d-flex justify-content-center align-items-center gap-2">
          <div className='line-p'></div><i class="fa-solid fa-star"></i><div className='line-p'></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 mb-5">
            <div className="port position-relative " onClick={() => handleImgClick(port1)}>
              <img src={port1} className='w-100 rounded-2' alt="house" />
              <div className="layer">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="port position-relative" onClick={() => handleImgClick(port2)}>
              <img src={port2} className='w-100 rounded-2' alt="cake" />
              <div className="layer">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="port position-relative" onClick={() => handleImgClick(port3)}>
              <img src={port3} className='w-100 rounded-2' alt="tent" />
              <div className="layer">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4 mb-5">
            <div className="port position-relative" onClick={() => handleImgClick(port1)}>
              <img src={port1} className='w-100 rounded-2' alt="house" />
              <div className="layer">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="port position-relative" onClick={() => handleImgClick(port2)}>
              <img src={port2} className='w-100 rounded-2' alt="cake" />
              <div className="layer">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-5">
            <div className="port position-relative" onClick={() => handleImgClick(port3)}>
              <img src={port3} className='w-100 rounded-2' alt="tent" />
              <div className="layer">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {selectedImg && (
        <div className='displayImg' onClick={closeModal}>
          <img src={selectedImg}  alt="selected" style={{ maxHeight: '65vh', maxWidth: '65vw' }} />
        </div>
      )}
  </>
}
