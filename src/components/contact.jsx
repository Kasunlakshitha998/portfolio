import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="px-6 py-12 md:px-20 text-center">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Contact Me
      </h3>
      <p>Email: kasunlakshitha998@gmail.com</p>
      <p>Phone: 0766418699</p>
      <div className="flex justify-center space-x-4 mt-6">
        <a
          href="https://github.com/Kasunlakshitha998"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-orange-500 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kasun-lakshitha-53a9472a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-orange-500 text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}

export default Contact