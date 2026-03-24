import React, { useState , useEffect } from "react";
import { BrowserRouter as Router, useLocation, Routes, Route } from "react-router-dom";
import TopBar from "./Components/Header/TopBar";
import Navbar from "./Components/Header/Navbar";
import Sidebar from "./Components/Header/Sidebar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer"
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Products from "./Components/Shop/Products";
import ProductDetail from "./Components/Shop/ProductDetails";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import BlogDetails from "./Components/Blog/BlogDetails";
import Delivery from "./Pages/Delivery"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="poppins">
      <TopBar />
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <ScrollToTop />
      <Routes>


        {/* Dynamic category page */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/shop" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={< LoginSignup />} />
        <Route path="/delivery" element={< Delivery />} />
        
      </Routes>




      <Footer />
    </div>
  );
}

export default App;
