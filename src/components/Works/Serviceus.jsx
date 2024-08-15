import eleganImage from "../../assets/new image/people-working-elegant-cozy-office-space 1.jpg";

function Serviceus() {
  return (
    <div 
      className="relative grid grid-cols-1 h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${eleganImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center m-auto">
        <h1 className="text-4xl xl:text-8xl font-bold text-yellow-500">
          OUR WORK
        </h1>
        <p className="text-sm xl:text-2xl font-extrabold mx-auto xl:w-3/4 text-white">
          While many marketing agencies specialize in certain parts of the process, 
          such as branding, analytics, or advertising, CUSTOMPEDIA offers a full 
          range of digital services. This is a tremendous advantage of our partners. 
          Housing all these functions under one roof fosters cross-functional 
          collaboration and cost efficiency, giving you the opportunity to view your 
          entire digital strategy in full picture.
        </p>
      </div>
    </div>
  );
}

export default Serviceus;
