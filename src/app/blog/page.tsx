import { getAllPosts } from '../utils/blog';

const Blog = () => {
    const posts = getAllPosts();

    return (
        <main className='bg-gray-50 min-h-screen py-10 px-6'>
            <div className='container mx-auto'>
                <h1 className='text-4xl font-bold text-gray-800 text-center mb-8'>
                    Blog
                </h1>
                <ul className='space-y-6'>
                    {posts.map((post) => (
                        <li key={post.slug} className='bg-white p-6 rounded-lg shadow hover:shadow-lg'>
                            <a href={`/blog/${post.slug}`} className="block">
                                <h2 className='txt-2xl font-bold text-gray-800'>{post.title}</h2>
                                <p className='text-gray-600 mt-2'>{post.description}</p>
                                <p className='text-sm text-gray-500 mt-1'>{post.date}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Blog;