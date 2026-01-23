import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import ScrollToTop from "./components/gotoTop/ScrollToTop";
import ProgramsPage from "./pages/programs/ProgramsPage";
import Footers from "./components/footer/Footers";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />   
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<div>Team</div>} />
         <Route path="/program" element={<ProgramsPage />} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/gallery" element={<div>Gallery</div>} />
        <Route path="/contact" element={<div>Contacts</div>} />
      </Routes>
      {/* <Footer /> */}
      <Footers />
    </BrowserRouter>
  );
};

export default App;
