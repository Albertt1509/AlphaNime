import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="grid-container p-5">
        <div className="bg-blue-200 col-start-2 col-span-4 rounded-lg p-5 relative">
          <h1>Selamat Datang di AlphaNime</h1>
          <p className="pt-3">
            Selamat datang di dunia anime! Kami adalah rumah bagi ribuan episode anime pilihan dengan kualitas tinggi dan bersubtitle Indonesia. Temukan petualangan, emosi, dan cerita seru bersama karakter favorit Anda. Bergabunglah dalam komunitas penggemar anime kami dan nikmati pengalaman streaming terbaik. Selamat menikmati!
          </p>
        <p className="flex justify-end items-end"> 
          Dengan ❤️,
          Alpha
        </p>

        </div>
        <img className="gambar" src="https://media.tenor.com/-jPecNydkV8AAAAi/yuri-anime.gif" alt="" />
      </div>

        <div className="container flex justify-start p-5">
          <h1 className='font-bold text-xl '>All Anime Complete</h1>
          {/* ongoing anime */}
         
        </div>

    </>
  )
};

export default Home;
