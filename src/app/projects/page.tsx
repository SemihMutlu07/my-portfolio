import projects from './projects.json';

const Projects = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-lg shadow hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
