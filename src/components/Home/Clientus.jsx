import creasa from "../../assets/images/creas.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    arrows: false, // This line removes the arrows
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
              <div className="my-auto mx-auto">
                <img className="my-5" src={creasa} alt="" />
              </div>
              <div className="my-auto mx-auto">
                <img className="my-5" src={creasa} alt="" />
              </div>
              <div className="my-auto mx-auto">
                <img className="my-5" src={creasa} alt="" />
              </div>
              <div className="my-auto mx-auto">
                <img className="my-5" src={creasa} alt="" />
              </div>
              <div className="my-auto mx-auto">
                <img className="my-5" src={creasa} alt="" />
              </div>
              <div className="my-auto mx-auto">
                <img className="my-5" src={creasa} alt="" />
              </div>
            </Slider>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Clientus;