import FavoriteIcon from '@mui/icons-material/Favorite';
import MovieIcon from '@mui/icons-material/Movie';
import ShopIcon from '@mui/icons-material/Shop';
import CastleIcon from '@mui/icons-material/Castle';

export const iconComponent = {
  FavoriteIcon,
  MovieIcon,
  ShopIcon,
  CastleIcon
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
  }
]