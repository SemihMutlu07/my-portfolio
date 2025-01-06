import projects from './projects.json';

const Projects = () => {
  return (
    <main className="bg-white min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 mt-4 block"
              >
                Learn More
              </a>
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-800">Technologies:</h3>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
