import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { KINOPOISK_KEY } from './../KINOPOISK_KEY';

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",

    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      headers.set('X-API-KEY', KINOPOISK_KEY)
      return headers
    }
  }),
  endpoints: (builder) => ({

    getFilmCollection: builder.query({
      query: ({ type, page }) => {
        return `v2.2/films/collections?type=${type}&page=${page}`
      }
    }),

    getFilms: builder.query({
      query: ({ type, page, genreId = "", order = "" }) => {
        return `v2.2/films?genres=${genreId}&order=${order}&type=${type}&page=${page}`
      }
    })
  })
})

export const { useGetFilmCollectionQuery, useGetFilmsQuery } = kinopoiskApi