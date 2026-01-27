import { Route, Routes, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { lazy, Suspense, useEffect } from "react"
import PageLoader from "./components/PageLoader"


const Home = lazy(() => import('./pages/Home'));
const About = lazy(()=> import('./pages/About'));
const Service = lazy(()=> import('./pages/Service'));
const Menu = lazy(()=> import('./pages/Menu'));
const Contact = lazy(()=> import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />

      <main className="relative">
        <Suspense fallback={<PageLoader/>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/Service" element={<Service/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
