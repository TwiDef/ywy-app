import React from 'react';
import { useLocation } from 'react-router-dom';
import { filmCollectionType } from '../../../constants';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { useSelector } from 'react-redux';

import Loader from '../../ui/Loader/Loader';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';
import MovieList from '../../ui/MovieList/MovieList';

const MovieCollectionList = () => {
  const { page } = useSelector(state => state.query)
  const location = useLocation()
  const pathname = location.pathname.replace("/", "")

  const currentCollectionType = filmCollectionType.filter((collection) => pathname === collection.url)

  const { data, isLoading, isError } = useGetFilmCollectionQuery({
    type: currentCollectionType[0].type,
    page
  })

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (isLoading) return <Loader />

  if (isError) return <ErrorMessage />

  return (
    <MovieList data={data} title={currentCollectionType[0].title} />
  );
};

export default MovieCollectionList;