import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PathNotFound from "./pages/PathNotFound";
import About from "./pages/About";
import Events from "./pages/Events";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/events" element={<Events />} />
        </Route>

        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
