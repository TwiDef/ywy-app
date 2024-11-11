import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, Stack, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../../../../theme';

const MobileSlide = ({ film }) => {
  const isMobile = useMediaQuery('(min-width:500px)')

  return (
    <Link
      sx={{ textDecoration: "none" }}
      to={`/movie/${film.kinopoiskId}`}
      component={RouterLink}>
      <Stack
        onClick={() => console.log(film)}
        sx={{ width: "100%", height: "100%", p: 1 }}>
        {isMobile ?
          <img
            style={{ height: "100%", padding: "0  ", position: "relative" }}
            src={film.posterUrlPreview} alt={film.nameOriginal} />
          :
          <img
            style={{ height: "80%", padding: "0 40px ", position: "relative" }}
            src={film.posterUrlPreview} alt={film.nameOriginal} />}
        <Typography sx={{ color: theme.white, textAlign: "center", lineHeight: 1, mt: 1 }}>{film.nameRu}</Typography>
      </Stack>
    </Link>
  );
};

export default MobileSlide;
