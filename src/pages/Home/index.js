import { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import MovieCarousel from '../../components/MovieCarousel';
import MovieCard from '../../components/MovieCard';
import HeroBanner from './components/HeroBanner';
import GenreFilters from './components/GenreFilters';
import { getTrendingMovies, getFreshReleaseMovies, getMoviesByGenre } from '../../utils/movieHelpers';
import './index.css';

function Home() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [loading, setLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [freshReleases, setFreshReleases] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // small delay to show spinner for local loads; replace with real async calls if needed
    const t = setTimeout(() => {
      if (!mounted) return;
      setTrendingMovies(getTrendingMovies());
      setFreshReleases(getFreshReleaseMovies());
      setFilteredMovies(getMoviesByGenre(selectedGenre));
      setLoading(false);
    }, 350);

    return () => {
      mounted = false;
      clearTimeout(t);
    };
  }, [selectedGenre]);

  return (
    <div className="home-page">
      <Header />
      <HeroBanner />

      {loading ? (
        <div className="home-loading">
          <Spinner size={64} />
        </div>
      ) : (
        <>
          <MovieCarousel title="Trending Now" movies={trendingMovies} direction="left" />
          <MovieCarousel title="Fresh Releases" movies={freshReleases} direction="right" />
          <GenreFilters selectedGenre={selectedGenre} onGenreSelect={setSelectedGenre} />
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                poster={movie.poster}
                rating={movie.rating}
                title={movie.title}
                genre={movie.genre}
                year={movie.year}
                duration={movie.duration}
                variant="grid"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;