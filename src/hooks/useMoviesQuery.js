import { useSelector } from "react-redux";
import { filmCollectionType } from "../constants";
import { useGetFilmCollectionQuery, useGetFilmsQuery } from "../services/kinopoiskApi";

const useMoviesQuery = () => {
  const { page, order } = useSelector(state => state.query)

  const responseTop250Movies = useGetFilmCollectionQuery({
    type: filmCollectionType[1].type,
    page
  })

  const responseTop250TVShows = useGetFilmCollectionQuery({
    type: filmCollectionType[2].type,
    page
  })

  const responseTopPopularAll = useGetFilmCollectionQuery({
    type: filmCollectionType[3].type,
    page
  })

  const responseFilms = useGetFilmsQuery({
    type: "FILM",
    order,
    genreId: "1",
    page,
  })

  const responseCartoons = useGetFilmsQuery({
    type: "FILM",
    genreId: "18",
    order,
    page,
  })

  const responseSeries = useGetFilmsQuery({
    type: "TV_SERIES",
    order,
    page,
  })

  const isLoading =
    responseTop250Movies.isFetching ||
    responseTop250TVShows.isFetching ||
    responseTopPopularAll.isFetching ||
    responseFilms.isFetching ||
    responseCartoons.isFetching ||
    responseSeries.isFetching

  const isError =
    responseTop250Movies.isError ||
    responseTop250TVShows.isError ||
    responseTopPopularAll.isError ||
    responseFilms.isError ||
    responseCartoons.isError ||
    responseSeries.isError

  return {
    isError,
    isLoading,
    responseTop250Movies,
    responseTop250TVShows,
    responseTopPopularAll,
    responseFilms,
    responseCartoons,
    responseSeries
  }
}

export default useMoviesQuery;