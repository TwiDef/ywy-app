import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ data, title }) => {

  const navigate = useNavigate()
  return (
    <Stack>
      <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{
            bgcolor: theme.pale_purple,
            color: theme.dark_main,
            display: "flex",
            alignItems: "center",
            gap: 0.5
          }}
          variant="contained"
          color="primary">
          <Typography sx={{ fontWeight: "bold", fontSize: 20, transform: "rotate(180deg)" }}> &#x279C; </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>назад</Typography>
        </Button>
        <Typography
          sx={{
            mt: 2, mb: 2,
            "@media (max-width: 480px)": { fontSize: 22, mb: 3, mt: 3, textAlign: "center" }
          }}
          variant="h4"
          color={theme.white}>
          {title}
        </Typography>
      </Stack>
      <Stack sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        mb: 5
      }}>
        {data && data.items.map((film, i) => {
          return (
            <MovieCard key={i} film={film} />
          )
        })}
      </Stack>
    </Stack>
  );
};

export default MovieList;