import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';

const Episode = () => {
  const [episodeData, setEpisodeData] = useState({});
  const [selectedDownloadLink, setSelectedDownloadLink] = useState('');
  const { episode_endpoint } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://otakudesu-anime-api.vercel.app/api/v1/episode/${episode_endpoint}`
      )
      .then((response) => {
        const episodeInfo = response.data;
        setEpisodeData(episodeInfo);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [episode_endpoint]);

  const handleDownloadLinkChange = (event) => {
    const selectedLink = event.target.value;
    setSelectedDownloadLink(selectedLink);
  };

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-2 flex justify-center text-center">
        <div className="max-w-2xl rounded overflow-hidden shadow-lg bg-gray-100">
          <iframe
            className="w-full"
            src={episodeData.streamLink}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen="allowFullScreen"
          ></iframe>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{episodeData.title}</div>
            <div>
              <label htmlFor="episodeDropdown">Select Episode:</label>
              <select
                id="episodeDropdown"
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 mt-2"
              >
                {episodeData.list_episode ? (
                  episodeData.list_episode.map((episode, index) => (
                    <option
                      key={index}
                      value={episode.list_episode_endpoint}
                    >
                      {episode.list_episode_title}
                    </option>
                  ))
                ) : (
                  <option>No episodes available.</option>
                )}
              </select>
            </div>
          </div>
          {/* Tambahkan tautan unduhan sebagai dropdown */}
          {episodeData.quality && (
            <div className="px-6 pt-4 pb-2 flex items-center">

              <label htmlFor="downloadDropdown" className=""></label>
              <select
                id="downloadDropdown"
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2"
                onChange={handleDownloadLinkChange}
                value={selectedDownloadLink}
              >
                {Object.keys(episodeData.quality).map((qualityKey, index) => (
                  <optgroup label={qualityKey} key={index}>
                    {episodeData.quality[qualityKey].download_links.map(
                      (link, linkIndex) => (
                        <option
                          key={linkIndex}
                          value={link.link}
                        >
                          {link.host}
                        </option>
                      )
                    )}
                  </optgroup>
                ))}
              </select>
              {/* Tombol Download */}
              <button
                onClick={() => {
                  if (selectedDownloadLink) {
                    window.open(selectedDownloadLink, '_blank');
                  } else {
                    alert('Pilih tautan unduhan terlebih dahulu.');
                  }
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Download
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Episode;
