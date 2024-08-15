import PropTypes from "prop-types";
import image1 from "../../assets/new image/1.png";
import image2 from "../../assets/new image/2.png";
import image3 from "../../assets/new image/3.png";
import image4 from "../../assets/new image/4.png";
import image5 from "../../assets/new image/5.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const NetworkCard = ({ logo, title, description }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden flex flex-col sm:flex-row">
    <div
      className="w-full sm:w-1/3 p-4 flex items-center justify-center"
      style={{ backgroundColor: "rgba(11, 153, 206, 1)" }}
    >
      {logo}
    </div>
    <div className="w-full sm:w-2/3 p-4">
      <h3 className="text-white text-lg font-bold mb-2 font-unbound">
        {title}
      </h3>
      <p className="text-gray-300 text-sm font-poppins">{description}</p>
    </div>
  </div>
);

NetworkCard.propTypes = {
  logo: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const OurNetwork = () => (
  <div className="relative h-full grid grid-cols-1 text-white bg-gradient-to-tr from-yellow-600 to-blue-600 p-4">
    <div className="bg-black z-10 h-full w-full absolute opacity-85"></div>
    <div className="z-20 xl:my-32 my-12">
      <div className="flex space-x-2">
        <div>
          <h1 className="text-xl text-left xl:text-5xl 2xl:text-7xl text-white font-bold">
            Our Network
          </h1>
        </div>
        <div className="pt-3.5 xl:pt-12">
          <div className="bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16"></div>
        </div>
      </div>
      <p className="text-lg sm:text-xl mb-6 sm:mb-8">
        Sister company that complete our creative universe
      </p>

      <div className="space-y-4 xl:space-y-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
          <NetworkCard
            logo={
              <img
                src={image2}
                alt="Parcelin"
                className="w-16 sm:w-20 md:w-24"
              />
            }
            title="ParcelinPack"
            description="Parcelinpack is creative packaging and printing company. Our speciality in custom packaging, so you can create your dream packaging with any materials, shape for any occassions."
          />
          <NetworkCard
            logo={
              <img
                src={image1}
                alt="Customfluencer"
                className="w-16 sm:w-20 md:w-24"
              />
            }
            title="Customfluencer"
            description="Due the high demand in KOL Marketing service, Custompedia build Customfluencer to complete Custompedia environment, especially in influencer / KOL marketing."
          />
          <NetworkCard
            logo={
              <img
                src={image4}
                alt="Custom Printing"
                className="w-16 sm:w-20 md:w-24"
              />
            }
            title="Custom Printing"
            description="Customprinting focused on retail sales for printing, advertising, and merchandise item. Design your own custom products and accessories. From apparel and sticker to merchandise, our print-on-demand products offer everything you need to unleash your creativity and style."
          />
          <NetworkCard
            logo={
              <img
                src={image3}
                alt="Parcelin Premium"
                className="w-16 sm:w-20 md:w-24"
              />
            }
            title="Parcelin Premium"
            description="Parcelinpremium is a online-based Exclusive Hampers and Gift for any special event such as Eid Mubarak, Christmas, CNY, etc. We also accept for corporate gift."
          />
          <NetworkCard
            logo={
              <img src={image5} alt="Creasa" className="w-16 sm:w-20 md:w-24" />
            }
            title="Creasa Supply"
            description="Creative Supply Asia (Creasa) is distrubutor for printing and advertising raw material. Either we use for our internal company (in our group), we can also sell to another company."
          />
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <Link
              to="/about"
              className="text-yellow-400 text-base xl:text-xl font-bold my-auto"
            >
              read more
            </Link>
            <IoIosArrowForward className="text-yellow-400 w-6 h-6 xl:w-8 xl:h-8" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OurNetwork;
