import React from "react";
import mainblog from "../../../../assets/Blog/Blog-details/main_photo.jpeg";
import offer from "../../../../assets/Blog/Blog-details/offer.jpg";
import { benefits, popularPosts } from "../../../../data/Blog/blogPopularPost";
import BlogArticle from "./BlogArticle";
const BlogCardDetail = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 ">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <div className="relative max-w-full h-[450px] mb-8">
              <img
                src={mainblog}
                width={759}
                height={497}
                alt="Spa treatment"
                className="object-cover rounded-xl shadow-lg w-full h-full"
              />
            </div>
            <h1 className="text-4xl text-primary font-bold font-heading mb-8">
              What are the benefits of spa?
            </h1>
            <div className="max-w-3xl">
              <p className="text-secondary font-light font-serif mb-6 text-xl leading-relaxed">
                When you're looking for a relaxing getaway, there's nothing
                quite like a luxurious spa experience. Whether you're staying at
                a hotel for a weekend retreat, a business trip, or a family
                vacation, incorporating spa treatments into your stay can
                elevate your experience in ways that go beyond just relaxation.
              </p>
              <p className="text-secondary font-light font-serif mb-8 text-xl leading-relaxed">
                At our hotel, we offer a wide range of spa services designed to
                rejuvenate your body, mind, and spirit. Here are some of the key
                benefits of visiting our spa during your stay:
              </p>
            </div>

            <ul className="list-disc pl-8 space-y-4 text-primary font-medium text-lg font-serif mb-12">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-12 ">
            {/* Popular Posts */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold font-heading mb-8">
                Popular Posts
              </h2>
              <div className="space-y-8 w-[450px]">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={197}
                      height={162}
                      className="rounded-md object-cover shadow-md w-[197px] h-[130px]"
                    />
                    <div>
                      <h3 className="font-semibold font-heading text-primary text-3xl cursor-pointer hover:underline">
                        {post.title}
                      </h3>
                      <p className="text-secondary text-lg font-normal mt-2">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offer */}
            <div className="border rounded-lg shadow-sm p-4 w-[434px]">
              <div className="relative h-[420px]">
                <img
                  src={offer}
                  alt="Luxury hotel room"
                  className="object-cover w-[402px] h-[330px] rounded-lg"
                />
                <div className="p-4">
                  <h3 className="text-2xl font-normal font-emerald text-primary mb-2">
                    1 Week Package Offer
                  </h3>
                  <p className="text-secondary text-lg font-normal">
                    30% off 1 week+ stays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <BlogArticle />
        </div>
      </div>
    </>
  );
};

export default BlogCardDetail;
  