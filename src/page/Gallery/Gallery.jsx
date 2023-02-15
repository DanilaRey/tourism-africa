import React from 'react';
import { RiArrowRightSFill} from 'react-icons/ri';
import images from '../../constant/images';
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className='app__gallery'>
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

      <div className='app__gallery-instagram'>
        <button type='button' className='app__gallery-btn'> Open Instagram</button>
      </div>
      <div className='app__gallery-block'>
        <div className='app__gallery-grid'>
            <figure className='gallery__item gallery__item--1'>
              <img src={images.gallery1} className="gallery__img" alt='Image 1'/>
            </figure>
            <figure className='gallery__item gallery__item--2'>
              <img src={images.gallery2} className="gallery__img" alt='Image 2'/>
            </figure>
            <figure className='gallery__item gallery__item--3'>
              <img src={images.gallery3} className="gallery__img" alt='Image 3'/>
            </figure>
            <figure className='gallery__item gallery__item--4'>
              <img src={images.gallery4} className="gallery__img" alt='Image 4'/>
            </figure>
            <figure className='gallery__item gallery__item--5'>
              <img src={images.gallery5} className="gallery__img" alt='Image 5'/>
            </figure>
            <figure className='gallery__item gallery__item--6'>
              <img src={images.gallery6} className="gallery__img" alt='Image 6'/>
            </figure>
            <figure className='gallery__item gallery__item--7'>
              <img src={images.gallery7} className="gallery__img" alt='Image 7'/>
            </figure>
            <figure className='gallery__item gallery__item--8'>
              <img src={images.gallery8} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--9'>
              <img src={images.gallery9} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--10'>
              <img src={images.gallery10} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--11'>
              <img src={images.gallery11} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--12'>
              <img src={images.gallery12} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--13'>
              <img src={images.gallery13} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--14'>
              <img src={images.gallery14} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--15'>
              <img src={images.gallery15} className="gallery__img" alt='Image 8'/>
            </figure>
            <figure className='gallery__item gallery__item--16'>
              <img src={images.gallery16} className="gallery__img" alt='Image 8'/>
            </figure>
        </div>
      </div>

    </div>
  )
}

export default Gallery