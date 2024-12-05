import React from 'react'
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="px-6 py-12 md:px-20">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Skills
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="text-orange-500 font-bold flex items-center">
            <FaReact className="mr-2" /> Web Development
          </h4>
          <p> HTML5, CSS3, React js, React Native, Tailwind, Bootstrap</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-bold flex items-center">
            <FaNodeJs className="mr-2" /> Backend
          </h4>
          <p>Node.js, Express.js</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-bold flex items-center">
            <FaDatabase className="mr-2" /> Databases
          </h4>
          <p>MySQL, MongoDB</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-bold flex items-center">
            <FaDatabase className="mr-2" /> Programming Language
          </h4>
          <p>JavaScript, Java, C, C++, Python, PHP</p>
        </div>
      </div>
    </section>
  );
}

export default Skills