
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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            onClick={scrollToTop}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent 
                       cursor-pointer hover:from-blue-300 hover:to-purple-300 transition-all duration-300 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Aoun Ali
          </motion.div>
          <p className="text-gray-400 mt-2 text-lg">Full Stack Developer</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-4 text-white">About Me</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate developer creating amazing web experiences with modern technologies. 
              Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/aounali", label: "GitHub" },
                { icon: Mail, href: "mailto:aounali.developer@gmail.com", label: "Email" },
                { icon: Code, action: () => scrollToSection('skills'), label: "Skills" }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={item.action || (() => window.open(item.href, '_blank'))}
                  className="p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                             transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-4 text-white">Quick Links</h4>
            <div className="space-y-3">
              {[
                { label: 'About Me', id: 'about' },
                { label: 'My Skills', id: 'skills' },
                { label: 'Projects', id: 'projects' },
                { label: 'Contact', id: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-200 text-left"
                  whileHover={{ x: 8 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-4 text-white">Technologies</h4>
            <div className="grid grid-cols-2 gap-2">
              {['React', 'TypeScript', 'Node.js', 'MongoDB', 'Python', 'Tailwind', 'Next.js', 'Express'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-gray-800 rounded-lg text-gray-300 text-sm hover:bg-gradient-to-r 
                             hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-xl mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={18} />
                <span className="text-sm">aounali.developer@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={18} />
                <span className="text-sm">Pakistan</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Code size={18} />
                <span className="text-sm">Available for freelance</span>
              </div>
            </div>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
                         font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:translate-x-1 transition-transform inline-block">Let's Talk</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-gray-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center gap-2 text-center md:text-left">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Aoun Ali
              <span className="text-gray-600">•</span>
              <span className="text-sm">{new Date().getFullYear()}</span>
            </p>
            
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 
                         rounded-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={18} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Back to Top</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
