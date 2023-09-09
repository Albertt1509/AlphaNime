import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
const Cari = () => {
  const { query } = useParams(); // Dapatkan query pencarian dari URL

  const [searchResults, setSearchResults] = useState([]); // State untuk hasil pencarian

  useEffect(() => {
    // Buat permintaan ke API pencarian berdasarkan query
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(`https://otakudesu-anime-api.vercel.app/api/v1/search/${query}`);
        const searchData = response.data.search; // Ambil data hasil pencarian dari response

        // Perbarui state dengan hasil pencarian
        setSearchResults(searchData);
      } catch (error) {
        console.error('Error dalam pencarian:', error);
      }
    };

    // Panggil fungsi pencarian saat komponen dimuat
    fetchSearchResults();
  }, [query]); // Jalankan kembali permintaan ketika query berubah
return (
    <div>
      <Navbar/>
      <h1 className='p-5'>Hasil Pencarian untuk: {query}</h1>
      <div className="grid grid-cols-3 gap-4 p-5">
        {searchResults.map((anime) => (
          <div key={anime.id} className="border border-black rounded p-4 h-48 flex">
            <img src={anime.thumb} alt={anime.title} />
            <div className="flex flex-col ml-4">
              {/* Tambahkan info lain ya*/}
              <h2 className="font-bold text-sm md:text-base h-16 overflow-hidden">
                {anime.title}
              </h2>
              <div className="p-5">
               <p>Genre:{anime.genres.join(', ')}</p>
              <p>Rating: {anime.rating}</p>
              <p>Status: {anime.status}</p>
          
              </div>
      
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cari;
