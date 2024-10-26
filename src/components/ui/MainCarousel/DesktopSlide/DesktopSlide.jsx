import React from 'react';
import { Box, Button, Divider, Rating, Stack, Typography } from '@mui/material';
import { theme } from '../../../../theme';

const DesktopSlide = ({ film }) => {

  return (
    <Stack key={film.kinopoiskId} sx={{ display: "flex", flexDirection: "row", height: "100%" }}>
      <Box sx={{ width: "50%", height: "400px" }}>
        <img src={film.posterUrlPreview} alt="poster" style={{ width: "100%" }} />
      </Box>
      <Stack
        sx={{
          padding: "10px 20px ",
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "400px",
          bgcolor: theme.light_main,
          color: theme.white
        }}>
        <Typography textAlign="center" variant="h6" sx={{ lineHeight: 1, pb: 1 }}>
          {film.nameRu ? film.nameRu : film.nameOriginal}
        </Typography>
        <Divider sx={{ bgcolor: theme.white }} />
        <Typography
          sx={{ lineHeight: 1.1, fontSize: 16, pt: 1 }}
          variant="body1">
          {film.description ? `${film.description.slice(0, 130)}...` : "описание отсутствует"}
        </Typography>
        <Box
          sx={{ lineHeight: 1.5, fontSize: 18, mt: 1 }}>
          Жанр: {film.genres.slice(0, 3).map(({ genre }, i) => {
            return (
              <Typography key={i} sx={{ lineHeight: 1.1, fontSize: 16 }}>
                &#x2022; {genre}
              </Typography>)
          })}
        </Box>

        <Stack sx={{ mt: "auto" }}>
          <Box sx={{ margin: "10px auto 0" }}>
            <Rating
              readOnly
              size="medium"
              defaultValue={film.ratingKinopoisk}
              precision={0.5}
              value={film.ratingKinopoisk / 2} />
          </Box>
          <Box sx={{ margin: "0 auto" }}>
            <Button size="small" sx={{
              fontWeight: "bold",
              fontSize: "14px",
              transition: ".1s ease-in-out",
              "&:hover": { scale: 1.1 },
              bgcolor: theme.pale_purple, color: theme.dark_main
            }} variant="contained">смотреть</Button>
          </Box>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center", mt: 1
            }}>
            <Button
              href={`https://www.kinopoisk.ru/film/${film.kinopoiskId}/`}
              target="_black"
              sx={{
                transition: ".1s ease-in-out",
                "&:hover": { scale: 1.1 },
                fontSize: "14px",
                bgcolor: theme.dark_main,
                width: "100px"
              }} size="small" variant="contained">kinopoisk</Button>
            <Button
              href={`https://www.imdb.com/title/${film.imdbId}/`}
              target="_black"
              sx={{
                transition: ".1s ease-in-out",
                "&:hover": { scale: 1.1 },
                fontSize: "14px",
                bgcolor: theme.dark_main,
                width: "100px"
              }} size="small" variant="contained">imdb</Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  );
};

export default DesktopSlide;