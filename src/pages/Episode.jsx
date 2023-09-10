import { useState, useEffect } from 'react';
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
      //console.log(data);
    } catch (error) {
      // Lihat data error di console
      console.log(`${error} ====> error list`);
    }
  };

return (
  <>
    {JSON.stringify(animeEpisode)}
    <div>
      <Navbar/>
      {/* <h1>Detail Episode</h1>
      <p>Title: {animeEpisode.title}</p>
      <p>Base URL: {animeEpisode.baseUrl}</p>
      <p>ID: {animeEpisode.id}</p>
      <p>Link Stream Response: {animeEpisode.link_stream_response}</p>
      <h2>Mirror 1</h2>
      <p>Quality: {animeEpisode.mirror1.quality}</p>
      <ul>
        {animeEpisode.mirror1.mirrorList.map((mirror, index) => (
          <li key={index}>{mirror}</li>
        ))}
      </ul>
      <h2>Mirror 2</h2>
      <p>Quality: {animeEpisode.mirror2.quality}</p>
      <ul>
        {animeEpisode.mirror2.mirrorList.map((mirror, index) => (
          <li key={index}>{mirror}</li>
        ))}
      </ul>
      <h2>Mirror 3</h2>
      <p>Quality: {animeEpisode.mirror3.quality}</p>
      <ul>
        {animeEpisode.mirror3.mirrorList.map((mirror, index) => (
          <li key={index}>{mirror}</li>
        ))}
      </ul> */}
    </div>
  </>
  );
};

export default Episode;
