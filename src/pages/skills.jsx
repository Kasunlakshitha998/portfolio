import React from "react";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      title: "Web Development",
      icon: <FaReact />,
      description: [
        "HTML5",
        "CSS3",
        "React.js",
        "React Native",
        "Tailwind",
        "Bootstrap",
      ],
      proficiency: 90,
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      description: ["Node.js", "Express.js"],
      proficiency: 80,
    },
    {
      title: "Databases",
      icon: <FaDatabase />,
      description: ["MySQL", "MongoDB"],
      proficiency: 85,
    },
    {
      title: "Programming Languages",
      icon: <FaDatabase />,
      description: ["JavaScript", "Java", "C", "C++", "Python", "PHP"],
      proficiency: 70,
    },
  ];

  return (
    <section
      id="skills"
      className="px-6 py-12 md:px-20 dark:bg-gray-800 bg-gray-50"
    >
      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 mb-12 text-center">
        My Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            {/* Skill Icon */}
            <div className="flex items-center mb-4 text-orange-500 text-3xl">
              <div className="mr-3">{skill.icon}</div>
              <h4 className="text-lg font-bold">{skill.title}</h4>
            </div>

            {/* Skill Description */}
            <ul className="text-gray-700 dark:text-gray-300 space-y-1 mb-4">
              {skill.description.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Proficiency Bar */}
            <div className="relative h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full">
              <div
                className="absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
            <p className="text-sm text-right mt-2 text-gray-600 dark:text-gray-400">
              Proficiency: {skill.proficiency}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
