import React from 'react'

const Button = ({className, text}) => {
  return (
    <button className={`bg-gradient-to-r from-cyan-500 to-blue-500 px-8 rounded py-1 text-base font-inter ${className}`}>{text}</button>
  )
}

export default Button