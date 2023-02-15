import React from 'react';
import "./AboutUs.css";
import images from '../../constant/images.js';

const AboutUs = () => {
  return (
    <div className='app__about'>
      <div className='app__about_travel'>
        <div className='app__about_travel-left'>
          <h1>We are dedicated to <br></br>
providing the best<br></br> travel experience.</h1>
          <p className='app__about_travel-left-subtitle'>Discover the Land of a Thousand Hills</p>
          <div className='app__about_travel_info'>
            <div className='app__about_travel_info-item'>
              <span>Guest</span>
              <p>2 Adult</p>
            </div>
            <div className='app__about_travel_info-item'>
              <span>Date</span>
              <p>12 - 13 April 2021</p>
            </div>
            <div className='app__about_travel_info-item'>
              <span>Package</span>
              <p>Akagera Tour</p>
            </div>
            <button type='button' className='btn__about'>Book Now</button>
          </div>
        </div>
        <div className='app__about_travel-right'>
          <img src={images.monkey} alt="monk"/>
        </div>
      </div>

      <div className='app__about_welcome'>
        <div className='app__about_welcome-head'>
          <h2>Welcome to Africa Wizzy Safari</h2>
        </div>
        <div className='app__about_welcome_content'>
          <div className='app__about_welcome_content-item'>
            <img src={images.welcome1}/>
            <p>Welcome to Africa Wizzy Safari, a leading tourism company based in Rwanda. We have been in business for over 5 years and are committed to providing top-quality tours and services to our clients. Our mission is to showcase the beauty and culture of Rwanda to visitors from around the world, and to contribute to the sustainable development of the country through responsible tourism practices.</p>
          </div>
          <div className='app__about_welcome_content-item'>
            <p>At Africa Wizzy safari, we offer a wide range of tours and activities, including cultural and historical tours, wildlife safaris, mountain gorilla trekking, and more. Our experienced and knowledgeable guides will ensure that you have a safe and enjoyable experience while exploring the stunning landscapes and rich culture of Rwanda.</p>
            <img src={images.welcome2}/>
          </div>
          <div className='app__about_welcome_content-item'>
            <img src={images.welcome3}/>
            <p>We are proud to have received numerous awards and accolades for our commitment to excellence, including the RDD award and the Excellence award. 
Thank you for choosing Africa Wizzy Safari for your travel needs in Rwanda. We look forward to welcoming you on one of our tours soon!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs