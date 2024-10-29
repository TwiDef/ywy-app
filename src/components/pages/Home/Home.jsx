import React from 'react';
import useMoviesQuery from '../../../hooks/useMoviesQuery';
import { filmCollectionType } from '../../../constants';
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
      icon: "https://cdn-icons-png.flaticon.com/512/3884/3884732.png",
      url: filmCollectionType[1].url,
      data: responseTop250Movies.data,
      autoPlaySpeed: 10000
    },
    {
      title: "Топ 250 телешоу",
      icon: "https://cdn-icons-png.flaticon.com/512/2789/2789063.png",
      url: filmCollectionType[2].url,
      data: responseTop250TVShows.data,
      autoPlaySpeed: 6000
    },
    {
      title: "Топ популярных новинок",
      icon: "https://cdn-icons-png.flaticon.com/512/6348/6348550.png",
      url: filmCollectionType[3].url,
      data: responseTopPopularAll.data,
      autoPlaySpeed: 4000
    },
    {
      title: "Фильмы",
      icon: "https://cdn-icons-png.flaticon.com/512/4831/4831192.png",
      url: "films",
      data: responseFilms.data,
      autoPlaySpeed: 6000
    },
    {
      title: "Сериалы",
      icon: "https://cdn-icons-png.flaticon.com/512/3163/3163478.png",
      url: "series",
      data: responseSeries.data,
      autoPlaySpeed: 10000
    },
    {
      title: "Мультфильмы",
      icon: "https://cdn-icons-png.flaticon.com/512/2024/2024058.png",
      url: "cartoons",
      data: responseCartoons.data,
      autoPlaySpeed: 8000
    },
  ]

  return (
    <Stack sx={{ mt: 6 }} >
      <MainCarousel />
      {miniCarouselData.map((row, i) => {
        return (
          <MiniCarousel
            key={i}
            url={row.url}
            data={row.data}
            title={row.title}
            icon={row.icon}
            autoPlaySpeed={row.autoPlaySpeed}
            isLoading={isLoading}
            isError={isError} />
        )
      })}
    </Stack>
  );
};

export default Home;