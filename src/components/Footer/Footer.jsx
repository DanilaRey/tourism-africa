import React from 'react';
import "./Footer.css";
import images from '../../constant/images';
import { BsInstagram, BsTwitter, BsFacebook, BsEnvelopeFill } from 'react-icons/bs';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="app__footer">
        <div className="app__footer_container">
            <div className="app__footer_container-block">
                <div className="app__footer_title">
                    <h2>If you have any question,<br></br> Let us help you!</h2>
                    <span>If you have any questions or would like to<br></br> book a tour with us, please don't hesitate<br></br> to contact us.</span>
                </div>
                <div className="app__footer_contact">
                    <p>Phone: +250 788 123 456</p>
                    <p>Email: info@rwandatourism.com </p>
                    <p>Address: Kigali, Rwanda</p>
                </div>
                <div className="app__footer_subscribe">
                    <p>Subscribe to our newspaper</p>
                    <div className="app__footer_subscribe-form">
                            <input placeholder="Input your email here"/>
                            <BsArrowRightShort className='app__home-arrow'/>
                    </div>
                </div>
            </div>
            
            <div className="app__footer_container-block">
                <div className="app__footer_container-block_logo">
                    <div className="app__footer-logo">
                        <img src={images.contienent}/>
                    </div>
                    <div className="app__footer-icon">
                        <BsFacebook/>
                        <BsTwitter style={{margin: "0 15"}}/>
                        <BsInstagram/>
                    </div>
                </div>
                <div className="app__footer-article">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="app__footer_links">
                    <div className="app__footer-links-block">
                        <p>Home</p>
                        <p>Testimonials</p>
                        <p>Destinations</p>
                        <p>signinn</p>
                    </div>
                    <div className="app__footer-links-block">
                        <p>About Us</p>
                        <p>Packages</p>
                        <p>Events</p>
                        <p>Gallery</p>
                    </div>
                    <div className="app__footer-links-block">
                        <p>Our Team</p>
                        <p>Blog</p>
                        <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='app__footer-company'>
                <p>Copyright Africa Wizzy Safari 2022</p>
            </div>
    </div>
  )
}

export default Footer