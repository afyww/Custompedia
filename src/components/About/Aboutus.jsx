/* eslint-disable no-irregular-whitespace */
import about1 from "../../assets/images/about1.png";
import about2 from "../../assets/images/about2.png";
import about3 from "../../assets/images/about3.png";

function Aboutus() {
  return (
    <div className="grid grid-cols-1 h-full bg-black p-4">
      <div className="xl:my-auto space-y-2 xl:space-y-4">
        <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="xl:col-span-3 xl:space-y-8 space-y-1">
            <div className="xl:flex xl:space-x-2 space-y-2 xl:space-y-0">
              <div className="bg-blue-500 rounded p-1 xl:p-2 w-fit">
                <h1 className="text-white text-xs xl:text-xl font-semibold">
                  About Us
                </h1>
              </div>
              <div className="">
                <h1 className="xl:text-4xl text-2xl font-light text-white">
                  9 years managing trust from our clients, we
                </h1>
              </div>
            </div>
            <div className="xl:space-y-8 w-full">
              <h1 className="text-white text-xs font-extralight text-left xl:text-xl">
                Why Us? Experience the all-in-one solution for unmatched
                creative marketing results.  Founded in 2014, our creative
                agency started by selling merchandise and souvenirs. We applied
                our knowledge of marketing strategy from our prior
                work to the creative marketing consultant agency; where we have
                led our journey with clients on numerous social platforms; from
                2017 until this moment. Our path has been distinguished by a
                constant pursuit of quality, assistingclients of all
                sizes to accomplish their goals and develop their digital
                presence.
              </h1>
              <h1 className="text-white text-xs font-extralight xl:text-xl">
                With a decade of expertise, our team combines creativity and
                strategic thinking to craft compelling campaigns that resonate
                with target audiences. Our extensive awareness of the most
                recent trends and technology guarantees that we stay ahead of
                the competition. We optimize the use of technology
                and determine the most effective strategy to sell your brand on
                search enginestherefore we may be your choice to create
                marketing campaigns that deliver verifiable marketing results.
              </h1>
            </div>
          </div>
          <div className="my-auto xl:col-span-1">
            <div className="xl:space-y-10 grid grid-cols-2 xl:grid-cols-1">
              <div className="mx-auto text-center p-2">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">9th</h1>
                <h1 className="text-white xl:text-lg">Years of Experience</h1>
              </div>
              <div className="mx-auto text-center p-2">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">50+</h1>
                <h1 className="text-white xl:text-lg">Skilled Professionals</h1>
              </div>
              <div className="mx-auto text-center p-2">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">300+</h1>
                <h1 className="text-white xl:text-lg">Satisfied Clients</h1>
              </div>
              <div className="mx-auto text-center p-2">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">2,5k</h1>
                <h1 className="text-white xl:text-lg">Project Done</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="mx-auto">
            <img src={about1} alt="" />
          </div>
          <div className="mx-auto">
            <img src={about2} alt="" />
          </div>
          <div className="mx-auto">
            <img src={about3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
