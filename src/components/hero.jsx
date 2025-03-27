import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  // Menghilangkan loading setelah 2 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <section className="px-6 md:px-12 py-12">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
          {isLoading ? (
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 animate-pulse">
              <div className="h-12 md:h-20 lg:h-28 bg-fuchsia-950 rounded w-3/4"></div>
              <div className="h-12 md:h-20 lg:h-28 bg-fuchsia-950 rounded w-full"></div>
              <div className="py-6 md:py-12">
                <div className="h-12 w-full md:w-80 bg-fuchsia-950 rounded-3xl"></div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-5xl md:text-7xl lg:text-9xl text-white">
                Talent
              </h3>
              <h3 className="text-5xl md:text-7xl lg:text-9xl text-amber-200 font-bold">
                Apps
              </h3>

              <div className="py-6 md:py-12">
                <button className=" w-80 md:w-70 bg-amber-200 p-3 rounded-3xl text-blue-950 hover:bg-amber-100 transition duration-300 text-lg font-semibold">
                  <TypeAnimation
                    className="text-lg"
                    sequence={[
                      "WWW.TALENTAPPS.COM", // text to type
                      1000, // wait for 1 second after typing
                      "", // delete the text
                      1000, // wait for 1 second before restarting
                    ]}
                    wrapper="span"
                    speed={50} // typing speed
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity} // loop the entire animation
                  />
                </button>
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="w-60 md:w-96 lg:w-[500px] h-60 md:h-96 lg:h-[500px] bg-fuchsia-950 rounded-lg animate-pulse"></div>
          ) : (
            <div>
              <img
                src="/hero-1.png"
                loading="lazy"
                className="w-60 md:w-96 lg:w-[500px]"
                alt="Hero Image"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Hero;
