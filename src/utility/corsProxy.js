// CORS Proxy for development
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// Proxy requests to Sanity API
app.use('/api/sanity', createProxyMiddleware({
  target: 'https://090e1vat.api.sanity.io',
  changeOrigin: true,
  pathRewrite: {
    '^/api/sanity': ''
  },
  onProxyReq: (proxyReq) => {
    // Add any required headers
    proxyReq.setHeader('Accept', 'application/json');
  }
}));

// Start the proxy server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`CORS Proxy running on http://localhost:${PORT}`);
});
