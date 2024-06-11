import React from 'react'
import Container from './Container'
import creative from '../assets/creative designer.png'
import Button from './Button'

const Project = () => {
  return (
    <Container className="bg-2nd pt-16 md:pt-32 px-3 font-inter">
      <h3 className='text-white text-2xl md:text-4xl font-semibold text-center mb-2 mt-[-3px] md:mt-0'>Projects</h3>
      <p className='text-white text-lg md:text-2xl text-center mb-3'>Here is My Recent Projects defining Experience</p>
      <div className="grid grid-cols-1 md:grid-cols-3">
      <div className='border border-slate-300 bg-black rounded p-2 md:p-5 mr-0 md:mr-2 mt-1 md:mt-5'>
            <img src={creative} className=' rounded'/>
            <Button text="Html" className=" px-0 md:px-2 py-0 text-white mt-2 md:mt-4 text-sm"/>
            <Button text="CSS" className=" px-0 md:px-2 py-0 text-white mt-2 md:mt-4 ml-2 text-sm"/>
            <Button text="Boostrap" className=" px-0 md:px-2 py-0 text-white mt-2 md:mt-4 ml-2 text-sm"/>
            <p className=' text-white font-normal text-xl mt-4'>Creative designer</p>
            <h5 className='text-white font-normal text-xs mt-2'>January 2024 - February 2024</h5>
            <p className=' text-white text-sm mt-3'>It's a agency website . In this website company explain their service and thair company employe.</p>
            
            <div className=' flex justify-between'>
            <a href="https://creative-disigen.vercel.app/">
            <Button text="Live Demo" className=" px-4 md:px-8 mt-4"/>
            </a>
            <a href="https://github.com/MezanRH/Creative_disigen">
            <Button text="Github Repo" className=" px-4 md:px-8 mt-4"/>
            </a>
            </div>
      </div>
      </div>
    </Container>
  )
}

export default Project