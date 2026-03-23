import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Layout/Topbar";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Shop from "./Pages/Shop";
import ProductsDetail from "./Pages/ProductsDetail";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";

const App = () => {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* ✅ Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details" element={<ProductsDetail />} />
        <Route path="/bdetails" element={<BlogDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />

      
      </Routes>

      <Footer />
    </>
  );
};

export default App;
