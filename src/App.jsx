import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Albums from './Albums';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albumsResponse = await fetch('https://jsonplaceholder.typicode.com/albums')
        const albumsData = await albumsResponse.json();
        const trimmedAlbumsData = albumsData.slice(0, 7).map((album) => ({
          id: album.id,
          title: album.title,
          image: '',
        }));
       
        const imageDataResponse = await fetch('https://api.unsplash.com/photos/?client_id=AVrJWWr8Yz41zGZmDzuaAjgAJQFbhHdCTYv7InDXNX8')
        const imageData = await imageDataResponse.json();
        const updatedAlbumsData = trimmedAlbumsData.map((album, index) => ({
          ...album,
          image: imageData[index].urls.small
        }));
        setAlbums(updatedAlbumsData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Albums albums={albums} />
      <Footer />
    </div>
  );
}

export default App;
