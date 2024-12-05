import React, { useState } from "react";


import Contact from "./components/contact";
import Project from "./components/project";
import Skills from "./components/skills";
import About from "./components/about";
import Hero from "./components/hero";
import Header from "./components/header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }
    >
      {/* Header Section */}
      <Header/>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Project />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;
