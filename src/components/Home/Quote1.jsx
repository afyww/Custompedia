import React from "react";
import iniQuotes from "../../assets/new image/quotes.png";
import iniColorBg from "../../assets/new image/Group 42.png";
import logoPerusahaan from "../../assets/new image/logoperusahaanlain.png";
import star1 from "../../assets/new image/star1.png";
import star2 from "../../assets/new image/star2.png";

function Quote1() {
  return (
    <div className="relative h-screen grid grid-cols-1 text-white font-unbounded">
      <div className="my-auto p-2">
        <div className="absolute inset-0 bg-black z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-10 opacity-80"
          style={{ backgroundImage: `url(${iniColorBg})` }}
        ></div>
        <div className="relative mx-auto max-w-6xl text-center">
          <p className="text-xl sm:text-5xl md:text-5xl lg:text-xl xl:text-7xl font-bold font-unbounded mb-2 leading-tight flex flex-wrap items-center gap-2 text-justify">
            <span>A</span>
            <span className=" text-white border-blue-400 border rounded-lg p-2">
              CREATIVE
            </span>
            <img
              src={star1}
              alt="star"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
            />
            <span>MIND</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8"
            />
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1">
              KNOWS
            </span>
          </p>
          <p className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 flex flex-wrap items-center gap-2 text-justify">
            <span>HOW</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8"
            />
            <span>TO</span>
            <span>DO</span>
            <span>THE</span>
            <span>RIGHT</span>
            <img
              src={star1}
              alt="star"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
            />
            <span className="font-serif text-white px-1 py-1">Things</span>
          </p>
          <p className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 flex flex-wrap items-center gap-2 text-justify">
            <span>AT</span>
            <span>THE</span>
            <span>RIGHT</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8"
            />
            <span>PLACE</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8"
            />
            <span>AND</span>
            <span>AT</span>
          </p>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex flex-wrap items-center gap-2 text-justify">
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">
              THE
            </span>
            <img
              src={star1}
              alt="star"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12"
            />
            <span>RIGHT</span>
            <img
              src={star2}
              alt="star"
              className="w-4 h-4 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8"
            />
            <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">
              TIME
            </span>
          </p>
        </div>
        <style jsx>{`
          @keyframes slideLeftToRight {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .slide-container {
            display: flex;
            width: 200%;
          }
          .slide-animation {
            animation: slideLeftToRight 15s linear infinite;
            display: flex;
            width: 100%;
          }
        `}</style>
        <div className="relative w-full mt-8 sm:mt-12 md:mt-16 overflow-hidden">
          <div className="slide-container">
            <div className="slide-animation">
              <img
                src={logoPerusahaan}
                alt="logo perusahaan"
                className="w-full h-auto p-2 max-w-[2000%]"
              />
              <img
                src={logoPerusahaan}
                alt="logo perusahaan"
                className="w-full h-auto p-2 max-w-[200%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote1;
