import React from 'react';
import { useForm } from 'react-hook-form';

const BlogNewSletter = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

      const blogEmailSubmit = (data) => {
        console.log("Form Data:", data);
      };
  return (
    <>
      <section className="rounded-lg bg-zinc-300 dark:from-gray-800 dark:to-gray-900 shadow-lg">
        <div className="py-8 px-6 mx-auto lg:py-12 lg:px-10 max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-32 text-center lg:text-left">
            {/* Content Section */}
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-4xl leading-tight tracking-tight text-primary dark:text-white sm:text-5xl font-heading">
                Subscribe for Exclusive Content and Updates!
              </h2>
              <p className="mb-8 text-lg text-secondary font-emerald dark:text-gray-300 sm:text-xl font-light">
                Ready for your next adventure? Subscribe to our blog for helpful
                travel guides, hotel booking tips, and more!
              </p>
            </div>

            {/* Form Section */}
            <form
              onSubmit={handleSubmit(blogEmailSubmit)}
              className="lg:w-1/2   p-6 "
            >
              <div className="relative flex flex-col sm:flex-row items-center gap-4">
                {/* Input Field */}
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email Address"
                  {...register("email", { required: "Email is required" })}
                  className="w-full py-3 px-5 text-base text-gray-900 bg-white rounded-lg shadow-md border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}

                {/* Subscribe Button */}
                <button
                  type="submit"
                  className="absolute bg-primary  top-1/2 -translate-y-1/2 right-2 py-3 px-6 text-sm md:text-base font-semibold text-white rounded-lg "
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogNewSletter;
     