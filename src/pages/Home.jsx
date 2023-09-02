import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

const Home = () => {
  const [ongoingData, setOngoingData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    retrieveOngoingData(currentPage);
  }, [currentPage]);

  const retrieveOngoingData = async (page) => {
    try {
      const response = await axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/ongoing/`);
      setOngoingData(response.data.data); // Akses data pada respons dengan response.data.data
    } catch (error) {
      console.error(error, '<== error retrieve Ongoing Data');
    }
  };

  const changePage = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <h2>Ongoing Anime</h2>
        <ul>
          {ongoingData.map((anime) => (
            <li key={anime.id}>{anime.title}</li>
          ))}
        </ul>
        <button onClick={() => changePage(currentPage - 1)}>Previous Page</button>
        <button onClick={() => changePage(currentPage + 1)}>Next Page</button>
      </div>
    </div>
  );
};

export default Home;
