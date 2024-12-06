import React from "react";
import { GoLocation } from "react-icons/go";
import { PiCallBell } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <div className="bg-white text-black py-16">
      <div className=" mx-auto px-6 lg:px-20 space-y-16">
        {/* Location and Contact Info Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Google Map */}
          <div>
            <h4 className="text-bold font-semibold font-heading mb-6 text-primary text-3xl">
              Our Location
            </h4>
            <div className="size-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.6698497743216!2d96.15742477596027!3d16.793453681283514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb39554d68f3%3A0xf1e1e2de8947ecad!2sMyanmar%20Centre%20Tower!5e0!3m2!1sen!2smm!4v1698654223885!5m2!1sen!2smm"
                className="w-full h-full border-none rounded-lg"
                allowFullScreen={true}
                loading="lazy"
                aria-label="Google Map"
              ></iframe>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-bold font-semibold font-heading mb-4 text-primary text-3xl">
              Get In Touch
            </h4>
            <p className=" font-normal font-body mb-6 text-secondary text-lg">
              Have questions or need help with your booking? Get in touch—we’re
              here to assist you!
            </p>
            <div className="space-y-8">
              <div className="flex items-start gap-7">
                <GoLocation className="size-8 text-primary" />

                <div className="flex flex-col w-80">
                  <h3 className="text-bold font-bold font-heading mb-2 text-primary text-lg">
                    Our Location
                  </h3>
                  <p className="font-body text-secondary font-normal text-base">
                    Kabar Aye Pagoda Rd, Yangon 11081, Myanmar (Burma)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-7">
                <PiCallBell className="size-8 text-primary" />

                <div className="flex flex-col w-80">
                  <h3 className="text-bold font-bold font-heading mb-2 text-primary text-lg">
                    Reservations
                  </h3>

                  <div className="flex items-center gap-3">
                    <p className="font-body text-secondary font-normal text-base">
                      Phone:
                    </p>
                    <a
                      href="tel:+993449564050"
                      className="font-body text-secondary font-normal text-base"
                    >
                      +99 (0) 344 956 4050
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="font-body text-secondary font-normal text-base">
                      Email:
                    </p>
                    <a
                      href="mailto:emerald1806@gmail.com"
                      className="font-body text-secondary font-normal text-base"
                    >
                      emerald1806@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                {/* <h3 className="text-lg font-semibold">Social Network</h3>
                <p>Stay in touch and follow us on social media:</p> */}
                <div className="flex items-start gap-7">
                  <TbWorld className="size-8 text-primary" />

                  <div className="flex flex-col w-80 mb-2">
                    <h3 className="text-bold font-bold font-heading mb-2 text-primary text-lg">
                      Social Network
                    </h3>
                    <p className="font-body text-secondary font-normal text-base">
                      Stay in touch and follow us on social media:
                    </p>
                    <div className="flex space-x-4 mt-2">
                      <div className="mt-4 flex space-x-4">
                        <div className="bg-zinc-950 size-10 flex justify-center items-center rounded-lg">
                          <Link to="#" className="hover:text-white">
                            <i class="fa-brands fa-facebook-f text text-white text-lg"></i>
                          </Link>
                        </div>

                        <div className="bg-zinc-950 size-10 flex justify-center items-center rounded-lg ">
                          <Link to="#" className="hover:text-white">
                            <i class="fa-brands fa-instagram text text-white text-lg"></i>
                          </Link>
                        </div>

                        <div className="bg-zinc-950 size-10 flex justify-center items-center rounded-lg">
                          <Link to="#" className="hover:text-white">
                            <i class="fa-brands fa-twitter text text-white text-lg"></i>
                          </Link>
                        </div>

                        <div className="bg-zinc-950 size-10 flex justify-center items-center rounded-lg">
                          <Link to="#" className="hover:text-white">
                            <i class="fa-brands fa-linkedin-in text text-white text-lg"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className=" p-12 rounded-lg">
          <p className="font-body text-secondary font-normal text-base text-center mb-2">
            CONTACT WITH US
          </p>
          <h2 className="text-bold font-bold font-heading mb-2 text-primary text-lg text-center mb-6">
            Do you have any Wishes or Questions?
          </h2>
         
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
