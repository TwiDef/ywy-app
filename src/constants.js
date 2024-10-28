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

export const filmCollectionType = {
  TOP_POPULAR_MOVIES: "TOP_POPULAR_MOVIES",
  TOP_250_MOVIES: "TOP_250_MOVIES",
  TOP_250_TV_SHOWS: "TOP_250_TV_SHOWS",
  TOP_POPULAR_ALL: "TOP_POPULAR_ALL"
}


