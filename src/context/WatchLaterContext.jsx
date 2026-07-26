import { createContext, useContext, useEffect, useState } from 'react';

const WatchLaterContext = createContext();

const STORAGE_KEY = 'nxtflix_watch_later';

function getInitialWatchLater() {
  if (typeof window === 'undefined') {
    return [];
  }

  const storedValue = localStorage.getItem(STORAGE_KEY);

  if (!storedValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(storedValue);

    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    return [];
  }
}

export function WatchLaterProvider({ children }) {
  const [watchLater, setWatchLater] = useState(getInitialWatchLater);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchLater));
  }, [watchLater]);

  function isInWatchLater(id) {
    const movieId = Number(id);

    return watchLater.some((movie) => movie.id === movieId);
  }

  function toggleWatchLater(movie) {
    if (!movie) {
      return;
    }

    setWatchLater((currentWatchLater) => {
      const movieId = Number(movie.id);
      const alreadySaved = currentWatchLater.some((item) => item.id === movieId);

      if (alreadySaved) {
        return currentWatchLater.filter((item) => item.id !== movieId);
      }

      return [...currentWatchLater, movie];
    });
  }

  return (
    <WatchLaterContext.Provider value={{ watchLater, isInWatchLater, toggleWatchLater }}>
      {children}
    </WatchLaterContext.Provider>
  );
}

export function useWatchLater() {
  return useContext(WatchLaterContext);
}
