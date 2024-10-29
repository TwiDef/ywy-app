import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const MovieTopList = () => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location)


  return (
    <div>
      Top-list
    </div>
  );
};

export default MovieTopList;