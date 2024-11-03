import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Pagination, Stack, Typography } from '@mui/material';
import { onChangePage } from '../../../redux/slices/querySlice';
import { theme } from '../../../theme';

import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ data, title }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const { page } = useSelector(state => state.query)
  const pathname = location.pathname

  const handleChangePage = (event, value) => {
    dispatch(onChangePage(value))
    window.scrollTo(0, 0)
  };

  React.useEffect(() => {
    return () => {
      dispatch(onChangePage(1))
    }
  }, [pathname, dispatch])

  return (
    <Stack>
      <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 2 }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{
            bgcolor: theme.pale_purple,
            color: theme.dark_main,
            display: "flex",
            alignItems: "center",
            gap: 0.5
          }}
          variant="contained"
          color="primary">
          <Typography sx={{ fontWeight: "bold", fontSize: 20, transform: "rotate(180deg)" }}> &#x279C; </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>назад</Typography>
        </Button>
        <Typography
          sx={{
            mt: 2, mb: 2,
            "@media (max-width: 480px)": { fontSize: 22, mb: 3, mt: 3, textAlign: "center" }
          }}
          variant="h4"
          color={theme.white}>
          {title}
        </Typography>
      </Stack>
      <Stack sx={{
        display: "flex",
        gap: 4,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        mb: 4
      }}>
        {data && data.items.map((film, i) => {
          return (
            <MovieCard key={i} film={film} />
          )
        })}
      </Stack>
      <Box
        sx={{ display: "flex", justifyContent: "center", mb: 4 }}
        spacing={2}>
        <Pagination
          sx={{ "& .MuiPaginationItem-root": { color: "#fff" } }}
          page={page}
          /*     variant="outlined" */
          count={data.totalPages}
          color="secondary"
          onChange={handleChangePage} />
      </Box>
    </Stack>
  );
};

export default MovieList;