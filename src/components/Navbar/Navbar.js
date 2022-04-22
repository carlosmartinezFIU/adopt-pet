import React from 'react'
import './Navbar.css';
import { IoPaw } from 'react-icons/io5'


/**Navbar Component consist of Title and Paw Logo */
const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
        <div className='paw-container'>
            <IoPaw className='paw'/>
        </div>

        <div className='title-container'>
            <div className='pet-title'>Pet</div>
            <div className='finder-title'>Finder.</div>
        </div>
    </div>
  )
}

export default Navbar