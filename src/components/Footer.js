import React from 'react'
import './Footer.css'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'


function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href='https://helenevenchen.com/' 
          target="_blank" 
          rel='noreferrer' >
          <TbWorldWww /> 
        </a>
        <a href='https://www.instagram.com/helenevenchen' 
          target="_blank" 
          rel='noreferrer' >
          <FaInstagram /> 
        </a>
        <a href='https://www.linkedin.com/in/helen-evenchen' 
          target="_blank" 
          rel='noreferrer' >
            <FaLinkedin />
        </a>
        <a href='https://twitter.com/helenevenchen' 
          target="_blank" 
          rel='noreferrer' >
            <FaTwitter />
        </a>
        <a href='https://github.com/helenec295' 
          target="_blank" 
          rel='noreferrer' >
            <FaGithub />
        </a>
        
      </div>
      <p> &copy; 2023 Helen Evenchen </p>      
    </div>
  )
}

export default Footer