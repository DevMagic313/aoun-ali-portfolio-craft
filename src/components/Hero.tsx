
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Mail, Code, Moon, Sun } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const fullText = "Frontend Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {darkMode ? <Sun size={24} className="text-yellow-500" /> : <Moon size={24} className="text-blue-600" />}
      </button>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Aoun Ali
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12">
              <span className="font-semibold">{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              A passionate Frontend Developer crafting clean and responsive websites using HTML, CSS, and Bootstrap. 
              Currently exploring JavaScript and React.js to create dynamic web applications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold 
                         hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold 
                         hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start">
            <a
              href="https://github.com/aounali"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Code size={24} />
            </button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img 
                  src="/lovable-uploads/c927644b-067a-48c4-88fe-8d01573900bc.png" 
                  alt="Aoun Ali - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Code size={24} className="text-yellow-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
