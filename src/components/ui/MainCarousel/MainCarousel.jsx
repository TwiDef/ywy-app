import React from 'react';
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import { filmCollectionType } from '../../../constants';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { Box } from '@mui/material';

import MainSlide from './MainSlide/MainSlide';

import 'bear-react-carousel/dist/index.css';
import './MainCarousel.css';

const MainCarousel = () => {

  const { data, error, isLoading } = useGetFilmCollectionQuery({
    type: filmCollectionType.TOP_POPULAR_ALL,
    page: 1
  })

  const films = data && data.items.map(film => {
    return (
      <MainSlide film={film} />
    )
  });

  if (data) {
    return (
      <Box >
        <BearCarousel
          data={films}
          height="400px"
          width="100%"
          isEnableNavButton
          isEnableLoop
          /*   isDebug */
          slidesPerView={2}
          isCenteredSlides
          moveEffect={{
            moveFn: moveEffectFn.transformY(50),
            moveTime: '.3s',
          }}
        />
      </Box>
    )
  }
};

export default MainCarousel;