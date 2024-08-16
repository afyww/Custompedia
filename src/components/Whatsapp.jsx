import { Link } from "react-router-dom";
import WaLogo from '../assets/new image/Group 37.png';
import { FaArrowUp } from "react-icons/fa6";

function Whatsapp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="z-50 fixed bottom-12 left-4 opacity-85 shadow-blue-500 hover:opacity-100">
        <button onClick={scrollToTop}>
          <div className="bg-blue-600 opacity-85 shadow-blue-600 xl:p-2 rounded-xl px-2 py-6  hover:opacity-100">
            <FaArrowUp className="text-white xl:w-6 xl:h-20 w-4 h-8" />
          </div>
        </button>
      </div>
      <div className="z-50 fixed bottom-12 right-4 opacity-85 shadow-emerald-200 hover:opacity-100">
        <Link to="">
          <img src={WaLogo} alt="WhatsApp Logo" className="w-16 h-16 xl:w-20 xl:h-20" />
        </Link>
      </div>
    </>
  );
}

export default Whatsapp;
