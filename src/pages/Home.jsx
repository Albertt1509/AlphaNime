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

  return (
    <>
      <Navbar />
      <div className="grid-container p-5">
        {/* Content */}
        <div className="bg-blue-200 col-start-2 col-span-4 rounded-lg p-5 relative">
          <h1>Selamat Datang di AlphaNime</h1>
          <p className="pt-3">
            Selamat datang di dunia anime! Kami adalah rumah bagi ribuan episode anime pilihan dengan kualitas tinggi dan bersubtitle Indonesia. Temukan petualangan, emosi, dan cerita seru bersama karakter favorit Anda. Bergabunglah dalam komunitas penggemar anime kami dan nikmati pengalaman streaming terbaik. Selamat menikmati!
          </p>
          <p className="flex justify-end items-end"> 
            Dengan ❤️,
            Alpha
          </p>
        </div>
        <img className="gambar " src="https://media.tenor.com/-jPecNydkV8AAAAi/yuri-anime.gif" alt="" />
      </div>
        <h2 className="text-2xl font-bold mb-4 pl-3">All Anime Complete</h2>
              <button className="m-3 pr-3 pl-3 rounded-full bg-blue-400 text-white"
            onClick={() => changePage(currentPage - 1)}>Previous
          </button>
          <button className="pl-3 pr-3 rounded-full bg-blue-400 text-white"
            onClick={() => changePage(currentPage + 1)}>Next Page
          </button>
      <div className="container flex justify-start p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {animeComplete.map((anime, index) => (
            <div key={index} className="bg-white p-4 shadow-lg rounded-lg">
              <img src={anime.thumb} alt={anime.title} className="w-full h-40 object-cover rounded-md" />
             <Link to={`/alpha/${anime.endpoint.replace('https:/otakudesu.wiki/anime/', '')}`}>
                   <h1 className="text-xl font-semibold mt-2">{anime.title}</h1>
              </Link>
              <p>Total Episode: {anime.total_episode}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
