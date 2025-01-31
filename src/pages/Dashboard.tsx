import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { AlertCircle, Info, ArrowRight } from 'lucide-react';

// Dummy data for demonstration
const dummyData = {
  apiKey: "sk-xxxxxxxxxxxxx",
  userDetails: {
    telegramUsername: "@user123",
    fullName: "John Doe",
    telegramId: "123456789"
  },
  modelUsage: [
    { name: "gpt-4", promptTokens: 1200, completionTokens: 800, totalTokens: 2000 },
    { name: "claude-3", promptTokens: 800, completionTokens: 600, totalTokens: 1400 },
    { name: "gemini-pro", promptTokens: 500, completionTokens: 400, totalTokens: 900 }
  ],
  statistics: {
    totalRequests: 150,
    successfulRequests: 142,
    failedRequests: 8,
    totalInputTokens: 2500,
    totalOutputTokens: 1800,
    totalTokens: 4300,
    estimatedCost: 0.86
  }
};

const COLORS = ['#3B82F6', '#6366F1', '#8B5CF6', '#EC4899'];

function Dashboard() {
  return (
    <div className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Monitor your API usage and statistics
          </p>
        </div>

        {/* User Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">API Key</label>
                <div className="font-mono bg-gray-100 dark:bg-gray-900 p-2 rounded">
                  {dummyData.apiKey}
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Telegram Username</label>
                <div>{dummyData.userDetails.telegramUsername}</div>
              </div>
              <div>
                <label className="text-sm text-gray-500 dark:text-gray-400">Full Name</label>
                <div>{dummyData.userDetails.fullName}</div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Usage Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {dummyData.statistics.totalRequests}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Requests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {dummyData.statistics.successfulRequests}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Successful</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {dummyData.statistics.failedRequests}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Failed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {dummyData.statistics.totalTokens.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Total Tokens</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Model Usage Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dummyData.modelUsage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="promptTokens" name="Prompt Tokens" fill="#3B82F6" />
                  <Bar dataKey="completionTokens" name="Completion Tokens" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Token Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Input Tokens', value: dummyData.statistics.totalInputTokens },
                      { name: 'Output Tokens', value: dummyData.statistics.totalOutputTokens }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dummyData.modelUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Cost Information */}
        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Estimated Resource Usage Cost</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Your usage has consumed approximately ${dummyData.statistics.estimatedCost.toFixed(2)} worth of resources.
                This is provided free of charge, but consider supporting the service if you find it valuable!
              </p>
              <a
                href="https://buymeacoffee.com/devsdocode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                Support the Service
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;