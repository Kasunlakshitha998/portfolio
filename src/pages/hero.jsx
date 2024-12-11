import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import pic from "../assets/pic.png";
import ContactForm from "../components/ContactForm";
import cvFile from "../assets/CV.pdf";

function Hero() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <>
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:h-[92vh] pb-10 md:flex-row justify-between px-6 md:pt-10 md:px-20 dark:bg-gray-900 bg-gray-50 transition-colors duration-300 overflow-hidden"
      >
        {/* Image Section mobile */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="my-10 flex md:hidden justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <motion.img
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="rounded-full w-60 h-60 md:w-96 md:h-96 border-8 border-orange-500 shadow-2xl object-cover"
              src={pic}
              alt="Kasun Lakshitha"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              👋
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left md:pt-10 md:w-1/2 space-y-4"
        >
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium tracking-wide font-sans"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-5xl md:text-6xl font-extrabold mt-2 mb-4 drop-shadow-md font-['Montserrat']"
          >
            Kasun Lakshitha
          </motion.h1>

          <div className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-gray-100 drop-shadow-md md:py-3">
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

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-xl text-gray-600 dark:text-gray-400 mt-4 pb-6 leading-relaxed font-['Open_Sans']"
          >
            Passionate about building software solutions, interactive web apps,
            and sleek mobile applications. I love crafting user-friendly
            experiences and solving complex problems with code.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleContactForm}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg shadow-lg hover:from-red-500 hover:to-yellow-500 hover:shadow-xl transition-all duration-300 font-['Poppins'] text-lg"
            >
              Contact Me
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={cvFile}
              download="Kasun_Lakshitha_CV.pdf"
              className="border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-lg shadow-lg hover:bg-orange-500 hover:text-white hover:shadow-xl transition-all duration-300 font-['Poppins'] text-lg"
            >
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            delay: 0.5,
          }}
          className="hidden  mt-5 md:-mt-26 md:w-1/2 md:flex justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <motion.img
              initial={{ rotate: -5 }}
              animate={{ rotate: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="rounded-full w-60 h-60 md:w-96 md:h-96 border-8 border-orange-500 shadow-2xl object-cover"
              src={pic}
              alt="Kasun Lakshitha"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              👋
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Contact Form Popup */}
      <AnimatePresence>
        {showContactForm && <ContactForm onClose={toggleContactForm} />}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&family=Poppins:wght@400;600&family=Roboto:wght@400;700&display=swap");

        .typing-effect {
          display: inline-block;
          position: relative;
          animation: typing 2s steps(40, end) infinite;
          white-space: nowrap;
          overflow: hidden;
          border-right: 2px solid orange;
          max-width: 100%;
        }

        @keyframes typing {
          0%,
          100% {
            width: 0;
          }
          50% {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Hero;