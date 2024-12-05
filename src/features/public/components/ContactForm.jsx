import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 gap-6"
    >
      {/* Left Column */}
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-400">
            NAME*
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            {...register("name", { required: "Name is required" })}
            className="w-full p-4 stroke-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-400">
            EMAIL*
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            className="w-full p-4 stroke-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-gray-400">
            PHONE NUMBER*
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            {...register("phone", { required: "Phone number is required" })}
            className="w-full p-4 stroke-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            id="consent"
            {...register("consent", { required: "You must provide consent" })}
            className="w-5 h-5 text-secondary stroke-border border-gray-600 rounded focus:ring-2 focus:ring-secondary"
          />
          <label htmlFor="consent" className="text-gray-400">
            I consent to Emerald Hotel collecting my details through this form.
          </label>
          {errors.consent && (
            <p className="text-red-500 text-sm mt-1">
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-6 flex flex-col gap-5">
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-400">
            MESSAGE*
          </label>
          <textarea
            id="message"
            placeholder="Your Message..."
            rows={6}
            {...register("message", { required: "Message is required" })}
            className="w-full p-4 stroke-border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-40 p-4 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition"
          >
            Send A Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
