import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilmQuery } from '../../../services/kinopoiskApi';
import { Box, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import Loader from './../../ui/Loader';
import ErrorMessage from './../../ui/ErrorMessage';
import MoviePreview from '../../ui/MoviePreview';
import StaffList from '../../ui/StaffList/StaffList';
import ScreenshotCarousel from '../../ui/ScreenshotCarousel';
import GenreList from '../../ui/GenreList/GenreList';
import KinoboxPlayer from '../../ui/KinoboxPlayer/KinoboxPlayer';

const MovieDetail = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isError } = useGetFilmQuery({ id })

  if (isLoading) return <Loader />
  if (isError) return <ErrorMessage />

  return (
    <Stack className="movie-detail-wrapper">
      <MoviePreview data={data && data} />
      <StaffList id={id} />
      <ScreenshotCarousel id={id} />
      <GenreList genres={data && data.genres} />
      <Box sx={{ mt: 10 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: theme.white,
            mb: 2,
            fontSize: { xs: 30, md: 40 },
            textShadow: `3px 3px 3px ${theme.black}`
          }}>
          Смотреть онлайн
        </Typography>
        <KinoboxPlayer
          kinopoiskId={data && data.kinopoiskId}
          imdbId={data && data.imdbId}
          poster={data && data.posterUrl} />
      </Box>
    </Stack >

  );
};

export default MovieDetail;