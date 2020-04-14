import React, { useState } from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './SobrePageCarousel.css';

const SobrePageCarousel = ({
  posts,
}) => {

  const HorizontalSwiperParams = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: '.swiper-pagination.swiper-pagination-h',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  const VerticalSwiperParams = {
    slidesPerView: 1,
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
      clickable: true
    },
    mousewheel: true
  }

  return (
    <>
      <Swiper {...HorizontalSwiperParams}>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="sobre-car-vert-nos-somos">
              nos somos
            </div>
            <div className="sobre-car-vert-one">nos somos</div>
            <div className="sobre-car-vert-two">nos somos</div>
            <div className="sobre-car-vert-three">nos somos</div>
            <div className="sobre-car-vert-four">nos somos</div>
          </Swiper>
        </div>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="sobre-car-vert-servicos">
              servicos
            </div>
            <div className="sobre-car-vert-one">servicos</div>
            <div className="sobre-car-vert-two">servicos</div>
            <div className="sobre-car-vert-three">servicos</div>
            <div className="sobre-car-vert-four">servicos</div>
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default SobrePageCarousel;