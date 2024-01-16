import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Home from "./pages/home/home";
import Bio from "./pages/bio/bio";
import Portfolio from "./pages/portfolio/portfolio";
import Project from "./pages/project/project";
import PageNotFound from "./pages/pageNotFound/pageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bio' element={<Bio />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/project' element={<Project />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App