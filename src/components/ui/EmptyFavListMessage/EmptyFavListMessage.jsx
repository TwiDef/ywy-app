import React from 'react';
import { Box, Typography } from '@mui/material';

const EmptyFavListMessage = () => {
  return (
    <Box m="auto" height="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <img width={100} src="https://cdn-icons-png.flaticon.com/512/11471/11471592.png" alt="empty-fav-list" />
      <Typography
        textAlign="center"
        variant="h6"
        color="#cacaca"
        fontWeight={600}>Извините, у вас пока нет избранных фильмов</Typography>
    </Box>
  );
};

export default EmptyFavListMessage;