import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetFilmQuery } from '../../../services/kinopoiskApi';
import { Box, Stack } from '@mui/material';

import Loader from './../../ui/Loader';
import ErrorMessage from './../../ui/ErrorMessage';
import MoviePreview from '../../ui/MoviePreview';
import StaffList from '../../ui/StaffList/StaffList';

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
      <Box style={{ height: "300px", border: "1px solid #fff", color: "#fff" }}>video</Box>
    </Stack >

  );
};

export default MovieDetail;