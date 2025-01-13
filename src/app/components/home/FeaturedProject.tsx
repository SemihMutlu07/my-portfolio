import Image from 'next/image';

const FeaturedProject = () => {
  return (
    <div className="bg-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-8">Featured Project</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/assets/letterboxd-thumbnail.png"
          alt="Letterboxd Clone"
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4">Letterboxd Clone</h3>
          <p className="text-gray-600 mb-4">
            A social platform for movie enthusiasts with TMDb API integration,
            real-time updates, and responsive design. Real reason why I made
            this is that I hate the fact that Letterboxd won&apos;t do simple
            user-friendly stuff like liking a follower&apos;s comment on a
            review, or better activity feeds.
          </p>
          <p className="text-gray-800 mb-4">
            <strong>Technologies:</strong> React, Node.js, MongoDB, Tailwind CSS
          </p>
          <a
            href="/projects/letterboxd"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
