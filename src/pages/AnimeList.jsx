import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

const AnimeList = () => {
  const [animeListData, setAnimeListData] = useState([]);

  useEffect(() => {
    retrieveAnimeList();
  }, []);

  const retrieveAnimeList = async () => {
    try {
      const response = await axios.get('https://otakudesu-anime-api.vercel.app/api/v1/anime-list');
      setAnimeListData(response.data.manga_list); // Ganti "data" dengan "manga_list"
    } catch (error) {
      console.log(error, '<== error retrieve Anime List');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto m-4">
        <h2 className="text-2xl font-bold mb-4 pl-3">Anime List</h2>
        <div className="grid grid-cols-3 gap-4 p-5">
          {animeListData.length > 0 ? (
            animeListData.map((anime) => (
              <div
                key={anime.endpoint}
                className="border p-4 border-black rounded"
              >
               
                <h2 className="text-xl font-semibold mt-2">{anime.title}</h2>
                {/* Tambahkan elemen lain sesuai dengan data yang Anda miliki */}
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimeList;
