import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import EpisodeList from '../pages/Episode';
const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState({});
  const { endpoint } = useParams(); // Mengambil endpoint dari URL

  useEffect(() => {
    axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/detail/${endpoint}`)
      .then((response) => {
        setAnimeDetail(response.data.anime_detail); // Simpan data anime ke dalam state
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [endpoint]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 p-5">
          <img
            src={animeDetail.thumb}
            className="mx-auto  drop-shadow-sm mr-4 p-2"
          />
        <div className="col-span-1 flex flex-col justify-center space-y-2">
          <h2 className="font-bold text-2xl">{animeDetail.title}</h2>
          <p> {animeDetail.detail ? animeDetail.detail[1] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[2] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[3] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[5] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[6] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[7] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[8] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[9] : 'N/A'}</p>
          <p> {animeDetail.detail ? animeDetail.detail[10] : 'N/A'}</p>
        </div>
        <h1>Daftar Episode</h1>
          {animeDetail.episode_list && <EpisodeList episodes={animeDetail.episode_list} />}
      </div>
    </div>
  );
};

export default AnimeDetail;
