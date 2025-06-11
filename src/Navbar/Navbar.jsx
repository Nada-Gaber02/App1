import React from 'react'
import { useState , useEffect } from 'react'
import {Link , NavLink} from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>
  <nav className={`navbar navbar-expand-lg position-fixed z-3 w-100 ${scrolled ? 'navbar-small' : ''}`}>
  <div className="container">
    <Link to='/' className='logo'>START FRAMWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav d-flex gap-4 ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='About'>ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='Portfolio'>PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='Contact'>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  </>
}
