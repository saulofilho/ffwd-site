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

const PessoasPageCarousel = ({
  posts,
}) => {

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <>
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        {posts.map(img => (
          <div 
            key={img.title}
            className="pessoas-slide"
          >
            <div
              className="pessoas-slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
            >
              <img src={img.featuredImage} alt="" />
              <a href={img.slug}>teste</a>
            </div>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default PessoasPageCarousel;