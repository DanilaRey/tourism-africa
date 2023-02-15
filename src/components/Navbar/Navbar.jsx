import React, { useState } from 'react';
import './Navbar.css';
import images from '../../constant/images';
import {  NavLink } from "react-router-dom";
import { AiFillPhone, AiOutlineClose  } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsInstagram, BsTwitter, BsFacebook, BsEnvelopeFill } from 'react-icons/bs';


const Navbar = ({routes}) => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='app__navbar'>
        <div className='app__navbar-content'>
            <div className='app__navbar-content_contact'>
                <div className='app__navbar-content_contact-item'>
                <AiFillPhone className="app__navbar-content_contact-item_icon"/>
                    <p className='p__text'>+250 784 688 641</p>
                </div>
                <div className='app__navbar-content_contact-item'>
                    <BsEnvelopeFill className="app__navbar-content_contact-item_icon"/>
                    <p className='p__text'>bbonteemma@gmail.com</p>
                </div>
            </div>
            <div className='app__navbar-content_social'>
                <BsFacebook/>
                <BsTwitter style={{margin: "0 15"}}/>
                <BsInstagram/>
            </div>
        </div>
            
    <div className='app__navbar-nav'>
        <div className='app__navbar-nav_logo'>
            <img src={images.contienent} alt="logo"/>
        </div>
        <div className='app__navbar-nav_listnav'>
            {routes.map((route, key) => {
                return (
                <ul className='app__navbar-links'>
                    <li key={key}>
                        <NavLink
                            to={route.path}
                        >
                            <p className='app__navbar-nav_name'>{route.name}</p>
                        </NavLink>
                    </li>
                </ul>
                )
            })} 
        </div>
    
        <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu fontSize={27} color='#304F47' onClick={() => setToggleMenu(true)}/>
            {toggleMenu && (
            <div className='app__navbar-smallscreen_overlay flex__center'>
            <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
                {routes.map((route, key) => {
                    return (
                    <ul className='app__navbar-smallscreen_links'>
                        <li key={key}>
                            <NavLink
                                to={route.path}
                            >
                                <p className='app__navbar-nav_name'>{route.name}</p>
                                
                            </NavLink>
                            
                        </li>
                    </ul> 
                    )
                })} 
            </div>
            
            )}

        </div>
        

        <div className='app__navbar-nav_button'>
            <button type='button' className='custom__button'> Sign In</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar