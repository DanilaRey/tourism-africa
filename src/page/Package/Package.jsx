import React from 'react';
import './Package.css';
import { RiArrowRightSFill} from 'react-icons/ri';
import images from '../../constant/images';

const Package = () => {
  return (
    <div className='app__tour'>
      <div className='app__header_top'>
        <div className='app__header_top-content'>
          <h1 className='app__header_top-content-title'>Tour Package</h1>
          <div className='app__header_top-content_subtitle'>
          <p>Home</p>
          <RiArrowRightSFill style={{color: "var(--color-green)"}}/>
          <span>Tour Package</span>
          </div>
        </div>
      </div>

      <div className='app__tour-travel'>
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
      </div>
    </div>
  )
}

export default Package