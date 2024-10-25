import React from 'react';

const MainSlide = ({ film }) => {
  return (
    <div key={film.kinopoiskId}>
      <img src={film.posterUrlPreview} alt="" />
      {film.nameRu}
    </div>
  );
};

export default MainSlide;