import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sample1 from "../../assets/images/sample1.jpg";
import company from "../../assets/images/company.png";

const Company = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const logoAnimationStyle = {
    display: "flex",
    whiteSpace: "nowrap",
    position: "absolute",
    animation: "scroll 20s linear infinite",
  };

  return (
    <section className="bg-black grid grid-cols-1">
      <div className="my-auto space-y-16">
        <div className="max-w-6xl mx-auto p-8 xl:p-0">
          <Slider {...settings}>
            <div>
              <img
                src={sample1}
                alt="Slide 1"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <img
                src={sample1}
                alt="Slide 2"
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div>
              <img
                src={sample1}
                alt="Slide 3"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </Slider>
        </div>
        <style>
          {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
        </style>
        <div className="overflow-hidden relative h-8 xl:h-16">
          <div style={logoAnimationStyle}>
            {/* Duplicate the logo image for seamless scrolling */}
            <img src={company} alt="Logos" className="h-auto" />
            <img src={company} alt="Logos" className="h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
