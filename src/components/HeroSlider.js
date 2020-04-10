import React, { useState } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './HeroSlider.css';

const HeroSliderConfigs = {
  slidesPerView: 1,
  effect: 'fade',
  loop: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const HeroSlider = ({
  backgroundImage,
}) => {
  console.log("bg")
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={backgroundImage} alt=""/>
        </div>
        {/* <div className="">
          <h1 className="">Slide 1</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div> */}
      </div>
      <div className="hero-slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={backgroundImage} alt=""/>
        </div>
        {/* <div className="">
          <h1 className="">Slide 2</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque,
            ex quibusdam dolorem quae itaque velit. Nobis nesciunt sed corrupti
            ab quia neque, porro laborum error, autem facilis voluptates
            laboriosam?
          </p>
        </div> */}
      </div>
    </Swiper>
  );
};

export default HeroSlider;