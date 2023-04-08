import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import PathNotFound from "./pages/PathNotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/team" element={<Team />} />
        </Route>

        <Route path="*" element={<PathNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
