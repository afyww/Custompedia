import pertamina from "../../assets/images/pertamina.svg";
import gojek from "../../assets/images/gojek.png";
import gopay from "../../assets/images/gopay.svg";
import airbnb from "../../assets/images/airbnb.svg";
import astra from "../../assets/images/astra.svg";
import ojk from "../../assets/images/ojk.svg";
import emina from "../../assets/images/emina.svg";
import shopee from "../../assets/images/shopee.svg";
import bni from "../../assets/images/BNI.svg";
import btn from "../../assets/images/BTN.svg";
import bpr from "../../assets/images/BPR.png";
import unika from "../../assets/images/unika.svg";
import roda from "../../assets/images/Roda.svg";
import pegipegi from "../../assets/images/PegiPegi.svg";
import bytedance from "../../assets/images/bytedance.svg";
import traveloka from "../../assets/images/traveloka.svg";
import sampoerna from "../../assets/images/Sampoerna.svg";
import tokopedia from "../../assets/images/tokopedia.svg";
import pradita from "../../assets/images/pradita.svg";
import semarang from "../../assets/images/semarang.svg";
import hsb from "../../assets/images/HSB.svg";
import sanggar from "../../assets/images/sanggar.svg";
import iris from "../../assets/images/Iris.png";
import pln from "../../assets/images/pln.svg";
import jateng from "../../assets/images/jateng.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Clientus() {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller devices
        settings: {
          slidesToShow: 3, // Show 3 images
        }
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 3, // Show 2 images
        }
      },
      {
        breakpoint: 480, // For small mobile devices
        settings: {
          slidesToShow: 3, // Show 1 image
        }
      }
    ]
  };

  return (
    <div className="bg-black text-white p-2 xl:p-4 grid grid-cols-1">
      <div className="p-5">
        <div className="space-y-5 xl:space-y-8 2xl:space-y-12 ">
          <div className="flex space-x-2">
            <div>
              <h1 className="text-xl text-left xl:text-5xl 2xl:text-7xl text-white font-bold">
                Our Client
              </h1>
            </div>
            <div className="pt-3.5 xl:pt-8 2xl:pt-12">
              <div className="bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16"></div>
            </div>
          </div>
          <Slider className='w-full bg-white rounded-xl' {...settings}>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={pertamina} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={airbnb} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={astra} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={ojk} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={emina} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={shopee} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={bni} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="w-full h-full" src={unika} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={bytedance} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={btn} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={pegipegi} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={roda} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={gopay} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={traveloka} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={pradita} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={sampoerna} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={tokopedia} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="mx-auto my-auto p-1" src={sanggar} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={semarang} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={jateng} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={hsb} alt="" />
            </div>
            <div className='w-full h-28 p-2 xl:p-4'>
              <img className="'w-full h-full" src={pln} alt="" />
            </div>
          </Slider>
        </div>
      </div>
      <div className="w-fit">
        <Link to="/work">
          <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r rounded-xl w-fit duration-200 delay-150">
            <h1 className="text-white font-semibold text-left xl:px-5 px-2 text-sm xl:text-xl 2xl:text-2xl">
              See More
            </h1>
            <IoIosArrowForward className="text-white w-5 h-5 xl:w-7 xl:h-7" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Clientus;
