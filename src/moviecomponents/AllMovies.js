import React, { useEffect, useState } from 'react'
import Drama from '../moviecomponents/Drama'
import Crime from '../moviecomponents/Crime'
import Comedy from '../moviecomponents/Comedy';
import Actions from '../moviecomponents/actions';

export default function AllMovies({movies}) {

  return (
    <div id="allMovies">
    <Drama movies={movies} />
    <Crime movies={movies} />
    <Comedy movies={movies} />
    <Actions movies={movies} />
    </div>
  )
}










