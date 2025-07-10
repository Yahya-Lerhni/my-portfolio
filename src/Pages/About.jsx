import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaServer, FaTools, FaHandPeace } from "react-icons/fa";
import Menubar from "../Components/Menubar";
import Images from "../Constant/Images";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full">
      <Menubar />
      <div className="w-full min-h-screen relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 py-8 gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8 py-6 px-2 sm:px-6 text-white">
          {/* Animated greeting */}
          <h3
            style={{ fontFamily: "sitefont" }}
            className="text-base xs:text-lg sm:text-xl flex flex-wrap justify-center lg:justify-start items-center gap-2 text-center lg:text-left"
          >
            <FaHandPeace className="text-[gold] animate-wiggle" />
            {[..."Hi There, I'm Yahya"].map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h3>

          {/* Animated title section */}
          <motion.div
            className="title"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <h2 className="text-base max-sm:w-screen sm:text-2xl md:text-4xl font-bold text-center lg:text-left">

              I'm A{" "}
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: 1.5,
                    },
                  },
                }}
              >
                {[
                  "Developer",
                  "Programmer",
                  "Coder",
                  "Designer",
                  "Freelancer",
                ].map((word, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                    className="block text-[gold]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
            </h2>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 140 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 2 }}
            style={{ fontFamily: "sitefont" }}
            className="w-full max-w-md sm:max-w-xl text-sm sm:text-base leading-relaxed text-center lg:text-left px-2 sm:px-0"
          >
            I enjoy collaborating in teams and bringing ideas to life — whether
            it's a website, an app, or any creative digital solution.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 2.5,
                type: "spring",
                stiffness: 80,
              }}
            >
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/uc?export=download&id=1RzZG9LXhB9hi9hmBXN7osjppZurrQEZ8",
                    "_blank"
                  )
                }
                className="w-[8rem] font-bold h-[3rem] bg-[gold] cursor-pointer hover:bg-white hover:text-[gold] hover:scale-110 rounded-xl transition-all duration-300"
                style={{ fontFamily: "homefont" }}
              >
                Download CV
              </button>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: 2.7,
                type: "spring",
                stiffness: 80,
              }}
            >
              <button
                className="w-[8rem] h-[3rem] bg-[gold] font-bold cursor-pointer hover:bg-white hover:text-[gold] hover:scale-110 rounded-xl transition-all duration-300"
                onClick={() => navigate("/tools")}
                style={{ fontFamily: "homefont" }}
              >
                My Tools
              </button>
            </motion.div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center relative z-10 p-0 sm:p-4">
          <motion.img
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 2.9 }}
            src={Images.myimage}
            alt="My portrait"
            className="rounded-full object-cover object-top shadow-lg
              w-[10rem] h-[10rem] sm:w-[12rem] sm:h-[12rem]
              md:w-[14rem] md:h-[14rem] lg:w-[20rem] lg:h-[20rem]
              aspect-square"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
