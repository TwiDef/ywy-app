import React from 'react';
import BearCarousel, { moveEffectFn } from 'bear-react-carousel';
import { filmCollectionType } from '../../../constants';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { Box, useMediaQuery } from '@mui/material';

import DesktopSlide from './DesktopSlide/DesktopSlide';
import TabletSlide from './TabletSlide/TabletSlide';
import MobileSlide from './MobileSlide/MobileSlide';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import 'bear-react-carousel/dist/index.css';
import './MainCarousel.css';

const MainCarousel = () => {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTablet = useMediaQuery('(max-width:1200px) and (min-width:768px)');
  const isMobile = useMediaQuery('(max-width:768px)')

  const { data, isError, isLoading } = useGetFilmCollectionQuery({
    type: filmCollectionType[0].type,
    page: 1
  })

  const films = data && data.items.map(film => {
    if (isDesktop) {
      return <DesktopSlide film={film} />
    }
    if (isTablet) {
      return <TabletSlide film={film} />
    }
    if (isMobile) {
      return <MobileSlide film={film} />
    }
  });

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <ErrorMessage />
  }

  if (data && isDesktop) {
    return (
      <Box sx={{ mb: 4 }}>
        <BearCarousel
          className="desktop-carousel"
          data={films}
          width="100%"
          isEnableNavButton={true}
          isEnableAutoPlay={true}
          autoPlayTime={3000}
          isEnableLoop={true}
          slidesPerView={2}
          isCenteredSlides={true}
          moveEffect={{
            moveFn: moveEffectFn.transformY(50),
            moveTime: '.3s',
          }}
        />
      </Box>
    )
  }

  if (data && isTablet) {
    return (
      <BearCarousel
        className="tablet-carousel"
        data={films}
        width="100%"
        isEnableNavButton={true}
        isEnableAutoPlay={true}
        autoPlayTime={3000}
        isEnableLoop={true}
        slidesPerView={3}
        isCenteredSlides={true}
        breakpoints={{
          900: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          }
        }}
      />
    )
  }

  if (data && isMobile) {
    return (
      <BearCarousel
        className="mobile-carousel"
        data={films}
        height="500px"
        width="100%"
        isEnableNavButton={true}
        isEnableAutoPlay={true}
        autoPlayTime={2000}
        isEnableLoop={true}
        slidesPerView={1}
        isCenteredSlides={false}
        breakpoints={{
          500: {
            height: "450px",
            slidesPerView: 2
          }
        }} />
    )
  }
};

export default MainCarousel;