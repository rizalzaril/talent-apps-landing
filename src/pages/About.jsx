import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import aboutImg from "../../public/about-img.png";

function About() {
  const [isLoading, setIsLoading] = useState(true);
  const aboutRef = useRef(null); // Reference to the About section

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds

    // GSAP animation for scroll event
    const handleScroll = () => {
      if (aboutRef.current) {
        const aboutSection = aboutRef.current;
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the section is in the viewport
        if (sectionTop <= windowHeight * 0.8) {
          // Animate opacity to 1 when the section comes into view
          gsap.to(aboutSection, {
            opacity: 1,
            duration: 1,
            y: 0, // Smooth sliding effect
          });
        } else {
          // Reset the animation if the section is out of view
          gsap.to(aboutSection, {
            opacity: 0,
            duration: 1,
            y: 50, // Start off-screen
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial call to handle the first scroll after load
    handleScroll();

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="px-6 md:px-12 py-12 opacity-0 transform translate-y-12"
    >
      <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-screen gap-8 md:gap-16">
        {isLoading ? (
          <div className="w-60 md:w-96 lg:w-[900px] h-40 md:h-64 lg:h-[500px]  rounded-lg animate-pulse"></div>
        ) : (
          <div className="flex justify-center">
            <img
              src={aboutImg}
              loading="lazy"
              className="w-60 md:w-96 lg:w-[900px]"
              alt="About Image"
            />
          </div>
        )}

        <div className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left">
          {isLoading ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-8 md:h-12 w-3/4 bg-fuchsia-950 rounded"></div>
              <div className="h-1 w-14 bg-fuchsia-950 mt-4 mx-auto md:mx-0"></div>
              <div className="space-y-2 py-6 md:py-12">
                <div className="h-4 bg-fuchsia-950 rounded w-full"></div>
                <div className="h-4 bg-fuchsia-950 rounded w-5/6"></div>
                <div className="h-4 bg-fuchsia-950 rounded w-4/6"></div>
              </div>
            </div>
          ) : (
            <>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-white">
                  Selamat datang di Talentapps
                </h3>
                <div className="h-1 w-14 bg-amber-200 mt-4 mx-auto md:mx-0"></div>
              </div>
              <div className="py-6 md:py-12 flex flex-col gap-6 text-sm md:text-base text-gray-300 font-light">
                <p>
                  Di era digital saat ini, kebutuhan akan talent profesional
                  untuk berbagai acara, baik itu seminar, konser, pernikahan,
                  atau promosi produk, semakin meningkat. Seiring dengan
                  perkembangan teknologi, kini tersedia berbagai aplikasi
                  Android dan iOS yang memudahkan pengguna dalam mencari dan
                  memesan talent sesuai dengan kebutuhan mereka.
                </p>
                <p>
                  Aplikasi-aplikasi ini tidak hanya mempermudah proses
                  pencarian, tetapi juga memberikan berbagai fitur yang
                  mendukung keamanan dan kenyamanan bagi pengguna dan talent itu
                  sendiri. Aplikasi Bakat ini bertindak sebagai platform yang
                  menghubungkan orang yang membutuhkan talent (seperti penyanyi,
                  pembicara, aktor, model, dan DJ) dengan individu atau
                  perusahaan yang menyediakan layanan talent. Pengguna aplikasi
                  dapat mencari, memilih, dan memesan talent.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
