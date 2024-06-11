import React from 'react'
import Container from './Container'
import { Typewriter } from 'react-simple-typewriter'
import Img from './Img'
import profilImg from "../assets/profile.png"

const About = () => {
  return (
    <Container className="bg-2nd pt-16 md:pt-32 px-3 md:flex">
<div className=' md:w-2/4 w-full'>
<h2 className=' text-color text-2xl md:text-4xl font-inter font-bold mb-3 md:mb-8'>Hi, I am</h2>
      <h3 className='text-color text-2xl md:text-3xl font-inter font-bold mb-2 md:mb-5'>Mezanur Rohoman</h3>
      <p className=' text-color w-auto text-xl md:text-3xl font-inter font-bold '>A <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-4 rounded-xl'>
      <Typewriter
            words={['Full Stack Developer.', 'Problem Solver.', 'consistent learner.', 'Programer.', 'Frontend designer.', 'Backend developer.', 'Wordpress developer.']}
            loop={50}
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={2000}
          /></span></p>
          <h4 className=' text-base md:text-2xl text-color pt-3 md:mb-0 mb-8'>I am an enthusiastic problem solver, consistence learner . Eager to embrace new challenges. I am dedicated to delivering top-notch results. With a positive mindset and a commitment to growth, I am ready to create a meaningful impact and attain significant achievements.</h4>
</div>
<div className=' md:w-2/4 w-full flex md:justify-end justify-center '>
  <Img src={profilImg} className=" md:rounded-[80%] rounded-[80%] md:h-[60%] h-[320px] md:mb-0 mb-7"/>
</div>
    </Container>
  )
}

export default About