import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import NotFound from './pages/NotFound';
import TopAdvertisement from './components/TopAdvertisement'


function App() {

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup on unmount

  }, []);

  if (loading) {
    return <Loading />;
  }


  return (
    <Router>
      <>
        <TopAdvertisement></TopAdvertisement>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;