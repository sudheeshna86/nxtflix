import {Routes, Route} from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import WatchLater from '../pages/WatchLater'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<Home />} />

      <Route path="/movies/:id" element={<MovieDetails />} />

      <Route path="/watch-later" element={<WatchLater />} />

      <Route path="/not-found" element={<NotFound />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes