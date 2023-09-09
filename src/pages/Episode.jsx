import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';

const Episode = () => {
  const [animeEpisode, setAnimeEpisode] = useState({});
  const { endpoint } = useParams(); // Gunakan useParams untuk mengambil nilai endpoint dari URL

  useEffect(() => {
    retrieveEpisode(); // Ganti retriveEpisode menjadi retrieveEpisode
  }, [endpoint]);

  const retrieveEpisode = async () => {
    try {
      const { data } = await axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/episode/${endpoint}`);
      setAnimeEpisode(data);
      console.log(data);
    } catch (error) {
      // Lihat data error di console
      console.log(`${error} ====> error list`);
    }
  };

  return (
    <div>
      {JSON.stringify(animeEpisode)}
    </div>
  );
};

export default Episode;
