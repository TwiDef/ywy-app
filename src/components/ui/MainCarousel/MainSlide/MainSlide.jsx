import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { theme } from '../../../../theme';

const MainSlide = ({ film }) => {
  return (
    <Stack key={film.kinopoiskId} sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ width: "50%", height: "400px" }}>
        <img src={film.posterUrlPreview} alt="poster" style={{ width: "100%" }} />
      </Box>
      <Stack
        sx={{
          p: 3,
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
          {film.description ? `${film.description.slice(0, 200)}...` : "описание отсутствует"}
        </Typography>
        <Typography
          sx={{ lineHeight: 1.5, fontSize: 18 }}>
          Жанр: {film.genres.slice(0, 3).map(({ genre }) => {
            return (
              <Typography sx={{ lineHeight: 1.1, fontSize: 16 }}>
                &#x2022; {genre}
              </Typography>)
          })}
        </Typography>



      </Stack>

    </Stack >
  );
};

export default MainSlide;