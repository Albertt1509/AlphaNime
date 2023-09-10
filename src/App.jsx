import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AnimeList from './pages/AnimeList'
import JadwalRilis from './pages/JadwalRilis'
import Ongoing from './pages/Ongoing'
import Genres from './pages/Genres';
import Cari from './pages/Cari';
import AnimeDetail from './pages/AnimeDetail';
import './App.css'
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/anime-list' element={<AnimeList/>} />
        <Route path='/jadwal-rilis' element={<JadwalRilis/>} />
        <Route path='/ongoing' element={<Ongoing/>} />
        <Route path='/genres' element={<Genres/>} />
        <Route path='/search/:query' element={<Cari/>} />
        <Route path='/detail/:endpoint' element={<AnimeDetail/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
