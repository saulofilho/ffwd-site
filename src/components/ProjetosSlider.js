import React, { useState } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './ProjetosSlider.css';

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

const ProjetosSlider = ({
  cases
}) => {

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <>
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        {cases.map(img => (
          <div 
            key={img.excerpt}
            className="cases-slide"
          >
            <div
              className="cases-slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
            >
              <img src={img.featuredImage} alt="" />
              <div className="cases-text">
                <p>{img.title}</p>
                <p>{img.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default ProjetosSlider;