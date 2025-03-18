import { useEffect, useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronRight,
  Code,
  Copy,
  Database,
  ExternalLink,
  FileText,
  Github,
  Hash,
  ImageIcon,
  Key,
  Lock,
  Menu,
  MessageSquare,
  Play,
  Search,
  Terminal,
  X
} from 'lucide-react';
import CodeEditor from '../components/editor/CodeEditor';

function Documentation() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('python');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSections, setFilteredSections] = useState<string[]>([]);

  // Mock sections for the documentation
  const sections = [
    'introduction',
    'authentication',
    'rate-limits',
    'errors',
    'text-completion',
    'chat-completion',
    'image-generation',
    'stream-response',
    'using-plugins',
    'sdks',
    'faq'
  ];

  // Filter sections based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredSections(sections);
      return;
    }

    const filtered = sections.filter(section => 
      section.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredSections(filtered);
  }, [searchQuery]);

  // Set first section as active by default when filteredSections change
  useEffect(() => {
    if (filteredSections.length > 0 && !filteredSections.includes(activeSection || '')) {
      setActiveSection(filteredSections[0]);
    }
  }, [filteredSections, activeSection]);

  // Set first section as active by default
  useEffect(() => {
    if (!activeSection && sections.length > 0) {
      setActiveSection(sections[0]);
    }
  }, []);

  // Close sidebar when user clicks outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock code examples
  const codeExamples = {
    python: `import requests

# Replace with your API key
api_key = "YOUR_API_KEY"

def get_completion(prompt, model="gpt-3.5-turbo"):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }
    
    data = {
        "model": model,
        "prompt": prompt,
        "max_tokens": 150
    }
    
    response = requests.post(
        "https://api.sree.shop/v1/completions",
        headers=headers,
        json=data
    )
    
    return response.json()

# Example usage
result = get_completion("Write a short poem about AI")
print(result["choices"][0]["text"])`,

    javascript: `// Replace with your API key
const apiKey = "YOUR_API_KEY";

async function getCompletion(prompt, model = "gpt-3.5-turbo") {
  const response = await fetch("https://api.sree.shop/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": \`Bearer \${apiKey}\`
    },
    body: JSON.stringify({
      model: model,
      prompt: prompt,
      max_tokens: 150
    })
  });
  
  const data = await response.json();
  return data;
}

// Example usage
getCompletion("Write a short poem about AI")
  .then(result => console.log(result.choices[0].text))
  .catch(error => console.error("Error:", error));`,

    curl: `curl -X POST \\
  https://api.sree.shop/v1/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-3.5-turbo",
    "prompt": "Write a short poem about AI",
    "max_tokens": 150
  }'`
  };

  const renderContent = () => {
    // This is just a placeholder for the actual documentation content
    const renderPlaceholderContent = (title: string, description: string, icon: JSX.Element) => (
      <div className="pb-10 mb-10 border-b dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h2 className="text-2xl font-bold" id={title.toLowerCase().replace(/ /g, '-')}>
            {title}
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>

        {/* Code examples */}
        <div className="mb-6">
          <div className="flex border-b dark:border-gray-700 mb-4">
            <button
              className={`px-4 py-2 ${activeTab === 'python' ? 'border-b-2 border-blue-500 dark:border-blue-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('python')}
            >
              Python
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'javascript' ? 'border-b-2 border-blue-500 dark:border-blue-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('javascript')}
            >
              JavaScript
            </button>
            <button
              className={`px-4 py-2 ${activeTab === 'curl' ? 'border-b-2 border-blue-500 dark:border-blue-400 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
              onClick={() => setActiveTab('curl')}
            >
              cURL
            </button>
          </div>

          <CodeEditor
            initialCode={codeExamples[activeTab as keyof typeof codeExamples]}
            language={activeTab === 'curl' ? 'bash' : activeTab}
          />
        </div>

        {/* Example Response */}
        <div className="mt-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-green-500" />
            Example Response
          </h3>
          <CodeEditor
            initialCode={`{
  "id": "cmpl-abc123",
  "object": "text_completion",
  "created": 1677858242,
  "model": "gpt-3.5-turbo",
  "choices": [
    {
      "text": "In circuits of light and silicon minds,\\nAI dreams of understanding, learning kind.\\nWith patterns found in data's endless sea,\\nIt builds a bridge from what was to what might be.",
      "index": 0,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 6,
    "completion_tokens": 150,
    "total_tokens": 156
  }
}`}
            language="json"
            isResponse={true}
          />
        </div>
      </div>
    );

    switch (activeSection) {
      case 'introduction':
        return renderPlaceholderContent(
          "Introduction",
          "Sree.shop provides a simple, reliable API for accessing powerful AI models. With our API, you can generate text completions, create AI-powered chat applications, generate images, and more.",
          <FileText className="w-7 h-7 text-blue-500" />
        );
      case 'authentication':
        return renderPlaceholderContent(
          "Authentication",
          "To authenticate with our API, you'll need an API key. Every request should include your API key in the Authorization header as a Bearer token. Keep your API key secure - don't share it publicly or expose it in client-side code.",
          <Key className="w-7 h-7 text-yellow-500" />
        );
      case 'rate-limits':
        return renderPlaceholderContent(
          "Rate Limits",
          "Free tier accounts are limited to 3 requests per minute (RPM). Pro tier accounts have unlimited RPM, ensuring your applications can scale without interruption. Rate limit headers are included in each response to help you track your usage.",
          <Terminal className="w-7 h-7 text-purple-500" />
        );
      case 'errors':
        return renderPlaceholderContent(
          "Error Handling",
          "Our API returns standard HTTP status codes and detailed error messages to help you debug issues. Always implement proper error handling in your applications to ensure a smooth user experience.",
          <X className="w-7 h-7 text-red-500" />
        );
      case 'text-completion':
        return renderPlaceholderContent(
          "Text Completion",
          "The text completion endpoint allows you to generate text completions based on a provided prompt. This is useful for content generation, writing assistance, code completion, and more.",
          <FileText className="w-7 h-7 text-green-500" />
        );
      case 'chat-completion':
        return renderPlaceholderContent(
          "Chat Completion",
          "The chat completion endpoint is designed for conversational interactions. You can provide a history of messages and the API will generate an appropriate response, maintaining context throughout the conversation.",
          <MessageSquare className="w-7 h-7 text-blue-500" />
        );
      case 'image-generation':
        return renderPlaceholderContent(
          "Image Generation",
          "Generate images from text descriptions using our image generation endpoint. Perfect for creating illustrations, design concepts, or visual content for your applications.",
          <ImageIcon className="w-7 h-7 text-pink-500" />
        );
      case 'stream-response':
        return renderPlaceholderContent(
          "Streaming Responses",
          "For a more interactive experience, you can use streaming to receive portions of the response as they're generated, rather than waiting for the complete response.",
          <Play className="w-7 h-7 text-orange-500" />
        );
      case 'using-plugins':
        return renderPlaceholderContent(
          "Using Plugins",
          "Extend the capabilities of our API with plugins that enable specialized functionality like web browsing, data analysis, or integration with external services.",
          <Terminal className="w-7 h-7 text-indigo-500" />
        );
      case 'sdks':
        return renderPlaceholderContent(
          "SDKs & Libraries",
          "We offer a variety of client libraries to make integrating with our API easier in your preferred programming language. These SDKs handle authentication, error handling, and provide convenient methods for all API endpoints.",
          <Code className="w-7 h-7 text-cyan-500" />
        );
      case 'faq':
        return renderPlaceholderContent(
          "Frequently Asked Questions",
          "Find answers to common questions about our API, including billing, usage, model capabilities, and troubleshooting tips.",
          <MessageSquare className="w-7 h-7 text-yellow-500" />
        );
      default:
        return null;
    }
  };

  // Navigation item component
  const NavItem = ({ section, icon }: { section: string; icon: JSX.Element }) => {
    const formattedSection = section.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    const isActive = activeSection === section;
    
    return (
      <li>
        <button
          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left ${
            isActive
              ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
          }`}
          onClick={() => {
            setActiveSection(section);
            if (window.innerWidth < 768) {
              setSidebarOpen(false);
            }
          }}
        >
          {icon}
          {formattedSection}
        </button>
      </li>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Documentation</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
        
        {/* Sidebar/Navigation */}
        <aside className={`md:w-64 flex-shrink-0 ${sidebarOpen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4 overflow-auto' : 'hidden md:block'}`}>
          {sidebarOpen && (
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Documentation</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
          
          {/* Search */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Navigation lists */}
          <nav>
            <div className="mb-6">
              <div className="flex items-center gap-2 px-3 mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                <Hash className="w-4 h-4" />
                Getting Started
              </div>
              <ul className="space-y-1">
                {filteredSections.filter(s => ['introduction', 'authentication', 'rate-limits', 'errors'].includes(s)).map(section => (
                  <NavItem
                    key={section}
                    section={section}
                    icon={
                      section === 'introduction' ? <FileText className="w-4 h-4" /> :
                      section === 'authentication' ? <Key className="w-4 h-4" /> :
                      section === 'rate-limits' ? <Terminal className="w-4 h-4" /> :
                      <X className="w-4 h-4" />
                    }
                  />
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center gap-2 px-3 mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                <Hash className="w-4 h-4" />
                API Endpoints
              </div>
              <ul className="space-y-1">
                {filteredSections.filter(s => ['text-completion', 'chat-completion', 'image-generation', 'stream-response'].includes(s)).map(section => (
                  <NavItem
                    key={section}
                    section={section}
                    icon={
                      section === 'text-completion' ? <FileText className="w-4 h-4" /> :
                      section === 'chat-completion' ? <MessageSquare className="w-4 h-4" /> :
                      section === 'image-generation' ? <ImageIcon className="w-4 h-4" /> :
                      <Play className="w-4 h-4" />
                    }
                  />
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-2 px-3 mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                <Hash className="w-4 h-4" />
                Resources
              </div>
              <ul className="space-y-1">
                {filteredSections.filter(s => ['using-plugins', 'sdks', 'faq'].includes(s)).map(section => (
                  <NavItem
                    key={section}
                    section={section}
                    icon={
                      section === 'using-plugins' ? <Terminal className="w-4 h-4" /> :
                      section === 'sdks' ? <Code className="w-4 h-4" /> :
                      <MessageSquare className="w-4 h-4" />
                    }
                  />
                ))}
              </ul>
            </div>
            
            {/* External links */}
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="px-3 mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                External Resources
              </div>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://github.com/SreejanPersonal/ai4free-wrapper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Repository
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/devsdocode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Community Support
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a
                    href="/models"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    <Database className="w-4 h-4" />
                    Available Models
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <div className="flex-1">
          <div className="hidden md:block">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Everything you need to know to integrate with our AI API.
              </p>
            </div>
          </div>
          
          {/* Version info */}
          <div className="flex items-center gap-3 mb-8 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
            <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-800">
              <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="font-medium">Current API Version: v1</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Documentation for Sree.shop API v1. All endpoints are accessible at https://api.sree.shop/v1/
              </p>
            </div>
          </div>
          
          {/* Documentation Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Documentation;
