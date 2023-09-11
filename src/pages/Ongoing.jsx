import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Ongoing = () => {
  const [ongoingData, setOngoingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    retrieveOngoing();
  }, [currentPage]);

  const retrieveOngoing = async () => {
    try {
      const { data } = await axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/ongoing/${currentPage}`);
      setOngoingData(data.ongoing);
    } catch (error) {
      console.log(error, '<== error retrieve Ongoing');
    }
  };

  const changePage = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mx-auto ">
        <img src="../../" alt="" />
        <h2 className="text-2xl font-bold mb-4 pl-3">On Going Anime</h2>
              <button className="m-3 pr-3 pl-3 rounded-full bg-blue-400 text-white"
            onClick={() => changePage(currentPage - 1)}>Previous
          </button>
          <button className="pl-3 pr-3 rounded-full bg-blue-400 text-white"
            onClick={() => changePage(currentPage + 1)}>Next Page
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 p-5">
          {ongoingData.length > 0 ? (
            ongoingData.map((anime) => (
              <div
                key={anime.endpoint}
                className="border p-4 border-black rounded"
              >
                <div className="relative h-64">
                  <Link to={`/alpha/${anime.endpoint}`}>
                  <img
                    src={anime.thumb}
                    alt={anime.title}
                    className="object-cover w-full h-full rounded"
                  />
                    </Link>
                </div>
                <h2 className="text-xl font-semibold mt-2">{anime.title}</h2>
                <p className="mt-2">{anime.total_episode}</p>
                <p className="text-xs mt-2">Updated : {anime.updated_on}, {anime.updated_day}</p>
                <div className="flex justify-end items-end p-3">            
               </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
    
      </div>
    </div>
  );
};

export default Ongoing;
