import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import AllStudents from "./components/Students/AllStudents";
import Home from "./components/Home/Home";
import NotFound from "./components/Not found/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
