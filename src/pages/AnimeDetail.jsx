import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const AnimeDetail = () => {
  const [animeDetail, setAnimeDetail] = useState({});
  const { endpoint } = useParams(); // Mengambil endpoint dari URL

  useEffect(() => {
    axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/detail/${endpoint}`)
      .then((response) => {
        const animeData = response.data; // Mengambil seluruh data anime
        setAnimeDetail(animeData); // Simpan data anime ke dalam state
        console.log(response.data);
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
          src={animeDetail.anime_detail ? animeDetail.anime_detail.thumb : ''}
          className="mx-auto drop-shadow-sm mr-4 p-2"
          alt={animeDetail.anime_detail ? animeDetail.anime_detail.title : ''}
        />
        <div className="col-span-1 flex flex-col justify-center space-y-2">
          <h2 className="font-bold text-2xl">
             {animeDetail.anime_detail ? animeDetail.anime_detail.title : 'N/A'}</h2>

          {/* Menampilkan data anime_detail */}
          {animeDetail.anime_detail && (
            animeDetail.anime_detail.detail.map((item, index) => (
              <p key={index}>{item}</p>
            ))
          )}
        </div>
      </div>
      
        {/* bagian episode*/}
        <div className="p-8 text-center">
        <h2 className="font-bold text-2xl">Episode List</h2>
        <table className="table-auto mx-auto">
          <tbody className='bg-blue-200'>
            {animeDetail.episode_list &&
              animeDetail.episode_list.map((episode, index) => (
                <tr key={index}>
                  <td className="border px-4 py-4">
             <Link to={`/episode/${episode.episode_endpoint.replace('https:/otakudesu.wiki/episode/', '')}`}>
                    <a href={episode.episode_endpoint}>
                      {episode.episode_title}
                      {episode.episode_date}
                    </a>
                </Link>

                    
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AnimeDetail;
