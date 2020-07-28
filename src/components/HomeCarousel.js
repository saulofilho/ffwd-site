import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './HomeCarousel.css';

const HeroSliderConfigs = {
  slidesPerView: 1,
  loop: true,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: '.swiper-pagination-home',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="dot swiper-pagination-bullet">${index}</span>`;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};

const HomeCarousel = ({
  filteredPosts,
}) => {

  return (
    <>
      <Swiper {...HeroSliderConfigs}>
        {filteredPosts.map(project => (
          <div className="home-slide" key={project.slug} data-hash={project.title.replace(/\s/g, "")}>
              <div
                className="home-slide-image"
              >
                <div 
                  className="home-image display-none-mob"
                  style={{
                    backgroundImage: `url(${project.HomeImage} )`
                  }}
                />
                <div 
                  className="home-image display-none-desk"
                  style={{
                    backgroundImage: `url(${project.HomeImageMob} )`
                  }}
                />
                <div className="home-car-texts">
                  <p className="default-text-header container">
                    {project.ClientTitle}
                  </p>
                  <h1 className="container">
                    {project.title}
                  </h1>
                  <p className="default-text-about container">
                    {project.HomeDescription}
                  </p>
                  <div className="link-slug container">
                    <a href={project.slug}>
                        clique para conferir o case
                    </a>
                  </div>
                </div>
              </div>
          </div>
        ))}
      </Swiper>
    </>
  );
};

export default HomeCarousel;