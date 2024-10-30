import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { filmCollectionType } from '../../../constants';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import MovieCard from '../../ui/MovieCard/MovieCard';
import Loader from '../../ui/Loader/Loader';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';

const MovieCollectionList = () => {
  const { page } = useSelector(state => state.query)
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname.replace("/", "")

  const currentCollectionType = filmCollectionType.filter((collection) => pathname === collection.url)

  const { data, isLoading, isError } = useGetFilmCollectionQuery({
    type: currentCollectionType[0].type,
    page
  })

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (isLoading) return <Loader />

  if (isError) return <ErrorMessage />

  return (
    <Stack sx={{
      display: "flex",
      gap: 4,
      justifyContent: "space-evenly",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      mt: 5,
      mb: 5
    }}>
      {data && data.items.map((film, i) => {
        return (
          <MovieCard key={i} film={film} />
        )
      })}
    </Stack>
  );
};

export default MovieCollectionList;