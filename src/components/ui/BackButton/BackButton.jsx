import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { theme } from '../../../theme';

const BackButton = () => {
  const navigate = useNavigate()

  return (
    <Button
      onClick={() => navigate(-1)}
      sx={{
        width: "100px",
        bgcolor: theme.pale_purple,
        color: theme.dark_main,
        display: "flex",
        alignItems: "center",
        gap: 0.5
      }}
      size="small"
      variant="contained"
      color="primary">
      <Typography sx={{ fontWeight: "bold", fontSize: 20, transform: "rotate(180deg)" }}> &#x279C; </Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>назад</Typography>
    </Button>
  );
};

export default BackButton;