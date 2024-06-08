import React from 'react'
import Container from './Container'
import Html from '../assets/images.jpg'
import Css from '../assets/css.png'
import Javascript from '../assets/js.png'
import Node from '../assets/nodejs.png'
import Wordpress from '../assets/Wordpress.png'
import Firebase from '../assets/firebase-icon.svg'
import Mongo from '../assets/Mongodb.png'
import react from '../assets/react.svg'
import express from '../assets/express.jpg'
import redux from '../assets/redux.png'
import mui from '../assets/mui.jpg'
import next from '../assets/nextjs.png'
import bootstrap from '../assets/bootstrap.png'
import Tailwend from '../assets/tailwind.webp'
import Git from '../assets/git-icon-logo.png'
import GitHub from '../assets/GitHub-Mark.png'
import Netlify from '../assets/netlify.png'
import Vercel from '../assets/vercel.jpg'
import Vs from '../assets/vs_code.png'
import Postman from '../assets/postman-icon.svg'
import Figma from '../assets/figma.png'
import Photo from '../assets/photoshop.png'

const Skill = () => {
  return (
    <Container className="bg-2nd font-inter">
      <h3 className=' text-white text-4xl font-semibold text-center mb-2'>Skill</h3>
      <p className='text-white text-2xl text-center mb-3' >Here are some of my skills, on which I have worked</p>
      <div className='grid grid-cols-2'>
        <div className='border border-slate-300 hover:border-indigo-300 rounded m-3 p-4'>
          <h4 className=' text-2xl text-center text-color font-bold'>Languages</h4>
          <div className=' grid grid-cols-3 mt-3'>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Html} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>HTML</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Css} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>CSS</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Javascript} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Javascript</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 box-border mr-2 mt-2'>
            <img src={Node} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Node Js</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 box-border mr-2 mt-2'>
            <img src={Wordpress} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Wordpress</h4>
          </div>
          </div>
        </div>
        <div className='border border-slate-300 hover:border-indigo-300 rounded m-3 p-4'>
          <h4 className=' text-2xl text-center text-color font-bold'>Databases & Cloud</h4>
          <div className=' grid grid-cols-3 mt-3'>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Firebase} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>Firebase</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Mongo} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>MongoDB</h4>
          </div>
          </div>
        </div>
        <div className='border border-slate-300 hover:border-indigo-300 rounded m-3 p-4'>
          <h4 className=' text-2xl text-center text-color font-bold'>Libraries</h4>
          <div className=' grid grid-cols-3 mt-3'>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={react} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>React Js</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={express} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Express Js</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={redux} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Redux</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2 mt-2'>
            <img src={mui} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Material UI</h4>
          </div>
          </div>
        </div>
        <div className='border border-slate-300 hover:border-indigo-300 rounded m-3 p-4'>
          <h4 className=' text-2xl text-center text-color font-bold'>Frameworks</h4>
          <div className=' grid grid-cols-3 mt-3'>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={next} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>Next js</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={bootstrap} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Bootstrap</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Tailwend} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Tailwind CSS</h4>
          </div>
          </div>
        </div>
        <div className='border border-slate-300 hover:border-indigo-300 rounded m-3 p-4'>
          <h4 className=' text-2xl text-center text-color font-bold'>Version Control & Deployment</h4>
          <div className=' grid grid-cols-3 mt-3'>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Git} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>Git</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={GitHub} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>GitHub</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Netlify} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Netlify</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2 mt-2'>
            <img src={GitHub} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>GitHub Pages</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2 mt-2'>
            <img src={Vercel} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Vercel</h4>
          </div>
          </div>
        </div>
        <div className='border border-slate-300 hover:border-indigo-300 rounded m-3 p-4'>
          <h4 className=' text-2xl text-center text-color font-bold'>Some More</h4>
          <div className=' grid grid-cols-3 mt-3'>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Vs} className=' h-12 w-10 p-2 rounded'/>
            <h4 className=' text-white mt-3'>VS Code</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Postman} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Postman</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2'>
            <img src={Figma} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Figma</h4>
          </div>
          <div className='border border-slate-300 flex bg-black rounded px-4 mr-2 mt-2'>
            <img src={Photo} className=' h-12 w-10 p-2'/>
            <h4 className=' text-white mt-3'>Photoshop</h4>
          </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Skill