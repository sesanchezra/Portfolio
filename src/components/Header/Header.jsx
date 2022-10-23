import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/SebastianLogo.png'
import { Link, useNavigate } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";
import { IconContext } from 'react-icons/lib';

const Header = () => {

    const [collapseMenu, setCollapseMenu] = useState(false)

    const toggleMenu = () =>{
        setCollapseMenu(!collapseMenu)
    }

    const navigate=useNavigate()

    const letsTalk = () =>{
        navigate('/contact')
        toggleMenu()
    }

    console.log(collapseMenu)
    return (
        <div className='Header'>
            <nav className='Header__navbar'>
                <div className='Header__navbar__logo'>
                    <img src={Logo} alt="Logo" />
                </div>
                <IconContext.Provider value={{  className: "global-class-name"}}>
                    <button className={`menu__button__${collapseMenu}`} onClick={toggleMenu}>
                        <HiMenuAlt3 />
                    </button>
                </IconContext.Provider>

                <div className={`Header__navbar__menu__${collapseMenu}`}>
                    <ul>
                        <li className='Header__navbar__menu__item' onClick={toggleMenu}>
                            <Link to='/'>
                                Home
                                <div className='border__bottom'></div>
                            </Link>

                        </li>
                        <li className='Header__navbar__menu__item' onClick={toggleMenu}>
                            <Link to='/about'>
                                About me
                                <div className='border__bottom'></div>
                            </Link>
                        </li>
                        <li className='Header__navbar__menu__item' onClick={toggleMenu}>
                            <Link to='/works'>
                                Works
                                <div className='border__bottom'></div>
                            </Link>
                        </li>
                        <li className='Header__navbar__menu__item' onClick={toggleMenu}>
                            <Link to='/skills'>
                                Skills
                                <div className='border__bottom'></div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`Header__navbar__action__${collapseMenu}`}>
                    <button className={`Header__button__${collapseMenu}`} onClick={letsTalk}>
                        LET'S TALK
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
