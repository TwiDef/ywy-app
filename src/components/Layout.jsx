import React from 'react';

import { Box, Container } from '@mui/material';
import { theme } from '../theme';

import Navbar from './ui/Navbar/Navbar';

const Layout = () => {
  return (
    <Box sx={{ bgcolor: `${theme.dark_main}` }}>
      <Container fixed sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
      </Container>
    </Box>
  );
};

export default Layout;