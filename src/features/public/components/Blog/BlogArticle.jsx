import React from "react";

import { articles } from "../../../../data/Blog/blogArticle";
import { Link } from "react-router-dom";

const BlogArticle = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white mb-9 rounded-lg shadow-lg hover:scale-105 overflow-hidden hover:shadow-lg transition-transform border"
          >
            {/* Image Section */}
            <div className="relative h-[350px] w-full p-4">
              <img
                src={article.image}
                alt={article.title}
                className="object-cover w-[380px] h-[330px] rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between p-6 h-[220px]">
              <h3 className="text-xl text-primary font-bold mb-3 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-secondary text-base mb-4 line-clamp-2">
                {article.description}
              </p>
              <Link
                to={article.link}
                className="text-primary font-semibold text-base hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogArticle;
