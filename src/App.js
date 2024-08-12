import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoAbt/Infoabt';
import Offers from './components/Offers/Offers';
import Preloader from './components/Preloader/Preloader';

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImagesLoaded = () => {
    setImagesLoaded(true);
  };

  return (
    <>
      {!imagesLoaded && <Preloader />}
      {imagesLoaded && (
        <div className="app d-flex flex-column justify-content-center">
          <header>
            <Header />
          </header>
          <main className='d-flex flex-column justify-content-center align-items-center'>
            <Banner onImagesLoaded={handleImagesLoaded} />
            <InfoBlock />
            <Offers />
            <Features />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
