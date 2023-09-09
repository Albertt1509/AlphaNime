import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState({});
  const { endpoint } = useParams(); // Mengambil endpoint dari URL

 useEffect(() => {
  axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/detail/${endpoint}`)
    .then((response) => {
      setAnimeDetail(response.data.anime_detail); // Simpan data anime ke dalam state
      //console.log(data) Tambahkan ini untuk memeriksa nilai data yang diterima
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}, [endpoint]);


  return (
    <div>
        <Navbar/>
      {/* Tampilkan informasi detail anime sesuai dengan data yang telah diambil */}
        <img src={animeDetail.thumb} alt={animeDetail.title} />
         <h2 className=''>Judul : {animeDetail.title}</h2>
         
    </div>
  );
};

export default AnimeDetail;
