import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { filmCollectionType } from '../../../constants';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { useSelector } from 'react-redux';
import { Stack, Typography } from '@mui/material';

import MovieCard from '../../ui/MovieCard/MovieCard';
import Loader from '../../ui/Loader/Loader';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';
import { theme } from '../../../theme';

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
    <Stack>
      <Typography
        sx={{
          mt: 2, mb: 2,
          "@media (max-width: 480px)": { fontSize: 22, mb: 3, mt: 3, textAlign: "center" }
        }}
        variant="h4"
        color={theme.white}>
        {currentCollectionType[0].title}
      </Typography>
      <Stack sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        mb: 5
      }}>
        {data && data.items.map((film, i) => {
          return (
            <MovieCard key={i} film={film} />
          )
        })}
      </Stack>
    </Stack>
  );
};

export default MovieCollectionList;