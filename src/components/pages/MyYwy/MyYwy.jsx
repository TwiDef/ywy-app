import React from 'react';
import { useSelector } from 'react-redux';

import MovieList from '../../ui/MovieList/MovieList';
import EmptyFavListMessage from '../../ui/EmptyFavListMessage';

const MyYwy = () => {
  const { favoritesFilms } = useSelector(state => state.favorites)
  const data = {
    items: [...favoritesFilms]
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!data.items.length) {
    return <EmptyFavListMessage />
  }

  return (
    <>
      <MovieList data={data} title={"Буду смотреть"} />
    </>
  );
};

export default MyYwy;