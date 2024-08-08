/* eslint-disable no-irregular-whitespace */
import about1 from "../../assets/new image/about1.png";
import about2 from "../../assets/new image/about2.png";
import about3 from "../../assets/new image/about3.png";

function Nineyears() {
  return (
    <div className="grid grid-cols-1 h-full bg-black p-4">
      <div className="xl:my-auto space-y-2 xl:space-y-4">
        <div className="grid grid-cols-1 xl:grid-cols-4">
          <div className="xl:space-y-4 space-y-1 xl:col-span-3">
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
            <div className="xl:w-3/4">
              <h1 className="xl:text-4xl text-2xl font-light text-white">
                develop the branding strategic to expand the business and brand
                value
              </h1>
            </div>
            <div className="xl:space-y-2">
              <h1 className="text-white font-extralight xl:text-xl">
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
              <h1 className="text-white font-extralight xl:text-xl">
                With a decade of expertise, our team combines creativity and
                strategic thinking to craft compelling campaigns that resonate
                with target audiences. Our extensive awareness of the most
                recent trends and technology guarantees that we stay ahead of
                the competition. We optimize the use of technology
                and determine the most effective strategy to sell your brand on
                search enginestherefore we may be your choice to create
                marketing campaigns that deliver verifiable marketing results.
              </h1>
              <h1 className="text-white font-extralight xl:text-xl">
                At the core of our success is our unwavering commitment to
                client satisfaction. We pride ourselves on building strong,
                collaborative relationships with our clients—micro/small/medium
                enterprises to multinational companies—ensuring that their
                unique needs and goals are met. Whether it’s idea and branding
                strategy, creative advertisement, design, content-making, or
                events, our results consistently exceed our client’s
                expectations.
              </h1>
            </div>
          </div>
          <div className="my-auto xl:col-span-1">
            <div className="xl:space-y-10 space-y-4">
              <div className="mx-auto text-center">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">9th</h1>
                <h1 className="text-white xl:text-lg">Years of Experience</h1>
              </div>
              <div className="mx-auto text-center">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">50+</h1>
                <h1 className="text-white xl:text-lg">Skilled Professionals</h1>
              </div>
              <div className="mx-auto text-center">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">300+</h1>
                <h1 className="text-white xl:text-lg">Satisfied Clients</h1>
              </div>
              <div className="mx-auto text-center">
                <h1 className="font-bold text-2xl xl:text-5xl text-yellow-500">2,5k</h1>
                <h1 className="text-white xl:text-lg">Project Done</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex justify-between space-y-4 xl:space-y-0">
          <div>
            <img src={about1} alt="" />
          </div>
          <div>
            <img src={about2} alt="" />
          </div>
          <div>
            <img src={about3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nineyears;
