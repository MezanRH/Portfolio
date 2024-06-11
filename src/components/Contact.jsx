import React from 'react'
import Container from './Container'
import Button from './Button'

const Contact = () => {
  return (
    <Container className="bg-2nd pt-14 md:pt-32 px-3 font-inter">
      <h3 className=' text-white text-2xl md:text-4xl font-semibold text-center mb-2 mt-[-3px] md:mt-0'>Contact Me</h3>
      <p className='text-white text-sm md:text-2xl text-center mb-3' >Feel free to reach out to me for any queries</p>
      <div className=' text-center'>
        <h4 className=' text-white mb-4'>Email Me</h4>
        <form >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder=' Your name'
            className=' w-full md:w-[600px] mb-3 rounded bg-primary py-2 text-white text-sm'
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your email'
            className=' w-full md:w-[600px] mb-3 rounded bg-primary py-2 text-white text-sm'
          />
        </div>
        <div>
          <textarea
            id="message"
            name="message"
            placeholder='Your message'
            className=' w-full md:w-[600px] mb-3 rounded bg-primary py-2 text-white text-sm'
          ></textarea>
        </div>
        <Button text="Submit" className=" w-full md:w-[600px] mt-2"/>
      </form>
      </div>
      
    </Container>
  )
}

export default Contact