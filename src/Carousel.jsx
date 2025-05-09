import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length ? 1 : prev + 1));
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? images.length : prev - 1));
  };

  return (
    <div className="carousel w-[100%] max-w-full flex flex-wrap justify-center">
        <div className="carousel-item relative w-[40%]">
            <img src={images[currentSlide - 1]} className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button onClick={goToPreviousSlide} className="btn btn-circle">❮</button>
            <button onClick={goToNextSlide} className="btn btn-circle">❯</button>
            </div>
        </div>
        </div>
  );
};

export default Carousel;
