import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'
import Signup from './Signup'
import Footer from './Footer'
function Header() {
  return (
    <div className=''>
      <Navbar/>
         <Footer/>
    </div>
  )
}

export default Header