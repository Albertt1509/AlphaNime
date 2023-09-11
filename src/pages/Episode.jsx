// Episode.jsx (Komponen untuk menampilkan data episode)
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';

const Episode = () => {
  const [episodeData, setEpisodeData] = useState({});
  const { episode_endpoint } = useParams();

  useEffect(() => {
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
      <Navbar />
        <div className="p-5 text-center">
          <h1> {episodeData.title}</h1>
         
        </div>
      
      {/* Tampilkan informasi lainnya tentang episode di sini */}
     
    </div>
  );
};

export default Episode;
