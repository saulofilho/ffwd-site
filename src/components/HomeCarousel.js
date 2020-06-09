import React, { useState } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './HomeCarousel.css';

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
    nextEl: '.swiper-button-next .btn-next-home',
    prevEl: '.swiper-button-prev .btn-prev-home',
  },
};

const HomeCarousel = ({
  filteredPosts,
}) => {

  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;
  return (
    <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
      {filteredPosts.map(project => (
        <div className="home-slide" key={project.slug}>
          <a href={project.slug}>
            <div
              className="home-slide-image"
              data-swiper-parallax={parallaxAmount}
              data-swiper-parallax-opacity={parallaxOpacity}
            >
              <img src={project.HomeImage} alt="" />
              <div className="home-car-texts container">
                <p className="home-car-title default-text-header">{project.ClientTitle}</p>
                <p className="home-car-title default-text-title">{project.CaseTitle}</p>
                <p className="home-car-subtitle">{project.CaseAbout}</p>
              </div>
              {/* <button className="next">next</button> */}
            </div>
          </a>
        </div>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;