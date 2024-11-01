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
    url: "/my-ywy",
    type: "Мой-ywy",
    icon: "FavoriteIcon"
  },
  {
    url: "/movies",
    type: "Фильмы",
    icon: "MovieIcon"
  },
  {
    url: "/series",
    type: "Сериалы",
    icon: "ShopIcon"
  },
  {
    url: "/cartoons",
    type: "Мультфильмы",
    icon: "CastleIcon"
  },
  {
    url: "/search",
    type: "Поиск",
    icon: "SearchIcon"
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
