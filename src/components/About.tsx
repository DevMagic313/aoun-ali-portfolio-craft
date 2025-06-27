
import React from 'react';
import { Book, Code, User } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Aoun Ali, a beginner frontend developer from Pakistan with a passion for creating 
              beautiful and functional web experiences. My journey in web development started with 
              HTML and CSS, and I quickly fell in love with the process of bringing designs to life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy building responsive websites using HTML, CSS, and Bootstrap. Currently, 
              I'm exploring JavaScript and React.js to create more dynamic and interactive web 
              applications. Every day brings new learning opportunities, and I'm excited to grow 
              as a developer.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you can find me reading about the latest web technologies, 
              watching coding tutorials, or working on personal projects to sharpen my skills.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg mr-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Frontend Focus</h3>
              </div>
              <p className="text-gray-600">
                Specializing in frontend technologies with a focus on creating responsive, 
                user-friendly interfaces that provide excellent user experiences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 rounded-lg mr-4">
                  <Book className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Continuous Learning</h3>
              </div>
              <p className="text-gray-600">
                Always eager to learn new technologies and improve my skills. Currently 
                diving deep into JavaScript and React.js to expand my capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-lg mr-4">
                  <User className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Problem Solver</h3>
              </div>
              <p className="text-gray-600">
                I enjoy tackling challenges and finding creative solutions to complex problems. 
                Every bug is a learning opportunity!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
