import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import un from '../assets/uniwell.png'
import hs from "../assets/hs.png";

function Project() {
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
      title: "UniWell App",
      description: "React Native Expo App mental health app.",
      image: un, // Replace with your image URL
      github: "https://github.com/your-unwell-repo",
    },
    {
      title: "E-Commerce Site",
      description: "Online Mobile Store.",
      image: hs , // Replace with your image URL
      github: "https://github.com/Kasunlakshitha998/Y2S2ITP",
    },
    {
      title: "Hospital Management System",
      description: "MERN Stack Patient Management.",
      image: hs, // Replace with your image URL
      github: "https://github.com/Kasunlakshitha998/CSSEY3S1",
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
      ref={sectionRef} // Attach the ref
      id="projects"
      className="px-6 py-12 md:px-20 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-900"
    >
      <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-6 flex justify-center pb-5">
        Latest Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {isVisible &&
            projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Visible state
                exit={{ opacity: 0, y: -50 }} // Exit state
                transition={{ duration: 1, delay: index * 0.1 }} // Stagger effect
              >
                {/* Project Image */}
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
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
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg hover:from-red-500 hover:to-yellow-500 transform transition-transform duration-300"
                  >
                    View Repository
                  </a>
                </motion.div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Project;
