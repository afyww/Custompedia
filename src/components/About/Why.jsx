import full from "../../assets/new image/full.png";
import park from "../../assets/new image/park.png";
import lampu from "../../assets/new image/lampu.png";

function Why() {
  return (
    <div className="grid grid-cols-1 h-full bg-black p-2 xl:p-16">
      <div className="my-auto space-y-4 xl:space-y-8">
        <div>
          <h1 className="text-white text-center text-4xl xl:text-9xl font-bold">WHY YOU</h1>
        </div>
        <div>
          <h1 className="text-white text-center text-4xl xl:text-9xl font-bold">
            NEED US?
          </h1>
        </div>
        <div className="max-w-2xl mx-auto text-xs xl:text-base">
          <h1 className="text-white text-center font-light">
            In a world filled with endless distractions, capturing attention is
            an art and we are the masters of it. Our mission is clear: to create{" "}
            <span className="text-yellow-400">
              extraordinary, winning social marketing campaigns, comprehensive
              engagement strategies, and captivating narratives that propel
              brands to new heights on industry.
            </span>
          </h1>
        </div>
        <div className="xl:mx-64 mx-4 space-y-2 xl:space-y-4">
          <div className="xl:flex xl:gap-4">
            <div className="h-36 xl:h-fit w-full xl:w-80 my-auto">
              <img className="mx-auto" src={full} alt="" />
            </div>
            <div className="space-y-2 my-auto">
              <div>
                <h1 className="text-yellow-400 font-bold text-lg xl:text-2xl">
                  Full-services creative agency
                </h1>
              </div>
              <div className="">
                <h1 className="text-white text-xs font-light">
                  We map aut brand value, vision, objectives, and create the
                  precise step to react the target. From strategy, branding, and
                  execute the project, our professional team will help you to
                  handle the marketing from many aspects and bring the business
                  to certain target.
                </h1>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:gap-4">
            <div className="h-28 xl:h-fit w-full xl:w-40  my-auto">
              <img className="mx-auto" src={park} alt="" />
            </div>
            <div className="space-y-2 my-auto">
              <div>
              <h1 className="text-yellow-400 font-bold text-lg xl:text-2xl">
              Conscientious in process and result oriented{" "}
                </h1>
              </div>
              <div className="">
                <h1 className="text-white text-xs font-light">
                  From the vision to strategy, from strategy to execute, our
                  objective is that the process and progress will lead the
                  project to targeted KPI.
                </h1>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:gap-4">
            <div className="h-28 xl:h-fit w-full xl:w-64 my-auto">
              <img className="mx-auto" src={lampu} alt="" />
            </div>
            <div className="space-y-2 my-auto">
              <div>
              <h1 className="text-yellow-400 font-bold text-lg xl:text-2xl">
              Conscientious in process and result oriented
                </h1>
              </div>
              <div className="">
                <h1 className="text-white text-xs font-light">
                  As the world trend and customer behaviour change faster, it
                  makes the business face new issues and have to adapt day to
                  day. We create new new ideas to help the client to solve the
                  business issues, and to adapt in this era.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
