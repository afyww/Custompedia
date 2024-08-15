import eleganImage from "../../assets/new image/people-working-elegant-cozy-office-space 1.jpg";

function Serviceus() {
  return (
    <div className="grid grid-cols-1 h-screen bg-black">
      <img
        src={eleganImage}
        alt="Custompedia Team"
        className="absolute w-full h-full object-cover opacity-50" 
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl xl:text-8xl font-bold text-yellow-500">
      OUR WORK
        </h1>
        <p className="text-base xl:text-2xl font-extrabold xl:w-3/4">
          While many marketing agencies specialize in certain parts of the
          process, such as branding, analytics, or advertising, CUSTOMPEDIA
          offers a full range of digital services. This is a tremendous
          advantage of our partners. Housing all these functions under one roof
          fosters cross-functional collaboration and cost efficiency, giving you
          the opportunity to view your entire digital strategy in full picture.
        </p>
      </div>
    </div>
  );
}

export default Serviceus;