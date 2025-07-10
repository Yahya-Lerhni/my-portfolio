import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Images from "../Constant/Images";
import { defaultEasing, motion } from "framer-motion";
motion,defaultEasing

const fadeFrom = (direction = "top", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "top" ? -80 : direction === "bottom" ? 80 : 0,
      x: direction === "left" ? -80 : direction === "right" ? 80 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 5,
        delay: delay,
        type: "spring",
        stiffness: 80,
      },
    },
  };
  return variants;
};

const Home = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      
      {/* Left sidebar */}
      <motion.div
        className="w-full lg:w-[10%] h-auto lg:h-full flex flex-row lg:flex-col items-center justify-between py-6 lg:py-10 bg-white/10 backdrop-blur-md shadow-lg rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeFrom("left", 0)}
      >
        <div className="flex flex-row lg:flex-col gap-8 items-center justify-center w-full">
          <FiLinkedin className="size-10 hover:text-yellow-400 transition-all duration-300 cursor-pointer" />
          <FiGithub className="size-10 hover:text-yellow-400 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="size-10 hover:text-yellow-400 transition-all duration-300 cursor-pointer" />
        </div>
        <div className="hidden lg:block h-[30%]">
          <img className="h-full" src={Images.lign} alt="divider" />
        </div>
        <div className="text-center mt-4 lg:mt-0">
          <p className="text-xs lg:text-sm font-light tracking-widest">
            © {new Date().getFullYear()}
          </p>
          <p
            style={{ fontFamily: "homefont" }}
            className="text-sm lg:text-md font-semibold mt-2 w-24 lg:w-32"
          >
            Yahya Lerhni
          </p>
        </div>
      </motion.div>

      {/* Bio / Description */}
      <motion.div
        className="w-full lg:w-[20%] h-auto lg:h-full flex flex-col justify-center items-center p-4 lg:p-6 gap-4 lg:gap-6 bg-white/10 backdrop-blur-lg shadow-inner rounded-lg"
        initial="hidden"
        animate="visible"
        variants={fadeFrom("left", 0.3)}
      >
        <h1 style={{ fontFamily: "homefont" }} className="font-bold text-lg lg:text-xl tracking-wide text-center">
          Yahya Lerhni
        </h1>
        <p style={{ fontFamily: "sitefont" }} className="text-xs lg:text-sm leading-relaxed text-center">
          Front-End Developer / Back-End Developer / UI Designer.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-xs lg:text-sm leading-relaxed text-center">
          I enjoy collaborating in teams and bringing ideas to life — whether it's a website, an app, or any creative digital solution.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-xs lg:text-sm leading-relaxed text-center">
          Currently working on personal and group projects, building custom web experiences using modern programming languages and tools.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-xs lg:text-sm leading-relaxed text-center">
          I love turning unique concepts into functional, high-quality digital products.
        </p>
      </motion.div>

      {/* Menu */}
      <div className="w-full lg:w-[60%] h-auto lg:h-full flex flex-col justify-center items-center gap-6 lg:gap-10 py-8">
        <motion.div initial="hidden" animate="visible" variants={fadeFrom("top", 0.4)} className="w-full flex justify-center">
          <Link to="/about">
            <h1 style={{ fontFamily: "homefont" }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl hover:-rotate-4 cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300 text-center">
              About
            </h1>
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeFrom("bottom", 0.6)} className="w-full flex justify-center">
          <Link to="/portfolio">
            <h1 style={{ fontFamily: "homefont" }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl hover:-rotate-4 cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300 text-center">
              Portfolio
            </h1>
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeFrom("right", 0.8)} className="w-full flex justify-center">
          <Link to="/tools">
            <h1 style={{ fontFamily: "homefont" }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl hover:-rotate-4 cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300 text-center">
              Tools
            </h1>
          </Link>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeFrom("left", 1)} className="w-full flex justify-center">
          <Link to="/contact">
            <h1 style={{ fontFamily: "homefont" }} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl hover:-rotate-4 cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300 text-center">
              Contact
            </h1>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;