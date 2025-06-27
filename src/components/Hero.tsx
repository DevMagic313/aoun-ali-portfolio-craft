
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Mail, ExternalLink } from 'lucide-react';
import { useThemeStore } from '../stores/themeStore';

const Hero = () => {
  const { isDark } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="animate-pulse">Loading...</div>
      </section>
    );
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-72 h-32 sm:h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-96 h-32 sm:h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8"
        >
          <div className="relative inline-block">
            <motion.img
              src="/lovable-uploads/c927644b-067a-48c4-88fe-8d01573900bc.png"
              alt="Aoun Ali"
              className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full mx-auto mb-6 sm:mb-8 object-cover border-4 sm:border-8 border-white dark:border-gray-800 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              loading="eager"
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aoun Ali
            </span>
          </h1>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.p>
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I create beautiful, responsive web applications using modern technologies. 
            Passionate about clean code and exceptional user experiences.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full 
                       font-semibold text-sm sm:text-base hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl
                       w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
            <ExternalLink size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection('contact')}
            className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full 
                       font-semibold text-sm sm:text-base hover:bg-blue-600 hover:text-white transition-all duration-300
                       w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get In Touch</span>
            <Mail size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/aounali", label: "GitHub" },
            { icon: Mail, href: "mailto:aounali.developer@gmail.com", label: "Email" },
            { icon: Download, action: () => window.open('/resume.pdf', '_blank'), label: "Resume" }
          ].map((item, index) => (
            <motion.button
              key={index}
              onClick={item.action || (() => window.open(item.href, '_blank'))}
              className="p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl 
                         text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 
                         transition-all duration-300 group border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title={item.label}
            >
              <item.icon size={20} className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs sm:text-sm mb-2 group-hover:translate-y-1 transition-transform">Scroll Down</span>
            <ArrowDown size={20} className="sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
