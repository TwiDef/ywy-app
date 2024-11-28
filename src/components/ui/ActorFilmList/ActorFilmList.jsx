import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '../../../theme';
import { Box, Button, Link, Stack, Typography } from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import StarRateIcon from '@mui/icons-material/StarRate';

const ActorFilmList = ({ films }) => {
  const [offset, setOffset] = React.useState(10)

  const handleLoadMore = () => {
    setOffset(prev => prev < films.length ? prev + 10 : prev + 0)
  }

  return (
    <Stack sx={{ alignItems: "center", mt: 2 }}>
      <Typography
        variant="h5"
        sx={{
          textAlign: { xs: "center", md: "unset" },
          color: theme.white,
          mb: 2,
          fontSize: { xs: 30, md: 40 },
          textShadow: `3px 3px 3px ${theme.black}`
        }}>
        Фильмография
      </Typography>
      <Box style={{ color: theme.white, width: "100%" }}>
        {films.slice(0, offset).map((film, i) => {
          return (
            <Stack
              sx={{
                margin: 1,
                padding: { xs: 0.5, md: 2 },
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: `1px solid ${theme.pale_purple}`
              }}
              key={i}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography sx={{ fontSize: { xs: 22, md: 26 }, lineHeight: 1.2 }}>
                  {film.nameRu ? film.nameRu : film.nameEn}
                </Typography>
                <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>{film?.description}</Typography>
              </Box>

              <Stack sx={{
                mr: { xs: 0, md: 4 },
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: { xs: 2, md: 10 }
              }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography sx={{ fontSize: 26 }}>{film?.rating || <span>?</span>}</Typography>
                  <StarRateIcon />
                </Box>
                <Link
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    color: theme.pale_purple,
                    gap: { xs: 0, md: 1 },
                    textDecoration: "none"
                  }}
                  component={RouterLink}
                  to={`/movie/${film.filmId}`}>
                  <Typography>смотреть</Typography>
                  <SlideshowIcon sx={{ color: theme.pale_purple }} />
                </Link>
              </Stack>
            </Stack>
          )
        })}
      </Box>
      <Button
        disabled={offset > films.length}
        onClick={handleLoadMore}
        sx={{
          bgcolor: theme.pale_purple,
          color: theme.dark_main,
          p: 1.5,
          margin: "40px 0 20px"
        }}
        size="small"
        variant="contained"
        color="primary">
        <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>смотреть еще</Typography>
      </Button>
    </Stack>
  );
};

export default ActorFilmList;