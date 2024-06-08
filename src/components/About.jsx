import React from 'react'
import Container from './Container'
import { Typewriter } from 'react-simple-typewriter'
import Img from './Img'
import profilImg from "../assets/profile.png"

const About = () => {
  return (
    <Container className="bg-2nd pt-32 px-3 flex">
<div className=' w-2/4'>
<h2 className=' text-color text-4xl font-inter font-bold mb-8'>Hi, I am</h2>
      <h3 className='text-color text-3xl font-inter font-bold mb-5'>Mezanur Rohoman</h3>
      <p className=' text-color w-auto text-3xl font-inter font-bold '>A <span className='bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium px-4 rounded-xl'>
      <Typewriter
            words={['Full Stack Developer.', 'Problem Solver.', 'consistent learner.', 'Programer.', 'Frontend designer.', 'Backend developer.', 'Wordpress developer.']}
            loop={50}
            cursor
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={150}
            delaySpeed={2000}
          /></span></p>
          <h4 className=' text-2xl text-color pt-3'>I am an enthusiastic problem solver, consistence learner . Eager to embrace new challenges. I am dedicated to delivering top-notch results. With a positive mindset and a commitment to growth, I am ready to create a meaningful impact and attain significant achievements.</h4>
</div>
<div className=' w-2/4 flex justify-end '>
  <Img src={profilImg} className=" rounded-[80%] h-[60%]"/>
</div>
    </Container>
  )
}

export default About