import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import featureImg1 from "../../public/device-1.png";
import featureLoginImg from "../../public/device-2.png";

function Feature() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false); // Track if section is in view
  const sectionRef = useRef(null); // Reference to the section for animation
  const featureImgRef = useRef(null); // Reference to feature image
  const featureLoginImgRef = useRef(null); // Reference to login image
  const featureTextRef = useRef(null); // Reference to feature text

  // Set loading state after a delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  }, []);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Section is in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Trigger GSAP animations when section comes into view
  useEffect(() => {
    if (isInView && !isLoading) {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.from(featureImgRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(featureLoginImgRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });

      gsap.from(featureTextRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1.5,
        ease: "power3.out",
      });
    }
  }, [isInView, isLoading]);

  return (
    <>
      {/* Section Keunggulan */}
      <section id="feature" className="px-6 md:px-12 py-8" ref={sectionRef}>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center h-auto md:h-screen gap-8 md:gap-16 p-6 md:p-12">
          <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
            <div>
              {isLoading ? (
                <div className="bg-fuchsia-950 h-6 rounded w-full"></div>
              ) : (
                <>
                  <h3
                    className="text-2xl md:text-4xl font-bold text-white"
                    ref={featureTextRef}
                  >
                    Keunggulan Talentapps
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
                  <p>
                    Di era digital saat ini, kebutuhan akan talent profesional
                    untuk berbagai acara, baik itu seminar, konser, pernikahan,
                    atau promosi produk, semakin meningkat.
                  </p>
                  <p>
                    Aplikasi-aplikasi ini tidak hanya mempermudah proses
                    pencarian, tetapi juga memberikan berbagai fitur yang
                    mendukung keamanan dan kenyamanan bagi pengguna dan talent
                    itu sendiri.
                  </p>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            {isLoading ? (
              <div className="w-60 md:w-96 lg:w-[500px] h-60 md:h-96 lg:h-[500px] bg-fuchsia-950 animate-pulse rounded-lg"></div>
            ) : (
              <img
                ref={featureImgRef}
                src={featureImg1}
                className="w-60 md:w-96 lg:w-[500px]"
                alt="Feature Image"
              />
            )}
          </div>
        </div>
      </section>
      {/* End Section Keunggulan */}

      {/* Section Login Feature */}
      <section className="md:px-0 py-8">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center h-auto md:h-screen md:p-0">
          <div className="flex justify-center">
            {isLoading ? (
              <div className="w-100 md:w-96 lg:w-[900px] h-60 md:h-96 lg:h-[500px] bg-fuchsia-950 animate-pulse rounded-lg"></div>
            ) : (
              <img
                ref={featureLoginImgRef}
                src={featureLoginImg}
                className="w-full md:w-250 lg:w-[900px]"
                alt="Login Feature Image"
              />
            )}
          </div>
          <div className="w-full md:w-2/3 lg:w-1/2 text-center pb-5 md:text-left">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Login
              </h3>
              <h3 className="text-2xl md:text-4xl font-bold text-white">
                Talentapps
              </h3>
              <div className="h-1 w-14 bg-amber-200 mt-4 mx-auto md:mx-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
