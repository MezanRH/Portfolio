import React from 'react'

const List = ({className, text}) => {
  return (
    <li className={` text-base font-inter list-none ${className}`}>{text}</li>
  )
}

export default List