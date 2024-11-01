import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesFilms: []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const findedFilm = state.favoritesFilms.find(film => {
        return film.kinopoiskId === action.payload.kinopoiskId
      })

      if (!findedFilm) {
        state.favoritesFilms = [...state.favoritesFilms, action.payload]
      } else {
        state.favoritesFilms = state.favoritesFilms.filter(film => {
          return film.kinopoiskId !== action.payload.kinopoiskId
        })
      }
    }
  },
})

export const { addToFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer