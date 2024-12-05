import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="px-6 py-12 md:px-20 text-center bg-gray-100 dark:bg-gray-800"
    >
      {/* Contact Section Header */}
      <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-6">
        Contact Me
      </h3>

      {/* Contact Information */}
      <p className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-3">
        Email:{" "}
        <a
          href="mailto:kasunlakshitha998@gmail.com"
          className="text-orange-500 hover:underline"
        >
          kasunlakshitha998@gmail.com
        </a>
      </p>
      <p className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-6">
        Phone Number : <span className="text-orange-500">0766418699</span>
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/Kasunlakshitha998"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-orange-500 text-3xl transition-transform transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kasun-lakshitha-53a9472a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-orange-500 text-3xl transition-transform transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/kasun_lakshitha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-orange-500 text-3xl transition-transform transform hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/KasunLakshitha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-orange-500 text-3xl transition-transform transform hover:scale-125"
        >
          <FaFacebook />
        </a>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 text-center bg-gray-800 text-white mt-12">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Kasun Lakshitha. All Rights
          Reserved.
        </p>
      </footer>
    </section>
  );
}

export default Contact;
