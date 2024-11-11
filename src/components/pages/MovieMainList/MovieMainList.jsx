import React from 'react';
import { useLocation } from 'react-router-dom';
import { NAVBAR_LIST } from '../../../constants';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi';
import { useSelector } from 'react-redux';

import Loader from '../../ui/Loader/Loader';
import ErrorMessage from '../../ui/ErrorMessage/ErrorMessage';
import MovieList from '../../ui/MovieList/MovieList';

const MovieMainList = () => {
  const { page, order, genreId } = useSelector(state => state.query)
  const location = useLocation()
  const pathname = location.pathname.replace("/", "")

  const currentMainListType = NAVBAR_LIST
    .slice(1, 4)
    .filter((collection) => pathname === collection.url)

  const { data, isFetching, isLoading, isError } = useGetFilmsQuery({
    type: currentMainListType[0].type,
    order,
    genreId: currentMainListType[0].url === "cartoons" ? 18 : genreId,
    page
  })

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (isLoading) return <Loader />

  if (isError) return <ErrorMessage />

  return (
    <MovieList data={data} isFetching={isFetching} title={currentMainListType[0].title} />
  );
};

export default MovieMainList;