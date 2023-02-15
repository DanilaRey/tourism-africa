import React, { useRef } from 'react';
import './Home.css';
import images from '../../constant/images';
import data from '../../constant/data';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { AiFillCar, AiFillContacts, AiOutlineLike } from 'react-icons/ai';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const PopularCard = ({populars: {imgUrl, title, subtitle}}) => (
  <div className='app__home_popular-card'>
    <img src={imgUrl} alt="pop-image" className='pop-img'/>
    <div className='app__home_popular-card_content'>
      <h3 className='popular-card_title'>{title}</h3>
      <p className='p__popular'>{subtitle}</p>
    </div>
  </div>
)

const Home = () => {

  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction == 'left') {
      current.scrollLeft -=400;
    } else {
      current.scrollLeft +=400;
    }
  }

  return (
    <div className='app__home'>
        <div className='app__home-experience'>
          <div className='app__home-experience_content'>
            <h1 className='app__home-experience_content-title'>Experience the beauty <br></br>of Rwanda with us</h1>
            <p className='p__subtilte'>Discover the Land of a Thousand Hills</p>
          </div>
        </div>

        <div className='app__home-package'>
          <div className='app__home-package_head'>
            <p>Choose your Package</p>
            <h2>Select your Best Package<br></br> for your Travel</h2>
          </div>
          <div className='app__home-package_block'>
            <div className='app__home-package_block_item'>
            <img src={images.giraff}/>
              <h3>Akagera National Park</h3>
              <p>Visitors to Akagera National Park<br></br> can take part in a range of<br></br>  activities, including game drives,<br></br>  boat safaris, bird watching, and<br></br>  nature walks.</p>
              <button type='button' className='custom__button'>Learn More</button>
            </div>
            <div className='app__home-package_block_item'>
              <img src={images.forest}/>
              <h3>Akagera National Park</h3>
              <p>Visitors to Akagera National Park<br></br> can take part in a range of<br></br>  activities, including game drives,<br></br>  boat safaris, bird watching, and<br></br>  nature walks.</p>
              <button type='button' className='custom__button'>Learn More</button>
            </div>
            <div className='app__home-package_block_item'>
            <img src={images.sea}/>
              <h3>Akagera National Park</h3>
              <p>Visitors to Akagera National Park<br></br> can take part in a range of<br></br>  activities, including game drives,<br></br>  boat safaris, bird watching, and<br></br>  nature walks.</p>
              <button type='button' className='custom__button'>Learn More</button>
            </div>
          </div>
          
          <div className='app__home-package_block'>
            <div className='app__home-package_block_item'>
            <img src={images.giraff} alt="giraff"/>
              <h3>Akagera National Park</h3>
              <p>Visitors to Akagera National Park<br></br> can take part in a range of<br></br>  activities, including game drives,<br></br>  boat safaris, bird watching, and<br></br>  nature walks.</p>
              <button type='button' className='custom__button'>Learn More</button>
            </div>
            <div className='app__home-package_block_item'>
              <img src={images.forest}/>
              <h3>Akagera National Park</h3>
              <p>Visitors to Akagera National Park<br></br> can take part in a range of<br></br>  activities, including game drives,<br></br>  boat safaris, bird watching, and<br></br>  nature walks.</p>
              <button type='button' className='custom__button'>Learn More</button>
            </div>
            <div className='app__home-package_block_item'>
            <img src={images.sea}/>
              <h3>Akagera National Park</h3>
              <p>Visitors to Akagera National Park<br></br> can take part in a range of<br></br>  activities, including game drives,<br></br>  boat safaris, bird watching, and<br></br>  nature walks.</p>
              <button type='button' className='custom__button'>Learn More</button>
            </div>
          </div>
        </div>

        <div className='app__home-popular'>
          <div className='app__home-package_head'>
            <p>Popular Destinations</p>
            <h2>Select Our Best Popular<br></br>Destinations</h2>
          </div>
          <div className='app__home-images_arrows'>
            <BsArrowLeftShort className='app__home-arrow' onClick={() => scroll('left')}/>
            <BsArrowRightShort className='app__home-arrow' onClick={() => scroll('right')}/>
          </div>
          <div className='app__home-popular-images flex__center'>
            <div className='app__home-popular-images_container' ref={scrollRef}>
              {data.popular.map((populars) => <PopularCard populars={populars} key={populars.title}/> )}
            </div>
          </div>
        </div>

        <div className='app__home-about'>
          <div className='app__home-package_head'>
            <p>Popular Destinations</p>
            <h2>Why Travel with Africa<br></br>wizzy Safari</h2>
          </div>
          <div className='app__home-about_content flex__center'>
            <div className='app__home-about_content-item'>
              <i className='i__about'><AiFillCar/></i>
              <p className='p__about'>100+ tours around Rwanda</p>
            </div>
            <div className='app__home-about_content-item'>
              <i className='i__about'><IoCheckmarkCircleOutline/></i>
              <p className='p__about'>100% Trusted travel agency</p>
            </div>
            <div className='app__home-about_content-item'>
              <i className='i__about'><AiFillContacts/></i>
              <p className='p__about'>10 years of travel experience</p>
            </div>
            <div className='app__home-about_content-item'>
              <i className='i__about'><AiOutlineLike/></i>
              <p className='p__about'>90% of travelors are happy</p>
            </div>
          </div>
        </div>

        <div className='app__home-feedback flex__center'>
          <div className='app__home-package_head'>
            <p>Popular Destinations</p>
            <h2>Why Travel with Africa<br></br>wizzy Safari</h2>
          </div>
          <div className='app__home-feedback_content'>
            <div className='app__home-feedback_content-card'>
              <img src={images.clients}/>
              <h3>Emma Waston</h3>
              <p>I recently went on a tour with<br></br> XYZ Tourism Company and was<br></br> extremely impressed with the<br></br> level of professionalism and <br></br>organization.</p>
            </div>
            <div className='app__home-feedback_content-card'>
              <img src={images.clients}/>
              <h3>Emma Waston</h3>
              <p>I recently went on a tour with<br></br> XYZ Tourism Company and was<br></br> extremely impressed with the<br></br> level of professionalism and <br></br>organization.</p>
            </div>
            <div className='app__home-feedback_content-card'>
              <img src={images.clients}/>
              <h3>Emma Waston</h3>
              <p>I recently went on a tour with<br></br> XYZ Tourism Company and was<br></br> extremely impressed with the<br></br> level of professionalism and <br></br>organization.</p>
            </div>
            <div className='app__home-feedback_content-card'>
              <img src={images.clients}/>
              <h3>Emma Waston</h3>
              <p>I recently went on a tour with<br></br> XYZ Tourism Company and was<br></br> extremely impressed with the<br></br> level of professionalism and <br></br>organization.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home