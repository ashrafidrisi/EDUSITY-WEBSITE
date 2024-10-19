import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

function Navbar() {
  
  const[sticky, setSticky]= useState(false);
   
   useEffect(()=>{
     window.addEventListener('scroll', ()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false);
     })
   },[]);

    const[mobileMenu, setmobileMenu]= useState(false)
    const toggleMenu = ()=>{
        mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
    }

  return (
    <>
      <nav className={`container  ${sticky? 'dark-nav' : ''}`}>
         <img src="./images/logo.png" alt="logo" className='logo'></img>
         <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link> </li>
            <li> <Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link> </li>
            <li> <Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link>  </li>
         </ul>
         <img src="./images/menu-icon.png" alt="me-icon" className='menu-icon' onClick={toggleMenu}></img>
      </nav> 
    </>
  )
}

export default Navbar
