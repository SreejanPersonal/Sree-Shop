import React, { useState } from 'react';
import { Heart, Star, Coffee, Github, Code2, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Contributor {
  github: string;
  role: string;
  description: string;
  contributions: string[];
  skills: string[];
  joinedAt: string;
}

const contributors: Contributor[] = [
  {
    github: "springmusk026",
    role: "Backend Developer",
    description: "Building robust and scalable backend systems",
    contributions: [
      "API Development",
      "Database Design",
      "Security Implementation"
    ],
    skills: ["Node.js", "PostgreSQL", "System Design", "API Development"],
    joinedAt: "2023"
  },
  {
    github: "imChronos",
    role: "Core Developer",
    description: "Driving innovation in AI infrastructure and system architecture",
    contributions: [
      "API Infrastructure Development",
      "Performance Optimization",
      "System Architecture"
    ],
    skills: ["Python", "FastAPI", "DevOps", "AI/ML"],
    joinedAt: "2023"
  },
  {
    github: "nileshpatil6",
    role: "Integration Specialist",
    description: "Ensuring seamless integration of AI models and services",
    contributions: [
      "AI Model Integration",
      "API Compatibility",
      "Testing & QA"
    ],
    skills: ["Python", "AI Integration", "Testing", "Documentation"],
    joinedAt: "2023"
  }
];

function About() {
  const [hoveredContributor, setHoveredContributor] = useState<string | null>(null);
  const [pinnedContributor, setPinnedContributor] = useState<string | null>(null);

  const handleMouseEnter = (github: string) => {
    if (!pinnedContributor) {
      setHoveredContributor(github);
    }
  };

  const handleMouseLeave = () => {
    if (!pinnedContributor) {
      setHoveredContributor(null);
    }
  };

  const togglePin = (github: string) => {
    if (pinnedContributor === github) {
      setPinnedContributor(null);
      setHoveredContributor(null);
    } else {
      setPinnedContributor(github);
      setHoveredContributor(github);
    }
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Built with ❤️ by the community</span>
          </div>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Making AI Accessible to Everyone
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We believe in democratizing AI technology and making it available to developers worldwide.
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
          {/* Special Thanks Section */}
          <div className="space-y-6">
            {/* NiansuhAI Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Star className="w-6 h-6 text-amber-400" />
                Special Thanks
              </h2>
              
              {/* NiansuhAI */}
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  This project wouldn't be possible without the incredible contribution of NiansuhAI. As the original creator of the API infrastructure, his vision and expertise laid the foundation for what Sree.shop has become today.
                </p>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img
                      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
                      alt="NiansuhAI"
                      className="w-16 h-16 rounded-full ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 object-cover bg-white dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">NiansuhAI</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The OG creator who made this possible
                    </p>
                  </div>
                </div>
              </div>

              {/* OE-LUCIFER */}
              <div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A special shoutout to OE-LUCIFER, our resident chaos coordinator and bug-hunting extraordinaire. When he's not breaking things to make them better, he's probably plotting world domination through perfectly aligned code.
                </p>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <img
                      src="https://github.com/OE-LUCIFER.png"
                      alt="OE-LUCIFER"
                      className="w-16 h-16 rounded-full ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300 object-cover bg-white dark:bg-gray-700"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">OE-LUCIFER</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The debugging wizard who makes bugs disappear like magic ✨
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contributors Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                  <Code2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold">Key Contributors</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {contributors.map((contributor) => (
                  <div
                    key={contributor.github}
                    className="group relative"
                    onMouseEnter={() => handleMouseEnter(contributor.github)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Base Card */}
                    <div className="relative h-full p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-600 transition-all duration-300 group-hover:border-purple-500 dark:group-hover:border-purple-400">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                            <img
                              src={`https://github.com/${contributor.github}.png`}
                              alt={contributor.github}
                              className="w-12 h-12 rounded-full ring-2 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-sm">{contributor.github}</h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">{contributor.role}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => togglePin(contributor.github)}
                          className={`p-1.5 rounded-lg transition-colors ${
                            pinnedContributor === contributor.github
                              ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400'
                              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
                          }`}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${
                            (hoveredContributor === contributor.github || pinnedContributor === contributor.github) ? 'rotate-180' : ''
                          }`} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {contributor.description}
                      </p>
                    </div>

                    {/* Hover/Pinned Card */}
                    {(hoveredContributor === contributor.github || pinnedContributor === contributor.github) && (
                      <div 
                        className="absolute -top-2 left-0 right-0 transform -translate-y-full z-10"
                        onMouseEnter={() => handleMouseEnter(contributor.github)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl blur-sm opacity-80"></div>
                          <div className="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-600">
                            <div className="space-y-4">
                              <div>
                                <h4 className="text-sm font-semibold mb-2">Key Contributions</h4>
                                <ul className="space-y-1">
                                  {contributor.contributions.map((contribution, index) => (
                                    <li key={index} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                                      {contribution}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="text-sm font-semibold mb-2">Skills</h4>
                                <div className="flex flex-wrap gap-1">
                                  {contributor.skills.map((skill, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 text-[10px] rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                                    >
                                      {skill}
                                    </span>
                                  ))}
                                </div>
                              </div>
                              <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                                <a
                                  href={`https://github.com/${contributor.github}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                                >
                                  <Github className="w-3 h-3" />
                                  View Profile
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Coffee className="w-6 h-6 text-amber-600" />
                Maintained with Love
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Hey there! I'm DevsDoCode, the current maintainer of this project. I'm passionate about making AI technology accessible to everyone, and that's exactly what we're doing here at Sree.shop.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Follow on GitHub</span>
                </a>
                <a
                  href="https://buymeacoffee.com/devsdocode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFDD00] hover:bg-[#FFDD00]/90 transition-colors text-black"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Buy me a coffee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
