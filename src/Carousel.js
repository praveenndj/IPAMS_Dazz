// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import Carousel1 from './images/Carouselimg1.jpg'
import Carousel2 from './images/Carouselimg2.jpg'
import Carousel3 from './images/Carouselimg3.jpg'
import Carousel4 from './images/Carouselimg4.jpg'
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      image: {Carousel1}, 
      text: 'Text for Image 1',
    },
    {
        id: 2,
        image: {Carousel2}, 
        text: 'Text for Image 2',
      },
      {
        id: 3,
        image: {Carousel3}, 
        text: 'Text for Image 3',
      },
      {
        id: 4,
        image: {Carousel4}, 
        text: 'Text for Image 4',
      },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="carousel-slide" style={{ backgroundImage: `url(${slide.image})` }}>
          <div className="carousel-text">{slide.text}</div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;

