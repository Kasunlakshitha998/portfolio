import React from 'react'

function Project() {
  return (
    <section
      id="projects"
      className="px-6 py-12 md:px-20 bg-gray-100 dark:bg-gray-800"
    >
      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded shadow-md bg-white dark:bg-gray-900">
          <h4 className="text-orange-500 font-bold">UniWell App</h4>
          <p className="dark:text-white">
            React Native Expo App mental health app.
          </p>
        </div>
        <div className="p-6 border rounded shadow-md bg-white dark:bg-gray-900">
          <h4 className="text-orange-500 font-bold">E-Commerce Site</h4>
          <p className="dark:text-white">MERN Stack online store.</p>
        </div>
        <div className="p-6 border rounded shadow-md bg-white dark:bg-gray-900">
          <h4 className="text-orange-500 font-bold">Hospital Managment System</h4>
          <p className="dark:text-white">MERN Stack Patient Managment.</p>
        </div>
        <div className="p-6 border rounded shadow-md bg-white dark:bg-gray-900">
          <h4 className="text-orange-500 font-bold">Employee Managment System</h4>
          <p className="dark:text-white">Java Web Application Manage the employees.</p>
        </div>
      </div>
    </section>
  );
}

export default Project