import React from 'react';
import { Box } from '@mui/material';
import { theme } from '../../../theme';

import BackButton from '../../ui/BackButton';

import './ErrorPage.css';

const ErrorPage = () => {
  return (
    <div
      style={{ color: theme.white }}
      className="errorPage__wrapper">
      <img
        width={200}
        height={200}
        src="https://cdn-icons-png.flaticon.com/512/745/745472.png" alt="error-page" />
      <h5 className="error-title">Ошибка 404</h5>
      <p className="error-text">Страница не найдена</p>
      <Box sx={{ mt: 2 }}>
        <BackButton />
      </Box>
    </div>
  );
};

export default ErrorPage;