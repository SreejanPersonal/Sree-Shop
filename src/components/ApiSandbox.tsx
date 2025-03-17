
import React, { useState, useEffect } from 'react';
import { Terminal, Play, Loader2, Sparkles, FileCode } from 'lucide-react';
import CodeEditor from './CodeEditor';

const INITIAL_CODE = {
  python: `import openai

client = openai.Client(
    base_url="https://api.sree.shop/v1",
    api_key="YOUR_API_KEY"
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)`,
  javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.sree.shop/v1',
  apiKey: 'YOUR_API_KEY'
});

const response = await client.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});

console.log(response.choices[0].message.content);`,
  curl: `curl https://api.sree.shop/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`
};

const SAMPLE_RESPONSE = {
  id: "chatcmpl-123",
  object: "chat.completion",
  created: 1677652288,
  model: "gpt-4o",
  choices: [{
    index: 0,
    message: {
      role: "assistant",
      content: "Hello! How can I assist you today?"
    },
    finish_reason: "stop"
  }],
  usage: {
    prompt_tokens: 9,
    completion_tokens: 12,
    total_tokens: 21
  }
};

const LoadingAnimation = () => (
  <div className="flex flex-col items-center justify-center h-[400px] gap-6">
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur-lg opacity-20 animate-pulse"></div>
      <div className="w-20 h-20 border-4 border-blue-100 dark:border-blue-900/50 rounded-full"></div>
      <div className="w-20 h-20 border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent absolute top-0 left-0 animate-spin"></div>
      <div className="absolute inset-[6px] rounded-full border-2 border-indigo-400 dark:border-indigo-300 border-dashed animate-spin-slow"></div>
    </div>
    <div className="space-y-2 text-center">
      <div className="text-blue-600 dark:text-blue-400 font-medium animate-pulse flex items-center gap-2">
        <Sparkles className="w-4 h-4" />
        <span>Processing Request</span>
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Analyzing and generating response...
      </div>
    </div>
  </div>
);

const ApiSandbox: React.FC = () => {
  const [language, setLanguage] = useState<'python' | 'javascript' | 'curl'>('python');
  const [theme] = useState<'light' | 'dark'>('dark');
  const [isRunning, setIsRunning] = useState(false);
  const [code, setCode] = useState(INITIAL_CODE[language]);
  const [response, setResponse] = useState<typeof SAMPLE_RESPONSE | null>(SAMPLE_RESPONSE);

  useEffect(() => {
    setCode(INITIAL_CODE[language]);
  }, [language]);

  const handleLanguageChange = (newLanguage: 'python' | 'javascript' | 'curl') => {
    setLanguage(newLanguage);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setResponse(null);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResponse(SAMPLE_RESPONSE);
    setIsRunning(false);
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl shadow-lg">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              API Sandbox
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Test our API with different languages
            </p>
          </div>
        </div>
        <div className="w-full sm:w-auto flex gap-2 bg-gray-100 dark:bg-gray-900 p-1.5 rounded-xl overflow-x-auto">
          {(['python', 'javascript', 'curl'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                language === lang
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 scale-105'
                  : 'hover:bg-white dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <FileCode className="w-4 h-4" />
              Request Editor
            </div>
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                ${isRunning 
                  ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5'
                }`}
            >
              {isRunning ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Running...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Execute Request
                </>
              )}
            </button>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5"></div>
            <CodeEditor
              initialCode={code}
              language={language}
              theme={theme}
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              <Terminal className="w-4 h-4" />
              Response Preview
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5"></div>
            {isRunning ? (
              <LoadingAnimation />
            ) : response ? (
              <CodeEditor
                initialCode={JSON.stringify(response, null, 2)}
                language="json"
                theme={theme}
                isResponse={true}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSandbox;
