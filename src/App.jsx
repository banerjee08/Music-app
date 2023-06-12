import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Albums from './Albums'

function App() {
  const [count, setCount] = useState(0);

  // Getting album info from API
  useEffect(function () {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        for (let i = 0; i < 10; i++) {
          // console.log(data[i]);
        }
      });
  });

  //Getting photos
  useEffect(function () {
    fetch(
      'https://api.unsplash.com/photos/?client_id=AVrJWWr8Yz41zGZmDzuaAjgAJQFbhHdCTYv7InDXNX8'
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Albums />
      <Footer />
    </>
  );
}

export default App;
