import React from 'react'
import Container from './Container'
import creative from '../assets/creative designer.png'

const Project = () => {
  return (
    <Container className="bg-2nd pt-32 px-3 font-inter">
      <h3 className='text-white text-4xl font-semibold text-center mb-2'>Projects</h3>
      <p className='text-white text-2xl text-center mb-3'>Here is My Recent Projects defining Experience</p>
      <div className="grid grid-cols-3">
      <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={creative} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>HTML</h4>
          </div>
      </div>
    </Container>
  )
}

export default Project