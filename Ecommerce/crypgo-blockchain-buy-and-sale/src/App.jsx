
import Home from "./pages/Home"
import Docs from "./pages/Docs"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import ScrollToTopButton from "./components/ScrollToTopButton"

const App = () => {
  return (
    <>
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#010712,#1B2C31)]"></div>
      {/* <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_bottom_right,#010712,#1B2C31)]"></div> */}

      <Navbar />
      <main className="wrapper"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
          </Routes> 
      </main>
      <Footer />

      <ScrollToTopButton/>
    </>
  )
}

export default App