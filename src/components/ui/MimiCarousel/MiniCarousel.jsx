import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { theme } from '../../../theme';

import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import 'bear-react-carousel/dist/index.css';
import './MiniCarousel.css';

const MiniCarousel = ({ data, url, title, autoPlaySpeed, icon, isLoading, isError }) => {

  const films = data && data.items.map(film => {
    return (
      <Link
        sx={{ textDecoration: "none" }}
        to={`/movie/${film.kinopoiskId}`}
        component={RouterLink}>
        <Stack sx={{
          display: "flex",
          gap: 1,
          maxHeight: "360px",
          "&:hover": { scale: 1.05 },
          transition: ".1s ease-in-out"
        }}>
          <BearSlideImage imageUrl={film.posterUrl}></BearSlideImage>
          <Typography sx={{ color: theme.white, textAlign: "center", lineHeight: 1.3 }}>
            {film.nameRu ? film.nameRu : film.nameOriginal}
          </Typography>
        </Stack>
      </Link>
    )
  });

  if (isLoading) return <Loader />
  if (isError) return <ErrorMessage />

  return (
    <Stack sx={{ mt: 3, mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <img src={icon} alt={title} width={30} />
        <Typography sx={{ fontSize: 30, lineHeight: 1 }}>
          <Link
            sx={{
              color: theme.white, textDecoration: "none",
              "&:hover": { color: theme.pale_purple }
            }}
            to={`/${url}`}
            component={RouterLink}>{title}</Link>
        </Typography>
      </Box>
      <BearCarousel
        className="mini-carousel"
        data={films}
        width="100%"
        isEnableNavButton={true}
        isEnableAutoPlay={true}
        autoPlayTime={autoPlaySpeed}
        spaceBetween={30}
        isEnableLoop={true}
        slidesPerView={5}
        isCenteredSlides={true}
        breakpoints={{
          1200: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 4
          },
          640: {
            slidesPerView: 3,
          },
          340: {
            slidesPerView: 2
          }
        }}
      />
    </Stack >
  );
};

export default MiniCarousel;