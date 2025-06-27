
import React from 'react';
import { Book, Code, User, Zap, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { icon: Code, label: "Technologies", value: "5+", color: "from-blue-500 to-cyan-500" },
    { icon: Target, label: "Projects", value: "10+", color: "from-purple-500 to-pink-500" },
    { icon: Zap, label: "Experience", value: "2+", color: "from-green-500 to-emerald-500" },
    { icon: Heart, label: "Satisfaction", value: "100%", color: "from-red-500 to-orange-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
              I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Aoun Ali</span>, a passionate full-stack developer from Pakistan 
              who transforms ideas into exceptional digital experiences. My journey began with HTML and CSS, 
              and has evolved into mastering modern web technologies.
            </motion.p>
            
            <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
              I specialize in creating responsive, user-friendly applications using React.js, TypeScript, and modern 
              design principles. Every project is an opportunity to push boundaries and deliver solutions that make a difference.
            </motion.p>
            
            <motion.p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed" variants={itemVariants}>
              When I'm not coding, you'll find me exploring the latest web technologies, contributing to open-source projects, 
              or mentoring fellow developers in the community.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 pt-4" variants={itemVariants}>
              {['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 
                                           text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Code,
                title: "Frontend Excellence",
                description: "Crafting pixel-perfect, responsive interfaces with React, TypeScript, and modern CSS frameworks.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Book,
                title: "Continuous Learning",
                description: "Always staying ahead of the curve by learning new technologies and best practices.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: User,
                title: "User-Centric Design",
                description: "Creating intuitive experiences that delight users and solve real-world problems.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${item.gradient} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg 
                         border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl mb-4`}>
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
