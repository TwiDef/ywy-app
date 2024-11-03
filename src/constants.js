import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';
import ShopIcon from '@mui/icons-material/Shop';
import CastleIcon from '@mui/icons-material/Castle';
import SearchIcon from '@mui/icons-material/Search';

export const iconComponent = {
  FavoriteIcon,
  MovieIcon,
  ShopIcon,
  CastleIcon,
  SearchIcon
}

export const NAVBAR_LIST = [
  {
    title: "Мой-ywy",
    type: "MY_YWY",
    icon: "FavoriteIcon",
    url: "my-ywy"
  },
  {
    title: "Фильмы",
    type: "FILM",
    icon: "MovieIcon",
    url: "films"
  },
  {
    title: "Сериалы",
    type: "TV_SERIES",
    icon: "ShopIcon",
    url: "series"
  },
  {
    title: "Мультфильмы",
    type: "FILM",
    icon: "CastleIcon",
    url: "cartoons"
  },
  {
    title: "Поиск",
    type: "SEARCH",
    icon: "SearchIcon",
    url: "search"
  }
]

export const filmCollectionType = [
  {
    type: "TOP_POPULAR_MOVIES",
    title: "Топ популярных",
    url: "top-popular-movies"
  },
  {
    type: "TOP_250_MOVIES",
    title: "Топ 250 фильмов",
    url: "top250-movies"
  },
  {
    type: "TOP_250_TV_SHOWS",
    title: "Топ 250 телешоу",
    url: "top250-TVShows"
  },
  {
    type: "TOP_POPULAR_ALL",
    title: "Топ популярных новинок",
    url: "top-popular-all"
  }
]
