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
      <div className="relative z-20 mb-8 max-w-3xl w-full text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-unbounded mb-4 leading-tight flex flex-wrap justify-center items-center gap-2">
          <span>A</span>
          <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-unbounded">CREATIVE</span>
          <img src={star1} alt="star" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
          <span>MIND</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span className="font-serif text-white border-blue-400 border rounded-lg px-2 py-1">KNOWS</span>
          <span>HOW</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span>TO</span>
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 flex flex-wrap justify-center items-center gap-2">
          <span>DO</span>
          <span>THE</span>
          <span className="font-serif text-white rounded-lg px-2 py-1">RIGHT</span>
          <img src={star1} alt="star" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 flex flex-wrap justify-center items-center gap-2">
          <span>Things</span>
          <span>AT</span>
          <span>THE</span>
          <span>RIGHT</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span>PLACE</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span>AND</span>
          <span>AT</span>
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold flex flex-wrap justify-center sm:justify-center gap-x-2 items-center">
          <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">THE</span>
          <img src={star1} alt="star" className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12" />
          <span>RIGHT</span>
          <img src={star2} alt="star" className="w-2 h-2 sm:w-2 sm:h-2 md:w-4 md:h-5 lg:w-5 lg:h-5 xl:w-8 xl:h-8" />
          <span className="text-white border-blue-400 border rounded-lg px-2 py-1 font-serif">Time</span>
        </p>
      </div>
      <div className="relative z-20 w-full mt-8 sm:mt-12 md:mt-16">
        <img src={logoPerusahaan} alt="logo perusahaan" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Quote1;
