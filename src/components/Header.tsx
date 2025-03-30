import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Trillo from '../assets/Group 1034.png'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [openNav, setOpenNav] = useState<Boolean>(window.innerWidth < 800 ? true : false);
    const [active, setActive] = useState<Boolean>(false)

   
    const handleMenu = () => {
        setActive(prev => !prev)
    }

    const closeMenu = () => {
        setActive(false)
    }

    const checkScreenSize = () => {
        if(window.innerWidth < 800){
            setOpenNav(true)
        } else if(window.innerWidth >= 800){
            setOpenNav(false)
        }
    }

    window.addEventListener('resize', checkScreenSize)

    useEffect(() => {
        checkScreenSize()
    }, []);
  return (
    <nav className='hero-nav'>
        <div className="heroNavContainer">
        <Link to='/' className='logoContainer' onClick={closeMenu}>
        <img src={Trillo} alt="" className="logo-image" />
        </Link>

        {
           !openNav ?
            <div className= "menu-options">
           <li className="menu-item">
                <Link to='/'>Whitepaper</Link>
            </li>
            <li className="menu-item">
                <Link to='/'>Docs</Link>
            </li>

                <Link to='/market'>
            <button className="btn btn-primary">
                Launch App
            </button>
                </Link>
                
                
        </div> :  <div className={ active ? "mobileMenu" : 'hideMenu'}>
           <li className="menu-item" onClick={closeMenu}>
                <Link to='/'>Whitepaper</Link>
            </li>
            <li className="menu-item" onClick={closeMenu}>
                <Link to='/'>Docs</Link>
            </li>

                <Link to='/market'>
            <button className="btn btn-primary" onClick={closeMenu}>
                Launch App
            </button>
                </Link>
                
                
        </div>
        
        }

   { openNav &&
    <div className="menuIcons" onClick={handleMenu}>
        { active ? <IoMdClose className='menuIcon' /> :  <FaBars className='menuIcon'/>}
    </div>}

        </div>
    </nav>
  )
}

export default Header
