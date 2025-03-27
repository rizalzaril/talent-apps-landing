import React, { useState, useEffect } from "react";
import contactImg from "../../public/contact-device.png";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Importing Font Awesome icons

function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  return (
    <div>
      {/* Section keunggulan */}
      <section id="feature" className="px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-screen gap-8 md:gap-16 p-6 md:p-12">
          <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
            <div>
              {isLoading ? (
                <div className="bg-fuchsia-950 h-6 rounded w-full"></div>
              ) : (
                <>
                  <h3 className="text-2xl md:text-4xl font-bold text-white">
                    Kontak Kami
                  </h3>
                  <div className="h-1 w-14 bg-amber-200 mt-4 mx-auto md:mx-0"></div>
                </>
              )}
            </div>
            <div className="py-6 md:py-12 flex flex-col gap-6 text-sm md:text-base text-gray-300 font-light">
              {isLoading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-4 bg-fuchsia-950 rounded w-3/4"></div>
                  <div className="h-4 bg-fuchsia-950 rounded w-full"></div>
                  <div className="h-4 bg-fuchsia-950 rounded w-5/6"></div>
                </div>
              ) : (
                <>
                  <div className="flex flex-col justify-center gap-12">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex bg-amber-200 h-12 w-12 justify-center items-center rounded-full">
                        <FaPhoneAlt className="text-black text-xl" />{" "}
                        {/* Phone icon */}
                      </div>
                      <p>0878 7594 5244</p>
                    </div>
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex bg-amber-200 h-12 w-12 justify-center items-center rounded-full">
                        <FaEnvelope className="text-black text-xl" />{" "}
                        {/* Email icon */}
                      </div>
                      <p>talentapss@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex bg-amber-200 h-12 w-12 justify-center items-center rounded-full">
                        <FaMapMarkerAlt className="text-black text-xl" />{" "}
                        {/* Location icon */}
                      </div>
                      <p>Jl. Lenteng Agung Raya No 43 B, Jakarta Selatan</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            {isLoading ? (
              <div className="w-60 md:w-96 lg:w-[500px] h-60 md:h-96 lg:h-[500px] bg-fuchsia-950 animate-pulse rounded-lg"></div>
            ) : (
              <img
                src={contactImg}
                className="w-60 md:w-96 lg:w-[500px]"
                alt="Feature Image"
              />
            )}
          </div>
        </div>
      </section>
      {/* End section keunggulan */}
    </div>
  );
}

export default Contact;
