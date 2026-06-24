import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Home from "./pages/Home";
import Dinosaur from "./pages/Dinosaur";
import DinosaurDetail from "./pages/DinosaurDetail";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinosaur" element={<Dinosaur />} />
        <Route path="/dinosaur/:id" element={<DinosaurDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;