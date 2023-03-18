import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import './Main.css'
import PathNotFound from './pages/PathNoFound';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route exact>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/team" element={<Team />} />
      </Route>

      <Route path="*" element={<PathNotFound />} />


    </Routes>
</BrowserRouter>
 
)
