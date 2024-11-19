import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useGetSimilarsFilmsQuery } from '../../../services/kinopoiskApi';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { Link, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const SimilarsFilmList = ({ id }) => {

  const { data, isLoading, isError } = useGetSimilarsFilmsQuery({ id })

  const films = data && data.items.map(film => {
    return (
      <Link
        sx={{ textDecoration: "none" }}
        to={`/movie/${film.filmId}`}
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
    <>
      <Typography
        sx={{
          textAlign: { xs: "center", md: "unset" },
          color: theme.white,
          mb: 2,
          fontSize: { xs: 30, md: 40 },
          textShadow: `3px 3px 3px ${theme.black}`
        }}>Похожие кинокартины
      </Typography>
      <BearCarousel
        className="mini-carousel"
        data={films}
        width="100%"
        isEnableNavButton={true}
        isEnableAutoPlay={true}
        spaceBetween={30}
        isEnableLoop={true}
        slidesPerView={5}
        isCenteredSlides={true}
        breakpoints={{
          1200: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 3
          },
          640: {
            slidesPerView: 3
          },
          340: {
            slidesPerView: 2
          }
        }}
      />
    </>
  );
};

export default SimilarsFilmList;