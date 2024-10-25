import React from 'react';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { filmCollectionType } from '../../../constants';
import MainCarousel from '../../ui/MainCarousel/MainCarousel';

const Home = () => {
  const { data, error, isLoading } = useGetFilmCollectionQuery({
    type: filmCollectionType.TOP_250_MOVIES,
    page: 1
  })

  return (
    <>
      {data && <MainCarousel films={data.items} />}
    </>
  );
};

export default Home;