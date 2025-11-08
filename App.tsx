
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { PhotoModal } from './components/PhotoModal';
import { PHOTO_DATA } from './constants';
import { Photograph } from './types';

function App() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photograph | null>(null);

  const handlePhotoClick = (photo: Photograph) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Gallery photos={PHOTO_DATA} onPhotoClick={handlePhotoClick} />
        <About />
      </main>
      <Footer />
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
