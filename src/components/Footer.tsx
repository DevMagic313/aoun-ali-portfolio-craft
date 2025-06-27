
import React from 'react';
import { Github, Mail, Code, Heart, ArrowUp, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            onClick={scrollToTop}
            className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent 
                       cursor-pointer hover:from-blue-300 hover:to-purple-300 transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aoun Ali
          </motion.div>
          <p className="text-gray-400 mt-2 text-base sm:text-lg">Full Stack Developer</p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* About */}
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">About Me</h4>
            <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Passionate developer creating amazing web experiences with modern technologies. 
              Always learning, always growing.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {[
                { icon: Github, href: "https://github.com/aounali", label: "GitHub" },
                { icon: Mail, href: "mailto:aounali.developer@gmail.com", label: "Email" },
                { icon: Code, action: () => scrollToSection('skills'), label: "Skills" }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={item.action || (() => window.open(item.href, '_blank'))}
                  className="p-2 sm:p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                             transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon size={16} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              {[
                { label: 'About Me', id: 'about' },
                { label: 'My Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-white transition-all duration-200 text-sm sm:text-base mx-auto sm:mx-0"
                  whileHover={{ x: 8 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">Technologies</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto sm:max-w-none sm:mx-0">
              {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'Tailwind', 'Next.js', 'Express'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-2 sm:px-3 py-1 bg-gray-800 rounded-lg text-gray-300 text-xs sm:text-sm hover:bg-gradient-to-r 
                             hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white transition-all duration-200 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center sm:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-white">Get in Touch</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-400">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm break-all">aounali.developer@gmail.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-400">
                <MapPin size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">Pakistan</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-400">
                <Code size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-xs sm:text-sm">Available for freelance</span>
              </div>
            </div>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
                         font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:translate-x-1 transition-transform inline-block">Let's Talk</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-6 sm:pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 flex items-center gap-2 text-center text-xs sm:text-sm">
              Made with <Heart size={14} className="sm:w-4 sm:h-4 text-red-500 animate-pulse" /> by Aoun Ali
              <span className="text-gray-600">•</span>
              <span>{new Date().getFullYear()}</span>
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                         rounded-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px] group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
