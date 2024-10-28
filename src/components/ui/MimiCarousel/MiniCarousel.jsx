import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import { theme } from '../../../theme';

import 'bear-react-carousel/dist/index.css';
import './MiniCarousel.css';

const MiniCarousel = ({ data, title, autoPlaySpeed }) => {

  const films = data && data.items.map(film => {
    return (
      <Stack sx={{ display: "flex", gap: 1, maxHeight: "360px" }}>
        <BearSlideImage imageUrl={film.posterUrl}></BearSlideImage>
        <Typography sx={{ color: theme.white, textAlign: "center", lineHeight: 1.3 }}>
          {film.nameRu ? film.nameRu : film.nameOriginal}
        </Typography>
      </Stack>
    )
  });

  return (
    <Stack sx={{ mt: 3, mb: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <span>icon</span>
        <Typography sx={{ color: theme.white, fontSize: 30, mb: 2 }}>{title}</Typography>
      </Box>
      <BearCarousel
        className="mini-carousel"
        data={films}
        width="100%"
        isEnableNavButton={true}
        isEnableAutoPlay={true}
        autoPlayTime={autoPlaySpeed}
        spaceBetween={30}
        isEnableLoop={true}
        slidesPerView={5}
        isCenteredSlides={true}
        breakpoints={{
          1200: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 4
          },
          640: {
            slidesPerView: 3,
          },
          340: {
            slidesPerView: 2
          }
        }}
      />
    </Stack >
  );
};

export default MiniCarousel;