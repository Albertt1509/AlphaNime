import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import axios from 'axios';

const Ongoing = () => {
  const [ongoingData, setOngoingData] = useState([]);


  useEffect(() => {
    retrieveOngoing();
  }, []);

  const retrieveOngoing = async () => {
    try {
      const response = await axios.get('https://otakudesu-anime-api.vercel.app/api/v1/ongoing/1');
      setOngoingData(response.data);

    } catch (error) {
      console.log(error, '<== error retrieve Ongoing');
  
    }
  };

  return (
    <div>
      <Navbar />
     
    </div>
  );
};

export default Ongoing;
