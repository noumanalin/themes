import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import AnimatedCursor from './components/AnimatedCursor';
import Footer from './components/Footer';
import GoToTopBtn from './components/GoToTopBtn';


const App = () => {
  return (
    <>
      <AnimatedCursor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <GoToTopBtn/>
    </>
  );
};

export default App;


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold mb-4 text-light">404</h1>
      <p className="text-lg text-gray">Page Not Found</p>
    </div>
  );
};