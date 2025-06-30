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
    <div className="flex justify-between w-screen h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      
      {/* Left sidebar */}
      <motion.div
        className="w-[10%] h-full flex flex-col items-center justify-between py-10 bg-white/10 backdrop-blur-md shadow-lg rounded-r-2xl"
        initial="hidden"
        animate="visible"
        variants={fadeFrom("left", 0)}
      >
        <div className="flex flex-col gap-8 items-center">
          <FiLinkedin className="size-10 hover:text-yellow-400 transition-all duration-300 cursor-pointer" />
          <FiGithub className="size-10 hover:text-yellow-400 transition-all duration-300 cursor-pointer" />
          <FaInstagram className="size-10 hover:text-yellow-400 transition-all duration-300 cursor-pointer" />
        </div>

        <div className="h-[30%]">
          <img className="h-full" src={Images.lign} alt="divider" />
        </div>

        <div className="text-center">
          <p className="text-sm font-light tracking-widest">
            © {new Date().getFullYear()}
          </p>
          <p
            style={{ fontFamily: "homefont" }}
            className="text-md font-semibold mt-2 w-32"
          >
            Yahya Lerhni
          </p>
        </div>
      </motion.div>

      {/* Bio / Description */}
      <motion.div
        className="w-[20%] h-full flex flex-col justify-center p-6 gap-6 bg-white/10 backdrop-blur-lg shadow-inner rounded-lg"
        initial="hidden"
        animate="visible"
        variants={fadeFrom("left", 0.3)}
      >
        <h1 style={{ fontFamily: "homefont" }} className="font-bold text-xl tracking-wide">
          Yahya Lerhni
        </h1>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed">
          Front-End Developer / Back-End Developer / UI Designer.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed">
          I enjoy collaborating in teams and bringing ideas to life — whether it's a website, an app, or any creative digital solution.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed">
          Currently working on personal and group projects, building custom web experiences using modern programming languages and tools.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed">
          I love turning unique concepts into functional, high-quality digital products.
        </p>
      </motion.div>

      {/* Menu */}
      <div className="w-[60%] h-full flex flex-col justify-center items-center gap-10">
        <motion.div initial="hidden" animate="visible" variants={fadeFrom("top", 0.4)}>
          <Link to="/about">
            <h1 style={{ fontFamily: "homefont" }} className=" text-8xl hover:-rotate-4 cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300">
              About
            </h1>
          </Link>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeFrom("bottom", 0.6)}>
          <Link to="/portfolio">
            <h1 style={{ fontFamily: "homefont" }} className="text-8xl hover:-rotate-4 cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300">
              Portfolio
            </h1>
          </Link>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeFrom("right", 0.8)}>
          <Link to="/tools">
            <h1 style={{ fontFamily: "homefont" }} className=" hover:-rotate-4 text-8xl cursor-pointer font-bold text-white hover:text-yellow-400 transition duration-300">
              Tools
            </h1>
          </Link>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeFrom("left", 1)}>
          <Link to="/contact">
            <h1 style={{ fontFamily: "homefont" }} className=" text-8xl cursor-pointer font-bold hover:-rotate-4 text-white hover:text-yellow-400 transition duration-300">
              Contact
            </h1>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;