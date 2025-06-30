import React from "react";
import { motion } from "framer-motion";
motion
import Menubar from "../Components/Menubar";
import GithubProjects from "../Components/GithubsProjects";

const textVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const Portfolio = () => {
  return (
    <div>
      <Menubar />
      <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col items-center py-10 text-white">
        
        {/* Header Section with Animation */}
        <motion.div
          className="w-full flex flex-col items-center px-4 text-center"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4,
              },
            },
          }}
        >
          {/* Animated h1 */}
          <motion.h1
            custom={1}
            variants={textVariant}
            style={{ fontFamily: "homefont" }}
            className="text-4xl sm:text-6xl md:text-8xl text-[gold] drop-shadow-lg"
          >
            Project.
          </motion.h1>

          {/* Animated paragraph */}
          <motion.p
            custom={2}
            variants={textVariant}
            className="w-[90%] sm:w-[70%] md:w-[50%] mt-6"
            style={{ fontFamily: "sitefont" }}
          >
            I have worked on a diverse range of web development projects using
            multiple programming languages and modern frameworks. My focus has
            always been on creating clean, responsive, and user-friendly
            interfaces, while maintaining well-structured and scalable code.
            Throughout my journey, I have utilized technologies such as
            <span className="underline text-blue-400 font-semibold"> HTML</span>,
            <span className="underline text-blue-400 font-semibold"> CSS</span>,
            <span className="underline text-yellow-300 font-semibold"> JavaScript</span>,
            <span className="underline text-cyan-400 font-semibold"> React</span>,
            <span className="underline text-teal-300 font-semibold"> Tailwind CSS</span>,
            <span className="underline text-purple-400 font-semibold"> PHP</span>, and
            <span className="underline text-red-400 font-semibold"> Laravel</span>,
            and integrated APIs to build dynamic and functional web applications.
            I strive to deliver efficient solutions with attention to detail in
            both performance and design.
          </motion.p>
        </motion.div>

        {/* Projects Section */}
        <div className="w-full flex flex-wrap justify-center items-center gap-5 py-20 px-4">
          <GithubProjects />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
