import { Link } from "react-router-dom";
import WaLogo from '../assets/new image/Group 37.png';

function Whatsapp() {
  return (
    <div className="z-50 fixed bottom-12 right-10 opacity-85 shadow-emerald-200 hover:opacity-100">
      <Link to="" className="">
        <img src={WaLogo} alt="WhatsApp Logo" className="w-16 h-16 xl:w-20 xl:h-20" />
      </Link>
    </div>
  );
}

export default Whatsapp;
