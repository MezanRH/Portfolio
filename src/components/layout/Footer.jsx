import React from 'react'
import Container from '../Container'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container className="bg-2nd pt-32 px-3 font-inter text-center py-4">
      <h3 className=' text-white'>Meznur Rohoman</h3>
      <div className=' flex items-center justify-center mt-3'>
      <a href="https://github.com/MezanRH" className=' text-white mr-4 text-2xl'>
      <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/meaznur-rahaman-2033281b8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwZXh0bgNhZW0CMTAAAR2tb44r4rd31nh40OVXILrYN0ST3_2hRLvBmD18UjXETNRtuot-RiQAAXQ_aem_AQwvBIHe7_S8KTXW4xPVtWsJQ4OkrJXcY5dn0P2hs0gQYuKokxfmwLAXzaO0aNXngzjspoULtCTbl5yfuAf6o6y_" className=' text-white mr-4 text-2xl'>
      <FaLinkedin/>
      </a>
      <a href="https://www.youtube.com/@mahmudurrahaman-bx3tk" className=' text-white mr-4 text-2xl'>
      <IoLogoYoutube/>
      </a>
      <FaXTwitter className=' text-white text-2xl'/>
      </div>
      <p className=' text-white mt-3'>© 2023 All rights reserved. A Family of Love & Affection.</p>
    </Container>
  )
}

export default Footer