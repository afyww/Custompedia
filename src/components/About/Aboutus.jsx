import aboutUsImage from '../../assets/new image/about us.jpg';

const Aboutus = () => {
  return (
    <div className="grid grid-cols-1 h-screen bg-black">
      <img 
        src={aboutUsImage} 
        alt="Custompedia Team" 
        className="object-cover opacity-50 w-full h-full absolute" 
      />
      <div className="relative text-center my-auto">
        <h1 className="text-4xl xl:text-8xl font-bold text-yellow-500">
          CUSTOMPEDIA
        </h1>
        <p className="text-base xl:text-2xl mx-auto font-extrabold xl:w-3/4 text-white">
          A full-service marketing agency that creates integrated, end-to-end marketing experiences with a creative touch. We help you optimize the full customer journey.
        </p>
      </div>
    </div>
  );
}

export default Aboutus;