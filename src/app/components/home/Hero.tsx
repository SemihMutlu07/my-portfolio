import React from 'react';

const Hero = () => {
  return (
    <div className="bg-white py-16 px-6 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
        Hi, I&apos;m Semih.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        FrontEnd Dev at the moment. Want to be full-stack developer, seeks some
        interns, entrance-level jobs to get into it. Want to build its career on
        Educational technology.
      </p>
      <a
        href="/projects"
        className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 animate-bounce"
      >
        View My Projects
      </a>
    </div>
  );
};

export default Hero;
