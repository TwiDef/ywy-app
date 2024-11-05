import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Pagination, Stack, Typography } from '@mui/material';
import { onChangePage } from '../../../redux/slices/querySlice';
import { clearFavorites, syncWithLocalStorage } from '../../../redux/slices/favoritesSlice';
import { theme } from '../../../theme';

import MovieCard from '../MovieCard/MovieCard';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const handleClearList = () => {
    if (window.confirm("Вы действительно хотите очистить список фильмов?")) {
      dispatch(clearFavorites())
      dispatch(syncWithLocalStorage())
    }
  }

  React.useEffect(() => {
    return () => {
      dispatch(onChangePage(1))
    }
  }, [pathname, dispatch])

  return (
    <Stack>
      <Stack sx={{
        width: "100%",
        display: "flex",
        flexDirection: { sm: "column", md: "row" },
        alignItems: "center",
        justifyContent: "start",
        gap: { sm: 0, md: 3 },
        margin: {
          xs: "20px 0 20px 0", sm: "20px 0 20px 0", md: "0 auto 0 0"
        }
      }}>
        <Button
          onClick={() => navigate(-1)}
          sx={{
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
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {pathname === "/my-ywy" &&
            <img
              width={40}
              height={40}
              src="https://cdn-icons-png.flaticon.com/512/17069/17069463.png" alt="favorites-icon" />}
          <Typography
            sx={{
              mt: 2, mb: 2,
              "@media (max-width: 480px)": { fontSize: 28, mb: 2, mt: 2, textAlign: "center" }
            }}
            variant="h4"
            color={theme.white}>
            {title}
          </Typography>
        </Box>
        {pathname === "/my-ywy" &&
          <Button
            onClick={handleClearList}
            endIcon={<DeleteIcon />}
            sx={{
              marginLeft: { sm: "0", md: "auto" },
              bgcolor: theme.light_red,
              color: theme.white,
              display: "flex",
              alignItems: "center",
            }}
            size="large"
            variant="text">
            <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>Очистить</Typography>
          </Button>}
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
        {data.totalPages &&
          <Pagination
            sx={{ "& .MuiPaginationItem-root": { color: "#fff" } }}
            page={page}
            /* variant="outlined" */
            count={data.totalPages}
            color="secondary"
            onChange={handleChangePage} />
        }
      </Box>
    </Stack>
  );
};

export default MovieList;