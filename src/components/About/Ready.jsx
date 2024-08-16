import { ChevronRight } from "lucide-react";
import ready from "../../assets/images/ready.jpg";

const CTAJourney = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <img
        src={ready}
        alt="Business desk with laptop and papers"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-yellow-400 opacity-60"></div>
      <div className="relative z-10 h-full xl:flex justify-between items-center p-6 md:p-10 lg:p-16">
        <h2 className="text-white text-left text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-md">
          Ready to start a new journey
          <br className="hidden sm:inline" />
          with your business?
        </h2>
        <div className="flex flex-col items-end mt-6 sm:mt-0">
          <p className="text-white text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 drop-shadow-md">
            Talk to us about your ideas
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-colors text-sm sm:text-base"
            aria-label="Click here to talk to us about your ideas"
          >
            Click Here
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAJourney;
