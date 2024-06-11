// import React from 'react'
// import List from '../List'
// import Container from '../Container'
// import Button from '../Button'

// const Navbar = () => {
//   return (
//     <div>
//       <Container>
//       <div className=' bg-primary flex justify-between'>
//       <div>
//         <h1 className=' font-inter text-4xl text-white font-semibold my-1 pl-3'> Mezan </h1>
//       </div>
//       <div>
//         <ul className=' flex'>
//           <List text="About" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
//           <List text="Skills" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
//           <List text="Experience" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
//           <List text="Project" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
//           <List text="Contact" className=" font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd"/>
//         </ul>
//       </div>
//       <div>
//         <Button text="Linkedin" className=" my-2 text-white mr-3"/>
//       </div>
//     </div>
//     </Container>
//     </div>
//   )
// }

// export default Navbar










// Navbar.js

import React, { useState } from 'react';
import Container from '../Container'
import Button from '../Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-primary">
      <Container className=" mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 font-inter text-2xl md:text-4xl text-white font-semibold my-1 pl-3">Mezan</div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline align-middle">
                <a href="#" className="font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd md:ml-32">About</a>
                <a href="#" className="font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd">Skills</a>
                <a href="#" className="font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd">Project</a>
                <a href="#" className="font-bold text-lg mx-9 mt-2 cursor-pointer text-3rd">Contact</a>
              </div>
            </div>
            <a href="https://www.linkedin.com/in/meaznur-rahaman-2033281b8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwZXh0bgNhZW0CMTAAAR2tb44r4rd31nh40OVXILrYN0ST3_2hRLvBmD18UjXETNRtuot-RiQAAXQ_aem_AQwvBIHe7_S8KTXW4xPVtWsJQ4OkrJXcY5dn0P2hs0gQYuKokxfmwLAXzaO0aNXngzjspoULtCTbl5yfuAf6o6y_">
            <Button text="Linkden" className=" hidden md:block md:ml-96"/>
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Project</a>
            <a href="#" className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
