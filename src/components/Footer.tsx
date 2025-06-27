
import React from 'react';
import { Github, Mail, Code, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div 
            onClick={scrollToTop}
            className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer hover:from-blue-300 hover:to-purple-300 transition-all duration-200"
          >
            Aoun Ali
          </div>
          <p className="text-gray-400 mt-2">Frontend Developer</p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com/aounali"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:aounali.developer@gmail.com"
            className="p-3 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
          <button
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-colors duration-200"
          >
            <Code size={24} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="block hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-2">Technologies</h4>
            <div className="space-y-2 text-gray-400">
              <div>HTML & CSS</div>
              <div>Bootstrap</div>
              <div>JavaScript</div>
              <div>React.js</div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-2">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div>aounali.developer@gmail.com</div>
              <div>Pakistan</div>
              <div>Available for opportunities</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Aoun Ali
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 Aoun Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
