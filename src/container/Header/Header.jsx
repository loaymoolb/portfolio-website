import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './Header.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1, 
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="header flex ">
      <motion.div
      whileInView={{ opacity: [0, 1]}}
      transition={{ duration: 0.5, delayChildren: 0.5}}
      className="header-img"
      >
        <img src={images.profile} alt="Profile image" />
      </motion.div>

      <motion.div
      whileInView={{x: [-100, 0], opacity: [0, 1]}}
      transition={{ duration: 0.5}}
      className="header-info"
      >
        <div className="header-title">
          <h1 className="head-text">
            Hello,<br /> I am Olya 
          </h1>
          <h1 className="head-text text-md">
            Hello, I am Olya 
          </h1>
          <h2>
            Front-end Developer
          </h2>
        </div>
        <div className="header-links flex">
          <a href="/#contact" className="p-text">Contact me</a>
          <a href="/#work" className="p-text">See my portfolio</a>
      </div>

      </motion.div>
    </div>
  )
}


export default AppWrap(Header, 'home');