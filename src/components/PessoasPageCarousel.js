import React, { useState } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './HeroSlider.css';

// const HeroSliderConfigs = {
//   slidesPerView: 1,
//   effect: 'fade',
//   loop: true,
//   hashNavigation: {
//     watchState: true,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// };


const PessoasPageCarousel = ({
  posts,
}) => {

  const HorizontalSwiperParams = {
    pagination: {
      el: '.swiper-pagination.swiper-pagination-h',
      clickable: true
    }
  };
  const VerticalSwiperParams = {
    direction: 'vertical',
    pagination: {
      el: 'swiper-pagination-v',
      clickable: true
    }
  };

  // const [parallaxSwiper, setParallaxSwiper] = useState(null);
  // const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  // const parallaxOpacity = 0.5;
  return (
    <>
      {/* <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
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
      </Swiper> */}
      <Swiper {...HorizontalSwiperParams}>
        <div style={{background: "red"}}>
          <h1>as pessoas</h1>
          <Swiper {...VerticalSwiperParams}>
            <div style={{background: "yellow"}}>as pessoas #1</div>
            <div style={{background: "orange"}}>as pessoas #2</div>
          </Swiper>
        </div>
        <div style={{background: "blue"}}>
          <h1>cultura</h1>
          <Swiper {...VerticalSwiperParams}>
            <div>cultura #1</div>
            <div>cultura #2</div>
          </Swiper>
        </div>
        <div style={{background: "green"}}>
          <h1>vagas</h1>
          <Swiper {...VerticalSwiperParams}>
            <div>consumir api</div>
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default PessoasPageCarousel;