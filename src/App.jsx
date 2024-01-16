import { useState } from 'react'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import SingleCocktail from './pages/SingleCocktail'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>

  )
}

export default App
