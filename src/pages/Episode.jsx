// Episode.jsx (Komponen untuk menampilkan data episode)
import { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';



const Episode = () => {
  const [episodeData, setEpisodeData] = useState({});
  const { episode_endpoint } = useParams(); 
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/episode/${episode_endpoint}`)
      .then((response) => {
        const episodeInfo = response.data;
        setEpisodeData(episodeInfo);
        //console.log(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [episode_endpoint]);

  if (loading){
    return <p>loading...</p>
  }
  return (
    <div>
      <Navbar />
        <div className="p-5 text-center">
        <h1>{episodeData.title}</h1>
      <div className="flex justify-center">
  <iframe
    src={episodeData.streamLink}
    width="640"
    height="360"
    frameBorder="0"
    allowFullScreen
  ></iframe>
</div>

        <h2>List Episode:</h2>
        <ul>
          {episodeData.list_episode ? (
            episodeData.list_episode.map((episode, index) => (
              <li key={index}>
                <a href={episode.list_episode_endpoint}>{episode.list_episode_title}</a>
              </li>
            ))
          ) : (
            <p>No episodes available.</p>
          )}
        </ul>

        </div>
      
      {/* Tampilkan informasi lainnya tentang episode di sini */}
     
    </div>
  );
};

export default Episode;
