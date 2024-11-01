import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { addToFavorites } from '../../../redux/slices/favoritesSlice';
import { Box, Link, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import styles from './MovieCard.module.css';
import { useDispatch, useSelector } from 'react-redux';

const MovieCard = ({ film }) => {
  const dispatch = useDispatch()
  const { favoritesFilms } = useSelector(state => state.favorites)
  const [onHover, setOnHover] = React.useState(false)

  const displayFavIcon = () => {
    const findedFilm = favoritesFilms.find(currentFilm => {
      return currentFilm.kinopoiskId === film.kinopoiskId
    })
    if (findedFilm) {
      return "https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/favoriteRemove_20.svg"
    } else {
      return "https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/favorite_20.svg"
    }
  }

  const onAddToFav = (e) => {
    e.preventDefault()
    dispatch(addToFavorites(film))
  }

  return (
    <Link
      sx={{ textDecoration: "none" }}
      to={`/movie/${film.kinopoiskId}`}
      component={RouterLink}>
      <Box
        className={styles.movieCard}
        onMouseEnter={() => setOnHover(prev => !prev)}
        onMouseLeave={() => setOnHover(false)}
        sx={{ width: 200, height: "360px", display: "flex", flexDirection: "column", gap: 1 }}>
        <img
          width="100%"
          height="300px"
          src={film.posterUrlPreview}
          alt={film.nameOriginal} />
        {onHover &&
          <Box className={onHover ? styles.overlay : ""}>
            <Stack
              sx={{ height: "100%", display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={(e) => onAddToFav(e)}
                className={styles.addToFavoritesBtn}>
                <img
                  width={30}
                  height={30}
                  src={`${displayFavIcon()}`}
                  alt="add-to-favorites" />
              </button>
              <Stack sx={{ p: 2, display: "flex", flexDirection: "column", color: theme.white }}>
                <Typography
                  sx={{ fontSize: 30, fontWeight: "bold" }}>
                  {film.ratingKinopoisk ? film.ratingKinopoisk : film.ratingImdb}
                </Typography>
                <Typography sx={{ fontSize: 22 }}>{film.year ? film.year : ""}</Typography>
                {film.genres && film.genres.map(({ genre }, i) => {
                  return (
                    <Typography
                      sx={{ lineHeight: 1.2, fontSize: 17 }}
                      key={i}>{genre}</Typography>
                  )
                })}
              </Stack>
            </Stack>
          </Box>}
        <Typography
          sx={{ lineHeight: 1, textAlign: "center" }}
          variant="body1"
          color={theme.white}>
          {film.nameRu ? film.nameRu : film.nameOriginal}
        </Typography>
      </Box>
    </Link>
  );
};

export default MovieCard;