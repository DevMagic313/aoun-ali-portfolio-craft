
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 95, color: 'from-orange-500 to-red-500', status: 'Expert' },
    { name: 'CSS', level: 90, color: 'from-blue-500 to-cyan-500', status: 'Expert' },
    { name: 'Bootstrap', level: 85, color: 'from-purple-500 to-pink-500', status: 'Proficient' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-500 to-orange-500', status: 'Proficient' },
    { name: 'React.js', level: 80, color: 'from-cyan-500 to-blue-500', status: 'Proficient' },
    { name: 'TypeScript', level: 70, color: 'from-blue-600 to-purple-600', status: 'Learning' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I work with and continuously improve upon
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl 
                         transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                  skill.status === 'Expert' 
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-300' 
                    : skill.status === 'Proficient'
                    ? 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 dark:from-blue-900/30 dark:to-cyan-900/30 dark:text-blue-300'
                    : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900/30 dark:to-orange-900/30 dark:text-yellow-300'
                }`}>
                  {skill.status}
                </span>
              </div>
              
              <div className="relative w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-4 overflow-hidden">
                <motion.div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Proficiency</span>
                <span className="text-lg font-bold text-gray-900 dark:text-white">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Frontend",
              count: "4+",
              description: "Technologies Mastered",
              gradient: "from-blue-500 to-cyan-500",
              icon: "💻"
            },
            {
              title: "Learning",
              count: "2",
              description: "New Technologies",
              gradient: "from-purple-500 to-pink-500",
              icon: "🚀"
            },
            {
              title: "Projects",
              count: "15+",
              description: "Completed Successfully",
              gradient: "from-green-500 to-emerald-500",
              icon: "🎯"
            },
            {
              title: "Experience",
              count: "2+",
              description: "Years of Coding",
              gradient: "from-orange-500 to-red-500",
              icon: "⚡"
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg 
                         border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.count}</div>
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">{stat.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
