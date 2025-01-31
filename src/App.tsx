import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Models from './pages/Models';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="models" element={<Models />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;