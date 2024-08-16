import { useNavigate } from 'react-router-dom';
import gettouch from '../../assets/images/gettouch.jpg';
import { IoIosArrowForward } from "react-icons/io";

const GetInTouch = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <div className="grid grid-cols-1 h-screen relative bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-blue-500 opacity-80"></div>
      <div className="relative z-10 text-center my-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">GET IN TOUCH</h1>
        <p className="text-white text-base md:text-lg mb-8 max-w-2xl md:max-w-4xl mx-auto">
          We’ll show you how to start powerful conversations, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
        </p>
        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="border-2 border-blue-500 hover:border-blue-600 text-white hover:text-white font-bold py-2 px-4 md:px-6 rounded-full flex items-center"
          >
            Work With Us
            <IoIosArrowForward className="text-white w-5 h-5 xl:w-7 xl:h-7" />
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: `url(${gettouch})`, filter: 'brightness(0.5)' }}
      ></div>
    </div>
  );
};

export default GetInTouch;
