import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, syncWithLocalStorage } from '../../../redux/slices/favoritesSlice';
import { Box, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import StarIcon from '@mui/icons-material/Star';
import BackButton from './../BackButton';
import defaultBgImg from './../../../assets/img/default-movie-bg.jpeg';

import styles from './MoviePreview.module.css';

const MoviePreview = ({ data }) => {
  const dispatch = useDispatch()
  const { favoritesFilms } = useSelector(state => state.favorites)

  const displayFavIcon = () => {
    const findedFilm = favoritesFilms.find(currentFilm => {
      return currentFilm.kinopoiskId === data.kinopoiskId
    })
    if (findedFilm) {
      return "https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/favoriteRemove_20.svg"
    } else {
      return "https://solea-parent.dfs.ivi.ru/icon/ffffff,ffffff/favorite_20.svg"
    }
  }

  const onAddToFav = (e) => {
    e.preventDefault()
    dispatch(addToFavorites(data))
    dispatch(syncWithLocalStorage())
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  return (
    <Box sx={{ pt: 2 }}>
      <BackButton />
      <Stack sx={{
        position: "relative",
        minHeight: "800px",
        backgroundImage: `url(${data.coverUrl ? data.coverUrl : defaultBgImg})`,
        backgroundSize: "cover",
      }}>
        <Box className={styles.overlay}></Box>
        <Stack sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          gap: { xs: 2, md: 4 },
          flexWrap: { xs: "wrap", md: "unset" },
          justifyContent: "center",
          width: "100%",
          pt: 2, pb: 5
        }}>
          <Box>
            <img src={data && data.posterUrlPreview} alt={data && data.nameRu} />
          </Box>
          <Stack sx={{ color: theme.white, width: "100%" }}>
            <Stack sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "center", md: "unset" },
              alignItems: "center",
              gap: 1
            }}>
              <button
                onClick={(e) => onAddToFav(e)}
                className={styles.addToFavoritesBtn}>
                <img
                  width={30}
                  height={30}
                  src={`${displayFavIcon()}`}
                  alt="add-to-favorites" />
              </button>
              <Typography
                variant="h4"
                sx={{
                  lineHeight: 1,
                  textAlign: { xs: "center", md: "unset" },
                  fontSize: { xs: "1.7rem", md: "2.6rem" },
                  textShadow: `3px 3px 3px ${theme.black}`
                }}
              >{data && (data.nameRu ? data.nameRu : data.nameOriginal)}
              </Typography>
            </Stack>
            <Stack sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              justifyContent: { xs: "center", md: "unset" }
            }}>
              <Typography sx={{
                fontSize: { xs: 16, md: 24 }, textShadow: `3px 3px 3px ${theme.black}`
              }}>
                {data && (data.year ? data.year : "uknown year")}
              </Typography><span>|</span>
              <Typography sx={{
                fontSize: { xs: 16, md: 24 },
                textShadow: `3px 3px 3px ${theme.black}`
              }}>
                {data && (data.filmLength ? data.filmLength : "?")} мин
              </Typography><span>|</span>
              <Typography sx={{
                fontSize: { xs: 16, md: 24 },
                textShadow: `3px 3px 3px ${theme.black}`
              }}>
                {data && (data.countries.slice(0, 2)).map(({ country }) => {
                  return country
                }).join(", ")}
              </Typography>
            </Stack>
            <Typography
              sx={{ mt: 2, lineHeight: 1.2, textShadow: `3px 3px 3px ${theme.black}` }}>
              {data && (data.description ? data.description : "описание фильма отсутствует")}
            </Typography>
            <Stack
              sx={{
                mt: { xs: 4, md: "auto" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
                gap: 1
              }}>
              <StarIcon sx={{ width: "3rem", height: "3rem" }} />
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: "bold",
                  textShadow: `3px 3px 3px ${theme.black}`
                }}>
                {data && (data.ratingKinopoisk ? data.ratingKinopoisk : "?")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MoviePreview;