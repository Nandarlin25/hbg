import React from "react";
import mainblog from "../../../../assets/Blog/Blog-details/main_photo.jpeg";
import offer from "../../../../assets/Blog/Blog-details/offer.jpg";
import { benefits, popularPosts } from "../../../../data/Blog/blogPopularPost";
import BlogArticle from "./BlogArticle";
const BlogCardDetail = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 mt-8 sm:mt-12 lg:mt-16">
          {/* Main Content */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] mb-6 sm:mb-8">
              <img
                src={mainblog}
                width={759}
                height={497}
                alt="Spa treatment"
                className="object-cover rounded-xl shadow-lg w-full h-full"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-primary font-bold font-heading mb-6 sm:mb-8">
              What are the benefits of spa?
            </h1>
            <div className="max-w-full lg:max-w-3xl">
              <p className="text-secondary font-light font-serif mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed">
                When you're looking for a relaxing getaway, there's nothing
                quite like a luxurious spa experience. Whether you're staying at
                a hotel for a weekend retreat, a business trip, or a family
                vacation, incorporating spa treatments into your stay can
                elevate your experience in ways that go beyond just relaxation.
              </p>
              <p className="text-secondary font-light font-serif mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl leading-relaxed">
                At our hotel, we offer a wide range of spa services designed to
                rejuvenate your body, mind, and spirit. Here are some of the key
                benefits of visiting our spa during your stay:
              </p>
            </div>

            <ul className="list-disc pl-6 sm:pl-8 space-y-3 sm:space-y-4 text-primary font-medium text-base sm:text-lg lg:text-xl font-serif mb-8 sm:mb-12">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 lg:space-y-12">
            {/* Popular Posts */}
            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-6 sm:mb-8">
                Popular Posts
              </h2>
              <div className="space-y-6 sm:space-y-8">
                {popularPosts.map((post, index) => (
                  <div key={index} className="flex gap-4 sm:gap-6 items-start">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={150}
                      height={120}
                      className="rounded-md object-cover shadow-md w-[150px] sm:w-[197px] h-[100px] sm:h-[130px]"
                    />
                    <div>
                      <h3 className="font-semibold font-heading text-primary text-lg sm:text-xl lg:text-2xl cursor-pointer hover:underline">
                        {post.title}
                      </h3>
                      <p className="text-secondary text-sm sm:text-base font-normal mt-2">
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offer */}
            <div className="border rounded-lg shadow-sm p-4 sm:p-6 lg:p-8">
              <div className="relative h-[280px] sm:h-[350px] lg:h-[420px]">
                <img
                  src={offer}
                  alt="Luxury hotel room"
                  className="object-cover rounded-lg w-full h-[200px] sm:h-[280px] lg:h-[330px]"
                />
                <div className="mt-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-2">
                    1 Week Package Offer
                  </h3>
                  <p className="text-secondary text-base sm:text-lg">
                    30% off 1 week+ stays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-12">
          <BlogArticle />
        </div>
      </div>
    </>
  );
};

export default BlogCardDetail;
  