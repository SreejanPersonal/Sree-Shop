import React, { useEffect, useState } from 'react';
import { Heart, Star, Coffee, Github, Code2, Twitter, Globe, Linkedin } from 'lucide-react';

interface Contributor {
  github: string;
  role: string;
  description: string;
  skills: string[];
}

const contributors: Contributor[] = [
  {
    github: "springmusk026",
    role: "Backend Developer",
    description: "Building robust and scalable backend systems",
    skills: ["Node.js", "PostgreSQL", "System Design", "API Development"]
  },
  {
    github: "imChronos",
    role: "Core Developer",
    description: "Driving innovation in AI infrastructure",
    skills: ["Python", "FastAPI", "DevOps", "AI/ML"]
  },
  {
    github: "nileshpatil6",
    role: "Integration Specialist",
    description: "Ensuring seamless AI integration",
    skills: ["Python", "AI Integration", "Testing", "Documentation"]
  }
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Main Profile Section - 60% */}
        <div className={`mb-24 opacity-0 ${isVisible ? 'animate-slideUp' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-premium-lg">
              <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/5 to-light-accent-500/5 dark:from-dark-primary-400/5 dark:to-dark-accent-400/5"></div>
              
              <div className="relative px-8 py-12">
                <div className="md:flex items-start gap-12">
                  {/* Profile Image */}
                  <div className="md:w-1/3 mb-8 md:mb-0">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 rounded-xl opacity-50 group-hover:opacity-70 blur transition-all duration-500"></div>
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <img
                          src="https://github.com/devsdocode.png"
                          alt="DevsDoCode"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    <div className="mt-8 space-y-3">
                      <a
                        href="https://github.com/devsdocode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 text-white rounded-xl transition-all duration-300 shadow-premium-sm hover:shadow-premium-lg"
                      >
                        <Github className="w-5 h-5" />
                        <span className="font-medium">Follow on GitHub</span>
                      </a>
                      <a
                        href="https://buymeacoffee.com/devsdocode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-black rounded-xl transition-all duration-300 shadow-premium-sm hover:shadow-premium-lg"
                      >
                        <Coffee className="w-5 h-5" />
                        <span className="font-medium">Buy me a coffee</span>
                      </a>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <a
                        href="https://github.com/SreejanPersonal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary rounded-xl transition-all duration-300 flex-1"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://twitter.com/devsdocode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white rounded-xl transition-all duration-300 flex-1"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://linkedin.com/in/devsdocode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center p-3 bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white rounded-xl transition-all duration-300 flex-1"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Profile Content */}
                  <div className="md:w-2/3">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-light-primary-100/50 dark:bg-dark-primary-800/50 text-light-primary-600 dark:text-dark-primary-400 text-sm font-medium mb-6">
                      <Heart className="w-4 h-4" />
                      <span>Project Lead & Core Maintainer</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl font-bold text-light-text dark:text-dark-text mb-4">
                      DevsDoCode
                      <span className="text-xl sm:text-2xl text-light-text-secondary dark:text-dark-text-secondary ml-3">(Sree)</span>
                    </h1>
                    
                    <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8 leading-relaxed">
                      Passionate about democratizing AI technology and making it accessible to developers worldwide. Leading the development and maintenance of Sree.shop with innovation and excellence.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                      {[
                        { label: 'Contributions', value: '2.3k+' },
                        { label: 'Projects', value: '15+' },
                        { label: 'Experience', value: '5+ Years' },
                        { label: 'AI Models', value: '50+' }
                      ].map((stat, index) => (
                        <div
                          key={index}
                          className={`opacity-0 animate-slideUp delay-${(index + 1) * 100}`}
                        >
                          <div className="text-2xl font-bold text-light-text dark:text-dark-text mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'React', 'Node.js', 'TypeScript', 'Python',
                          'AI/ML', 'AWS', 'Docker', 'MongoDB'
                        ].map((tech, index) => (
                          <span
                            key={index}
                            className={`px-4 py-2 rounded-lg bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-secondary dark:text-dark-text-secondary text-sm font-medium hover:bg-light-bg-tertiary dark:hover:bg-dark-bg-tertiary transition-colors duration-300 opacity-0 animate-slideUp delay-${(index % 4 + 1) * 100}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Contributors Section - 30% */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-4">Core Contributors</h2>
            <div className="w-24 h-1 bg-gradient-premium from-light-primary-500 to-light-accent-500 dark:from-dark-primary-400 dark:to-dark-accent-400 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* NiansuhAI */}
              <div className="group">
                <div className="relative rounded-xl overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-premium-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 dark:from-purple-400/5 dark:to-pink-400/5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative rounded-full overflow-hidden w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img
                          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/385.png"
                          alt="NiansuhAI"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">NiansuhAI</h3>
                        <p className="text-purple-600 dark:text-purple-400">Original Creator & API Architect</p>
                      </div>
                    </div>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                      The visionary who laid the foundation for Sree.shop through innovative API infrastructure and system design.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['API Design', 'System Architecture', 'AI Integration'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Vortex */}
              <div className="group">
                <div className="relative rounded-xl overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-premium-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 dark:from-blue-400/5 dark:to-cyan-400/5"></div>
                  <div className="relative p-6">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="relative rounded-full overflow-hidden w-20 h-20">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <img
                          src="https://github.com/OE-LUCIFER.png"
                          alt="Vortex"
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text">Vortex</h3>
                        <p className="text-blue-600 dark:text-blue-400">Lead Developer & System Architect</p>
                      </div>
                    </div>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                      Our debugging wizard and chaos coordinator who ensures everything runs smoothly and efficiently.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['System Design', 'Performance', 'Security'].map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Contributors Section - 10% */}
        <div>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-light-text dark:text-dark-text mb-4">Additional Contributors</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-light-text-tertiary to-light-text-secondary dark:from-dark-text-tertiary dark:to-dark-text-secondary mx-auto mb-12"></div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {contributors.map((contributor, index) => (
                <a
                  key={index}
                  href={`https://github.com/${contributor.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-lg p-6 shadow-premium-sm hover:shadow-premium-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative rounded-full overflow-hidden w-16 h-16 mb-4">
                      <div className="absolute inset-0 bg-gradient-premium from-light-primary-500/20 to-light-accent-500/20 dark:from-dark-primary-400/20 dark:to-dark-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={`https://github.com/${contributor.github}.png`}
                        alt={contributor.github}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-2">
                      {contributor.github}
                    </h3>
                    <p className="text-sm text-light-text-tertiary dark:text-dark-text-tertiary mb-4">
                      {contributor.role}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {contributor.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 rounded-full bg-light-bg-tertiary dark:bg-dark-bg-tertiary text-light-text-secondary dark:text-dark-text-secondary text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
