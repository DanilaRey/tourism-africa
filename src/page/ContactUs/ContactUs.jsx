import React from 'react';
import { RiArrowRightSFill} from 'react-icons/ri';
import images from '../../constant/images';
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className='app__contactus'>
      <div className='app__header_top'>
        <div className='app__header_top-content'>
          <h1 className='app__header_top-content-title'>Contact Us</h1>
          <div className='app__header_top-content_subtitle'>
          <p>Home</p>
          <RiArrowRightSFill style={{color: "var(--color-green)"}}/>
          <span>Gallery</span>
          </div>
        </div>
      </div>
      <div className='app__contactus_main'> 
        <div className='app__contactus_main-top'>
          <h2>Get in Touch</h2>
          <p>We would love to hear from you! If you have any comments or suggestions
           about our website or our tours, please don't hesitate to get in touch. 
           We are always looking for ways to improve and make your travel experience
            even better.</p>
        </div>
        <div className='app__contactus_main-form'>
          <div className='app__contactus_main-form-content'>
            <form>
              <p className='form-title'>Contct us</p>
              <div className='section_input-name'>
                <div className='input-name'>
                  <p className='p__txt'>First Name</p>
                  <input type="text" placeholder='Input your First Name'/>
                </div>
                <div className='input-name'>
                  <p className='p__txt'>Last Name</p>
                  <input type="text" placeholder='Input your Last Name '/>
                </div>
              </div>
              <p className='p__txt'>Email Address</p>
              <input type="email" placeholder='Input your Email Address '/>
              <p className='p__txt'>Phone Number</p>
              <input type="text" placeholder='Input your Phone Number '/>
              <p className='p__txt'>Message</p>
              <textarea className='textarea_contact'></textarea>
              <button type='button' className='custom__button form_btn'>Submit</button>
            </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ContactUs