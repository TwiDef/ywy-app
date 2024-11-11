import React, { useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { theme } from '../../../theme';

import StarIcon from '@mui/icons-material/Star';
import BackButton from './../BackButton';

import styles from './MoviePreview.module.css';

const MoviePreview = ({ data }) => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box sx={{ pt: 2 }}>
      <BackButton />
      <Stack sx={{
        position: "relative",
        minHeight: "800px",
        backgroundImage: `url(${data && data.coverUrl})`,
        backgroundSize: "cover",
      }}>
        <Box className={styles.overlay}></Box>
        <Stack sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "row",
          gap: { xs: 2, md: 4 },
          flexWrap: { xs: "wrap", md: "unset" },
          justifyContent: "center",
          width: "100%",
          pt: 2, pb: 5
        }}>
          <Box>
            <img src={data && data.posterUrlPreview} alt={data && data.nameRu} />
          </Box>
          <Stack sx={{ color: theme.white, width: "100%" }}>
            <Typography
              variant="h4"
              sx={{
                lineHeight: 1,
                textAlign: { xs: "center", md: "unset" },
                fontSize: { xs: "1.7rem", md: "2.6rem" },
                textShadow: `3px 3px 3px ${theme.black}`
              }}
            >{data && data.nameRu}</Typography>
            <Stack sx={{
              mt: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              justifyContent: { xs: "center", md: "unset" }
            }}>
              <Typography sx={{
                fontSize: { xs: 16, md: 24 }, textShadow: `3px 3px 3px ${theme.black}`
              }}>
                {data && data.year}
              </Typography><span>|</span>
              <Typography sx={{
                fontSize: { xs: 16, md: 24 },
                textShadow: `3px 3px 3px ${theme.black}`
              }}>
                {data && data.filmLength} мин
              </Typography><span>|</span>
              <Typography sx={{
                fontSize: { xs: 16, md: 24 },
                textShadow: `3px 3px 3px ${theme.black}`
              }}>
                {data && (data.countries.slice(0, 2)).map(({ country }) => {
                  return country
                }).join(", ")}
              </Typography>
            </Stack>
            <Typography
              sx={{ mt: 2, lineHeight: 1.2, textShadow: `3px 3px 3px ${theme.black}` }}>
              {data && data.description}
            </Typography>
            <Stack
              sx={{
                mt: { xs: 4, md: "auto" },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
                gap: 1
              }}>
              <StarIcon sx={{ width: "3rem", height: "3rem" }} />
              <Typography
                sx={{
                  fontSize: 45,
                  fontWeight: "bold",
                  textShadow: `3px 3px 3px ${theme.black}`
                }}>
                {data && (data.ratingKinopoisk ? data.ratingKinopoisk : "?")}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default MoviePreview;