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

  return (
    <div className="relative group">
      {/* Editor Header */}
      <div className="sticky top-0 left-0 right-0 h-12 bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-2 sm:px-4 z-10">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Window Controls */}
          <div className="hidden sm:flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover:bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover:bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover:bg-green-500"></div>
          </div>
          
          {/* Language Badge */}
          <div className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-900/50 text-xs font-medium">
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
          className="p-1.5 rounded-lg bg-gray-100 dark:bg-gray-900/50 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="pt-12">
        <SyntaxHighlighter
          language={language}
          style={theme === 'dark' ? oneDark : oneLight}
          customStyle={{
            margin: 0,
            padding: '1rem',
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            minWidth: '100%',
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

      {/* Decorative Elements */}
      <div className="absolute inset-x-6 top-[4.5rem] h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50"></div>
      <div className="absolute left-0 top-12 bottom-0 w-px bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent opacity-50"></div>
      <div className="absolute right-0 top-12 bottom-0 w-px bg-gradient-to-b from-gray-200 dark:from-gray-700 to-transparent opacity-50"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent opacity-50"></div>
    </div>
  );
};

export default CodeEditor;