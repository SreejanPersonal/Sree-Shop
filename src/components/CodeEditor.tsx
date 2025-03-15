import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Code2, Terminal } from 'lucide-react';

interface CodeEditorProps {
  initialCode: string;
  language: string;
  theme?: 'light' | 'dark';
  isResponse?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, language, theme = 'dark', isResponse = false }) => {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Enhanced styles for better contrast
  const customStyle = theme === 'dark' ? {
    ...oneDark,
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      background: '#1a1b26', // Darker background for better contrast
      color: '#a9b1d6', // Softer text color
    },
    'pre[class*="language-"]': {
      ...oneDark['pre[class*="language-"]'],
      background: '#1a1b26',
    },
    comment: {
      ...oneDark.comment,
      color: '#565f89' // More visible comments
    },
    string: {
      ...oneDark.string,
      color: '#9ece6a' // Brighter strings
    },
    keyword: {
      ...oneDark.keyword,
      color: '#bb9af7' // More vibrant keywords
    },
    function: {
      ...oneDark.function,
      color: '#7aa2f7' // Brighter functions
    }
  } : {
    ...oneLight,
    'code[class*="language-"]': {
      ...oneLight['code[class*="language-"]'],
      background: '#f8fafc', // Lighter background
      color: '#1e293b', // Darker text for contrast
    },
    'pre[class*="language-"]': {
      ...oneLight['pre[class*="language-"]'],
      background: '#f8fafc',
    },
    comment: {
      ...oneLight.comment,
      color: '#64748b' // More visible comments in light mode
    }
  };

  return (
    <div className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      {/* Editor Header */}
      <div className="sticky top-0 left-0 right-0 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 z-10">
        <div className="flex items-center gap-4">
          {/* Window Controls */}
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500"></div>
          </div>
          
          {/* Language Badge */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-900 text-xs font-medium">
            {isResponse ? (
              <Terminal className="w-3.5 h-3.5 text-green-500" />
            ) : (
              <Code2 className="w-3.5 h-3.5 text-blue-500" />
            )}
            <span className="text-gray-600 dark:text-gray-300">
              {language}
            </span>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`p-2 rounded-lg transition-colors ${
            copied
              ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
              : 'bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300'
          }`}
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/50"></div>
        <div className="relative">
          <SyntaxHighlighter
            language={language}
            style={customStyle}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              minWidth: '100%',
              borderRadius: '0',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-x-6 top-[4.5rem] h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50"></div>
      <div className="absolute left-0 top-12 bottom-0 w-px bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent opacity-50"></div>
      <div className="absolute right-0 top-12 bottom-0 w-px bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent opacity-50"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50"></div>
    </div>
  );
};

export default CodeEditor;