'use client';

import { useState } from 'react';
import Post  from '../utils/blog'

const BlogClient = ({ posts }: { posts: Post[] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories || []))
  );

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory ? post.categories.includes(selectedCategory) : true) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const paginatedPosts = filteredPosts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Blog</h1>

        {/* Search */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search posts..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded shadow ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category ? null : category
                )
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts */}
        <ul className="space-y-6">
          {paginatedPosts.map((post) => (
            <li
              key={post.slug}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </a>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-4 py-2 rounded ${
                page === index + 1
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogClient;
