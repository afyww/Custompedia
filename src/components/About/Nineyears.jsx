import map from "../../assets/images/map.png";

function Nineyears() {
  return (
    <div className="grid grid-cols-1 bg-black">
      <div className="xl:my-20 my-8 mx-2 xl:mx-2 2xl:mx-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 space-y-10">
          <div className="space-y-10">
            <div className="xl:space-y-4 space-y-2">
              <div>
                <h1 className="text-2xl text-center xl:text-left xl:text-6xl 2xl:text-7xl text-white font-extrabold">
                  NINE YEARS
                </h1>
                <h1 className="text-2xl text-center xl:text-left xl:text-6xl 2xl:text-7xl text-blue-400 font-extrabold">
                  IN THE GAME
                </h1>
              </div>
              <div className="xl:max-w-2xl">
                <p
                  className="text-white font-light text-left text-xs xl:text-lg 2xl:text-xl"
                  style={{ textAlign: "justify" }}
                >
                  Through our years of experience, we develop branding and
                  marketing strategic to best possible growth solutions for our
                  clients.
                </p>
              </div>
            </div>
            <div>
              <img src={map} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-2 my-auto gap-5 xl:gap-10 xl:mx-10">
            <div className="space-y-2">
              <div className="mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
                <h2 className="text-2xl xl:text-5xl font-bold text-white">
                  9th
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">
                  Years of Experience
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <p className="text-white font-semibold text-xs">
                  We bring years of relevant expertise, ensuring the highest
                  standards in everything we do.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
                <h2 className="text-2xl xl:text-5xl font-bold text-white">
                  50+
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">
                  Skilled Professional
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <p className="text-white font-semibold text-xs">
                  Our team of highly skilled professionals offers relevant
                  solutions tailored to your needs.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
                <h2 className="text-2xl xl:text-5xl font-bold text-white">
                  300+
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">
                  Satisfied Clients
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <p className="text-white font-semibold text-xs">
                  We have a track record of delivering relevant results that
                  satisfy our clients.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="mx-auto xl:mx-0 p-4 w-fit border-2 border-yellow-400 rounded-xl">
                <h2 className="text-2xl xl:text-5xl font-bold text-white">
                  2,5K
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <h2 className="font-semibold text-xs xl:text-lg text-blue-400">
                  Project Done
                </h2>
              </div>
              <div className="text-center xl:text-left">
                <p className="text-white font-semibold text-xs">
                  With over 2,500 projects done, our experience is both vast and
                  highly relevant to your success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nineyears;
