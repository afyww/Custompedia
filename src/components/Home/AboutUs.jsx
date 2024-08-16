import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import teamPhoto from "../../assets/new image/teamphoto.png";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative grid grid-cols-1 text-white bg-gradient-to-br from-yellow-500 to-blue-500">
            <div className="bg-black z-10 absolute w-full h-full opacity-75"></div>

      <div className="my-16 xl:my-44 z-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 space-x-0 xl:space-x-8">
          <div className="p-2 xl:p-0">
            <img
              src={teamPhoto}
              alt="Team"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
          <div className="text-center xl:text-left my-auto space-y-4 xl:space-y-8">
            <div>
              <h1 className="text-yellow-500 text-2xl font-semibold">
                About Us
              </h1>
            </div>
            <div>
              <h1 className="text-white xl:text-4xl font-semibold">
                We Use <span className="text-blue-500">Creativity</span> to
                Deliver Your Brand Vision.
              </h1>
            </div>
            <div>
              <p className="text-gray-300 text-sm xl:text-base">
                Through our years of experience, we develop branding and
                marketing strategies to best possible growth solutions for our
                clients.
              </p>
            </div>
            <div>
              <Link to="/about">
                <div className="flex border border-blue-500 text-white font-bold rounded-xl w-fit mx-auto xl:mx-0 hover:bg-blue-500 hover:text-white text-sm xl:text-base p-2">
                  <h1 className="my-auto">Get To Know More</h1>
                  <IoIosArrowForward className="w-6 h-6 xl:w-8 xl:h-8" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
  ref={ref}
  className="p-4 z-20"
  style={{
    background:
      "linear-gradient(to right, rgba(250, 192, 22, 0.3), rgba(11, 153, 206, 0.3))",
  }}
>
  <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 h-56 z-20">
    <div className="flex items-center justify-center h-full z-20">
      <StatItem
        number="9"
        suffix="th"
        text="Years of Experience"
        inView={inView}
      />
    </div>
    <div className="flex items-center justify-center h-full">
      <StatItem
        number="50"
        suffix="+"
        text="Skilled Professionals"
        inView={inView}
      />
    </div>
    <div className="flex items-center justify-center h-full">
      <StatItem
        number="300"
        suffix="+"
        text="Satisfied Clients"
        inView={inView}
      />
    </div>
    <div className="flex items-center justify-center h-full">
      <StatItem
        number="2500"
        suffix=""
        text="Projects Done"
        inView={inView}
      />
    </div>
  </div>
</div>
    </div>
  );
}

function StatItem({ number, suffix, text, inView }) {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="text-center">
      <p className="font-poppins text-3xl xl:text-5xl font-bold text-yellow-400">
        {hasAnimated ? <CountUp end={parseInt(number)} duration={2.5} /> : "0"}
        {suffix}
      </p>
      <p className="font-poppins text-xs xl:text-base font-semibold text-white">
        {text}
      </p>
    </div>
  );
}

export default AboutUs;
