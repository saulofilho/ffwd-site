import React from 'react';
import 'swiper/css/swiper.css';
import Swiper from 'react-id-swiper';
import './PessoasPageCarousel.css';

const PessoasPageCarousel = ({
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
            <div className="pessoas-car-hero">
              as pessoas
            </div>
            <div>as pessoas #1</div>
            <div>as pessoas #2</div>
          </Swiper>
        </div>
        <div>
          <Swiper {...VerticalSwiperParams}>
            <div className="pessoas-car-hero">
              cultura
            </div>
            <div>cultura #1</div>
            <div>cultura #2</div>
          </Swiper>
        </div>
        <div>
          <Swiper {...VerticalSwiperParams}>
          <div className="pessoas-car-hero">
            vagas
          </div>
          {posts.map(img => (
            <a className="pessoas-car-img" href={img.slug} key={img.featuredImage}>
              <img src={img.featuredImage} alt=""/>
            </a>
            ))}
          </Swiper>
        </div>
      </Swiper>
    </>
  );
};

export default PessoasPageCarousel;