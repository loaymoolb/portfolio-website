import React, { useState } from 'react';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Footer.scss';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Get in touch with me!</h2>
      <div className="footer-cards">
        <div className="footer-card">
          <HiMail className="icon" />
          <a href="mailto:olyachumakk@gmail.com" target="_blank" className="p-text">olyachumakk@gmail.com</a>
        </div>
        <div className="footer-card">
          <FaLinkedin className="icon" />
          <a href="https://www.linkedin.com/in/olha-chumak" target="_blank" rel="noreferrer" className="p-text">Olha Chumak</a>
        </div>
      </div>

      {!isFormSubmitted ? (
      <div className="footer-form flex">
        <div className="flex">
          <input className="p-text" type="text" name="name" placeholder="Your Name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="flex">
          <input className="p-text" type="email" name="email" placeholder="Your Email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text" 
            placeholder="Your Message" 
            name="message"
            value={message}
            onChange={handleChangeInput}
          />  
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      ) : (
      <div>
          <h3 class="head-text">Thank you for getting in touch!</h3>
      </div>
      )}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'footer'),
  'contact',
  'whitebg'
)