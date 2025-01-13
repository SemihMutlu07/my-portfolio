import Hero from './components/home/Hero';
import FeaturedProject from './components/home/FeaturedProject';

const Home = () => {
  return (
    <main className="bg-gray-100 min-h-screen flex flex-col items-center px-6">
      <Hero />
      <FeaturedProject />
    </main>
  );
};

export default Home;
