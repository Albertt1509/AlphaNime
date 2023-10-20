import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [animeComplete, setAnimeComplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    retrieveHome();
  }, [currentPage]);

  const changePage = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
    }
  };

  const retrieveHome = async () => {
    try {
      const { data } = await axios.get(
        `https://otakudesu-anime-api.vercel.app/api/v1/completed/${currentPage}`
      );
      setAnimeComplete(data.completed);
    } catch (error) {
      console.error(error);
    }
  };
  //
  return (
    <>
      <Navbar />
      <div className="grid-container p-5 flex justify-center items-center"> {/* Menambahkan flex dan justify-center serta items-center */}
        {/* Content */}
        <div className="col-span-4 col-start-2 ">
          <div className="bg-blue-200  rounded-lg ">
            <div className="bg-purple-500 p-2 w-full"> {/* Merubah bg-purpler menjadi bg-purple-500 */}
              <p className='text-white'>ALPHANIME - Nonton Streaming Anime Subtitle indonesia</p>
            </div>
            <div className="p-3">
              <h1>Selamat Datang di AlphaNime</h1>
              <p className="pt-3">
                Selamat datang di dunia anime! Kami adalah rumah bagi ribuan episode anime pilihan dengan kualitas tinggi dan bersubtitle Indonesia. Temukan petualangan, emosi, dan cerita seru bersama karakter favorit Anda. Bergabunglah dalam komunitas penggemar anime kami dan nikmati pengalaman streaming terbaik. Selamat menikmati!
              </p>
              <p className="flex justify-end items-end">
                Dengan ❤️,
                Alpha
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 pl-3">All Anime Complete</h2>
      <button className="m-3 pr-3 pl-3 rounded-full bg-purple-500 text-white"
        onClick={() => changePage(currentPage - 1)}>Previous
      </button>
      <button className="pl-3 pr-3 rounded-full bg-purple-500 text-white"
        onClick={() => changePage(currentPage + 1)}>Next Page
      </button>
      <div className="container flex justify-start p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {animeComplete.map((anime, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <img src={anime.thumb} alt={anime.title} className="w-full h-40 object-cover rounded-md" />
              <Link to={`/alpha/${anime.endpoint.replace('https:/otakudesu.wiki/anime/', '')}`}>
                <h1 className="text-sm font-semibold mt-2 bg-purple-500 p-2 text-white">{anime.title}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
