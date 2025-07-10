import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Images from "../Constant/Images";
import { motion } from "framer-motion";
motion;
const fadeFrom = (direction = "top", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "top" ? -50 : direction === "bottom" ? 50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
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
    <div className="flex flex-col gap-10 lg:flex-row min-h-screen bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      
      {/* Sidebar */}
      <motion.div
        className="w-full lg:w-1/6 flex flex-row lg:flex-col items-center justify-center gap-6 py-6 bg-white/10 backdrop-blur-md shadow-lg"
        initial="hidden"
        animate="visible"
        variants={fadeFrom("left", 0)}
      >
        <FiLinkedin className="text-3xl hover:text-yellow-400 cursor-pointer" />
        <FiGithub className="text-3xl hover:text-yellow-400 cursor-pointer" />
        <FaInstagram className="text-3xl hover:text-yellow-400 cursor-pointer" />

        <div className="hidden lg:block h-24 w-px bg-white/30 my-6 mx-auto" />

        <div className="text-center mt-4">
          <p className="text-xs font-light tracking-widest">© {new Date().getFullYear()}</p>
          <p style={{ fontFamily: "homefont" }} className="text-sm font-semibold mt-2">
            Yahya Lerhni
          </p>
        </div>
      </motion.div>

      {/* Bio */}
      <motion.div
        className="w-full lg:w-1/4 flex flex-col justify-center items-center p-6 gap-4 bg-white/10 backdrop-blur-lg shadow-inner"
        initial="hidden"
        animate="visible"
        variants={fadeFrom("left", 0.3)}
      >
        <h1 style={{ fontFamily: "homefont" }} className="font-bold text-xl text-center">
          Yahya Lerhni
        </h1>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed text-center">
          Front-End Developer / Back-End Developer / UI Designer.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed text-center">
          I enjoy collaborating in teams and bringing ideas to life — whether it's a website, an app, or any creative digital solution.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed text-center">
          Currently working on personal and group projects, building custom web experiences using modern programming languages and tools.
        </p>
        <p style={{ fontFamily: "sitefont" }} className="text-sm leading-relaxed text-center">
          I love turning unique concepts into functional, high-quality digital products.
        </p>
      </motion.div>

      {/* Menu */}
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center gap-6 py-8 overflow-y-auto">
        {[
          { to: "/about", label: "About", delay: 0.4 },
          { to: "/portfolio", label: "Portfolio", delay: 0.6 },
          { to: "/tools", label: "Tools", delay: 0.8 },
          { to: "/contact", label: "Contact", delay: 1 },
        ].map(({ to, label, delay }) => (
          <motion.div
            key={to}
            initial="hidden"
            animate="visible"
            variants={fadeFrom("top", delay)}
            className="w-full flex justify-center"
          >
            <Link to={to}>
              <h1
                style={{ fontFamily: "homefont" }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white hover:text-yellow-400 hover:-rotate-4 cursor-pointer transition duration-300 text-center"
              >
                {label}
              </h1>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
