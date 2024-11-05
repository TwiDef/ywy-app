import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoritesFilms: localStorage.getItem("favorites_films_list") ?
    (JSON.parse(localStorage.getItem("favorites_films_list"))) :
    []
}

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    syncWithLocalStorage: (state) => {
      localStorage.setItem("favorites_films_list", JSON.stringify(state.favoritesFilms))
    },
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
    },
    clearFavorites: (state) => {
      state.favoritesFilms = []
    }
  },
})

export const { addToFavorites, syncWithLocalStorage, clearFavorites } = favoritesSlice.actions

export default favoritesSlice.reducer