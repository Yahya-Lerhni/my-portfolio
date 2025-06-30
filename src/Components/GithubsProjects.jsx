import React from "react";
import { motion } from "framer-motion";
motion
import { IoEyeOutline } from "react-icons/io5";
import cuisineImg from "../assets/Projects/cuisine.png";
import dardarkomImg from "../assets/Projects/dardarkom.png";
import animeImg from "../assets/Projects/anime.png";
import libraryImg from "../assets/Projects/library.png";
import yummyimg from "../assets/Projects/Yummy.png";
import todolistimg from "../assets/Projects/My To Do List.png";
import firstprojectimg from "../assets/Projects/My First project.png";
import ecomimg from "../assets/Projects/E-com.png";
import projectsimpleimg from "../assets/Projects/Project Simple.png";
import arrayimg from "../assets/Projects/Array.png";

const projects = [
  {
    title: "Cuisine Marocaine",
    description: "This Moroccan cuisine website showcases traditional recipes, cooking techniques, and rich cultural information. Users can explore detailed ingredients, regional variations, and step-by-step guides to prepare authentic Moroccan dishes, celebrating the diversity of Moroccan gastronomy.",
    url: "https://cuisine-marocaine-ihg2.vercel.app/",
    image: cuisineImg,
  },
  {
    title: "Dardarkom",
    description: "Dar Darkom is a real estate web app for buying and selling houses. It offers an easy-to-use interface to browse properties, view details, and connect buyers with sellers efficiently. Built with modern web tech for a smooth user experience.",
    url: "https://dardarkom.vercel.app/",
    image: dardarkomImg,
  },
  {
    title: "Anime Project",
    description: "An anime-themed website that allows users to explore characters from various popular anime series. Built using React and Tailwind CSS, it fetches data from a public anime API and displays character images, names, and basic information. Smooth animations and a clean UI enhance the user experience.",
    url: "https://anime-chi-nine.vercel.app/",
    image: animeImg,
  },
  {
    title: "Library",
    description: "This library application provides detailed information about books, including the author, key ideas, price, and genre. It offers users an organized platform to explore and learn about various books, helping them discover new reads and understand their content better.",
    url: "https://library-mu-eight.vercel.app/",
    image: libraryImg,
  },
  {
    title: "Yummy",
    description: "Yummy is a modern and responsive recipe website that showcases various food dishes through clean visuals and structured content. Designed to be user-friendly on all devices, it focuses on delivering a smooth browsing experience with elegant styling, attractive layout, and well-organized recipe details.",
    url: "https://yahya-lerhni.github.io/Yahya-Lerhni-Pf-Dom/",
    image:yummyimg,
  },
  {
    title: "My To Do List",
    description: "This To-Do List application helps users organize their tasks efficiently with features like adding, editing, and deleting tasks. Built with a clean and intuitive interface, it allows users to manage their daily activities and improve productivity easily.",
    url: "https://yahya-lerhni.github.io/ToDo-List/",
    image:todolistimg,
  },
  {
    title: "First Project",
    description: "This was my very first web development project, built entirely using just HTML and CSS. It was a simple, static website designed to practice structuring content and styling layouts. Through this project, I learned how to build responsive pages, organize elements using Flexbox and Grid, and apply basic design principles like spacing, colors, and typography. It laid the foundation for my journey as a front-end developer",
    url: "https://yahya-lerhni.github.io/Yahya-Lerhni/",
    image:firstprojectimg,
  },
  {
    title: "Project E-com",
    description: "This is a static e-commerce website built using only HTML and SASS. It was designed to simulate an online shopping experience with multiple product sections, a responsive layout, and a clean, modern interface. Through this project, I practiced building structured pages, working with reusable SASS components, and applying consistent styling across the site. It helped me understand how to build scalable front-end layouts without using JavaScript.",
    url: "https://yahya-lerhni.github.io/e-com/",
    image:ecomimg,
  },
  {
    title: "Project Simple",
    description: "This was my very second web development project, built entirely using just HTML and CSS. It was a simple, static website designed to practice structuring content and styling layouts. Through this project, I learned how to build responsive pages, organize elements using Flexbox and Grid, and apply basic design principles like spacing, colors, and typography. It laid the foundation for my journey as a front-end developer",
    url: "https://yahya-lerhni.github.io/simple-project/",
    image:projectsimpleimg,
  },
  {
    title: "Project Array",
    description: "This was my first group project developed in collaboration with classmates during our studies. Together, we built a complete website from scratch, and my responsibilities focused on creating the page structure using HTML and applying styles with CSS/SASS. Working as a team taught us how to plan, divide tasks, and use Git for version control. It was a great opportunity to apply what we learned in class and gain real experience in team-based web development.",
    url: "https://yahya-lerhni.github.io/Aymen-yahya-adam-array/",
    image: arrayimg,
  },
];

// Animation variants for container & items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: "easeInOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const GithubsProjects = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-md shadow-yellow-200/30"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="shadow-yellow-100/40 object-contain rounded-2xl p-6 text-white shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 flex flex-col items-center "
        >
          <h3 style={{fontFamily:'homefont'}} className="text-2xl font-bold  text-yellow-400 mb-3">{project.title}</h3>
          <p style={{fontFamily:'sitefont'}} className="text-gray-300 mb-4 flex-grow">{project.description}</p>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl shadow-md mb-6 object-cover max-h-48 w-full"
          />
          <div className="flex justify-center items-center relative">
            <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{fontFamily:'homefont'}}
            className="inline-block w-[10rem] bg-[gold]  hover:bg-[white] text-white hover:text-[gold] px-5 py-2 rounded-xl text-center font-semibold"
          >
            View Project
          </a>
          <IoEyeOutline className="absolute right-2.5 text-[gold] size-5 " />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default GithubsProjects;
