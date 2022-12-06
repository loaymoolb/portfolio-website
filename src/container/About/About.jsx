import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor, client } from '../../client.js';
import { AppWrap, MotionWrap } from '../../wrapper';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">About Me</h2>
      <div className="about-container">
      <div className="about-text">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={about.title + index}
          >
            <h3 className="bold-text" style={{ marginTop: 20 }}><span>Hi there! </span>{about.title}</h3>
            <p className="p-text" style={{ marginTop: 10 }}>
              Since I began my studies a year ago, I've enjoyed discovering new things. 
            </p>
            <p className="p-text">
              I'm excited about creating innovative web applications and expanding my knowledge of the field. 
            </p>
            <p className="p-text">
              Additionally, I adore networking, so please feel free to leave your feedback or contact me on any social media platform!
            </p>  
            
          </motion.div>
        ))}
      </div>
      <div className="about-content">
      {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            
          </motion.div>
        ))}
      </div>
      </div> 
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'about'),
  'about',
  "whitebg"
);