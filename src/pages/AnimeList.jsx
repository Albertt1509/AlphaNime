import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AnimeList = () => {
  const [animeListData, setAnimeListData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');

  useEffect(() => {
    retrieveAnimeList();
  }, []);

  const retrieveAnimeList = async () => {
    try {
      const response = await axios.get('https://otakudesu-anime-api.vercel.app/api/v1/anime-list');
      setAnimeListData(response.data.manga_list);
    } catch (error) {
      console.log(error, '<== error retrieve Anime List');
    }
  };

  const filterAnimeListByLetter = (letter) => {
    setSelectedLetter(letter);
  };

  const filteredAnimeList = animeListData.filter((anime) => {
    if (selectedLetter === '') {
      return true; // Tampilkan semua anime jika tidak ada huruf yang dipilih
    }
    return anime.title.toLowerCase().startsWith(selectedLetter.toLowerCase());
  });

  return (
    <div>
      <Navbar />
      <div className="mx-auto m-4">
        <h2 className="text-2xl font-bold mb-4 pl-3">Anime List</h2>

        {/* Tombol A-Z */}
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 mb-4">
          {Array.from('#ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
            <button
              key={letter}
              onClick={() => filterAnimeListByLetter(letter)}
              className={`bg-purple-500 text-white px-4 py-2 rounded ${selectedLetter === letter ? 'bg-blue-700' : ''}`}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 p-5">
          {filteredAnimeList.length > 0 ? (
            filteredAnimeList.map((anime, index) => (
              <div
                key={anime.endpoint}
                className="border p-4 "
              >
                <Link to={`/alpha/${anime.endpoint.replace('https:/otakudesu.wiki/anime/', '')}`}>
                  <h2 className="text-xl font-semibold mt-2">
                    {index + 1}. {anime.title}
                  </h2>
                </Link>
              </div>
            ))
          ) : (
            <p>Anime tidak ditemukan coba lagi nanti</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
