import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import Footer from "./components/Footer";
import Home from "./pages/home";
import Socials from "./pages/socials";
import Coaching from "./pages/coaching";
import Contact from "./pages/contact";
import RunCalculator from "./pages/runCalculator";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures each page starts at the top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/runCalculator" element={<RunCalculator />} />
      </Routes>

      <Footer />
      
    </Router>
  );
}

export default App;
