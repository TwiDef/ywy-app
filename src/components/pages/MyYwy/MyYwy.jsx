import React from 'react';
import { useSelector } from 'react-redux';

import MovieList from '../../ui/MovieList/MovieList';

const MyYwy = () => {
  const { favoritesFilms } = useSelector(state => state.favorites)
  const data = {
    items: [...favoritesFilms]
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <MovieList data={data} title={"Буду смотреть"} />
    </>
  );
};

export default MyYwy;