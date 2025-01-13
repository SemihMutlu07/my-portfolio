const Contact = () => {
  const contacts = [
    { name: 'GitHub', url: 'https://github.com/yourusername', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/semihmutsuz/', icon: '🔗' },
    { name: 'Instagram', url: 'https://www.instagram.com/semihmutsuz/', icon: '📸' },
    { name: 'Letterboxd', url: 'https://letterboxd.com/anlaki/', icon: '🎥' },
    {
      name: 'Mail me Here',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=semihmutlu220@gmail.com', // Gmail compose link
      icon: '✉️',
    },  ];

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Contact Me
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Connect with me on these platforms!
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200"
            >
              {/* Emoji */}
              <span className="text-4xl mb-4">{contact.icon}</span>
              {/* Platform Name */}
              <h2 className="text-xl font-semibold text-gray-800">
                {contact.name}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Contact;
