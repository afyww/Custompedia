import aboutUsImage from '../../assets/new image/about us.jpg';

const Aboutus = () => {
  return (
    <div className="relative bg-black min-h-screen flex items-center justify-center">
      <img 
        src={aboutUsImage} 
        alt="Custompedia Team" 
        className="absolute w-full h-full object-cover opacity-50" 
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8 lg:p-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-500 mb-4 sm:mb-6 md:mb-8">
          CUSTOMPEDIA
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
          A full-service marketing agency that creates integrated, end-to-end marketing experiences with a creative touch. We help you optimize the full customer journey.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;