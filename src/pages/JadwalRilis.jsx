// Episode.jsx (Komponen untuk menampilkan data episode)
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Menggunakan useParams dari React Router
import axios from 'axios';

const Episode = () => {
  const { episode_endpoint } = useParams(); // Menggunakan useParams untuk mengambil episode_endpoint
  const [episodeData, setEpisodeData] = useState({});

  useEffect(() => {
    // Ambil data episode berdasarkan episode_endpoint
    axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/episode/${episode_endpoint}`)
      .then((response) => {
        const episodeInfo = response.data;
        setEpisodeData(episodeInfo);
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [episode_endpoint]);

  return (
    <div>
      {/* Tampilkan data episode di sini sesuai dengan tampilan yang Anda inginkan */}
      
    </div>
  );
};

export default Episode;
