import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Typography } from '@mui/material';
import { theme } from '../../../../theme';

const TabletSlide = ({ film }) => {

  return (
    <Link
      sx={{ textDecoration: "none" }}
      to={`/movies/${film.kinopoiskId}`}
      component={RouterLink}>
      <Stack
        onClick={() => console.log(film)}
        sx={{ height: "100%", p: 3 }}>
        <img
          style={{ width: "100%", height: "300px", position: "relative" }}
          src={film.posterUrlPreview} alt={film.nameOriginal} />
        <Typography sx={{ color: theme.white, textAlign: "center", lineHeight: 1, mt: 1 }}>{film.nameRu}</Typography>
      </Stack>
    </Link>
  );
};

export default TabletSlide;