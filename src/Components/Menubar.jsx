import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { LiaUserTieSolid } from "react-icons/lia";
import { GoTools } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
motion;
const Mainbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);

  return (
    <div className="fixed z-50 sm:top-[10%] sm:left-6 max-sm:bottom-6  left-1/2 sm:translate-y-0 -translate-x-1/2 sm:translate-x-0">
      {/* Toggle Button */}
      <motion.div
        onClick={toggleMenu}
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.9 }}
        className="bg-black/50  backdrop-blur-md p-3 rounded-full cursor-pointer text-white hover:text-[gold] shadow-lg border border-white/10"
      >
        <TiThMenuOutline className="size-7  sm:size-8" />
      </motion.div>

      {/* Navigation Icons */}
      <AnimatePresence>{open && <NavIcons />}</AnimatePresence>
    </div>
  );
};

const NavIcons = () => {
  const navigate = useNavigate();

  const icons = [
    { icon: <IoHomeOutline />, to: '/', delay: 0 },
    { icon: <LiaUserTieSolid />, to: '/about', delay: 0.05 },
    { icon: <GoTools />, to: '/tools', delay: 0.1 },
    { icon: <HiOutlineMail />, to: '/contact', delay: 0.15 },
    { icon: <MdWorkOutline />, to: '/portfolio', delay: 0.2 },
  ];

  return (
    <>
      {/* Mobile Half-Circle Layout */}
      <motion.div
        className="sm:hidden absolute bottom-[80px]  max-sm:left-1 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {icons.map((item, i) => {
          const angle = (Math.PI * i) / (icons.length - 1);
          const radius = 90;
          const x = Math.cos(angle) * radius;
          const y = -Math.sin(angle) * radius;

          return (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{ x, y, opacity: 1 }}
              exit={{ x: 0, y: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: item.delay }}
              onClick={() => navigate(item.to)}
              className="absolute bg-black/60 p-2 rounded-full shadow-md cursor-pointer text-white hover:text-[gold] backdrop-blur-md"
            >
              {React.cloneElement(item.icon, { className: 'size-6' })}
            </motion.div>
          );
        })}
      </motion.div>

      {/* Desktop Horizontal beside button */}
      <motion.div
        className="hidden sm:flex absolute left-[80px] top-1/2 -translate-y-1/2 gap-4 bg-white/10 backdrop-blur-lg px-4 py-3 rounded-xl shadow-xl border border-white/10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
      >
        {icons.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(item.to)}
            className="text-white hover:text-[gold] bg-black/40 p-2 rounded-full shadow-md cursor-pointer transition-all"
          >
            {React.cloneElement(item.icon, { className: 'size-6 sm:size-7' })}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Mainbar;
