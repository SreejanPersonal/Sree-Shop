import React, { useState } from 'react';
import { 
  Book, 
  Code2, 
  Terminal, 
  Zap, 
  ChevronRight, 
  Copy, 
  Check,
  Search,
  BookOpen,
  Cpu,
  Shield,
  Sparkles,
  X,
  Rocket,
  Globe,
  Settings,
  MessageSquare,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import CodeEditor from '../components/CodeEditor';

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

interface CodeExample {
  python: string;
  javascript: string;
  curl: string;
}

function Documentation() {
  const [activeSection, setActiveSection] = useState('quickstart');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<'python' | 'javascript' | 'curl'>('python');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples: Record<string, CodeExample> = {
    basic: {
      python: `import openai

client = OpenAI(
    base_url="https://api.sree.shop/v1",
    api_key="ddc-xxx"  # Replace with your API key
)

response = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)`,
      javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.sree.shop/v1',
  apiKey: 'ddc-xxx'  // Replace with your API key
});

const response = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});

console.log(response.choices[0].message.content);`,
      curl: `curl https://api.sree.shop/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ddc-xxx" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`
    },
    streaming: {
      python: `import openai

client = OpenAI(
    base_url="https://api.sree.shop/v1",
    api_key="ddc-xxx"  # Replace with your API key
)

stream = client.chat.completions.create(
    model="gpt-4",
    messages=[
        {"role": "user", "content": "Write a story"}
    ],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="")`,
      javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://api.sree.shop/v1',
  apiKey: 'ddc-xxx'  // Replace with your API key
});

const stream = await client.chat.completions.create({
  model: 'gpt-4',
  messages: [
    { role: 'user', content: 'Write a story' }
  ],
  stream: true
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0].delta.content || '');
}`,
      curl: `curl https://api.sree.shop/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ddc-xxx" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {"role": "user", "content": "Write a story"}
    ],
    "stream": true
  }'`
    },
    beta: {
      python: `import openai

client = OpenAI(
    base_url="https://beta.sree.shop/v1",
    api_key="ddc-beta-xxx"  # Replace with your beta API key
)

response = client.chat.completions.create(
    model="DeepSeek-R1",  # Beta model
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)

print(response.choices[0].message.content)`,
      javascript: `import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://beta.sree.shop/v1',
  apiKey: 'ddc-beta-xxx'  // Replace with your beta API key
});

const response = await client.chat.completions.create({
  model: 'DeepSeek-R1',  // Beta model
  messages: [
    { role: 'user', content: 'Hello!' }
  ]
});

console.log(response.choices[0].message.content);`,
      curl: `curl https://beta.sree.shop/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ddc-beta-xxx" \\
  -d '{
    "model": "DeepSeek-R1",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`
    }
  };

  const sections: Section[] = [
    {
      id: 'quickstart',
      title: 'Quick Start',
      icon: <Zap className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Start using our API in minutes. Follow these simple steps to integrate AI capabilities into your application.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <div className="w-4 h-4 text-blue-600 dark:text-blue-400 font-bold">1</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Get your API key</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Join our Telegram group and use the bot to generate your API key.
                </p>
                <a
                  href="https://t.me/devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Join Telegram Group
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <div className="w-4 h-4 text-blue-600 dark:text-blue-400 font-bold">2</div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Install the client library</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Use your preferred package manager to install our OpenAI-compatible client.
                </p>
                <div className="space-y-3">
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-500">$</div>
                    <code className="block bg-gray-100 dark:bg-gray-800 p-3 pl-7 rounded-lg text-sm font-mono">
                      npm install openai
                    </code>
                  </div>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-500">$</div>
                    <code className="block bg-gray-100 dark:bg-gray-800 p-3 pl-7 rounded-lg text-sm font-mono">
                      pip install openai
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <div className="w-4 h-4 text-blue-600 dark:text-blue-400 font-bold">3</div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Make your first API call</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  Choose your preferred language and try this example:
                </p>
                
                {/* Language Selector */}
                <div className="flex gap-2 mb-4">
                  {(['python', 'javascript', 'curl'] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setSelectedLanguage(lang)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        selectedLanguage === lang
                          ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </button>
                  ))}
                </div>

                <div className="relative">
                  <CodeEditor
                    language={selectedLanguage}
                    initialCode={codeExamples.basic[selectedLanguage]}
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'authentication',
      title: 'Authentication',
      icon: <Shield className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="text-gray-600 dark:text-gray-400">
            All API requests require authentication using your API key. We provide two types of API keys:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="font-semibold">Stable API</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Production-ready API with stable models and reliable performance.
              </p>
              <div className="font-mono text-sm bg-white dark:bg-gray-900/50 p-2 rounded">
                ddc-xxx
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-100 dark:border-yellow-800">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <h3 className="font-semibold">Beta API</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Access to latest models and features in beta testing.
              </p>
              <div className="font-mono text-sm bg-white dark:bg-gray-900/50 p-2 rounded">
                ddc-beta-xxx
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Security Best Practices</h3>
                <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
                  <li>• Never expose your API key in client-side code</li>
                  <li>• Use environment variables for API key storage</li>
                  <li>• Rotate your API key if compromised</li>
                  <li>• Don't share your API key with others</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Authentication Example</h3>
            
            {/* Language Selector */}
            <div className="flex gap-2 mb-4">
              {(['python', 'javascript', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <CodeEditor
              language={selectedLanguage}
              initialCode={codeExamples.basic[selectedLanguage]}
              theme="dark"
            />
          </div>
        </div>
      )
    },
    {
      id: 'endpoints',
      title: 'API Endpoints',
      icon: <Globe className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">API Endpoints</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
              <div className="text-sm font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded border border-gray-200 dark:border-gray-700">
                Stable API
              </div>
              <code className="text-sm">https://api.sree.shop/v1</code>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
              <div className="text-sm font-mono bg-white dark:bg-gray-800 px-3 py-1 rounded border border-gray-200 dark:border-gray-700">
                Beta API
              </div>
              <code className="text-sm">https://beta.sree.shop/v1</code>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Available Endpoints</h3>
            
            <div className="space-y-4">
              {/* Chat Completions */}
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Chat Completions</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Create chat completions</p>
                    </div>
                  </div>
                  <div className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
                    POST
                  </div>
                </div>
                <code className="block text-sm mb-4">
                  /chat/completions
                </code>
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Required Parameters:</h5>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <div>
                        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">model</code>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">The ID of the model to use</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <div>
                        <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">messages</code>
                        <span className="text-gray-600 dark:text-gray-400 ml-2">Array of messages in the conversation</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Models */}
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                      <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Models</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">List available models</p>
                    </div>
                  </div>
                  <div className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
                    GET
                  </div>
                </div>
                <code className="block text-sm">
                  /models
                </code>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'streaming',
      title: 'Streaming',
      icon: <Settings className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Streaming Responses</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get real-time streaming responses from the API. This is useful for creating chat interfaces with typing indicators.
          </p>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl mb-6">
            <div className="flex items-start gap-3">
              <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-1">Streaming Tips</h3>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                  <li>• Set <code className="bg-blue-100 dark:bg-blue-900/50 px-1.5 py-0.5 rounded">stream=True</code> in your request</li>
                  <li>• Handle the stream chunks as they arrive</li>
                  <li>• Remember to properly close the stream when done</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Streaming Example</h3>
            
            {/* Language Selector */}
            <div className="flex gap-2 mb-4">
              {(['python', 'javascript', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <CodeEditor
              language={selectedLanguage}
              initialCode={codeExamples.streaming[selectedLanguage]}
              theme="dark"
            />
          </div>
        </div>
      )
    },
    {
      id: 'beta',
      title: 'Beta API',
      icon: <Rocket className="w-4 h-4" />,
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Beta API Access</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get early access to new features and models with our Beta API.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-100 dark:border-yellow-800">
              <div className="flex items-center gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                <h3 className="font-semibold">Beta Features</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  <span>10 RPM rate limit</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  <span>32K context window</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-yellow-600" />
                  <span>Latest model versions</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-100 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-semibold">Beta Models</h3>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span>DeepSeek-R1</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span>DeepSeek-R1-Distill-Llama-70B</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-600" />
                  <span>o3-mini</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Beta API Example</h3>
            
            {/* Language Selector */}
            <div className="flex gap-2 mb-4">
              {(['python', 'javascript', 'curl'] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            <CodeEditor
              language={selectedLanguage}
              initialCode={codeExamples.beta[selectedLanguage]}
              theme="dark"
            />
          </div>
        </div>
      )
    }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Developer Documentation</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about integrating with our API
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <nav className="space-y-1">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full px-4 py-2 rounded-lg text-left flex items-center gap-3 transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              {sections.find(s => s.id === activeSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;