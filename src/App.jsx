import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import ScrollToTop from "./components/gotoTop/ScrollToTop";
import Coaches from "./pages/coaches/Coaches";
import Team from "./pages/team/Team";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/team" element={<Team />}>
          <Route path="coaches" element={<Coaches />} />
        </Route>

        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/gallery" element={<div>Gallery</div>} />
        <Route path="/contact" element={<div>Contacts</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
