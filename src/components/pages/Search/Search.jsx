import React from 'react';
import { Stack, TextField } from '@mui/material';
import { useGetFilmByKeywordQuery } from '../../../services/kinopoiskApi';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../../theme';

import styles from './Search.module.css';

const Search = () => {
  const [inputValue, setInputValue] = React.useState("")

  const { data, isLoading, isError } = useGetFilmByKeywordQuery({
    keyword: "shrek",
    page: 1
  })

  /* console.log(inputValue) */

  return (
    <Stack sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        className={styles.textField}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        label="Фильмы, сериалы, мульфильмы"
        sx={{
          mt: 4, width: { xs: "100%", md: "60%" },
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
    </Stack>
  );
};

export default Search;