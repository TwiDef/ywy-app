import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleStaffQuery } from '../../../services/kinopoiskApi';

import Loader from '../../ui/Loader';
import ErrorMessage from '../../ui/ErrorMessage';
import ActorPreview from '../../ui/ActorPreview';
import ActorFilmList from '../../ui/ActorFilmList';

const ActorDetail = () => {
  const params = useParams()
  const id = params.id
  const { data, isLoading, isError } = useGetSingleStaffQuery({ id })

  if (isLoading) return <Loader />
  if (isError) return <ErrorMessage />

  return (
    <>
      <ActorPreview data={data && data} />
      {data && data.films && <ActorFilmList films={data && data.films} />}
    </>
  );
};

export default ActorDetail;