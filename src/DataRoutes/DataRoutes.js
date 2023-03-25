import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Gallery from '../PageRoutes/Gallery'
import HomePage from '../PageRoutes/HomePage'
import LandingPage from '../PageRoutes/LandingPage'
import Posts from '../PageRoutes/Posts'
import ToDo from '../PageRoutes/ToDo'

const DataRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="homepage/:id" element={<HomePage />} />
        <Route path="post" element={<Posts />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="todo" element={<ToDo />} />
    </Routes>
  )
}

export default DataRoutes;