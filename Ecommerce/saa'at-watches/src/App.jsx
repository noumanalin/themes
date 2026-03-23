import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Routes, Route, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import Navbar from './Components/Layout/Navbar';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Shop from './Pages/Shop';
import Feature from './Pages/Feature';
import Cart from './Pages/Cart';
import Footer from './Components/Layout/Footer';
import LoginForm from './Components/LoginForm'; // 👈 Direct import
// Removed: import LoginSignup from './Pages/LoginSignup';

const App = () => {
  const location = useLocation();
  const [showLoginForm, setShowLoginForm] = useState(false); // 👈 State for modal

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refreshHard();
    }, 100);
  }, [location]);
  
  function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // 👈 smooth scrolling
      });
    }, [location.key]);

    return null;
  }

  return (
    <>
      <Navbar onLoginClick={() => setShowLoginForm(true)} /> {/* 👈 Pass handler */}
<ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {showLoginForm && (
        <LoginForm onClose={() => setShowLoginForm(false)} /> // 👈 Conditional render
      )}

      <Footer />
    </>
  );
};

export default App;
