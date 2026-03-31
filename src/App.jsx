import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import ShelyProfile from "./pages/ShelyProfile";
import NavianProfile from "./pages/navianProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shely-profile" element={<ShelyProfile />} />
        <Route path="/navi-profile" element={<NavianProfile />} />
      </Routes>
    </Router>
  );
}

export default App;