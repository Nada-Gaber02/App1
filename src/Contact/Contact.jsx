import React, { useState } from 'react'

export default function Contact() {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <div className="container mb-3 overflow-auto">
      <div className="contactPage mt-5 pt-5">
        <h2 className='text-center mt-3'>CONTACT SECTION</h2>
        <div className="star-p d-flex justify-content-center align-items-center gap-2">
          <div className='line-p'></div>
          <i className="fa-solid fa-star"></i>
          <div className='line-p'></div>
        </div>
        <div className="contactBox">
          <div className="row mt-5 pt-5">
            <div className="col-12 mb-4 position-relative">
              <label
                htmlFor="userName"
                style={{
                  position: 'absolute',
                  top: userName ? '-25px' : '12px',
                  left: '10px',
                  transition: '0.3s',
                  visibility: userName ? 'visible' : 'hidden',
                  background: '#fff',
                  padding: '0 4px',
                  color: 'var(--secondColor)',
                }}
              >
                userName:
              </label>
              <input
                type="text"
                name='userName'
                className='form-control position-relative'
                placeholder='userName'
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </div>
            <div className="col-12 mt-4 mb-4 position-relative">
              <label
                htmlFor="userAge"
                style={{
                  position: 'absolute',
                  top: userAge ? '-25px' : '12px',
                  left: '10px',
                  transition: '0.3s',
                  visibility: userAge ? 'visible' : 'hidden',
                  background: '#fff',
                  padding: '0 4px',
                  color: 'var(--secondColor)',
                }}
              >
                userAge:
              </label>
              <input
                type="text"
                name='userAge'
                className='form-control position-relative'
                placeholder='userAge'
                value={userAge}
                onChange={e => setUserAge(e.target.value)}
              />
            </div>
            <div className="col-12 mt-4 mb-4 position-relative">
              <label
                htmlFor="userEmail"
                style={{
                  position: 'absolute',
                  top: userEmail ? '-25px' : '12px',
                  left: '10px',
                  transition: '0.3s',
                  visibility: userEmail ? 'visible' : 'hidden',
                  background: '#fff',
                  padding: '0 4px',
                  color: 'var(--secondColor)',
                }}
              >
                userEmail:
              </label>
              <input
                type="text"
                name='userEmail'
                className='form-control position-relative'
                placeholder='userEmail'
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
              />
            </div>
            <div className="col-12 mt-4 mb-4 position-relative">
              <label
                htmlFor="userPassword"
                style={{
                  position: 'absolute',
                  top: userPassword ? '-25px' : '12px',
                  left: '10px',
                  transition: '0.3s',
                  visibility: userPassword ? 'visible' : 'hidden',
                  background: '#fff',
                  padding: '0 4px',
                  color: 'var(--secondColor)',
                }}
              >
                userPassword:
              </label>
              <input
                type="text"
                name='userPassword'
                className='form-control position-relative'
                placeholder='userPassword'
                value={userPassword}
                onChange={e => setUserPassword(e.target.value)}
              />
            </div>
          </div>
          <button className='contactBtn mb-3'>Send Message</button>
        </div>
      </div>
    </div>
  )
}