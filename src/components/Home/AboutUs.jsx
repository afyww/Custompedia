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
    <div className="bg-black text-white grid grid-cols-1 h-screen">
      <div className="mx-auto my-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 space-x-0 xl:space-x-8">
          <div className="p-2 xl:p-0">
            <img
              src={teamPhoto}
              alt="Team"
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
          <div className="text-center xl:text-left my-auto space-y-8">
            <div
              className=""
              style={{
                fontFamily: "Unbounded",
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "1.2",
                color: "rgba(250, 192, 22, 1)",
              }}
            >
              About Us
            </div>
            <h2
              className="text-2xl xl:text-4xl font-bold"
              style={{
                fontFamily: "Unbounded",
                fontWeight: "500",
                lineHeight: "1.2",
              }}
            >
              We Use{" "}
              <span style={{ color: "rgba(11, 153, 206, 1)" }}>Creativity</span>{" "}
              to Deliver Your Brand Vision.
            </h2>
            <p className="text-gray-300 text-sm xl:text-base">
              Through our years of experience, we develop branding and marketing
              strategies to best possible growth solutions for our clients.
            </p>
            <Link to="/about">
            <div className="flex border border-blue-500 text-white font-bold rounded-3xl w-fit mx-auto hover:bg-blue-500 hover:text-white text-sm xl:text-base p-2">
              <h1 className="my-auto">
                Get To Know More
              </h1>
              <IoIosArrowForward className="w-6 h-6 xl:w-8 xl:h-8" />
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="w-full p-4 my-auto"
        style={{
          background:
            "linear-gradient(to right, rgba(250, 192, 22, 0.3), rgba(11, 153, 206, 0.3))",
        }}
      >
        <div className="">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
            <StatItem
              number="9"
              suffix="th"
              text="Years of Experience"
              inView={inView}
            />
            <StatItem
              number="50"
              suffix="+"
              text="Skilled Professionals"
              inView={inView}
            />
            <StatItem
              number="300"
              suffix="+"
              text="Satisfied Clients"
              inView={inView}
            />
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
