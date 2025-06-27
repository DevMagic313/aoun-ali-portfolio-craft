
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'bg-orange-500', status: 'Proficient' },
    { name: 'CSS', level: 85, color: 'bg-blue-500', status: 'Proficient' },
    { name: 'Bootstrap', level: 80, color: 'bg-purple-500', status: 'Proficient' },
    { name: 'JavaScript', level: 40, color: 'bg-yellow-500', status: 'Learning' },
    { name: 'React.js', level: 30, color: 'bg-cyan-500', status: 'Learning' },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are the technologies I work with and the ones I'm currently learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  skill.status === 'Proficient' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {skill.status}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
              <div className="text-right text-sm text-gray-600 font-medium">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">3+</div>
            <div className="text-gray-700 font-medium">Technologies</div>
            <div className="text-sm text-gray-600">Mastered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
            <div className="text-gray-700 font-medium">Technologies</div>
            <div className="text-sm text-gray-600">Currently Learning</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">5+</div>
            <div className="text-gray-700 font-medium">Projects</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
