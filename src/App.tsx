import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Dashboard from './pages/Dashboard';
import Models from './pages/Models';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Status from './pages/Status';
import Documentation from './pages/Documentation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="models" element={<Models />} />
          <Route path="about" element={<About />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="status" element={<Status />} />
          <Route path="docs" element={<Documentation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;