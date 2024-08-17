import { useNavigate } from 'react-router-dom';
import gettouch from '../../assets/images/gettouch.jpg';
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const GetInTouch = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/contact');
  };

  return (
    <div className="grid grid-cols-1 h-screen relative bg-black  z-30">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-blue-500 opacity-80"></div>
      <div className="relative z-10 text-center my-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">GET IN TOUCH</h1>
        <p className="text-white text-base md:text-lg mb-8 max-w-2xl md:max-w-4xl mx-auto">
          We’ll show you how to start powerful conversations, drive social engagement, build your brand, hit sales targets or meet other goals you have, wherever you are in the world.
        </p>
        <div className="w-full z-30">
          <div className="flex justify-center">
            <Link to="/about">
              <div className="flex border border-blue-500 text-white font-bold rounded-xl w-fit mx-auto xl:mx-0 hover:bg-blue-500 hover:text-white text-sm xl:text-base p-2">
                <h1 className="my-auto">Work With Us</h1>
                <IoIosArrowForward className="w-6 h-6 xl:w-8 xl:h-8" />
              </div>
            </Link>
          </div>
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
