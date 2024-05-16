import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import Research from "./Research.jsx";
import Performance from "./Performance.jsx";
import Events from "./Events.jsx";
import Testimonials from "./Testimonials.jsx";
import Header from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/research" element={<Research />} />
      <Route path="/performance" element={<Performance />} />
      <Route path="/events" element={<Events />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  </BrowserRouter>
);
