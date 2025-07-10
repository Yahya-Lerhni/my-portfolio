import React from "react";
import { motion } from "framer-motion";
import Images from "../Constant/Images";
import Menubar from "../Components/Menubar";
motion;
// Parent animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: "easeInOut",
    },
  },
};
// Each icon animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  },
};
const Tools = () => {
  const tools = [
    Images.html,
    Images.css,
    Images.js,
    Images.react,
    Images.laravel,
    Images.php,
    Images.python,
    Images.java,
    Images.c,
    Images.c2,
    Images.nodejs,
    Images.vscode,
    Images.perl,
    Images.sass,
    Images.git,
    Images.boot,
    Images.tailwind,
    Images.mysql,
    Images.angular,
    Images.ts,
  ];
  return (
    <div>
      <Menubar />
      <div className="w-full min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col md:flex-row items-center justify-center p-6 gap-10 text-white">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -1000 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6 px-4"
        >
          <h1
            style={{ fontFamily: "homefont" }}
            className="text-4xl sm:text-6xl md:text-7xl text-[gold] drop-shadow-lg"
          >
            Tools.
          </h1>
          <p
            style={{ fontFamily: "sitefont" }}
            className="w-full max-w-[600px] text-lg leading-relaxed mt-2"
          >
            Over the course of my development journey, I’ve worked with a range
            of tools and technologies that help bring ideas to life — from
            responsive front-end frameworks to powerful back-end platforms.
            <br />
            <br />
            Here are the main tools I use regularly to build fast, modern, and
            reliable web experiences.
          </p>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-5 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.3 }}
            style={{ fontFamily: "homefont" }}
            className="text-3xl sm:text-4xl text-[gold] drop-shadow-md"
          >
            My Skills
          </motion.h1>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full p-4  flex flex-wrap justify-center items-center sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-md shadow-yellow-200/30"
          >
            {tools.map((tool, index) => (
              <motion.img
                key={index}
                src={tool}
                variants={itemVariants}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl shadow-lg shadow-yellow-100/40 object-contain"
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Tools;
