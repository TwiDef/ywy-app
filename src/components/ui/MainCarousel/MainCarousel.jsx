import React from 'react';
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';

import MainSlide from './MainSlide/MainSlide';

import 'bear-react-carousel/dist/index.css';

const MainCarousel = ({ films }) => {
  console.log(films)

  const data = films.map(film => {
    return (
      <MainSlide film={film} />
    )
  });

  return (
    <BearCarousel
      data={data}
      height="400px"
      width="100%"
      isEnableNavButton
      isEnableLoop
      isDebug
      slidesPerView={2}
      isCenteredSlides
      moveEffect={{
        moveFn: moveEffectFn.transformY(50),
        moveTime: '.3s',
      }}
    />
  );
};

export default MainCarousel;