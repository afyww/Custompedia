import digital from "../../assets/images/digital.png";
import adv from "../../assets/images/adv.png";
import content from "../../assets/images/content.png";
import social from "../../assets/images/social.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function What() {
  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="xl:my-20 my-8 mx-2 xl:mx-2 2xl:mx-4">
        <div className="space-y-4 xl:space-y-10">
          <div className="flex space-x-2">
            <div>
              <h1 className="text-xl text-left xl:text-5xl 2xl:text-7xl text-white font-bold">
                What We Do
              </h1>
            </div>
            <div className="pt-3.5 xl:pt-8 2xl:pt-12">
              <div className="bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            <div className="p-4 xl:p-8 border-2 border-blue-400 rounded-xl w-fit">
              <div className="px-6 space-y-4">
                <div>
                  <img className="mx-auto" src={digital} alt="" />
                </div>
                <div className="text-center">
                  <h1 className="text-white font-semibold text-xs">
                    Digital Marketing
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 xl:p-8 border-2 border-yellow-400 rounded-xl w-fit">
              <div className="px-6 xl:px-10 space-y-4">
                <div>
                  <img className="mx-auto" src={adv} alt="" />
                </div>
                <div className="text-center">
                  <h1 className="text-white font-semibold text-xs">
                    Advertising
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 xl:p-8 border-2 border-blue-400 rounded-xl w-fit">
              <div className="px-4 space-y-4">
                <div className="">
                  <img className="mx-auto" src={content} alt="" />
                </div>
                <div className="text-center">
                  <h1 className="text-white font-semibold text-xs">
                    Content Production
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-4 xl:p-8 border-2 border-yellow-400 rounded-xl w-fit">
              <div className="px-6 xl:px-10 space-y-4">
                <div>
                  <img className="mx-auto" src={social} alt="" />
                </div>
                <div className="text-center">
                  <h1 className="text-white font-semibold text-xs">
                    Sosial Media
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-fit">
            <Link to="/service">
              <div className="p-2 my-auto hover:scale-110 hover:bg-gradient-to-l flex justify-between from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                <h1 className="text-white font-semibold text-left xl:px-5 px-2 text-sm xl:text-xl 2xl:text-2xl">
                  See More
                </h1>
                <IoIosArrowForward className="text-white w-5 h-5 xl:w-7 xl:h-7" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default What;
