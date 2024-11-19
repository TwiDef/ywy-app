import React from 'react';
import { Box, Typography } from '@mui/material';

const QuotaError = () => {
  return (
    <Box m="auto" height="50vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <img width={100} src="https://cdn-icons-png.flaticon.com/512/1213/1213626.png" alt="quota-error" />
      <Typography
        textAlign="center"
        variant="h6"
        color="#cacaca"
        fontWeight={600}>На сегодня лимит запросов исчерпан :(</Typography>
    </Box>
  );
};

export default QuotaError;