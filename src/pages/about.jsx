import React from "react";

function About() {
  return (
    <section
      id="about"
      className="px-6 py-16 md:px-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300"
    >
      {/* Section Heading */}
      <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 text-center mb-12">
        About Me
      </h3>

      {/* Content */}
      <div className="flex flex-col items-center justify-between space-y-6 md:space-y-0">
        {/* Text Content */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
            I am a third-year Software Engineering undergraduate at SLIIT. I
            specialize in modern web and mobile app development, with a passion
            for crafting innovative solutions in the IT field.
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-200 mb-6">
            My goal is to collaborate with like-minded professionals to develop
            scalable, user-centric applications that solve real-world problems.
            I thrive on challenges and continuously look for opportunities to
            learn and grow.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
            Let's Connect
          </button>
        </div>

        
      </div>
    </section>
  );
}

export default About;
