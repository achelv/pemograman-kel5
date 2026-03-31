import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import ShelyProfile from "./pages/ShelyProfile";
import navianProfile from "./pages/navianProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shely-rahmatika" element={<ShelyProfile />} />
        <Route path="/navi-profile" element={<ShelyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;