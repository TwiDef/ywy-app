import { configureStore } from "@reduxjs/toolkit";
import { kinopoiskApi } from "../services/kinopoiskApi";
import querySlice from "./slices/querySlice";
import favoritesSlice from "./slices/favoritesSlice";

export const store = configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,

    query: querySlice,
    favorites: favoritesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware)
})
