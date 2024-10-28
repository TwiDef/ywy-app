import React from 'react';
import useMoviesQuery from '../../../hooks/useMoviesQuery';
import { Stack } from '@mui/material';

import MainCarousel from '../../ui/MainCarousel/MainCarousel';
import MiniCarousel from '../../ui/MimiCarousel/MiniCarousel';

const Home = () => {

  const {
    responseTop250Movies,
    responseTop250TVShows,
    responseTopPopularAll,
    responseFilms,
    responseCartoons,
    responseSeries,
    isError,
    isLoading,
  } = useMoviesQuery()

  const miniCarouselData = [
    {
      title: "Топ 250 фильмов",
      icon: "",
      url: "/top250-movies",
      data: responseTop250Movies.data,
      autoPlaySpeed: 10000
    },
    {
      title: "Топ 250 телешоу",
      icon: "",
      url: "/top250-TVShows",
      data: responseTop250TVShows.data,
      autoPlaySpeed: 6000
    },
    {
      title: "Топ популярных новинок",
      icon: "",
      url: "/top-popular-all",
      data: responseTopPopularAll.data,
      autoPlaySpeed: 4000
    },
  ]

  return (
    <Stack sx={{ mt: 6 }} >
      <MainCarousel />
      {miniCarouselData.map((row, i) => {
        return (
          <MiniCarousel
            key={i}
            data={row.data}
            title={row.title}
            autoPlaySpeed={row.autoPlaySpeed} />
        )
      })}
    </Stack>
  );
};

export default Home;