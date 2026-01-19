import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Solutions from "./components/Solutions/Solutions"

function App() {

  


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
