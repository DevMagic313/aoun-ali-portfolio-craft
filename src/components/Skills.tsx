
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500', status: 'Proficient' },
    { name: 'CSS', level: 85, color: 'bg-blue-500', status: 'Proficient' },
    { name: 'Bootstrap', level: 80, color: 'bg-purple-500', status: 'Proficient' },
    { name: 'JavaScript', level: 40, color: 'bg-yellow-500', status: 'Learning' },
    { name: 'React.js', level: 30, color: 'bg-cyan-500', status: 'Learning' },
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
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            Here are the technologies I work with and the ones I'm currently learning
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  skill.status === 'Proficient' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                }`}>
                  {skill.status}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2">
                <motion.div 
                  className={`h-3 rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
              <div className="text-right text-sm text-gray-600 dark:text-gray-400 font-medium">
                {skill.level}%
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Mastered</div>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Technologies</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Currently Learning</div>
          </motion.div>
          <motion.div 
            className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">5+</div>
            <div className="text-gray-700 dark:text-gray-300 font-medium">Projects</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
