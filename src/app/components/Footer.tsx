const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Built by Semih Mutlu © {new Date().getFullYear()}
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/SemihMutlu07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/semihmutsuz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="semihmutlu220@gmail.com"
              className="hover:text-blue-400"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  