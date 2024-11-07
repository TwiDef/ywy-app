import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, TextField, Button } from '@mui/material';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi';
import { onChangeKeyword } from '../../../redux/slices/querySlice';
import { theme } from '../../../theme';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import MovieList from '../../ui/MovieList/';
import Loader from '../../ui/Loader';

import styles from './Search.module.css';


const Search = () => {
  const dispatch = useDispatch()
  const { order, type, page, keyword } = useSelector(state => state.query)
  const [inputValue, setInputValue] = React.useState("")

  const { data, isFetching, isError } = useGetFilmsQuery({
    type,
    order,
    keyword,
    page
  })

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(onChangeKeyword(inputValue))
    }, 400)

    return () => clearTimeout(timeoutId)
  }, [inputValue, dispatch])

  return (
    <Stack sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <Stack
        className={styles.searchBlock}
        sx={{
          mt: 4, width: { xs: "100%", md: "60%" },
        }}>
        <TextField
          className={styles.textField}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          label="Фильмы, сериалы, мульфильмы"
          sx={{
            width: "100%",
            '& label': { color: theme.pale_purple },
            '& label.Mui-focused': { color: theme.white },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: theme.pale_purple, borderRadius: "14px" },
              '&:hover fieldset': { borderColor: theme.white },
              '&.Mui-focused fieldset': { borderColor: theme.white }
            }
          }}
          slotProps={{
            input: {
              startAdornment: inputValue && <SearchIcon sx={{ color: theme.white }} />
            }
          }}
        />
        <Button
          className={`${styles.clearBtn} ${!inputValue && styles.hidden}`}
          onClick={() => setInputValue("")}
          sx={{
            position: "absolute",
            top: 10,
            right: 0,
            "&:hover, &:focus": { background: "transparent", scale: 1.1 },
            "&:active": { background: "transparent" }
          }}>
          <CloseIcon sx={{ color: theme.white }} />
        </Button>
      </Stack>
      <>
        {isError || (data && data.items.length === 0) ? "nichego nety" :
          isFetching ? <Loader /> : data && <MovieList data={data} title="Поиск по названию фильма" />}
      </>
    </Stack>
  );
};

export default Search;