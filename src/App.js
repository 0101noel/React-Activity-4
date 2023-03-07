
import React, { useState } from 'react';
import Header from './components/Header';
import { Home, Cars, ContactUs } from './components/Content';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  function handleNavigationClick(eventKey) {
    setCurrentPage(eventKey);
  }

  let pageContent;
  if (currentPage === 'home') {
    pageContent = <Home />;
  } else if (currentPage === 'cars') {
    pageContent = <Cars />;
  } else if (currentPage === 'contact') {
    pageContent = <ContactUs />;
  }

  return (
    <div>
      <Header onSelect={handleNavigationClick} />
      <div className="container mt-4">
        {pageContent}
      </div>
      <Footer />
    </div>
  );
}

export default App;

