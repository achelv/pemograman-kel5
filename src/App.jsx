import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import AndraProfile from "./pages/andraProfile";
import NavianProfile from "./pages/navianProfile";
import ShelyProfile from "./pages/ShelyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shely-profile" element={<ShelyProfile />} />
        <Route path="/navi-profile" element={<NavianProfile />} />
        <Route path="/andra-profile" element={<AndraProfile />} />
      </Routes>
    </Router>
  );
}

export default App;