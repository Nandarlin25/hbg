import React from 'react';
import { blogcard } from '../../../Data/blogcard';
import { Link } from 'react-router-dom';
import Pagination from '../../../components/Pagination';
import BlogNewSletter from './BlogNewSletter';

const BlogSection = () => {
 
  return (
    <>
      <div className="container mx-auto py-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogcard.map((blog, index) => (
            <div
              key={index}
              className="bg-white mb-9 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-primary text-xl font-bold font-emerald mb-2">
                  {blog.title}
                </h3>
                <p className="text-secondary text-sm line-clamp-2 overflow-hidden text-ellipsis">
                  {blog.paragraph}
                </p>
                <Link
                  to="/blog-detail"
                  className="text-primary mt-4 inline-block font-medium hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 mb-8">
          <Pagination />
        </div>
        <div className="mt-10 mb-8">
          <BlogNewSletter />
        </div>
      </div>
    </>
  );
}

export default BlogSection;
