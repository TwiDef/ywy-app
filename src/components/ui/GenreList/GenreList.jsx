import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

const GenreList = ({ genres }) => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: { xs: "center", md: "unset" },
          color: theme.white,
          mb: 2,
          fontSize: { xs: 30, md: 40 },
          textShadow: `3px 3px 3px ${theme.black}`
        }}>
        Детали
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 5
        }}>
        <Typography variant="h6" sx={{ color: theme.pale_purple }}>Жанр</Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2
          }}>
          {genres && genres.map(({ genre }, i) => {
            return (
              <Box key={i} sx={{
                p: "4px 10px",
                borderRadius: 8,
                fontWeight: "bold",
                bgcolor: theme.pale_purple,
                color: theme.dark_main
              }}>
                {genre}
              </Box>
            )
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default GenreList;