import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className='container mx-auto flex justify-between items-center p-4'>
                <div className='text-2xl font-bold'>
                    <Link href='/'>My Portfolio</Link>    
                </div>                
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-blue-400">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-400">
                        About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-blue-400">
                        Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:text-blue-400">
                        Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-400">
                        Contact
                        </Link>
                    </li>
                </ul>
                <div className='md:hidden'>
                    <button className='text-2xl'>&#9776;</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;