import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { theme } from '../theme';

import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';

const Layout = () => {
  return (
    <Box sx={{ bgcolor: `${theme.dark_main}` }}>
      <Container fixed sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box sx={{ p: 6 }} />
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;