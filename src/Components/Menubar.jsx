import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { LiaUserTieSolid } from "react-icons/lia";
import { GoTools } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { MdWorkOutline } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
motion

const Mainbar = () => {
  const [showIcons, setShowIcons] = useState(false);

  const toggleIcons = () => {
    setShowIcons(prev => !prev);
  };

  return (
    <div className='grid place-content-center h-0'>
  <motion.div
    onClick={toggleIcons}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ scale: 1.15, rotate: 5 }}
    whileTap={{ scale: 0.9, rotate: -10 }}
    className='text-[white] cursor-pointer  left-150 top-25 relative z-20 hover:text-[gold]'
  >
    <TiThMenuOutline className='size-10' />
  </motion.div>

  {showIcons && <NavIcons />}
</div>
  );
};

const NavIcons = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-full">
      <IoHomeOutline
        onClick={() =>  navigate('/')}
        className='text-[white] hover:scale-115 hover:text-[gold] hover:rotate-12 duration-600 cursor-pointer size-10 z-20  left-150 absolute'
      />
      <LiaUserTieSolid
        onClick={() => navigate('/about')}
        className='text-[white] hover:scale-115 hover:text-[gold] hover:rotate-12 duration-600 cursor-pointer size-10 z-20 top-25 left-135 absolute'
      />
      <GoTools
        onClick={() => navigate('/tools')}
        className='text-[white] hover:scale-115 hover:text-[gold] hover:rotate-12 duration-600 cursor-pointer size-10 z-20 absolute left-135 top-5'
      />
      <HiOutlineMail
        onClick={() => navigate('/contact')}
        className='text-[white] hover:scale-115 hover:text-[gold] hover:rotate-12 duration-600 cursor-pointer size-10 z-20 absolute left-125 top-15'
      />
      <MdWorkOutline
        onClick={() => navigate('/portfolio')}
        className='text-[white] hover:scale-115 hover:text-[gold] hover:rotate-12 duration-600 cursor-pointer size-10 z-20 absolute top-30 left-150'
      />
    </div>
  );
};

export default Mainbar;
