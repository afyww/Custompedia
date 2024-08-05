import { ChevronRight } from 'lucide-react';
import ready from "../../assets/new image/people-working-elegant-cozy-office-space 6.jpg"

const CTAJourney = () => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-yellow-100 overflow-hidden">
      <img 
        src={ready}
        alt="Business desk with laptop and papers" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-yellow-500 opacity-50"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
          Ready starting a new journey<br className="hidden sm:inline" />with your business?
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <p className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-0 sm:mr-4">
            Talk to us about your ideas
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-600 transition-colors text-sm sm:text-base">
            Click Here
            <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAJourney;