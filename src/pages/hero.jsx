import React, { useState } from "react";
import {ReactTyped} from "react-typed";
import pic from "../assets/pic.png";
import ContactForm from "../components/ContactForm";
import cvFile from "../assets/CV.pdf";

function Hero() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <>
      <section
        id="home"
        className="flex flex-col md:h-[92vh] pb-10 md:flex-row justify-between px-6 pt-16 md:px-20 dark:bg-gray-900 bg-gray-50 transition-colors duration-300"
      >
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2">
          <p className="text-3xl text-gray-600 dark:text-gray-400 mt-10 font-bold">
            Hi, I am
          </p>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-5xl md:text-6xl font-extrabold mt-2 mb-8 drop-shadow-md font-serif">
            Kasun Lakshitha
          </h1>
          <div className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-100 drop-shadow-md">
            <ReactTyped
              className="transition-transform hover:scale-105"
              strings={[
                "Software Engineer (Undergraduate)",
                "Frontend Developer",
                "Backend Developer",
                "Mobile App Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
          <p className="text-gray-600 dark:text-gray-200 mt-6 leading-7 text-2xl">
            Passionate about building software solutions, interactive web apps,
            and sleek mobile applications. I love crafting user-friendly
            experiences and solving complex problems with code.
          </p>
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <button
              onClick={toggleContactForm}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg shadow-lg hover:from-red-500 hover:to-yellow-500 hover:shadow-xl transform transition-transform duration-200"
            >
              Contact Me
            </button>
            <a
              href={cvFile}
              download="Kasun_Lakshitha_CV.pdf"
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white hover:shadow-xl transform transition-transform duration-200"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-5 md:-mt-26 md:w-1/2 flex justify-center">
          <div className="relative group">
            <img
              className="rounded-full w-60 h-60 md:w-96 md:h-96 border-8 border-orange-500 shadow-lg transform group-hover:scale-105 transition-transform duration-300 hover:border-orange-600 hover:border-10"
              src={pic}
              alt="Kasun Lakshitha"
            />
          </div>
        </div>
      </section>

      {/* Contact Form Popup */}
      {showContactForm && <ContactForm onClose={toggleContactForm} />}
    </>
  );
}

export default Hero;
