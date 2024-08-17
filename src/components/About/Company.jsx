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

  return (
    <section className="bg-black grid grid-cols-1 h-screen">
      <div className="my-auto space-y-8">
        <div className="max-w-6xl mx-auto ">
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
      </div>
    </section>
  );
};

export default Company;
