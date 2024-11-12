import React from 'react';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { useGetFilmImagesQuery } from '../../../services/kinopoiskApi';
import { Box, Typography } from '@mui/material';
import { theme } from '../../../theme';

import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

import './ScreenshotCarousel.css';

const ScreenshotCarousel = ({ id }) => {

  const { data, isLoading, isError } = useGetFilmImagesQuery({
    id,
    type: "SCREENSHOT"
  })

  if (isLoading) return <Loader />
  if (isError) return <ErrorMessage />

  const screenshots = data && data.items.map(screenshot => {
    return (
      <BearSlideImage imageUrl={screenshot.imageUrl} />
    )
  });

  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: { xs: "center", md: "unset" },
          color: theme.white,
          mb: 2,
          fontSize: { xs: 30, md: 40 },
          textShadow: `3px 3px 3px ${theme.black}`
        }}>
        Кадры из фильма
      </Typography>
      <BearCarousel
        className="screenshot-carousel"
        data={screenshots}
        width="100%"
        spaceBetween={20}
        isEnableLoop={true}
        isEnableNavButton={true}
        slidesPerView={1}
        breakpoints={{
          1200: {
            slidesPerView: 3
          },
          900: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
            isCenteredSlides: true
          },
          640: {
            slidesPerView: 1,
            isCenteredSlides: true
          },
          340: {
            slidesPerView: 1,
            isCenteredSlides: true
          }
        }}
      />
    </Box>
  );
};

export default ScreenshotCarousel;