const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          Welcome to My Portfolio!
        </h1>
        <p className="text-lg md:text-6xl font-bold text-gray-600">
          I&apos;m a passionate -wannabe- developer, exploring new technologies and creating innovative projects.
        </p>
        <div>
          <a 
            href="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600">
            View My Projects
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;