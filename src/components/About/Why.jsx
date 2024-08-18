import { useState } from "react";
import drop from "..//../assets/images/dropdown.png";

function Why() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
  };
  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="xl:my-20 my-8 mx-2 xl:mx-2 2xl:mx-4">
      <div className="grid grid-cols-1 xl:grid-cols-2 space-y-10">
          <div className="my-auto">
            <div>
            <h1 className="text-2xl text-left xl:text-6xl 2xl:text-7xl text-white font-extrabold">
            WHY YOU
              </h1>
            </div>
            <div>
            <h1 className="text-2xl text-left xl:text-6xl 2xl:text-7xl text-blue-400 font-extrabold">
            NEED US?
              </h1>
            </div>
            <div className="mx-auto text-xs xl:text-base">
              <h1 className="text-white font-light">
                In a world filled with endless distractions, capturing attention
                is an art and we are the masters of it. Our mission is clear: to
                create
                <span className="text-yellow-400">
                  extraordinary, winning social marketing campaigns,
                  comprehensive engagement strategies,
                  <span className="text-white">and</span> captivating narratives
                  that propel brands to new heights on industry.
                </span>
              </h1>
            </div>
          </div>
          <div className="my-auto space-y-4 mx-auto">
            <div className="bg-gray-800 p-4 xl:p-6 rounded-3xl">
              <div className="flex justify-between">
                <div className="my-auto">
                  <h1 className="text-white font-semibold text-sm xl:text-2xl">
                    FULL SERVICES CREATIVE AGENCY
                  </h1>
                </div>
                <button onClick={toggleDropdown}>
                  <div className="my-auto">
                    <img
                      className="my-auto w-3/4 xl:w-full"
                      src={drop}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {isDropdownOpen && (
                <div className="my-4 bg-gray-700 p-4 rounded-xl">
                  <p className="text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl">
                    We map aut brand value, vision, objectives, and create the
                    precise step to react the target. From strategy, branding,
                    and execute the project, our professional team will help you
                    to handle the marketing from many aspects and bring the
                    business to certain target.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-gray-800 p-4 xl:p-6 rounded-3xl">
              <div className="flex justify-between">
                <div className="my-auto">
                  <h1 className="text-white font-semibold text-sm xl:text-2xl">
                    CONSCIENTIOUS IN PROCESS AND RESULT ORIENTED
                  </h1>
                </div>
                <button onClick={toggleDropdown2}>
                  <div className="my-auto">
                    <img
                      className="my-auto w-3/4 xl:w-full"
                      src={drop}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {isDropdownOpen2 && (
                <div className="mt-4 bg-gray-700 p-4 rounded-xl">
                  <p className="text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl">
                    From the vision to strategy, from strategy to execute, our
                    objective is that the process and progress will lead the
                    project to targeted KPI.
                  </p>
                </div>
              )}
            </div>
            <div className="bg-gray-800 p-4 xl:p-6 rounded-3xl">
              <div className="flex justify-between">
                <div className="my-auto">
                  <h1 className="text-white font-semibold text-sm xl:text-2xl">
                    CONSCIENTIOUS IN PROCESS AND RESULT ORIENTED
                  </h1>
                </div>
                <button onClick={toggleDropdown3}>
                  <div className="my-auto">
                    <img
                      className="my-auto w-3/4 xl:w-full"
                      src={drop}
                      alt=""
                    />
                  </div>
                </button>
              </div>
              {isDropdownOpen3 && (
                <div className="mt-4 bg-gray-700 p-4 rounded-xl">
                  <p className="text-white font-semibold text-left text-xs xl:text-lg 2xl:text-xl">
                    As the world trend and customer behaviour change faster, it
                    makes the business face new issues and have to adapt day to
                    day. We create new new ideas to help the client to solve the
                    business issues, and to adapt in this era.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
