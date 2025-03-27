import React, { useState, useEffect } from "react";
import servicesImg1 from "../../public/services-1.png";
import servicesImg2 from "../../public/services-2.png";
import servicesImg3 from "../../public/services-3.png";
import servicesImg4 from "../../public/services-4.png";

function Services() {
  const [isLoading, setIsLoading] = useState(true);

  const servicesData = [
    {
      id: 1,
      caption: "Penyanyi, Gitaris, Pianis, Bassis, Group Band, Orkestra, dll",
      category: "Music",
    },
    {
      id: 2,
      caption: "Aktor, Pesulap, Dalang, Youtuber, Pelawak, dll",
      category: "Non Music",
    },
    {
      id: 3,
      caption:
        "Seseorang atau kelompok yang dianggap ahli atau otoritas di bidang tertentu",
      category: "KOL (Key Opinion Leader)",
    },
    {
      id: 4,
      caption:
        "Sekelompok orang atau individu yang dibayar untuk menyebarkan informasi atau opini tertentu di media sosial",
      category: "Buzzer",
    },
  ];

  const serviceImgData = [
    { id: 1, img: servicesImg1, alt: "Music" },
    { id: 2, img: servicesImg2, alt: "Non Music" },
    { id: 3, img: servicesImg3, alt: "KOL (Key Opinion Leader)" },
    { id: 4, img: servicesImg4, alt: "Buzzer" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulasi loading selama 2 detik
  }, []);

  return (
    <section id="services" className="py-12">
      {/* Services caption */}
      <div className="flex flex-col items-center justify-center text-center">
        {isLoading ? (
          <div className="flex flex-col items-center space-y-4 animate-pulse">
            <div className="h-8 w-48 bg-fuchsia-950 rounded"></div>
            <div className="h-1 w-14 bg-fuchsia-950 mt-4"></div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              Layanan Talentapps
            </h3>
            <div className="h-1 w-14 bg-amber-200 mt-4"></div>
          </div>
        )}
      </div>

      {/* Services List */}
      {/* Services List */}
      <div className="flex flex-col justify-center items-center py-12 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {isLoading
            ? [...Array(4)].map((_, index) => (
                <div key={index} className="flex gap-4 animate-pulse">
                  <div className="h-12 w-12 rounded-full bg-fuchsia-950"></div>
                  <div className="w-60">
                    <div className="h-4 bg-fuchsia-950 rounded w-48 mb-2"></div>
                    <div className="h-4 bg-fuchsia-950 rounded w-40"></div>
                  </div>
                </div>
              ))
            : servicesData.map((service, index) => (
                <div key={service.id} className="flex gap-4">
                  {/* Circle with number */}
                  <div className="h-12 w-12 rounded-full bg-amber-200 flex justify-center items-center">
                    <span className="text-blue-800 font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="w-60">
                    <p className="text-sm">
                      {service.category} : {service.caption}
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* Services Images */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-3 px-12">
        {isLoading
          ? [...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-40 md:w-64 h-40 bg-fuchsia-950 rounded-lg animate-pulse"
              ></div>
            ))
          : serviceImgData.map((imgService) => (
              <div
                key={imgService.id}
                className="flex justify-center items-center"
              >
                <img
                  src={imgService.img}
                  alt={imgService.alt}
                  className="w-40 md:w-64 h-auto"
                />
              </div>
            ))}
      </div>
    </section>
  );
}

export default Services;
