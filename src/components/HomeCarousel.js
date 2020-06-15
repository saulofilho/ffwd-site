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
  }
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
              <div 
                className="teste"
                style={{
                  backgroundImage: `url(${project.HomeImage} )`
                }}
              />
              {/* <img src={project.HomeImage} alt="" /> */}
              <div className="home-car-texts container">
                <p className="default-text-header">{project.ClientTitle}</p>
                <h1 className="default-text-title">{project.title}</h1>
                <p className="default-text-about">{project.HomeDescription}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;