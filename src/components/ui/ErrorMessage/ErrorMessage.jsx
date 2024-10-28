import React from 'react';
import { Box, Typography } from '@mui/material';

const ErrorMessage = () => {
  return (
    <Box m="auto" height="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <img width={100} src="https://cdn-icons-png.flaticon.com/512/10308/10308565.png " alt="error" />
      <Typography
        textAlign="center"
        variant="h6"
        color="#cacaca"
        fontWeight={600}>Что-то пошло не так :(</Typography>
    </Box>
  );
};

export default ErrorMessage;