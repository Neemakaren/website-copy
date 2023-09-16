import React from 'react'
import './navbar.css';
import img from '../../assets/logo.webp'
import { Link } from 'react-router-dom';
import {PiShoppingCartSimpleThin} from 'react-icons/pi'
import { MdPersonPin } from 'react-icons/md'


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <Link to='/' className="nav-logo">
          <img src={img} alt="simply recipes" className='logo-img' />
        </Link>
      </div>
      <div className="nav-links">
        <Link to='/' className="nav-link"> home </Link>
        <Link to='/about' className="nav-link"> Shop </Link>
        <Link to='/blog' className="nav-link"> Blog </Link>
        <Link to='/blog' className="nav-link"> About us </Link>
        <Link to='/blog' className="nav-link"> Learn To Sew </Link>
      <div className="nav-icons">
        <MdPersonPin className='icon'/>
        <PiShoppingCartSimpleThin className='icon'/>
      </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar

