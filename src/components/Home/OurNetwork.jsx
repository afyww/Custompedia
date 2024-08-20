import customfluencer from "../../assets/images/customfluencer.png";
import parcelinpack from "../../assets/images/parcelinpack.png";
import parcelinpremium from "../../assets/images/parcelinpremium.png";
import customprinting from "../../assets/images/customprinting.png";
import creasa from "../../assets/images/creasa.png";

const OurNetwork = () => (
  <div className="bg-black text-white p-2 xl:p-4 grid grid-cols-1 z-30">
    <div className="z-20 my-6 xl:my-12">
      <div className="space-y-10">
        <div>
          <div className="flex space-x-2">
            <div>
              <h1 className="text-xl text-left xl:text-5xl 2xl:text-7xl text-white font-bold">
                Our Network
              </h1>
            </div>
            <div className="pt-3.5 xl:pt-8 2xl:pt-12">
              <div className="bg-yellow-400 p-1 xl:p-2 rounded-xl px-8 xl:px-16"></div>
            </div>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl">
            Sister company that complete our creative universe
          </p>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-3 my-auto gap-5 xl:gap-10 xl:mx-10">
          <div className="space-y-2">
            <div className="mx-auto xl:mx-0 px-10 xl:py-11 py-10 w-fit bg-blue-400 rounded-xl">
              <img src={parcelinpack} alt="" />
            </div>
            <div className="text-center xl:text-left">
              <h2 className="font-semibold text-lg text-yellow-400">
                ParcelinPack
              </h2>
            </div>
            <div className="text-center xl:text-left">
              <p className="text-white font-light text-xs xl:text-base">
                Parcelinpack is creative packaging and printing company. Our
                speciality in custom packaging, so you can create your dream
                packaging with any materials, shape for any occassions.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="mx-auto xl:mx-0 px-10 xl:py-7 py-8 w-fit bg-blue-400 rounded-xl">
              <img src={customfluencer} alt="" />
            </div>
            <div className="text-center xl:text-left">
              <h2 className="font-semibold text-lg text-yellow-400">
                Customfluencer
              </h2>
            </div>
            <div className="text-center xl:text-left">
              <p className="text-white font-light text-xs xl:text-base">
                Due the high demand in KOL Marketing service, Custompedia build
                Customfluencer to complete Custompedia environment, especially
                in influencer / KOL marketing.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="mx-auto xl:mx-0 xl:px-16 px-14 py-2 xl:py-0 w-fit bg-blue-400 rounded-xl">
              <img src={customprinting} alt="" />
            </div>
            <div className="text-center xl:text-left">
              <h2 className="font-semibold text-lg text-yellow-400">
                Custom Printing
              </h2>
            </div>
            <div className="text-center xl:text-left">
              <p className="text-white font-light text-xs xl:text-base">
                Parcelinpack is creative packaging and printing company. Our
                speciality in custom packaging, so you can create your dream
                packaging with any materials, shape for any occassions.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="mx-auto xl:mx-0 px-10 xl:px-10 xl:py-8 py-7 w-fit bg-blue-400 rounded-xl">
              <img src={creasa} alt="" />
            </div>
            <div className="text-center xl:text-left">
              <h2 className="font-semibold text-lg text-yellow-400">
                Creasa Supply
              </h2>
            </div>
            <div className="text-center xl:text-left">
            <p className="text-white font-light text-xs xl:text-base">
            Creative Supply Asia (Creasa) is distrubutor for printing and
                advertising raw material. Either we use for our internal company
                (in our group), we can also sell to another company.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="mx-auto xl:mx-0 xl:px-10 px-4 xl:py-0 w-fit bg-blue-400 rounded-xl">
              <img src={parcelinpremium} alt="" />
            </div>
            <div className="text-center xl:text-left">
              <h2 className="font-semibold text-lg text-yellow-400">
                Parcelin Premium
              </h2>
            </div>
            <div className="text-center xl:text-left">
            <p className="text-white font-light text-xs xl:text-base">
            Parcelinpremium is a online-based Exclusive Hampers and Gift for
                any special event such as Eid Mubarak, Christmas, CNY, etc. We
                also accept for corporate gift.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
);

export default OurNetwork;
