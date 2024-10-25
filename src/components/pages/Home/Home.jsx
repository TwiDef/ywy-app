import React from 'react';
import { useGetFilmCollectionQuery } from '../../../services/kinopoiskApi';
import { filmCollectionType } from '../../../constants';
import { Box } from '@mui/material';

import MainCarousel from '../../ui/MainCarousel/MainCarousel';

const Home = () => {
  const { data, error, isLoading } = useGetFilmCollectionQuery({
    type: filmCollectionType.TOP_250_MOVIES,
    page: 1
  })

  return (
    <Box sx={{ mt: 6 }} >
      {data && <MainCarousel films={data.items} />}
    </Box>
  );
};

export default Home;