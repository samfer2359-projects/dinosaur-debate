import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dinosaur from "./pages/Dinosaur"
import DinosaurDetail from "./pages/DinosaurDetail"
import About from "./pages/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinosaur" element={<Dinosaur />} />
        <Route path="/dinosaur/:id" element={<DinosaurDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App