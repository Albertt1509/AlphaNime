import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    retrieveGenres();
  }, []);

  const retrieveGenres = async () => {
    try {
      const response = await axios.get('https://otakudesu-anime-api.vercel.app/api/v1/genres');
      setGenres(response.data.genres);
      setLoading(false);
    } catch (error) {
      console.log(error, '<== error retrieve Genres');
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Genre</h2>
        <div className="grid grid-cols-3 gap-4">
          {loading ? (
            <p>Loading...</p>
          ) : (
            genres.map((genre, index) => (
              <button key={index} className="border bg-white rounded shadow-sm p-4 text-center">
                {genre.genre}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Genres;
