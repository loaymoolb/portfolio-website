import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className="social">
      <div>
      <a href='https://www.linkedin.com/in/olha-chumak' target="_blank" rel="noreferrer" className="flex"><FaLinkedin /></a>
      </div>
      <div>
      <a href='https://github.com/loaymoolb' target="_blank" rel="noreferrer" className="flex"><FaGithub /></a>
      </div>
      <div>
      <a href='https://instagram.com/olyamaii' target="_blank" rel="noreferrer" className="flex"><FaInstagram /></a>
      </div>
    </div>
  )
}

export default SocialMedia