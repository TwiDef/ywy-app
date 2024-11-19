import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { theme } from '../theme';

import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';
import QuotaError from './ui/QuotaError';

const Layout = () => {
  const { dailyQuotaLimitOut } = useSelector(state => state.query)

  return (
    <Box sx={{ bgcolor: `${theme.dark_main}` }}>
      <Container fixed sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Box sx={{ p: 4 }} />
        <Navbar />
        {dailyQuotaLimitOut ? <QuotaError /> : <Outlet />}
        <Footer />
      </Container>
    </Box>
  );
};

export default Layout;