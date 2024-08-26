import pertamina from "../../assets/images/pertamina.png";
import gojek from "../../assets/images/gojek.png";
import gopay from "../../assets/images/Gopay.png";
import airbnb from "../../assets/images/airbnb.png";
import astra from "../../assets/images/astra.png";
import ojk from "../../assets/images/ojk.png";
import emina from "../../assets/images/emina.png";
import shopee from "../../assets/images/shopee.png";
import bni from "../../assets/images/BNI.png";
import btn from "../../assets/images/BTN.png";
import bpr from "../../assets/images/BPR.png";
import unika from "../../assets/images/Unika.png";
import roda from "../../assets/images/Roda.png";
import pegipegi from "../../assets/images/PegiPegi.png";
import bytedance from "../../assets/images/bytedance.png";
import traveloka from "../../assets/images/Traveloka.png";
import sampoerna from "../../assets/images/Sampoerna.png";
import tokopedia from "../../assets/images/Tokopedia.png";
import pradita from "../../assets/images/pradita.png";
import semarang from "../../assets/images/Semarang.png";
import hsb from "../../assets/images/HSB.png";
import sanggar from "../../assets/images/sanggar.png";
import iris from "../../assets/images/Iris.png";
import pln from "../../assets/images/Pln.png";
import jateng from "../../assets/images/jateng.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Clientus() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    rtl: true,
  };

  return (
    <div className="bg-black text-white p-2 xl:p-4 grid grid-cols-1 z-30">
      <div className="z-20 my-6 xl:my-12">
        <div className="space-y-5 xl:space-y-8 2xl:space-y-12">
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
          <div className="bg-white rounded-xl">
            <Slider className="" {...settings}>
              <div className="mx-auto my-20 p-3">
                <img className="w-full h-22" src={pertamina} alt="" />
              </div>
              <div className="mx-auto my-20 p-3">
                <img className="w-full h-16" src={gojek} alt="" />
              </div>
              <div className="mx-auto my-10 p-3">
                <img className="w-full h-22" src={airbnb} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={astra} alt="" />
              </div>
              <div className="mx-auto my-6 p-3">
                <img className="w-full h-36" src={ojk} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={emina} alt="" />
              </div>
              <div className="mx-auto my-10 p-3">
                <img className="w-full h-36" src={shopee} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={bni} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={bpr} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={unika} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={bytedance} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={btn} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={pegipegi} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={roda} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={gopay} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={traveloka} alt="" />
              </div>
            </Slider>
            <Slider className="" {...settings2}>
              <div className="mx-auto my-20 p-3">
                <img className="w-full h-22" src={pertamina} alt="" />
              </div>
              <div className="mx-auto my-20 p-3">
                <img className="w-full h-16" src={gojek} alt="" />
              </div>
              <div className="mx-auto my-10 p-3">
                <img className="w-full h-22" src={airbnb} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={astra} alt="" />
              </div>
              <div className="mx-auto my-6 p-3">
                <img className="w-full h-36" src={ojk} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={emina} alt="" />
              </div>
              <div className="mx-auto my-10 p-3">
                <img className="w-full h-36" src={shopee} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={bni} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={bpr} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={unika} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={bytedance} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={btn} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={pegipegi} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={roda} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={gopay} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={traveloka} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={sampoerna} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={tokopedia} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={hsb} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={semarang} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={jateng} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={pln} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={pradita} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={sanggar} alt="" />
              </div>
              <div className="mx-auto p-3">
                <img className="w-full h-56" src={iris} alt="" />
              </div>
            </Slider>
          </div>
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
