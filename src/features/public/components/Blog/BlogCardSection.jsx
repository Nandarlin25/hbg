import React from "react";
import { blogcard } from "../../../../data/Blog/blogCard";
import { Link } from "react-router-dom";
import Pagination from "../../../../components/Pagination";
import BlogNewSletter from "./BlogNewSletter";

const BlogSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogcard.map((blog) => (
            <div
              key={blog}
              className="bg-white mb-9 rounded-lg shadow-lg hover:scale-105 overflow-hidden hover:shadow-lg transition-transform border"
            >
              {/* Image Section */}
              <div className="relative h-[350px] w-full p-4">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="object-cover w-[380px] h-[330px] rounded-lg"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-primary text-xl font-bold font-emerald mb-2">
                  {blog.title}
                </h3>
                <p className="text-secondary text-sm line-clamp-2 overflow-hidden text-ellipsis">
                  {blog.paragraph}
                </p>
                <Link
                  to="/blog-details"
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
};

export default BlogSection;
 