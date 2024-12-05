import React from "react";
import Contact from "./pages/contact";
import Project from "./pages/project";
import Skills from "./pages/skills";
import About from "./pages/about";
import Hero from "./pages/hero";
import Header from "./pages/header";

function App() {


  return (
    <>
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
    </>
  );
}

export default App;
