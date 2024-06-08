import React from 'react'
import List from '../List'
import Container from '../Container'
import Button from '../Button'

const Navbar = () => {
  return (
    <div>
      <Container>
      <div className=' bg-primary flex justify-between'>
      <div>
        <h1 className=' font-inter text-4xl text-white font-semibold my-1 pl-3'> Mezan </h1>
      </div>
      <div>
        <ul className=' flex'>
          <List text="About" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
          <List text="Skills" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
          <List text="Experience" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
          <List text="Project" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
          <List text="Contact" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
        </ul>
      </div>
      <div>
        <Button text="Linkedin" className=" my-2 text-white mr-3"/>
      </div>
    </div>
    </Container>
    </div>
  )
}

export default Navbar