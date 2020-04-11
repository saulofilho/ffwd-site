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
  posts
}) => {

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <>
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        {posts.map(img => (
          <div className="hero-slide">
            <div
              className="slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
            >
              <p>{img.title}</p>
              <img src={img.featuredImage} alt="" />
            </div>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default ProjetosSlider;