import React from 'react'

function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col h-screen md:flex-row justify-between px-6 py-12 md:px-20"
    >
      <div className="md:text-left">
        <p className="text-gray-600 dark:text-gray-400 mt-10">Hi, I am</p>
        <h1 className="text-orange-500 text-3xl font-bold mt-2 mb-8">
          Kasun Lakshitha
        </h1>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-gray-800 dark:text-gray-100 ">
          Software Engineer
        </h2>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-gray-800 dark:text-gray-100 mb-6">
          (Undergraduate)
        </h2>
        <p className="text-gray-600 mt-4 leading-6 dark:text-gray-400">
          Passionate about software development, web apps, and mobile apps.
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 rounded mt-16 hover:bg-orange-600">
          Hire Me
        </button>
      </div>
      <div className="mt-10 md:mt-10">
        <img
          className="rounded-full w-80 h-80 mx-auto md:mx-0 border-4 border-orange-500"
          src="https://via.placeholder.com/150"
          alt="Kasun Lakshitha"
        />
      </div>
    </section>
  );
}

export default Hero