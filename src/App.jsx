import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>About Club</div>} />
        <Route path="/team" element={<div>Team</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/gallery" element={<div>Gallery</div>} />
        <Route path="/contact" element={<div>Contacts</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
