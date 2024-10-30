import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Typography } from '@mui/material';
import { theme } from '../../../theme';

import styles from './MovieCard.module.css';

const MovieCard = ({ film }) => {
  const [onHover, setOnHover] = React.useState(false)

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
        <img width="100%" height="300px" src={film.posterUrlPreview} alt={film.nameOriginal} />
        <div className={onHover ? styles.overlay : ""}></div>
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