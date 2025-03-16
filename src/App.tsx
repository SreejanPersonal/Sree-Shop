
import { Suspense, lazy } from 'react';
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

// Lazy load Documentation component
const Documentation = lazy(() => import('./pages/Documentation'));

// Loading component for Suspense fallback
const LoadingDocs = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light-bg-secondary to-light-bg dark:from-dark-bg-secondary dark:to-dark-bg">
    <div className="text-center">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-lg opacity-20 animate-pulse"></div>
        <div className="relative w-20 h-20 border-4 border-blue-100 dark:border-blue-900/50 rounded-full">
          <div className="absolute inset-0 border-4 border-blue-500 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
      <p className="text-light-text-secondary dark:text-dark-text-secondary animate-pulse">
        Loading documentation...
      </p>
    </div>
  </div>
);

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
          <Route path="docs" element={
            <Suspense fallback={<LoadingDocs />}>
              <Documentation />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
