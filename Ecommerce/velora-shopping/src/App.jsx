import React ,{useEffect} from "react";
import { BrowserRouter as Router, Routes, Route , useLocation  } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Collections from "./Pages/Collections";
import Shop from "./Pages/Shop";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.key]); // 👈 Use key to trigger on every navigation

  return null;
}

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // animation should not happen only once - while scrolling down
    });
  }, []);
  
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />


        {/* Add more routes here */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
