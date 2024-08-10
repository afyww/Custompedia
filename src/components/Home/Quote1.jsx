import React from 'react';
import iniQuotes from '../../assets/new image/quotes.png';
import iniColorBg from '../../assets/new image/Group 42.png';
import logoPerusahaan from "../../assets/new image/logoperusahaanlain.png";
import star1 from '../../assets/new image/star1.png';
import star2 from '../../assets/new image/star2.png';

function Quote1() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12 text-white font-unbounded overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-10 opacity-80" 
        style={{ backgroundImage: `url(${iniColorBg})` }}
      ></div>
      <div className="relative mb-8 max-w-6xl w-full text-center">
        <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold font-unbounded mb-2 leading-tight flex flex-wrap items-center gap-2 text-justify">
          <span>A</span>
          <span className=" text-white border-blue-400 border rounded-lg px-2 py-1">CREATIVE</span>
          <img src={star1} alt="star" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
          <span>MIND</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span className="text-white border-blue-400 border rounded-lg px-2 py-1">KNOWS</span>
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 flex flex-wrap items-center gap-2 text-justify">
          <span>HOW</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span>TO</span>
          <span>DO</span>
          <span>THE</span>
          <span>RIGHT</span>
          <img src={star1} alt="star" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
          <span className="font-serif text-white px-2 py-1">Things</span>
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 flex flex-wrap items-center gap-2 text-justify">
          <span>AT</span>
          <span>THE</span>
          <span>RIGHT</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span>PLACE</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span>AND</span>
          <span>AT</span>
        </p>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold flex flex-wrap items-center gap-2 text-justify">
          <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">THE</span>
          <img src={star1} alt="star" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
          <span>RIGHT</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">TIME</span>
        </p>
      </div>
      <div className="relative w-full mt-8 sm:mt-12 md:mt-16">
        <img src={logoPerusahaan} alt="logo perusahaan" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Quote1;
