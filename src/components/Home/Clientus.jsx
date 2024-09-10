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
import pln from "../../assets/images/PLN.png";
import jateng from "../../assets/images/jateng.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Clientus() {

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
          <div className="p-2 xl:p-8 grid grid-cols-5  bg-white rounded-xl">
              <img className="mx-auto my-auto p-1" src={pertamina} alt="" />
              <img className="mx-auto my-auto p-1" src={gojek} alt="" />
              <img className="mx-auto my-auto p-1" src={airbnb} alt="" />
              <img className="mx-auto my-auto p-1" src={astra} alt="" />
              <img className="mx-auto my-auto p-1" src={ojk} alt="" />
              <img className="mx-auto my-auto p-1" src={emina} alt="" />
              <img className="mx-auto my-auto p-1" src={shopee} alt="" />
              <img className="mx-auto my-auto p-1" src={bni} alt="" />
              <img className="mx-auto my-auto p-1" src={bpr} alt="" />
              <img className="mx-auto my-auto p-1" src={unika} alt="" />
              <img className="mx-auto my-auto p-1" src={bytedance} alt="" />
              <img className="mx-auto my-auto p-1" src={btn} alt="" />
              <img className="mx-auto my-auto p-1" src={pegipegi} alt="" />
              <img className="mx-auto my-auto p-1" src={roda} alt="" />
              <img className="mx-auto my-auto p-1" src={gopay} alt="" />
              <img className="mx-auto my-auto p-1" src={traveloka} alt="" />
              <img className="mx-auto my-auto p-1" src={pradita} alt="" />
              <img className="mx-auto my-auto p-1" src={sampoerna} alt="" />
              <img className="mx-auto my-auto p-1" src={tokopedia} alt="" />
              <img className="mx-auto my-auto p-1" src={sanggar} alt="" />
              <img className="mx-auto my-auto p-1" src={semarang} alt="" />
              <img className="mx-auto my-auto p-1" src={jateng} alt="" />
              <img className="mx-auto my-auto p-1" src={hsb} alt="" />
              <img className="mx-auto my-auto p-1" src={iris} alt="" />
              <img className="mx-auto my-auto p-1" src={pln} alt="" />
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
