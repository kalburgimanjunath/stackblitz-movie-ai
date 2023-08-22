import { AllMovies } from '../components/';
import { MOVIES } from '../data/movie';
import { useState, useEffect } from 'react';
export default function Home() {
  const [newmovies, setMovies] = useState([]);
  const loadMovies = async () => {
    console.log(MOVIES);
    await setMovies(MOVIES);
  };
  useEffect(() => {
    loadMovies();
  }, [newmovies]);
  return (
    <div>
      {newmovies && newmovies.length > 0 ? (
        <AllMovies items={newmovies} />
      ) : (
        'no records available'
      )}
    </div>
  );
}
