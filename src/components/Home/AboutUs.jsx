import { useState, useEffect } from "react";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import teamPhoto from '../../assets/new image/teamphoto.png';

function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto py-8 md:py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Image */}
          <div className="relative">
            <img src={teamPhoto} alt="Team" className="w-full h-auto rounded-md shadow-md" />
          </div>

          {/* Right Column: Text */}
          <div className="text-center lg:text-left">
            <div className="mb-4 md:mb-8" style={{ fontFamily: 'Unbounded', fontSize: '18px', fontWeight: '500', lineHeight: '1.2', color: 'rgba(250, 192, 22, 1)' }}>
              About Us
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Unbounded', fontWeight: '500', lineHeight: '1.2' }}>
              We Use <span style={{ color: 'rgba(11, 153, 206, 1)' }}>Creativity</span> to Deliver Your Brand Vision.
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base">Through our years of experience, we develop branding and marketing strategies to best possible growth solutions for our clients.</p>
            <button className="border border-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white text-sm md:text-base">
              Get To Know More &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div ref={ref} className="w-full mt-8 md:mt-16 p-4 md:p-8 py-8 md:py-16" style={{ background: "linear-gradient(to right, rgba(250, 192, 22, 0.3), rgba(11, 153, 206, 0.3))" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <StatItem number="9" suffix="th" text="Years of Experience" inView={inView} />
            <StatItem number="50" suffix="+" text="Skilled Professionals" inView={inView} />
            <StatItem number="300" suffix="+" text="Satisfied Clients" inView={inView} />
            <StatItem number="2500" suffix="" text="Projects Done" inView={inView} />
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
      <p className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400">
        {hasAnimated ? (
          <CountUp end={parseInt(number)} duration={2.5} />
        ) : (
          '0'
        )}
        {suffix}
      </p>
      <p className="font-poppins text-xs md:text-sm lg:text-base font-semibold text-white">{text}</p>
    </div>
  );
}

export default AboutUs;