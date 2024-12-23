import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate
import Navbar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop"; // Keeps pages at top on navigation
import Footer from "./components/Footer";
import Home from "./pages/home"; // Home component added
import Socials from "./pages/socials";
import Coaching from "./pages/coaching";
import Contact from "./pages/contact";
import RunCalculator from "./pages/runCalculator";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop /> {/* Ensures each page starts at the top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to Home */}
        <Route path="/home" element={<Home />} /> {/* Added Home */}
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
