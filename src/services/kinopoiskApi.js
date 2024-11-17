import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/* import { KINOPOISK_KEY } from './../KINOPOISK_KEY'; */

export const kinopoiskApi = createApi({
  reducerPath: 'kinopoiskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kinopoiskapiunofficial.tech/api/",

    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json')
      /* headers.set('X-API-KEY', KINOPOISK_KEY) */
      headers.set('X-API-KEY', process.env.REACT_APP_KINOPOISK_KEY)
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
      query: ({ type, page, genreId = "", order, keyword = "" }) => {
        return `v2.2/films?genres=${genreId}&order=${order}&type=${type}&keyword=${keyword}&page=${page}`
      }
    }),

    getFilm: builder.query({
      query: ({ id }) => {
        return `v2.2/films/${id}`
      }
    }),

    getStaff: builder.query({
      query: ({ id }) => {
        return `v1/staff?filmId=${id}`
      }
    }),

    getFilmImages: builder.query({
      query: ({ id, type }) => {
        return `v2.2/films/${id}/images?type=${type}`
      }
    })
  })
})

export const {
  useGetFilmCollectionQuery,
  useGetFilmsQuery,
  useGetFilmQuery,
  useGetStaffQuery,
  useGetFilmImagesQuery
} = kinopoiskApi