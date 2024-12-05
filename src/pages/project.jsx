import React from "react";

function Project() {
  const projects = [
    {
      title: "UniWell App",
      description: "React Native Expo App mental health app.",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      github: "https://github.com/your-unwell-repo",
    },
    {
      title: "E-Commerce Site",
      description: "MERN Stack online store.",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      github: "https://github.com/your-ecommerce-repo",
    },
    {
      title: "Hospital Management System",
      description: "MERN Stack Patient Management.",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      github: "https://github.com/your-hospital-repo",
    },
    {
      title: "Employee Management System",
      description: "Java Web Application Manage the employees.",
      image: "https://via.placeholder.com/300x200", // Replace with your image URL
      github: "https://github.com/your-employee-repo",
    },
  ];

  return (
    <section
      id="projects"
      className="px-6 py-12 md:px-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900"
    >
      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
        Latest Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Content */}
            <div className="p-6">
              <h4 className="text-lg font-bold text-orange-500 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
            </div>

            {/* Hover Overlay with GitHub Button */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:from-red-500 hover:to-yellow-500 transform transition-transform duration-300"
              >
                View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
