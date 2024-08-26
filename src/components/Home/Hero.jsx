import { useState, useEffect } from "react";
import bghero from "../../assets/images/bghero.mp4";
import "../../App.css";

const TYPING_SPEED = 150;
const DELETING_SPEED = 50;

function useTypingEffect(words) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, words]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return `${words[index].substring(0, subIndex)}${blink ? "|" : " "}`;
}

function Hero() {
  const typedText = useTypingEffect([
    "Digital",
    "Social Media",
    "Advertising",
    "KOL",
    "Event",
  ]);

  return (
    <div className="relative h-screen overflow-hidden z-30">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src={bghero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 bg-black bg-opacity-50 grid grid-cols-1 h-screen">
        <div className="my-auto xl:my-48 2xl:my-60 mx-auto">
          <div className="space-y-4">
            <div className="xl:flex justify-center xl:space-x-5 space-y-4">
              <div className="text-center">
                <h1 className="text-white text-2xl font-semibold xl:text-7xl 2xl:text-8xl">
                  WE ARE
                </h1>
              </div>
              <div className="mx-auto xl:w-1/4 xl:mx-0 my-auto">
                <p className="text-white font-base text-center xl:text-left text-sm xl:text-base 2xl:text-lg">
                  We can help your company grow and win more business with
                  creative branding, social media, digital, print and
                  merchandise.
                </p>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-yellow-500 font-semibold text-2xl xl:text-7xl 2xl:text-8xl">
                {typedText}
              </h1>
            </div>
            <div className="xl:flex justify-center xl:space-x-12">
              <div className="">
                <h1 className="text-white text-2xl text-center font-semibold xl:text-7xl 2xl:text-8xl">
                  MARKETING AGENCY
                </h1>
              </div>
            </div>
            <div className="xl:flex xl:justify-center xl:space-x-10 space-y-8">
              <div className="xl:w-1/3 my-auto">
                <p className="text-white font-base text-center xl:text-left text-sm xl:text-base 2xl:text-lg">
                  Ready To See How Our True Full-Stack Solution Can Help Drive
                  Meaningful Growth For You.
                </p>
              </div>
              <div className="">
                <div className="xl:px-24 mx-8 xl:mx-0 px-0 p-1 xl:p-2 rounded-xl my-auto border-4 border-yellow-500"></div>
              </div>
              <div className="justify-center flex my-auto">
                <div className="border-2 p-4 border-blue-400 rounded-full" id="app">
                  <div className="arrow arrowSliding delay1"></div>
                  <div className="arrow arrowSliding delay2"></div>
                  <div className="arrow arrowSliding delay3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
