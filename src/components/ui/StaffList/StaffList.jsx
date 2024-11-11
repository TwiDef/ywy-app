import React from 'react';
import { useGetStaffQuery } from '../../../services/kinopoiskApi';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import BearCarousel from 'bear-react-carousel';
import Loader from '../Loader';
import ErrorMessage from '../ErrorMessage';

const StaffList = ({ id }) => {
  const { data, isLoading, isError } = useGetStaffQuery({ id })

  if (isLoading) return <Loader />
  if (isError) return <ErrorMessage />

  const actors = data && (data.slice(0, 30)).map(actor => {
    return (
      <Link
        sx={{ textDecoration: "none", color: theme.white, "&:hover": { color: theme.pale_purple } }}
        to={`/staff/${actor.staffId}`}
        component={RouterLink}>
        <Stack sx={{ width: 100 }}>
          <img
            style={{ width: 100, height: 100, objectFit: "cover", borderRadius: "50%" }}
            src={actor && actor.posterUrl}
            alt={actor && actor.posterUrl} />
          <Typography
            sx={{ mt: 1, fontSize: 16, textAlign: "center", lineHeight: 1 }}>
            {actor && (actor.nameRu ? actor.nameRu : actor.nameEn)}
          </Typography>
        </Stack>
      </Link>
    )
  });

  return (
    <Box sx={{ pt: 1, pb: 1 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: { xs: "center", md: "unset" },
          color: theme.white,
          mb: 2,
          fontSize: { xs: 30, md: 40 },
          textShadow: `3px 3px 3px ${theme.black}`
        }}>
        Режиссеры & Актёры
      </Typography>
      <BearCarousel
        className="staff-carousel"
        data={actors}
        width="100%"
        isEnableAutoPlay={true}
        autoPlayTime={2000}
        isEnableLoop={true}
        slidesPerView={8}
        breakpoints={{
          1200: {
            slidesPerView: 8
          },
          900: {
            slidesPerView: 6,
            isCenteredSlides: true
          },
          768: {
            slidesPerView: 4,
            isCenteredSlides: true
          },
          640: {
            slidesPerView: 4,
            isCenteredSlides: true
          },
          340: {
            slidesPerView: 3,
            isCenteredSlides: true,
            spaceBetween: 30
          }
        }}
      />
    </Box>
  );
};

export default StaffList;